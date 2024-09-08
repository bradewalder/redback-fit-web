import React from "react";

const Work = () => {
  const workInfoData = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/6462/6462782.png",
      title: "Predictive Tools Support",
      text: "Utilize VO2 Max, FTP, and Race Prediction models to forecast your performance.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/8062/8062339.png",
      title: "Custom Training Programs",
      text: "Generate personalized training plans based on your unique data and goals. ",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/4882/4882406.png",
      title: "Comprehensive Dashboard",
      text: "Visualize your progress and metrics through an intuitive, user-friendly interface.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Key Features</h1>
        <p className="primary-text">
        Get detailed analysis of your performance in running, cycling, and swimming
        </p>
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