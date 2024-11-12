import React from "react";
import BannerImage from "../Assets/home-banner-image1.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import About from "./About";
const Home = () => {
  const [showAbout, setShowAbout] = useState(false);

  const handleLearnMoreClick = () => {
    setShowAbout(!showAbout);
  };
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Welcome to Hayasya Educational and medical charitable trust
          </h1>
          <p className="primary-text">
          Supporting the underprivileged in their journey towards education, skill development, and essential healthcare, empowering them to build brighter future and contribute meaningfully to society.
          </p>
          <div>
          <button onClick={handleLearnMoreClick} className="secondary-button">
            Learn more <FiArrowRight />{" "}
          </button>
            {showAbout && <About />}
          </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
