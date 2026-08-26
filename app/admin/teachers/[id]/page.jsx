"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import "./TeacherProfile.css";

const teachers = {
  "TH-101": {
    id: "TH-101",
    name: "Muhammad Usman",
    subject: "Mathematics",
    className: "Grade 10",
    experience: "8 Years",
    qualification: "MSc Mathematics",
    phone: "+92 300 1234567",
    email: "m.usman@alhaytham.edu.pk",
    joiningDate: "12 August 2018",
    status: "Active",
    address: "Rawalpindi, Punjab, Pakistan",
  },

  "TH-102": {
    id: "TH-102",
    name: "Ayesha Malik",
    subject: "English",
    className: "Grade 9",
    experience: "6 Years",
    qualification: "MA English",
    phone: "+92 301 2345678",
    email: "a.malik@alhaytham.edu.pk",
    joiningDate: "08 March 2020",
    status: "Active",
    address: "Islamabad, Pakistan",
  },

  "TH-103": {
    id: "TH-103",
    name: "Ahmed Raza",
    subject: "Physics",
    className: "Grade 11",
    experience: "10 Years",
    qualification: "MPhil Physics",
    phone: "+92 302 3456789",
    email: "a.raza@alhaytham.edu.pk",
    joiningDate: "15 January 2016",
    status: "Active",
    address: "Rawalpindi, Punjab, Pakistan",
  },

  "TH-104": {
    id: "TH-104",
    name: "Sara Khan",
    subject: "Biology",
    className: "Grade 12",
    experience: "5 Years",
    qualification: "MSc Biology",
    phone: "+92 303 4567890",
    email: "s.khan@alhaytham.edu.pk",
    joiningDate: "22 July 2021",
    status: "Active",
    address: "Islamabad, Pakistan",
  },

  "TH-105": {
    id: "TH-105",
    name: "Hassan Ali",
    subject: "Computer Science",
    className: "Grade 8",
    experience: "4 Years",
    qualification: "BS Computer Science",
    phone: "+92 304 5678901",
    email: "h.ali@alhaytham.edu.pk",
    joiningDate: "10 September 2022",
    status: "Inactive",
    address: "Rawalpindi, Punjab, Pakistan",
  },
};

