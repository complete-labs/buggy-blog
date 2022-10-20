import { getCookie } from "cookies-next";
import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../components/auth_context";
import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import Login from "../../components/login";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import PostTitle from "../../components/post-title";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, morePosts, preview }: Props) => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (getCookie("isAuthenticated") === true) {
      authContext.loginUser();
    } else {
      authContext.logoutUser();
    }
  }, []);

  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
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
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                isPremiumContent={post.isPremiumContent}
              />
              {authContext.isAuthenticated ? (
                <PostBody content={post.content} />
              ) : (
                <div>
                  <PostBody content={post.excerpt} />
                  <h1>To continue to read this article please sign in!</h1>
                  <Login />
                </div>
              )}
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
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "excerpt",
    "isPremiumContent",
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
