import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const team = [
  { name: "Rahul Sharma", role: "Co-founder & Lead Instructor", emoji: "👨‍💻", bio: "8+ years in backend development. Former SDE at Flipkart." },
  { name: "Priya Nair", role: "GraphQL & Frontend Expert", emoji: "👩‍💻", bio: "Full-stack developer. Ex-Razorpay. Loves open source." },
  { name: "Vikram Singh", role: "Security Architect", emoji: "🧑‍💼", bio: "API security expert. OWASP contributor. 10+ years experience." },
  { name: "Ananya Patel", role: "Integration Specialist", emoji: "👩‍🎓", bio: "Third-party integrations guru. Former startup CTO." },
];

const milestones = [
  { year: "2021", title: "Founded", desc: "TechAcademy launched with 2 courses and 100 students" },
  { year: "2022", title: "Expanded", desc: "Grew to 8 courses and 2,000 students across India" },
  { year: "2023", title: "Milestone", desc: "Crossed 5,000 students and 4.8★ average rating" },
  { year: "2024", title: "Today", desc: "10,000+ students. India's #1 API learning platform" },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <span className="hero-tag">🏫 Our Story</span>
          <h1>Building the Next Generation<br />of API Developers</h1>
          <p>TechAcademy was founded by developers, for developers. We believe practical, job-focused education should be accessible to everyone in India.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container mission-grid">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>We exist to bridge the gap between theoretical education and real-world industry needs. Our courses are built around actual job requirements, with hands-on projects that you can add to your portfolio from day one.</p>
            <p>Every course is crafted by industry experts who are actively working in the field — not just educators. That's what makes TechAcademy different.</p>
            <Link to="/courses" className="btn-primary" style={{ marginTop: 24, display: "inline-block" }}>
              Explore Courses →
            </Link>
          </div>
          <div className="mission-stats">
            {[
              { value: "10k+", label: "Students Trained" },
              { value: "8+", label: "Expert Courses" },
              { value: "4.8★", label: "Average Rating" },
              { value: "95%", label: "Job Success Rate" },
            ].map((s) => (
              <div key={s.label} className="mission-stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: "var(--surface)", padding: "80px 0" }}>
        <div className="container">
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-sub">Industry experts who've been where you want to go</p>
          <div className="team-grid">
            {team.map((m) => (
              <div key={m.name} className="team-card">
                <div className="team-avatar">{m.emoji}</div>
                <h3>{m.name}</h3>
                <span className="team-role">{m.role}</span>
                <p>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-sub">From a tiny startup to India's leading API academy</p>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-year">{m.year}</span>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
