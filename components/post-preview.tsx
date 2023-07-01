import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Author from "../types/author";
import CustomLink from "./custom-link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  premium?: boolean;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  premium,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          premium={premium}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <CustomLink
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          premium={!!premium}
          className="hover:underline"
        >
          {title}
        </CustomLink>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      {premium && (
        <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
          Premium
        </span>
      )}
      <p className="text-lg leading-relaxed my-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default PostPreview;
