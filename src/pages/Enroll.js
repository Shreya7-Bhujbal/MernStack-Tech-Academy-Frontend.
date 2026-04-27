import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCourse, enroll } from "../api";
import "./Enroll.css";

export default function Enroll() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    getCourse(id).then((r) => setCourse(r.data)).catch(() => {});
  }, [id]);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      showToast("Please fill in all required fields", "error");
      return;
    }
    setLoading(true);
    try {
      await enroll({ ...form, courseId: id });
      showToast("Enrollment successful! 🎉 Welcome to " + course?.title);
      setTimeout(() => navigate("/my-enrollments"), 2000);
    } catch (err) {
      showToast(err.response?.data?.error || "Enrollment failed. Try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  if (!course) return <div className="loading" style={{ paddingTop: 120 }}>Loading...</div>;

  return (
    <div className="enroll-page">
      {toast && <div className={`toast ${toast.type === "error" ? "error" : ""}`}>{toast.msg}</div>}

      <div className="container enroll-inner">
        <div className="enroll-form-wrap">
          <div className="enroll-header">
            <h1>Enroll Now</h1>
            <p>You're one step away from learning <strong>{course.title}</strong></p>
          </div>

          <form onSubmit={handleSubmit} className="enroll-form">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <button type="submit" className="btn-primary submit-btn" disabled={loading}>
              {loading ? "Processing..." : `Enroll for ₹${course.price?.toLocaleString()} →`}
            </button>
          </form>
        </div>

        <div className="enroll-summary">
          <h2>Order Summary</h2>
          <div className="summary-card">
            <div className="summary-emoji">
              {{"API Development":"🔌","Security":"🔐","Integration":"🔗","Full Stack":"🚀","Architecture":"🏗️","Testing":"🧪","Real-Time":"⚡"}[course.category] || "📘"}
            </div>
            <h3>{course.title}</h3>
            <div className="summary-meta">
              <span>👨‍🏫 {course.instructor}</span>
              <span>⏱ {course.duration}</span>
              <span>⭐ {course.rating}</span>
              <span>🎓 {course.level}</span>
            </div>
            <div className="summary-divider" />
            <div className="summary-price-row">
              <span>Course Price</span>
              <strong>₹{course.price?.toLocaleString()}</strong>
            </div>
            <div className="summary-price-row total">
              <span>Total</span>
              <strong>₹{course.price?.toLocaleString()}</strong>
            </div>
          </div>
          <ul className="enroll-perks">
            <li>✅ Lifetime access</li>
            <li>✅ Certificate on completion</li>
            <li>✅ Hands-on projects</li>
            <li>✅ Community & mentor support</li>
            <li>✅ 30-day money back guarantee</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
