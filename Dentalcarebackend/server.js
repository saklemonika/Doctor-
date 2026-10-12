const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const appointmentsRoutes = require("./routes/appointmentsRoutes");
const contactRoutes = require("./routes/contactRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const teamRoutes = require("./routes/teamRoutes");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/appointments", appointmentsRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/team", teamRoutes);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});