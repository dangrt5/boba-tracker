const Drinks = require("../models/drinks.model");
const createError = require("http-errors");

module.exports = {
  healthCheck: (req, res) => {
    res.json({ status: 200, response: "OK" });
  },

  addDrink: async (req, res, next) => {
    const { drinkName, price, location, user } = req.body;

    if (!drinkName || !price || !location || !user) {
      return next(createError(500, "Fields are incomplete"));
    }

    const newDrink = new Drinks();
    newDrink.drinkName = drinkName;
    newDrink.price = price;
    newDrink.location = location;
    newDrink.user = user;

    try {
      await newDrink.save((err, drink) => {
        if (err) {
          return next(createError("error adding new drink to db"));
        }

        res.send({ status: 200, response: `${drinkName} added to db!` });
      });
    } catch (e) {
      console.log(e);
      return next(createError(500, "error adding new drink to db"));
    }
  },

  retrieveDrinks: async (req, res, next) => {
    const { user } = req.body;
    const query = { user };
    const projection = { name: 1, quantity: 1, price: 1 };

    if (!user) {
      return next(createError(500, "no user inputted"));
    }

    try {
      const allDrinks = await Drinks.find(query);

      res.send({ status: 200, response: allDrinks });
    } catch (e) {
      return next(createError(500, e));
    }
  }
};
