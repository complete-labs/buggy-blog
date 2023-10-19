import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import Layout from '../../components/layout';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import PostType from '../../types/post';
import { useSession } from '../../context/SessionProvider';
import { useEffect, useState } from 'react';
import LoginModal from '../../components/login';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, morePosts, preview }: Props) => {
  const { session } = useSession();
  const [showOverlay, setShowOverlay] = useState(false);
  const [loginModalIsOpened, setLoginModalIsOpened] = useState(false);
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  // post is premium and user isn't logged in
  if (post.premium && !session.jwt) {
    return (
      <Layout preview={preview}>
        <Container>
          <Header />
          <article className="mb-32">
            <Head>
              <title>
                {post.title} | Next.js Blog Example with {CMS_NAME}
              </title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>

            <div>
              <LoginModal
                opened={loginModalIsOpened}
                setOpen={setLoginModalIsOpened}
              />

              <div className="w-full justify-center">
                <p className="text-3xl text-center">
                  This is a premium article and is only available to logged in
                  users.
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      setLoginModalIsOpened(true);
                    }}
                    type="button"
                    className="btn-primary mt-5 justify-self-center"
                  >
                    Log in to view
                  </button>
                </div>
              </div>
            </div>
          </article>
        </Container>
      </Layout>
    );
  }

  return (
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
                premium={post.premium}
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
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'premium',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
