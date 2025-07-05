import express from "express";
import userRouter from "./routes/user.routes.js";

const app = express();

function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.use("/api/v1/user", userRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
