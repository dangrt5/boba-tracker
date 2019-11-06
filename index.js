const express = require("express");
const secretKey = process.env.APIKEY;
const gql = require("nanographql");
const expressGraphql = require("express-graphql");
const { post } = require("axios");
const { buildSchema } = require("graphql");
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
      url: "https://postgres-graphql1.herokuapp.com/v1/graphql",
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

app.listen(port, () => console.log(`currently on port ${port}`));
