const express = require("express");
const gql = require("nanographql");
const expressGraphql = require("express-graphql");
const serverless = require("serverless-http");
const { post } = require("axios");
const { buildSchema } = require("graphql");
const isProduction = process.env.NODE_ENV !== "development";

const secretKey = process.env.APIKEY;
const port = process.env.PORT || 5000;

const HASURA_TABLE_API = "https://postgres-graphql1.herokuapp.com/v1/graphql";

const app = express();

const schema = buildSchema(`
  type Query {
    message: String
  }
`);

const root = {
  message: () => "Hello World"
};

app.use(
  "/graphql",
  expressGraphql({
    schema,
    rootValue: root,
    graphiql: true
  })
);

app.use("/api/retrieve-items", async (req, res, next) => {
  try {
    const query = gql`
      query MyQuery {
        birthdays {
          birthday
          id
          name
        }
      }
    `;

    const response = await post({
      url: HASURA_TABLE_API,
      headers: {
        "x-hasura-admin-secret": secretKey,
        "content-type": "application/json"
      },
      data: { ...query }
    });

    res.status(200).json(response);
  } catch (e) {
    return next(e);
  }
});

app.use("/", (req, res, next) => {
  res.status(200).send("<h1>WASAAA THIS IS THE SERVER</h1>");
});

app.listen(port, () => console.log(`currently on port ${port}`));

if (isProduction) {
  module.exports.handler = serverless(app);
}
