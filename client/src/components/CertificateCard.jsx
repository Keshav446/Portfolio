import "./Certificates.css";

function CertificateCard(props) {
  // Support either passing certificate={cert} or individual props
  const cert = props.certificate || props;
  const {
    number,
    title,
    issuer,
    category,
    description,
    skills = [],
    icon,
    certificateUrl,
    accent = "wine",
  } = cert;

  const hasValidUrl =
    typeof certificateUrl === "string" && certificateUrl.trim().length > 0;

  return (
    <article className={`certificate-card ${accent || ""}`}>
      <div className="certificate-card-top">
        <span className="certificate-number">{number ? `/ ${number}` : ""}</span>
        {category && <span className="certificate-category">{category}</span>}
      </div>

      <div className="certificate-art">
        <div className="certificate-art-glow" />

        <div className="certificate-art-border">
          {icon && <span className="certificate-art-icon">{icon}</span>}

          <span className="certificate-art-label">CERTIFICATE</span>

          <div className="certificate-art-line" />

          <span className="certificate-art-title">{title}</span>

          {issuer && <span className="certificate-art-issuer">{issuer}</span>}

          <span className="certificate-art-seal">✦</span>
        </div>
      </div>

      <div className="certificate-info">
        <h3>{title}</h3>

        {issuer && <p className="certificate-issuer">{issuer}</p>}

        {description && (
          <p className="certificate-description">{description}</p>
        )}

        {Array.isArray(skills) && skills.length > 0 && (
          <div className="certificate-skills">
            {skills.map((skill, index) => (
              <span key={`${skill}-${index}`}>{skill}</span>
            ))}
          </div>
        )}

        {hasValidUrl ? (
          <a
            className="certificate-view-link"
            href={certificateUrl}
            target="_blank"
            rel="noreferrer"
          >
            View Certificate <span>↗</span>
          </a>
        ) : (
          <span className="certificate-add-link">
            Certificate on file
          </span>
        )}
      </div>
    </article>
  );
}

export default CertificateCard;
