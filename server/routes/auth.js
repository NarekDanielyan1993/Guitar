const express = require("express");
const router = express.Router();

//MIDDLEWARE
const isAuth = require("../middleware/auth");

const authController = require("../controllers/auth");

router.get("/auth", isAuth, authController.authentication);

router.post("/register", isAuth, authController.register);

router.post("/login", isAuth, authController.login);

router.post("/logout", isAuth, authController.logout);

module.exports = router;
