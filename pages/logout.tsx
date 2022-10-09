import { GetServerSideProps } from "next";
import { deleteCookie } from "cookies-next";

const Logout = () => {
  return <></>;
};

export default Logout;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  deleteCookie("secret", { req, res });

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};
