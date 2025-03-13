// src/components/Home.jsx
import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
        <p className="display-1">PAN RATKA</p>
        <p className="welcome-text mb5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum.
        </p>
      </div>
    </section>
  );
};

export default Home;
