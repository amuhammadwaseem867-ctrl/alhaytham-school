"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import "./Fees.css";

const initialFees = [
  {
    id: "ST-1001",
    name: "Ali Ahmed",
    roll: "01",
    className: "Grade 8-A",
    monthlyFee: 8500,
    paid: 8500,
    due: "2026-08-10",
    status: "Paid",
  },
  {
    id: "ST-1002",
    name: "Hamza Khan",
    roll: "02",
    className: "Grade 8-A",
    monthlyFee: 8500,
    paid: 5000,
    due: "2026-08-10",
    status: "Pending",
  },
  {
    id: "ST-1003",
    name: "Abdullah Raza",
    roll: "03",
    className: "Grade 8-A",
    monthlyFee: 8500,
    paid: 0,
    due: "2026-08-10",
    status: "Overdue",
  },
  {
    id: "ST-1004",
    name: "Usman Tariq",
    roll: "04",
    className: "Grade 9-A",
    monthlyFee: 9000,
    paid: 9000,
    due: "2026-08-10",
    status: "Paid",
  },
  {
    id: "ST-1005",
    name: "Hassan Shah",
    roll: "05",
    className: "Grade 9-A",
    monthlyFee: 9000,
    paid: 6000,
    due: "2026-08-10",
    status: "Pending",
  },
  {
    id: "ST-1006",
    name: "Bilal Ahmad",
    roll: "06",
    className: "Grade 10-A",
    monthlyFee: 9500,
    paid: 9500,
    due: "2026-08-10",
    status: "Paid",
  },
  {
    id: "ST-1007",
    name: "Saad Ali",
    roll: "07",
    className: "Grade 10-A",
    monthlyFee: 9500,
    paid: 3000,
    due: "2026-08-10",
    status: "Pending",
  },
  {
    id: "ST-1008",
    name: "Zain Malik",
    roll: "08",
    className: "Grade 11-A",
    monthlyFee: 10000,
    paid: 0,
    due: "2026-08-05",
    status: "Overdue",
  },
];

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-PK").format(amount);
};

