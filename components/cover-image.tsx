import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
  isPremium: boolean
}

const CoverImage = ({ title, src, slug, isPremium }: Props) => {
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
    <div className="sm:mx-0" style={{ position: 'relative' }}>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
      {isPremium && (
        <span style={{ position: 'absolute', top: 4, left: 4, color: 'darkorange' }}>Premium</span>
      )}
    </div>
  )
}

export default CoverImage
