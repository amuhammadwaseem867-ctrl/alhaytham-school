"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import "./Results.css";

const initialResults = [
  {
    id: "ST-1001",
    name: "Ali Ahmed",
    roll: "01",
    className: "Grade 8-A",
    english: 82,
    mathematics: 91,
    science: 87,
    computer: 94,
    urdu: 78,
  },
  {
    id: "ST-1002",
    name: "Hamza Khan",
    roll: "02",
    className: "Grade 8-A",
    english: 76,
    mathematics: 84,
    science: 80,
    computer: 88,
    urdu: 74,
  },
  {
    id: "ST-1003",
    name: "Abdullah Raza",
    roll: "03",
    className: "Grade 8-A",
    english: 68,
    mathematics: 72,
    science: 75,
    computer: 79,
    urdu: 70,
  },
  {
    id: "ST-1004",
    name: "Usman Tariq",
    roll: "04",
    className: "Grade 9-A",
    english: 91,
    mathematics: 95,
    science: 89,
    computer: 96,
    urdu: 86,
  },
  {
    id: "ST-1005",
    name: "Hassan Shah",
    roll: "05",
    className: "Grade 9-A",
    english: 73,
    mathematics: 69,
    science: 77,
    computer: 82,
    urdu: 71,
  },
  {
    id: "ST-1006",
    name: "Bilal Ahmad",
    roll: "06",
    className: "Grade 10-A",
    english: 88,
    mathematics: 93,
    science: 91,
    computer: 97,
    urdu: 84,
  },
  {
    id: "ST-1007",
    name: "Saad Ali",
    roll: "07",
    className: "Grade 10-A",
    english: 79,
    mathematics: 81,
    science: 85,
    computer: 90,
    urdu: 77,
  },
  {
    id: "ST-1008",
    name: "Zain Malik",
    roll: "08",
    className: "Grade 11-A",
    english: 65,
    mathematics: 70,
    science: 68,
    computer: 75,
    urdu: 72,
  },
];

const subjects = [
  "english",
  "mathematics",
  "science",
  "computer",
  "urdu",
];

function getTotal(student) {
  return subjects.reduce(
    (total, subject) => total + student[subject],
    0
  );
}

function getPercentage(student) {
  return Math.round(getTotal(student) / subjects.length);
}

function getGrade(percentage) {
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B";
  if (percentage >= 60) return "C";
  if (percentage >= 50) return "D";
  return "F";
}

