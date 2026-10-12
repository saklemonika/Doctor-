const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: String,
        price: {
      type: String,
      default: "Free",
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema, "services");