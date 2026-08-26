import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-heading">
          <span className="section-label">ABOUT AL-HAYTHAM</span>

          <h2>
            A place where
            <br />
            <em>learning begins.</em>
          </h2>
        </div>

        <div className="about-content">

          <div className="about-intro">
            <p>
              At Al-Haytham School, education is envisioned as more than
              academic achievement. It is about developing confident,
              curious and responsible individuals prepared for the world
              ahead.
            </p>
          </div>

          <div className="about-details">
            <p>
              Our approach brings together meaningful learning, personal
              development and a supportive educational environment. We aim
              to encourage students to discover their strengths, develop
              strong values and approach every new challenge with confidence.
            </p>

            <a href="#academics" className="about-link">
              Discover Our Approach
              <span>↗</span>
            </a>
          </div>

        </div>

        <div className="about-features">

          <div className="about-feature">
            <span className="feature-number">01</span>

            <div>
              <h3>Academic Focus</h3>
              <p>
                A structured learning environment designed to encourage
                knowledge, curiosity and continuous growth.
              </p>
            </div>
          </div>

          <div className="about-feature">
            <span className="feature-number">02</span>

            <div>
              <h3>Character</h3>
              <p>
                Helping students develop responsibility, confidence,
                discipline and respect for others.
              </p>
            </div>
          </div>

          <div className="about-feature">
            <span className="feature-number">03</span>

            <div>
              <h3>Future Ready</h3>
              <p>
                Encouraging creativity, communication and skills that
                students can carry into their future.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}