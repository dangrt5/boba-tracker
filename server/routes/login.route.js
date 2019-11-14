const express = require("express");
const { verify } = require("../controllers/login.controller");

const router = express.Router();

router.route("/").get(verify);

module.exports = router;
