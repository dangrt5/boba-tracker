require("dotenv").config();
const mongoose = require("mongoose");
const uri = process.env.DB_URI;
const db = mongoose.connection;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.DB_NAME
});

db.once("open", () => console.log("OPENED"));

db.on("error", err => {
  console.log(`Error in MongoDB connection: ${err}`);
});

db.on("close", () => {
  mongoose.connect(uri, { server: { auto_reconnect: true } });
});

module.exports = db;
