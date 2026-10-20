import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "Keshav Maheshwari",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending message...");

    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message.");
      }

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus(
        error.message === "Failed to fetch"
          ? "Unable to connect to the server. Please try again."
          : error.message,
      );
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="contact-tag">GET IN TOUCH</span>
          <h2>
            Let's Work <span>Together</span>
          </h2>
          <p>
            Have an idea, opportunity, or just want to connect? Feel free to
            drop me a message.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's start a conversation</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, and
              opportunities to learn and grow.
            </p>

            <div className="contact-info-item">
              <div className="contact-icon">@</div>
              <div>
                <h4>Email</h4>
                <a >
                  keshavmaheshwari4438@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">⌘</div>
              <div>
                <h4>GitHub</h4>
                <a
                  href="https://github.com/keshav446"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore my repositories
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">in</div>
              <div>
                <h4>LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/keshav-maheshwari-km0404"
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect with me
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message <span>↗</span>
            </button>

            {status && (
              <p className="contact-status" role="status">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
