import { useState } from "react";
import EventCard from "../components/EventCard";
import SectionTitle from "../components/SectionTitle";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";

export default function Events() {
  const { data: events, loading, error } = useFetch("/data/events.json");

  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(events.map((event) => event.category))];

  const filteredEvents =
    category === "All"
      ? events
      : events.filter((event) => event.category === category);

  return (
    <section className="section page-section">
      <div className="container">
        <SectionTitle
          title="Upcoming Events"
          subtitle="Stay informed about activities happening around campus."
        />

        <div className="event-filter">
          <label htmlFor="event-category">Filter events:</label>

          <select
            id="event-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {loading && <Loading />}

        {error && <div className="error-box">{error}</div>}

        {!loading && !error && (
          <>
            {filteredEvents.length === 0 ? (
              <div className="empty-state">
                <span>📅</span>
                <h3>No events found</h3>
              </div>
            ) : (
              <div className="card-grid">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
