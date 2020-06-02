const express = require("express");
const { addUser, deleteUser } = require("../controllers/signup.controller");

const router = express.Router();

router.route("/add-user").post(addUser);

router.route("/delete-user").post(deleteUser);

module.exports = router;
