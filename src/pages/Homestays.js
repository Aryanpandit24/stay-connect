import React from "react";
import "./Homestays.css";
import { FiHome, FiFilter } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const stays = [
  { id: 1, name: "Cozy Mountain Homestay", location: "Manali, Himachal Pradesh", price: "₹1,800 / night", rating: 4.8, type: "Entire Home", image: require("../assets/stay1.jpg") },
  { id: 2, name: "Lakeview Stay with Local Host", location: "Nainital, Uttarakhand", price: "₹2,200 / night", rating: 4.6, type: "Private Room", image: require("../assets/stay2.jpg") },
  { id: 3, name: "Heritage Home in Old City", location: "Jaipur, Rajasthan", price: "₹1,500 / night", rating: 4.5, type: "Entire Home", image: require("../assets/stay3.jpg") },
  { id: 4, name: "Beachside Homestay", location: "Goa", price: "₹2,800 / night", rating: 4.9, type: "Studio", image: require("../assets/stay4.jpg") },
  { id: 5, name: "Pine Forest Cottage", location: "Ooty, Tamil Nadu", price: "₹1,900 / night", rating: 4.7, type: "Cottage", image: require("../assets/stay5.jpg") },
  { id: 6, name: "Backwater Lagoon Villa", location: "Alleppey, Kerala", price: "₹3,200 / night", rating: 4.9, type: "Villa", image: require("../assets/stay6.jpg") },
  { id: 7, name: "Urban City Loft", location: "Bengaluru, Karnataka", price: "₹2,000 / night", rating: 4.4, type: "Loft", image: require("../assets/stay7.jpg") },
  { id: 8, name: "Desert Camp Stay", location: "Jaisalmer, Rajasthan", price: "₹2,500 / night", rating: 4.6, type: "Camp", image: require("../assets/stay8.jpg") },
  { id: 9, name: "Tea Garden View House", location: "Munnar, Kerala", price: "₹1,700 / night", rating: 4.5, type: "Entire Home", image: require("../assets/stay9.jpg") },
  { id: 10, name: "Snow Valley Chalet", location: "Gulmarg, Kashmir", price: "₹3,800 / night", rating: 5.0, type: "Chalet", image: require("../assets/stay10.jpg") },
];

function Homestays() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const profilePic =
    user?.photo ||
    "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  return (
    <div className="stays-page">
      {/* <div className="bg-blob1"></div> */}
      {/* <div className="bg-blob2"></div> */}
      <div className="doodle-lines"></div>

      <div className="stays-inner">
        {/* NAVBAR */}
        <nav className="navbar nav-light">
          <div className="logo-area">
            <img
              src={require("../assets/logo-black.png")}
              className="logo-img"
              alt="StayConnect"
            />
            <h1 className="logo-text">StayConnect</h1>
          </div>

          <div className="nav-buttons">
            {!user ? (
              <>
                <Link to="/login" className="nav-btn">Login</Link>
                <Link to="/register" className="nav-btn highlight">Register</Link>
              </>
            ) : (
              <>
                <img
                  src={profilePic}
                  className="nav-profile-pic"
                  alt="Profile"
                  onClick={() => navigate("/profile")}
                  style={{ cursor: "pointer" }}
                />
                <button className="nav-btn logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </nav>

        {/* HEADER */}
        <div className="stays-header">
          <h1><FiHome /> Featured Homestays</h1>
          <p>Handpicked stays from verified hosts – perfect for travellers.</p>
        </div>

        {/* FILTER BUTTON */}
        <div className="filter-btn-wrapper">
          <button className="filter-toggle-btn">
            <FiFilter size={16} /> Filters
          </button>
        </div>

        {/* GRID */}
        <div className="stays-grid">
          {stays.map((stay) => (
            <div key={stay.id} className="tile-container">
              {/* CLIP WRAPPER TO PREVENT OVERFLOW */}
              <div className="card-clip">
                <div
                  className="compact-card"
                  onClick={() => navigate(`/homestays/${stay.id}`)}
                >
                  <img
                    src={stay.image}
                    alt={stay.name}
                    className="stay-thumb"
                  />

                  <div className="stay-hover-info">
                    <h3>{stay.name}</h3>
                    <p>{stay.location}</p>
                    <p className="price">{stay.price}</p>
                    <button className="stay-btn">View Details</button>
                  </div>
                </div>
              </div>

              <p className="stay-title">{stay.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homestays;
