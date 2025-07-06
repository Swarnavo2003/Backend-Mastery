import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cookieParser(
    "c4efc1c9f803d1c66305c73bfd6615e0ef49dd2945178248d9185502ef7fd151"
  )
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/set-cookies", (req, res) => {
  // res.cookie("token", crypto.randomUUID(), { maxAge: 24 * 60 * 60 * 1000 });
  // res.cookie("theme", "dark");
  res.cookie("age", "21", { signed: true });
  res.send("cookies set");
});

app.get("/get-cookies", (req, res) => {
  //! native method
  // console.log(req.headers.cookie); // token=my-token

  //! using cookie parser
  //console.log(req.cookies); // { token: 'my-token' }

  console.log(req.signedCookies);

  res.send("cookies get");
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});
