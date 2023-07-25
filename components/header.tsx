import Link from 'next/link'
import Login from './login'

const Header = () => {
  return (
    <div className="flex justify-between items-center tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <h2 className="text-2xl md:text-4xl font-bold">
        <Link href="/">
          <a className="hover:underline">Blog</a>
        </Link>
      </h2>
      <Login/>
    </div>
  )
}

export default Header
