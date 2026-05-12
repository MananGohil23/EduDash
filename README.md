# 📚 EduDash

A modern student dashboard built for simplifying academic life — featuring subject-wise learning resources, attendance analytics, interactive UI components, and an organized educational experience.

---

## 🚀 Features

* 📖 Subject & chapter navigation
* 🎥 Video/resource organization
* 📊 Attendance calculator from PDF reports
* 📂 PDF upload support
* 🎨 Smooth dropdown animations
* ⚡ Responsive UI with Tailwind CSS
* 🔐 Login/logout state management
* 📈 Attendance analytics & percentage calculation
* 🧠 Clean React component architecture

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* React Icons

### Backend (Planned / Integrated)

* FastAPI / Flask
* Python
* pdfplumber

### Other Tools

* Git
* GitHub

---

## 📸 Screenshots

*Add screenshots of your dashboard here.*

Example:

```md id="7r1l5d"
![Home Page](./screenshots/home.png)
![Attendance Page](./screenshots/attendance.png)
```

---

## 📂 Project Structure

```bash id="38m1c1"
EduDash/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.jsx
│
├── backend/
│   ├── main.py
│   └── requirements.txt
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash id="mq6st9"
git clone https://github.com/MananGohil23/EduDash.git
```

---

### 2️⃣ Navigate into the project

```bash id="7rfyy2"
cd EduDash
```

---

## 💻 Frontend Setup

```bash id="6ikwws"
npm install
npm run dev
```

Runs the frontend on:

```txt id="mjlwmf"
http://localhost:5173
```

---

## 🐍 Backend Setup (Attendance PDF Processing)

### Install dependencies

```bash id="rz1vh2"
pip install fastapi uvicorn pdfplumber python-multipart
```

### Run backend server

```bash id="5g5b10"
uvicorn main:app --reload
```

Runs backend on:

```txt id="ypjlwm"
http://127.0.0.1:8000
```

---

## 📊 Attendance PDF Feature

EduDash can automatically extract attendance data from uploaded PDF reports and calculate:

* Subject-wise attendance
* Lectures attended
* Lectures conducted
* Attendance percentage
* Attendance shortage warnings

Example formula used:

\text{Attendance Percentage}=\frac{\text{Lectures Attended}}{\text{Lectures Conducted}}\times100

---

## 🎨 UI Features

* Animated dropdown menus
* Sidebar navigation
* Responsive cards
* Hover transitions
* Interactive chapter selection

---

## 🔮 Future Improvements

* 📅 Timetable integration
* 📝 Assignment tracker
* 📈 Attendance prediction system
* 🌙 Dark mode
* 🔔 Notifications
* ☁️ Database integration
* 🔑 Authentication system

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash id="7nfe3g"
git checkout -b feature-name
```

3. Commit changes

```bash id="q7nq4q"
git commit -m "Added new feature"
```

4. Push to GitHub

```bash id="qbj54h"
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

### Manan Gohil

* GitHub: [MananGohil23](https://github.com/MananGohil23?utm_source=chatgpt.com)
* Repository: [EduDash Repository](https://github.com/MananGohil23/EduDash?utm_source=chatgpt.com)

---

## ⭐ Support

If you like this project, consider giving it a star ⭐ on GitHub!
