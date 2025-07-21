import React from 'react';
import './Projects.css';

export default function Projects() {
  const projectList = [
    {
      title: "Anonymous Crime Reporting",
      description: "A Flask-based system to report crimes anonymously with emotion detection AI.",
      github: "https://github.com/drishyadr/Anonymous_crime_witness_reporting_system"
      
    },
    {
      title: "DevLink Portfolio",
      description: "A sleek React portfolio to showcase my dev work and skills.",
      github: "https://github.com/drishyadr/my-portfolio",
      demo: "https://drishyadrportfolio.netlify.app/"
    }
  ];

  return (
    <div id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub  </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
