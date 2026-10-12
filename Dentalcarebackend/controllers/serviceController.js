const Service = require("../models/ServiceModel");

exports.createService = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json({
      success: true,
      message: "Service added successfully",
      data: service,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.json({ success: true, data: services });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getSingleService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.json({
      success: true,
      data: service,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json({
      success: true,
      message: "Service updated successfully",
      data: service,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};