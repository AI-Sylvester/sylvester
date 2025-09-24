// Experience.jsx
import React from "react";
import "./Experience.css";

const Experience = () => {
  const jobs = [
    { role: "Marketing Executive", company: "Sivasakthi Software Service Private Limited", year: "2016 - Present" },
    { role: "Marketing Executive", company: "Smart Interiors", year: "2013 - 2016" },
  ];

  return (
    <section className="experience">
      <div className="experience-left">
        <h2>Experience</h2>
      </div>
      <div className="experience-right">
        {jobs.map((job, i) => (
          <div key={i} className="exp-card" style={{ "--i": i }}>
            <span>{job.year}</span>
            <div className="exp-content">
              <h3>{job.role}</h3>
              <p>{job.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
