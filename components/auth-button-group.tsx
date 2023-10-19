import ModalWrapper from "./modal-wrapper";
import SignInModal from "./sign-in";

type AuthButtonGroupProps = {
    showSignInModal: boolean;
    showSignInButton: boolean;
    toggleSignInModal: () => void;
    handleSuccessfulSignIn: () => void;
    handleSignOut: () => void;
};

const AuthButtonGroup: React.FC<AuthButtonGroupProps> = ({
                                                             showSignInModal,
                                                             showSignInButton,
                                                             toggleSignInModal,
                                                             handleSuccessfulSignIn,
                                                             handleSignOut,
                                                         }) => {
    return (
        <>
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
        </>
    );
};

export default AuthButtonGroup;
