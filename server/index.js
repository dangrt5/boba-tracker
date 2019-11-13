require("dotenv").config();

const express = require("express");
const secretKey = process.env.APIKEY;
const port = process.env.PORT || 5000;
const mongo = require("mongodb").MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-xwu4t.mongodb.net/test?retryWrites=true&w=majority`;

const app = express();

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
