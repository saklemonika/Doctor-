const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default:
        "Experienced specialist focused on advanced treatments, patient comfort, and long-term dental wellness.",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", teamSchema);