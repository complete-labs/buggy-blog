import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
  isPremiumContent: boolean
}

const CoverImage = ({ title, src, slug, isPremiumContent }: Props) => {
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
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <div>
            {isPremiumContent && <span className="absolute inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              Premium Content
            </span>}
            <a aria-label={title}>{image}</a>
          </div>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
