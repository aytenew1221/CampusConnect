import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="about-header">
          <span className="hero-label">🎓 About CampusConnect</span>

          <h1>Building a stronger student community in Addis Ababa</h1>

          <p>
            CampusConnect is a student community portal designed to make it
            easier for students to discover clubs, events, resources, and
            opportunities around campus.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <span>🎯</span>
            <h3>Our Mission</h3>
            <p>
              Connect students with meaningful communities, activities, learning
              opportunities, and support services.
            </p>
          </div>

          <div className="about-card">
            <span>🌱</span>
            <h3>Student Growth</h3>
            <p>
              Encourage students to develop academic, technical, leadership,
              creative, and interpersonal skills.
            </p>
          </div>

          <div className="about-card">
            <span>🤝</span>
            <h3>Community</h3>
            <p>
              Create opportunities for students to meet, collaborate, share
              ideas, and contribute to campus life.
            </p>
          </div>
        </div>

        <div className="about-story">
          <h2>Why CampusConnect?</h2>

          <p>
            Student life involves much more than attending classes. Clubs,
            events, student organizations, career activities, and support
            services all contribute to a successful campus experience.
          </p>

          <p>
            CampusConnect provides one simple place where students can discover
            these opportunities.
          </p>

          <Link to="/clubs" className="btn btn-primary">
            Start Exploring
          </Link>
        </div>
      </div>
    </section>
  );
}
