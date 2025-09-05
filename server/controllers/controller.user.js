const User = require("../models/userModel.js");

const updateProfilePic = async (req, res) => {
  try {
    const { email, profilePic } = req.body;
    console.log("email profilePic from frontend", email, profilePic);

    if (!email || !profilePic) {
      return res
        .status(400)
        .json({ msg: "Email and profile picture are required" });
    }

    const user = await User.findOneAndUpdate(
      { email },
      { profilePic },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.status(200).json({
      msg: " Profile picture updated successfully",
      user,
    });
  } catch (error) {
    console.error("Error updating profile picture:", error);
    res.status(500).json({ msg: error });
  }
};

module.exports = { updateProfilePic };
