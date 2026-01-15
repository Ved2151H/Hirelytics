import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  }, []);

  return <h2>Redirecting...</h2>;
}

export default Dashboard;