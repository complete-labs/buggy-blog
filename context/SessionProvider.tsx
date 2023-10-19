import { getCookie } from 'cookies-next';

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

// create the type for our context with setSession so we can set alter auth state throughout our app
type SessionContextType = {
  session: { loggedIn: boolean };
  setSession: React.Dispatch<
    React.SetStateAction<{
      loggedIn: boolean;
    }>
  >;
};

export const SessionContext = createContext<SessionContextType>({
  session: { loggedIn: false },
  setSession: () => {},
});

// gets jwt from cookies and specifies if user is logged in
export const getSession = (): {
  loggedIn: boolean;
} => {
  const jwt = getCookie('jwt');

  // force to `true` if it exists and `false` otherwise
  return { loggedIn: !!jwt };
};

// a hook to use in our components
export const useSession = () => {
  const session = useContext(SessionContext);

  return session;
};

// context wrapper for our whole app to use session
const SessionProvider = ({ children }: { children: JSX.Element }) => {
  const [session, setSession] = useState(getSession());

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
