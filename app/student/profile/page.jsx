"use client";

import Link from "next/link";
import "../StudentPortal.css";
import "./Profile.css";

export default function StudentProfile() {
  return (
    <main className="student-portal">

      {/* SIDEBAR */}

      <aside className="student-sidebar">

        <Link href="/" className="student-logo">
          <span>AL-HAYTHAM</span>
          <small>STUDENT PORTAL</small>
        </Link>

        <div className="student-user">
          <div className="student-avatar">AA</div>

          <div>
            <strong>Ali Ahmed</strong>
            <span>ST-1001 · Grade 8-A</span>
          </div>
        </div>

        <nav className="student-nav">

          <span className="student-nav-label">
            PORTAL
          </span>

          <Link href="/student/dashboard">
            <span>01</span>
            Dashboard
          </Link>

          <Link
            href="/student/profile"
            className="student-active"
          >
            <span>02</span>
            Profile
          </Link>

          <Link href="/student/attendance">
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

        <Link
          href="/login"
          className="student-signout"
        >
          ← Sign out
        </Link>

      </aside>


      {/* MAIN */}

      <section className="student-main">

        {/* HEADER */}

        <header className="profile-header">

          <div>

            <span className="student-eyebrow">
              STUDENT PORTAL / PROFILE
            </span>

            <h1>
              Student
              <br />
              <em>Profile.</em>
            </h1>

            <p>
              View your personal and academic information
              registered with Al-Haytham School.
            </p>

          </div>

          <div className="profile-id-box">

            <span>
              STUDENT ID
            </span>

            <strong>
              ST-1001
            </strong>

          </div>

        </header>


        {/* PROFILE HERO */}

        <section className="profile-hero">

          <div className="profile-avatar-large">
            AA
          </div>

          <div className="profile-hero-info">

            <span>
              GRADE 8 · SECTION A
            </span>

            <h2>
              Ali Ahmed
            </h2>

            <p>
              Roll Number 14 · Academic Session 2026
            </p>

          </div>

          <div className="profile-status">
            <span></span>
            ACTIVE STUDENT
          </div>

        </section>


        {/* PERSONAL INFORMATION */}

        <section className="profile-section">

          <div className="profile-section-title">

            <span>
              01
            </span>

            <div>
              <small>
                PERSONAL INFORMATION
              </small>

              <h2>
                Student Details
              </h2>
            </div>

          </div>


          <div className="profile-details-grid">

            <div className="profile-detail">
              <span>FULL NAME</span>
              <strong>Ali Ahmed</strong>
            </div>

            <div className="profile-detail">
              <span>FATHER'S NAME</span>
              <strong>Muhammad Ahmed</strong>
            </div>

            <div className="profile-detail">
              <span>DATE OF BIRTH</span>
              <strong>14 March 2012</strong>
            </div>

            <div className="profile-detail">
              <span>GENDER</span>
              <strong>Male</strong>
            </div>

            <div className="profile-detail">
              <span>STUDENT ID</span>
              <strong>ST-1001</strong>
            </div>

            <div className="profile-detail">
              <span>ROLL NUMBER</span>
              <strong>14</strong>
            </div>

          </div>

        </section>


        {/* ACADEMIC INFORMATION */}

        <section className="profile-section">

          <div className="profile-section-title">

            <span>
              02
            </span>

            <div>
              <small>
                ACADEMIC INFORMATION
              </small>

              <h2>
                Current Enrollment
              </h2>
            </div>

          </div>


          <div className="profile-details-grid">

            <div className="profile-detail">
              <span>CLASS</span>
              <strong>Grade 8</strong>
            </div>

            <div className="profile-detail">
              <span>SECTION</span>
              <strong>A</strong>
            </div>

            <div className="profile-detail">
              <span>ACADEMIC SESSION</span>
              <strong>2026</strong>
            </div>

            <div className="profile-detail">
              <span>ADMISSION DATE</span>
              <strong>08 April 2021</strong>
            </div>

            <div className="profile-detail">
              <span>CLASS TEACHER</span>
              <strong>Mr. Hassan Khan</strong>
            </div>

            <div className="profile-detail">
              <span>HOUSE</span>
              <strong>Iqbal House</strong>
            </div>

          </div>

        </section>


        {/* CONTACT INFORMATION */}

        <section className="profile-section">

          <div className="profile-section-title">

            <span>
              03
            </span>

            <div>
              <small>
                CONTACT INFORMATION
              </small>

              <h2>
                Contact Details
              </h2>
            </div>

          </div>


          <div className="profile-details-grid">

            <div className="profile-detail">
              <span>PHONE</span>
              <strong>+92 300 1234567</strong>
            </div>

            <div className="profile-detail">
              <span>EMAIL</span>
              <strong>ali.ahmed@student.alhaytham.edu.pk</strong>
            </div>

            <div className="profile-detail profile-detail-wide">
              <span>ADDRESS</span>
              <strong>
                House 24, Street 8, Rawalpindi, Pakistan
              </strong>
            </div>

          </div>

        </section>


        {/* PARENT / GUARDIAN */}

        <section className="profile-section">

          <div className="profile-section-title">

            <span>
              04
            </span>

            <div>
              <small>
                PARENT / GUARDIAN
              </small>

              <h2>
                Guardian Information
              </h2>
            </div>

          </div>


          <div className="profile-details-grid">

            <div className="profile-detail">
              <span>GUARDIAN NAME</span>
              <strong>Muhammad Ahmed</strong>
            </div>

            <div className="profile-detail">
              <span>RELATIONSHIP</span>
              <strong>Father</strong>
            </div>

            <div className="profile-detail">
              <span>CONTACT NUMBER</span>
              <strong>+92 300 7654321</strong>
            </div>

            <div className="profile-detail">
              <span>EMERGENCY CONTACT</span>
              <strong>+92 300 7654321</strong>
            </div>

          </div>

        </section>


        {/* BOTTOM ACTIONS */}

        <section className="profile-actions">

          <Link
            href="/student/dashboard"
            className="profile-back"
          >
            ← Back to Dashboard
          </Link>

          <button
            type="button"
            className="profile-edit"
          >
            Request Profile Update
            <span>→</span>
          </button>

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