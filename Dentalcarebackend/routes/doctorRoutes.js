const express = require("express");

const {
  createDoctor,
  getDoctors,
  getSingleDoctor,
  updateDoctor,
  deleteDoctor,
} = require("../controllers/doctorController");

const router = express.Router();

router.post("/", createDoctor);
router.get("/", getDoctors);
router.get("/:id", getSingleDoctor);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

module.exports = router;