import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Formik, Field, Form } from "formik";
import { getCookie } from "cookies-next";

const Login = () => {
  const router = useRouter();

  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          })
            .then((response) => {
              if (response.status === 200) {
                router.push("/");
              } else {
                alert("Authentication error");
              }
            })
            .catch((error) => {
              alert("Unexpected error");
            });
        }}
      >
        <Form>
          <label htmlFor="username">Username</label>
          <Field id="username" name="username" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  if (getCookie("secret", { req, res }) === "helloworld") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
