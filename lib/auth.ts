import { CookieValueTypes } from "cookies-next";
import { createContext } from "react";

//user hook
interface UserContext {
  user: CookieValueTypes;
  login: () => void;
}
const defaultUserContext = {
  user: undefined,
  login: () => null,
};
export const UserContext = createContext<UserContext>(defaultUserContext);
