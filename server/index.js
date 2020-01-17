const express = require("express");
const passport = require("passport");
const routes = require("./routes/index.route");
const db = require("./config/mongodb");
const cors = require("cors");
const bodyParser = require("body-parser");
const { join } = require("path");

const port = process.env.PORT || 5000;

const app = express();

app.use(express.static(join(__dirname, "..", "dist")));

// Express Configuration

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());

// Mount the routes

app.use("/api", routes);

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, +"../dist/index.html"));
});

// Listen at certain port

app.listen(port, () => console.log(`currently on port ${port}`));
