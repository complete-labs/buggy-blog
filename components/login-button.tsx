import { useRouter } from "next/router";
import { setLocalStorage, getLocalStorage } from "../hooks/useLocalStorage";
import Button from "./button";

const LoginButton = () => {
  const router = useRouter();
  const isAuthenticated = getLocalStorage("isAuthenticated");

  const login = () => {
    router.push("/login");
  };

  const logout = () => {
    setLocalStorage("isAuthenticated", "false");
    router.push("/");
  };

  return (
    <Button
      name={isAuthenticated ? "Logout" : "Login"}
      type="button"
      onClick={isAuthenticated ? logout : login}
    />
  );
};

export default LoginButton;
