const env = require("dotenv");
env.config();

const transporter = require("../services/service.nodemailer.js");

const sendResetLink = async (to, subject, resetLink) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px;">
          <div style="max-width: 500px; margin: auto; background: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; text-align: center;">Password Reset Request</h2>
            <p style="font-size: 16px; color: #333;">Hello,</p>
            <p style="font-size: 16px; color: #333;">
              We received a request to reset your password. Click the button below to reset it:
            </p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetLink}" target="_blank" 
                style="display: inline-block; padding: 12px 24px; font-size: 16px; 
                color: #ffffff; background-color: #2563eb; border-radius: 8px; 
                text-decoration: none; font-weight: bold;">
                Reset Password
              </a>
            </div>
            <p style="font-size: 14px; color: #666;">
              This link is valid for <strong>15 minutes</strong>. 
              If you did not request a password reset, you can safely ignore this email.
            </p>
            <p style="font-size: 14px; color: #999; text-align: center; margin-top: 30px;">
              Thank you,<br/>The Support Team
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log("Password reset link successfully sent to user");
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendResetLink;
