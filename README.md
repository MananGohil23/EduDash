<div align="center">

<br/>

```
███████╗██████╗ ██╗   ██╗██████╗  █████╗ ███████╗██╗  ██╗
██╔════╝██╔══██╗██║   ██║██╔══██╗██╔══██╗██╔════╝██║  ██║
█████╗  ██║  ██║██║   ██║██║  ██║███████║███████╗███████║
██╔══╝  ██║  ██║██║   ██║██║  ██║██╔══██║╚════██║██╔══██║
███████╗██████╔╝╚██████╔╝██████╔╝██║  ██║███████║██║  ██║
╚══════╝╚═════╝  ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
```

**Your all-in-one student academic dashboard**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

</div>

---

## ✨ What is EduDash?

EduDash is a modern, full-stack student dashboard that brings everything you need for your academic life into one clean interface. Track your attendance, access lectures and assignments, manage your profile — all protected behind secure JWT authentication.

---

## 🗂️ Project Structure

```
EduDash/
├── 📁 frontend/                  # React 19 application
│   └── src/
│       ├── pages/
│       │   ├── auth/             # Login & Registration
│       │   ├── dashboard/        # Home, Attendance, Profile
│       │   └── learning/         # Lectures & Assignments
│       ├── components/           # Navbar, Sidebar, ProtectedRoute
│       ├── context/              # Auth, Sidebar & Subject contexts
│       ├── layouts/              # DashboardLayout wrapper
│       └── services/             # Axios API service layer
│
└── 📁 backend/                   # Node.js + Express API
    ├── config/                   # MongoDB connection
    ├── controllers/              # Auth controller
    ├── middleware/               # JWT auth middleware
    ├── models/                   # User schema (Mongoose)
    ├── routes/                   # Auth routes
    ├── utils/                    # Token generator
    └── server.js                 # Entry point
```

---

## 🚀 Features

| Category | Feature |
|---|---|
| 🔐 **Auth** | JWT-based login & registration with bcrypt password hashing |
| 🏠 **Dashboard** | Personalized home page with student overview |
| 📊 **Attendance** | Subject-wise attendance tracking & percentage calculation |
| 🎥 **Lectures** | Organized subject & chapter-wise video resources |
| 📝 **Assignments** | Assignment listing and management |
| 👤 **Profile** | Student profile management |
| 🛡️ **Protected Routes** | Route guards — unauthenticated users are redirected to login |
| 📱 **Responsive UI** | Tailwind CSS with animated sidebar & smooth transitions |

---

## 🛠️ Tech Stack

### Frontend
- **React 19** — UI framework
- **React Router v7** — Client-side routing
- **Tailwind CSS** — Utility-first styling
- **Axios** — HTTP requests
- **React Icons / Lucide React** — Icon libraries
- **React Fast Marquee** — Animated marquee component
- **Context API** — Global state for auth, sidebar, and subjects

### Backend
- **Node.js + Express 5** — REST API server
- **MongoDB + Mongoose** — Database & ODM
- **JWT (jsonwebtoken)** — Stateless authentication
- **bcryptjs** — Password hashing
- **dotenv** — Environment variable management
- **nodemon** — Development auto-reload

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `v18+`
- npm `v9+`
- MongoDB (local instance or [MongoDB Atlas](https://www.mongodb.com/atlas))

---

### 1. Clone the repository

```bash
git clone https://github.com/MananGohil23/EduDash.git
cd EduDash
```

---

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

Start the backend server:

```bash
npm run dev
```

> Backend runs at `http://localhost:5000`

---

### 3. Frontend setup

```bash
cd ../frontend
npm install
npm start
```

> Frontend runs at `http://localhost:3000`

---

## 🔌 API Endpoints

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/auth/register` | Register a new student | ❌ |
| `POST` | `/api/auth/login` | Login and receive JWT | ❌ |
| `GET` | `/api/auth/me` | Get current user info | ✅ |

All protected routes require an `Authorization: Bearer <token>` header.

---

## 🗺️ App Routes

| Route | Page | Protected |
|---|---|---|
| `/` | Registration | ❌ |
| `/login` | Login | ❌ |
| `/home` | Dashboard Home | ✅ |
| `/attendance` | Attendance Tracker | ✅ |
| `/learning/lectures` | Lecture Resources | ✅ |
| `/learning/assignments` | Assignments | ✅ |
| `/profile` | Student Profile | ✅ |

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

```bash
# 1. Fork this repo, then clone your fork
git clone https://github.com/YOUR_USERNAME/EduDash.git

# 2. Create a feature branch
git checkout -b feature/your-feature-name

# 3. Make your changes, then commit
git commit -m "feat: add your feature description"

# 4. Push and open a Pull Request
git push origin feature/your-feature-name
```

Please keep PRs focused on a single concern and follow the existing code style.

---

## 👨‍💻 Author

**Manan Gohil**

- GitHub: [@MananGohil23](https://github.com/MananGohil23)
- Repository: [EduDash](https://github.com/MananGohil23/EduDash)

---

<div align="center">

If EduDash helped you, consider giving it a ⭐ on GitHub!

</div>
