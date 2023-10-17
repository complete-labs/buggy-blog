import { createContext, useContext, useState } from 'react';

const LoggedInContext = createContext({ isLoggedIn: false, toggleLoggedIn: () => {}});

export function useLoggedInContext() {
  return useContext(LoggedInContext);
}


type Props = {
  children: React.ReactNode
}

export function AuthContext({ children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLoggedIn = () => setIsLoggedIn(l => !l);
  return <LoggedInContext.Provider value={{ isLoggedIn, toggleLoggedIn }}>
    {children}
  </LoggedInContext.Provider>
}
