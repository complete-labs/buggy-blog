import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import { useEffect, useState } from "react";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<string>("false");

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      localStorage.setItem("isLoggedIn", "false");
    }

    setIsLoggedIn(localStorage.getItem("isLoggedIn") as string);
  }, []);

  function toggleLoginStatus() {
    isLoggedIn === "false"
      ? localStorage.setItem("isLoggedIn", "true")
      : localStorage.setItem("isLoggedIn", "false");

    setIsLoggedIn(localStorage.getItem("isLoggedIn") as string);
  }

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro
            toggleLoginStatus={toggleLoginStatus}
            isLoggedIn={isLoggedIn}
          />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              premium={heroPost.premium}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "premium",
  ]);

  return {
    props: { allPosts },
  };
};
