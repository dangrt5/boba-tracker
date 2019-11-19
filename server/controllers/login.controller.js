const User = require("../models/users.model");
const sha256 = require("js-sha256");

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const response = await User.findUser(username, sha256(password));

    console.log({ response });
  } catch (e) {
    res.sendStatus(400);
  }
};

module.exports = { loginUser };
