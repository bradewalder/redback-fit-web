import React from "react";
import Logo from "../../../assets/Logo.svg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img
          src={Logo}
          alt="Logo"
          style={{
            width: '100px',      
            height: '100px',     
            borderRadius: '100%' 
          }}
        />
      </div>

      <div className="navbar-links-container">
        <a href="/">Home</a>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login" className="primary-button">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;

