import { Link } from "react-router-dom";

function RecruiterDashboard() {
  return (
    <div>
      <h2>Recruiter Dashboard</h2>
      <Link to="/recruiter/create-job">Create New Job</Link>
    </div>
  );
}

export default RecruiterDashboard;
