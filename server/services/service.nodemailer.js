const nodemailer = require("nodemailer");
const env = require("dotenv");
env.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
module.exports = transporter;
