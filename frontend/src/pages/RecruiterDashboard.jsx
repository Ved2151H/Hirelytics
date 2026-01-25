import { Link } from "react-router-dom";
import "./CSS/RecruiterDashboard.css";

function RecruiterDashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>Recruiter Dashboard</h2>
        <p className="dashboard-subtitle">
          Manage job postings and track recruitment activities
        </p>

        <div className="dashboard-actions">
          <Link to="/recruiter/create-job" className="dashboard-btn">
            Create New Job
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecruiterDashboard;
