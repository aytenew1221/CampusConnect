import { NavLink } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { favoriteClubs } = useFavorites();
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="container nav-container">
        <NavLink to="/" className="brand">
          <span className="brand-icon">🎓</span>

          <span>
            <strong>CampusConnect</strong>
            <small>Addis Ababa</small>
          </span>
        </NavLink>

        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/clubs"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Clubs
          </NavLink>

          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Events
          </NavLink>

          <NavLink
            to="/resources"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Resources
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
        </nav>

        <div className="nav-actions">
          <span className="favorite-count">♥ {favoriteClubs.length}</span>

          <button
            className="theme-btn"
            onClick={toggleTheme}
            title="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
}
