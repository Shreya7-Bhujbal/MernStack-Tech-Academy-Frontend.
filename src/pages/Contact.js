import React, { useState } from "react";
import { submitContact } from "../api";
import "./Contact.css";

const contactInfo = [
  { icon: "📧", label: "Email", value: "hello@techacademy.in" },
  { icon: "📱", label: "Phone", value: "+91 98765 43210" },
  { icon: "📍", label: "Location", value: "Bangalore, India" },
  { icon: "🕐", label: "Support Hours", value: "Mon–Sat, 9AM–6PM IST" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitContact(form);
      showToast("Message sent! We'll get back to you within 24 hours 📬");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      showToast(err.response?.data?.error || "Failed to send. Try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {toast && <div className={`toast ${toast.type === "error" ? "error" : ""}`}>{toast.msg}</div>}

      <div className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>Have questions about our courses? We're here to help!</p>
        </div>
      </div>

      <div className="container contact-body">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Reach us through any of these channels and we'll respond promptly.</p>
          <div className="info-cards">
            {contactInfo.map((c) => (
              <div key={c.label} className="info-card">
                <span className="info-icon">{c.icon}</span>
                <div>
                  <strong>{c.label}</strong>
                  <span>{c.value}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="faq-section">
            <h3>Frequently Asked</h3>
            {[
              { q: "Can I get a refund?", a: "Yes, we offer a 30-day money-back guarantee on all courses." },
              { q: "Are certificates provided?", a: "Yes! You get a certificate upon successful course completion." },
              { q: "Is there mentorship support?", a: "Yes, all courses come with community & mentor support." },
            ].map((f) => (
              <div key={f.q} className="faq-item">
                <strong>{f.q}</strong>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form-wrap">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Subject *</label>
              <input
                type="text"
                placeholder="What's this about?"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Message *</label>
              <textarea
                rows="6"
                placeholder="Tell us more..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn-primary submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message 📨"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
