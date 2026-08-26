"use client";

import Link from "next/link";
import { useState } from "react";
import "./AddTeacher.css";

export default function AddTeacherPage() {
  const [form, setForm] = useState({
    name: "",
    teacherId: "",
    subject: "",
    className: "",
    qualification: "",
    experience: "",
    phone: "",
    email: "",
    joiningDate: "",
    address: "",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Teacher:", form);

    alert("Teacher added successfully!");

    setForm({
      name: "",
      teacherId: "",
      subject: "",
      className: "",
      qualification: "",
      experience: "",
      phone: "",
      email: "",
      joiningDate: "",
      address: "",
      status: "Active",
    });
  };

  return (
    <main className="add-teacher-page">

      {/* SIDEBAR */}

      <aside className="add-teacher-sidebar">

        <Link href="/" className="add-teacher-logo">
          <span>AL-HAYTHAM</span>
          <small>SCHOOL</small>
        </Link>

        <div className="add-teacher-admin">

          <div className="add-teacher-admin-avatar">
            A
          </div>

          <div>
            <strong>Administrator</strong>
            <span>School Admin</span>
          </div>

        </div>

        <nav className="add-teacher-navigation">

          <span className="add-teacher-nav-label">
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
            className="add-teacher-nav-active"
          >
            <span>03</span>
            Teachers
          </Link>

          <Link href="/admin/classes">
            <span>04</span>
            Classes
          </Link>

          <span className="add-teacher-nav-label add-teacher-space">
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

          <span className="add-teacher-nav-label add-teacher-space">
            SYSTEM
          </span>

          <Link href="/admin/settings">
            <span>09</span>
            Settings
          </Link>

        </nav>

        <Link href="/login" className="add-teacher-logout">
          ← Sign out
        </Link>

      </aside>


      {/* CONTENT */}

      <section className="add-teacher-content">

        <header className="add-teacher-header">

          <div>

            <span className="add-teacher-eyebrow">
              ADMINISTRATION / FACULTY / NEW RECORD
            </span>

            <h1>
              Add
              <br />
              <em>Teacher.</em>
            </h1>

            <p>
              Create a new faculty record and assign
              teaching responsibilities.
            </p>

          </div>

          <Link
            href="/admin/teachers"
            className="add-teacher-back"
          >
            ← Teachers Directory
          </Link>

        </header>


        {/* FORM */}

        <form
          className="teacher-form"
          onSubmit={handleSubmit}
        >

          {/* PERSONAL */}

          <section className="teacher-form-card">

            <div className="teacher-form-heading">

              <span>01</span>

              <div>
                <small>PERSONAL INFORMATION</small>
                <h2>Teacher details</h2>
              </div>

            </div>


            <div className="teacher-form-grid">

              <div className="teacher-field teacher-field-full">

                <label>
                  FULL NAME
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter teacher's full name"
                  required
                />

              </div>


              <div className="teacher-field">

                <label>
                  STAFF ID
                </label>

                <input
                  type="text"
                  name="teacherId"
                  value={form.teacherId}
                  onChange={handleChange}
                  placeholder="e.g. TH-106"
                  required
                />

              </div>


              <div className="teacher-field">

                <label>
                  PHONE NUMBER
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+92 300 0000000"
                  required
                />

              </div>


              <div className="teacher-field">

                <label>
                  EMAIL ADDRESS
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="teacher@example.com"
                />

              </div>


              <div className="teacher-field">

                <label>
                  QUALIFICATION
                </label>

                <input
                  type="text"
                  name="qualification"
                  value={form.qualification}
                  onChange={handleChange}
                  placeholder="e.g. MSc Mathematics"
                />

              </div>

            </div>

          </section>


          {/* ACADEMIC */}

          <section className="teacher-form-card">

            <div className="teacher-form-heading">

              <span>02</span>

              <div>
                <small>ACADEMIC ASSIGNMENT</small>
                <h2>Teaching information</h2>
              </div>

            </div>


            <div className="teacher-form-grid">

              <div className="teacher-field">

                <label>
                  SUBJECT
                </label>

                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select subject
                  </option>

                  <option>
                    Mathematics
                  </option>

                  <option>
                    English
                  </option>

                  <option>
                    Physics
                  </option>

                  <option>
                    Chemistry
                  </option>

                  <option>
                    Biology
                  </option>

                  <option>
                    Computer Science
                  </option>

                  <option>
                    Urdu
                  </option>

                  <option>
                    Islamiat
                  </option>

                  <option>
                    Pakistan Studies
                  </option>

                </select>

              </div>


              <div className="teacher-field">

                <label>
                  ASSIGNED CLASS
                </label>

                <select
                  name="className"
                  value={form.className}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select class
                  </option>

                  <option>
                    Grade 6
                  </option>

                  <option>
                    Grade 7
                  </option>

                  <option>
                    Grade 8
                  </option>

                  <option>
                    Grade 9
                  </option>

                  <option>
                    Grade 10
                  </option>

                  <option>
                    Grade 11
                  </option>

                  <option>
                    Grade 12
                  </option>

                </select>

              </div>


              <div className="teacher-field">

                <label>
                  EXPERIENCE
                </label>

                <select
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                >
                  <option value="">
                    Select experience
                  </option>

                  <option>
                    Less than 1 Year
                  </option>

                  <option>
                    1 - 3 Years
                  </option>

                  <option>
                    4 - 6 Years
                  </option>

                  <option>
                    7 - 10 Years
                  </option>

                  <option>
                    10+ Years
                  </option>

                </select>

              </div>


              <div className="teacher-field">

                <label>
                  JOINING DATE
                </label>

                <input
                  type="date"
                  name="joiningDate"
                  value={form.joiningDate}
                  onChange={handleChange}
                />

              </div>

            </div>

          </section>


          {/* CONTACT */}

          <section className="teacher-form-card">

            <div className="teacher-form-heading">

              <span>03</span>

              <div>
                <small>ADDITIONAL INFORMATION</small>
                <h2>Contact & status</h2>
              </div>

            </div>


            <div className="teacher-form-grid">

              <div className="teacher-field teacher-field-full">

                <label>
                  HOME ADDRESS
                </label>

                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter complete address"
                  rows="4"
                />

              </div>


              <div className="teacher-field">

                <label>
                  EMPLOYMENT STATUS
                </label>

                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option value="Active">
                    Active
                  </option>

                  <option value="Inactive">
                    Inactive
                  </option>

                </select>

              </div>

            </div>

          </section>


          {/* ACTIONS */}

          <div className="add-teacher-actions">

            <Link
              href="/admin/teachers"
              className="cancel-teacher"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="save-teacher"
            >
              Save Teacher
              <span>→</span>
            </button>

          </div>

        </form>


        <footer className="add-teacher-footer">

          <span>
            AL-HAYTHAM SCHOOL
          </span>

          <span>
            FACULTY MANAGEMENT · 2026
          </span>

        </footer>

      </section>

    </main>
  );
}