import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/dashboard/Home";
import Attendance from "./pages/dashboard/Attendance";
import Profile from "./pages/dashboard/Profile";
import LandingLogin from "./pages/auth/LandingLogin";
import Lectures  from "./pages/learning/Lectures";
import Assignments from "./pages/learning/Assignments";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayouts from "./layouts/DashboardLayouts";
import Register from "./pages/auth/LandingRegi";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<LandingLogin />} />
            <Route element={<ProtectedRoute>
                              <DashboardLayouts/>
                            </ProtectedRoute> 
                          }
            >
              <Route path="/home" element={<Home />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/learning/lectures" element={<Lectures />} />
              <Route path="/learning/assignments" element={<Assignments />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
