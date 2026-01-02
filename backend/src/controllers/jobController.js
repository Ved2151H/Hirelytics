const Job = require("../models/Job");

// Recruiter creates job
const createJob = async (req, res) => {
  try {
    const job = await Job.create({
      ...req.body,
      createdBy: req.user._id,
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all jobs
const getAllJobs = async (req, res) => {
  const jobs = await Job.find().populate("createdBy", "name email");
  res.status(200).json(jobs);
};

// Get single job
const getJobById = async (req, res) => {
  const job = await Job.findById(req.params.id).populate(
    "createdBy",
    "name email"
  );

  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }

  res.status(200).json(job);
};

module.exports = { createJob, getAllJobs, getJobById };
