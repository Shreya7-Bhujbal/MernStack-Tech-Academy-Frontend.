import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCourse } from "../api";
import "./CourseDetail.css";

const levelColor = { Beginner: "badge-green", Intermediate: "badge-blue", Advanced: "badge-red" };
const categoryEmoji = {
  "API Development": "🔌", "Security": "🔐", "Integration": "🔗",
  "Full Stack": "🚀", "Architecture": "🏗️", "Testing": "🧪", "Real-Time": "⚡",
};

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourse(id)
      .then((r) => setCourse(r.data))
      .catch(() => setCourse(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="loading" style={{ paddingTop: 120 }}>Loading course...</div>;
  if (!course) return <div className="loading" style={{ paddingTop: 120 }}>Course not found 😕</div>;

  return (
    <div className="course-detail">
      <div className="detail-hero">
        <div className="container detail-hero-inner">
          <div className="detail-info">
            <div className="detail-tags">
              <span className={`badge ${levelColor[course.level]}`}>{course.level}</span>
              <span className="badge badge-purple">{course.category}</span>
              {course.isFeatured && <span className="badge badge-gold">⭐ Featured</span>}
            </div>
            <h1>{course.title}</h1>
            <p className="detail-desc">{course.description}</p>
            <div className="detail-meta">
              <span>👨‍🏫 {course.instructor}</span>
              <span>⏱ {course.duration}</span>
              <span>⭐ {course.rating} rating</span>
              <span>👥 {course.studentsEnrolled?.toLocaleString()} enrolled</span>
            </div>
          </div>
          <div className="detail-card">
            <div className="detail-emoji">{categoryEmoji[course.category] || "📘"}</div>
            <div className="detail-price">₹{course.price?.toLocaleString()}</div>
            <Link to={`/enroll/${course._id}`} className="btn-primary enroll-btn">
              Enroll Now 🚀
            </Link>
            <Link to="/courses" className="btn-outline back-btn">← All Courses</Link>
            <ul className="detail-includes">
              <li>✅ Full lifetime access</li>
              <li>✅ Certificate of completion</li>
              <li>✅ Hands-on projects</li>
              <li>✅ Community access</li>
              <li>✅ Mentor support</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container detail-body">
        <div className="topics-section">
          <h2>Topics Covered</h2>
          <div className="topics-grid">
            {course.topics?.map((t, i) => (
              <div key={i} className="topic-item">
                <span className="topic-check">✓</span>
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="instructor-section">
          <h2>About the Instructor</h2>
          <div className="instructor-card">
            <div className="instructor-avatar">👨‍🏫</div>
            <div>
              <h3>{course.instructor}</h3>
              <p>Senior Developer & Educator with 8+ years of experience. Passionate about teaching API development and modern web technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
