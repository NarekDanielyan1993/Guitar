const express = require("express");
const router = express.Router();

//MIDDLEWARE
const isAuth = require("../middleware/auth");
const isAdmin = require("../middleware/admin");

//CONTROLLERS
const woodController = require("../controllers/wood");

router.put("/wood", isAuth, isAdmin, woodController.createWood);
router.get("/get_woods", isAuth, woodController.getWoods);

module.exports = router;
