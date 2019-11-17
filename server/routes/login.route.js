const express = require("express");
const { login } = require("../controllers/login.controller");
const router = express.Router();

router.route("/").post(login);

module.exports = router;
