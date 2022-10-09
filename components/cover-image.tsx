import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
  premium: boolean
}

const CoverImage = ({ title, src, slug, premium }: Props) => {
  const image = (
    <div className="relative">
      <img
        src={src}
        alt={`Cover Image for ${title}`}
        className={cn('shadow-small', {
          'hover:shadow-medium transition-shadow duration-200': slug,
        })}
      />

      {premium && <img src="/assets/blog/premium.png" className="absolute top-4 right-4 w-8 h-8" />}
    </div>
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
