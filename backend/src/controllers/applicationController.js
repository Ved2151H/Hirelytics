const Application = require("../models/Application");

// Candidate applies to a job
const applyToJob = async (req, res) => {
  try {
    const application = await Application.create({
      job: req.params.jobId,
      candidate: req.user._id,
      resumeUrl: req.body.resumeUrl,
    });

    res.status(201).json(application);
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: "You have already applied to this job" });
    }
    res.status(400).json({ message: error.message });
  }
};

// Recruiter views applications for their job
const getApplicationsForJob = async (req, res) => {
  const applications = await Application.find({ job: req.params.jobId })
    .populate("candidate", "name email")
    .populate("job", "title");

  res.status(200).json(applications);
};

module.exports = { applyToJob, getApplicationsForJob };
