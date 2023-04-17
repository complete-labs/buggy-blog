import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";
import { useState, useEffect } from "react";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, morePosts, preview }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<string | undefined>();

  useEffect(() => {
    const isLoggedInValue = localStorage.getItem("isLoggedIn");
    console.log(isLoggedInValue);

    setIsLoggedIn(isLoggedInValue as string);
  }, []);

  function handleLogin() {
    console.log("clicked");
    localStorage.setItem("isLoggedIn", "true");
    location.reload();
  }

  const router = useRouter();
  if (isLoggedIn === "true") {
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
  } else {
    return (
      <>
        <div>Please Login:</div>
        <button onClick={handleLogin}>Login</button>
      </>
    );
  }
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

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
  const posts = getAllPosts(["slug"]);

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
