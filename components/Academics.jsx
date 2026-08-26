import "./Academics.css";

const academicLevels = [
  {
    number: "01",
    title: "Early Years",
    text: "A nurturing beginning where curiosity, creativity and confidence develop through meaningful learning experiences.",
    tags: ["Foundation", "Exploration", "Creativity"],
  },
  {
    number: "02",
    title: "Primary School",
    text: "Building strong foundations in core subjects while developing communication, collaboration and independent thinking.",
    tags: ["Core Learning", "Skills", "Growth"],
  },
  {
    number: "03",
    title: "Secondary School",
    text: "A focused academic environment that prepares students for greater challenges, responsibility and future opportunities.",
    tags: ["Academic", "Leadership", "Future"],
  },
];

export default function Academics() {
  return (
    <section className="academics" id="academics">
      <div className="academics-container">

        <div className="academics-top">
          <div className="academics-label">
            <span></span>
            ACADEMICS
          </div>

          <div className="academics-heading">
            <h2>
              Learning with
              <br />
              <em>purpose.</em>
            </h2>

            <p>
              Every stage of education is an opportunity to discover,
              develop and prepare for what comes next.
            </p>
          </div>
        </div>

        <div className="academic-list">
          {academicLevels.map((level) => (
            <article className="academic-card" key={level.number}>

              <div className="academic-number">
                {level.number}
              </div>

              <div className="academic-main">
                <h3>{level.title}</h3>

                <p>{level.text}</p>

                <div className="academic-tags">
                  {level.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="academic-arrow">↗</div>

            </article>
          ))}
        </div>

        <div className="academics-bottom">
          <span>
            EDUCATION BEYOND THE CLASSROOM
          </span>

          <p>
            We believe meaningful education develops both knowledge
            and the confidence to use it.
          </p>
        </div>

      </div>
    </section>
  );
}