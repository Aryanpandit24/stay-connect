import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/admin-login");
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <div className="admin-cards">
        <div className="admin-card">Manage Homestays</div>
        <div className="admin-card">Manage Users</div>
        <div className="admin-card">Manage Bookings</div>
        <div className="admin-card">Platform Analytics</div>
      </div>

      <button className="admin-logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;
