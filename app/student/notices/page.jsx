"use client";

import Link from "next/link";
import "../StudentPortal.css";
import "./Notices.css";

const notices = [
  {
    number: "01",
    date: "26 AUG 2026",
    category: "IMPORTANT",
    title: "Parent-Teacher Meeting",
    description:
      "The school will conduct a parent-teacher meeting for Grade 8 students. Parents are requested to attend according to the scheduled timings.",
    tag: "Important",
  },
  {
    number: "02",
    date: "24 AUG 2026",
    category: "ACADEMIC",
    title: "Monthly Assessment Results",
    description:
      "Monthly assessment results will be published through the student portal once the evaluation process has been completed.",
    tag: "Academic",
  },
  {
    number: "03",
    date: "20 AUG 2026",
    category: "EVENT",
    title: "Independence Day Activities",
    description:
      "Students participated in various activities and competitions organized by the school to celebrate Independence Day.",
    tag: "Event",
  },
  {
    number: "04",
    date: "15 AUG 2026",
    category: "GENERAL",
    title: "School Timings Update",
    description:
      "Regular school timings will continue from 7:45 AM to 1:45 PM. Students are advised to arrive before the morning assembly.",
    tag: "General",
  },
  {
    number: "05",
    date: "08 AUG 2026",
    category: "ACADEMIC",
    title: "Science Project Submission",
    description:
      "All Grade 8 students are required to submit their science projects to their respective subject teacher before the announced deadline.",
    tag: "Academic",
  },
];

export default function NoticesPage() {
  return (
    <main className="student-portal">

      {/* SIDEBAR */}

      <aside className="student-sidebar">

        <Link href="/" className="student-logo">
          <span>AL-HAYTHAM</span>
          <small>STUDENT PORTAL</small>
        </Link>

        <div className="student-user">

          <div className="student-avatar">
            AA
          </div>

          <div>
            <strong>Ali Ahmed</strong>
            <span>ST-1001 · Grade 8-A</span>
          </div>

        </div>

        <nav className="student-nav">

          <span className="student-nav-label">
            PORTAL
          </span>

          <Link href="/student">
            <span>01</span>
            Dashboard
          </Link>

          <Link href="/student/profile">
            <span>02</span>
            Profile
          </Link>

          <Link href="/student/attendance">
            <span>03</span>
            Attendance
          </Link>

          <Link href="/student/results">
            <span>04</span>
            Results
          </Link>

          <Link href="/student/fees">
            <span>05</span>
            Fees
          </Link>

          <Link
            href="/student/notices"
            className="student-active"
          >
            <span>06</span>
            Notices
          </Link>

        </nav>

        <Link href="/login" className="student-signout">
          ← Sign out
        </Link>

      </aside>


      {/* MAIN */}

      <section className="student-main">

        {/* HEADER */}

        <header className="notices-header">

          <div>

            <span className="student-eyebrow">
              STUDENT PORTAL / NOTICES
            </span>

            <h1>
              School
              <br />
              <em>Notices.</em>
            </h1>

            <p>
              Stay updated with important school announcements,
              academic information and upcoming events.
            </p>

          </div>

          <div className="notices-session">

            <span>ACADEMIC SESSION</span>

            <strong>
              2026 — 2027
            </strong>

          </div>

        </header>


        {/* NOTICE INTRO */}

        <section className="notices-intro">

          <div className="notices-intro-number">
            06
          </div>

          <div>

            <span>
              SCHOOL COMMUNICATION
            </span>

            <h2>
              Latest Updates
            </h2>

            <p>
              Important announcements from Al-Haytham School
              are listed below. Please check this section
              regularly for new updates.
            </p>

          </div>

        </section>


        {/* NOTICES LIST */}

        <section className="notices-list">

          {notices.map((notice) => (

            <article
              className="notice-card"
              key={notice.number}
            >

              <div className="notice-number">
                {notice.number}
              </div>


              <div className="notice-content">

                <div className="notice-meta">

                  <span>
                    {notice.date}
                  </span>

                  <span>
                    {notice.category}
                  </span>

                </div>


                <h2>
                  {notice.title}
                </h2>

                <p>
                  {notice.description}
                </p>


                <div className="notice-bottom">

                  <span className="notice-tag">
                    {notice.tag}
                  </span>

                  <button type="button">
                    View Notice
                    <span>→</span>
                  </button>

                </div>

              </div>

            </article>

          ))}

        </section>


        {/* CALENDAR */}

        <section className="notice-calendar">

          <div className="notice-calendar-heading">

            <div>

              <span>
                UPCOMING
              </span>

              <h2>
                Important Dates
              </h2>

            </div>

            <span>
              SEPTEMBER 2026
            </span>

          </div>


          <div className="important-dates">

            <div className="important-date">

              <strong>
                05
              </strong>

              <div>
                <span>
                  SEPTEMBER
                </span>

                <p>
                  Monthly Fee Due Date
                </p>
              </div>

            </div>


            <div className="important-date">

              <strong>
                07
              </strong>

              <div>
                <span>
                  SEPTEMBER
                </span>

                <p>
                  Parent-Teacher Meeting
                </p>
              </div>

            </div>


            <div className="important-date">

              <strong>
                14
              </strong>

              <div>
                <span>
                  SEPTEMBER
                </span>

                <p>
                  New Academic Assessment
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* CONTACT */}

        <section className="notice-contact">

          <div className="notice-contact-number">
            01
          </div>

          <div>

            <span>
              SCHOOL OFFICE
            </span>

            <h3>
              Have a question?
            </h3>

            <p>
              For clarification regarding any school notice,
              please contact the administration office.
            </p>

            <a href="mailto:info@alhaythamschool.edu.pk">
              Contact Administration →
            </a>

          </div>

        </section>


        {/* FOOTER */}

        <footer className="student-footer">

          <span>
            AL-HAYTHAM SCHOOL
          </span>

          <span>
            STUDENT PORTAL · 2026
          </span>

        </footer>

      </section>

    </main>
  );
}