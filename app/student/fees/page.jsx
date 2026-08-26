"use client";

import Link from "next/link";
import "../StudentPortal.css";
import "./Fees.css";

const feeHistory = [
  {
    month: "August 2026",
    description: "Monthly Tuition Fee",
    amount: "18,000",
    status: "Paid",
    date: "05 Aug 2026",
  },
  {
    month: "July 2026",
    description: "Monthly Tuition Fee",
    amount: "18,000",
    status: "Paid",
    date: "05 Jul 2026",
  },
  {
    month: "June 2026",
    description: "Monthly Tuition Fee",
    amount: "18,000",
    status: "Paid",
    date: "06 Jun 2026",
  },
  {
    month: "May 2026",
    description: "Monthly Tuition Fee",
    amount: "18,000",
    status: "Paid",
    date: "05 May 2026",
  },
];

export default function FeesPage() {
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

          <Link href="/student">
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

          <Link
            href="/student/fees"
            className="student-active"
          >
            <span>05</span>
            Fees
          </Link>

          <Link href="/student/notices">
            <span>06</span>
            Notices
          </Link>

        </nav>

        <Link href="/login" className="student-signout">
          ← Sign out
        </Link>

      </aside>


      {/* MAIN */}

      <section className="student-main">

        {/* HEADER */}

        <header className="fees-header">

          <div>

            <span className="student-eyebrow">
              STUDENT PORTAL / FEES
            </span>

            <h1>
              My
              <br />
              <em>Fees.</em>
            </h1>

            <p>
              View your current fee status, payment history
              and outstanding balance.
            </p>

          </div>

          <div className="fees-session">

            <span>ACADEMIC SESSION</span>

            <strong>
              2026 — 2027
            </strong>

          </div>

        </header>


        {/* FEE SUMMARY */}

        <section className="fees-summary">

          <div className="fees-balance">

            <span>
              OUTSTANDING BALANCE
            </span>

            <strong>
              PKR 18,000
            </strong>

            <p>
              Due on 05 September 2026
            </p>

          </div>


          <div className="fees-summary-item">

            <span>
              MONTHLY FEE
            </span>

            <strong>
              PKR 18,000
            </strong>

          </div>


          <div className="fees-summary-item">

            <span>
              PAID THIS YEAR
            </span>

            <strong>
              PKR 72,000
            </strong>

          </div>


          <div className="fees-summary-item">

            <span>
              STATUS
            </span>

            <strong className="fee-due">
              Due
            </strong>

          </div>

        </section>


        {/* CURRENT FEE */}

        <section className="fee-current">

          <div className="fee-current-heading">

            <div>

              <span>
                CURRENT INVOICE
              </span>

              <h2>
                September 2026
              </h2>

            </div>

            <span className="fee-invoice-number">
              INV-2026-09-1001
            </span>

          </div>


          <div className="fee-current-body">

            <div className="fee-description">

              <span>
                DESCRIPTION
              </span>

              <strong>
                Monthly Tuition Fee
              </strong>

              <p>
                Grade 8 — Section A
              </p>

            </div>


            <div className="fee-amount">

              <span>
                AMOUNT DUE
              </span>

              <strong>
                PKR 18,000
              </strong>

            </div>


            <div className="fee-due-date">

              <span>
                DUE DATE
              </span>

              <strong>
                05 Sep 2026
              </strong>

            </div>

          </div>


          <div className="fee-current-footer">

            <div>

              <span>
                PAYMENT STATUS
              </span>

              <strong>
                Pending Payment
              </strong>

            </div>

            <button type="button">
              Pay Fee
              <span>→</span>
            </button>

          </div>

        </section>


        {/* PAYMENT HISTORY */}

        <section className="fees-section">

          <div className="fees-section-heading">

            <div>

              <span>
                PAYMENT RECORD
              </span>

              <h2>
                Payment History
              </h2>

            </div>

            <span>
              2026
            </span>

          </div>


          <div className="fee-table">

            <div className="fee-table-head">

              <span>MONTH</span>
              <span>DESCRIPTION</span>
              <span>AMOUNT</span>
              <span>DATE</span>
              <span>STATUS</span>

            </div>


            {feeHistory.map((fee) => (

              <div
                className="fee-table-row"
                key={fee.month}
              >

                <strong>
                  {fee.month}
                </strong>

                <span>
                  {fee.description}
                </span>

                <span className="fee-row-amount">
                  PKR {fee.amount}
                </span>

                <span>
                  {fee.date}
                </span>

                <span className="fee-paid">
                  {fee.status}
                </span>

              </div>

            ))}

          </div>

        </section>


        {/* FEE INFORMATION */}

        <section className="fee-info">

          <div className="fee-info-number">
            01
          </div>

          <div>

            <span>
              PAYMENT INFORMATION
            </span>

            <h3>
              Need help with your fee?
            </h3>

            <p>
              For fee-related questions, payment confirmation
              or corrections, please contact the school
              administration or accounts office.
            </p>

          </div>

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