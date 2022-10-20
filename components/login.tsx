import { setCookie } from "cookies-next";
import { useContext, useState } from "react";
import { AuthContext } from "./auth_context";

const Login = () => {
  // TODO add a check to see if the user is already logged in - don't display the component
  const authContext = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(username, password);

    if (username === "admin" && password === "admin") {
      console.log("Logged in");
      setCookie("isAuthenticated", true);
      authContext.loginUser();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
