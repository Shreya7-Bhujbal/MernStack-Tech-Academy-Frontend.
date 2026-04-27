import React, { useEffect, useState } from "react";
import { getCourses, seedCourses } from "../api";
import CourseCard from "../components/CourseCard";
import "./Courses.css";

const categories = ["All", "API Development", "Security", "Integration", "Full Stack", "Architecture", "Testing", "Real-Time"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [search, setSearch] = useState("");
  const [seeding, setSeeding] = useState(false);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const params = {};
      if (category !== "All") params.category = category;
      if (level !== "All") params.level = level;
      if (search) params.search = search;
      const res = await getCourses(params);
      setCourses(res.data);
    } catch {
      setCourses([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [category, level]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchCourses();
  };

  const handleSeed = async () => {
    setSeeding(true);
    try {
      await seedCourses();
      fetchCourses();
    } catch {}
    setSeeding(false);
  };

  return (
    <div className="courses-page">
      <div className="courses-hero">
        <div className="container">
          <h1>Explore All Courses</h1>
          <p>Find the perfect course to level up your API & development skills</p>
          <form onSubmit={handleSearch} className="search-bar">
            <input
              type="text"
              placeholder="🔍 Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="btn-primary">Search</button>
          </form>
        </div>
      </div>

      <div className="container courses-body">
        {/* Filters */}
        <div className="filters">
          <div className="filter-group">
            <label>Category</label>
            <div className="filter-pills">
              {categories.map((c) => (
                <button
                  key={c}
                  className={`pill ${category === c ? "active" : ""}`}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <label>Level</label>
            <div className="filter-pills">
              {levels.map((l) => (
                <button
                  key={l}
                  className={`pill ${level === l ? "active" : ""}`}
                  onClick={() => setLevel(l)}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="courses-header">
          <span className="courses-count">{courses.length} courses found</span>
          <button
            className="btn-outline seed-btn"
            onClick={handleSeed}
            disabled={seeding}
          >
            {seeding ? "Seeding..." : "🌱 Seed Sample Courses"}
          </button>
        </div>

        {loading ? (
          <div className="loading">Loading courses...</div>
        ) : courses.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <h3>No courses found</h3>
            <p>Try changing your filters or seed sample courses</p>
            <button className="btn-primary" onClick={handleSeed}>Seed Sample Courses</button>
          </div>
        ) : (
          <div className="courses-grid">
            {courses.map((c) => <CourseCard key={c._id} course={c} />)}
          </div>
        )}
      </div>
    </div>
  );
}
