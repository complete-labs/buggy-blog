import { NextApiRequest, NextApiResponse } from "next";
import { object, string } from "yup";
import { setCookie } from "cookies-next";

const LoginRequest = object({
  username: string().required(),
  password: string().required(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const body = await LoginRequest.validate(req.body, {
      strict: true,
    });

    if (body.username === "andy" && body.password === "young") {
      setCookie("secret", "helloworld", { req, res, maxAge: 60 * 60 * 24 });
      res.status(200).json({});
    } else {
      res.status(401).json({});
    }
  }
}
