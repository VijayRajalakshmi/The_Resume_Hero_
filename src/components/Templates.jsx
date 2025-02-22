import React, { useState } from "react";
import "../styles/Templates.css"; // Import styles

// Import images from assets
import ResumeTemplate from "../assets/resume-template.png";
import CoverLetterTemplate from "../assets/cover-letter-template.png";
import EuropassTemplate from "../assets/europass-template.png";
import ManagerTemplate from "../assets/manager-template.png";

const templates = [
  { id: 1, name: "Resume Template", img: ResumeTemplate },
  { id: 2, name: "Cover Letter Template", img: CoverLetterTemplate },
  { id: 3, name: "Europass", img: EuropassTemplate },
  { id: 4, name: "Manager Level Template", img: ManagerTemplate },
];

const Templates = () => {
  const [zoomedTemplate, setZoomedTemplate] = useState(null);

  const handleZoom = (id) => {
    setZoomedTemplate(zoomedTemplate === id ? null : id);
  };

  return (
    <div className="templates-container">
      <h1>Templates</h1>
      <h4>Choose Your Template</h4>
      <div className="templates-grid">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`template-card ${zoomedTemplate === template.id ? "zoomed" : ""}`}
            onClick={() => handleZoom(template.id)}
          >
            <img src={template.img} alt={template.name} />
            <p>{template.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
