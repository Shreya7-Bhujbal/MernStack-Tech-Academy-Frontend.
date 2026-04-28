import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../api";
import CourseCard from "../components/CourseCard";
import "./Home.css";

const stats = [
  { value: "8+", label: "API Courses" },
  { value: "10k+", label: "Students" },
  { value: "4.8★", label: "Avg Rating" },
  { value: "100%", label: "Job Focused" },
];

const features = [
  { icon: "🔌", title: "REST API Mastery", desc: "Build production-ready REST APIs with Node.js & Express" },
  { icon: "📊", title: "GraphQL", desc: "Modern API design with queries, mutations and subscriptions" },
  { icon: "🔐", title: "API Security", desc: "OAuth 2.0, JWT, rate limiting and security best practices" },
  { icon: "🔗", title: "Integrations", desc: "Connect Stripe, Twilio, OpenAI and 50+ third-party APIs" },
  { icon: "🧪", title: "API Testing", desc: "Postman, Newman, automated testing and CI/CD pipelines" },
  { icon: "⚡", title: "Real-Time APIs", desc: "WebSockets, Socket.io and live data streaming" },
];

const testimonials = [
  { name: "Arjun Mehta", role: "Backend Developer @ Zomato", text: "TechAcademy completely transformed my career. The REST API course was incredibly practical!", avatar: "🧑‍💻" },
  { name: "Sneha Kulkarni", role: "Full Stack Dev @ Razorpay", text: "The MERN stack course gave me everything I needed to land my dream job. Highly recommended!", avatar: "👩‍💻" },
  { name: "Karan Bhatia", role: "SDE @ Flipkart", text: "Best investment I made. The GraphQL masterclass alone was worth 10x the price.", avatar: "🧑‍🎓" },
];

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourses()
      .then((r) => {
        const allCourses = r.data || [];
        const featuredCourses = allCourses.filter((c) => c.isFeatured).slice(0, 3);
        setFeatured(featuredCourses);
      })
      .catch((err) => {
        console.error("Failed to load featured courses:", err);
        setFeatured([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="container hero-content">
          <span className="hero-tag">🚀 India's #1 API Learning Platform</span>
          <h1 className="hero-title">
            Master <span>APIs</span> &<br />Build Real Products
          </h1>
          <p className="hero-sub">
            Learn REST, GraphQL, WebSockets, API Security and MERN Stack from industry experts.
            Land your dream dev job with hands-on projects.
          </p>
          <div className="hero-btns">
            <Link to="/courses" className="btn-primary">Browse All Courses</Link>
            <Link to="/about" className="btn-outline">Learn More</Link>
          </div>
          <div className="hero-stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What You'll Learn</h2>
          <p className="section-sub">Everything you need to become an API & backend developer</p>
          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      {featured.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section-title">Featured Courses</h2>
            <p className="section-sub">Most popular courses chosen by our students</p>
            <div className="courses-grid">
              {featured.map((c) => <CourseCard key={c._id} course={c} />)}
            </div>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link to="/courses" className="btn-primary">View All Courses →</Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What Students Say</h2>
          <p className="section-sub">Join thousands of developers who leveled up</p>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <span className="testimonial-avatar">{t.avatar}</span>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Ready to Start Learning?</h2>
          <p>Join 10,000+ developers who leveled up their career with TechAcademy</p>
          <Link to="/courses" className="btn-primary">Get Started Free</Link>
        </div>
      </section>
    </div>
  );
}
