"use client";

import Link from "next/link";
import { useState } from "react";
import "./Students.css";

const students = [
  {
    id: "AH-1024",
    name: "Muhammad Ahmed",
    className: "Grade 10",
    section: "A",
    gender: "Male",
    status: "Active",
  },
  {
    id: "AH-1023",
    name: "Ayesha Khan",
    className: "Grade 9",
    section: "B",
    gender: "Female",
    status: "Active",
  },
  {
    id: "AH-1022",
    name: "Hamza Ali",
    className: "Grade 8",
    section: "A",
    gender: "Male",
    status: "Active",
  },
  {
    id: "AH-1021",
    name: "Fatima Noor",
    className: "Grade 7",
    section: "C",
    gender: "Female",
    status: "Active",
  },
  {
    id: "AH-1020",
    name: "Abdullah Hassan",
    className: "Grade 10",
    section: "B",
    gender: "Male",
    status: "Inactive",
  },
];

export default function StudentsPage() {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.id} ${student.className}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="students-page">

      {/* SIDEBAR */}

      <aside className="students-sidebar">

        <Link href="/" className="students-logo">
          <span>AL-HAYTHAM</span>
          <small>SCHOOL</small>
        </Link>

        <div className="students-profile">
          <div className="students-avatar">A</div>

          <div>
            <strong>Administrator</strong>
            <span>School Admin</span>
          </div>
        </div>

        <nav className="students-navigation">

          <span className="students-nav-label">
            MAIN
          </span>

          <Link href="/admin/dashboard">
            <span>01</span>
            Dashboard
          </Link>

          <Link
            href="/admin/students"
            className="students-nav-active"
          >
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

          <span className="students-nav-label students-nav-space">
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

          <Link href="/admin/results">
            <span>07</span>
            Results
          </Link>

          <Link href="/admin/notices">
            <span>08</span>
            Notices
          </Link>

          <span className="students-nav-label students-nav-space">
            SYSTEM
          </span>

          <Link href="/admin/settings">
            <span>09</span>
            Settings
          </Link>

        </nav>

        <Link href="/login" className="students-logout">
          ← Sign out
        </Link>

      </aside>


      {/* CONTENT */}

      <section className="students-content">

        <header className="students-header">

          <div>

            <span className="students-eyebrow">
              ADMINISTRATION / STUDENTS
            </span>

            <h1>
              Students
              <br />
              <em>Directory.</em>
            </h1>

            <p>
              Manage student records, academic information
              and enrollment details.
            </p>

          </div>

          <Link
            href="/admin/students/add"
            className="add-student-button"
          >
            <span>+</span>
            Add Student
          </Link>

        </header>


        {/* TOOLBAR */}

        <section className="students-toolbar">

          <div className="students-search">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search students, ID or class..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          <button className="filter-button">
            Filter
            <span>↓</span>
          </button>

        </section>


        {/* TABLE */}

        <section className="students-table-container">

          <div className="students-table-head">

            <span>STUDENT</span>
            <span>STUDENT ID</span>
            <span>CLASS</span>
            <span>GENDER</span>
            <span>STATUS</span>
            <span></span>

          </div>


          <div className="students-table-body">

            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (

                <Link
                  href={`/admin/students/${student.id}`}
                  className="student-row"
                  key={student.id}
                >

                  <div className="student-info">

                    <div className="student-initial">
                      {student.name.charAt(0)}
                    </div>

                    <div>
                      <strong>{student.name}</strong>
                      <small>Al-Haytham School</small>
                    </div>

                  </div>

                  <span className="student-id">
                    {student.id}
                  </span>

                  <span>
                    {student.className} — {student.section}
                  </span>

                  <span>
                    {student.gender}
                  </span>

                  <span
                    className={`student-status ${
                      student.status === "Active"
                        ? "active"
                        : "inactive"
                    }`}
                  >
                    {student.status}
                  </span>

                  <span className="student-arrow">
                    ↗
                  </span>

                </Link>

              ))
            ) : (

              <div className="no-students">
                No students found.
              </div>

            )}

          </div>

        </section>


        {/* FOOTER */}

        <footer className="students-footer">

          <span>
            SHOWING {filteredStudents.length} OF {students.length} STUDENTS
          </span>

          <span>
            AL-HAYTHAM SCHOOL · 2026
          </span>

        </footer>

      </section>

    </main>
  );
}