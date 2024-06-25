const express = require("express");
const registerUser = require("../controller/registerUser");
const checkEmail = require("../controller/checkEmail");
const checkPassword = require("../controller/checkPassword");
const userDetails = require("../controller/userDetails");

const router = express.Router();

//User Route
router.post("/register", registerUser);
router.post("/email", checkEmail);
router.post("/login", checkPassword);
router.get("/user-details", userDetails);

module.exports = router;
