import React from "react";
import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  // Inside Header component:
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };
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
        <a href="#education">Experience</a>
        <a href="#contact">Contact</a>
        <a href="#certificates">Certifications</a>
      </div>

      <a className="nav-cta" href="#contact">
        Let's Talk <span>↗</span>
      </a>

      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Header;
