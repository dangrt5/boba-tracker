const express = require("express");
const loginRoutes = require("./login.route");
const signUpRoutes = require("./signup.route");
const drinkRoutes = require("./drinks.route");

const router = express.Router();

// Setting up middleware on every call

router.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Routes

router.use("/login", loginRoutes);

router.use("/signup", signUpRoutes);

router.use("/drinks", drinkRoutes);

module.exports = router;
