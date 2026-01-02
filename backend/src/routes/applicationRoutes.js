const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const { authorizeRoles } = require("../middlewares/roleMiddleware");
const {
  applyToJob,
  getApplicationsForJob,
} = require("../controllers/applicationController");

const router = express.Router();

// Candidate applies to job
router.post(
  "/apply/:jobId",
  protect,
  authorizeRoles("candidate"),
  applyToJob
);

// Recruiter views applications
router.get(
  "/job/:jobId",
  protect,
  authorizeRoles("recruiter"),
  getApplicationsForJob
);

module.exports = router;
