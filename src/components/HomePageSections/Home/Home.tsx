import React from "react";
import BannerBackground from "../../../assets/home-banner-background.png";
import Navbar from ".././NavBar/NavBar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Elevate Your Game with Advanced Wearable Tech
          </h1>
          <p className="primary-text">
          Harness advanced data analytics and predictive models to reach your athletic potential across multiple sports disciplines.
          </p>
          <button className="secondary-button">
          Start Your Journey<FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src="https://runningmagazine.ca/wp-content/uploads/2016/11/Morning-Run-Female.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;