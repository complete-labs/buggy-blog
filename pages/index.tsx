import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import { useEffect, useState } from 'react'

type Props = {
  allPosts: Post[]
}

type User = {
  name: string
  hasPremiumAccess: boolean
}

const usersFixtures: Record<string, User> = {
  bob: {
    name: 'Bob',
    hasPremiumAccess: false,
  },
  sue: {
    name: 'Sue',
    hasPremiumAccess: true,
  },
}

const Index = ({ allPosts }: Props) => {
  const [user, setUser] = useState<User | null>(null)
  const [name, setName] = useState('')

  const allowedPosts =
    user && user.hasPremiumAccess
      ? allPosts
      : allPosts.filter((post) => !post.premium)

  const heroPost = allowedPosts[0]
  const morePosts = allowedPosts.slice(1)

  const handleLogin = () => {
    /**
     * Testing:
     * - Initial page load only shows one article
     * - Type in "Sue" or "sue" and click "log in". Adds Sue's user data to localStorage, displays all 3 articles
     * - Type in "Bob" or "bob" and click "log in". Adds Bob's user data to localStorage, only displays one article
     * - Type in "Joe" or any other name and click "Log in". Only displays one article
     */
    const userData = usersFixtures[name.toLowerCase()]
    if (userData) {
      localStorage.removeItem('user')
      localStorage.setItem('user', JSON.stringify(user))
      setUser(userData)
    } else {
      localStorage.removeItem('user')
    }
  }

  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value)
  }

  useEffect(() => {
    if (!user) {
      const userItem = localStorage.getItem('user')
      if (userItem) {
        setUser(JSON.parse(userItem))
      }
    }
  }, [])

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {/**
           * Normally I use styled-components to handle my styling, but didn't
           * have time to do much inline here or with tailwind. I'd also like to
           * conditionally show a welcome message and/or conditionally render a log
           * out button as well.
           */}
          <input
            type="text"
            placeholder="username"
            onChange={handleNameChange}
            style={{
              border: '1px solid gray',
            }}
          />
          <button
            style={{
              border: '1px solid black',
              paddingInline: 8,
              borderRadius: 4,
            }}
            onClick={handleLogin}
          >
            Log in
          </button>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'premium',
  ])

  return {
    props: { allPosts },
  }
}
