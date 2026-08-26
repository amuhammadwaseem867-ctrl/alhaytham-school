"use client";

import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Admissions", href: "#admissions" },
    { name: "Campus", href: "#campus" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link href="/" className="navbar-logo">
          <span className="logo-mark">AH</span>

          <span className="logo-text">
            <strong>AL-HAYTHAM</strong>
            <small>SCHOOL</small>
          </span>
        </Link>

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/login"
            className="portal-button mobile-portal"
            onClick={() => setMenuOpen(false)}
          >
            Portal Login
          </Link>
        </nav>

        <Link href="/login" className="portal-button desktop-portal">
          Portal Login
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}