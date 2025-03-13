// src/components/Navbar.jsx
import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary py-4 fixed-top"
      id="navbar-example"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <i className="bi bi-cash-coin orange-color"></i> Pan-Ratka
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" href="#home">
              Home
            </a>
            <a className="nav-link" href="#aboutus">
              O nas
            </a>
            <a className="nav-link" href="#team">
              Zespół
            </a>
            <a className="nav-link" href="#contact">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
