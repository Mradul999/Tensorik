const express = require("express");
const {
  createWebinar,
  registerUserInWebinar,
} = require("../controllers/controller.webinar.js");

const router = express.Router();

router.post("/create-webinar", createWebinar);
router.post("/register-user-in-webinar", registerUserInWebinar);

module.exports = router;
