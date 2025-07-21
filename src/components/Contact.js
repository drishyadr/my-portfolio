import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        Got a project, opportunity, or just want to say hi?  Reach out!
      </p>

      <div className="contact-info">
        <p><a href="mailto:drishyadinojr1824@email.com"><strong>Email</strong> </a></p>
        <p><a href="https://github.com/drishyadr" target="_blank" rel="noopener noreferrer"><strong>GitHub</strong></a></p>
        <p><a href="https://www.linkedin.com/in/drishyadr/" target="_blank" rel="noopener noreferrer"><strong>LinkedIn</strong> </a></p>
      </div>

      {/* Optional Form */}
      {/* 
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      */}
    </div>
  );
}
