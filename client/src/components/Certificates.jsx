import { Link } from "react-router-dom";
import CertificateCard from "./CertificateCard";
import certificates from "../data/certificates";
import "./Certificates.css";

function Certificates() {
  const displayedCertificates = certificates.slice(0, 3);

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
          {displayedCertificates.map((certificate) => (
            <CertificateCard
              key={certificate.number || certificate.title}
              certificate={certificate}
            />
          ))}
        </div>

        <div className="certificates-action">
          <Link to="/certificates" className="certificates-view-all-btn">
            View All Certificates <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
