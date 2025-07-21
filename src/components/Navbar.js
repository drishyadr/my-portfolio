import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">Drishya</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
      <div className="hamburger" onClick={handleToggle}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
