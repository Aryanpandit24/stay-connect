import React from "react";
import "./StayDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { FiMapPin, FiStar } from "react-icons/fi";

import stay1 from "../assets/stay1.jpg";
import stay2 from "../assets/stay2.jpg";
import stay3 from "../assets/stay3.jpg";
import stay4 from "../assets/stay4.jpg";

// SAME stays data
const stays = [
  {
    id: 1,
    name: "Cozy Mountain Homestay",
    location: "Manali, Himachal Pradesh",
    price: "₹1,800 / night",
    rating: 4.8,
    description:
      "A peaceful mountain stay with wooden interiors, valley view, and fresh local food. Perfect for travellers who love calm and nature.",
    amenities: ["Free WiFi", "Mountain View", "Hot Water", "Home-cooked Food"],
    images: [stay1, stay2, stay3],
  },
  {
    id: 2,
    name: "Lakeview Stay with Local Host",
    location: "Nainital, Uttarakhand",
    price: "₹2,200 / night",
    rating: 4.6,
    description:
      "Calm lakeside property hosted by a friendly local family. Wake up to the sound of water and enjoy a peaceful stay.",
    amenities: ["Lake View", "Breakfast Included", "Parking", "Heater"],
    images: [stay2, stay1, stay4],
  },
  {
    id: 3,
    name: "Heritage Home in Old City",
    location: "Jaipur, Rajasthan",
    price: "₹1,500 / night",
    rating: 4.5,
    description:
      "A 200-year-old restored heritage home in the pink city. Perfect blend of culture, tradition, and modern comfort.",
    amenities: ["AC Room", "Heritage Décor", "24/7 Water", "Local Guide"],
    images: [stay3, stay2, stay4],
  },
  {
    id: 4,
    name: "Beachside Homestay",
    location: "Goa",
    price: "₹2,800 / night",
    rating: 4.9,
    description:
      "Beach just 20 steps away! Relax in a cozy room with sea breeze, coconut trees, and sunsets.",
    amenities: ["Beach Access", "Free WiFi", "Balcony", "Breakfast"],
    images: [stay4, stay1, stay3],
  },
];

function StayDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const stay = stays.find((s) => s.id === Number(id));

  if (!stay) {
    return <h2>Stay not found</h2>;
  }

  return (
    <div className="details-page">

      {/* HERO IMAGE */}
      <div className="details-hero">
        <img src={stay.images[0]} alt={stay.name} className="details-hero-img" />
      </div>

      {/* BACK BUTTON */}
      <button className="back-btn" onClick={() => navigate("/homestays")}>
        ← Back
      </button>

      <div className="details-inner">

        {/* TITLE + META */}
        <h1 className="details-title">{stay.name}</h1>

        <div className="details-location">
          <FiMapPin /> {stay.location}
        </div>

        <div className="details-meta">
          <span className="details-rating">
            <FiStar /> {stay.rating}
          </span>
          <span className="details-price">{stay.price}</span>
        </div>

        {/* IMAGE GALLERY */}
        <div className="details-gallery">
          {stay.images.map((img, index) => (
            <img key={index} src={img} alt="" className="gallery-img" />
          ))}
        </div>

        {/* DESCRIPTION */}
        <p className="details-description">{stay.description}</p>

        {/* AMENITIES */}
        <h3 className="amen-title">Amenities</h3>
        <div className="amenities-grid">
          {stay.amenities.map((a, i) => (
            <div key={i} className="amenity-box">{a}</div>
          ))}
        </div>

        {/* BOOK BUTTON */}
        <button
          className="book-btn"
          onClick={() => navigate(`/book/${stay.id}`)}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default StayDetails;
