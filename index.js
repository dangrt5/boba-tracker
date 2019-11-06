const express = require("express");
const { post } = require("axios");
const secretKey = process.env.APIKEY;
const gql = require("nanographql");
const port = 5000;

const HASURA_TABLE_API = "https://postgres-graphql1.herokuapp.com/v1/graphql";

const app = express();

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

    console.log({ query });

    const response = await post({
      url: "https://postgres-graphql1.herokuapp.com/v1/graphql",
      headers: {
        "x-hasura-admin-secret": secretKey,
        "content-type": "application/json"
      },
      data: { ...query }
    });

    console.log({ response });

    res.status(200).json(response);
  } catch (e) {
    return next(e);
  }
});

app.listen(port, () => console.log(`currently on port ${port}`));
