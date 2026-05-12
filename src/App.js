import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Attendance from "./pages/Attendance";
import Profile from "./pages/Profile";
import Lectures  from "./pages/learning/Lectures";
import Assignments from "./pages/learning/Assignments";
import Sidebar from "./components/sidebar";
function App() {
  return (
    <>
      <div>
        <Router>
          <div className = "hidden lg:block">
            <Navbar />
          </div>
          <div className = "lg:hidden">
            <Sidebar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/learning/lectures" element={<Lectures />} />
            <Route path="/learning/assignments" element={<Assignments />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
