// src/components/Contact.jsx
import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact bg-dark text-light py-5">
      <div className="container text-center py-5">
        <p className="display-3 pb-lg-5 text-uppercase">Napisz do nas!</p>
        <div className="row">{/* Formularz kontaktowy */}</div>
      </div>
    </section>
  );
};

export default Contact;
