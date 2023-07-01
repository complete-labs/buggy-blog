import cn from 'classnames'
import CustomLink from './custom-link'

type Props = {
  title: string
  src: string
  slug?: string
  premium?: boolean
}

const CoverImage = ({ title, src, slug, premium }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <CustomLink
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          premium={!!premium}
          ariaLabel={title}
        >
          {image}
        </CustomLink>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
