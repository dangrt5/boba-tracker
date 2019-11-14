function verify(req, res, next) {
  try {
    console.log("verify control");
    res.json({ status: "hell yeah" });
  } catch (e) {
    next(e);
  }
}

module.exports = { verify };
