import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const getCourses = (params) => API.get("/courses", { params });
export const getCourse = (id) => API.get(`/courses/${id}`);
export const enroll = (data) => API.post("/enrollments", data);
export const getEnrollmentsByEmail = (email) => API.get(`/enrollments/student/${email}`);
export const seedCourses = () => API.post("/courses/seed/all");
export const submitContact = (data) => API.post("/contact", data);
