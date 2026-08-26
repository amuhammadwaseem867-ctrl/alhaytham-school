"use client";

import Link from "next/link";
import "../StudentPortal.css";
import "./Results.css";

const subjects = [
  {
    subject: "Mathematics",
    code: "MATH-08",
    marks: 91,
    grade: "A+",
    teacher: "Mr. Hassan Khan",
  },
  {
    subject: "Computer Science",
    code: "CS-08",
    marks: 94,
    grade: "A+",
    teacher: "Ms. Sara Ahmed",
  },
  {
    subject: "Science",
    code: "SCI-08",
    marks: 87,
    grade: "A",
    teacher: "Mr. Bilal Shah",
  },
  {
    subject: "English",
    code: "ENG-08",
    marks: 82,
    grade: "A",
    teacher: "Ms. Ayesha Malik",
  },
  {
    subject: "Urdu",
    code: "URD-08",
    marks: 85,
    grade: "A",
    teacher: "Mrs. Nadia Khan",
  },
  {
    subject: "Pakistan Studies",
    code: "PST-08",
    marks: 84,
    grade: "A",
    teacher: "Mr. Hamza Ali",
  },
];

const exams = [
  {
    exam: "First Term Examination",
    date: "12 — 24 May 2026",
    result: "Published",
    percentage: "86%",
  },
  {
    exam: "Monthly Assessment — July",
    date: "15 — 20 July 2026",
    result: "Published",
    percentage: "89%",
  },
  {
    exam: "Monthly Assessment — August",
    date: "18 — 25 Aug 2026",
    result: "In Progress",
    percentage: "—",
  },
];

export default function ResultsPage() {
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

          <Link
            href="/student/results"
            className="student-active"
          >
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

        <header className="results-header">

          <div>

            <span className="student-eyebrow">
              STUDENT PORTAL / RESULTS
            </span>

            <h1>
              My
              <br />
              <em>Results.</em>
            </h1>

            <p>
              Review your examination performance and
              academic progress throughout the year.
            </p>

          </div>

          <div className="results-session">

            <span>ACADEMIC SESSION</span>

            <strong>
              2026 — 2027
            </strong>

          </div>

        </header>


        {/* PERFORMANCE SUMMARY */}

        <section className="results-summary">

          <div className="results-summary-main">

            <span>
              OVERALL AVERAGE
            </span>

            <strong>
              86<small>%</small>
            </strong>

            <p>
              Current academic performance
            </p>

          </div>


          <div className="results-summary-item">

            <span>GRADE</span>

            <strong>A</strong>

            <small>Excellent</small>

          </div>


          <div className="results-summary-item">

            <span>CLASS POSITION</span>

            <strong>#04</strong>

            <small>Out of 32 students</small>

          </div>


          <div className="results-summary-item">

            <span>SUBJECTS</span>

            <strong>06</strong>

            <small>Currently enrolled</small>

          </div>

        </section>


        {/* SUBJECT RESULTS */}

        <section className="results-section">

          <div className="results-section-heading">

            <div>

              <span>
                CURRENT PERFORMANCE
              </span>

              <h2>
                Subject Results
              </h2>

            </div>

            <span>
              FIRST TERM
            </span>

          </div>


          <div className="results-table">

            <div className="results-table-head">

              <span>SUBJECT</span>
              <span>TEACHER</span>
              <span>MARKS</span>
              <span>GRADE</span>

            </div>


            {subjects.map((item) => (

              <div
                className="results-table-row"
                key={item.code}
              >

                <div className="result-subject">

                  <strong>
                    {item.subject}
                  </strong>

                  <small>
                    {item.code}
                  </small>

                </div>


                <span className="result-teacher">
                  {item.teacher}
                </span>


                <div className="result-marks">

                  <strong>
                    {item.marks}%
                  </strong>

                  <div className="result-progress">

                    <i
                      style={{
                        width: `${item.marks}%`,
                      }}
                    ></i>

                  </div>

                </div>


                <strong className="result-grade">
                  {item.grade}
                </strong>

              </div>

            ))}

          </div>

        </section>


        {/* EXAMINATION HISTORY */}

        <section className="results-section">

          <div className="results-section-heading">

            <div>

              <span>
                EXAMINATION HISTORY
              </span>

              <h2>
                Academic Assessments
              </h2>

            </div>

            <span>
              2026
            </span>

          </div>


          <div className="exam-list">

            {exams.map((exam) => (

              <div
                className="exam-row"
                key={exam.exam}
              >

                <div className="exam-number">
                  0{exams.indexOf(exam) + 1}
                </div>

                <div className="exam-info">

                  <strong>
                    {exam.exam}
                  </strong>

                  <span>
                    {exam.date}
                  </span>

                </div>

                <div
                  className={`exam-status ${
                    exam.result === "Published"
                      ? "published"
                      : "progress"
                  }`}
                >
                  {exam.result}
                </div>

                <strong className="exam-percentage">
                  {exam.percentage}
                </strong>

              </div>

            ))}

          </div>

        </section>


        {/* GRADE SCALE */}

        <section className="grade-scale">

          <div className="grade-scale-title">

            <span>
              GRADING SYSTEM
            </span>

            <h3>
              Grade Scale
            </h3>

          </div>


          <div className="grade-items">

            <div>
              <strong>A+</strong>
              <span>90 — 100%</span>
            </div>

            <div>
              <strong>A</strong>
              <span>80 — 89%</span>
            </div>

            <div>
              <strong>B</strong>
              <span>70 — 79%</span>
            </div>

            <div>
              <strong>C</strong>
              <span>60 — 69%</span>
            </div>

            <div>
              <strong>D</strong>
              <span>50 — 59%</span>
            </div>

            <div>
              <strong>F</strong>
              <span>Below 50%</span>
            </div>

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