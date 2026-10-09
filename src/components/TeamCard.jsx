// Team member card. Shows initials in a circle instead of a photo.
export default function TeamCard({ name, role, initials }) {
  return (
    <article className="card team-card">
      <div className="avatar" aria-hidden="true">{initials}</div>
      <h3>{name}</h3>
      <p>{role}</p>
    </article>
  );
}
