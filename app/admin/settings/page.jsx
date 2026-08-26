"use client";

import Link from "next/link";
import { useState } from "react";
import "./Settings.css";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);

  const [settings, setSettings] = useState({
    schoolName: "Al-Haytham School",
    schoolEmail: "admin@alhaytham.edu",
    phone: "+92 51 0000000",
    address: "Islamabad, Pakistan",
    session: "2026 - 2027",
    principal: "Dr. Muhammad Ahmed",
    emailNotifications: true,
    attendanceAlerts: true,
    feeReminders: true,
    resultNotifications: true,
  });

  const updateSetting = (key, value) => {
    setSettings((current) => ({
      ...current,
      [key]: value,
    }));

    setSaved(false);
  };

  const saveSettings = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <main className="settings-page">

      {/* SIDEBAR */}

      <aside className="settings-sidebar">

        <Link href="/" className="settings-logo">
          <span>AL-HAYTHAM</span>
          <small>SCHOOL</small>
        </Link>

        <div className="settings-admin">

          <div className="settings-admin-avatar">
            A
          </div>

          <div>
            <strong>Administrator</strong>
            <span>School Admin</span>
          </div>

        </div>

        <nav className="settings-navigation">

          <span className="settings-nav-label">
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

          <span className="settings-nav-label settings-space">
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

          <span className="settings-nav-label settings-space">
            SYSTEM
          </span>

          <Link
            href="/admin/settings"
            className="settings-active"
          >
            <span>09</span>
            Settings
          </Link>

        </nav>

        <Link href="/login" className="settings-logout">
          ← Sign out
        </Link>

      </aside>


      {/* CONTENT */}

      <section className="settings-content">

        {/* HEADER */}

        <header className="settings-header">

          <div>

            <span className="settings-eyebrow">
              ADMINISTRATION / SYSTEM
            </span>

            <h1>
              School
              <br />
              <em>Settings.</em>
            </h1>

            <p>
              Manage your school information,
              academic configuration and system preferences.
            </p>

          </div>

          <button
            className="settings-save-button"
            onClick={saveSettings}
          >
            Save Changes
          </button>

        </header>


        {saved && (
          <div className="settings-success">
            ✓ Settings saved successfully.
          </div>
        )}


        {/* SCHOOL PROFILE */}

        <section className="settings-section">

          <div className="settings-section-heading">

            <span>
              01 / SCHOOL INFORMATION
            </span>

            <h2>
              School Profile
            </h2>

            <p>
              Basic information displayed throughout
              the school management system.
            </p>

          </div>


          <div className="settings-form">

            <div className="settings-field">

              <label>
                SCHOOL NAME
              </label>

              <input
                value={settings.schoolName}
                onChange={(e) =>
                  updateSetting(
                    "schoolName",
                    e.target.value
                  )
                }
              />

            </div>


            <div className="settings-field">

              <label>
                SCHOOL EMAIL
              </label>

              <input
                type="email"
                value={settings.schoolEmail}
                onChange={(e) =>
                  updateSetting(
                    "schoolEmail",
                    e.target.value
                  )
                }
              />

            </div>


            <div className="settings-field">

              <label>
                PHONE NUMBER
              </label>

              <input
                value={settings.phone}
                onChange={(e) =>
                  updateSetting(
                    "phone",
                    e.target.value
                  )
                }
              />

            </div>


            <div className="settings-field">

              <label>
                PRINCIPAL
              </label>

              <input
                value={settings.principal}
                onChange={(e) =>
                  updateSetting(
                    "principal",
                    e.target.value
                  )
                }
              />

            </div>


            <div className="settings-field settings-full">

              <label>
                SCHOOL ADDRESS
              </label>

              <input
                value={settings.address}
                onChange={(e) =>
                  updateSetting(
                    "address",
                    e.target.value
                  )
                }
              />

            </div>

          </div>

        </section>


        {/* ACADEMIC */}

        <section className="settings-section">

          <div className="settings-section-heading">

            <span>
              02 / ACADEMIC CONFIGURATION
            </span>

            <h2>
              Academic Session
            </h2>

            <p>
              Configure the current academic year
              and school administration details.
            </p>

          </div>


          <div className="settings-form">

            <div className="settings-field">

              <label>
                CURRENT SESSION
              </label>

              <select
                value={settings.session}
                onChange={(e) =>
                  updateSetting(
                    "session",
                    e.target.value
                  )
                }
              >
                <option>2026 - 2027</option>
                <option>2025 - 2026</option>
                <option>2027 - 2028</option>
              </select>

            </div>


            <div className="settings-field">

              <label>
                SCHOOL STATUS
              </label>

              <div className="settings-status-box">
                <span></span>
                Operational
              </div>

            </div>

          </div>

        </section>


        {/* NOTIFICATIONS */}

        <section className="settings-section">

          <div className="settings-section-heading">

            <span>
              03 / NOTIFICATIONS
            </span>

            <h2>
              System Alerts
            </h2>

            <p>
              Choose which administrative notifications
              should be enabled.
            </p>

          </div>


          <div className="settings-options">

            <label className="settings-option">

              <div>

                <strong>
                  Email Notifications
                </strong>

                <span>
                  Receive important system updates by email.
                </span>

              </div>

              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(e) =>
                  updateSetting(
                    "emailNotifications",
                    e.target.checked
                  )
                }
              />

              <i></i>

            </label>


            <label className="settings-option">

              <div>

                <strong>
                  Attendance Alerts
                </strong>

                <span>
                  Notify administrators about attendance issues.
                </span>

              </div>

              <input
                type="checkbox"
                checked={settings.attendanceAlerts}
                onChange={(e) =>
                  updateSetting(
                    "attendanceAlerts",
                    e.target.checked
                  )
                }
              />

              <i></i>

            </label>


            <label className="settings-option">

              <div>

                <strong>
                  Fee Reminders
                </strong>

                <span>
                  Send reminders for pending student fees.
                </span>

              </div>

              <input
                type="checkbox"
                checked={settings.feeReminders}
                onChange={(e) =>
                  updateSetting(
                    "feeReminders",
                    e.target.checked
                  )
                }
              />

              <i></i>

            </label>


            <label className="settings-option">

              <div>

                <strong>
                  Result Notifications
                </strong>

                <span>
                  Notify parents when examination results are published.
                </span>

              </div>

              <input
                type="checkbox"
                checked={settings.resultNotifications}
                onChange={(e) =>
                  updateSetting(
                    "resultNotifications",
                    e.target.checked
                  )
                }
              />

              <i></i>

            </label>

          </div>

        </section>


        {/* SECURITY */}

        <section className="settings-section">

          <div className="settings-section-heading">

            <span>
              04 / SECURITY
            </span>

            <h2>
              Administrator Access
            </h2>

            <p>
              Manage administrator account security.
            </p>

          </div>


          <div className="settings-security">

            <div className="settings-security-info">

              <div className="settings-security-icon">
                A
              </div>

              <div>

                <strong>
                  Administrator Account
                </strong>

                <span>
                  admin@alhaytham.edu
                </span>

              </div>

            </div>


            <button
              onClick={() =>
                alert("Change password form will open here.")
              }
            >
              Change Password
            </button>

          </div>

        </section>


        {/* FOOTER */}

        <footer className="settings-footer">

          <span>
            AL-HAYTHAM SCHOOL
          </span>

          <span>
            SYSTEM SETTINGS · 2026
          </span>

        </footer>

      </section>

    </main>
  );
}