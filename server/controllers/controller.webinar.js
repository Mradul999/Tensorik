const Webinar = require("../models/webinarModel.js");
const Registration = require("../models/registrationsModel.js");

const createWebinar = async (req, res) => {
  try {
    const {
      title,
      description,
      date,
      bannerImage,
      speaker,
      isPaid,
      fee,
      registrationLastDate,
    } = req.body;

    if (!title || !date || !registrationLastDate || !bannerImage || !speaker) {
      return res.status(400).json({
        message: "Incompltete Fields!",
      });
    }

    if (isPaid && (fee === undefined || fee <= 0)) {
      return res.status(400).json({
        message: "Fee is required for paid webinars",
      });
    }

    const existingWebinar = await Webinar.findOne({ title, date });

    if (existingWebinar) {
      return res.status(400).json({
        message: "A webinar with this title and date already exists.",
      });
    }

    const newWebinar = new Webinar({
      title,
      description,
      date,
      bannerImage,
      speaker,
      isPaid,
      fee,
      registrationLastDate,
    });

    await newWebinar.save();

    return res.status(201).json({
      message: "Webinar created successfully",
      webinar: newWebinar,
    });
  } catch (error) {
    console.error("Error creating webinar:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

const registerUserInWebinar = async (req, res) => {
  try {
    const { userId, webinarId, name, email, phone, college, transactionId } =
      req.body;

    const webinar = await Webinar.findById(webinarId);
    if (!webinar) {
      return res.status(404).json({ message: "Webinar not found" });
    }

    const existingRegistration = await Registration.findOne({
      userId,
      webinarId,
    });
    if (existingRegistration) {
      return res
        .status(400)
        .json({ message: "User already registered for this webinar" });
    }

    let paymentStatus = "free";
    if (webinar.isPaid) {
      paymentStatus = transactionId ? "success" : "failed";
    }

    const newRegistration = new Registration({
      userId,
      webinarId,
      name,
      email,
      phone,
      college,
      paymentStatus,
      transactionId: transactionId || null,
    });

    await newRegistration.save();

    res.status(201).json({
      message: "Registration successful",
      registration: newRegistration,
    });
  } catch (error) {
    console.error("Error in registerUserInWebinar:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createWebinar,
  registerUserInWebinar,
};
