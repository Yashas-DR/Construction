import React from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import cons from "../assets/cons.png";

const Home = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={cons} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Home</p>
        <h1 className="primary-heading">
          Constructions
        </h1>
        <p className="primary-text">
        Keystone Constructors, a premier construction company, is dedicated to excellence in building dreams into reality. With a commitment to quality craftsmanship and innovative solutions, we bring visions to life. Trust Keystone Constructors for your next project, where expertise meets unparalleled dedication to client satisfaction.
        </p>
        
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
        
      </div>
    </div>
    
  );
};

export default Home;