import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CertificateCard from "../components/CertificateCard";
import certificates from "../data/certificates";
import "./CertificatesPage.css";

function CertificatesPage() {
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
    <div className="certificates-page">
      <div className="certificates-page-container">
        <div className="certificates-page-nav">
          <Link to="/" className="certificates-back-link">
            <span>←</span> Back to Portfolio
          </Link>

          <button
            type="button"
            className="certificates-page-theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        <header className="certificates-page-header">
          <div className="certificates-page-heading">
            <span className="certificates-eyebrow">
              CREDENTIALS & RECOGNITION
            </span>

            <h1>
              All <span>Certificates.</span>
            </h1>

            <p>
              A complete collection of certifications, courses, and hackathons
              that demonstrate my technical skills and dedication to continuous learning.
            </p>
          </div>
        </header>

        <main className="certificates-grid">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.number || certificate.title}
              certificate={certificate}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default CertificatesPage;
