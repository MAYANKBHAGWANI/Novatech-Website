// Small card with an icon, title and short text.
// Used for features and core values.
export default function FeatureCard({ icon, title, description }) {
  return (
    <article className="card feature-card">
      <div className="icon-circle" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
