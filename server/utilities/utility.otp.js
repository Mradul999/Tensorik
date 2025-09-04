const env = require("dotenv");
env.config();

const transporter = require("../services/service.nodemailer.js");

const sendOtp = async (to, subject, otp) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px;">
          <div style="max-width: 500px; margin: auto; background: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #4CAF50; text-align: center;">Your OTP Code</h2>
            <p style="font-size: 16px; color: #333;">Hello,</p>
            <p style="font-size: 16px; color: #333;">Use the following OTP to complete your verification:</p>
            <div style="text-align: center; margin: 20px 0;">
              <span style="font-size: 24px; font-weight: bold; color: #4CAF50; letter-spacing: 3px;">${otp}</span>
            </div>
            <p style="font-size: 14px; color: #666;">This OTP is valid for <strong>5 minutes</strong>. Do not share it with anyone.</p>
            <p style="font-size: 14px; color: #999; text-align: center; margin-top: 30px;">If you did not request this, please ignore this email.</p>
          </div>
        </div>
      `,
    };  

    await transporter.sendMail(mailOptions);

    console.log("otp successfully sent to user");
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendOtp;
