# Swayam
A full-stack online course platform inspired by SWAYAM

## 🚀 Features

### 👤 Students Can:
- Register and log in
- View all available courses
- Enroll in any course
- See enrolled courses in their dashboard

### 🧑‍🏫 Instructors Can:
- Log in and create courses
- Manage their course list

---

## 🛠️ Tech Stack

| Layer     | Tools Used                        |
|-----------|-----------------------------------|
| Frontend  | React (Vite), Axios, React Router |
| Backend   | Node.js, Express.js, JWT          |
| Database  | MongoDB with Mongoose             |

---

## 📁 Folder Structure

```
swayam-clone/
├── backend/      # Node.js + Express API
└── frontend/     # React app with course & auth pages
```

---

## 📦 Run Locally

### 1. Clone the Repository

```bash
git clone path
cd swayam-clone
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/swayam_clone
JWT_SECRET=your_jwt_secret_here
```

Then run the backend:

```bash
npm run dev
```

### 3. Set Up the Frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

---

## 🔗 Local Access

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000/api`

---

## 👩‍💻 Author

**Saraswathi R**  
Full-stack developer with QA and automation background.  
This project demonstrates my ability to build and integrate scalable backend APIs with modern frontend UI using the MERN stack.

---
