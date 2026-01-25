import { useState } from "react";
import API from "../services/api";
import "./CSS/CreateJob.css";

function CreateJob() {
  const [job, setJob] = useState({
    title: "",
    description: "",
    skills: "",
    experienceLevel: "",
    location: "",
    jobType: "",
    salaryMin: "",
    salaryMax: ""
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        title: job.title,
        description: job.description,
        skills: job.skills.split(",").map((s) => s.trim()),
        experienceLevel: job.experienceLevel,
        location: job.location,
        jobType: job.jobType,
        salaryRange: {
          min: Number(job.salaryMin),
          max: Number(job.salaryMax)
        }
      };

      await API.post("/jobs", payload);
      alert("Job created successfully");

      setJob({
        title: "",
        description: "",
        skills: "",
        experienceLevel: "",
        location: "",
        jobType: "",
        salaryMin: "",
        salaryMax: ""
      });
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Job creation failed");
    }
  };

  return (
    <div className="createjob-container">
      <div className="createjob-card">
        <h2>Create Job Posting</h2>
        <p className="subtitle">Fill in the details to publish a new job</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Job Title</label>
            <input
              name="title"
              value={job.title}
              placeholder="Enter job title"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={job.description}
              placeholder="Enter job description"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Skills</label>
              <input
                name="skills"
                value={job.skills}
                placeholder="React, Node, MongoDB"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Experience Level</label>
              <input
                name="experienceLevel"
                value={job.experienceLevel}
                placeholder="Junior / Mid / Senior"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Location</label>
              <input
                name="location"
                value={job.location}
                placeholder="City or Remote"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Job Type</label>
              <input
                name="jobType"
                value={job.jobType}
                placeholder="Full-time / Part-time"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Salary Minimum</label>
              <input
                type="number"
                name="salaryMin"
                value={job.salaryMin}
                placeholder="Minimum salary"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Salary Maximum</label>
              <input
                type="number"
                name="salaryMax"
                value={job.salaryMax}
                placeholder="Maximum salary"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="createjob-btn">
            Create Job
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateJob;
