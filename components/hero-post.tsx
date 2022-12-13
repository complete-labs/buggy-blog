import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../types/author";
import PaidTag from "./paidTag";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  paywall?: boolean;
};

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  paywall = false,
}: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="mb-20 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 md:mb-28">
        <div className="space-y-3">
          <h3 className="text-4xl leading-tight lg:text-6xl">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="text-lg md:mb-0">
            <DateFormatter dateString={date} />
          </div>
          {paywall && <PaidTag />}
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
