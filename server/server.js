const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");
const sendOtp = require("./utilities/utility.otp.js");
const Otp = require("./models/otpModel.js");
const User = require("./models/userModel.js");
const jwt = require("jsonwebtoken");

const otpRoutes = require("./routes/routes.otp.js");
const webinarRoutes = require("./routes/routes.webinar.js");

const authRoutes = require("./routes/routes.auth.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// 🔌 Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/signupDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// 👤 User schema

// ➕ Signup Route
app.post("/signup", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  console.log("email from user form", email);

  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({ msg: "Please fill all fields" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ msg: "Passwords do not match" });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ msg: "User already exists" });
  }

  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await sendOtp(email, "Verify your email", otp);

    const newOtp = new Otp({
      otp,
      email,
    });

    await newOtp.save();

    res.status(201).json({ msg: "otp sent successfully" });
  } catch (err) {
    console.error("otp sending error:", err);
    res.status(500).json({ msg: "Error sending otp to user" });
  }
});

// 🔐 Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please fill all fields" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 60 * 60 * 1000,
      path: "/",
    });

    res.status(200).json({
      msg: "Login successful",

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profilePic: user.profilePic,
      },
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

// 🖼 Upload profile picture
app.post("/upload-profile", async (req, res) => {
  const { email, profilePic } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { email },
      { profilePic },
      { new: true }
    );

    res.status(200).json({ msg: "Profile picture updated", user });
  } catch (err) {
    console.error("Upload Error:", err);
    res.status(500).json({ msg: "Upload error" });
  }
});

// ✏️ Edit profile details
app.post("/edit-profile", async (req, res) => {
  const { oldEmail, newName, newEmail } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { email: oldEmail },
      { name: newName, email: newEmail },
      { new: true }
    );

    res.status(200).json({ msg: "Profile updated", user });
  } catch (err) {
    console.error("Edit Profile Error:", err);
    res.status(500).json({ msg: "Error updating profile" });
  }
});

// 🤖 Groq Chat Route - Tara AI
app.post("/api/groq-chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ msg: "Message is required" });
  }

  try {
    const groqResponse = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama3-70b-8192", // or use llama3-70b-8192
        messages: [
          {
            role: "system",
            content:
              "You are Tara 👩‍💻, a helpful, kind, intelligent female AI assistant created by Tensorik.",
          },
          {
            role: "user",
            content: message,
          },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const reply = groqResponse.data.choices[0]?.message?.content;
    res.json({ reply });
  } catch (err) {
    console.error("Groq API Error:", err.response?.data || err.message);
    res.status(500).json({ msg: "Groq API failed", error: err.message });
  }
});

app.use("/otp", otpRoutes);

app.use("/webinar", webinarRoutes);
app.use("/password", authRoutes);

// 🟢 Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});
