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
import {useEffect, useRef, useState} from "react";
import SignInModal from "../../components/sign-in";

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  const blurContainerRef = useRef<HTMLDivElement>(null);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const isUserSignedIn = document.cookie.indexOf('username=admin') >= 0;
    if (post.isPremium && !isUserSignedIn) {
      const paywallElement = document.getElementById("paywall");
      if (paywallElement) {
        paywallElement.style.display = "flex";
      }
      if (blurContainerRef.current) {
        blurContainerRef.current.style.filter = "blur(8px)";
      }
    }
  }, [post.isPremium]);

  const toggleSignInModal = () => {
    setShowSignInModal(!showSignInModal);
  };

  const handleSuccessfulSignIn = () => {
    setIsSignedIn(true);
    if (blurContainerRef.current) {
      blurContainerRef.current.style.filter = "none";
    }
    const paywallElement = document.getElementById("paywall");
    if (paywallElement) {
      paywallElement.style.display = "none";
    }
  };
  return (
    <Layout preview={preview}>
        <div id="paywall" style={{display: 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999, justifyContent: 'center', alignItems: 'center'}}>
          {!showSignInModal ? (
              <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                width: '600px',
                textAlign: 'center',
                fontSize: '36px'
              }}>
                <h2>Unlock Premium Content</h2>
                <button
                    onClick={toggleSignInModal}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#007bff',
                      textDecoration: 'underline',
                      cursor: 'pointer'
                    }}>
                  Sign In
                </button>

              </div>
          ) : (
              <SignInModal onSuccessfulSignIn={handleSuccessfulSignIn} />
          )}
      </div>

      <div id="postContent">
        <Container>
          <Header signedIn={isSignedIn}/>
          {router.isFallback ? (
              <PostTitle>Loading…</PostTitle>
          ) : (
              <>
                <PostHeader
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                    author={post.author}
                />
                <article className="mb-32" ref={blurContainerRef}>
                  <Head>
                    <title>
                      {post.title} | Next.js Blog Example with {CMS_NAME}
                    </title>
                    <meta property="og:image" content={post.ogImage.url} />
                  </Head>
                  <PostBody content={post.content} />
                </article>
              </>
          )}
        </Container>
      </div>
    </Layout>
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
    'isPremium'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
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
