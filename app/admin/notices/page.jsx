"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import "./Notices.css";

const initialNotices = [
  {
    id: 1,
    title: "Annual Examination Schedule 2026",
    category: "Examination",
    audience: "All Students",
    date: "26 Aug 2026",
    status: "Published",
    priority: "High",
    description:
      "The annual examination schedule for the academic year 2026 has been finalized. Students are requested to prepare according to the published timetable.",
  },
  {
    id: 2,
    title: "Parent Teacher Meeting",
    category: "Meeting",
    audience: "Parents",
    date: "24 Aug 2026",
    status: "Published",
    priority: "Medium",
    description:
      "A parent teacher meeting will be held to discuss student academic progress and overall performance.",
  },
  {
    id: 3,
    title: "School Timing Update",
    category: "General",
    audience: "All Students",
    date: "22 Aug 2026",
    status: "Published",
    priority: "Normal",
    description:
      "School timings have been updated for the upcoming academic session. Please check the new reporting and dismissal timings.",
  },
  {
    id: 4,
    title: "Science Exhibition Registration",
    category: "Event",
    audience: "Grades 8-12",
    date: "20 Aug 2026",
    status: "Draft",
    priority: "Medium",
    description:
      "Students interested in participating in the annual science exhibition can register through their class teacher.",
  },
  {
    id: 5,
    title: "Fee Submission Reminder",
    category: "Finance",
    audience: "Parents",
    date: "18 Aug 2026",
    status: "Published",
    priority: "High",
    description:
      "Parents are requested to clear outstanding monthly fee balances before the due date.",
  },
];

