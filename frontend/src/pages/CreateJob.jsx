import { useState } from "react";
import API from "../services/api";

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
      skills: job.skills.split(",").map(s => s.trim()),
      experienceLevel: job.experienceLevel,
      location: job.location,
      jobType: job.jobType,
      salaryRange: {
        min: Number(job.salaryMin),
        max: Number(job.salaryMax),
      }
    };

    console.log("Sending payload:", payload);

    const res = await API.post("/jobs", payload);
    console.log("Backend response:", res.data);

    alert("Job created successfully");
  } catch (err) {
    console.log("FULL ERROR:", err);
    console.log("STATUS:", err.response?.status);
    console.log("DATA:", err.response?.data);
    alert("Job creation failed");
  }
};


//       await API.post("/jobs", payload);
//       alert("Job created successfully");
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       alert("Job creation failed");
//     }
//   };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Job</h2>

      <input name="title" placeholder="Job Title" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
      <input name="skills" placeholder="Skills (comma separated)" onChange={handleChange} />
      <input name="experienceLevel" placeholder="Experience Level (junior/mid/senior)" onChange={handleChange} />
      <input name="location" placeholder="Location" onChange={handleChange} />
      <input name="jobType" placeholder="Job Type (full-time/part-time)" onChange={handleChange} />

      <input name="salaryMin" placeholder="Salary Min" onChange={handleChange} />
      <input name="salaryMax" placeholder="Salary Max" onChange={handleChange} />

      <button type="submit">Create Job</button>
    </form>
  );
}

export default CreateJob;
