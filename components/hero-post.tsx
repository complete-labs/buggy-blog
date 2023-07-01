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

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  premium,
}: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          premium={premium}
          title={title}
          src={coverImage}
          slug={slug}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <CustomLink
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              premium={!!premium}
              className="hover:underline"
            >
              {title}
            </CustomLink>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
          {premium && (
            <div className="mt-4">
              <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                Premium
              </span>
            </div>
          )}
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
