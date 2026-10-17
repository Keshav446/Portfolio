
import "./About.css";

function About() {
  const highlights = [
    {
      number: "01",
      title: "Problem Solver",
      description:
        "I enjoy breaking complex problems into simple, practical solutions.",
    },
    {
      number: "02",
      title: "Web Developer",
      description:
        "I build responsive and user-friendly web experiences with clean code.",
    },
    {
      number: "03",
      title: "Continuous Learner",
      description:
        "I keep exploring new technologies and improving my development skills.",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-heading">
          <span className="about-eyebrow">
            GET TO KNOW ME
          </span>

          <h2>
            A Little About <span>Me.</span>
          </h2>

          <p>
            The person behind the code, the ideas, and
            the passion for building things.
          </p>
        </div>

        <div className="about-content">
          <div className="about-visual">
            <div className="about-image-frame">
              <img
                src="/hero.png"
                alt="Keshav Maheshwari"
                className="about-image"
              />

              <div className="about-image-overlay" />
            </div>

            <div className="about-floating-card">
              <span className="about-card-icon">✦</span>

              <div>
                <strong>Always Growing</strong>
                <p>Learning by building</p>
              </div>
            </div>

            <div className="about-decoration" />
          </div>

          <div className="about-details">
            <h3>
              Hey, I'm Keshav
              <span className="about-wave"> 👋</span>
            </h3>

            <p className="about-description">
              I'm a B.Tech student passionate about web
              development and building meaningful digital
              experiences. I enjoy turning ideas into
              functional, responsive, and visually appealing
              applications.
            </p>

            <p className="about-description">
              Currently, I'm exploring the MERN stack,
              strengthening my problem-solving skills, and
              learning how to build full-stack applications
              with thoughtful UI and clean code.
            </p>

            <div className="about-info-grid">
              <div className="about-info-item">
                <span className="info-label">NAME</span>
                <span className="info-value">
                  Keshav Maheshwari
                </span>
              </div>

              <div className="about-info-item">
                <span className="info-label">LOCATION</span>
                <span className="info-value">
                  India
                </span>
              </div>

              <div className="about-info-item">
                <span className="info-label">EDUCATION</span>
                <span className="info-value">
                  B.Tech Student
                </span>
              </div>

              <div className="about-info-item">
                <span className="info-label">FOCUS</span>
                <span className="info-value">
                  MERN Stack Development
                </span>
              </div>
            </div>

            <a href="#contact" className="about-cta">
              Let's Connect <span>↗</span>
            </a>
          </div>
        </div>

        <div className="about-highlights">
          {highlights.map((item) => (
            <article
              className="about-highlight-card"
              key={item.number}
            >
              <span className="highlight-number">
                {item.number}
              </span>

              <h4>{item.title}</h4>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
