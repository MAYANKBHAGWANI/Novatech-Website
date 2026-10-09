import Seo from "../components/Seo.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import CallToAction from "../components/CallToAction.jsx";
import { services, faqs } from "../data/data.js";

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Web development, UI/UX design, mobile apps, SEO, e-commerce and website maintenance from NovaTech Solutions."
      />
      <section className="page-header">
        <div className="container">
          <SectionTitle
            as="h1"
            eyebrow="Our Services"
            title="Services that help your business grow"
            subtitle="From the first idea to launch day and beyond, we have you covered."
          />
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          {services.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container narrow">
          <SectionTitle eyebrow="FAQ" title="Frequently asked questions" />
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CallToAction />
    </>
  );
}