export default function NoticesPage() {
  const [notices, setNotices] = useState(initialNotices);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Status");

  const filteredNotices = useMemo(() => {
    return notices.filter((notice) => {
      const searchMatch =
        notice.title.toLowerCase().includes(search.toLowerCase()) ||
        notice.category.toLowerCase().includes(search.toLowerCase()) ||
        notice.audience.toLowerCase().includes(search.toLowerCase());

      const categoryMatch =
        category === "All Categories" ||
        notice.category === category;

      const statusMatch =
        status === "All Status" ||
        notice.status === status;

      return searchMatch && categoryMatch && statusMatch;
    });
  }, [notices, search, category, status]);

  const publishedCount = notices.filter(
    (notice) => notice.status === "Published"
  ).length;

  const draftCount = notices.filter(
    (notice) => notice.status === "Draft"
  ).length;

  const highPriorityCount = notices.filter(
    (notice) => notice.priority === "High"
  ).length;

  const publishNotice = (id) => {
    setNotices((current) =>
      current.map((notice) =>
        notice.id === id
          ? { ...notice, status: "Published" }
          : notice
      )
    );
  };

  const deleteNotice = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this notice?"
    );

    if (!confirmed) return;

    setNotices((current) =>
      current.filter((notice) => notice.id !== id)
    );
  };

  return (
    <main className="notices-page">

      {/* =====================================================
          SIDEBAR
          ===================================================== */}

      <aside className="notices-sidebar">

        <Link href="/" className="notices-logo">
          <span>AL-HAYTHAM</span>
          <small>SCHOOL</small>
        </Link>

        <div className="notices-admin">

          <div className="notices-admin-avatar">
            A
          </div>

          <div>
            <strong>Administrator</strong>
            <span>School Admin</span>
          </div>

        </div>

        <nav className="notices-navigation">

          <span className="notices-nav-label">
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

          <span className="notices-nav-label notices-space">
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

          <Link
            href="/admin/notices"
            className="notices-active"
          >
            <span>08</span>
            Notices
          </Link>

          <span className="notices-nav-label notices-space">
            SYSTEM
          </span>

          <Link href="/admin/settings">
            <span>09</span>
            Settings
          </Link>

        </nav>

        <Link href="/login" className="notices-logout">
          ← Sign out
        </Link>

      </aside>


      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <section className="notices-content">

        {/* HEADER */}

        <header className="notices-header">

          <div>

            <span className="notices-eyebrow">
              ADMINISTRATION / COMMUNICATION
            </span>

            <h1>
              School
              <br />
              <em>Notices.</em>
            </h1>

            <p>
              Publish important announcements, events,
              reminders and school communications.
            </p>

          </div>

          <button
            className="notices-create-button"
            onClick={() =>
              alert("Create Notice form will open here.")
            }
          >
            + Create Notice
          </button>

        </header>


        {/* =====================================================
            SUMMARY
            ===================================================== */}

        <section className="notices-summary">

          <div className="notice-summary-card">

            <span>
              TOTAL NOTICES
            </span>

            <strong>
              {notices.length}
            </strong>

            <small>
              All announcements
            </small>

          </div>


          <div className="notice-summary-card published">

            <span>
              PUBLISHED
            </span>

            <strong>
              {publishedCount}
            </strong>

            <small>
              Currently visible
            </small>

          </div>


          <div className="notice-summary-card draft">

            <span>
              DRAFTS
            </span>

            <strong>
              {draftCount}
            </strong>

            <small>
              Awaiting publication
            </small>

          </div>


          <div className="notice-summary-card priority">

            <span>
              HIGH PRIORITY
            </span>

            <strong>
              {highPriorityCount}
            </strong>

            <small>
              Requires attention
            </small>

          </div>

        </section>


        {/* =====================================================
            FILTERS
            ===================================================== */}

        <section className="notices-filters">

          <div className="notices-search">

            <span>
              SEARCH NOTICES
            </span>

            <input
              type="text"
              placeholder="Search announcements..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />

          </div>


          <div className="notices-filter">

            <span>
              CATEGORY
            </span>

            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value)
              }
            >
              <option>All Categories</option>
              <option>Examination</option>
              <option>Meeting</option>
              <option>General</option>
              <option>Event</option>
              <option>Finance</option>
            </select>

          </div>


          <div className="notices-filter">

            <span>
              STATUS
            </span>

            <select
              value={status}
              onChange={(event) =>
                setStatus(event.target.value)
              }
            >
              <option>All Status</option>
              <option>Published</option>
              <option>Draft</option>
            </select>

          </div>

        </section>


        {/* =====================================================
            NOTICE LIST
            ===================================================== */}

        <section className="notices-list-card">

          <div className="notices-list-heading">

            <div>

              <span>
                SCHOOL COMMUNICATION
              </span>

              <h2>
                Notice Board
              </h2>

            </div>

            <span className="notices-count">
              {filteredNotices.length} Notices
            </span>

          </div>


          <div className="notices-list">

            {filteredNotices.map((notice) => (

              <article
                className="notice-item"
                key={notice.id}
              >

                <div className="notice-number">
                  {String(notice.id).padStart(2, "0")}
                </div>


                <div className="notice-main">

                  <div className="notice-top">

                    <span
                      className={`notice-category ${notice.category.toLowerCase()}`}
                    >
                      {notice.category}
                    </span>

                    <span
                      className={`notice-priority ${notice.priority.toLowerCase()}`}
                    >
                      {notice.priority}
                    </span>

                  </div>

                  <h3>
                    {notice.title}
                  </h3>

                  <p>
                    {notice.description}
                  </p>

                  <div className="notice-meta">

                    <span>
                      AUDIENCE: <strong>{notice.audience}</strong>
                    </span>

                    <span>
                      DATE: <strong>{notice.date}</strong>
                    </span>

                  </div>

                </div>


                <div className="notice-actions">

                  <span
                    className={`notice-status ${notice.status.toLowerCase()}`}
                  >
                    <i></i>
                    {notice.status}
                  </span>


                  <div className="notice-buttons">

                    {notice.status === "Draft" && (
                      <button
                        className="notice-publish"
                        onClick={() =>
                          publishNotice(notice.id)
                        }
                      >
                        Publish
                      </button>
                    )}

                    <button
                      className="notice-view"
                      onClick={() =>
                        alert(
                          `${notice.title}\n\n${notice.description}`
                        )
                      }
                    >
                      View
                    </button>

                    <button
                      className="notice-delete"
                      onClick={() =>
                        deleteNotice(notice.id)
                      }
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </article>

            ))}


            {filteredNotices.length === 0 && (
              <div className="notices-empty">

                <strong>
                  No notices found.
                </strong>

                <span>
                  Try changing your search or filters.
                </span>

              </div>
            )}

          </div>


          <div className="notices-list-footer">

            <span>
              Showing {filteredNotices.length} of {notices.length} notices
            </span>

            <span>
              AL-HAYTHAM SCHOOL · 2026
            </span>

          </div>

        </section>


        {/* FOOTER */}

        <footer className="notices-footer">

          <span>
            AL-HAYTHAM SCHOOL
          </span>

          <span>
            COMMUNICATION · 2026
          </span>

        </footer>

      </section>

    </main>
  );
}