const express = require("express");
const {
  healthCheck,
  addDrink,
  retrieveDrinks
} = require("../controllers/drinks.controller");
const router = express.Router();

router.route("/add-drink").post(addDrink);

router.route("/status-check").get(healthCheck);

router.route("/retrieve-drinks").post(retrieveDrinks);

module.exports = router;
