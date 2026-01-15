import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import CandidateDashboard from "./pages/CandidateDashboard";
import CreateJob from "./pages/CreateJob";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/recruiter" element={<RecruiterDashboard />} />
      <Route path="/candidate" element={<CandidateDashboard />} />
      <Route path="/recruiter/create-job" element={<CreateJob />} />

    </Routes>
  );
}

export default App;
