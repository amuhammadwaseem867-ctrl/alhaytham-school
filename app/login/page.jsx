"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./Login.css";

export default function LoginPage() {
  const router = useRouter();

  const [role, setRole] = useState("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo login
    if (role === "student") {
      router.push("/student");
    } else {
      router.push("/admin/dashboard");
    }
  };

  return (
    <main className="login-page">

      {/* BACK TO HOME */}

      <Link href="/" className="login-home">
        ← Back to School Website
      </Link>


      {/* LEFT SIDE */}

      <section className="login-intro">

        <div className="login-intro-top">

          <span className="login-school-name">
            AL-HAYTHAM
          </span>

          <span className="login-school-label">
            SCHOOL & COLLEGE
          </span>

        </div>


        <div className="login-intro-content">

          <span className="login-eyebrow">
            DIGITAL SCHOOL MANAGEMENT
          </span>

          <h1>
            Your school.
            <br />
            <em>One portal.</em>
          </h1>

          <p>
            Access your academic information, school
            resources and administrative services from
            one secure digital platform.
          </p>

        </div>


        <div className="login-intro-footer">

          <span>
            AL-HAYTHAM SCHOOLY
          </span>

          <span>
            EST. 2026
          </span>

        </div>

      </section>


      {/* RIGHT SIDE */}

      <section className="login-panel">

        <div className="login-card">

          {/* HEADER */}

          <div className="login-header">

            <span className="login-eyebrow">
              PORTAL ACCESS
            </span>

            <h2>
              Welcome
              <br />
              <em>Back.</em>
            </h2>

            <p>
              Select your portal and sign in to continue.
            </p>

          </div>


          {/* ROLE SWITCHER */}

          <div className="login-role-switch">

            <button
              type="button"
              className={role === "student" ? "active" : ""}
              onClick={() => setRole("student")}
            >
              <span>01</span>
              Student
            </button>

            <button
              type="button"
              className={role === "admin" ? "active" : ""}
              onClick={() => setRole("admin")}
            >
              <span>02</span>
              Administrator
            </button>

          </div>


          {/* LOGIN FORM */}

          <form
            className="login-form"
            onSubmit={handleLogin}
          >

            <div className="login-field">

              <label htmlFor="username">
                {role === "student"
                  ? "STUDENT ID"
                  : "ADMIN USERNAME"}
              </label>

              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                placeholder={
                  role === "student"
                    ? "e.g. ST-1001"
                    : "Enter administrator username"
                }
                autoComplete="username"
                required
              />

            </div>


            <div className="login-field">

              <div className="login-label-row">

                <label htmlFor="password">
                  PASSWORD
                </label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() =>
                    alert(
                      "Password recovery will be connected later."
                    )
                  }
                >
                  Forgot password?
                </button>

              </div>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />

            </div>


            <button
              type="submit"
              className="login-submit"
            >

              <span>
                Continue to{" "}
                {role === "student"
                  ? "Student Portal"
                  : "Admin Portal"}
              </span>

              <strong>→</strong>

            </button>

          </form>


          {/* DEMO NOTICE */}

          <div className="login-demo">

            <div className="login-demo-dot"></div>

            <div>

              <strong>
                DEMO MODE
              </strong>

              <p>
                Authentication will be connected
                to the school database later.
              </p>

            </div>

          </div>


          {/* FOOTER */}

          <div className="login-card-footer">

            <span>
              SECURE PORTAL
            </span>

            <span>
              AL-HAYTHAM SCHOOLY
            </span>

          </div>

        </div>

      </section>

    </main>
  );
}