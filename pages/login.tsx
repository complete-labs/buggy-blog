import { useState } from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/layout'
import Container from '../components/container';

const PREMIUM_USERS = [
    {'username': 'user', 'password': 'pass'},
];

export default function Login() {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        if (!username || !password) {
            setError('Please enter your username and password.');
            return;
        }

        const user = PREMIUM_USERS.find(user => user.username === username && user.password === password);
        if (user) {
            localStorage.setItem('isUserLoggedIn', 'true');
            router.back();
        } else {
            localStorage.setItem('isUserLoggedIn', 'false');
            setError('Username and password do not match.');
            setUsername('');
            setPassword('');
        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit} className='bg-white p-6 rounded-lg'>
            <h1 className="mb-6 text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
              Login.
            </h1>
                <div className='mb-4'>
                    <label 
                        htmlFor="username" 
                        className="block text-gray-700 font-medium mb-2"
                    >Username</label>
                    <input 
                        className="border border-gray-400 p-2 rounded-lg w-full" 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)}/>
                    <label 
                        htmlFor="password" 
                        className="block text-gray-700 font-medium my-2"
                    >Password</label>
                    <input 
                        className="border border-gray-400 p-2 rounded-lg w-full" 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}/>
                    <button 
                        type="submit" 
                        className="mt-3 bg-black text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
                    >Login</button>
                </div>
                {error && <p style={{'color': 'red'}}>{error}</p>}
            </form>
        </Container>
    )
}

