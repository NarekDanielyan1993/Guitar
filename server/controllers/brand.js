const { Brand } = require("../models/brand");

exports.createBrand = (req, res) => {
  const brand = new Brand(req.body);
  brand.save((err, doc) => {
    if (err) return res.status(400).json({ success: false });
    return res.status(200).json({ success: true, data: doc });
  });
};

exports.getBrands = (req, res) => {
  Brand.find({}, (err, brands) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, brand: brands });
  });
};
