import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-header">
          <div className="contact-label">
            <span></span>
            CONTACT
          </div>

          <div className="contact-heading">
            <h2>
              Let's start a
              <br />
              <em>conversation.</em>
            </h2>

            <p>
              Have a question about admissions, academics or school life?
              Get in touch with our team.
            </p>
          </div>
        </div>

        <div className="contact-main">

          <div className="contact-info">

            <div className="contact-block">
              <span>GENERAL ENQUIRIES</span>

              <a href="mailto:info@alhaythamschool.com">
                info@alhaythamschool.com
              </a>
            </div>

            <div className="contact-block">
              <span>PHONE</span>

              <a href="tel:+920000000000">
                +92 000 000 0000
              </a>
            </div>

            <div className="contact-block">
              <span>LOCATION</span>

              <p>
                School Campus
                <br />
                Pakistan
              </p>
            </div>

            <div className="contact-socials">
              <a href="#" aria-label="Facebook">
                Facebook
              </a>

              <a href="#" aria-label="Instagram">
                Instagram
              </a>

              <a href="#" aria-label="YouTube">
                YouTube
              </a>
            </div>

          </div>

          <form className="contact-form">

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">FULL NAME</label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">EMAIL ADDRESS</label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="phone">PHONE NUMBER</label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="+92"
                />
              </div>

              <div className="form-field">
                <label htmlFor="subject">SUBJECT</label>

                <select id="subject" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="admissions">
                    Admissions
                  </option>
                  <option value="academics">
                    Academics
                  </option>
                  <option value="general">
                    General Enquiry
                  </option>
                  <option value="other">
                    Other
                  </option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">MESSAGE</label>

              <textarea
                id="message"
                rows="5"
                placeholder="How can we help?"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Enquiry
              <span>↗</span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}