import { useState } from "react";
import { logIn } from "../lib/auth";
import { USER_ACCOUNT } from "../lib/constants";

export function LogIn(props: { onLogin: (authState: boolean) => any }) {
  const [pwd, setPwd] = useState("");
  const [user, setUser] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const authState = logIn(user, pwd);
        props.onLogin(authState);
      }}
    >
      <input
        placeholder="Your Username"
        className="bg-green-300 p-2"
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        required
      />
      <br />
      <input
        placeholder="Your Password"
        className="bg-green-300 p-2"
        type="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
        required
      />
      <br />
      <button type="submit" className="bg-green-500 p-2">
        log in
      </button>
    </form>
  );
}
