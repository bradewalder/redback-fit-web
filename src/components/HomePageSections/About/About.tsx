import React from "react";
import AboutBackground from "../../../assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src="https://media.gq.com/photos/59e76aaaf964810d9a9b8d2f/16:9/w_2560%2Cc_limit/GQ_50Greatest_final_v2.jpg" alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
        What We Do
        </h1>
        <p className="primary-text">
        We combine the power of wearable technology and advanced analytics to offer athletes personalized insights and predictive tools. 
        </p>
        <p className="primary-text">
        Whether you’re a runner, cyclist, or swimmer, our platform provides the data you need to optimize your training and performance.
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
