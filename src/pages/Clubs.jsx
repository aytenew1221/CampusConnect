import { useState } from "react";
import ClubCard from "../components/ClubCard";
import SectionTitle from "../components/SectionTitle";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";

export default function Clubs() {
  const { data: clubs, loading, error } = useFetch("/data/clubs.json");

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(clubs.map((club) => club.category))];

  const filteredClubs = clubs.filter((club) => {
    const matchesSearch =
      club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = category === "All" || club.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="section page-section">
      <div className="container">
        <SectionTitle
          title="Student Clubs"
          subtitle="Find your community and connect with students who share your interests."
        />

        <div className="filters">
          <div className="form-group">
            <label htmlFor="club-search">Search clubs</label>

            <input
              id="club-search"
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by club name..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="club-category">Category</label>

            <select
              id="club-category"
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
        </div>

        {loading && <Loading />}

        {error && (
          <div className="error-box">
            <h3>Something went wrong</h3>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="results-info">
              Showing {filteredClubs.length} of {clubs.length} clubs
            </div>

            {filteredClubs.length === 0 ? (
              <div className="empty-state">
                <span>🔍</span>
                <h3>No clubs found</h3>
                <p>Try a different search term or category.</p>
              </div>
            ) : (
              <div className="card-grid">
                {filteredClubs.map((club) => (
                  <ClubCard key={club.id} club={club} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
