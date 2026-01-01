const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const { authorizeRoles } = require("../middlewares/roleMiddleware");

const router = express.Router();

// Recruiter-only job creation
router.post(
  "/create",
  protect,
  authorizeRoles("recruiter"),
  (req, res) => {
    res.status(201).json({
      message: "Job created successfully (Recruiter access confirmed)",
      createdBy: req.user.email,
    });
  }
);

module.exports = router;
