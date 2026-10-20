import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import ProjectFilterSort from "./ProjectFilterSort";
import projects from "../data/projects";
import "./Project.css";

function Projects() {
  const [selectedTech, setSelectedTech] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // Derive unique technologies dynamically
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

  // Filter and sort projects
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

  const displayedProjects =
    selectedTech === "All" && sortBy === "default"
      ? filteredAndSortedProjects.slice(0, 3)
      : filteredAndSortedProjects;

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <span className="projects-eyebrow">
            WHAT I'VE BEEN BUILDING
          </span>

          <h2>
            Featured <span>Projects.</span>
          </h2>

          <p>
            A collection of ideas, experiments, and solutions
            built through code, creativity, and continuous learning.
          </p>
        </div>

        {/* Filter and Sort Controls */}
        <ProjectFilterSort
          technologies={availableTechnologies}
          selectedTech={selectedTech}
          onSelectTech={setSelectedTech}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {displayedProjects.length > 0 ? (
          <div className="projects-grid">
            {displayedProjects.map((project) => (
              <ProjectCard
                key={project.number || project.title}
                project={project}
              />
            ))}
          </div>
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

        <div className="projects-action">
          <Link to="/projects" className="projects-view-all-btn">
            View All Projects <span>↗</span>
          </Link>
        </div>

        <div className="projects-footer">
          <span>MORE IDEAS. MORE CODE. MORE POSSIBILITIES.</span>
          <a
            href="https://github.com/keshav446"
            target="_blank"
            rel="noreferrer"
          >
            Explore GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
