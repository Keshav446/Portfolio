
import "./Certificates.css";

const certificates = [
  {
    number: "01",
    title: "Database Management Systems",
    issuer: "DBMS Certification",
    category: "DATABASES",
    description:
      "A certificate highlighting learning and knowledge of database management systems and related concepts.",
    skills: ["DBMS", "SQL", "Database Design"],
    icon: "▤",
    certificateUrl: "",
    accent: "wine",
  },
  {
    number: "02",
    title: "Red Hat Certification",
    issuer: "Red Hat",
    category: "TECHNOLOGY",
    description:
      "A professional learning credential related to Red Hat technologies. Add the exact certification name and skills covered.",
    skills: ["Red Hat", "Linux", "System Fundamentals"],
    icon: "⌘",
    certificateUrl: "",
    accent: "red",
  },
  {
    number: "03",
    title: "LNMHacks",
    issuer: "LNMHacks Hackathon",
    category: "HACKATHON",
    description:
      "A certificate recognizing participation or achievement at LNMHacks. Add your specific project, role, or award details.",
    skills: ["Innovation", "Teamwork", "Development"],
    icon: "✳",
    certificateUrl: "",
    accent: "pink",
  },
];

function Certificates() {
  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-container">
        <div className="certificates-heading">
          <span className="certificates-eyebrow">
            MILESTONES & RECOGNITION
          </span>

          <h2>
            Certificates & <span>Achievements.</span>
          </h2>

          <p>
            Certifications and experiences that reflect my
            learning journey, technical interests, and growth.
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <article
              className={`certificate-card ${certificate.accent}`}
              key={certificate.number}
            >
              <div className="certificate-card-top">
                <span className="certificate-number">
                  / {certificate.number}
                </span>

                <span className="certificate-category">
                  {certificate.category}
                </span>
              </div>

              <div className="certificate-art">
                <div className="certificate-art-glow" />

                <div className="certificate-art-border">
                  <span className="certificate-art-icon">
                    {certificate.icon}
                  </span>

                  <span className="certificate-art-label">
                    CERTIFICATE
                  </span>

                  <div className="certificate-art-line" />

                  <span className="certificate-art-title">
                    {certificate.title}
                  </span>

                  <span className="certificate-art-issuer">
                    {certificate.issuer}
                  </span>

                  <span className="certificate-art-seal">
                    ✦
                  </span>
                </div>
              </div>

              <div className="certificate-info">
                <h3>{certificate.title}</h3>

                <p className="certificate-issuer">
                  {certificate.issuer}
                </p>

                <p className="certificate-description">
                  {certificate.description}
                </p>

                <div className="certificate-skills">
                  {certificate.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                {certificate.certificateUrl ? (
                  <a
                    className="certificate-view-link"
                    href={certificate.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Certificate <span>↗</span>
                  </a>
                ) : (
                  <span className="certificate-add-link">
                    Add certificate link
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