export default function FeesPage() {
  const [fees, setFees] = useState(initialFees);
  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("All Classes");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const filteredFees = useMemo(() => {
    return fees.filter((student) => {
      const searchMatch =
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.id.toLowerCase().includes(search.toLowerCase()) ||
        student.roll.includes(search);

      const classMatch =
        classFilter === "All Classes" ||
        student.className === classFilter;

      const statusMatch =
        statusFilter === "All Status" ||
        student.status === statusFilter;

      return searchMatch && classMatch && statusMatch;
    });
  }, [fees, search, classFilter, statusFilter]);

  const totalFees = fees.reduce(
    (sum, student) => sum + student.monthlyFee,
    0
  );

  const collectedFees = fees.reduce(
    (sum, student) => sum + student.paid,
    0
  );

  const pendingFees = fees.reduce(
    (sum, student) =>
      sum + Math.max(student.monthlyFee - student.paid, 0),
    0
  );

  const overdueFees = fees
    .filter((student) => student.status === "Overdue")
    .reduce(
      (sum, student) =>
        sum + Math.max(student.monthlyFee - student.paid, 0),
      0
    );

  const markAsPaid = (studentId) => {
    setFees((currentFees) =>
      currentFees.map((student) => {
        if (student.id !== studentId) {
          return student;
        }

        return {
          ...student,
          paid: student.monthlyFee,
          status: "Paid",
        };
      })
    );
  };

  return (
    <main className="fees-page">

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="fees-sidebar">

        <Link href="/" className="fees-logo">
          <span>AL-HAYTHAM</span>
          <small>SCHOOL</small>
        </Link>

        <div className="fees-admin">

          <div className="fees-admin-avatar">
            A
          </div>

          <div>
            <strong>Administrator</strong>
            <span>School Admin</span>
          </div>

        </div>

        <nav className="fees-navigation">

          <span className="fees-nav-label">
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

          <span className="fees-nav-label fees-space">
            MANAGEMENT
          </span>

          <Link href="/admin/attendance">
            <span>05</span>
            Attendance
          </Link>

          <Link
            href="/admin/fees"
            className="fees-active"
          >
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

          <span className="fees-nav-label fees-space">
            SYSTEM
          </span>

          <Link href="/admin/settings">
            <span>09</span>
            Settings
          </Link>

        </nav>

        <Link href="/login" className="fees-logout">
          ← Sign out
        </Link>

      </aside>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="fees-content">

        {/* HEADER */}

        <header className="fees-header">

          <div>

            <span className="fees-eyebrow">
              ADMINISTRATION / FINANCE
            </span>

            <h1>
              Fee
              <br />
              <em>Records.</em>
            </h1>

            <p>
              Monitor student payments, outstanding balances
              and monthly fee collection.
            </p>

          </div>

          <button
            className="fees-export-button"
            onClick={() => alert("Fee report exported.")}
          >
            Export Report
          </button>

        </header>


        {/* =====================================================
            FINANCIAL SUMMARY
        ===================================================== */}

        <section className="fees-summary">

          <div className="fee-summary-card">

            <span>
              TOTAL BILLING
            </span>

            <strong>
              Rs. {formatCurrency(totalFees)}
            </strong>

            <small>
              Monthly expected fees
            </small>

          </div>


          <div className="fee-summary-card collected">

            <span>
              COLLECTED
            </span>

            <strong>
              Rs. {formatCurrency(collectedFees)}
            </strong>

            <small>
              Payments received
            </small>

          </div>


          <div className="fee-summary-card pending">

            <span>
              PENDING
            </span>

            <strong>
              Rs. {formatCurrency(pendingFees)}
            </strong>

            <small>
              Outstanding balance
            </small>

          </div>


          <div className="fee-summary-card overdue">

            <span>
              OVERDUE
            </span>

            <strong>
              Rs. {formatCurrency(overdueFees)}
            </strong>

            <small>
              Requires attention
            </small>

          </div>

        </section>


        {/* =====================================================
            COLLECTION BAR
        ===================================================== */}

        <section className="fees-progress-card">

          <div className="fees-progress-info">

            <div>
              <span>
                MONTHLY COLLECTION
              </span>

              <h2>
                {totalFees > 0
                  ? Math.round(
                      (collectedFees / totalFees) * 100
                    )
                  : 0}
                %
              </h2>
            </div>

            <strong>
              Rs. {formatCurrency(collectedFees)}
              <small>
                {" "}of Rs. {formatCurrency(totalFees)}
              </small>
            </strong>

          </div>

          <div className="fees-progress-track">

            <div
              className="fees-progress-fill"
              style={{
                width: `${
                  totalFees > 0
                    ? Math.min(
                        (collectedFees / totalFees) * 100,
                        100
                      )
                    : 0
                }%`,
              }}
            />

          </div>

        </section>


        {/* =====================================================
            FILTERS
        ===================================================== */}

        <section className="fees-filter-bar">

          <div className="fees-search">

            <span>
              SEARCH
            </span>

            <input
              type="text"
              placeholder="Search student or ID..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />

          </div>


          <div className="fees-filter">

            <span>
              CLASS
            </span>

            <select
              value={classFilter}
              onChange={(event) =>
                setClassFilter(event.target.value)
              }
            >
              <option>All Classes</option>
              <option>Grade 8-A</option>
              <option>Grade 9-A</option>
              <option>Grade 10-A</option>
              <option>Grade 11-A</option>
              <option>Grade 12-A</option>
            </select>

          </div>


          <div className="fees-filter">

            <span>
              STATUS
            </span>

            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value)
              }
            >
              <option>All Status</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Overdue</option>
            </select>

          </div>

        </section>


        {/* =====================================================
            FEE TABLE
        ===================================================== */}

        <section className="fees-table-card">

          <div className="fees-table-heading">

            <div>

              <span>
                STUDENT ACCOUNTS
              </span>

              <h2>
                Fee Register
              </h2>

            </div>

            <span className="fees-result-count">
              {filteredFees.length} Records
            </span>

          </div>


          <div className="fees-table-wrapper">

            <table className="fees-table">

              <thead>

                <tr>

                  <th>
                    ROLL
                  </th>

                  <th>
                    STUDENT
                  </th>

                  <th>
                    CLASS
                  </th>

                  <th>
                    MONTHLY FEE
                  </th>

                  <th>
                    PAID
                  </th>

                  <th>
                    BALANCE
                  </th>

                  <th>
                    DUE DATE
                  </th>

                  <th>
                    STATUS
                  </th>

                  <th>
                    ACTION
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredFees.map((student) => {

                  const balance =
                    student.monthlyFee -
                    student.paid;

                  return (
                    <tr key={student.id}>

                      <td>

                        <span className="fee-roll">
                          {student.roll}
                        </span>

                      </td>


                      <td>

                        <div className="fee-student">

                          <div className="fee-student-avatar">
                            {student.name.charAt(0)}
                          </div>

                          <div>

                            <strong>
                              {student.name}
                            </strong>

                            <span>
                              {student.id}
                            </span>

                          </div>

                        </div>

                      </td>


                      <td>
                        <span className="fee-class">
                          {student.className}
                        </span>
                      </td>


                      <td>
                        Rs. {formatCurrency(student.monthlyFee)}
                      </td>


                      <td className="fee-paid">
                        Rs. {formatCurrency(student.paid)}
                      </td>


                      <td>

                        <strong
                          className={
                            balance > 0
                              ? "fee-balance"
                              : "fee-cleared"
                          }
                        >
                          Rs. {formatCurrency(balance)}
                        </strong>

                      </td>


                      <td>
                        <span className="fee-due">
                          {student.due}
                        </span>
                      </td>


                      <td>

                        <span
                          className={`fee-status ${student.status.toLowerCase()}`}
                        >
                          <i></i>
                          {student.status}
                        </span>

                      </td>


                      <td>

                        {student.status !== "Paid" ? (
                          <button
                            className="fee-pay-button"
                            onClick={() =>
                              markAsPaid(student.id)
                            }
                          >
                            Mark Paid
                          </button>
                        ) : (
                          <span className="fee-paid-label">
                            Completed
                          </span>
                        )}

                      </td>

                    </tr>
                  );
                })}

              </tbody>

            </table>


            {filteredFees.length === 0 && (
              <div className="fees-empty">

                <strong>
                  No records found.
                </strong>

                <span>
                  Try changing your search or filters.
                </span>

              </div>
            )}

          </div>


          {/* TABLE FOOTER */}

          <div className="fees-table-footer">

            <span>
              Showing {filteredFees.length} of {fees.length} student records
            </span>

            <span>
              AUGUST 2026 · FEE REGISTER
            </span>

          </div>

        </section>


        {/* FOOTER */}

        <footer className="fees-footer">

          <span>
            AL-HAYTHAM SCHOOL
          </span>

          <span>
            FINANCE · AUGUST 2026
          </span>

        </footer>

      </section>

    </main>
  );
}