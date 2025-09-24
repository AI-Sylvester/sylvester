import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-hero">
        {/* Left Side - Intro */}
        <div className="home-intro">
          <h1>
            Hi, I’m <span>AI Sylvester</span>
          </h1>
          <h2>Frontend Developer | React Enthusiast </h2>
          <p>
            I specialize in creating responsive, trendy, and interactive websites
            using React, modern CSS, and best practices.
          </p>
          <a href="/projects" className="home-btn">
            See My Work
          </a>
        </div>

        {/* Right Side - Profile Image */}
        <div className="home-cover">
          <div className="home-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
