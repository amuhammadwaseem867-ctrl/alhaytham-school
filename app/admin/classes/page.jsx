"use client";

import Link from "next/link";
import "./Classes.css";

const classes = [
  {
    id: "CLS-01",
    name: "Grade 8",
    section: "A",
    teacher: "Hassan Ali",
    students: 32,
    room: "Room 101",
    timing: "08:00 AM",
    status: "Active",
  },
  {
    id: "CLS-02",
    name: "Grade 9",
    section: "A",
    teacher: "Ayesha Malik",
    students: 35,
    room: "Room 102",
    timing: "08:00 AM",
    status: "Active",
  },
  {
    id: "CLS-03",
    name: "Grade 10",
    section: "A",
    teacher: "Muhammad Usman",
    students: 38,
    room: "Room 103",
    timing: "08:00 AM",
    status: "Active",
  },
  {
    id: "CLS-04",
    name: "Grade 11",
    section: "A",
    teacher: "Ahmed Raza",
    students: 29,
    room: "Room 201",
    timing: "08:30 AM",
    status: "Active",
  },
  {
    id: "CLS-05",
    name: "Grade 12",
    section: "A",
    teacher: "Sara Khan",
    students: 27,
    room: "Room 202",
    timing: "08:30 AM",
    status: "Active",
  },
];

export default function ClassesPage() {
  const totalStudents = classes.reduce(
    (total, item) => total + item.students,
    0
  );

  return (
    <main className="classes-page">

      {/* SIDEBAR */}

      <aside className="classes-sidebar">

        <Link href="/" className="classes-logo">
          <span>AL-HAYTHAM</span>
          <small>SCHOOL</small>
        </Link>

        <div className="classes-admin">

          <div className="classes-admin-avatar">
            A
          </div>

          <div>
            <strong>Administrator</strong>
            <span>School Admin</span>
          </div>

        </div>

        <nav className="classes-navigation">

          <span className="classes-nav-label">
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

          <Link
            href="/admin/classes"
            className="classes-active"
          >
            <span>04</span>
            Classes
          </Link>

          <span className="classes-nav-label classes-space">
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

          <span className="classes-nav-label classes-space">
            SYSTEM
          </span>

          <Link href="/admin/settings">
            <span>09</span>
            Settings
          </Link>

        </nav>

        <Link href="/login" className="classes-logout">
          ← Sign out
        </Link>

      </aside>


      {/* CONTENT */}

      <section className="classes-content">

        <header className="classes-header">

          <div>

            <span className="classes-eyebrow">
              ADMINISTRATION / ACADEMICS
            </span>

            <h1>
              Classes
              <br />
              <em>& Sections.</em>
            </h1>

            <p>
              Manage academic classes, sections, classrooms
              and assigned faculty members.
            </p>

          </div>

          <button
            className="add-class-button"
            type="button"
            onClick={() =>
              alert("Add Class will be connected next.")
            }
          >
            <span>+</span>
            Add Class
          </button>

        </header>


        {/* STATS */}

        <section className="classes-stats">

          <div className="class-stat">
            <span>TOTAL CLASSES</span>
            <strong>{classes.length}</strong>
            <small>Active academic sections</small>
          </div>

          <div className="class-stat">
            <span>TOTAL STUDENTS</span>
            <strong>{totalStudents}</strong>
            <small>Across all classes</small>
          </div>

          <div className="class-stat">
            <span>CLASSROOMS</span>
            <strong>5</strong>
            <small>Assigned rooms</small>
          </div>

          <div className="class-stat">
            <span>SHIFT</span>
            <strong>01</strong>
            <small>Morning shift</small>
          </div>

        </section>


        {/* CLASS CARDS */}

        <section className="classes-grid">

          {classes.map((item) => (

            <article
              className="class-card"
              key={item.id}
            >

              <div className="class-card-top">

                <span className="class-id">
                  {item.id}
                </span>

                <span className="class-status">
                  <i></i>
                  {item.status}
                </span>

              </div>


              <div className="class-title">

                <span>
                  {item.name}
                </span>

                <strong>
                  Section {item.section}
                </strong>

              </div>


              <div className="class-teacher">

                <div className="class-teacher-avatar">
                  {item.teacher.charAt(0)}
                </div>

                <div>
                  <small>CLASS TEACHER</small>
                  <strong>{item.teacher}</strong>
                </div>

              </div>


              <div className="class-details">

                <div>
                  <span>STUDENTS</span>
                  <strong>{item.students}</strong>
                </div>

                <div>
                  <span>ROOM</span>
                  <strong>{item.room}</strong>
                </div>

                <div>
                  <span>START</span>
                  <strong>{item.timing}</strong>
                </div>

              </div>


              <Link
                href={`/admin/classes/${item.id}`}
                className="class-view"
              >
                View Class
                <span>↗</span>
              </Link>

            </article>

          ))}

        </section>


        <footer className="classes-footer">

          <span>
            {classes.length} ACTIVE CLASSES
          </span>

          <span>
            AL-HAYTHAM SCHOOL · 2026
          </span>

        </footer>

      </section>

    </main>
  );
}