const express = require("express");
const registerUser = require("../controller/registerUser");
const checkEmail = require("../controller/checkEmail");

const router = express.Router();

//User Route
router.post("/register", registerUser);
router.post("/email", checkEmail);

module.exports = router;
 