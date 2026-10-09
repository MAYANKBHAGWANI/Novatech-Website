import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/data.js";
import ThemeToggle from "./ThemeToggle.jsx";
import MobileMenu from "./MobileMenu.jsx";

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu when the Escape key is pressed
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-mark" aria-hidden="true">N</span>
          NovaTech <span className="logo-light">Solutions</span>
        </Link>

        {/* Desktop navigation (hidden on mobile by CSS) */}
        <nav className="desktop-nav" aria-label="Main">
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === "/"}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="icon-button hamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      <MobileMenu isOpen={menuOpen} onNavigate={() => setMenuOpen(false)} />
    </header>
  );
}
