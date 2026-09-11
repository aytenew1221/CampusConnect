import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import { useFavorites } from "../context/FavoritesContext";

export default function ClubDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: clubs, loading, error } = useFetch("/data/clubs.json");

  const [message, setMessage] = useState("");

  const club = clubs.find((item) => item.id === Number(id));

  const { toggleFavorite, isFavorite } = useFavorites();

  function handleJoin(event) {
    event.preventDefault();

    setMessage(`Thanks for your interest in joining ${club.name}!`);
  }

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

  if (!club) {
    return (
      <section className="section page-section">
        <div className="container">
          <div className="empty-state">
            <span>🔍</span>
            <h2>Club not found</h2>

            <button
              onClick={() => navigate("/clubs")}
              className="btn btn-primary"
            >
              Back to Clubs
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section page-section">
      <div className="container">
        <button className="back-button" onClick={() => navigate("/clubs")}>
          ← Back to Clubs
        </button>

        <div className="details-layout">
          <div>
            <img src={club.image} alt={club.name} className="details-image" />
          </div>

          <div className="details-content">
            <span className="badge">{club.category}</span>

            <h1>{club.name}</h1>

            <p className="lead">{club.longDescription}</p>

            <div className="details-info">
              <div>
                <span>👥</span>
                <div>
                  <strong>Members</strong>
                  <p>{club.members} students</p>
                </div>
              </div>

              <div>
                <span>📅</span>
                <div>
                  <strong>Meeting Day</strong>
                  <p>{club.meetingDay}</p>
                </div>
              </div>

              <div>
                <span>⏰</span>
                <div>
                  <strong>Meeting Time</strong>
                  <p>{club.meetingTime}</p>
                </div>
              </div>

              <div>
                <span>📍</span>
                <div>
                  <strong>Location</strong>
                  <p>{club.location}</p>
                </div>
              </div>
            </div>

            <div className="interest-section">
              <h3>Members' Interests</h3>

              <div className="tags">
                {club.interests.map((interest) => (
                  <span key={interest} className="tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => toggleFavorite(club.id)}
            >
              {isFavorite(club.id) ? "♥ Remove Favorite" : "♡ Add Favorite"}
            </button>

            <form className="join-form" onSubmit={handleJoin}>
              <h3>Interested in this club?</h3>

              <p>Submit the form to simulate joining this student community.</p>

              <input type="text" placeholder="Your name" required />

              <input type="email" placeholder="Your student email" required />

              <button type="submit" className="btn btn-secondary">
                Join Interest List
              </button>

              {message && <div className="success-box">{message}</div>}
            </form>
          </div>
        </div>

        <Link to="/clubs" className="btn btn-outline">
          View More Clubs
        </Link>
      </div>
    </section>
  );
}
