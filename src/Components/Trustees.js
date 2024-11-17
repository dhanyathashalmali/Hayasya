import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Trustees = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Trustees</p>
        <h1 className="primary-heading">About the trustees</h1>
      </div>
  
      <div className="trustee-container">
        <div className="testimonial-section-bottom">
          <img src={ProfilePic} alt="Trustee 1" />
          <p>
            A software professional with more than two decades of industry experience and he has been involved in many service oriented organizations.
          </p>
          <h2>Anil Kumar K</h2>
        </div>
        <div className="testimonial-section-bottom">
          <img src={ProfilePic} alt="Trustee 2" />
          <p>
           Auditor in practice, honorary secretary and trustee in many charitable, educational and religious trusts.
          </p>
          <h2>Hayagreeva Achar</h2>
        </div>
        <div className="testimonial-section-bottom">
          <img src={ProfilePic} alt="Trustee 3" />
          <p>
           Director, Prism Books Pvt Ltd. Works with many charitable organizations, especially in the field of primary education.
          </p>
          <h2>Ravi Siravara</h2>
        </div>
      </div>
    </div>
  );
};

export default Trustees;