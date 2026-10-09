import { Link } from "react-router-dom";

// One Button component for the whole site.
// - give it `to`   -> renders a router link (internal page)
// - give it `href` -> renders a normal <a> link
// - otherwise      -> renders a real <button>
export default function Button({ children, to, href, variant = "primary", type = "button", onClick, ...rest }) {
  const className = `btn btn-${variant}`;

  if (to) return <Link to={to} className={className} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={className} {...rest}>{children}</a>;
  return <button type={type} className={className} onClick={onClick} {...rest}>{children}</button>;
}
