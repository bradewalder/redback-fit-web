import "./HomePage.css";
import Home from "../../components/HomePageSections/Home/Home";
import About from "../../components/HomePageSections/About/About";
import Work from "../../components/HomePageSections/Work/Work";
import Testimonial from "../../components/HomePageSections/Testimonial/Testimonial";
import Contact from "../../components/HomePageSections/Contact/Conatct";
import Footer from "../../components/HomePageSections/Footer/Footer";
import React from "react";

function HomePage() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;