import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../commons/Header.css";
import logo from "../assets/logo.jpeg";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Top bar */}
      <div className="top-bar">
        <div className="logo-title">
          <img src={logo} alt="Logo" className="logo" />
          <h3>Doctor Finder</h3>
        </div>

        <div className="right-section">
          <Link to="/login">
            <button className="login-btn">LOGIN</button>
          </Link>

          {/* Mobile Menu Icon */}
          <button
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            DOCTORS
          </Link>
        </li>

        <li>
          <Link
            to="/appointment"
            className={location.pathname === "/appointment" ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            APPOINTMENT
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
