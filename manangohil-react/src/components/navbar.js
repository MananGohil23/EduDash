import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { X } from "lucide-react";



const Navbar = () => {
  const [isloggedin, setIsLoggedIn] = useState(false);
  const [loginCardActive, setLoginCardActive] = useState(false);
  const [incorrectLogin, setIncorrectLogin] = useState(false);
  const password = "123"; // Replace with your desired password
  const username = "Manan"; // Replace with your desired username
  const handleLogin = (enteredPassword, enteredUsername) => {
    if (enteredUsername === username && enteredPassword === password) {
      setIsLoggedIn(true);
      setLoginCardActive(false);
      alert("Login successful!");
    }
    else{
      setIsLoggedIn(false);
      setIncorrectLogin(true);
      alert("Incorrect username or password. Please try again.");
    }
  };

  return (
      <>
        <nav className=" w-full bg-slate-900 text-white px-4 py-3 shadow-lg shadow-slate-950/30 z-50">
          <div className="flex justify-between items-center gap-3">
            <Link
              to="/"
              className="text-lg font-semibold tracking-wide"
              title="Student Dashboard"
            >
              <div className="flex items-center gap-2 transition hover:scale-[110%] hover:-translate-y-[5px] transition-delay-100">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-8 w-8 inline-block mr-2"
                />
                <div>Student Dashboard</div>
              </div>
            </Link>
            <div className="flex gap-2">
              <NavLink
                className={({ isActive }) =>
                  `rounded-full bg-slate-900 px-4 py-2 text-lg font-bold transition ${
                    isActive
                      ? "border-white bg-white text-slate-900"
                      : "border-white/25 text-white hover:border-white hover:bg-blue-600 hover:scale-[110%] hover:-translate-y-[5px] "
                  }`
                }
                to="/attendance"
              >
                Attendance
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `rounded-full bg-slate-900 px-4 py-2 text-lg font-bold transition ${
                    isActive
                      ? "border-white bg-white text-slate-900"
                      : "border-white/25 text-white hover:border-white hover:bg-blue-600 hover:scale-[110%] hover:-translate-y-[5px] "
                  }`
                }
                to="/learning/Lectures"
              >
                Lectures
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `rounded-full bg-slate-900 px-4 py-2 text-lg font-bold transition ${
                    isActive
                      ? "border-white bg-white text-slate-900"
                      : "border-white/25 text-white hover:border-white hover:bg-blue-600 hover:scale-[110%] hover:-translate-y-[5px] "
                  }`
                }
                to="/learning/Assignments"
              >
                Assignments
              </NavLink>
            </div>
            <div className = {`flex items-center gap-2 ${(isloggedin ? 'hidden' : 'block')}`}>
                <button className = "rounded-full bg-emerald-500 px-4 py-2 text-lg hover:scale-[110%] font-semibold text-white transition hover:bg-emerald-400 hover:-translate-y-[5px]" onClick={() => {setLoginCardActive(true); setIncorrectLogin(false); document.getElementById("passwordInput").value = ""; document.getElementById("usernameInput").value = ""}}>
                  Login
                </button>
            </div>
            <div className = {`flex items-center gap-2 ${(isloggedin ? 'block' : 'hidden')}`}>
              <div className = "flex items-center gap-2">
                <Link to="/" onClick={() => {setIsLoggedIn(false); alert("You have been logged out."); document.getElementById("passwordInput").value = ""; document.getElementById("usernameInput").value = ""}} className="rounded-full bg-emerald-500 px-4 py-2 text-lg hover:scale-[110%] font-semibold text-white transition hover:bg-emerald-400 hover:-translate-y-[5px]">
                      Logout
                </Link>
              </div>
              <div className = "flex items-center gap-2">
                <Link
                  to="/profile"
                  className="rounded-full bg-emerald-500 px-4 py-2 text-lg hover:scale-[110%] font-semibold text-white transition hover:bg-emerald-400 hover:-translate-y-[5px]"
                >
                  Profile
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className = {`fixed inset-0 bg-white backdrop-blur-sm bg-opacity-50 flex items-center justify-center transition-opacity duration-300 z-50 ${loginCardActive ? 'block' : 'hidden'}`} >
          <div className = {`bg-white rounded-lg shadow-lg relative p-6 w-80 text-center`}>
              <div className = "flex justify-center gap-4"> 
                <h1 className = "text-2xl text-slate-900 mb-6 font-bold">
                  Welcome
                </h1>
                <button className = "text-slate-900 absolute top-[10px] right-[10px] text-3xl hover:text-red-700 transition" onClick={() => {setLoginCardActive(false); setIncorrectLogin(false); document.getElementById("passwordInput").value = ""; document.getElementById("usernameInput").value = ""}}>
                    <X />
                </button>
              </div>
              <input type="text" placeholder="Enter username" className = "w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" id="usernameInput"/>
              <input type="password" placeholder="Enter password" className = "w-full px-4 py-2 border border-gray-300 rounded mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500" id="passwordInput"/>
              <div className = {`text-md absolute bottom-[70px] right-[20px] text-gray-400 ${incorrectLogin ? 'block' : 'hidden'}`}>
                Forgot Password?
              </div>
              <button className = "w-full bg-emerald-500 text-white py-2 rounded hover:bg-emerald-400 transition hover:scale-[110%] font-semibold" onClick={() => handleLogin(document.getElementById("passwordInput").value, document.getElementById("usernameInput").value)}>
                Login
              </button>
          </div>
        </div>
      </>
    );
  }

export default Navbar;
