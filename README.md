# TechAcademy Frontend

## Setup

1. Install dependencies:
```
npm install
```

2. Make sure backend is running on `http://localhost:5000`

3. Start the dev server:
```
npm start
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home - Hero, features, featured courses, testimonials |
| `/courses` | All courses with filter by category & level, search |
| `/courses/:id` | Course detail with topics, instructor info |
| `/enroll/:id` | Enrollment form with order summary |
| `/my-enrollments` | View enrollments by email |
| `/about` | About page with team & timeline |
| `/contact` | Contact form |

## Structure

```
src/
├── api/          - Axios API calls
├── components/   - Navbar, Footer, CourseCard
└── pages/        - Home, Courses, CourseDetail, Enroll, MyEnrollments, About, Contact
```
