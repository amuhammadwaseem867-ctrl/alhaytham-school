"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import "./StudentDetails.css";

const studentData = {
  "AH-1024": {
    name: "Muhammad Ahmed",
    id: "AH-1024",
    className: "Grade 10",
    section: "A",
    gender: "Male",
    status: "Active",
    father: "Muhammad Aslam",
    dob: "12 March 2010",
    phone: "+92 300 1234567",
    email: "ahmed@example.com",
    address: "Rawalpindi, Punjab, Pakistan",
    admission: "15 April 2024",
    previousSchool: "Al-Haytham Junior School",
  },
  "AH-1023": {
    name: "Ayesha Khan",
    id: "AH-1023",
    className: "Grade 9",
    section: "B",
    gender: "Female",
    status: "Active",
    father: "Imran Khan",
    dob: "08 July 2011",
    phone: "+92 301 1234567",
    email: "ayesha@example.com",
    address: "Islamabad, Pakistan",
    admission: "10 April 2024",
    previousSchool: "City School",
  },
};

export default function StudentDetailsPage() {
  const params = useParams();

  const student = studentData[params.id] || {
    name: "Student Record",
    id: params.id,
    className: "Not assigned",
    section: "-",
    gender: "-",
    status: "Active",
    father: "Not available",
    dob: "Not available",
    phone: "Not available",
    email: "Not available",
    address: "Not available",
    admission: "Not available",
    previousSchool: "Not available",
  };

  return (
    <main className="student-details-page">

      {/* SIDEBAR */}

      <aside className="student-details-sidebar">

        <Link href="/" className="details-logo">
          <span>AL-HAYTHAM</span>
          <small>SCHOOL</small>
        </Link>

        <div className="details-profile">
          <div className="details-avatar">A</div>

          <div>
            <strong>Administrator</strong>
            <span>School Admin</span>
          </div>
        </div>

        <nav className="details-navigation">

          <span className="details-nav-label">
            MAIN
          </span>

          <Link href="/admin/dashboard">
            <span>01</span>
            Dashboard
          </Link>

          <Link
            href="/admin/students"
            className="details-nav-active"
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

          <span className="details-nav-label details-space">
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

          <span className="details-nav-label details-space">
            SYSTEM
          </span>

          <Link href="/admin/settings">
            <span>09</span>
            Settings
          </Link>

        </nav>

        <Link href="/login" className="details-logout">
          ← Sign out
        </Link>

      </aside>


      {/* CONTENT */}

      <section className="student-details-content">

        <header className="details-header">

          <div>
            <span className="details-eyebrow">
              ADMINISTRATION / STUDENTS / PROFILE
            </span>

            <h1>
              Student
              <br />
              <em>Profile.</em>
            </h1>
          </div>

          <Link
            href="/admin/students"
            className="details-back"
          >
            ← Students Directory
          </Link>

        </header>


        {/* PROFILE HERO */}

        <section className="student-profile-card">

          <div className="large-student-avatar">
            {student.name.charAt(0)}
          </div>

          <div className="student-profile-main">

            <span className="profile-id">
              {student.id}
            </span>

            <h2>{student.name}</h2>

            <p>
              {student.className} · Section {student.section}
            </p>

          </div>

          <span
            className={`profile-status ${
              student.status === "Active"
                ? "profile-active"
                : "profile-inactive"
            }`}
          >
            {student.status}
          </span>

        </section>


        {/* INFORMATION */}

        <div className="details-grid">

          <section className="details-card">

            <div className="details-card-heading">
              <span>01</span>
              <div>
                <small>PERSONAL INFORMATION</small>
                <h3>Personal details</h3>
              </div>
            </div>

            <div className="details-info-grid">

              <div>
                <small>FULL NAME</small>
                <strong>{student.name}</strong>
              </div>

              <div>
                <small>FATHER / GUARDIAN</small>
                <strong>{student.father}</strong>
              </div>

              <div>
                <small>DATE OF BIRTH</small>
                <strong>{student.dob}</strong>
              </div>

              <div>
                <small>GENDER</small>
                <strong>{student.gender}</strong>
              </div>

            </div>

          </section>


          <section className="details-card">

            <div className="details-card-heading">
              <span>02</span>
              <div>
                <small>ACADEMIC INFORMATION</small>
                <h3>Enrollment</h3>
              </div>
            </div>

            <div className="details-info-grid">

              <div>
                <small>STUDENT ID</small>
                <strong>{student.id}</strong>
              </div>

              <div>
                <small>CLASS</small>
                <strong>{student.className}</strong>
              </div>

              <div>
                <small>SECTION</small>
                <strong>{student.section}</strong>
              </div>

              <div>
                <small>ADMISSION DATE</small>
                <strong>{student.admission}</strong>
              </div>

              <div className="detail-full">
                <small>PREVIOUS SCHOOL</small>
                <strong>{student.previousSchool}</strong>
              </div>

            </div>

          </section>


          <section className="details-card details-full-card">

            <div className="details-card-heading">
              <span>03</span>
              <div>
                <small>CONTACT INFORMATION</small>
                <h3>Contact details</h3>
              </div>
            </div>

            <div className="details-info-grid">

              <div>
                <small>PHONE</small>
                <strong>{student.phone}</strong>
              </div>

              <div>
                <small>EMAIL</small>
                <strong>{student.email}</strong>
              </div>

              <div className="detail-full">
                <small>HOME ADDRESS</small>
                <strong>{student.address}</strong>
              </div>

            </div>

          </section>

        </div>


        {/* ACTIONS */}

        <div className="details-actions">

          <Link
            href="/admin/students"
            className="details-secondary"
          >
            ← Back
          </Link>

          <button
            className="details-primary"
            onClick={() => alert("Edit functionality will be connected with the database next.")}
          >
            Edit Student
            <span>→</span>
          </button>

        </div>


        <footer className="details-footer">
          <span>AL-HAYTHAM SCHOOL</span>
          <span>STUDENT MANAGEMENT · 2026</span>
        </footer>

      </section>

    </main>
  );
}