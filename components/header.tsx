import { UserContext } from './user-context'
import { useContext } from 'react'

import Cookies from 'universal-cookie'
const cookies = new Cookies();

import Link from 'next/link'

const Header = () => {

  const { user, disableUser } = useContext(UserContext)

  function logOut() {
    disableUser?.()
    cookies.remove('username')
  }

  return (
    <h2 className="header text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">Blog</a>
      </Link>
      
      {user ? (
        <a className="hover:underline" onClick={logOut}>Log Out</a>
        ) : ('')}
    </h2>

  )
}

export default Header
