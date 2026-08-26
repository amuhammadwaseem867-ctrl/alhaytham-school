import Link from "next/link";
import "./Hero.css";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=90')",
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-eyebrow">
            <span></span>
            EXCELLENCE • CHARACTER • FUTURE
          </div>

          <h1>
            Inspiring Minds.
            <br />
            <em>Shaping Futures.</em>
          </h1>

          <p>
            A learning environment where curiosity, character and academic
            excellence come together to prepare students for a brighter future.
          </p>

          <div className="hero-actions">

            <Link
              href="#admissions"
              className="hero-primary"
            >
              Explore Admissions
              <span>↗</span>
            </Link>

            <Link
              href="#about"
              className="hero-secondary"
            >
              Discover Our School
            </Link>

          </div>

        </div>


        <div className="hero-bottom">

          <div className="hero-stat">
            <strong>01</strong>
            <span>Academic Excellence</span>
          </div>

          <div className="hero-stat">
            <strong>02</strong>
            <span>Character Building</span>
          </div>

          <div className="hero-stat">
            <strong>03</strong>
            <span>Future Ready</span>
          </div>

        </div>

      </div>
    </section>
  );
}