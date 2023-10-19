import {FC, FormEvent, useState} from "react";

type SignInModalProps = {
    onSuccessfulSignIn: () => void;
}

const SignInModal: FC<SignInModalProps> = ({ onSuccessfulSignIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (event: FormEvent) => {
        event.preventDefault();
        if (username === 'admin' && password === 'admin') {
            document.cookie = `username=${username}; path=/`;
            onSuccessfulSignIn();
        }
    };

    const commonStyles = {
        fontSize: '24px',
        padding: '15px',
        borderRadius: '12px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1)', // Softened shadows
        transition: '0.3s',
    };

    const buttonStyles = {
        ...commonStyles,
        backgroundColor: '#007BFF',
        color: 'white',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#0056b3',
        },
    };

    return (
        <div style={{
            backgroundColor: '#F8F9FA',
            padding: '40px',
            borderRadius: '20px',
            width: '800px',
            textAlign: 'center',
            fontSize: '48px',
            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
        }} id="sign-in-modal">
            <h2 style={{ color: '#343A40' }}>Sign In</h2>
            <form onSubmit={handleSignIn} style={{
                display: 'grid',
                gap: '2rem',
                textAlign: 'left'
            }}>
                <label style={{ fontSize: '24px', color: '#343A40' }}>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={commonStyles} />
                </label>
                <label style={{ fontSize: '24px', color: '#343A40' }}>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={commonStyles} />
                </label>
                <button type="submit" style={buttonStyles}>Submit</button>
            </form>
        </div>
    );

};

export default SignInModal;
