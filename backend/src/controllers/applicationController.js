const Application = require("../models/Application");
const { parseResumeWithAI } = require("../utils/aiService");

// Candidate applies to a job (with resume upload)
const applyToJob = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Resume file is required" });
    }

    // Call AI service
    const aiResult = await parseResumeWithAI(req.file.path);

    const application = await Application.create({
      job: req.params.jobId,
      candidate: req.user._id,
      resume: {
        fileName: req.file.originalname,
        filePath: req.file.path,
      },
      parsedResume: {
        skills: aiResult.skills,
        experienceYears: aiResult.experience_years,
        textLength: aiResult.text_length,
      },
    });

    res.status(201).json(application);
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: "You have already applied to this job" });
    }
    res.status(500).json({ message: error.message });
  }
};


// Recruiter views applications for a job
const getApplicationsForJob = async (req, res) => {
  const applications = await Application.find({
    job: req.params.jobId,
  })
    .populate("candidate", "name email")
    .populate("job", "title");

  res.status(200).json(applications);
};

module.exports = {
  applyToJob,
  getApplicationsForJob,
};
