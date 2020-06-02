const User = require("../models/users.model");
const sha256 = require("js-sha256");
const createError = require("http-errors");

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne(
      { username, password: sha256(password) },
      (err, user) => {
        if (!user) {
          return next(createError(500, "user not found"));
        }

        return user;
      }
    );

    res.send({ response: user, status: 200 });
  } catch (e) {
    res.sendStatus(400);
  }
};

module.exports = { loginUser };
