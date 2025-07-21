import React from 'react';
import './About.css'; // if you want custom styling
import profileImg from '../images/profile.jpg'; // adjust path as needed

export default function About() {
  return (
    <div id="about" className="about-section">
      <img src={profileImg} alt="Profile" className="profile-img" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I'm Drishya, a passionate computer science student who loves building meaningful tech, 
          learning AI/ML, and creating creative solutions. Whether it’s web development, 
          hackathons, or ambitious projects, I’m always ready to grow and glow. 
        </p>
        <a href="/resume.pdf" download>
          <button className="resume-btn">Download Resume</button>
        </a>
      </div>
    </div>
  );
}
