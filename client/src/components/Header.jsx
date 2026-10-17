import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar">
      <a className="nav-logo" href="#home">
        K<span>.</span>
      </a>

      <div className="nav-links">
        <a className="nav-active" href="#home">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a href="#education">Experience</a>
        <a href="#certifications">Certifications</a>
      </div>

      <a className="nav-cta" href="#contact">
        Let's Talk <span>↗</span>
      </a>
    </nav>
  );
}

export default Header;
