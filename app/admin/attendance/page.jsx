"use client";

import Link from "next/link";
import { useState } from "react";
import "./Attendance.css";

const students = [
  {
    id: "ST-1001",
    name: "Ali Ahmed",
    roll: "01",
    className: "Grade 8-A",
    status: "Present",
  },
  {
    id: "ST-1002",
    name: "Hamza Khan",
    roll: "02",
    className: "Grade 8-A",
    status: "Present",
  },
  {
    id: "ST-1003",
    name: "Abdullah Raza",
    roll: "03",
    className: "Grade 8-A",
    status: "Absent",
  },
  {
    id: "ST-1004",
    name: "Usman Tariq",
    roll: "04",
    className: "Grade 8-A",
    status: "Present",
  },
  {
    id: "ST-1005",
    name: "Hassan Shah",
    roll: "05",
    className: "Grade 8-A",
    status: "Late",
  },
  {
    id: "ST-1006",
    name: "Bilal Ahmad",
    roll: "06",
    className: "Grade 8-A",
    status: "Present",
  },
  {
    id: "ST-1007",
    name: "Saad Ali",
    roll: "07",
    className: "Grade 8-A",
    status: "Present",
  },
  {
    id: "ST-1008",
    name: "Zain Malik",
    roll: "08",
    className: "Grade 8-A",
    status: "Absent",
  },
];

