import { MouseEvent, useState } from "react";
import Container from "../components/container";
import Header from "../components/header";
import Input from "../components/input";
import Button from "../components/button";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import { setLocalStorage } from "../hooks/useLocalStorage";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const allowedUser = { username: "Bela Ndrio", password: "123456789" };
  const hasPermission: boolean =
    allowedUser.username === username && allowedUser.password === password;

  const onSubmit = (e: MouseEvent) => {
    e.preventDefault();
    if (hasPermission) {
      setLocalStorage("isAuthenticated", "true");
      router.back();
    } else {
      alert("Username and password not found!");
    }
  };

  return (
    <Layout>
      <Container>
        <Header />
        <h4 className="mb-12 mt-auto text-6xl md:text-8xl font-bold">Login</h4>
        <div className="grid grid-rows-3 gap-y-10 py-3 mb-12 w-1/2">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            name="Submit"
            disabled={!(username && password)}
            onClick={(e) => onSubmit(e)}
          />
        </div>
        <div className="grid grid-rows-3 gap-y-2">
          <h6 className="font-bold"> Test Credentials</h6>
          <h6 className="mb-2"> Username: Bela Ndrio</h6>
          <h6 className="mb-"> Password: 123456789</h6>
        </div>
      </Container>
    </Layout>
  );
};

export default Login;
