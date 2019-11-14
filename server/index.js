const express = require("express");
const client = require("./config/mongodb");
const secretKey = process.env.APIKEY;
const routes = require("./routes/index.route");
const port = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const root = {
  message: () => "Hello World"
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", routes);

app.listen(port, () => console.log(`currently on port ${port}`));
