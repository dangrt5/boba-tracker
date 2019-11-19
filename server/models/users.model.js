const mongoose = require("mongoose");

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

  async loginUser(username, password) {
    const query = { username, password };
    try {
      return await this.findOne(query, { username, password });
    } catch (e) {
      return e;
    }
  }

  async addUser(username, password) {
    const query = { username, password };
    try {
      const user = await this.findOne({ username: "sjklfjdkfjladsjf" });

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
