const express = require("express");
const {
  createAppointment,
  getAppointments,
  confirmAppointment,
  deleteAppointment,
} = require("../controllers/AppointmentsController");



const router = express.Router();

router.post("/", createAppointment);
router.get("/",  getAppointments);
router.put("/confirm/:id", confirmAppointment);
router.delete("/:id", deleteAppointment);

module.exports = router;