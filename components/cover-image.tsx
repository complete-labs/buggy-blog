import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
  isAuthenticated?: string
}

const CoverImage = ({ title, src, slug, isAuthenticated = 'false' }: Props) => {
  const paywallPath = isAuthenticated == 'true' ? `/posts/${slug}` : `/paywall?post=${slug}`;
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={paywallPath} href={paywallPath}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
