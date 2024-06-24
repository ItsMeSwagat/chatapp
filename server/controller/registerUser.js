const UserModel = require("../models/UserModel");
const userModel = require("../models/UserModel");
const bcryptjs = require("bcryptjs");

async function registerUser(req, res, next) {
  try {
    const { name, email, password, profile_pic } = req.body;

    const verifyEmail = await userModel.findOne({ email });

    if (verifyEmail) {
      return res.status(400).json({
        message: "User Already Exists",
        error: true,
      });
    }

    //password hashing
    const salt = await bcryptjs.genSalt(10);
    const haspassword = await bcryptjs.hash(password, salt);

    const payload = {
      name,
      email,
      profile_pic,
      password: haspassword,
    };

    const user = new UserModel(payload);
    const usersave = await user.save();

    return res.status(200).json({
      message: "User registered Successfully",
      data: usersave,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = registerUser;
