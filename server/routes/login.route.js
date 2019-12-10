const express = require("express");
const { loginUser } = require("../controllers/login.controller");
const passport = require("passport");
const router = express.Router();

router.route("/").post(loginUser);

module.exports = router;
