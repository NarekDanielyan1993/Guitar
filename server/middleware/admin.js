const isAdmin = (req, res, next) => {
  if (0 === req.user.role) {
    res.status(200).send("You are not allowed to add brand");
  }
  next();
};

module.exports = isAdmin;
