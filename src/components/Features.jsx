import React from "react";
import "../styles/Features.css"; // Make sure to create this CSS file

const Features = () => {
  const features = [
    "Personalized Resume Builder",
    "Customizable Templates",
    "Email & Printing Options",
    "LinkedIn Makeovers",
    "Cover Letter Assistance",
    "Job-Specific Suggestions",
  ];

  return (
    <div className="features-section">
      <div className="cloud"></div> {/* Floating Cloud Animation */}
      <h2>Why Choose Us?</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-box" key={index}>
            ✅ {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
