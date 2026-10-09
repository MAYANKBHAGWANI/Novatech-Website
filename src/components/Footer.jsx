import { Link } from "react-router-dom";
import { navLinks, contactInfo } from "../data/data.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="logo">NovaTech <span className="logo-light">Solutions</span></p>
          <p>Modern, fast and responsive digital experiences for growing businesses.</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="footer-heading">Quick Links</h2>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}><Link to={link.to}>{link.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer-heading">Contact</h2>
          <ul>
            <li><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
            <li>{contactInfo.phone}</li>
            <li>{contactInfo.address}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {year} NovaTech Solutions. A fictional company created for a student project.</p>
      </div>
    </footer>
  );
}
