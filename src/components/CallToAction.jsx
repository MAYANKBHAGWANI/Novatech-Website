import Button from "./Button.jsx";

// "Call to action" banner shown near the bottom of some pages
export default function CallToAction() {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <h2>Ready to start your project?</h2>
        <p>Tell us about your idea and we will get back to you within one business day.</p>
        <Button to="/contact" variant="light">Contact Us Today</Button>
      </div>
    </section>
  );
}
