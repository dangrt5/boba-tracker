require("dotenv").config();
const mongoose = require("mongoose");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-xwu4t.mongodb.net/test?retryWrites=true&w=majority`;

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "boba_tracker"
});

const db = mongoose.connection;

db.once("open", () => console.log("OPENED"));

db.on("error", err => {
  console.log(`Error in MongoDB connection: ${err}`);
});

db.on("close", () => {
  mongoose.connect(uri, { server: { auto_reconnect: true } });
});

module.exports = db;
