const { User } = require("../models/user");

exports.authentication = (req, res) => {
  res.status(200).json({
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    name: req.user.name,
    lastname: req.user.lastname,
    email: req.user.email,
    history: req.user.history,
    card: req.user.card,
    role: req.user.role
  });
};

exports.register = (req, res) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true });
  });
};

exports.login = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "auth failed: email not found"
      });
    }

    user.comparePasswords(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: "Auth failed: Password is incorrect"
        });
      }

      user.generateToken((err, data) => {
        if (err) return res.status(400).send(err);
        return res
          .cookie("w_auth", data.token)
          .status(200)
          .json({ loginSuccess: true, user: data });
      });
    });
  });
};

exports.logout = (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, doc) => {
    if (err) return res.json({ success: false });
    res.status(200).json({ success: true });
  });
};
