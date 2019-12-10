const Drinks = require("../models/drinks.model");
const createError = require("http-errors");

module.exports = {
  healthCheck: (req, res) => {
    res.json({ status: 200, response: "OK" });
  },

  addDrink: async (req, res, next) => {
    const { name, price, quantity, user } = req.body;

    if (!name || !price || !quantity || !user) {
      return next(createError(500, "Fields are incomplete"));
    }

    const newDrink = new Drinks();
    newDrink.name = name;
    newDrink.price = price;
    newDrink.quantity = quantity;
    newDrink.user = user;

    try {
      await newDrink.save((err, drink) => {
        if (err) {
          return next(createError(500, "error adding new drink to db"));
        }

        res.send({ status: 200, response: `${name} added to db!` });
      });
    } catch (e) {
      return next(createError(400, "Error"));
    }
  },

  retrieveDrinks: async (req, res, next) => {
    const { user } = req.body;
    const query = { user };
    const projection = { name: 1, quantity: 1, price: 1 };
    console.log({ user });

    if (!user) {
      return next(createError(500, "no user inputted"));
    }

    try {
      const allDrinks = await Drinks.find(query, projection);

      res.send({ status: 200, response: allDrinks });
    } catch (e) {
      return next(createError(500, e));
    }
  }
};
