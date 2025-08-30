const Otp = require("../models/otpModel.js");
const User = require("../models/userModel.js");
const bcrypt = require("bcryptjs");
const verifyOtp = async (req, res) => {
  try {
    const { otp, email, password, name } = req.body;

    if (!otp || !email || !password || !name) {
      return res.status(400).json({ msg: "Email and OTP are required" });
    }

    const existingOtp = await Otp.findOne({ email });

    if (!existingOtp) {
      return res.status(404).json({ msg: "OTP not found or expired" });
    }

    if (existingOtp.otp !== otp) {
      return res.status(400).json({ msg: "Invalid OTP" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();

    await Otp.deleteOne({ email });

    return res.status(200).json({ msg: "OTP verified successfully" });
  } catch (error) {
    console.error("OTP Verification Error:", error);
    return res
      .status(500)
      .json({ msg: "Server error during OTP verification" });
  }
};

module.exports = verifyOtp;
