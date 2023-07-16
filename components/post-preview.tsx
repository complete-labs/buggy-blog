import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import cn from "classnames";
import Author from "../types/author";
import { useSession } from "next-auth/react";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  premium: boolean;
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
  const { data: session } = useSession();
  return (
    <div className="relative">
      {premium && (
        <div className="absolute top-5 right-5 z-10">
          <div className="bg-purple-700 text-white px-2 py-1">Premium</div>
        </div>
      )}
      <div className={cn({ "filter blur-sm": premium && !session })}>
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
        <h3 className="text-3xl mb-3 leading-snug">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </div>
  );
};

export default PostPreview;
