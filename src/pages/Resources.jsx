import { useState } from "react";
import ResourceCard from "../components/ResourceCard";
import SectionTitle from "../components/SectionTitle";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";

export default function Resources() {
  const { data: resources, loading, error } = useFetch("/data/resources.json");

  const [search, setSearch] = useState("");

  const filteredResources = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(search.toLowerCase()) ||
      resource.category.toLowerCase().includes(search.toLowerCase()) ||
      resource.description.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="section page-section">
      <div className="container">
        <SectionTitle
          title="Student Resources"
          subtitle="Useful services and support for your academic and student life."
        />

        <div className="resource-search">
          <label htmlFor="resource-search">Search resources</label>

          <input
            id="resource-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search library, career, academic support..."
          />
        </div>

        {loading && <Loading />}

        {error && <div className="error-box">{error}</div>}

        {!loading && !error && (
          <div className="resource-grid">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
