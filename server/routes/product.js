const express = require("express");
const router = express.Router();

//MIDDLEWARE
const isAuth = require("../middleware/auth");
const isAdmin = require("../middleware/admin");

//CONTROLLERS
const productController = require("../controllers/product");

router.get("/article", isAuth, isAdmin, productController.createArticle);
router.get("/get_products_by_id", productController.fetchProductsBYid);
router.get("/get_articles", productController.fetchArticles);

module.exports = router;
