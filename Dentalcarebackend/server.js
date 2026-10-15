
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

// Frontend URL configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:4173",
      "http://localhost:4174",
      "http://localhost:4175",
      process.env.FRONTEND_URL,
      "https://doctor-three-tawny.vercel.app",
    ].filter(Boolean),
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/appointments", appointmentsRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/team", teamRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err.message));

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
