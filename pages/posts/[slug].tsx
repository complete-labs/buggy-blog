import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import PostType from '../../types/post'
import { useEffect, useState } from 'react'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const { premium } = post;
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  

  
  const evaluateAuth = (username: string, password: string) => {
    if (username && username === "foo" && password && password === "bar") {
      return true;
    }
    return false;
  }

  const [loggedIn, setLoggedIn] = useState(false); // read from local storage
  const [user, setUsername] = useState("");
  const [pass, setPassword] = useState("");
  const [logInError, setLoginError] = useState(false);

  const determineLoggedInState = () => {
    if (localStorage.getItem('blog-auth' as string)) {
      const { username, password } = JSON.parse(localStorage.getItem('blog-auth') as string);
      if (username && password) {
        return evaluateAuth(username, password);
      }
    }
    return false;
  }


  useEffect(() => {
    setLoggedIn(determineLoggedInState()); 
  });

  const handleSubmit = () => {
    if (user && pass) {
      const passesAuth = evaluateAuth(user, pass);
      if (passesAuth) {
        localStorage.setItem('blog-auth', JSON.stringify({username: user, password: pass}));
        setLoggedIn(passesAuth);
        setLoginError(false);
      } else {
        setLoginError(true);
      }
    }
  }

  return (
    
    ((premium && loggedIn) || !premium) ? (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
    ) : (
      <form onSubmit={handleSubmit}>
        {
          logInError && (
            <p>Login not valid</p>
          )
        }
        <label>
          UserName:
          <input type="text" name="name" onChange={(e) => setUsername(e.target.value as string)}/>
        </label>
        <label>
          Password:
          <input type="text" name="name" onChange={(e) => setPassword(e.target.value as string)}/>
        </label>
        <input type="submit" value="Submit" / >
      </form>
    )
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'premium'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
