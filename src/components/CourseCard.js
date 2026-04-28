import React from "react";
import { Link } from "react-router-dom";
import "./CourseCard.css";

const levelColor = {
    Beginner: "badge-green",
    Intermediate: "badge-blue",
    Advanced: "badge-red",
};

const categoryEmoji = {
    "API Development": "🔌",
    "Security": "🔐",
    "Integration": "🔗",
    "Full Stack": "🚀",
    "Architecture": "🏗️",
    "Testing": "🧪",
    "Real-Time": "⚡",
};

export default function CourseCard({ course }) {
    return (
        <div className="course-card">
            <div className="card-emoji">{categoryEmoji[course.category] || "📘"}</div>
            <div className="card-body">
                <div className="card-tags">
                    <span className={`badge ${levelColor[course.level]}`}>{course.level}</span>
                    <span className="badge badge-purple">{course.category}</span>
                    {course.isFeatured && <span className="badge badge-gold">⭐Featured</span>}
                </div>
                <h3 className="card-title">{course.title}</h3>
                <p className="card-desc">{course.description ? course.description.slice(0, 100) + '...' : 'No description available'}</p>
                <div className="card-meta">
                    <span>👨‍🏫{course.instructor}</span>
                    <span>⏱{course.duration}</span>
                    <span>⭐{course.rating}</span>
                    <span>👥{course.studentsEnrolled?.toLocaleString()}</span>
                </div>
            </div>
            <div className="card-footer">
                <span className="price">₹{course.price?.toLocaleString()}</span>
                <div className="card-actions">
                    <Link to={`/courses/${course._id}`} className="btn-outline">Details</Link>
                    <Link to={`/enroll/${course._id}`} className="btn-primary">Enroll Now</Link>
                </div>
            </div>
        </div>
    );
}