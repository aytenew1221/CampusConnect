import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="not-found">
          <div className="not-found-number">404</div>

          <h1>Page Not Found</h1>

          <p>Sorry, the page you are looking for does not exist.</p>

          <Link to="/" className="btn btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
