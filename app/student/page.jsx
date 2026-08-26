"use client";

import Link from "next/link";
import "./StudentPortal.css";

const menu = [
  ["01", "Dashboard", "/student"],
  ["02", "Profile", "/student/profile"],
  ["03", "Attendance", "/student/attendance"],
  ["04", "Results", "/student/results"],
  ["05", "Fees", "/student/fees"],
  ["06", "Notices", "/student/notices"],
];

export default function StudentPortal() {
  return (
    <main className="student-portal">

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

          {menu.map(([number, label, href]) => (
            <Link
              href={href}
              key={href}
              className={href === "/student" ? "student-active" : ""}
            >
              <span>{number}</span>
              {label}
            </Link>
          ))}

        </nav>

        <Link href="/login" className="student-signout">
          ← Sign out
        </Link>

      </aside>


      <section className="student-main">

        <header className="student-header">

          <div>

            <span className="student-eyebrow">
              STUDENT PORTAL / 2026
            </span>

            <h1>
              Welcome,
              <br />
              <em>Ali.</em>
            </h1>

            <p>
              Your academic overview, attendance,
              results and school updates — all in one place.
            </p>

          </div>

          <div className="student-date">
            <span>ACADEMIC SESSION</span>
            <strong>2026 — 2027</strong>
          </div>

        </header>


        <section className="student-welcome">

          <div>

            <span>
              GOOD MORNING
            </span>

            <h2>
              Keep going, Ali.
            </h2>

            <p>
              You're doing well this semester.
              Stay consistent and keep working towards your goals.
            </p>

          </div>

          <div className="student-progress">

            <span>
              OVERALL PERFORMANCE
            </span>

            <strong>
              86%
            </strong>

            <div>
              <i></i>
            </div>

          </div>

        </section>


        <section className="student-stats">

          <div className="student-stat">

            <span>
              ATTENDANCE
            </span>

            <strong>
              94%
            </strong>

            <small>
              Excellent
            </small>

          </div>

          <div className="student-stat">

            <span>
              CLASS POSITION
            </span>

            <strong>
              #04
            </strong>

            <small>
              Out of 32 students
            </small>

          </div>

          <div className="student-stat">

            <span>
              AVERAGE
            </span>

            <strong>
              86%
            </strong>

            <small>
              Current academic year
            </small>

          </div>

          <div className="student-stat">

            <span>
              PENDING FEES
            </span>

            <strong>
              PKR 8,500
            </strong>

            <small>
              Due this month
            </small>

          </div>

        </section>


        <section className="student-grid">

          <div className="student-card">

            <div className="student-card-heading">

              <div>
                <span>ACADEMIC</span>
                <h2>Recent Results</h2>
              </div>

              <Link href="/student/results">
                View all →
              </Link>

            </div>

            <div className="student-result-list">

              <div>
                <span>Mathematics</span>
                <strong>91%</strong>
              </div>

              <div>
                <span>Computer Science</span>
                <strong>94%</strong>
              </div>

              <div>
                <span>Science</span>
                <strong>87%</strong>
              </div>

              <div>
                <span>English</span>
                <strong>82%</strong>
              </div>

            </div>

          </div>


          <div className="student-card">

            <div className="student-card-heading">

              <div>
                <span>UPDATES</span>
                <h2>Latest Notices</h2>
              </div>

              <Link href="/student/notices">
                View all →
              </Link>

            </div>

            <div className="student-notice-list">

              <Link href="/student/notices">
                <small>26 AUG 2026</small>
                <strong>
                  Annual Examination Schedule 2026
                </strong>
              </Link>

              <Link href="/student/notices">
                <small>24 AUG 2026</small>
                <strong>
                  Parent Teacher Meeting
                </strong>
              </Link>

              <Link href="/student/notices">
                <small>22 AUG 2026</small>
                <strong>
                  School Timing Update
                </strong>
              </Link>

            </div>

          </div>

        </section>


        <section className="student-quick-links">

          <Link href="/student/profile">
            <span>01</span>
            <strong>My Profile</strong>
            <small>View personal information</small>
            →
          </Link>

          <Link href="/student/attendance">
            <span>02</span>
            <strong>Attendance</strong>
            <small>Track your attendance</small>
            →
          </Link>

          <Link href="/student/results">
            <span>03</span>
            <strong>Results</strong>
            <small>View examination marks</small>
            →
          </Link>

          <Link href="/student/fees">
            <span>04</span>
            <strong>Fee Status</strong>
            <small>Check your fee details</small>
            →
          </Link>

        </section>


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