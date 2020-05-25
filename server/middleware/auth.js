const { User } = require("../models/user");

const auth = (req, res, next) => {
  let token = req.cookies.w_auth;
  User.findByToken(token, function(err, user) {
    if (err) return res.status(400).send(err);
    if (!user)
      return res.json({
        isAuth: false,
        error: true
      });
    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = auth;
