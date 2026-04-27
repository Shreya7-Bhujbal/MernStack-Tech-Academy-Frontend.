import React, { useState } from "react";
import { getEnrollmentsByEmail } from "../api";
import { Link } from "react-router-dom";
import "./MyEnrollments.css";

export default function MyEnrollments() {
  const [email, setEmail] = useState("");
  const [enrollments, setEnrollments] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await getEnrollmentsByEmail(email);
      setEnrollments(res.data);
    } catch {
      setEnrollments([]);
    } finally {
      setLoading(false);
      setSearched(true);
    }
  };

  const statusColor = { Active: "badge-green", Pending: "badge-blue", Completed: "badge-purple" };

  return (
    <div className="my-enrollments">
      <div className="enrollments-hero">
        <div className="container">
          <h1>My Enrollments</h1>
          <p>Enter your email to view your enrolled courses</p>
          <form onSubmit={handleSearch} className="email-search">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary">
              {loading ? "Searching..." : "View My Courses"}
            </button>
          </form>
        </div>
      </div>

      <div className="container enrollments-body">
        {!searched && (
          <div className="enrollments-placeholder">
            <div className="placeholder-icon">📚</div>
            <h3>Check Your Enrollments</h3>
            <p>Enter the email you used during enrollment to see your courses</p>
          </div>
        )}

        {searched && loading && <div className="loading">Loading enrollments...</div>}

        {searched && !loading && enrollments?.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <h3>No enrollments found</h3>
            <p>No courses found for <strong>{email}</strong></p>
            <Link to="/courses" className="btn-primary">Browse Courses</Link>
          </div>
        )}

        {searched && !loading && enrollments?.length > 0 && (
          <>
            <h2 className="enrollments-title">
              {enrollments.length} Course{enrollments.length > 1 ? "s" : ""} Enrolled
            </h2>
            <div className="enrollments-grid">
              {enrollments.map((e) => (
                <div key={e._id} className="enrollment-card">
                  <div className="enrollment-top">
                    <div>
                      <h3>{e.courseName}</h3>
                      <div className="enrollment-meta">
                        <span>📅 Enrolled {new Date(e.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                        <span>💳 {e.paymentStatus}</span>
                      </div>
                    </div>
                    <span className={`badge ${statusColor[e.status]}`}>{e.status}</span>
                  </div>
                  {e.course && (
                    <div className="enrollment-course-meta">
                      <span>👨‍🏫 {e.course.instructor}</span>
                      <span>⏱ {e.course.duration}</span>
                      <span>🎓 {e.course.level}</span>
                    </div>
                  )}
                  <div className="enrollment-footer">
                    {e.course && (
                      <Link to={`/courses/${e.course._id}`} className="btn-outline">
                        View Course
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
