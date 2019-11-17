const client = require("../config/mongodb");

const login = async (req, res, next) => {
  try {
    console.log("verify control");

    res.json({ status: "hell yeah" });
  } catch (e) {
    next(e);
  }
};

module.exports = { login };
