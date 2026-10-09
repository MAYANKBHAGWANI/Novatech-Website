import { useState } from "react";
import Seo from "../components/Seo.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import PortfolioCard from "../components/PortfolioCard.jsx";
import CallToAction from "../components/CallToAction.jsx";
import { projects, portfolioCategories } from "../data/data.js";

export default function Portfolio() {
  // State: which filter button is currently selected
  const [activeCategory, setActiveCategory] = useState("All");

  // Filtering: keep every project if "All", otherwise only matching ones
  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <Seo
        title="Portfolio"
        description="Browse recent websites and designs created by NovaTech Solutions."
      />
      <section className="page-header">
        <div className="container">
          <SectionTitle
            as="h1"
            eyebrow="Our Work"
            title="Projects we are proud of"
            subtitle="Filter by category to explore our recent work."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-bar" role="group" aria-label="Filter projects by category">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-btn ${activeCategory === category ? "active" : ""}`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* aria-live announces the result count to screen readers */}
          <p className="result-count" aria-live="polite">
            Showing {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
          </p>

          <div className="grid grid-3">
            {visibleProjects.map((project) => (
              <PortfolioCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
