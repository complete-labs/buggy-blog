import Author from './author'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  premium?: boolean
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
