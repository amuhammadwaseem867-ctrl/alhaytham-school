"use client";

import Link from "next/link";
import "../StudentPortal.css";
import "./Dashboard.css";

const subjects = [
  {
    name: "Mathematics",
    teacher: "Mr. Hassan Khan",
    marks: "91%",
    grade: "A+",
  },
  {
    name: "Computer Science",
    teacher: "Ms. Sara Ahmed",
    marks: "94%",
    grade: "A+",
  },
  {
    name: "Science",
    teacher: "Mr. Bilal Shah",
    marks: "87%",
    grade: "A",
  },
];

const notices = [
  {
    date: "26 AUG",
    title: "Parent-Teacher Meeting",
    type: "IMPORTANT",
  },
  {
    date: "24 AUG",
    title: "Monthly Assessment Results",
    type: "ACADEMIC",
  },
  {
    date: "20 AUG",
    title: "Independence Day Activities",
    type: "EVENT",
  },
];

export default function DashboardPage() {
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

          <Link
            href="/student/dashboard"
            className="student-active"
          >
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

          <Link href="/student/notices">
            <span>06</span>
            Notices
          </Link>

        </nav>

        <Link href="/login" className="student-signout">
          ← Sign out
        </Link>

      </aside>


      <section className="student-main">

        <header className="dashboard-header">

          <div>

            <span className="student-eyebrow">
              STUDENT PORTAL / DASHBOARD
            </span>

            <h1>
              Good morning,
              <br />
              <em>Ali.</em>
            </h1>

            <p>
              Welcome back to your student portal.
              Here's a quick overview of your academic progress.
            </p>

          </div>

          <div className="dashboard-date">
            <span>WEDNESDAY</span>
            <strong>26</strong>
            <small>AUGUST 2026</small>
          </div>

        </header>


        <section className="dashboard-profile">

          <div className="dashboard-profile-avatar">
            AA
          </div>

          <div className="dashboard-profile-info">

            <span>
              STUDENT ID · ST-1001
            </span>

            <h2>
              Ali Ahmed
            </h2>

            <p>
              Grade 8 · Section A · Roll No. 14
            </p>

          </div>

          <Link
            href="/student/profile"
            className="dashboard-profile-link"
          >
            View Profile →
          </Link>

        </section>


        <section className="dashboard-stats">

          <div className="dashboard-stat">
            <span>ATTENDANCE</span>
            <strong>94<small>%</small></strong>
            <p>Excellent</p>
          </div>

          <div className="dashboard-stat">
            <span>AVERAGE RESULT</span>
            <strong>86<small>%</small></strong>
            <p>Grade A</p>
          </div>

          <div className="dashboard-stat">
            <span>CLASS POSITION</span>
            <strong>#04</strong>
            <p>Out of 32 students</p>
          </div>

          <div className="dashboard-stat">
            <span>FEE STATUS</span>
            <strong className="dashboard-fee">
              DUE
            </strong>
            <p>PKR 18,000</p>
          </div>

        </section>


        <section className="dashboard-grid">

          <div className="dashboard-card">

            <div className="dashboard-card-heading">

              <div>
                <span>ACADEMIC PERFORMANCE</span>
                <h2>Recent Results</h2>
              </div>

              <Link href="/student/results">
                View all →
              </Link>

            </div>


            <div className="dashboard-subjects">

              {subjects.map((subject) => (

                <div
                  className="dashboard-subject"
                  key={subject.name}
                >

                  <div className="subject-info">
                    <strong>{subject.name}</strong>
                    <span>{subject.teacher}</span>
                  </div>

                  <div className="subject-score">
                    <strong>{subject.marks}</strong>
                    <span>{subject.grade}</span>
                  </div>

                </div>

              ))}

            </div>

            <Link
              href="/student/results"
              className="dashboard-card-button"
            >
              View Complete Results
              <span>→</span>
            </Link>

          </div>


          <div className="dashboard-card">

            <div className="dashboard-card-heading">

              <div>
                <span>ATTENDANCE</span>
                <h2>This Month</h2>
              </div>

              <Link href="/student/attendance">
                Details →
              </Link>

            </div>


            <div className="dashboard-attendance">

              <div className="dashboard-attendance-ring">

                <div>
                  <strong>91%</strong>
                  <span>PRESENT</span>
                </div>

              </div>


              <div className="attendance-mini-stats">

                <div>
                  <strong>20</strong>
                  <span>Present</span>
                </div>

                <div>
                  <strong>1</strong>
                  <span>Absent</span>
                </div>

                <div>
                  <strong>1</strong>
                  <span>Late</span>
                </div>

              </div>

            </div>

          </div>


          <div className="dashboard-card">

            <div className="dashboard-card-heading">

              <div>
                <span>SCHOOL UPDATES</span>
                <h2>Latest Notices</h2>
              </div>

              <Link href="/student/notices">
                All notices →
              </Link>

            </div>


            <div className="dashboard-notice-list">

              {notices.map((notice) => (

                <Link
                  href="/student/notices"
                  className="dashboard-notice"
                  key={notice.title}
                >

                  <div className="notice-date">
                    {notice.date}
                  </div>

                  <div className="notice-info">
                    <strong>{notice.title}</strong>
                    <span>{notice.type}</span>
                  </div>

                  <span className="notice-arrow">
                    →
                  </span>

                </Link>

              ))}

            </div>

          </div>


          <div className="dashboard-card">

            <div className="dashboard-card-heading">

              <div>
                <span>FEE OVERVIEW</span>
                <h2>Current Fee</h2>
              </div>

              <Link href="/student/fees">
                Details →
              </Link>

            </div>


            <div className="dashboard-fee-main">

              <span>OUTSTANDING BALANCE</span>

              <strong>
                PKR 18,000
              </strong>

              <p>
                Due on 05 September 2026
              </p>

            </div>

            <Link
              href="/student/fees"
              className="dashboard-card-button"
            >
              View Fee Details
              <span>→</span>
            </Link>

          </div>

        </section>


        <section className="dashboard-quick">

          <span>QUICK ACCESS</span>

          <div className="quick-links">

            <Link href="/student/profile">
              <strong>01</strong>
              My Profile
              <span>→</span>
            </Link>

            <Link href="/student/attendance">
              <strong>02</strong>
              Attendance
              <span>→</span>
            </Link>

            <Link href="/student/results">
              <strong>03</strong>
              Results
              <span>→</span>
            </Link>

            <Link href="/student/fees">
              <strong>04</strong>
              Fee Details
              <span>→</span>
            </Link>

          </div>

        </section>


        <footer className="student-footer">

          <span>AL-HAYTHAM SCHOOL</span>

          <span>
            STUDENT PORTAL · 2026
          </span>

        </footer>

      </section>

    </main>
  );
}