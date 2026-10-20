import "./Project.css";

function ProjectCard(props) {
  const project = props.project || props;
  const {
    number,
    title,
    subtitle,
    category,
    description,
    technologies,
    tech,
    githubUrl,
    github,
    projectUrl,
    liveUrl,
    accent = "wine",
  } = project;

  const techList = Array.isArray(technologies)
    ? technologies
    : Array.isArray(tech)
    ? tech
    : [];

  const rawGithub = githubUrl || github;
  const rawLive = projectUrl || liveUrl;

  const isValidUrl = (url) => {
    if (!url || typeof url !== "string") return false;
    const trimmed = url.trim();
    if (!trimmed || trimmed === "#" || trimmed.includes("YOUR_USERNAME")) return false;
    return trimmed.startsWith("http://") || trimmed.startsWith("https://");
  };

  const hasGithub = isValidUrl(rawGithub);
  const hasLive = isValidUrl(rawLive);

  return (
    <article className={`project-card ${accent || ""}`}>
      <div className="project-card-top">
        <span className="project-number">
          {number ? `/ ${number}` : ""}
        </span>

        {category && (
          <span className="project-category">{category}</span>
        )}
      </div>

      <div className="project-visual">
        <div className="project-visual-glow" />

        {number && (
          <span className="project-visual-number">{number}</span>
        )}

        <div className="project-visual-content">
          <span className="project-mini-label">
            SELECTED WORK
          </span>

          <h3>{title}</h3>
          {subtitle && <p>{subtitle}</p>}
        </div>

        <span className="project-visual-symbol">↗</span>
      </div>

      <div className="project-info">
        <h4>{title}</h4>

        {description && (
          <p className="project-description">{description}</p>
        )}

        {techList.length > 0 && (
          <div className="project-tech">
            {techList.map((technology, index) => (
              <span key={`${technology}-${index}`}>{technology}</span>
            ))}
          </div>
        )}

        <div className="project-links">
          {hasGithub ? (
            <a
              href={rawGithub}
              target="_blank"
              rel="noreferrer"
              className="project-github"
            >
              <span className="github-icon">GH</span>
              GitHub Repository
              <span className="project-link-arrow">↗</span>
            </a>
          ) : hasLive ? (
            <a
              href={rawLive}
              target="_blank"
              rel="noreferrer"
              className="project-github"
            >
              <span className="github-icon">🔗</span>
              Live Demo
              <span className="project-link-arrow">↗</span>
            </a>
          ) : (
            <span className="project-github-placeholder">
              <span className="github-icon">GH</span>
              Repository on request
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
