import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import PostType from "../types/post";
import Tag from "./tag";

type Props = Omit<PostType, "ogImage" | "content">;

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  flagPremium,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <DateFormatter dateString={date} />
        {flagPremium && <Tag />}
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default PostPreview;
