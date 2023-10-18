import { setCookie } from "cookies-next";
import jsonwebtoken from "jsonwebtoken";

import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // create jwt with gmail and password logged in
    const { email, password } = JSON.parse(req.body);

    // check email+password combination on database
    const someUserFromDatabase = getUserFromDatabase({ email, password });

    // sign jwt with user storing ID for authorization purposes
    const jwt = jsonwebtoken.sign(
      { id: someUserFromDatabase.id },
      "<SECRET_KEY>",
      {
        // user is logged in for 24 hours
        expiresIn: "24h",
      }
    );
    setCookie("jwt", jwt, { req, res, maxAge: 60 * 60 * 24 });

    return res.send({ success: true });
  } catch (err) {
    // @ts-expect-error
    return res.status(500).send({ success: false, message: err?.message });
  }
};
export default handler;

const getUserFromDatabase = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  // search db and return a user
  return { id: "12345", email, dateCreated: "2023-10-17" };
};
