import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import "./ProjectsPage.css";

function ProjectsPage() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div className="projects-page">
      <div className="projects-page-container">
        <div className="projects-page-nav">
          <Link to="/" className="projects-back-link">
            <span>←</span> Back to Portfolio
          </Link>

          <button
            type="button"
            className="projects-page-theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        <header className="projects-page-header">
          <div className="projects-page-heading">
            <span className="projects-eyebrow">
              PORTFOLIO & WORK
            </span>

            <h1>
              All <span>Projects.</span>
            </h1>

            <p>
              A complete showcase of applications, machine-learning solutions, and systems
              I have engineered with passion, modern technologies, and clean code.
            </p>
          </div>
        </header>

        <main className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.number || project.title}
              project={project}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default ProjectsPage;
