const { Products } = require("../models/product");

exports.createArticle = (req, res) => {
  const products = new Products(req.body);
  products.save((err, product) => {
    if (err)
      return res.status(400).send("failed to store products" + " " + err);
    res.status(200).json({ data: product });
  });
};

exports.fetchProductsBYid = (req, res) => {
  //let type = req.query.type;
  let items = req.query.id.split(",");
  console.log(type + " " + items);
  // if ("array" === type) {
  //   items = ids.map(id => {
  //     return mongoose.Types.ObjectId(id);
  //   });
  // }
  Products.find({ _id: { $in: items } })
    .populate("brand")
    .populate("wood")
    .then(products => {
      if (!products) {
        const error = new Error("Products not found");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).send({ success: true, data: products });
    })
    .catch(err => {
      next(err);
    });
};

exports.fetchArticles = (req, res, next) => {
  const sortBy = req.query.sortBy || "_id";
  const order = req.query.order || "asc";
  const limit = +req.query.limit || 100;
  Products.find()
    .populate("brand")
    .populate("wood")
    .sort([[sortBy, order]])
    .limit(limit)
    .then(products => {
      res.status(200).json({ success: true, articles: products });
    })
    .catch(err => {
      console.log(err);
      const error = new Error();
      error.statusCode = 400;
      next(error);
    });
};
