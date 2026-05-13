import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Attendance from "./pages/Attendance";
import Profile from "./pages/Profile";
import LandingLogin from "./pages/LandingLogin";
import Lectures  from "./pages/learning/Lectures";
import Assignments from "./pages/learning/Assignments";
import Sidebar from "./components/sidebar";
import { useAuth } from "./context/AuthContext";

function App() {
  const {isLoggedIn } = useAuth();
  return (
    <>
      <div>
        <Router>
          <div className = {`${isLoggedIn ? "lg:block" : "hidden"}`}>
            <Navbar />
          </div>
          <div className = {`hidden ${isLoggedIn ? "lg:hidden sm:block" : "sm:hidden"}`}>
            <Sidebar />
          </div>
          <Routes>
            <Route path="/" element={<LandingLogin />} />
            <Route path="/home" element={<Home />} />
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
