const client = require("../config/mongodb");

// function signUp(req, res, next) {
//   try {
//     console.log("signup controller");
//     res.json({ status: "hello" });
//   } catch (e) {
//     next(e);
//   }
// }

const addUser = async (req, res, next) => {
  const { username, password } = req.body.data;

  try {
    await client.connect((err, db) => {
      if (err) throw err;

      const dbo = db.db("boba_tracker");
      const credentials = { username, password };
      dbo.collection("users").insertOne(credentials, (err, user) => {
        if (err) throw err;
        res.send({ response: `${username} added to db` });
        db.close();
      });
    });
  } catch (e) {
    res.sendStatus(500);
    return next(e);
  }
};

module.exports = { addUser };
