import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the dedicated CSS file for the Home page

const Home: React.FC = () => {
  return (
    <section className="hero-container">
      {/* Dark overlay for better contrast */}
      <div className="overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Kavi Raj</h1>
        <p className="hero-subtitle">
          I craft delightful digital experiences with passion and creativity.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="button">
            See My Work
          </Link>
          <Link to="/contact" className="button secondary">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
