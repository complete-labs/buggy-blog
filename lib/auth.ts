import { AUTH_KEY, USER_ACCOUNT } from "./constants"

export const logIn = (user: string, pwd: string) => {
  if (USER_ACCOUNT.pwd === pwd && USER_ACCOUNT.username === user) {
    localStorage.setItem(AUTH_KEY, (new Date()).toString());
    return true;
  }
  return false;
}

export const logOut = () => {
  localStorage.removeItem(AUTH_KEY);
}

export const isUserLoggedIn = () => {
  const user = localStorage.getItem(AUTH_KEY);
  return Boolean(user);
}