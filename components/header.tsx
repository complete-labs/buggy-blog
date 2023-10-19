import Link from 'next/link'
import SignInModal from "./sign-in";
import ModalWrapper from "./modal-wrapper";
import {useEffect, useState} from "react";

type Props = {
    signedIn: boolean
}
const Header = ({ signedIn }: Props) => {
    const [showSignInModal, setShowSignInModal] = useState(false);
    const [showSignInButton, setShowSignInButton] = useState(true);

    useEffect(() => {
        const isUserSignedIn = document.cookie.indexOf('username=admin') >= 0;
        setShowSignInButton(!isUserSignedIn);
    }, [signedIn]);

    const toggleSignInModal = () => {
        setShowSignInModal(!showSignInModal);
    };

    const handleSuccessfulSignIn = () => {
        setShowSignInButton(false);
        setShowSignInModal(false);
    };

    const handleSignOut = () => {
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setShowSignInButton(true);
    };
  return (
      <div className="flex justify-between items-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
              <Link href="/">
                  <a className="hover:underline">Blog</a>
              </Link>
              .
          </h2>
          {showSignInButton ? (
              <button id="sign-in-button" className="px-4 py-2 text-xl font-semibold rounded" onClick={toggleSignInModal}>Sign In</button>
          ) : (
              <button id="sign-out-button" className="px-4 py-2 text-xl font-semibold rounded" onClick={handleSignOut}>Sign Out</button>
          )}

          {showSignInModal &&
              <ModalWrapper>
                  <SignInModal onSuccessfulSignIn={handleSuccessfulSignIn} />
              </ModalWrapper>
          }
      </div>
  )
}

export default Header
