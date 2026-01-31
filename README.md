# Task Management App

A simple full-stack task management application where users can register, log in, and manage tasks .

user can create, update, complete, and delete tasks

---

User authentication (Register / Login / Logout)
Protected routes using authentication check
Create, read, update, and delete tasks
Mark tasks as completed
Clean  UI
Secure API with cookies-based authentication


## Tech Stack

### Frontend
- React
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (stored in HTTP-only cookies)

---

## 📂 Project Structure

```bash
client/
 ├── pages/
 │   ├── Login.jsx
 │   ├── Register.jsx
 │   └── Task.jsx
 ├── ProtectedRoute.jsx
 └── App.jsx

server/
 ├── routes/
 ├── controllers/
 ├── models/
 └── middleware/
