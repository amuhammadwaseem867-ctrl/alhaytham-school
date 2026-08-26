import Link from "next/link";
import "./Admissions.css";

const admissionSteps = [
  {
    number: "01",
    title: "Explore",
    text: "Discover our academic approach, programs and learning environment.",
  },
  {
    number: "02",
    title: "Apply",
    text: "Submit an admission inquiry or application with the required information.",
  },
  {
    number: "03",
    title: "Connect",
    text: "Our admissions team can guide families through the next steps.",
  },
];

export default function Admissions() {
  return (
    <section className="admissions" id="admissions">
      <div className="admissions-container">

        <div className="admissions-header">
          <div className="admissions-label">
            <span></span>
            ADMISSIONS
          </div>

          <div className="admissions-title">
            <h2>
              Begin their
              <br />
              <em>next chapter.</em>
            </h2>

            <p>
              Choosing a school is an important decision. Explore the
              admissions process and take the first step toward joining
              our learning community.
            </p>
          </div>
        </div>

        <div className="admissions-main">

          <div className="admission-intro">
            <span>ADMISSION PROCESS</span>

            <h3>
              A simple path
              <br />
              <em>forward.</em>
            </h3>
          </div>

          <div className="admission-steps">
            {admissionSteps.map((step) => (
              <div className="admission-step" key={step.number}>

                <div className="step-top">
                  <span>{step.number}</span>
                  <span className="step-line"></span>
                </div>

                <h4>{step.title}</h4>

                <p>{step.text}</p>

              </div>
            ))}
          </div>

        </div>

        <div className="admissions-cta">

          <div>
            <span className="cta-label">READY TO TAKE THE NEXT STEP?</span>

            <h3>
              Start your admission
              <br />
              <em>journey today.</em>
            </h3>
          </div>

          <div className="cta-actions">
            <Link href="#contact" className="admission-primary">
              Admission Inquiry
              <span>↗</span>
            </Link>

            <button className="prospectus-button">
              View Prospectus
              <span>↓</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}