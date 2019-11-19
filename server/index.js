const express = require("express");
const routes = require("./routes/index.route");
const bodyParser = require("body-parser");
const cors = require("cors");
const client = require("./config/mongodb");
const port = process.env.PORT || 5000;
const db = require("./config/mongodb");
const app = express();

// Express Configuration

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Mount the routes

app.use("/api", routes);

// Listen at certain port

app.listen(port, () => console.log(`currently on port ${port}`));
