const express = require("express");
const loginRoutes = require("./login.route");
const signUpRoutes = require("./signup.route");

const router = express.Router();

// Setting up middleware on every call

router.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Routes

// router.get("/status-check", (req, res) => res.sendStatus(200).send("OK"));

router.use("/login", loginRoutes);

router.use("/signup", signUpRoutes);

module.exports = router;
