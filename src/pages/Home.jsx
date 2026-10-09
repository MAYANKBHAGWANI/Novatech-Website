import Seo from "../components/Seo.jsx";
import Hero from "../components/Hero.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import StatsCard from "../components/StatsCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import CallToAction from "../components/CallToAction.jsx";
import { features, whyChooseUs, stats, testimonials } from "../data/data.js";

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="NovaTech Solutions creates modern, fast and responsive websites for growing businesses."
      />
      <Hero />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="What we do best"
            title="Everything your website needs"
            subtitle="We combine design and technology to build websites that work for your customers."
          />
          <div className="grid grid-4">
            {features.map((f) => <FeatureCard key={f.title} {...f} />)}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid grid-2 align-center">
          <div>
            <SectionTitle eyebrow="Why choose us" title="A partner you can trust" align="left" />
            <ul className="check-list">
              {whyChooseUs.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="stats-grid">
            {stats.map((s) => <StatsCard key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Testimonials" title="What our clients say" />
          <div className="grid grid-3">
            {testimonials.map((t) => <TestimonialCard key={t.name} {...t} />)}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
