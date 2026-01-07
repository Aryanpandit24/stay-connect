import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    navigate("/login");
    return null;
  }

  const profilePic =
    user.photoURL ||
    user.photo ||
    user.providerData?.[0]?.photoURL ||
    "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  return (
    <div className="profile-page">

      {/* 🔙 Back Button */}
      <button className="profile-back-btn" onClick={() => navigate(-1)}>
        <FiArrowLeft size={18} />
        Back
      </button>

      <div className="profile-card">
        <img src={profilePic} alt="Profile" className="profile-img" />

        <h2>{user.displayName || "User"}</h2>
        <p>{user.email}</p>

        <span className="provider">
          Logged in via: {user.providerData?.[0]?.providerId || "email"}
        </span>

        <button
          className="profile-btn"
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
