import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu automatically after 3 seconds
  useEffect(() => {
    if (menuOpen) {
      const timer = setTimeout(() => {
        setMenuOpen(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [menuOpen]);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle link click
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo wrapped in Link */}
      <div className="logo-container">
        <Link to="/" onClick={handleLinkClick} className="logo-text">
          AI Sylvester
        </Link>
      </div>

      {/* Links */}
      <div ref={menuRef} className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/education" onClick={handleLinkClick}>Education</Link>
        <Link to="/experience" onClick={handleLinkClick}>Experience</Link>
        <Link to="/projects" onClick={handleLinkClick}>Projects</Link>
        <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
      </div>

      {/* Hamburger toggle */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
