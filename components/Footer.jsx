import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* MAIN FOOTER */}

        <div className="footer-main">

          {/* BRAND */}

          <div className="footer-brand">

            <Link href="/" className="footer-logo">
              AL-HAYTHAM
              <span>SCHOOL</span>
            </Link>

            <p>
              Inspiring minds, developing character and preparing
              students for a brighter future.
            </p>

            <Link
              href="#admissions"
              className="footer-cta"
            >
              Start Your Journey
              <span>↗</span>
            </Link>

          </div>


          {/* EXPLORE */}

          <div className="footer-column">

            <span className="footer-heading">
              EXPLORE
            </span>

            <Link href="#about">
              About
            </Link>

            <Link href="#academics">
              Academics
            </Link>

            <Link href="#admissions">
              Admissions
            </Link>

            <Link href="#campus">
              Campus
            </Link>

          </div>


          {/* DISCOVER */}

          <div className="footer-column">

            <span className="footer-heading">
              DISCOVER
            </span>

            <Link href="#news">
              News & Events
            </Link>

            <Link href="#gallery">
              Gallery
            </Link>

            <Link href="#contact">
              Contact
            </Link>

            <Link href="/login">
              Login Portal
            </Link>

          </div>


          {/* CONTACT */}

          <div className="footer-column footer-contact">

            <span className="footer-heading">
              GET IN TOUCH
            </span>

            <a href="mailto:info@alhaythamschool.com">
              info@alhaythamschool.com
            </a>

            <a href="tel:+920000000000">
              +92 000 000 0000
            </a>

            <p>
              School Campus
              <br />
              Pakistan
            </p>

          </div>

        </div>


        {/* FOOTER BOTTOM */}

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Al-Haytham School.
            All rights reserved.
          </span>


          <div className="footer-bottom-links">

            <Link href="/privacy">
              Privacy
            </Link>

            <Link href="/terms">
              Terms
            </Link>

          </div>


          <span className="footer-made">
            Designed & Developed by WA Creative Solutions.
          </span>

        </div>

      </div>
    </footer>
  );
}