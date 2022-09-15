import cookie from "cookie";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.TOKEN, {
          // live time
          maxAge: 60 * 60,
          // security
          sameSite: "strict",
          // all site
          path: "/",
        })
      );
      res.status(200).json("Success!");
    } else {
      res.status(400).json("Wrong Credentials!");
    }
  }
}
