const express = require("express");
const { addUser } = require("../controllers/signup.controller");

const router = express.Router();

router.route("/add-user").post(addUser);

module.exports = router;
