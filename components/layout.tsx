import { useRouter } from 'next/router'
import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Cookies from 'js-cookie'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  const router = useRouter()

  const logout = () => {
    Cookies.remove('loggedIn')
    router.push('/')
  }
  return (
    <>
      <Meta />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button onClick={logout}>Logout</button>
      </div>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
