import { createContext, useState } from "react";

interface AuthContext {
  isAuthenticated: boolean;
  loginUser: () => void;
  logoutUser: () => void;
}

const defaultAuth = {
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {},
};

export const AuthContext = createContext<AuthContext>(defaultAuth);

export const AuthProvider = ({ children }: { children: any }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginUser = () => {
    setIsAuthenticated(true);
  };

  const logoutUser = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
