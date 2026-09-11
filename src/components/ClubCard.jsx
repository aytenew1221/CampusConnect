import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function ClubCard({ club }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <article className="card club-card">
      <img src={club.image} alt={club.name} />

      <div className="card-content">
        <div className="card-top">
          <span className="badge">{club.category}</span>

          <button
            className="favorite-btn"
            onClick={() => toggleFavorite(club.id)}
            aria-label="Toggle favorite"
          >
            {isFavorite(club.id) ? "♥" : "♡"}
          </button>
        </div>

        <h3>{club.name}</h3>

        <p>{club.description}</p>

        <div className="card-meta">
          <span>👥 {club.members} members</span>
        </div>

        <Link to={`/clubs/${club.id}`} className="btn btn-primary">
          View Club
        </Link>
      </div>
    </article>
  );
}
