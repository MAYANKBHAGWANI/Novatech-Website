import Seo from "../components/Seo.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { contactInfo } from "../data/data.js";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with NovaTech Solutions for a free quote on your website project."
      />
      <section className="page-header">
        <div className="container">
          <SectionTitle
            as="h1"
            eyebrow="Contact Us"
            title="Let's talk about your project"
            subtitle="Fill in the form and we will reply within one business day."
          />
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2 contact-layout">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <ul className="info-list">
              <li><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
              <li><strong>Phone:</strong> <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`}>{contactInfo.phone}</a></li>
              <li><strong>Address:</strong> {contactInfo.address}</li>
            </ul>

            <h2>Business Hours</h2>
            <ul className="info-list">
              {contactInfo.hours.map((h) => (
                <li key={h.days}><strong>{h.days}:</strong> {h.time}</li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
