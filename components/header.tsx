import Link from 'next/link'
import { parseCookies, destroyCookie } from 'nookies'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  return (
    <nav className='container flex flex-wrap justify-between items-center mx-auto my-4'>
      <h2 className='flex text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight'>
        <Link href='/'>
          <a className='hover:underline'>Blog</a>
        </Link>
        .
      </h2>
      <div>
        {!parseCookies().username ? (
          <Link href='/login'>
            <button className='bg-black text-white px-4 py-2 rounded-md'>
              Login
            </button>
          </Link>
        ) : (
          <button
            className='bg-white text-black border-black border-2 px-4 py-2 rounded-md'
            onClick={() => {
              destroyCookie(null, 'username')
              router.push('/')
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}

export default Header
