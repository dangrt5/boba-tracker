const mongoose = require("mongoose");

// SignUp Schema

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: false
  }
});

User.statics = {
  async findUser(username) {
    const query = { username };
    try {
      return await this.findOne(query);
    } catch (e) {
      return e;
    }
  },

  async addUser(username, password) {
    const query = { username, password };
    try {
      const data = await this.insertOne(query);
      return data;
    } catch (e) {
      return e;
    }
  }
};

module.exports = mongoose.model("users", User);
