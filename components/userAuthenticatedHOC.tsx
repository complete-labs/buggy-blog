import { useRouter } from 'next/router'
import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import { useEffect, useState } from 'react'

type Props = {
  children: JSX.Element,
  freeToView: boolean
}

const UserAuthenticatedHOC = ({ children, freeToView }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter()
  useEffect(() => {
    const user = localStorage.getItem('userAuthenticated');
    setIsLoggedIn(!!user);
  }, [])

  return isLoggedIn || freeToView ? (
    children
  ) : (
    <>
    <h3>Need to be logged in to view blog post</h3>
    <button onClick={() => router.push('/userlogin')}>Log In</button>
    </>
  )
}

export default UserAuthenticatedHOC
