import { NavLink } from "react-router-dom";
import { navLinks } from "../data/data.js";

// Dropdown menu shown on small screens.
// It is always in the page but hidden with CSS until `isOpen` is true,
// which lets us animate it smoothly.
export default function MobileMenu({ isOpen, onNavigate }) {
  return (
    <nav
      id="mobile-menu"
      className={`mobile-menu ${isOpen ? "open" : ""}`}
      aria-label="Mobile"
      // "inert" stops keyboard focus from entering the menu while it is closed
      inert={!isOpen ? "" : undefined}
    >
      <ul>
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} end={link.to === "/"} onClick={onNavigate}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
