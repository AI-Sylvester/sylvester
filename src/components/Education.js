import React from "react";
import "./Education.css";

const Education = () => {
  const data = [
    { year: "2008 - 2011", course: "BCA", place: "Bishop Ambrose College, Coimbatore" },
    { year: "2011 - 2014", course: "MCA", place: "Government Arts College, Coimbatore" },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "SQL", level: 80 },
  ];

  return (
    <section className="education">
      <div className="education-left">
        <h2>Education</h2>

        <div className="skills">
          <h3>Skills</h3>
          <div className="skills-list">
            {skills.map((skill, i) => (
              <div key={i} className="skill">
                <span>{skill.name}</span>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="education-right">
        {data.map((item, i) => (
          <div
            key={i}
            className="timeline-item"
            style={{ "--i": i }}
          >
            <span>{item.year}</span>
            <div className="timeline-content">
              <h3>{item.course}</h3>
              <p>{item.place}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
