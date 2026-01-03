const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const { authorizeRoles } = require("../middlewares/roleMiddleware");

const {
  applyToJob,
  getApplicationsForJob,
} = require("../controllers/applicationController");

const router = express.Router();



// Recruiter views applications
router.get(
  "/job/:jobId",
  protect,
  authorizeRoles("recruiter"),
  getApplicationsForJob
);

// Resume upload route
const upload = require("../config/upload");
router.post(
  "/apply/:jobId",
  protect,
  authorizeRoles("candidate"),
  upload.single("resume"),
  applyToJob
);


module.exports = router;
