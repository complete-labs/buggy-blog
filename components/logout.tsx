import React from 'react';
import { useUser } from '../lib/UserContext'; 
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'; 

const LogoutButton = () => {
  const { setUser } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    // Remove the authentication cookie
    Cookies.remove('auth');

    setUser({
      isAuthenticated: false,
      roles: [],
    });
    // Redirect to the home page
    router.push('/');   
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
      Logout
    </button>
  );
};

export default LogoutButton;
