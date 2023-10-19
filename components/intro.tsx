import {CMS_NAME} from "../lib/constants";
import {useEffect, useState} from "react";
import AuthButtonGroup from "./auth-button-group";

const Intro = () => {
    const [showSignInModal, setShowSignInModal] = useState(false);
    const [showSignInButton, setShowSignInButton] = useState(true);

    useEffect(() => {
        const isUserSignedIn = document.cookie.indexOf('username=admin') >= 0;
        setShowSignInButton(!isUserSignedIn);
    }, [showSignInButton]);

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
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                Blog.
            </h1>
            <AuthButtonGroup
                showSignInModal={showSignInModal}
                showSignInButton={showSignInButton}
                toggleSignInModal={toggleSignInModal}
                handleSuccessfulSignIn={handleSuccessfulSignIn}
                handleSignOut={handleSignOut}
            />
            <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
                A statically generated blog example using{' '}
                <a
                    href="https://nextjs.org/"
                    className="underline hover:text-success duration-200 transition-colors"
                >
                    Next.js
                </a>{' '}
                and {CMS_NAME}.
            </h4>
        </section>
    );
};

export default Intro;
