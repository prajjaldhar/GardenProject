import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./CardSection.css";

const CardSection = ({ plant }) => {
  // Function to generate stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} style={{ color: "green" }} />);
    }

    // Render half star if needed
    if (halfStar) {
      stars.push(<FaStarHalfAlt key={fullStars} style={{ color: "green" }} />);
    }

    // Render empty stars to fill up to 5 stars
    for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
      stars.push(<FaStar key={i} style={{ color: "green" }} />);
    }

    return stars;
  };

  return (
    <div className="card-container">
      <div className="glassmorphic-effect">
        <img className="plant-image" src={plant.image} alt={plant.plantName} />
        <h2 className="plant-name mt-4">{plant.plantName}</h2>
        <div className="rating text-center">{renderStars(plant.ratings)}</div>
        <p className="plant-price text-center">Price: ${plant.price}</p>{" "}
      </div>
    </div>
  );
};

export default CardSection;
