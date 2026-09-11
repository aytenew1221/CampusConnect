export default function ResourceCard({ resource }) {
  return (
    <article className="card resource-card">
      <div className="resource-icon">
        {resource.category === "Library" && "📚"}
        {resource.category === "Academic Support" && "🎓"}
        {resource.category === "Career Services" && "💼"}
        {resource.category === "Student Services" && "🤝"}
      </div>

      <span className="badge">{resource.category}</span>

      <h3>{resource.title}</h3>

      <p>{resource.description}</p>

      <div className="resource-details">
        <p>📍 {resource.location}</p>
        <p>✉️ {resource.contact}</p>
      </div>
    </article>
  );
}
