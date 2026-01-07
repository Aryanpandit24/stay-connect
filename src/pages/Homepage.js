import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Homepage.css";

import logoBlack from "../assets/logo-black.png";
import heroBg from "../assets/hero-bg.jpg";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      {/* NAVBAR */}
      <nav className="home-navbar">
        <div className="home-logo">
          <img src={logoBlack} alt="StayConnect" />
          <span>StayConnect</span>
        </div>

        <div className="home-nav-buttons">
          <Link to="/login" className="nav-btn">Login</Link>
          <Link to="/admin-login" className="nav-btn admin-btn">Admin</Link>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Find Your Perfect Homestay</h1>
          <p>Discover local stays, trusted hosts, and unforgettable experiences.</p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/homestays")}
            >
              Explore Stays
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section">
        <div className="about-container">
          <h2>About StayConnect</h2>
          <p>
            StayConnect is a platform designed to connect travelers with
            comfortable homestays and local experiences. We help tourists
            explore destinations through trusted hosts and authentic stays.
          </p>

          <div className="about-features">
            <div className="feature-card">
              <h3>🏡 Verified Homestays</h3>
              <p>Handpicked stays hosted by trusted local hosts.</p>
            </div>

            <div className="feature-card">
              <h3>🗺️ Local Insights</h3>
              <p>Discover nearby attractions recommended by locals.</p>
            </div>

            <div className="feature-card">
              <h3>🔐 Secure Booking</h3>
              <p>Safe and easy booking with verified users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h3>StayConnect</h3>
            <p>
              Your trusted companion for homestays and travel experiences
              across India.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/homestays">Homestays</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>Email: support@stayconnect.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 StayConnect. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default Homepage;
