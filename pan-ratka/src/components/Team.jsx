// src/components/Team.jsx
import React, { useState } from "react";
import "../styles/Team.css";

const Team = () => {
  const [activeTab, setActiveTab] = useState("president");

  const teamMembers = {
    president: {
      name: "Prezes",
      position: "CEO",
      description:
        "Prezes zarządu odpowiedzialny za strategiczny rozwój firmy.",
      img: "/images/man-1867175_1280.jpg",
    },
    hr: {
      name: "HR",
      position: "HR Manager",
      description: "Zajmuje się rekrutacją oraz dbaniem o rozwój pracowników.",
      img: "/images/female-8754474_1280.jpg",
    },
    marketing: {
      name: "Marketing",
      position: "Marketing Manager",
      description:
        "Odpowiedzialny za promocję firmy i tworzenie strategii marketingowych.",
      img: "/images/hunger-413685_1280.jpg",
    },
    designer: {
      name: "Grafik",
      position: "Graphic Designer",
      description:
        "Projektuje materiały wizualne oraz dba o identyfikację wizualną marki.",
      img: "/images/woman-1274361_1280.jpg",
    },
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const { name, position, description, img } = teamMembers[activeTab];

  return (
    <section id="team" className="team">
      <div className="container py-5 text-center">
        <p className="display-3 text-uppercase orange-color mb-0">Zespół</p>
        <p className="py-5">Poznaj nasz zespół profesjonalistów.</p>

        <div className="nav nav-tabs" role="tablist">
          <button
            className={`nav-link ${activeTab === "president" ? "active" : ""}`}
            onClick={() => handleTabClick("president")}
          >
            Prezes
          </button>
          <button
            className={`nav-link ${activeTab === "hr" ? "active" : ""}`}
            onClick={() => handleTabClick("hr")}
          >
            HR
          </button>
          <button
            className={`nav-link ${activeTab === "marketing" ? "active" : ""}`}
            onClick={() => handleTabClick("marketing")}
          >
            Marketing
          </button>
          <button
            className={`nav-link ${activeTab === "designer" ? "active" : ""}`}
            onClick={() => handleTabClick("designer")}
          >
            Grafik
          </button>
        </div>

        <div className="team-details mt-4">
          <img src={img} alt={name} className="team-img" />
          <h4 className="mt-3">{name}</h4>
          <p className="position">{position}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
