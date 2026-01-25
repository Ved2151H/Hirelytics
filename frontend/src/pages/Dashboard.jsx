import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
      navigate("/");
    } else {
      if (role === "recruiter") {
        navigate("/recruiter");
      } else if (role === "candidate") {
        navigate("/candidate");
      }
    }
  }, [navigate]);

  return (
    <div className="dashboard-redirect-container">
      <div className="dashboard-redirect-card">
        <div className="loader"></div>
        <h2>Redirecting</h2>
        <p>Please wait while we take you to your dashboard</p>
      </div>
    </div>
  );
}

export default Dashboard;
