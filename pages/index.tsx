import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import PostType from "../types/post";
import { memo } from "react";

type Props = {
  allPosts: PostType[];
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const { title, coverImage, date, author, slug, excerpt, flagPremium } =
    heroPost;
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={title}
              coverImage={coverImage}
              date={date}
              author={author}
              slug={slug}
              excerpt={excerpt}
              flagPremium={flagPremium}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default memo(Index);

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "flagPremium",
  ]);

  return {
    props: { allPosts },
  };
};
