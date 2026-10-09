import Seo from "../components/Seo.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import StatsCard from "../components/StatsCard.jsx";
import TeamCard from "../components/TeamCard.jsx";
import CallToAction from "../components/CallToAction.jsx";
import { values, stats, team } from "../data/data.js";

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about NovaTech Solutions, our story, mission, vision, values and team."
      />
      <section className="page-header">
        <div className="container">
          <SectionTitle
            as="h1"
            eyebrow="About Us"
            title="We are NovaTech Solutions"
            subtitle="A small, passionate team building modern websites for growing businesses."
          />
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <div>
            <h2>Our Story</h2>
            <p>
              NovaTech Solutions started more than five years ago with a simple idea: every business,
              big or small, deserves a website that is fast, beautiful and easy to use.
            </p>
            <p>
              What began as two friends building websites for local shops has grown into a full
              digital agency that has delivered over 50 projects for clients around the world.
            </p>
          </div>
          <div className="grid mission-grid">
            <article className="card">
              <h2 className="card-heading">🎯 Our Mission</h2>
              <p>To help businesses grow by creating modern, accessible and high-quality digital experiences.</p>
            </article>
            <article className="card">
              <h2 className="card-heading">🔭 Our Vision</h2>
              <p>To be the most trusted web agency for small and growing businesses everywhere.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle eyebrow="Core Values" title="What we believe in" />
          <div className="grid grid-4">
            {values.map((v) => <FeatureCard key={v.title} {...v} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats-grid stats-wide">
            {stats.map((s) => <StatsCard key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle eyebrow="Our Team" title="Meet the people behind NovaTech" />
          <div className="grid grid-4">
            {team.map((member) => <TeamCard key={member.name} {...member} />)}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
