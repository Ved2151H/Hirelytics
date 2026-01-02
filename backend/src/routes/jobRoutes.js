const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const { authorizeRoles } = require("../middlewares/roleMiddleware");
const {
  createJob,
  getAllJobs,
  getJobById,
} = require("../controllers/jobController");

const router = express.Router();

// Recruiter-only: create job
router.post("/create", protect, authorizeRoles("recruiter"), createJob);

// Authenticated users: view jobs
router.get("/", protect, getAllJobs);
router.get("/:id", protect, getJobById);

module.exports = router;
