import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <article className="card event-card">
      <img src={event.image} alt={event.name} />

      <div className="card-content">
        <span className="badge">{event.category}</span>

        <h3>{event.name}</h3>

        <p>{event.description}</p>

        <div className="event-info">
          <p>📅 {event.date}</p>
          <p>⏰ {event.time}</p>
          <p>📍 {event.location}</p>
        </div>

        <Link to={`/events/${event.id}`} className="btn btn-primary">
          Event Details
        </Link>
      </div>
    </article>
  );
}
