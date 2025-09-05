const express = require("express");
const { updateProfilePic } = require("../controllers/controller.user.js");

const router = express.Router();

router.post("/update-profile-pic", updateProfilePic);

module.exports = router;
