import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: events, loading, error } = useFetch("/data/events.json");

  const event = events.find((item) => item.id === Number(id));

  if (loading) {
    return (
      <section className="section page-section">
        <div className="container">
          <Loading />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section page-section">
        <div className="container">
          <div className="error-box">{error}</div>
        </div>
      </section>
    );
  }

  if (!event) {
    return (
      <section className="section page-section">
        <div className="container">
          <div className="empty-state">
            <span>📅</span>

            <h2>Event not found</h2>

            <button
              className="btn btn-primary"
              onClick={() => navigate("/events")}
            >
              Back to Events
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section page-section">
      <div className="container">
        <button className="back-button" onClick={() => navigate("/events")}>
          ← Back to Events
        </button>

        <article className="event-details">
          <img
            src={event.image}
            alt={event.name}
            className="event-details-image"
          />

          <div className="event-details-content">
            <span className="badge">{event.category}</span>

            <h1>{event.name}</h1>

            <p className="lead">{event.description}</p>

            <div className="event-details-grid">
              <div className="detail-box">
                <span>📅</span>
                <strong>Date</strong>
                <p>{event.date}</p>
              </div>

              <div className="detail-box">
                <span>⏰</span>
                <strong>Time</strong>
                <p>{event.time}</p>
              </div>

              <div className="detail-box">
                <span>📍</span>
                <strong>Location</strong>
                <p>{event.location}</p>
              </div>

              <div className="detail-box">
                <span>👤</span>
                <strong>Organizer</strong>
                <p>{event.organizer}</p>
              </div>
            </div>

            <div className="event-registration">
              <h3>Interested in attending?</h3>

              <p>
                Save the date and check with the organizing club for
                registration information.
              </p>

              <Link to="/events" className="btn btn-primary">
                Browse More Events
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
