
import "./Education.css";

const education = [
  {
    year: "2024 — 2028",
    type: "UNDERGRADUATE",
    title: "B.Tech — Computer Science Engineering",
    institution: "YOUR COLLEGE NAME",
    detail: "Bachelor of Technology",
    icon: "🎓",
  },
  {
    year: "CLASS XII",
    type: "SENIOR SECONDARY",
    title: "Class 12th",
    institution: "Maheshwari Public School",
    detail: "Academic Score",
    score: "82%",
    icon: "📘",
  },
  {
    year: "CLASS X",
    type: "SECONDARY",
    title: "Class 10th",
    institution: "Maheshwari Public School",
    detail: "Academic Score",
    score: "93%",
    icon: "📚",
  },
];

const experience = [
  {
    year: "MAY — AUG 2026",
    type: "INTERNSHIP",
    title: "Internship at Anytime Invest",
    company: "Anytime Invest",
    role: "YOUR INTERNSHIP ROLE",
    description:
      "Worked as an intern and gained practical exposure to a professional work environment. Update this description with your actual responsibilities, projects, and achievements.",
    certificateUrl: "https://drive.google.com/file/d/1JV0ADO7LQ_XcjOBvvBY0E4A60CD5X1lH/view?usp=share_link", // Add your actual certificate URL here
  },
];

function Education() {
  return (
    <section className="journey-section" id="education">
      <div className="journey-container">
        <div className="journey-heading">
          <span className="journey-eyebrow">
            THE PATH SO FAR
          </span>

          <h2>
            My <span>Journey.</span>
          </h2>

          <p>
            My academic foundation, professional experience,
            and the milestones shaping my development journey.
          </p>
        </div>

        <div className="journey-columns">
          {/* Education */}

          <div className="journey-column">
            <div className="journey-column-heading">
              <span className="journey-heading-icon">✦</span>
              <div>
                <h3>Education</h3>
                <p>My academic background</p>
              </div>
            </div>

            <div className="journey-timeline">
              {education.map((item) => (
                <article
                  className="journey-item"
                  key={item.title}
                >
                  <span className="journey-marker" />

                  <div className="journey-card">
                    <div className="journey-card-top">
                      <span className="journey-type">
                        {item.type}
                      </span>

                      <span className="journey-year">
                        {item.year}
                      </span>
                    </div>

                    <h4>{item.title}</h4>

                    <p className="journey-institution">
                      {item.institution}
                    </p>

                    <div className="journey-card-bottom">
                      <span className="journey-detail">
                        {item.detail}
                      </span>

                      {item.score && (
                        <span className="journey-score">
                          {item.score}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Experience */}

          <div className="journey-column">
            <div className="journey-column-heading">
              <span className="journey-heading-icon">↗</span>
              <div>
                <h3>Experience</h3>
                <p>Professional exposure</p>
              </div>
            </div>

            <div className="journey-timeline">
              {experience.map((item) => (
                <article
                  className="journey-item"
                  key={item.title}
                >
                  <span className="journey-marker" />

                  <div className="journey-card experience-card">
                    <div className="journey-card-top">
                      <span className="journey-type">
                        {item.type}
                      </span>

                      <span className="journey-year">
                        {item.year}
                      </span>
                    </div>

                    <h4>{item.title}</h4>

                    <p className="journey-institution">
                      {item.company}
                    </p>

                    <span className="journey-role">
                      {item.role}
                    </span>

                    <p className="journey-description">
                      {item.description}
                    </p>

                    {item.certificateUrl ? (
                      <a
                        href={item.certificateUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="certificate-link"
                      >
                        View Certificate <span>↗</span>
                      </a>
                    ) : (
                      <span className="certificate-pending">
                        Certificate link to be added
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
