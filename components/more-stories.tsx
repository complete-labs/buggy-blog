import PostPreview from "./post-preview";
import Post from "../types/post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Stories
      </h2>
      <div className="grid grid-cols-1 mb-32 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
        {posts.map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
