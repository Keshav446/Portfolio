import React from "react";

function ProjectFilterSort({
  technologies = [],
  selectedTech = "All",
  onSelectTech,
  sortBy = "default",
  onSortChange,
}) {
  return (
    <div className="projects-controls">
      <div
        className="projects-filter-wrapper"
        role="group"
        aria-label="Filter projects by technology"
      >
        <span className="projects-control-label">Filter:</span>
        <div className="projects-filter-pills">
          <button
            type="button"
            className={`projects-filter-btn ${
              selectedTech === "All" ? "is-active" : ""
            }`}
            onClick={() => onSelectTech("All")}
            aria-pressed={selectedTech === "All"}
          >
            All Technologies
          </button>

          {technologies.map((tech) => (
            <button
              key={tech}
              type="button"
              className={`projects-filter-btn ${
                selectedTech === tech ? "is-active" : ""
              }`}
              onClick={() => onSelectTech(tech)}
              aria-pressed={selectedTech === tech}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-sort-wrapper">
        <label htmlFor="project-sort-select" className="projects-control-label">
          Sort by:
        </label>
        <div className="projects-select-container">
          <select
            id="project-sort-select"
            className="projects-sort-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            aria-label="Sort projects"
          >
            <option value="default">Default Order</option>
            <option value="title-asc">Title (A - Z)</option>
            <option value="title-desc">Title (Z - A)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProjectFilterSort;
