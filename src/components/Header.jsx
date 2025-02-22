import React from "react";
import "../styles/Header.css"; // Create this CSS file
import logo from "../assets/logo.png";
import Instagram from "../assets/Instagram.jpg";
import Whatsapp from "../assets/Whatsapp.jpg";
import CEOImage from "../assets/ceo.jpg"; // 



const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        {/* Logo Section */}
        <div className="logo">
        <img src={logo} alt="Logo" />
          <h1>The Resume Hero</h1>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Templates</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Button Section */}
        <div className="header-right">
        <div className="header-button">
          <button><a href="https://www.instagram.com/the_resume_hero?igsh=N2lqYjh1aXVtejIx">Instagram<img src={Instagram} alt="Instagram" /></a></button>
          <button><a href="https://wa.me/918943027998">Whatsapp<img src={Whatsapp} alt="Whatsapp" /></a></button>
          </div>
        {/* CEO Section */}
        <div className="ceo-info">
          <p className="ceo-name">CEO :Revathy Mohandas</p>
          <img src={CEOImage} alt="CEO" className="ceo-image" />
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
