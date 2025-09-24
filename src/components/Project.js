// Projects.jsx
import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    { name: "CafeRia", desc: "A Simple and functional POS for a CafeShop (DesktopMode)", link: "https://cafeposbill.netlify.app/" },
    { name: "E-Commerce Store", desc: "A fully functional online store with cart and checkout features", link: "https://riazshopy.netlify.app/" },
    { name: "ListoSylvester", desc: "A Simple Customized Musical App - Listen to your favorite songs", link: "https://listova.netlify.app/" },
  ];

  return (
    <section className="projects">
      <div className="projects-left">
        <h2>Projects</h2>
      </div>
      <div className="projects-right">
        {projects.map((p, i) => (
          <div key={i} className="project-card" style={{ "--i": i }}>
            <div className="project-content">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank" rel="noreferrer">View</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
