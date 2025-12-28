const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config(); // MUST be before connectDB()

const app = express();

// Connect DB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "Hirelytics API is running",
    database: "connected"
  });
});

module.exports = app;

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