export default function AttendancePage() {
  const [selectedDate, setSelectedDate] = useState("2026-08-26");

  const [attendance, setAttendance] = useState(
    students.reduce((acc, student) => {
      acc[student.id] = student.status;
      return acc;
    }, {})
  );

  const [selectedClass, setSelectedClass] = useState("Grade 8-A");

  const updateStatus = (studentId, status) => {
    setAttendance((current) => ({
      ...current,
      [studentId]: status,
    }));
  };

  const presentCount = Object.values(attendance).filter(
    (status) => status === "Present"
  ).length;

  const absentCount = Object.values(attendance).filter(
    (status) => status === "Absent"
  ).length;

  const lateCount = Object.values(attendance).filter(
    (status) => status === "Late"
  ).length;

  const attendancePercentage = Math.round(
    ((presentCount + lateCount) / students.length) * 100
  );

  return (
    <main className="attendance-page">

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="attendance-sidebar">

        <Link href="/" className="attendance-logo">
          <span>AL-HAYTHAM</span>
          <small>SCHOOL</small>
        </Link>

        <div className="attendance-admin">

          <div className="attendance-admin-avatar">
            A
          </div>

          <div>
            <strong>Administrator</strong>
            <span>School Admin</span>
          </div>

        </div>

        <nav className="attendance-navigation">

          <span className="attendance-nav-label">
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

          <span className="attendance-nav-label attendance-space">
            MANAGEMENT
          </span>

          <Link
            href="/admin/attendance"
            className="attendance-active"
          >
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

          <span className="attendance-nav-label attendance-space">
            SYSTEM
          </span>

          <Link href="/admin/settings">
            <span>09</span>
            Settings
          </Link>

        </nav>

        <Link href="/login" className="attendance-logout">
          ← Sign out
        </Link>

      </aside>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="attendance-content">

        {/* HEADER */}

        <header className="attendance-header">

          <div>

            <span className="attendance-eyebrow">
              ADMINISTRATION / DAILY RECORDS
            </span>

            <h1>
              Attendance
              <br />
              <em>Records.</em>
            </h1>

            <p>
              Track daily student attendance and manage
              classroom presence records.
            </p>

          </div>

          <button
            className="attendance-save-button"
            onClick={() => alert("Attendance saved successfully.")}
          >
            Save Attendance
          </button>

        </header>


        {/* CONTROLS */}

        <section className="attendance-controls">

          <div className="attendance-control">

            <label>
              DATE
            </label>

            <input
              type="date"
              value={selectedDate}
              onChange={(event) =>
                setSelectedDate(event.target.value)
              }
            />

          </div>


          <div className="attendance-control">

            <label>
              CLASS
            </label>

            <select
              value={selectedClass}
              onChange={(event) =>
                setSelectedClass(event.target.value)
              }
            >
              <option>Grade 8-A</option>
              <option>Grade 9-A</option>
              <option>Grade 10-A</option>
              <option>Grade 11-A</option>
              <option>Grade 12-A</option>
            </select>

          </div>


          <div className="attendance-control-info">

            <span>
              SELECTED DATE
            </span>

            <strong>
              {selectedDate}
            </strong>

          </div>

        </section>


        {/* STATS */}

        <section className="attendance-stats">

          <div className="attendance-stat">

            <span>
              TOTAL STUDENTS
            </span>

            <strong>
              {students.length}
            </strong>

            <small>
              Enrolled in {selectedClass}
            </small>

          </div>


          <div className="attendance-stat present-stat">

            <span>
              PRESENT
            </span>

            <strong>
              {presentCount}
            </strong>

            <small>
              Students present
            </small>

          </div>


          <div className="attendance-stat absent-stat">

            <span>
              ABSENT
            </span>

            <strong>
              {absentCount}
            </strong>

            <small>
              Students absent
            </small>

          </div>


          <div className="attendance-stat">

            <span>
              ATTENDANCE RATE
            </span>

            <strong>
              {attendancePercentage}%
            </strong>

            <small>
              Including late students
            </small>

          </div>

        </section>


        {/* ATTENDANCE TABLE */}

        <section className="attendance-table-card">

          <div className="attendance-table-header">

            <div>

              <span>
                DAILY REGISTER
              </span>

              <h2>
                {selectedClass}
              </h2>

            </div>

            <div className="attendance-table-date">
              {selectedDate}
            </div>

          </div>


          <div className="attendance-table-wrapper">

            <table className="attendance-table">

              <thead>

                <tr>

                  <th>
                    ROLL
                  </th>

                  <th>
                    STUDENT
                  </th>

                  <th>
                    STUDENT ID
                  </th>

                  <th>
                    STATUS
                  </th>

                  <th>
                    MARK
                  </th>

                </tr>

              </thead>

              <tbody>

                {students.map((student) => {

                  const status = attendance[student.id];

                  return (
                    <tr key={student.id}>

                      <td>
                        <span className="roll-number">
                          {student.roll}
                        </span>
                      </td>

                      <td>

                        <div className="attendance-student">

                          <div className="attendance-student-avatar">
                            {student.name.charAt(0)}
                          </div>

                          <div>

                            <strong>
                              {student.name}
                            </strong>

                            <span>
                              {student.className}
                            </span>

                          </div>

                        </div>

                      </td>

                      <td>
                        <span className="student-id">
                          {student.id}
                        </span>
                      </td>

                      <td>

                        <span
                          className={`attendance-status ${status.toLowerCase()}`}
                        >
                          <i></i>
                          {status}
                        </span>

                      </td>

                      <td>

                        <div className="attendance-buttons">

                          <button
                            className={
                              status === "Present"
                                ? "selected present"
                                : ""
                            }
                            onClick={() =>
                              updateStatus(
                                student.id,
                                "Present"
                              )
                            }
                          >
                            P
                          </button>

                          <button
                            className={
                              status === "Absent"
                                ? "selected absent"
                                : ""
                            }
                            onClick={() =>
                              updateStatus(
                                student.id,
                                "Absent"
                              )
                            }
                          >
                            A
                          </button>

                          <button
                            className={
                              status === "Late"
                                ? "selected late"
                                : ""
                            }
                            onClick={() =>
                              updateStatus(
                                student.id,
                                "Late"
                              )
                            }
                          >
                            L
                          </button>

                        </div>

                      </td>

                    </tr>
                  );
                })}

              </tbody>

            </table>

          </div>


          {/* LEGEND */}

          <div className="attendance-legend">

            <span>
              <i className="legend-present"></i>
              Present
            </span>

            <span>
              <i className="legend-absent"></i>
              Absent
            </span>

            <span>
              <i className="legend-late"></i>
              Late
            </span>

            <span className="attendance-legend-note">
              P / A / L buttons update the demo record instantly.
            </span>

          </div>

        </section>


        {/* FOOTER */}

        <footer className="attendance-footer">

          <span>
            AL-HAYTHAM SCHOOL
          </span>

          <span>
            ATTENDANCE · {selectedDate}
          </span>

        </footer>

      </section>

    </main>
  );
}