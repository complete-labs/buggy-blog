import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AuthenticateArticleRoute = ({ isPremiumContent = false, children } : {isPremiumContent: boolean; children: JSX.Element}) => {
  const router = useRouter();

  useEffect(() => {
    if(isPremiumContent) {
      console.log("premium route")
      checkLoginStatus();
    } 
  }, []);

  const checkLoginStatus = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo')); // Retrieve the login status from local storage

    if (!userInfo?.isLoggedIn) {
      // If the user is not logged in, redirect to the login page or show a login prompt
      router.push('/login');
    }
  };

  return <>{children}</>;
};

export default AuthenticateArticleRoute;