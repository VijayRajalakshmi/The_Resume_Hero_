import React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa"; // Import icons
import "../styles/Footer.css"; // Create this CSS file for styling

const Footer = () => {
  
  return (
    <footer className="footer-container">
        <h2>Contact Us</h2>
      <div className="footer-content">
        {/* Social Media Links */}
        <div className="footer-social">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon instagram" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="social-icon whatsapp" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon linkedin" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2025 Resume Builder. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