export default function ResultsPage() {
  const [results] = useState(initialResults);
  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("All Classes");

  const filteredResults = useMemo(() => {
    return results.filter((student) => {
      const searchMatch =
        student.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        student.id
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        student.roll.includes(search);

      const classMatch =
        classFilter === "All Classes" ||
        student.className === classFilter;

      return searchMatch && classMatch;
    });
  }, [results, search, classFilter]);

  const averagePercentage =
    results.length > 0
      ? Math.round(
          results.reduce(
            (sum, student) => sum + getPercentage(student),
            0
          ) / results.length
        )
      : 0;

  const passedStudents = results.filter(
    (student) => getPercentage(student) >= 50
  ).length;

  const topStudent = [...results].sort(
    (a, b) => getPercentage(b) - getPercentage(a)
  )[0];

  return (
    <main className="results-page">

      {/* SIDEBAR */}

      <aside className="results-sidebar">

        <Link href="/" className="results-logo">
          <span>AL-HAYTHAM</span>
          <small>SCHOOL</small>
        </Link>

        <div className="results-admin">

          <div className="results-admin-avatar">
            A
          </div>

          <div>
            <strong>Administrator</strong>
            <span>School Admin</span>
          </div>

        </div>

        <nav className="results-navigation">

          <span className="results-nav-label">
            MAIN
          </span>

          <Link href="/admin/dashboard">
            <span>01</span>
            Dashboard
          </Link>

          <Link href="/admin/students">
            <span>02</span>
            Students
          </Link>

          <Link href="/admin/teachers">
            <span>03</span>
            Teachers
          </Link>

          <Link href="/admin/classes">
            <span>04</span>
            Classes
          </Link>

          <span className="results-nav-label results-space">
            MANAGEMENT
          </span>

          <Link href="/admin/attendance">
            <span>05</span>
            Attendance
          </Link>

          <Link href="/admin/fees">
            <span>06</span>
            Fees
          </Link>

          <Link
            href="/admin/results"
            className="results-active"
          >
            <span>07</span>
            Results
          </Link>

          <Link href="/admin/notices">
            <span>08</span>
            Notices
          </Link>

          <span className="results-nav-label results-space">
            SYSTEM
          </span>

          <Link href="/admin/settings">
            <span>09</span>
            Settings
          </Link>

        </nav>

        <Link href="/login" className="results-logout">
          ← Sign out
        </Link>

      </aside>


      {/* CONTENT */}

      <section className="results-content">

        {/* HEADER */}

        <header className="results-header">

          <div>

            <span className="results-eyebrow">
              ADMINISTRATION / ACADEMIC RECORDS
            </span>

            <h1>
              Student
              <br />
              <em>Results.</em>
            </h1>

            <p>
              Review academic performance, grades and
              examination results across the school.
            </p>

          </div>

          <button
            className="results-publish-button"
            onClick={() =>
              alert("Results published successfully.")
            }
          >
            Publish Results
          </button>

        </header>


        {/* SUMMARY */}

        <section className="results-summary">

          <div className="results-summary-card">

            <span>
              STUDENTS
            </span>

            <strong>
              {results.length}
            </strong>

            <small>
              Results recorded
            </small>

          </div>


          <div className="results-summary-card">

            <span>
              CLASS AVERAGE
            </span>

            <strong>
              {averagePercentage}%
            </strong>

            <small>
              Overall performance
            </small>

          </div>


          <div className="results-summary-card results-pass">

            <span>
              PASSED
            </span>

            <strong>
              {passedStudents}
            </strong>

            <small>
              Students above 50%
            </small>

          </div>


          <div className="results-summary-card results-top">

            <span>
              TOP PERFORMER
            </span>

            <strong>
              {topStudent?.name || "—"}
            </strong>

            <small>
              {topStudent
                ? `${getPercentage(topStudent)}% overall`
                : ""}
            </small>

          </div>

        </section>


        {/* FILTERS */}

        <section className="results-filters">

          <div className="results-search">

            <span>
              SEARCH STUDENT
            </span>

            <input
              type="text"
              placeholder="Search by name or student ID..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />

          </div>


          <div className="results-filter">

            <span>
              CLASS
            </span>

            <select
              value={classFilter}
              onChange={(event) =>
                setClassFilter(event.target.value)
              }
            >
              <option>All Classes</option>
              <option>Grade 8-A</option>
              <option>Grade 9-A</option>
              <option>Grade 10-A</option>
              <option>Grade 11-A</option>
              <option>Grade 12-A</option>
            </select>

          </div>

        </section>


        {/* RESULTS TABLE */}

        <section className="results-table-card">

          <div className="results-table-heading">

            <div>

              <span>
                EXAMINATION REGISTER
              </span>

              <h2>
                Academic Results
              </h2>

            </div>

            <span className="results-count">
              {filteredResults.length} Records
            </span>

          </div>


          <div className="results-table-wrapper">

            <table className="results-table">

              <thead>

                <tr>

                  <th>
                    ROLL
                  </th>

                  <th>
                    STUDENT
                  </th>

                  <th>
                    CLASS
                  </th>

                  <th>
                    ENGLISH
                  </th>

                  <th>
                    MATH
                  </th>

                  <th>
                    SCIENCE
                  </th>

                  <th>
                    COMPUTER
                  </th>

                  <th>
                    URDU
                  </th>

                  <th>
                    TOTAL
                  </th>

                  <th>
                    %
                  </th>

                  <th>
                    GRADE
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredResults.map((student) => {

                  const percentage =
                    getPercentage(student);

                  const grade =
                    getGrade(percentage);

                  return (
                    <tr key={student.id}>

                      <td>
                        <span className="result-roll">
                          {student.roll}
                        </span>
                      </td>

                      <td>

                        <div className="result-student">

                          <div className="result-avatar">
                            {student.name.charAt(0)}
                          </div>

                          <div>

                            <strong>
                              {student.name}
                            </strong>

                            <span>
                              {student.id}
                            </span>

                          </div>

                        </div>

                      </td>

                      <td>
                        <span className="result-class">
                          {student.className}
                        </span>
                      </td>

                      <td>{student.english}</td>

                      <td>{student.mathematics}</td>

                      <td>{student.science}</td>

                      <td>{student.computer}</td>

                      <td>{student.urdu}</td>

                      <td>
                        <strong className="result-total">
                          {getTotal(student)} / 500
                        </strong>
                      </td>

                      <td>
                        <strong className="result-percentage">
                          {percentage}%
                        </strong>
                      </td>

                      <td>

                        <span
                          className={`result-grade grade-${grade
                            .replace("+", "plus")
                            .toLowerCase()}`}
                        >
                          {grade}
                        </span>

                      </td>

                    </tr>
                  );
                })}

              </tbody>

            </table>


            {filteredResults.length === 0 && (
              <div className="results-empty">

                <strong>
                  No results found.
                </strong>

                <span>
                  Try another student or class.
                </span>

              </div>
            )}

          </div>


          <div className="results-table-footer">

            <span>
              Showing {filteredResults.length} of {results.length} records
            </span>

            <span>
              ANNUAL EXAMINATION · 2026
            </span>

          </div>

        </section>


        {/* FOOTER */}

        <footer className="results-footer">

          <span>
            AL-HAYTHAM SCHOOL
          </span>

          <span>
            ACADEMIC RESULTS · 2026
          </span>

        </footer>

      </section>

    </main>
  );
}