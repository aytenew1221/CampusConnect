import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>🎓 CampusConnect</h3>
          <p>
            Connecting students, clubs, events, and resources in campus
            community.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>

          <Link to="/clubs">Clubs</Link>
          <Link to="/events">Events</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/about">About</Link>
        </div>

        <div>
          <h4>Campus</h4>

          <p>📍 Ethiopia</p>
          <p>🌊 Addis Ababa</p>
          <p>🇪🇹 Ethiopia</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CampusConnect. All rights reserved.</p>
      </div>
    </footer>
  );
}
