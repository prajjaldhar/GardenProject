const express = require("express");
const { RegisterController } = require("../controllers/UserController/RegisterController");
const router = express.Router();

router.post("/register", RegisterController);

module.exports = router;
