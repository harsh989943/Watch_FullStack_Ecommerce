import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h2>Discover Trends</h2>
        <div className="hero-text">
          <p>Fresh Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>New Collection</div>
          <img src={arrow_icon} alt="Arrow Icon" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
