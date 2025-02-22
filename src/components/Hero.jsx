import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>Build Your Professional Resume Effortlessly</h1>
        <p>Choose from expert-designed templates and create your resume in minutes.</p>
        <button className="hero-button"><a href="https://docs.google.com/forms/d/1v96mkY09R1IWQ8-nC0lDz38VFMPIJBgDjjRQxFE28i4/viewform?edit_requested=true">Get Started Now</a></button>
      </div>
    </section>
  );
};

export default Hero;
