import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "candidate",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      navigate("/");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />

      <select name="role" onChange={handleChange}>
        <option value="candidate">Candidate</option>
        <option value="recruiter">Recruiter</option>
      </select>

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
