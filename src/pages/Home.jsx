import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import EventCard from "../components/EventCard";
import ClubCard from "../components/ClubCard";
import SectionTitle from "../components/SectionTitle";
import Loading from "../components/Loading";

export default function Home() {
  const {
    data: events,
    loading: eventsLoading,
    error: eventsError,
  } = useFetch("/data/events.json");

  const {
    data: clubs,
    loading: clubsLoading,
    error: clubsError,
  } = useFetch("/data/clubs.json");

  const featuredEvents = events.slice(0, 3);
  const popularClubs = clubs
    .slice()
    .sort((a, b) => b.members - a.members)
    .slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="hero-label">🇪🇹 Addis Ababa Student Community</span>

            <h1>
              Connect. Participate.
              <span> Grow Together.</span>
            </h1>

            <p>
              Discover campus clubs, upcoming events, academic resources, and
              opportunities to connect with students across Addis Ababa.
            </p>

            <div className="hero-actions">
              <Link to="/clubs" className="btn btn-primary">
                Explore Clubs
              </Link>

              <Link to="/events" className="btn btn-outline">
                View Events
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-icon">🎓</div>
            <h3>Welcome to CampusConnect</h3>
            <p>
              Your digital hub for student life, learning, community, and campus
              activities.
            </p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat">
            <strong>{clubs.length}+</strong>
            <span>Student Clubs</span>
          </div>

          <div className="stat">
            <strong>{events.length}+</strong>
            <span>Upcoming Events</span>
          </div>

          <div className="stat">
            <strong>500+</strong>
            <span>Students Connected</span>
          </div>

          <div className="stat">
            <strong>6</strong>
            <span>Resource Areas</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Featured Events"
            subtitle="Discover what is happening around campus."
          />

          {eventsLoading && <Loading />}

          {eventsError && (
            <div className="error-box">
              Unable to load events: {eventsError}
            </div>
          )}

          {!eventsLoading && !eventsError && (
            <div className="card-grid">
              {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}

          <div className="center">
            <Link to="/events" className="btn btn-secondary">
              See All Events
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            title="Popular Clubs"
            subtitle="Find a community that matches your interests."
          />

          {clubsLoading && <Loading />}

          {clubsError && (
            <div className="error-box">Unable to load clubs: {clubsError}</div>
          )}

          {!clubsLoading && !clubsError && (
            <div className="card-grid">
              {popularClubs.map((club) => (
                <ClubCard key={club.id} club={club} />
              ))}
            </div>
          )}

          <div className="center">
            <Link to="/clubs" className="btn btn-secondary">
              Explore All Clubs
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Quick Student Resources"
            subtitle="Everything you need to make campus life easier."
          />

          <div className="quick-links">
            <Link to="/resources" className="quick-link">
              <span>📚</span>
              <strong>Library</strong>
              <small>Study resources</small>
            </Link>

            <Link to="/resources" className="quick-link">
              <span>🎓</span>
              <strong>Academic Support</strong>
              <small>Get academic help</small>
            </Link>

            <Link to="/resources" className="quick-link">
              <span>💼</span>
              <strong>Career Services</strong>
              <small>Plan your career</small>
            </Link>

            <Link to="/resources" className="quick-link">
              <span>🤝</span>
              <strong>Student Services</strong>
              <small>Student support</small>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
