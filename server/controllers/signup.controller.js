const sha256 = require("js-sha256");
const User = require("../models/users.model");

const addUser = async (req, res, next) => {
  console.log(req.body);
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400);
  }

  const newUser = new User();
  newUser.username = username;
  newUser.password = sha256(password);

  const userFound = await User.findUser(username);

  if (userFound) {
    return res.sendStatus(400);
  }

  await newUser.save((err, user) => {
    if (err) {
      return res.send(err);
    }
    res.json(user);
  });

  // console.log({ response });
};

module.exports = { addUser };
