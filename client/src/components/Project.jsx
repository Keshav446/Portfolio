import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import "./Project.css";

function Projects() {
  const displayedProjects = projects.slice(0, 3);

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

        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.number || project.title}
              project={project}
            />
          ))}
        </div>

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
