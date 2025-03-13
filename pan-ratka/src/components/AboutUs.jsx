// src/components/AboutUs.jsx
import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <section id="aboutus">
      <div className="container py-5 aboutus-boxes">
        <div className="row text-center">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="aboutus-box m-3 p-4 p-lg-5 border text-dark">
              <h3>JAKOŚĆ</h3>
              <img
                src="/images/quality.jpg"
                alt="Jakość"
                className="aboutus-img"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                voluptates odit laborum commodi eos quaerat ut nihil autem
                tenetur mollitia.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="aboutus-box m-3 p-4 p-lg-5 border text-light bg-dark">
              <h3>KLIENCI</h3>
              <img
                src="/images/clients.jpg"
                alt="Klienci"
                className="aboutus-img"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                voluptates odit laborum commodi eos quaerat ut nihil autem
                tenetur mollitia.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="aboutus-box m-3 p-4 p-lg-5 border text-dark">
              <h3>SPRZĘT</h3>
              <img
                src="/images/equipment.jpg"
                alt="Sprzęt"
                className="aboutus-img"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                voluptates odit laborum commodi eos quaerat ut nihil autem
                tenetur mollitia.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="aboutus-box m-3 p-4 p-lg-5 border text-light bg-dark">
              <h3>CENY</h3>
              <img
                src="/images/prices.jpg"
                alt="Ceny"
                className="aboutus-img"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                voluptates odit laborum commodi eos quaerat ut nihil autem
                tenetur mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
