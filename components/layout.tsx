import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import classNames from 'classnames';

type Props = {
  preview?: boolean
  children: React.ReactNode
  showPaywall?: boolean
  excerpt?: string
}

const Layout = ({ preview, children, showPaywall=false, excerpt }: Props) => {
  return (
    <>
      <Meta />
      <div className={classNames({'overflow-hidden h-14' :showPaywall, 'overscroll-auto': !showPaywall})}>
        <Alert preview={preview} />
        {/* {showPaywall && <Overlay excerpt={excerpt} />} */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
