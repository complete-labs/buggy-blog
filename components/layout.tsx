import Alert from "./alert"
import Footer from "./footer"
import Meta from "./meta"
import AuthProvider from "../auth/AuthContext"

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <AuthProvider>
        <Meta />
        <div className="min-h-screen">
          <Alert preview={preview} />
          <main>{children}</main>
        </div>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default Layout
