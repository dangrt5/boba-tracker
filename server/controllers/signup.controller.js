const sha256 = require("js-sha256");
const User = require("../models/signup.model");

const findUser = async (req, res) => {
  const { username } = req.body.data;

  const response = await User.findUser(username);

  if (!response) {
    return res.json({ user: false });
  }

  res.json({ user: true });
};

const addUser = async (req, res, next) => {
  const { username, password } = req.body.data;

  if (!username || !password) {
    return res.status(400);
  }

  const newUser = new User();
  newUser.username = username;
  newUser.password = sha256(password);

  await newUser.save((err, user) => {
    if (err) {
      return res.send(err);
    }
    res.send(`${user} saved to db`);
  });

  // console.log({ response });
};

module.exports = { findUser, addUser };
