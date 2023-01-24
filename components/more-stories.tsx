import PostPreview from "./post-preview";
import PostType from "../types/post";
import { memo } from "react";

type Props = {
  posts: PostType[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => {
          const {
            slug,
            title,
            coverImage,
            date,
            author,
            excerpt,
            flagPremium,
          } = post;
          return (
            <PostPreview
              key={slug}
              title={title}
              coverImage={coverImage}
              date={date}
              author={author}
              slug={slug}
              excerpt={excerpt}
              flagPremium={flagPremium}
            />
          );
        })}
      </div>
    </section>
  );
};

export default memo(MoreStories)
