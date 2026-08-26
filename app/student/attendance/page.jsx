"use client";

import Link from "next/link";
import "../StudentPortal.css";
import "./Attendance.css";

const attendanceData = [
  {
    month: "August 2026",
    total: 22,
    present: 20,
    absent: 1,
    late: 1,
    percentage: 91,
  },
  {
    month: "July 2026",
    total: 23,
    present: 22,
    absent: 1,
    late: 0,
    percentage: 96,
  },
  {
    month: "June 2026",
    total: 21,
    present: 20,
    absent: 1,
    late: 0,
    percentage: 95,
  },
  {
    month: "May 2026",
    total: 22,
    present: 21,
    absent: 0,
    late: 1,
    percentage: 95,
  },
];

const recentAttendance = [
  {
    date: "26 Aug 2026",
    day: "Wednesday",
    status: "Present",
  },
  {
    date: "25 Aug 2026",
    day: "Tuesday",
    status: "Present",
  },
  {
    date: "24 Aug 2026",
    day: "Monday",
    status: "Present",
  },
  {
    date: "21 Aug 2026",
    day: "Friday",
    status: "Late",
  },
  {
    date: "20 Aug 2026",
    day: "Thursday",
    status: "Present",
  },
  {
    date: "19 Aug 2026",
    day: "Wednesday",
    status: "Absent",
  },
];

export default function AttendancePage() {
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

          <Link
            href="/student/attendance"
            className="student-active"
          >
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


      {/* MAIN */}

      <section className="student-main">

        {/* HEADER */}

        <header className="attendance-header">

          <div>

            <span className="student-eyebrow">
              STUDENT PORTAL / ATTENDANCE
            </span>

            <h1>
              My
              <br />
              <em>Attendance.</em>
            </h1>

            <p>
              Track your attendance record throughout
              the academic year.
            </p>

          </div>

          <div className="attendance-session">

            <span>ACADEMIC SESSION</span>

            <strong>
              2026 — 2027
            </strong>

          </div>

        </header>


        {/* OVERALL ATTENDANCE */}

        <section className="attendance-overview">

          <div className="attendance-overview-main">

            <span>
              OVERALL ATTENDANCE
            </span>

            <div className="attendance-percentage">
              94<small>%</small>
            </div>

            <p>
              Excellent attendance
            </p>

          </div>


          <div className="attendance-ring">

            <div className="attendance-ring-inner">
              <strong>94%</strong>
              <span>Present</span>
            </div>

          </div>


          <div className="attendance-overview-stats">

            <div>
              <span>PRESENT</span>
              <strong>83</strong>
            </div>

            <div>
              <span>ABSENT</span>
              <strong>3</strong>
            </div>

            <div>
              <span>LATE</span>
              <strong>2</strong>
            </div>

            <div>
              <span>TOTAL DAYS</span>
              <strong>88</strong>
            </div>

          </div>

        </section>


        {/* MONTHLY ATTENDANCE */}

        <section className="attendance-section">

          <div className="attendance-section-heading">

            <div>

              <span>
                MONTHLY RECORD
              </span>

              <h2>
                Attendance History
              </h2>

            </div>

            <span className="attendance-year">
              2026
            </span>

          </div>


          <div className="attendance-table">

            <div className="attendance-table-head">

              <span>MONTH</span>
              <span>TOTAL</span>
              <span>PRESENT</span>
              <span>ABSENT</span>
              <span>LATE</span>
              <span>RATE</span>

            </div>


            {attendanceData.map((item) => (

              <div
                className="attendance-table-row"
                key={item.month}
              >

                <strong>
                  {item.month}
                </strong>

                <span>
                  {item.total}
                </span>

                <span className="attendance-present">
                  {item.present}
                </span>

                <span className="attendance-absent">
                  {item.absent}
                </span>

                <span className="attendance-late">
                  {item.late}
                </span>

                <div className="attendance-rate">

                  <strong>
                    {item.percentage}%
                  </strong>

                  <div className="attendance-bar">
                    <i
                      style={{
                        width: `${item.percentage}%`,
                      }}
                    ></i>
                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* RECENT ATTENDANCE */}

        <section className="attendance-section">

          <div className="attendance-section-heading">

            <div>

              <span>
                DAILY RECORD
              </span>

              <h2>
                Recent Attendance
              </h2>

            </div>

            <span className="attendance-year">
              AUGUST
            </span>

          </div>


          <div className="recent-attendance">

            {recentAttendance.map((item) => (

              <div
                className="recent-attendance-row"
                key={item.date}
              >

                <div className="recent-date">

                  <strong>
                    {item.date}
                  </strong>

                  <span>
                    {item.day}
                  </span>

                </div>


                <div
                  className={`attendance-status ${
                    item.status.toLowerCase()
                  }`}
                >

                  <span></span>

                  {item.status}

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* ATTENDANCE NOTE */}

        <section className="attendance-note">

          <div className="attendance-note-number">
            01
          </div>

          <div>

            <span>
              SCHOOL POLICY
            </span>

            <h3>
              Attendance matters.
            </h3>

            <p>
              Students are expected to maintain regular
              attendance throughout the academic session.
              If you believe an attendance record is incorrect,
              please contact the school administration.
            </p>

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