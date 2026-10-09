export default function TestimonialCard({ name, role, quote }) {
  return (
    <figure className="card testimonial-card">
      <blockquote>
        <p>“{quote}”</p>
      </blockquote>
      <figcaption>
        <strong>{name}</strong>
        <span>{role}</span>
      </figcaption>
    </figure>
  );
}
