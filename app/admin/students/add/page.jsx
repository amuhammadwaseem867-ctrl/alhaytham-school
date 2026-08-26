"use client";

import Link from "next/link";
import { useState } from "react";
import "./AddStudent.css";

export default function AddStudentPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    dob: "",
    gender: "",
    studentId: "",
    className: "",
    section: "",
    phone: "",
    email: "",
    address: "",
    admissionDate: "",
    previousSchool: "",
    emergencyContact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Student Data:", formData);

    alert("Student information saved successfully.");

    window.location.href = "/admin/students";
  };

  return (
    <main className="add-student-page">

      {/* SIDEBAR */}

      <aside className="add-student-sidebar">

        <Link href="/" className="add-student-logo">
          <span>AL-HAYTHAM</span>
          <small>SCHOOL</small>
        </Link>

        <div className="add-student-profile">

          <div className="add-student-avatar">
            A
          </div>

          <div>
            <strong>Administrator</strong>
            <span>School Admin</span>
          </div>

        </div>

        <nav className="add-student-navigation">

          <span className="add-nav-label">
            MAIN
          </span>

          <Link href="/admin/dashboard">
            <span>01</span>
            Dashboard
          </Link>

          <Link
            href="/admin/students"
            className="add-nav-active"
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

          <span className="add-nav-label add-nav-space">
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

          <span className="add-nav-label add-nav-space">
            SYSTEM
          </span>

          <Link href="/admin/settings">
            <span>09</span>
            Settings
          </Link>

        </nav>

        <Link
          href="/login"
          className="add-student-logout"
        >
          ← Sign out
        </Link>

      </aside>


      {/* CONTENT */}

      <section className="add-student-content">

        {/* HEADER */}

        <header className="add-student-header">

          <div>

            <span className="add-student-eyebrow">
              ADMINISTRATION / STUDENTS / NEW
            </span>

            <h1>
              Add
              <br />
              <em>Student.</em>
            </h1>

            <p>
              Create a new student record and add their
              academic and personal information.
            </p>

          </div>

          <Link
            href="/admin/students"
            className="back-students-button"
          >
            ← Back to Students
          </Link>

        </header>


        {/* FORM */}

        <form
          className="student-form"
          onSubmit={handleSubmit}
        >

          {/* PERSONAL INFORMATION */}

          <section className="form-section">

            <div className="form-section-heading">

              <span>01</span>

              <div>
                <small>PERSONAL INFORMATION</small>
                <h2>Student details</h2>
              </div>

            </div>


            <div className="form-grid">

              <div className="form-field full-field">

                <label>
                  Full Name
                  <span>*</span>
                </label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter student's full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-field">

                <label>
                  Father / Guardian Name
                  <span>*</span>
                </label>

                <input
                  type="text"
                  name="fatherName"
                  placeholder="Enter father or guardian name"
                  value={formData.fatherName}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-field">

                <label>
                  Date of Birth
                  <span>*</span>
                </label>

                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-field">

                <label>
                  Gender
                  <span>*</span>
                </label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select gender
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>


              <div className="form-field">

                <label>
                  Student ID
                  <span>*</span>
                </label>

                <input
                  type="text"
                  name="studentId"
                  placeholder="e.g. AH-1025"
                  value={formData.studentId}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

          </section>


          {/* ACADEMIC INFORMATION */}

          <section className="form-section">

            <div className="form-section-heading">

              <span>02</span>

              <div>
                <small>ACADEMIC INFORMATION</small>
                <h2>Enrollment details</h2>
              </div>

            </div>


            <div className="form-grid">

              <div className="form-field">

                <label>
                  Class
                  <span>*</span>
                </label>

                <select
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select class
                  </option>

                  <option value="Grade 6">
                    Grade 6
                  </option>

                  <option value="Grade 7">
                    Grade 7
                  </option>

                  <option value="Grade 8">
                    Grade 8
                  </option>

                  <option value="Grade 9">
                    Grade 9
                  </option>

                  <option value="Grade 10">
                    Grade 10
                  </option>

                  <option value="Grade 11">
                    Grade 11
                  </option>

                  <option value="Grade 12">
                    Grade 12
                  </option>

                </select>

              </div>


              <div className="form-field">

                <label>
                  Section
                  <span>*</span>
                </label>

                <select
                  name="section"
                  value={formData.section}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select section
                  </option>

                  <option value="A">
                    Section A
                  </option>

                  <option value="B">
                    Section B
                  </option>

                  <option value="C">
                    Section C
                  </option>

                  <option value="D">
                    Section D
                  </option>

                </select>

              </div>


              <div className="form-field">

                <label>
                  Admission Date
                  <span>*</span>
                </label>

                <input
                  type="date"
                  name="admissionDate"
                  value={formData.admissionDate}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-field">

                <label>
                  Previous School
                </label>

                <input
                  type="text"
                  name="previousSchool"
                  placeholder="Previous school name"
                  value={formData.previousSchool}
                  onChange={handleChange}
                />

              </div>

            </div>

          </section>


          {/* CONTACT INFORMATION */}

          <section className="form-section">

            <div className="form-section-heading">

              <span>03</span>

              <div>
                <small>CONTACT INFORMATION</small>
                <h2>Contact details</h2>
              </div>

            </div>


            <div className="form-grid">

              <div className="form-field">

                <label>
                  Phone Number
                  <span>*</span>
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+92 300 0000000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-field">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="student@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>


              <div className="form-field full-field">

                <label>
                  Home Address
                  <span>*</span>
                </label>

                <textarea
                  name="address"
                  placeholder="Enter complete home address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="4"
                  required
                />

              </div>


              <div className="form-field">

                <label>
                  Emergency Contact
                  <span>*</span>
                </label>

                <input
                  type="tel"
                  name="emergencyContact"
                  placeholder="Emergency contact number"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

          </section>


          {/* ACTIONS */}

          <div className="student-form-actions">

            <Link
              href="/admin/students"
              className="cancel-student"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="save-student"
            >
              Save Student
              <span>→</span>
            </button>

          </div>

        </form>


        <footer className="add-student-footer">

          <span>
            AL-HAYTHAM SCHOOL
          </span>

          <span>
            STUDENT MANAGEMENT · 2026
          </span>

        </footer>

      </section>

    </main>
  );
}