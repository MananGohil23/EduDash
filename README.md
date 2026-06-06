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
[![Deployed on Vercel](https://img.shields.io/badge/Frontend-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://edu-dash-anb2.vercel.app)
[![Backend on Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=flat-square&logo=render&logoColor=white)](https://edudash-hyka.onrender.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

🔗 **[Live Demo](https://edu-dash-anb2.vercel.app)**

</div>

---

## ✨ What is EduDash?

EduDash is a modern, full-stack student dashboard that brings everything you need for your academic life into one clean interface. Upload your attendance PDF and get instant subject-wise analytics, manage assignments with due-date tracking, and access curated YouTube lecture playlists for 7 subjects — all behind secure JWT authentication.

---

## 🗂️ Project Structure

```
EduDash/
├── 📁 frontend/                      # React 19 application (deployed on Vercel)
│   └── src/
│       ├── pages/
│       │   ├── auth/                 # Login & Registration
│       │   ├── dashboard/            # Home, Attendance, Profile
│       │   └── learning/             # Lectures & Assignments
│       ├── components/               # Navbar, Sidebar, ProtectedRoute
│       ├── context/                  # Auth, Attendance, User & Subject contexts
│       ├── layouts/                  # DashboardLayout wrapper
│       ├── services/                 # Axios API service layer (auth + assignments)
│       └── subjects/                 # Per-subject lecture components
│           ├── Bee.jsx               # Basic Electrical Engineering
│           ├── C.jsx                 # C Programming
│           ├── Cem.jsx               # CEM
│           ├── Chemistry.jsx
│           ├── Java.jsx
│           ├── Maths.jsx
│           └── Physics.jsx
│
└── 📁 backend/                       # Node.js + Express API (deployed on Render)
    ├── config/                       # MongoDB connection
    ├── controllers/                  # Auth, Attendance, Assignment controllers
    ├── middleware/                   # JWT auth + Multer file upload middleware
    ├── models/                       # User & Assignment schemas (Mongoose)
    ├── routes/                       # Auth, Attendance & Assignment routes
    ├── utils/                        # Token generator + PDF attendance parser
    └── server.js                     # Entry point
```

---

## 🚀 Features

| Category | Feature |
|---|---|
| 🔐 **Auth** | JWT-based login & registration with bcrypt password hashing |
| 🏠 **Dashboard** | Personalized home page with student overview |
| 📊 **Attendance** | Upload your institution's PDF attendance report — get instant subject-wise breakdown, percentages, and a ≤75% shortage warning |
| 📝 **Assignments** | Create assignments with title, subject, description & due date; mark as submitted; overdue detection |
| 🎥 **Lectures** | Subject-wise YouTube playlist integration for 7 subjects — chapter & subtopic navigation with embedded player |
| 👤 **Profile** | Student profile management |
| 🛡️ **Protected Routes** | Route guards — unauthenticated users are redirected to login |
| 💾 **Session Persistence** | Attendance data and user info persist in `sessionStorage` across page reloads |
| 📱 **Responsive UI** | Tailwind CSS with animated sidebar, drag-and-drop PDF upload, and smooth transitions |
| ☁️ **Deployed** | Frontend on Vercel, backend API on Render |

---

## 🛠️ Tech Stack

### Frontend
- **React 19** — UI framework
- **React Router v7** — Client-side routing
- **Tailwind CSS** — Utility-first styling
- **Axios** — HTTP requests
- **React Icons / Lucide React** — Icon libraries
- **React Fast Marquee** — Animated marquee component
- **Context API** — Global state (Auth, Attendance, User, Subject)
- **YouTube Data API v3** — Fetches lecture playlists per subject/chapter

### Backend
- **Node.js + Express 5** — REST API server
- **MongoDB + Mongoose** — Database & ODM
- **JWT (jsonwebtoken)** — Stateless authentication
- **bcryptjs** — Password hashing
- **Multer** — PDF file upload handling
- **pdf-parse** — Extracts raw text from uploaded attendance PDFs
- **dotenv** — Environment variable management
- **nodemon** — Development auto-reload

### Infrastructure
- **Vercel** — Frontend hosting (SPA rewrites via `vercel.json`)
- **Render** — Backend API hosting

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `v18+`
- npm `v9+`
- MongoDB (local instance or [MongoDB Atlas](https://www.mongodb.com/atlas))
- YouTube Data API v3 key (for lecture playlists)

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

Create an `uploads/` folder (used by Multer to store uploaded PDFs):

```bash
mkdir uploads
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
```

Create a `.env` file in the `frontend/` directory:

```env
REACT_APP_YOUTUBE_API_KEY=your_youtube_data_api_v3_key
```

Start the app:

```bash
npm start
```

> Frontend runs at `http://localhost:3000`

---

## 🔌 API Endpoints

### Auth — `/api/auth`

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/auth/register` | Register a new student | ❌ |
| `POST` | `/api/auth/login` | Login and receive JWT | ❌ |
| `GET` | `/api/auth/me` | Get current user info | ✅ |

### Attendance — `/api/attendance`

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/attendance/upload` | Upload a PDF; returns parsed subject-wise attendance JSON | ❌ |

### Assignments — `/api/assignments`

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `GET` | `/api/assignments` | Fetch all assignments for the logged-in user | ✅ |
| `POST` | `/api/assignments` | Create a new assignment | ✅ |
| `PUT` | `/api/assignments/:id` | Mark an assignment as Submitted | ✅ |

All protected routes require an `Authorization: Bearer <token>` header.

---

## 🗺️ App Routes

| Route | Page | Protected |
|---|---|---|
| `/` | Registration | ❌ |
| `/login` | Login | ❌ |
| `/home` | Dashboard Home | ✅ |
| `/attendance` | Attendance PDF Upload & Analytics | ✅ |
| `/learning/lectures` | Subject Lecture Viewer | ✅ |
| `/learning/assignments` | Assignment Tracker | ✅ |
| `/profile` | Student Profile | ✅ |

---

## 📊 How Attendance Parsing Works

1. User uploads their institution's **Detailed Attendance PDF** via drag-and-drop or file picker.
2. The backend reads the PDF using `pdf-parse` and extracts raw text.
3. A custom parser (`attendanceParser.js`) scans the text line-by-line, matches subject names and date entries, and reads the adjacent `P` (Present) or `A` (Absent) status.
4. The result is a subject-wise map with `present`, `absent`, `total`, and `percentage` fields.
5. The frontend displays overall attendance + per-subject cards, colour-coded green (≥75%) or orange (<75%) with a shortage warning.
6. Results are stored in `sessionStorage` so they survive page refreshes within the session.

---

## 🔮 Roadmap

- [ ] 📅 Timetable / schedule integration
- [ ] 📈 Attendance shortage prediction (lectures needed to hit 75%)
- [ ] 🌙 Dark mode toggle
- [ ] 🔔 Push notifications for deadlines
- [ ] ☁️ Cloud file storage for assignment uploads
- [ ] 💬 Working comments section on lecture pages
- [ ] 📱 Progressive Web App (PWA) support

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

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Manan Gohil**

- GitHub: [@MananGohil23](https://github.com/MananGohil23)
- Repository: [EduDash](https://github.com/MananGohil23/EduDash)
- Live: [edu-dash-anb2.vercel.app](https://edu-dash-anb2.vercel.app)

---

<div align="center">

If EduDash helped you, consider giving it a ⭐ on GitHub!

</div>
