"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import "./ClassProfile.css";

const classData = {
  "CLS-01": {
    id: "CLS-01",
    grade: "Grade 8",
    section: "A",
    teacher: "Hassan Ali",
    students: 32,
    room: "Room 101",
    timing: "08:00 AM",
    status: "Active",
    subjects: ["English", "Mathematics", "Science", "Computer Science"],
    boys: 18,
    girls: 14,
  },

  "CLS-02": {
    id: "CLS-02",
    grade: "Grade 9",
    section: "A",
    teacher: "Ayesha Malik",
    students: 35,
    room: "Room 102",
    timing: "08:00 AM",
    status: "Active",
    subjects: ["English", "Mathematics", "Physics", "Computer Science"],
    boys: 19,
    girls: 16,
  },

  "CLS-03": {
    id: "CLS-03",
    grade: "Grade 10",
    section: "A",
    teacher: "Muhammad Usman",
    students: 38,
    room: "Room 103",
    timing: "08:00 AM",
    status: "Active",
    subjects: ["Mathematics", "Physics", "Chemistry", "English"],
    boys: 21,
    girls: 17,
  },

  "CLS-04": {
    id: "CLS-04",
    grade: "Grade 11",
    section: "A",
    teacher: "Ahmed Raza",
    students: 29,
    room: "Room 201",
    timing: "08:30 AM",
    status: "Active",
    subjects: ["Physics", "Mathematics", "Chemistry", "English"],
    boys: 15,
    girls: 14,
  },

  "CLS-05": {
    id: "CLS-05",
    grade: "Grade 12",
    section: "A",
    teacher: "Sara Khan",
    students: 27,
    room: "Room 202",
    timing: "08:30 AM",
    status: "Active",
    subjects: ["Biology", "Chemistry", "Physics", "English"],
    boys: 12,
    girls: 15,
  },
};

