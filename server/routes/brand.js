const express = require("express");
const router = express.Router();

//MIDDLEWARE
const isAuth = require("../middleware/auth");
const isAdmin = require("../middleware/admin");

//CONTROLLERS
const brandController = require("../controllers/brand");

router.put("/brand", isAuth, isAdmin, brandController.createBrand);
router.get("/get_brands", isAuth, brandController.getBrands);

module.exports = router;
