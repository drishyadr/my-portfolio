import React from 'react';
import './Skills.css';

export default function Skills() {
  const skills = {
    "Frontend": ["HTML", "CSS", "JavaScript"],
    "Backend": ["Python", "Flask"],
    "Database": ["MySQL"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code"]
  };

  return (
    <div id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {Object.keys(skills).map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category}</h3>
            <ul>
              {skills[category].map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
