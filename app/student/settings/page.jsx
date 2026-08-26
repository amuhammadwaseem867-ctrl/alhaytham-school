"use client";

import Link from "next/link";
import { useState } from "react";
import "../StudentPortal.css";
import "./Settings.css";

export default function StudentSettings() {
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [resultAlerts, setResultAlerts] = useState(true);
  const [attendanceAlerts, setAttendanceAlerts] = useState(true);

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

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

          <Link href="/student/dashboard">
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

          <Link
            href="/student/settings"
            className="student-active"
          >
            <span>07</span>
            Settings
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

        <header className="settings-header">

          <div>

            <span className="student-eyebrow">
              STUDENT PORTAL / SETTINGS
            </span>

            <h1>
              Account
              <br />
              <em>Settings.</em>
            </h1>

            <p>
              Manage your portal preferences, notifications,
              security and account information.
            </p>

          </div>

          <div className="settings-user-box">

            <div className="settings-mini-avatar">
              AA
            </div>

            <div>
              <strong>Ali Ahmed</strong>
              <span>ST-1001</span>
            </div>

          </div>

        </header>


        {/* ACCOUNT */}

        <section className="settings-section">

          <div className="settings-section-title">

            <span>01</span>

            <div>
              <small>ACCOUNT</small>

              <h2>
                Account Information
              </h2>
            </div>

          </div>


          <div className="settings-info-grid">

            <div className="settings-info">

              <span>STUDENT NAME</span>

              <strong>
                Ali Ahmed
              </strong>

            </div>

            <div className="settings-info">

              <span>STUDENT ID</span>

              <strong>
                ST-1001
              </strong>

            </div>

            <div className="settings-info">

              <span>REGISTERED EMAIL</span>

              <strong>
                ali.ahmed@student.alhaytham.edu.pk
              </strong>

            </div>

            <div className="settings-info">

              <span>ACCOUNT STATUS</span>

              <strong className="settings-status">
                <i></i>
                Active
              </strong>

            </div>

          </div>

        </section>


        {/* PASSWORD */}

        <section className="settings-section">

          <div className="settings-section-title">

            <span>02</span>

            <div>
              <small>SECURITY</small>

              <h2>
                Password & Security
              </h2>
            </div>

          </div>


          <div className="settings-security">

            <div>

              <strong>
                Account Password
              </strong>

              <p>
                Change your password regularly to keep
                your student account secure.
              </p>

            </div>

            <button
              type="button"
              className="settings-outline-button"
            >
              Change Password
              <span>→</span>
            </button>

          </div>


          <div className="settings-security">

            <div>

              <strong>
                Login Sessions
              </strong>

              <p>
                You are currently signed in on this device.
              </p>

            </div>

            <button
              type="button"
              className="settings-outline-button"
            >
              Manage Sessions
              <span>→</span>
            </button>

          </div>

        </section>


        {/* NOTIFICATIONS */}

        <section className="settings-section">

          <div className="settings-section-title">

            <span>03</span>

            <div>
              <small>NOTIFICATIONS</small>

              <h2>
                Notification Preferences
              </h2>
            </div>

          </div>


          <div className="settings-toggle-list">

            <div className="settings-toggle-row">

              <div>
                <strong>
                  Portal Notifications
                </strong>

                <p>
                  Receive important announcements
                  inside your student portal.
                </p>
              </div>

              <button
                type="button"
                className={`settings-toggle ${
                  notifications ? "active" : ""
                }`}
                onClick={() =>
                  setNotifications(!notifications)
                }
                aria-label="Toggle portal notifications"
              >
                <span></span>
              </button>

            </div>


            <div className="settings-toggle-row">

              <div>
                <strong>
                  Email Alerts
                </strong>

                <p>
                  Receive school updates and important
                  information by email.
                </p>
              </div>

              <button
                type="button"
                className={`settings-toggle ${
                  emailAlerts ? "active" : ""
                }`}
                onClick={() =>
                  setEmailAlerts(!emailAlerts)
                }
                aria-label="Toggle email alerts"
              >
                <span></span>
              </button>

            </div>


            <div className="settings-toggle-row">

              <div>
                <strong>
                  Result Notifications
                </strong>

                <p>
                  Get notified when new examination
                  results are published.
                </p>
              </div>

              <button
                type="button"
                className={`settings-toggle ${
                  resultAlerts ? "active" : ""
                }`}
                onClick={() =>
                  setResultAlerts(!resultAlerts)
                }
                aria-label="Toggle result notifications"
              >
                <span></span>
              </button>

            </div>


            <div className="settings-toggle-row">

              <div>
                <strong>
                  Attendance Alerts
                </strong>

                <p>
                  Receive notifications about attendance
                  and absence records.
                </p>
              </div>

              <button
                type="button"
                className={`settings-toggle ${
                  attendanceAlerts ? "active" : ""
                }`}
                onClick={() =>
                  setAttendanceAlerts(!attendanceAlerts)
                }
                aria-label="Toggle attendance alerts"
              >
                <span></span>
              </button>

            </div>

          </div>

        </section>


        {/* PREFERENCES */}

        <section className="settings-section">

          <div className="settings-section-title">

            <span>04</span>

            <div>
              <small>PORTAL PREFERENCES</small>

              <h2>
                Display Preferences
              </h2>
            </div>

          </div>


          <div className="settings-preferences">

            <div className="settings-preference">

              <div>
                <strong>
                  Language
                </strong>

                <p>
                  Choose your preferred portal language.
                </p>
              </div>

              <select defaultValue="English">
                <option>English</option>
                <option>Urdu</option>
              </select>

            </div>


            <div className="settings-preference">

              <div>
                <strong>
                  Date Format
                </strong>

                <p>
                  Select how dates should appear.
                </p>
              </div>

              <select defaultValue="DD/MM/YYYY">
                <option>DD/MM/YYYY</option>
                <option>MM/DD/YYYY</option>
                <option>YYYY-MM-DD</option>
              </select>

            </div>

          </div>

        </section>


        {/* SAVE */}

        <section className="settings-actions">

          <Link
            href="/student/dashboard"
            className="settings-cancel"
          >
            ← Back to Dashboard
          </Link>

          <button
            type="button"
            className="settings-save"
            onClick={handleSave}
          >
            {saved ? "Settings Saved ✓" : "Save Preferences"}
            {!saved && <span>→</span>}
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