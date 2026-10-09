import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

// Reads the saved theme (set in index.html) or falls back to "light"
function getInitialTheme() {
  return document.documentElement.getAttribute("data-theme") || "light";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const { pathname } = useLocation();

  // Dark mode: put the theme on <html data-theme="..."> and remember it.
  // The CSS variables in index.css change depending on this attribute.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      // localStorage can be blocked in private mode - safe to ignore
    }
  }, [theme]);

  // Scroll to the top whenever the user opens a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <>
      {/* Skip link: lets keyboard users jump past the navbar */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