export default function ClassProfilePage() {
  const params = useParams();

  const currentClass = classData[params.id];

  if (!currentClass) {
    return (
      <main className="class-not-found">
        <div>
          <span>404</span>

          <h1>Class Not Found.</h1>

          <p>
            The requested class record does not exist.
          </p>

          <Link href="/admin/classes">
            ← Back to Classes
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="class-profile-page">

      {/* SIDEBAR */}

      <aside className="class-profile-sidebar">

        <Link href="/" className="class-profile-logo">
          <span>AL-HAYTHAM</span>
          <small>SCHOOL</small>
        </Link>

        <div className="class-profile-admin">

          <div className="class-admin-avatar">
            A
          </div>

          <div>
            <strong>Administrator</strong>
            <span>School Admin</span>
          </div>

        </div>

        <nav className="class-profile-navigation">

          <span className="class-nav-label">
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
            className="class-profile-active"
          >
            <span>04</span>
            Classes
          </Link>

          <span className="class-nav-label class-nav-space">
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

          <span className="class-nav-label class-nav-space">
            SYSTEM
          </span>

          <Link href="/admin/settings">
            <span>09</span>
            Settings
          </Link>

        </nav>

        <Link href="/login" className="class-profile-logout">
          ← Sign out
        </Link>

      </aside>


      {/* CONTENT */}

      <section className="class-profile-content">

        {/* HEADER */}

        <header className="class-profile-header">

          <div>

            <span className="class-profile-eyebrow">
              ADMINISTRATION / ACADEMICS / CLASS PROFILE
            </span>

            <div className="class-profile-title">

              <div className="class-number">
                {currentClass.grade.replace("Grade ", "")}
              </div>

              <div>

                <h1>
                  {currentClass.grade}
                  <em> — {currentClass.section}</em>
                </h1>

                <p>
                  {currentClass.id} · Academic Session 2026
                </p>

              </div>

            </div>

          </div>

          <div className="class-profile-actions">

            <Link
              href="/admin/classes"
              className="class-back-button"
            >
              ← Classes
            </Link>

            <button
              className="class-edit-button"
              onClick={() =>
                alert("Edit Class will be connected next.")
              }
            >
              Edit Class
            </button>

          </div>

        </header>


        {/* SUMMARY */}

        <section className="class-profile-summary">

          <div className="class-summary-main">

            <span>STATUS</span>

            <strong>
              <i></i>
              {currentClass.status}
            </strong>

          </div>

          <div>
            <span>CLASS TEACHER</span>
            <strong>{currentClass.teacher}</strong>
          </div>

          <div>
            <span>CLASSROOM</span>
            <strong>{currentClass.room}</strong>
          </div>

          <div>
            <span>START TIME</span>
            <strong>{currentClass.timing}</strong>
          </div>

        </section>


        {/* MAIN GRID */}

        <div className="class-profile-grid">

          {/* STUDENTS */}

          <section className="class-profile-card students-card">

            <div className="class-card-heading">

              <span>01</span>

              <div>
                <small>ENROLMENT</small>
                <h2>Students</h2>
              </div>

            </div>

            <div className="student-total">

              <strong>
                {currentClass.students}
              </strong>

              <span>
                Total Students
              </span>

            </div>

            <div className="student-gender">

              <div>
                <span>BOYS</span>
                <strong>{currentClass.boys}</strong>
              </div>

              <div>
                <span>GIRLS</span>
                <strong>{currentClass.girls}</strong>
              </div>

            </div>

            <Link
              href="/admin/students"
              className="profile-card-link"
            >
              View Student Directory
              <span>↗</span>
            </Link>

          </section>


          {/* TEACHER */}

          <section className="class-profile-card">

            <div className="class-card-heading">

              <span>02</span>

              <div>
                <small>FACULTY</small>
                <h2>Class Teacher</h2>
              </div>

            </div>

            <div className="profile-teacher">

              <div className="profile-teacher-avatar">
                {currentClass.teacher.charAt(0)}
              </div>

              <div>
                <strong>
                  {currentClass.teacher}
                </strong>

                <span>
                  Class Teacher
                </span>
              </div>

            </div>

            <div className="teacher-role">
              <span>ASSIGNED ROLE</span>
              <strong>Primary Class Teacher</strong>
            </div>

            <Link
              href="/admin/teachers"
              className="profile-card-link"
            >
              View Teacher Directory
              <span>↗</span>
            </Link>

          </section>


          {/* ACADEMIC */}

          <section className="class-profile-card academic-card">

            <div className="class-card-heading">

              <span>03</span>

              <div>
                <small>ACADEMIC PROGRAM</small>
                <h2>Subjects</h2>
              </div>

            </div>

            <div className="subjects-grid">

              {currentClass.subjects.map(
                (subject, index) => (
                  <div
                    className="subject-item"
                    key={subject}
                  >
                    <span>
                      0{index + 1}
                    </span>

                    <strong>
                      {subject}
                    </strong>

                    <small>
                      Active
                    </small>
                  </div>
                )
              )}

            </div>

          </section>


          {/* CLASS DETAILS */}

          <section className="class-profile-card">

            <div className="class-card-heading">

              <span>04</span>

              <div>
                <small>CLASSROOM</small>
                <h2>Class Details</h2>
              </div>

            </div>

            <div className="class-detail-list">

              <div>
                <span>CLASS ID</span>
                <strong>{currentClass.id}</strong>
              </div>

              <div>
                <span>GRADE</span>
                <strong>{currentClass.grade}</strong>
              </div>

              <div>
                <span>SECTION</span>
                <strong>{currentClass.section}</strong>
              </div>

              <div>
                <span>ROOM</span>
                <strong>{currentClass.room}</strong>
              </div>

              <div>
                <span>START TIME</span>
                <strong>{currentClass.timing}</strong>
              </div>

              <div>
                <span>SESSION</span>
                <strong>2026</strong>
              </div>

            </div>

          </section>

        </div>


        {/* FOOTER */}

        <footer className="class-profile-footer">

          <span>
            AL-HAYTHAM SCHOOL
          </span>

          <span>
            CLASS PROFILE · {currentClass.id}
          </span>

        </footer>

      </section>

    </main>
  );
}