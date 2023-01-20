import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function AuthButton() {
    const [buttonText, setButtonText] = useState('Login');

    const router = useRouter();

    useEffect(() => {
      const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
      if (isUserLoggedIn == 'true') {
        setButtonText('Logout');
      } else {
        setButtonText('Login');
      }
    })

    function handleClick() {
      const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
      if (isUserLoggedIn == 'true') {
        localStorage.setItem('isUserLoggedIn', 'false');
        setButtonText('Login');
        router.push('/');
      } else {
        router.push('/login');
      }
    }
    
    return (
      <button 
        className="mt-3 bg-black text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
        onClick={handleClick}
    >{buttonText}</button>
    )
  }