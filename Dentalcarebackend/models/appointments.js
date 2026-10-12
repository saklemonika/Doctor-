const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    service: String,
    doctor: String,
    date: String,
    time: String,
    message: String,
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("appointments", appointmentSchema);