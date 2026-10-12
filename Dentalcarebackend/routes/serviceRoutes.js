const express = require("express");
const {
  createService,
  getServices,
  getSingleService,
  updateService,
  deleteService,
} = require("../controllers/serviceController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getServices);
router.get("/:id", getSingleService);
router.post("/",  createService);
router.put("/:id",  updateService);
router.delete("/:id",  deleteService);

module.exports = router;