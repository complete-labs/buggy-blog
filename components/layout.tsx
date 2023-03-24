import Alert from './alert';
import Footer from './footer';
import Meta from './meta';
import classNames from 'classnames';
import LoginNav from './login-nav';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
  showPaywall?: boolean;
  excerpt?: string;
};

const Layout = ({ preview, children, showPaywall = false, excerpt }: Props) => {
  return (
    <>
      <Meta />
      <div>
        <Alert preview={preview} />
        {/* {showPaywall && <Overlay excerpt={excerpt} />} */}
        <LoginNav />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
