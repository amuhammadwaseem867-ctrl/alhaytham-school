"use client";

import Link from "next/link";
import { useState } from "react";
import "./Teachers.css";

const teachers = [
  {
    id: "TH-101",
    name: "Muhammad Usman",
    subject: "Mathematics",
    className: "Grade 10",
    experience: "8 Years",
    status: "Active",
  },
  {
    id: "TH-102",
    name: "Ayesha Malik",
    subject: "English",
    className: "Grade 9",
    experience: "6 Years",
    status: "Active",
  },
  {
    id: "TH-103",
    name: "Ahmed Raza",
    subject: "Physics",
    className: "Grade 11",
    experience: "10 Years",
    status: "Active",
  },
  {
    id: "TH-104",
    name: "Sara Khan",
    subject: "Biology",
    className: "Grade 12",
    experience: "5 Years",
    status: "Active",
  },
  {
    id: "TH-105",
    name: "Hassan Ali",
    subject: "Computer Science",
    className: "Grade 8",
    experience: "4 Years",
    status: "Inactive",
  },
];

export default function TeachersPage() {
  const [search, setSearch] = useState("");

  const filteredTeachers = teachers.filter((teacher) =>
    `${teacher.name} ${teacher.id} ${teacher.subject} ${teacher.className}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const activeTeachers = teachers.filter(
    (teacher) => teacher.status === "Active"
  ).length;

  const subjects = new Set(
    teachers.map((teacher) => teacher.subject)
  ).size;

  const classes = new Set(
    teachers.map((teacher) => teacher.className)
  ).size;

  return (
    <main className="teachers-page">

      {/* Sidebar */}

      <aside className="teachers-sidebar">

        <Link href="/" className="teachers-logo">
          <span>AL-HAYTHAM</span>
          <small>SCHOOL</small>
        </Link>

        <div className="teachers-profile">

          <div className="teachers-avatar">
            A
          </div>

          <div>
            <strong>Administrator</strong>
            <span>School Admin</span>
          </div>

        </div>

        <nav className="teachers-navigation">

          <span className="teachers-nav-label">
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

          <Link
            href="/admin/teachers"
            className="teachers-nav-active"
          >
            <span>03</span>
            Teachers
          </Link>

          <Link href="/admin/classes">
            <span>04</span>
            Classes
          </Link>

          <span className="teachers-nav-label teachers-nav-space">
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

          <span className="teachers-nav-label teachers-nav-space">
            SYSTEM
          </span>

          <Link href="/admin/settings">
            <span>09</span>
            Settings
          </Link>

        </nav>

        <Link href="/login" className="teachers-logout">
          ← Sign out
        </Link>

      </aside>


      {/* Main content */}

      <section className="teachers-content">

        {/* HEADER */}

        <header className="teachers-header">

          <div>

            <span className="teachers-eyebrow">
              ADMINISTRATION / FACULTY
            </span>

            <h1>
              Teachers
              <br />
              <em>Directory.</em>
            </h1>

            <p>
              Manage faculty members, teaching assignments,
              subjects and staff information.
            </p>

          </div>

          <Link
            href="/admin/teachers/add"
            className="add-teacher-button"
          >
            <span>+</span>
            Add Teacher
          </Link>

        </header>


        {/* TOOLBAR */}

        <section className="teachers-toolbar">

          <div className="teachers-search">

            <span className="search-icon">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search teachers, ID or subject..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                className="clear-search"
                onClick={() => setSearch("")}
                type="button"
              >
                ×
              </button>
            )}

          </div>

          <button
            className="teacher-filter"
            type="button"
          >
            Filter
            <span>↓</span>
          </button>

        </section>


        {/* STATISTICS */}

        <section className="teacher-stats">

          <div className="teacher-stat">

            <span>TOTAL FACULTY</span>

            <strong>
              {teachers.length}
            </strong>

            <small>
              Registered teachers
            </small>

          </div>


          <div className="teacher-stat">

            <span>ACTIVE TEACHERS</span>

            <strong>
              {activeTeachers}
            </strong>

            <small>
              Currently teaching
            </small>

          </div>


          <div className="teacher-stat">

            <span>SUBJECTS</span>

            <strong>
              {subjects}
            </strong>

            <small>
              Academic subjects
            </small>

          </div>


          <div className="teacher-stat">

            <span>CLASS ASSIGNMENTS</span>

            <strong>
              {classes}
            </strong>

            <small>
              Assigned classes
            </small>

          </div>

        </section>


        {/* TABLE */}

        <section className="teachers-table-container">

          <div className="teachers-table-head">

            <span>TEACHER</span>
            <span>STAFF ID</span>
            <span>SUBJECT</span>
            <span>CLASS</span>
            <span>EXPERIENCE</span>
            <span>STATUS</span>
            <span></span>

          </div>


          <div className="teachers-table-body">

            {filteredTeachers.length > 0 ? (

              filteredTeachers.map((teacher) => (

                <div
                  className="teacher-row"
                  key={teacher.id}
                >

                  <div className="teacher-info">

                    <div className="teacher-initial">
                      {teacher.name.charAt(0)}
                    </div>

                    <div>

                      <strong>
                        {teacher.name}
                      </strong>

                      <small>
                        Faculty Member
                      </small>

                    </div>

                  </div>


                  <span className="teacher-id">
                    {teacher.id}
                  </span>


                  <span className="teacher-subject">
                    {teacher.subject}
                  </span>


                  <span className="teacher-class">
                    {teacher.className}
                  </span>


                  <span className="teacher-experience">
                    {teacher.experience}
                  </span>


                  <span
                    className={`teacher-status ${
                      teacher.status === "Active"
                        ? "active"
                        : "inactive"
                    }`}
                  >
                    <i></i>
                    {teacher.status}
                  </span>


                  <Link
                    href={`/admin/teachers/${teacher.id}`}
                    className="teacher-arrow"
                    aria-label={`View ${teacher.name}`}
                  >
                    ↗
                  </Link>

                </div>

              ))

            ) : (

              <div className="no-teachers">

                <strong>
                  No teachers found
                </strong>

                <span>
                  Try searching with another name, ID or subject.
                </span>

              </div>

            )}

          </div>

        </section>


        {/* FOOTER */}

        <footer className="teachers-footer">

          <span>
            SHOWING {filteredTeachers.length} OF {teachers.length} TEACHERS
          </span>

          <span>
            AL-HAYTHAM SCHOOL · 2026
          </span>

        </footer>

      </section>

    </main>
  );
}