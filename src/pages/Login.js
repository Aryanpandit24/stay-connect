import React from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      provider.setCustomParameters({ prompt: "select_account" });

      const result = await signInWithPopup(auth, provider);

      if (!result || !result.user) return;

      const user = result.user;

      // UNIVERSAL PHOTO FIX
      const photo =
        user.photoURL ||
        user.providerData?.[0]?.photoURL ||
        user.reloadUserInfo?.photoUrl ||
        "https://cdn-icons-png.flaticon.com/512/149/149071.png";

      const userData = {
        name: user.displayName || "User",
        email: user.email,
        photo: photo,
      };

      localStorage.setItem("user", JSON.stringify(userData));

      window.location.href = "/homestays";
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") return;
      alert(error.message);
    }
  };

  return (
    <div className="auth-container auth-login-bg">
      <div className="floating-blob"></div>
      <div className="floating-blob"></div>

      <div className="auth-card">
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Login to continue your journey</p>

        <div className="auth-input-wrapper">
          <FiMail className="input-icon" />
          <input type="email" placeholder="Email" className="auth-input" />
        </div>

        <div className="auth-input-wrapper">
          <FiLock className="input-icon" />
          <input type="password" placeholder="Password" className="auth-input" />
        </div>

        <button className="auth-btn">Login</button>

        <button className="google-btn" onClick={handleGoogleLogin}>
          <img src="https://www.svgrepo.com/show/355037/google.svg" className="google-logo" alt="Google" />
          Continue with Google
        </button>

        <p className="auth-bottom-text">
          Don’t have an account? <Link to="/register" className="purple-link">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
