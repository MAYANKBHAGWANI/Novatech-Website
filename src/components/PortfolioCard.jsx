import Button from "./Button.jsx";

// The "image" is a gradient placeholder with an emoji, so the card
// always looks good even without internet or image files.
export default function PortfolioCard({ title, category, description, icon }) {
  return (
    <article className="card portfolio-card">
      <div className="portfolio-thumb" role="img" aria-label={`${title} project preview`}>
        <span aria-hidden="true">{icon}</span>
      </div>
      <div className="portfolio-body">
        <span className="badge">{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button to="/contact" variant="outline" aria-label={`View project: ${title}`}>
          View Project
        </Button>
      </div>
    </article>
  );
}
