import { useEffect, useState } from "react";
import "./hero.css";
import profile from "../assets/character_profile.png";
import { TypeAnimation } from "react-type-animation";
import Header from "./Header";
const API_URL = import.meta.env.VITE_API_URL;
const roles = ["MERN Stack Developer", "Frontend Developer", "Problem Solver"];

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <Header />
      <div className="hero-content">
        <div className="hero-text">
          <div className="availability">
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </div>

          <p className="hero-eyebrow">HELLO, WORLD! I'M</p>

          <h1>
            Keshav
            <br />
            <span>Maheshwari.</span>
          </h1>

          <h2 className="hero-role">
            <span className="role-prefix">I'm a </span>

            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                1500,
                "Frontend Developer",
                1500,
                "Problem Solver",
                1500,
              ]}
              speed={50}
              deletionSpeed={65}
              repeat={Infinity}
              className="typed-role"
            />
          </h2>

          <p className="hero-description">
            I build modern, responsive web experiences with clean code and
            thoughtful design. Currently exploring the MERN stack and turning
            ideas into real-world projects.
          </p>

          <div className="hero-meta">
            <span>⌖ India</span>
            <span className="meta-divider" />
            <span>B.Tech Student</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              Explore My Work <span>↗</span>
            </a>

            <details className="cv-dropdown">
              <summary className="download-cv-btn">
                Download CV <span>▾</span>
              </summary>

              <div className="cv-dropdown-menu">
                <a
                  href={`${API_URL}/api/resume/pdf`}
                  className="cv-dropdown-option"
                >
                  <span>PDF Document</span>
                  <span>.PDF ↗</span>
                </a>

                <a
                  href={`${API_URL}/api/resume/docx`}
                  className="cv-dropdown-option"
                >
                  <span>Word Document</span>
                  <span>.DOCX ↗</span>
                </a>
              </div>
            </details>
          </div>

          <div className="hero-socials">
            <span className="social-label">FIND ME ON</span>
            <a
              href="https://github.com/Keshav446"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>
            <a
              href="https://www.linkedin.com/in/keshav-maheshwari-km0404/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a href="mailto:keshavmaheshwari4438@gmail.com" aria-label="Email">
              @
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="profile-card">
            <div className="profile-topline">
              <span>CREATIVE MINDSET</span>
              <span className="profile-dot" />
            </div>

            <img
              src={profile}
              alt="Keshav Maheshwari"
              className="profile-image"
            />

            <div className="profile-caption">
              <span className="caption-line" />
              <div>
                <p>BUILDING THE WEB</p>
                <span>One idea at a time.</span>
              </div>
            </div>
          </div>

          <div className="floating-card floating-card-top">
            <span className="floating-icon">{"</>"}</span>
            <div>
              <strong>Clean Code</strong>
              <p>Built with purpose</p>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <span className="floating-icon">✳</span>
            <div>
              <strong>Always Learning</strong>
              <p>Growing every day</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line" />
        <span>01 / PORTFOLIO</span>
      </div>
    </section>
  );
}

export default Hero;
