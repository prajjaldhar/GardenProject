const express = require("express");
const {
  RegisterController,
} = require("../controllers/UserController/RegisterController");
const {
  LoginController,
} = require("../controllers/UserController/LoginController");
const authmiddleware = require("../middlewares/authmiddlewares");
const router = express.Router();

router.post("/register", RegisterController);
router.post("/login", LoginController);
router.post("/getuserdata", authmiddleware, authController);

module.exports = router;
