import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

type User = {
  isAuthenticated: boolean;
  roles: string[];
};

type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    isAuthenticated: false,
    roles: [],
  });

  // On component mount, check if a cookie exists and set user state accordingly
  useEffect(() => {
    const cookieValue = Cookies.get('auth');
    if (cookieValue) {
      const parsedValue = JSON.parse(cookieValue);
      setUser(parsedValue);
    }
  }, []);

  // Whenever the user state changes, update the cookie
  useEffect(() => {
    if (user.isAuthenticated) {
      Cookies.set('auth', JSON.stringify(user), { expires: 7 }); // cookie will expire in 7 days
    } else {
      Cookies.remove('auth');
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
