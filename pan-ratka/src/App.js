// src/App.js
import React from "react";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
