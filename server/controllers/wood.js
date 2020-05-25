const { Wood } = require("../models/wood");

exports.createWood = (req, res) => {
  const wood = new Wood(req.body);
  wood.save((err, doc) => {
    if (err) return res.status(400).json({ success: false });
    return res.status(200).json({ success: true, data: doc });
  });
};

exports.getWoods = (req, res) => {
  Wood.find({}, (err, woods) => {
    if (err) return res.status(400).json({ success: false });
    return res.status(200).json({ success: true, data: woods });
  });
};
