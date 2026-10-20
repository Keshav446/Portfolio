
import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark"
  );

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <a className="nav-logo" href="#home" onClick={closeMenu}>
        K<span>.</span>
      </a>

      {/* Navigation links */}
      <div
        id="mobile-navigation"
        className={`nav-links ${menuOpen ? "open" : ""}`}
      >
        <a
          className="nav-active"
          href="#home"
          onClick={closeMenu}
        >
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#education" onClick={closeMenu}>
          Experience
        </a>

        <a href="#certificates" onClick={closeMenu}>
          Certifications
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>

      {/* Desktop CTA */}
      <a className="nav-cta" href="#contact">
        Let's Talk <span>↗</span>
      </a>

      {/* Theme toggle - visible on desktop and mobile */}
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"
          } mode`}
        title={`Switch to ${theme === "dark" ? "light" : "dark"
          } mode`}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

      {/* Three-dot menu - mobile only via CSS */}
      <button
        type="button"
        className="nav-menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        {menuOpen ? "×" : "⋮"}
      </button>
    </nav>
  );
}

export default Header;
