import React, { useEffect } from 'react';
import styles from "./HomePage.module.css";
import Home from "../../components/HomePageSections/Home/Home";
import About from "../../components/HomePageSections/About/About";
import Work from "../../components/HomePageSections/Work/Work";
import Testimonial from "../../components/HomePageSections/Testimonial/Testimonial";
import Contact from "../../components/HomePageSections/Contact/Contact";
import Footer from "../../components/HomePageSections/Footer/Footer";

function HomePage() {
  useEffect(() => {
    // Set the body background color when the HomePage mounts
    document.body.style.backgroundColor = '#eecdc7';

    // Reset the background color when the HomePage unmounts
    return () => {
      document.body.style.backgroundColor = '';  // Reset to default or a specific color
    };
  }, []);

  return (
    <div className={styles.App}>
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
