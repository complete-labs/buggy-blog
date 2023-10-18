import { setCookie } from "cookies-next";
import jsonwebtoken from "jsonwebtoken";

import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password, name } = JSON.parse(req.body);

    // check email+password combination on database
    const createdUserFromDatabase = createUserInDatabase({
      email,
      password,
      name,
    });

    // sign jwt with user storing ID for authorization purposes
    const jwt = jsonwebtoken.sign(
      { id: createdUserFromDatabase.id },
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

const createUserInDatabase = ({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) => {
  // search db and return a user
  return { id: "12345", email, name, dateCreated: new Date() };
};
