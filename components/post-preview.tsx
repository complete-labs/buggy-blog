import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'
import { useSession } from 'next-auth/react'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  premium: boolean
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  premium,
}: Props) => {
  const {data: session, status} = useSession()
  return (
    <div>
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
        {premium && (!session || status=="loading") && <p>Premium 🔒</p>} 
      </div>
      <p className="text-lg leading-relaxed mb-4">{premium && (!session || status=="loading") ? <p>This content is only available to premium subscribers</p>:(excerpt)}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
  /** used for adding text if article is premium or not, depending on if user is logged in. same with the blurb */
}

export default PostPreview
