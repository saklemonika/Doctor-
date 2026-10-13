const Appointments = require("../models/Appointments");
const transporter = require("../config/mail");

exports.createAppointment = async (req, res) => {
  try {
    const { name, email, phone, doctor, date, time, message } = req.body;

    const appointment = await Appointment.create({
      name,
      email,
      phone,
      doctor,
      date,
      time,
      message,
    });

    await transporter.sendMail({
      from: `"Dental Website" <${process.env.EMAIL_USER}>`,
      to: process.env.CLINIC_EMAIL ||process.env.EMAIL_USER,
      subject: "New Appointment Booking",
      html: `
        <h2>New Appointment Booking</h2>
        <p><b>Name:</b> ${name || "N/A"}</p>
        <p><b>Email:</b> ${email || "N/A"}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Doctor:</b> ${doctor || "N/A"}</p>
        <p><b>Date:</b> ${date || "N/A"}</p>
        <p><b>Time:</b> ${time || "N/A"}</p>
        <p><b>Message:</b> ${message || "N/A"}</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully and mail sent to clinic",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

exports.confirmAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: "Confirmed" },
      { new: true }
    );

    res.json({
      success: true,
      message: "Appointment confirmed successfully",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Appointment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};