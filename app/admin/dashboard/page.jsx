import Link from "next/link";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <main className="admin-dashboard">

      <aside className="admin-sidebar">

        <Link href="/" className="admin-logo">
          <span>AL-HAYTHAM</span>
          <small>SCHOOL</small>
        </Link>

        <div className="admin-profile">
          <div className="admin-avatar">A</div>

          <div>
            <strong>Administrator</strong>
            <span>School Admin</span>
          </div>
        </div>

        <nav className="admin-navigation">

          <span className="nav-label">MAIN</span>

          <Link
            href="/admin/dashboard"
            className="nav-active"
          >
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

          <span className="nav-label nav-space">
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

          <span className="nav-label nav-space">
            SYSTEM
          </span>

          <Link href="/admin/settings">
            <span>09</span>
            Settings
          </Link>

        </nav>

        <Link href="/login" className="admin-logout">
          ← Sign out
        </Link>

      </aside>

      <section className="dashboard-content">

        <header className="dashboard-header">

          <div>
            <span className="dashboard-eyebrow">
              ADMINISTRATION PORTAL
            </span>

            <h1>
              Good morning,
              <br />
              <em>Administrator.</em>
            </h1>

            <p>
              Here's what's happening at Al-Haytham
              School today.
            </p>
          </div>

          <div className="dashboard-date">
            <span>TODAY</span>
            <strong>26 AUG 2026</strong>
          </div>

        </header>

        <section className="dashboard-stats">

          <div className="stat-card">
            <span>TOTAL STUDENTS</span>
            <strong>1,248</strong>
            <small>↑ 4.2% this month</small>
          </div>

          <div className="stat-card">
            <span>TEACHERS</span>
            <strong>86</strong>
            <small>Across all departments</small>
          </div>

          <div className="stat-card">
            <span>ATTENDANCE</span>
            <strong>94.8%</strong>
            <small>Today's average</small>
          </div>

          <div className="stat-card">
            <span>FEES COLLECTED</span>
            <strong>82%</strong>
            <small>Current month</small>
          </div>

        </section>

        <section className="dashboard-grid">

          <div className="dashboard-panel">

            <div className="panel-heading">
              <div>
                <span>OVERVIEW</span>
                <h2>School activity</h2>
              </div>

              <Link href="/admin/attendance">
                View attendance →
              </Link>
            </div>

            <div className="activity-list">

              <div className="activity-item">
                <div className="activity-number">01</div>

                <div>
                  <strong>Attendance updated</strong>
                  <span>Grade 10 · Section A</span>
                </div>

                <time>09:42 AM</time>
              </div>

              <div className="activity-item">
                <div className="activity-number">02</div>

                <div>
                  <strong>New student enrolled</strong>
                  <span>Grade 7 · Section B</span>
                </div>

                <time>09:18 AM</time>
              </div>

              <div className="activity-item">
                <div className="activity-number">03</div>

                <div>
                  <strong>Result published</strong>
                  <span>Grade 9 · Mid Term</span>
                </div>

                <time>08:56 AM</time>
              </div>

              <div className="activity-item">
                <div className="activity-number">04</div>

                <div>
                  <strong>Fee payment received</strong>
                  <span>Student ID · AH-0821</span>
                </div>

                <time>08:31 AM</time>
              </div>

            </div>

          </div>

          <div className="dashboard-panel quick-panel">

            <div className="panel-heading">
              <div>
                <span>QUICK ACCESS</span>
                <h2>Manage</h2>
              </div>
            </div>

            <div className="quick-links">

              <Link href="/admin/students/add">
                <span>+</span>
                Add Student
                <b>↗</b>
              </Link>

              <Link href="/admin/teachers">
                <span>+</span>
                Add Teacher
                <b>↗</b>
              </Link>

              <Link href="/admin/attendance">
                <span>+</span>
                Mark Attendance
                <b>↗</b>
              </Link>

              <Link href="/admin/notices">
                <span>+</span>
                Create Notice
                <b>↗</b>
              </Link>

            </div>

          </div>

        </section>

        <footer className="dashboard-footer">
          <span>AL-HAYTHAM SCHOOL</span>
          <span>ADMINISTRATION PORTAL · 2026</span>
        </footer>

      </section>

    </main>
  );
}