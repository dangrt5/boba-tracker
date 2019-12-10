const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: false
  },
  drinks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Drinks" }]
});

User.statics = {
  async findUser(username, password) {
    const query = { username, password };

    try {
      return await this.findOne(query);
    } catch (e) {
      return e;
    }
  },

  async loginUser(username, password) {
    const query = { username, password };
    try {
      return await this.findOne(query, { username, password });
    } catch (e) {
      return e;
    }
  },

  async addUser(username, password) {
    const query = { username, password };
    try {
      const user = await this.findOne(query);

      console.log({ user });
      return user;
      // const data = await this.insertOne(query);
      // return data;
    } catch (e) {
      return e;
    }
  }
};

module.exports = mongoose.model("users", User);
