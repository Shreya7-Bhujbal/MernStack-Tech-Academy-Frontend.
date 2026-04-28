import axios from "axios";

const API = axios.create({ 
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
  timeout: 10000,
});

// Add response interceptor for better error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const getCourses = (params) => API.get("/courses", { params });
export const getCourse = (id) => API.get(`/courses/${id}`);
export const enroll = (data) => API.post("/enrollments", data);
export const getEnrollmentsByEmail = (email) => API.get(`/enrollments/student/${email}`);
export const seedCourses = () => API.post("/courses/seed/all");
export const submitContact = (data) => API.post("/contact", data);