export default function TeacherProfilePage() {
  const params = useParams();

  const teacher = teachers[params.id];

  if (!teacher) {
    return (
      <main className="teacher-not-found">

        <div>
          <span>404</span>

          <h1>
            Teacher Not Found.
          </h1>

          <p>
            The requested faculty record does not exist.
          </p>

          <Link href="/admin/teachers">
            ← Back to Teachers
          </Link>
        </div>

      </main>
    );
  }

  return (
    <main className="teacher-profile-page">

      {/* ================= SIDEBAR ================= */}

      <aside className="teacher-profile-sidebar">

        <Link href="/" className="teacher-profile-logo">
          <span>AL-HAYTHAM</span>
          <small>SCHOOL</small>
        </Link>

        <div className="teacher-profile-admin">

          <div className="teacher-profile-admin-avatar">
            A
          </div>

          <div>
            <strong>Administrator</strong>
            <span>School Admin</span>
          </div>

        </div>

        <nav className="teacher-profile-navigation">

          <span className="teacher-profile-nav-label">
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
            className="teacher-profile-active"
          >
            <span>03</span>
            Teachers
          </Link>

          <Link href="/admin/classes">
            <span>04</span>
            Classes
          </Link>

          <span className="teacher-profile-nav-label teacher-profile-space">
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

          <span className="teacher-profile-nav-label teacher-profile-space">
            SYSTEM
          </span>

          <Link href="/admin/settings">
            <span>09</span>
            Settings
          </Link>

        </nav>

        <Link href="/login" className="teacher-profile-logout">
          ← Sign out
        </Link>

      </aside>


      {/* ================= CONTENT ================= */}

      <section className="teacher-profile-content">

        {/* HEADER */}

        <header className="teacher-profile-header">

          <div>

            <span className="teacher-profile-eyebrow">
              ADMINISTRATION / FACULTY / PROFILE
            </span>

            <div className="teacher-profile-title-row">

              <div className="teacher-big-avatar">
                {teacher.name.charAt(0)}
              </div>

              <div>

                <h1>
                  {teacher.name}
                </h1>

                <p>
                  {teacher.subject} · {teacher.id}
                </p>

              </div>

            </div>

          </div>


          <div className="teacher-profile-actions">

            <Link
              href="/admin/teachers"
              className="teacher-profile-back"
            >
              ← Directory
            </Link>

            <button
              className="teacher-edit-button"
              type="button"
              onClick={() =>
                alert("Edit Teacher will be connected next.")
              }
            >
              Edit Teacher
            </button>

          </div>

        </header>


        {/* PROFILE SUMMARY */}

        <section className="teacher-summary">

          <div className="teacher-summary-main">

            <span className="summary-label">
              CURRENT STATUS
            </span>

            <div className="teacher-status-large">

              <i></i>

              {teacher.status}

            </div>

          </div>


          <div className="teacher-summary-item">

            <span>SUBJECT</span>

            <strong>
              {teacher.subject}
            </strong>

          </div>


          <div className="teacher-summary-item">

            <span>ASSIGNED CLASS</span>

            <strong>
              {teacher.className}
            </strong>

          </div>


          <div className="teacher-summary-item">

            <span>EXPERIENCE</span>

            <strong>
              {teacher.experience}
            </strong>

          </div>

        </section>


        {/* INFORMATION */}

        <div className="teacher-profile-grid">

          {/* PERSONAL */}

          <section className="teacher-info-card">

            <div className="teacher-card-heading">

              <span>01</span>

              <div>
                <small>PERSONAL INFORMATION</small>
                <h2>Profile details</h2>
              </div>

            </div>


            <div className="teacher-details">

              <div>
                <span>FULL NAME</span>
                <strong>{teacher.name}</strong>
              </div>

              <div>
                <span>STAFF ID</span>
                <strong>{teacher.id}</strong>
              </div>

              <div>
                <span>QUALIFICATION</span>
                <strong>{teacher.qualification}</strong>
              </div>

              <div>
                <span>JOINING DATE</span>
                <strong>{teacher.joiningDate}</strong>
              </div>

            </div>

          </section>


          {/* CONTACT */}

          <section className="teacher-info-card">

            <div className="teacher-card-heading">

              <span>02</span>

              <div>
                <small>CONTACT INFORMATION</small>
                <h2>Contact details</h2>
              </div>

            </div>


            <div className="teacher-details">

              <div>
                <span>PHONE</span>
                <strong>{teacher.phone}</strong>
              </div>

              <div>
                <span>EMAIL</span>
                <strong>{teacher.email}</strong>
              </div>

              <div className="teacher-detail-full">
                <span>ADDRESS</span>
                <strong>{teacher.address}</strong>
              </div>

            </div>

          </section>


          {/* ACADEMIC */}

          <section className="teacher-info-card teacher-academic-card">

            <div className="teacher-card-heading">

              <span>03</span>

              <div>
                <small>ACADEMIC ASSIGNMENT</small>
                <h2>Teaching information</h2>
              </div>

            </div>


            <div className="teacher-academic-grid">

              <div>
                <span>PRIMARY SUBJECT</span>
                <strong>{teacher.subject}</strong>
              </div>

              <div>
                <span>ASSIGNED CLASS</span>
                <strong>{teacher.className}</strong>
              </div>

              <div>
                <span>EXPERIENCE</span>
                <strong>{teacher.experience}</strong>
              </div>

            </div>

          </section>

        </div>


        {/* FOOTER */}

        <footer className="teacher-profile-footer">

          <span>
            AL-HAYTHAM SCHOOL
          </span>

          <span>
            FACULTY PROFILE · 2026
          </span>

        </footer>

      </section>

    </main>
  );
}