const express = require("express");
const { addUser, findUser } = require("../controllers/signup.controller");

const router = express.Router();

router.route("/add-user").post(addUser);

module.exports = router;
