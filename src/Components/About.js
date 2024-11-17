import React from "react";
import AboutBackgroundImage from "../Assets/about-backgroundImage.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Our trust is a registered public charitable trust formed with the following vission and aims.
        </h1>
        <p className="primary-text">
          To support needy and deserving in their pursuit of getting formal education or acquiring skills to get empowered and to contribute meaningfully to the betterment of the society.
        </p>
        <p className="primary-text">
          To help the underprivileged and needy to meet with their medical needs to the extent possible.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
