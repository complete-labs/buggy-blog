import { useState } from 'react';

const useAuthHandlers = () => {
    const [showSignInModal, setShowSignInModal] = useState(false);
    const [showSignInButton, setShowSignInButton] = useState(true);

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

    return {
        showSignInModal,
        showSignInButton,
        toggleSignInModal,
        handleSuccessfulSignIn,
        handleSignOut,
        setShowSignInButton // in case you want to manually set this from the component
    };
};

export default useAuthHandlers;
