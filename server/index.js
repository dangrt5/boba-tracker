require("dotenv").config();

const express = require("express");
const secretKey = process.env.APIKEY;
const port = process.env.PORT || 5000;
const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-xwu4t.mongodb.net/test?retryWrites=true&w=majority`;

// const mongoPort = 'mongodb://localhost:27017/mydb'

const app = express();

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect((err, db) => {
  if (err) throw err;

  const dbo = db.db("mydb");

  dbo.createCollection("customers", (err, res) => {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

const root = {
  message: () => "Hello World"
};

app.use("/api/retrieve-items", async (req, res, next) => {
  try {
    res.status(200).json({ hi: "hello" });
  } catch (e) {
    return next(e);
  }
});

app.use("/", (req, res, next) => {
  res.status(200).send("<h1>WASAAA THIS IS THE SERVER</h1>");
});

app.listen(port, () => console.log(`currently on port ${port}`));
