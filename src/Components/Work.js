import React from "react";
import vision from "../Assets/vision.png"
import mission from "../Assets/mission.png"
import medical from "../Assets/medical.png"
const Work = () => {
  const workInfoData = [
    {
      image: vision,
      title: "Education",
      text: "Promoting education by supporting needy students with financial and material aid to help them achieve their aspirations.",
    },
    {
      image: medical,
      title: "Medical",
      text: "In addition to education, the trust aims to support deserving patients with essential medical assistance as much as possible.",
    },
    {
      image: mission,
      title: "Mission",
      text: "To empower talented, deserving students to reach their full potential and become responsible citizens.",
    },
 
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">Vision And Mission Of The Trust</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
