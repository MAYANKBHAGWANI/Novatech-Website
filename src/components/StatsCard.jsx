export default function StatsCard({ value, label }) {
  return (
    <div className="stats-card">
      <p className="stats-value">{value}</p>
      <p className="stats-label">{label}</p>
    </div>
  );
}
