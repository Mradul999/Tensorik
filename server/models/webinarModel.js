const mongoose = require("mongoose");

const webinarSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    bannerImage: {
      type: String,
      required: true,
    },
    speaker: {
      type: String,
      required: true,
    },
    isPaid: {
      type: String,

      default: false,
    },
    fee: {
      type: Number,
      default: 0,
    },

    date: {
      type: Date,
      required: true,
    },
    registrationLastDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Webinar = mongoose.model("Webinar", webinarSchema);

module.exports = Webinar;
