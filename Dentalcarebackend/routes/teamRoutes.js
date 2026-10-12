const express = require("express");

const {
  createTeam,
  getTeams,
  getSingleTeam,
  updateTeam,
  deleteTeam,
} = require("../controllers/teamController");

const router = express.Router();

router.post("/", createTeam);
router.get("/", getTeams);
router.get("/:id", getSingleTeam);
router.put("/:id", updateTeam);
router.delete("/:id", deleteTeam);

module.exports = router;