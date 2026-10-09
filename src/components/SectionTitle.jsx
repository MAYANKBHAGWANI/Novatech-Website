// Reusable heading block used at the top of most sections.
// `as` lets us choose h1 / h2 so the heading order stays correct.
export default function SectionTitle({ eyebrow, title, subtitle, as: Tag = "h2", align = "center" }) {
  return (
    <div className={`section-title align-${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag>{title}</Tag>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
}
