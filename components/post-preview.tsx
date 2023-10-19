import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import Author from '../types/author';
import PremiumArticleBadge from './premium-badge';
import { useSession } from '../context/SessionProvider';
import { useState } from 'react';

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
  const { session } = useSession();
  const [showOverlay, setShowOverlay] = useState(false);
  const [loginModalIsOpened, setLoginModalIsOpened] = useState(false);

  return (
    <div
      className={`${
        !session.loggedIn && showOverlay && 'cursor-not-allowed relative'
      }`}
      onMouseEnter={() => {
        setShowOverlay(true);
      }}
      onMouseLeave={() => {
        setShowOverlay(false);
      }}
    >
      <div className={`mb-5`}>
        {/* it's a premium article, and we're overing over it, and we're not logged in, so show overlay */}
        {premium && showOverlay && !session.loggedIn && (
          <div
            className="absolute flex items-center	justify-center flex-col"
            style={{
              height: '100%',
              width: '100%',
              background: 'rgb(0,0,0,0.7)',
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
          slug={slug}
          title={title}
          src={coverImage}
          premium={premium}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <span>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </span>
      </h3>
      <div className="text-lg mb-4 flex gap-3">
        <DateFormatter dateString={date} />

        {premium && <PremiumArticleBadge />}
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default PostPreview;
