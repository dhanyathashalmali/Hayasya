import React from "react";
import { scroller } from "react-scroll";
import BannerImage from "../Assets/home-banner-image1.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const handleLearnMoreClick = () => {
    scroller.scrollTo("about", {
      smooth: true,
      duration: 500,
      offset: -50,
    });
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Welcome to Hayasya Educational and Medical Charitable Trust
          </h1>
          <p className="primary-text">
            Supporting the underprivileged in their journey towards education,
            skill development, and essential healthcare, empowering them to
            build brighter futures and contribute meaningfully to society.
          </p>
          <div>
            <button onClick={handleLearnMoreClick} className="secondary-button">
              Learn more <FiArrowRight />
            </button>
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
