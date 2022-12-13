import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import { useCookies } from "react-cookie";

import Container from "../components/container";
import Layout from "../components/layout";
import useInputField from "../hooks/useInputField";

const USERNAME = "admin";
const PASSWORD = "password";

const SignIn = () => {
  const [userName, setUserName] = useInputField();
  const [password, setPassword] = useInputField();
  const router = useRouter();

  const [_, setCookie] = useCookies(["authenticated"]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userName === USERNAME && password == PASSWORD) {
      setCookie("authenticated", true), { path: "/", domain: "localhost:3000" };
      alert("should be set");

      if (router.query.returnUrl) {
        router.replace(router.query.returnUrl as string);
      }
    }
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Sign in to view posts!</title>
        </Head>
        <Container>
          <div className="grid h-screen place-items-center">
            <form
              className="flex flex-col p-16 space-y-4 bg-gray-100 rounded-lg"
              onSubmit={handleSubmit}
            >
              <h1 className="text-3xl">Sign In</h1>
              <input
                className="px-2 py-1 rounded"
                placeholder="email"
                value={userName}
                onChange={setUserName}
              />
              <input
                type="password"
                placeholder="password"
                className="px-2 py-1 rounded"
                value={password}
                onChange={setPassword}
              />
              <button className="p-3 rounded-lg bg-cyan">Submit</button>
            </form>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default SignIn;
