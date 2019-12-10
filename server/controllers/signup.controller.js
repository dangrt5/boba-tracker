const sha256 = require("js-sha256");
const User = require("../models/users.model");
const createError = require("http-errors");

const addUser = async (req, res, next) => {
  console.log(req.body);
  const { firstName, username, password } = req.body;

  if (!firstName || !username || !password) {
    return next(createError(500, "Not enough fields inputted"));
  }

  const newUser = new User();
  newUser.firstName = firstName;
  newUser.username = username;
  newUser.password = sha256(password);

  const userFound = await User.findUser(username);

  if (userFound) {
    return next(createError(500, "Username already exists"));
  }

  await newUser.save((err, user) => {
    if (err) {
      return res.send({ response: err, status: 500 });
    }
    res.json(user);
  });

  // console.log({ response });
};

module.exports = { addUser };
