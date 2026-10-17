
import "./Project.css";

const projects = [
  {
    number: "01",
    title: "Wealth Management",
    subtitle: "Analytics Platform",
    description:
      "A data-driven wealth management platform that transforms financial data into actionable insights through data warehousing, interactive dashboards, portfolio analytics, and AI-powered business reporting.",
    tech: ["SQL", "PySpark", "Databricks", "Power BI", "AI Reporting"],
    category: "Data Analytics",
    github: "https://github.com/YOUR_USERNAME/wealth-management-analytics",
    accent: "wine",
  },
  {
    number: "02",
    title: "SkillProofAI",
    subtitle: "AI-Powered Skill Assessment",
    description:
      "An AI-focused platform concept designed to help users assess their skills, evaluate competencies, and present their capabilities through a structured and transparent verification experience.",
    tech: ["React", "Node.js", "Express", "MongoDB", "AI"],
    category: "AI & Full Stack",
    github: "https://github.com/YOUR_USERNAME/SkillProofAI",
    accent: "pink",
  },
  {
    number: "03",
    title: "NayiShuruat",
    subtitle: "A New Beginning",
    description:
      "A project focused on creating a meaningful digital experience. Customize this description with the actual problem NayiShuruat solves and the features you have implemented.",
    tech: ["React", "JavaScript", "CSS", "Node.js"],
    category: "Web Development",
    github: "https://github.com/YOUR_USERNAME/NayiShuruat",
    accent: "rose",
  },
];

function Projects() {
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
          {projects.map((project) => (
            <article
              className={`project-card ${project.accent}`}
              key={project.number}
            >
              <div className="project-card-top">
                <span className="project-number">
                  / {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-visual">
                <div className="project-visual-glow" />

                <span className="project-visual-number">
                  {project.number}
                </span>

                <div className="project-visual-content">
                  <span className="project-mini-label">
                    SELECTED WORK
                  </span>

                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>

                <span className="project-visual-symbol">
                  ↗
                </span>
              </div>

              <div className="project-info">
                <h4>{project.title}</h4>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github"
                  >
                    <span className="github-icon">GH</span>
                    GitHub Repository
                    <span className="project-link-arrow">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <span>MORE IDEAS. MORE CODE. MORE POSSIBILITIES.</span>
          <a
            href="https://github.com/YOUR_USERNAME"
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
