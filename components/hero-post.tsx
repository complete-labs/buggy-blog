import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import Author from '../types/author';
import PremiumArticleBadge from './premium-badge';
import { useSession } from '../context/SessionProvider';
import { useState } from 'react';
import LoginModal from './login';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  premium: boolean;
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
  const { session } = useSession();
  const [showOverlay, setShowOverlay] = useState(false);
  const [loginModalIsOpened, setLoginModalIsOpened] = useState(false);

  return (
    <section
      className={`${
        // post is premium, user isn't logged in, and user is hovering on the article, so disable cursor
        !session.jwt && showOverlay && premium && 'cursor-not-allowed relative'
      }`}
      onMouseEnter={() => {
        setShowOverlay(true);
      }}
      onMouseLeave={() => {
        setShowOverlay(false);
      }}
    >
      <div className={`mb-8 md:mb-16`}>
        <LoginModal
          opened={loginModalIsOpened}
          setOpen={setLoginModalIsOpened}
        />
        {/* show overlay if we're supposed to (if it's premium and is hovered on) AND if user ISNT logged in */}
        {premium && showOverlay && !session.jwt && (
          <div
            className="absolute flex items-center	justify-center flex-col"
            style={{
              height: '100%',
              width: '100%',
              background: 'rgb(0,0,0,0.6)',
            }}
          >
            <p className="text-4xl font-bold text-white">Premium Article</p>
            <button
              onClick={() => {
                setLoginModalIsOpened(true);
              }}
              type="button"
              className="btn-primary mt-5"
            >
              Log in to view
            </button>
          </div>
        )}

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
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>

          <div className="mb-4 md:mb-0 text-lg flex gap-3">
            <DateFormatter dateString={date} />
            <PremiumArticleBadge />
          </div>
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
