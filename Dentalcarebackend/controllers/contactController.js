const Contact = require("../models/Contact");
const transporter = require("../config/mail");

exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    await transporter.sendMail({
      from: `"Dental Website" <${process.env.EMAIL_USER}>`,
      to: process.env.CLINIC_EMAIL||process.env.EMAIL_USER,
      subject: "New Contact Message",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name || "N/A"}</p>
        <p><b>Email:</b> ${email || "N/A"}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Message:</b> ${message || "N/A"}</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully and mail sent to clinic",
      data: contact,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Contact message deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};