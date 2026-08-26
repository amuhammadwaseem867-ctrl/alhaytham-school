import "./Campus.css";

const facilities = [
  {
    number: "01",
    title: "Learning Spaces",
    text: "Thoughtfully designed spaces that support focused learning, discussion and collaboration.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "02",
    title: "Science & Discovery",
    text: "An environment that encourages students to question, experiment and discover.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "03",
    title: "Sports & Activity",
    text: "Opportunities for students to stay active, develop teamwork and build confidence.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "04",
    title: "Creative Spaces",
    text: "Encouraging creativity through art, ideas, expression and hands-on experiences.",
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function Campus() {
  return (
    <section className="campus" id="campus">
      <div className="campus-container">

        {/* HEADER */}

        <div className="campus-header">

          <div className="campus-label">
            <span></span>
            CAMPUS & FACILITIES
          </div>

          <div className="campus-heading">

            <h2>
              More than
              <br />
              <em>a classroom.</em>
            </h2>

            <p>
              A positive learning environment extends beyond lessons.
              Our campus is designed to give students space to learn,
              explore, create and grow.
            </p>

          </div>

        </div>


        {/* FACILITIES */}

        <div className="campus-grid">

          {facilities.map((facility) => (

            <article
              className="campus-card"
              key={facility.number}
            >

              <div
                className="campus-image"
                style={{
                  backgroundImage: `url("${facility.image}")`,
                }}
              >

                <div className="campus-image-overlay"></div>

                <span className="campus-number">
                  {facility.number}
                </span>

                <span className="campus-icon">
                  ↗
                </span>

              </div>

              <div className="campus-card-content">

                <h3>
                  {facility.title}
                </h3>

                <p>
                  {facility.text}
                </p>

              </div>

            </article>

          ))}

        </div>


        {/* BOTTOM */}

        <div className="campus-bottom">

          <span>
            DISCOVER THE ENVIRONMENT
          </span>

          <div className="campus-line"></div>

          <p>
            Every space is an opportunity for students to discover
            something new.
          </p>

        </div>

      </div>
    </section>
  );
}