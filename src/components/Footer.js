import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="logo">⚡ Tech<span>Academy</span></div>
          <p>The #1 platform for learning API Development, MERN Stack, and modern web technologies.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="GitHub">🐙</a>
            <a href="#" aria-label="YouTube">▶️</a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Courses</h4>
          <Link to="/courses">All Courses</Link>
          <Link to="/courses">REST APIs</Link>
          <Link to="/courses">GraphQL</Link>
          <Link to="/courses">MERN Stack</Link>
          <Link to="/courses">API Security</Link>
        </div>
        <div className="footer-links">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/my-enrollments">My Courses</Link>
        </div>
        <div className="footer-links">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Refund Policy</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© 2024 TechAcademy. Built with MERN Stack ❤️</p>
        </div>
      </div>
    </footer>
  );
}
