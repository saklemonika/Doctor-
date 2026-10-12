const Team = require("../models/TeamModel");

// CREATE TEAM MEMBER
exports.createTeam = async (req, res) => {
  try {
    const { name, role, image, description } = req.body;

    if (!name || !role || !image) {
      return res.status(400).json({
        success: false,
        message: "Name, role and image are required",
      });
    }

    const team = await Team.create({
      name,
      role,
      image,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Team member added successfully",
      data: team,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Team member create error",
      error: error.message,
    });
  }
};

// GET ALL TEAM MEMBERS
exports.getTeams = async (req, res) => {
  try {
    const teams = await Team.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: teams.length,
      data: teams,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Team fetch error",
      error: error.message,
    });
  }
};

// GET SINGLE TEAM MEMBER
exports.getSingleTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);

    if (!team) {
      return res.status(404).json({
        success: false,
        message: "Team member not found",
      });
    }

    res.status(200).json({
      success: true,
      data: team,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Single team fetch error",
      error: error.message,
    });
  }
};

// UPDATE TEAM MEMBER
exports.updateTeam = async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!team) {
      return res.status(404).json({
        success: false,
        message: "Team member not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Team member updated successfully",
      data: team,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Team update error",
      error: error.message,
    });
  }
};

// DELETE TEAM MEMBER
exports.deleteTeam = async (req, res) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.id);

    if (!team) {
      return res.status(404).json({
        success: false,
        message: "Team member not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Team member deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Team delete error",
      error: error.message,
    });
  }
};