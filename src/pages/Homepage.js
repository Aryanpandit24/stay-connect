import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import logo from "../assets/logo.png";

function Homepage() {
  const navigate = useNavigate();
  const aboutRef = useRef(null);

  useEffect(() => {
    const logoWrapper = document.querySelector(".home-logo");
    const logoImg = document.querySelector(".home-logo img");

    if (!aboutRef.current) return;

    const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      logoWrapper.classList.add("logo-dark");
      logoImg.classList.add("logo-img-dark");
    } else {
      logoWrapper.classList.remove("logo-dark");
      logoImg.classList.remove("logo-img-dark");
    }
  },
  {
    root: null,
    rootMargin: "-80px 0px -70% 0px",
    threshold: 0,
  }
);


    observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  const elements = document.querySelectorAll(
    ".fade-up, .fade-left, .fade-right, .diamond"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 🔥 Delay animation until scroll frame finishes
          requestAnimationFrame(() => {
            entry.target.classList.add("show");
          });
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);


useEffect(() => {
  requestAnimationFrame(() => {
    document.querySelector(".home-page")?.classList.remove("preload");
  });
}, []);


  return (
    <div className="home-page preload">
      {/* NAVBAR */}
      <header className="home-navbar">
        <div className="home-logo">
          <img src={logo} alt="StayConnect" />
          <span>StayConnect</span>
        </div>

        <div className="home-nav-buttons">
          <button className="nav-btn light" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>
            FIND YOUR PERFECT <br /> HOMESTAY
          </h1>

          <p>
            Discover local stays, trusted hosts, and unforgettable experiences.
          </p>

          <div className="hero-buttons">
            <button
              className="hero-btn primary"
              onClick={() => navigate("/homestays")}
            >
              Explore stays
            </button>

            <button
              className="hero-btn secondary"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section" ref={aboutRef}>
        <div className="about-container">
          <div className="about-text fade-left">
            <h2>About StayConnect</h2>

            <p>
              StayConnect is a modern platform that connects travellers with
              verified homestays, trusted hosts, and nearby local attractions.
              We focus on comfort, safety, and real local experiences rather
              than just hotel rooms.
            </p>

            <p>
              From budget-friendly stays to scenic homestays in the hills,
              StayConnect helps you discover places that feel like home –
              with transparent pricing, trusted reviews, and local guidance.
            </p>
          </div>

          <div className="about-diamonds fade-right">
            <div className="diamond-grid">
              <div className="diamond fade-up">
                <img src={require("../assets/about1.jpg")} alt="stay" />
              </div>
              <div className="diamond">
                <img src={require("../assets/about2.jpg")} alt="stay" />
              </div>
              <div className="diamond">
                <img src={require("../assets/about3.jpg")} alt="stay" />
              </div>
              <div className="diamond">
                <img src={require("../assets/about4.jpg")} alt="stay" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer fade-up">
        <p>© 2026 StayConnect. All rights reserved.</p>
        <p>Email: support@stayconnect.com | Phone: +91 98765 43210</p>
      </footer>
    </div>
  );
}

export default Homepage;
