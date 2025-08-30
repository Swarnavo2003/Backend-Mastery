import express from "express";
import dotenv from "dotenv";
dotenv.config({ quiet: true });
import session from "express-session";
import passport from "passport";
import "./auth/google.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("<a href='/auth/google'>Login With Google</a>");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/api/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/profile",
    failureRedirect: "/",
  })
);

function authCheck(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}

app.get("/profile", authCheck, (req, res) => {
  res.send(`
    <div>
      <h1>Hello ${req.user.displayName}</h1>
      <img src="${req.user.photos[0].value}">
      <a href="/logout">Logout</a>
    </div>
    `);
});

app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
