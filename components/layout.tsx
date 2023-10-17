import Alert from './alert'
import { AuthContext } from './authContext'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <AuthContext>
      <Meta />
      <div className="min-h-screen">
        <Alert />
        <main>{children}</main>
      </div>
      <Footer />
    </AuthContext>
  )
}

export default Layout
