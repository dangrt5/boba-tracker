function signUp(req, res, next) {
  try {
    console.log("signup controller");
    res.json({ status: "hello" });
  } catch (e) {
    next(e);
  }
}

module.exports = { signUp };
