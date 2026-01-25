import "./CSS/CandidateDashboard.css";

function CandidateDashboard() {
  return (
    <div className="candidate-dashboard-container">
      <div className="candidate-dashboard-card">
        <h2>Candidate Dashboard</h2>
        <p className="subtitle">
          Browse available jobs and manage your applications from here
        </p>

        <div className="dashboard-actions">
          <button className="primary-btn">Browse Jobs</button>
          <button className="secondary-btn">My Applications</button>
        </div>
      </div>
    </div>
  );
}

export default CandidateDashboard;
