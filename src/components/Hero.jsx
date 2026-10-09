import Button from "./Button.jsx";

// Big banner at the top of the Home page
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text fade-in">
          <p className="eyebrow">Web Development Agency</p>
          <h1>Build Better Digital Experiences</h1>
          <p className="hero-description">
            NovaTech Solutions creates modern, fast and responsive digital experiences for growing businesses.
          </p>
          <div className="button-group">
            <Button to="/contact">Get Started</Button>
            <Button to="/services" variant="outline">View Our Services</Button>
          </div>
        </div>
        {/* Decorative card made with CSS only - no image needed */}
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-card">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <pre>{`<Website />
  fast ⚡
  responsive 📱
  accessible ♿`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}
