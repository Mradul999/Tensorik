const express = require("express");
const {
  resetPassword,
  confirmReset,
} = require("../controllers/controller.auth.js");

const router = express.Router();

router.post("/reset-password", resetPassword);
router.post("/confirm-reset/", confirmReset);

module.exports = router;
