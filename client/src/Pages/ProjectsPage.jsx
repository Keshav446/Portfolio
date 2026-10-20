import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import ProjectFilterSort from "../components/ProjectFilterSort";
import projects from "../data/projects";
import "./ProjectsPage.css";

function ProjectsPage() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark"
  );
  const [selectedTech, setSelectedTech] = useState("All");
  const [sortBy, setSortBy] = useState("default");

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

  // Derive unique technology options dynamically from project data
  const availableTechnologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach((item) => {
      const list = item.technologies || item.tech || [];
      list.forEach((t) => {
        if (typeof t === "string" && t.trim()) {
          techSet.add(t.trim());
        }
      });
    });
    return Array.from(techSet).sort((a, b) => a.localeCompare(b));
  }, []);

  // Filter and sort projects based on active selection
  const filteredAndSortedProjects = useMemo(() => {
    let list = projects.filter((project) => {
      if (selectedTech === "All") return true;
      const techs = project.technologies || project.tech || [];
      return techs.some(
        (t) => t.trim().toLowerCase() === selectedTech.trim().toLowerCase()
      );
    });

    if (sortBy === "title-asc") {
      list = [...list].sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    } else if (sortBy === "title-desc") {
      list = [...list].sort((a, b) => (b.title || "").localeCompare(a.title || ""));
    }

    return list;
  }, [selectedTech, sortBy]);

  const handleResetFilters = () => {
    setSelectedTech("All");
    setSortBy("default");
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

        {/* Filter and Sort Controls */}
        <ProjectFilterSort
          technologies={availableTechnologies}
          selectedTech={selectedTech}
          onSelectTech={setSelectedTech}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Results grid or empty state */}
        {filteredAndSortedProjects.length > 0 ? (
          <main className="projects-grid">
            {filteredAndSortedProjects.map((project) => (
              <ProjectCard
                key={project.number || project.title}
                project={project}
              />
            ))}
          </main>
        ) : (
          <div className="projects-empty-state" role="status">
            <div className="projects-empty-icon">⚲</div>
            <h3>No matching projects found</h3>
            <p>
              No projects match the technology "<strong>{selectedTech}</strong>".
            </p>
            <button
              type="button"
              className="projects-empty-reset-btn"
              onClick={handleResetFilters}
            >
              Show All Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;
