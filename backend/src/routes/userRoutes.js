const express = require("express");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// GET logged-in user profile
router.get("/me", protect, (req, res) => {
  res.status(200).json(req.user);
});

module.exports = router;
