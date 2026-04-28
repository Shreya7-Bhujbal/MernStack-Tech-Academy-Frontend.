# Tech Academy - Frontend

This is the frontend application for the Tech Academy MERN stack project, built with **React.js**.

## 🚀 Features
* Responsive User Interface
* Course Catalog & Details
* Interactive Learning Dashboard
* Integrated with Backend API

## 🛠️ Tech Stack
* **Framework:** React.js
* **Styling:** CSS3 / Bootstrap
* **State Management:** Hooks / Context API
* **Deployment:** Render (Static Site)

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Shreya7-Bhujbal/MernStack-Tech-Academy-Frontend.git](https://github.com/Shreya7-Bhujbal/MernStack-Tech-Academy-Frontend.git)
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
