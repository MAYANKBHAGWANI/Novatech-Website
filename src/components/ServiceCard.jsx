import Button from "./Button.jsx";

export default function ServiceCard({ icon, title, description }) {
  return (
    <article className="card service-card">
      <div className="icon-circle" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {/* Links to the contact page so the button has a real destination */}
      <Button to="/contact" variant="outline" aria-label={`Learn more about ${title}`}>
        Learn More
      </Button>
    </article>
  );
}
