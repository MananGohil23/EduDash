import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./LoginPage";

const Navbar = () => {
  const [isloggedin, setIsLoggedIn] = useState(false);
  const [loginCardActive, setLoginCardActive] = useState(false);
  const [incorrectLogin, setIncorrectLogin] = useState(false);
  return (
    <>
      <nav className=" w-full bg-slate-900 fixed text-white px-4 py-3 shadow-lg shadow-slate-950/30 z-50">
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
              <div>EduDash</div>
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
          <div
            className={`flex items-center gap-2 ${isloggedin ? "hidden" : "block"}`}
          >
            <button
              className="rounded-full bg-emerald-500 px-4 py-2 text-lg hover:scale-[110%] font-semibold text-white transition hover:bg-emerald-400 hover:-translate-y-[5px]"
              onClick={() => {
                setLoginCardActive(true);
                setIncorrectLogin(false);
                document.getElementById("passwordInput").value = "";
                document.getElementById("usernameInput").value = "";
              }}
            >
              Login
            </button>
          </div>
          <div
            className={`flex items-center gap-2 ${isloggedin ? "block" : "hidden"}`}
          >
            <div className="flex items-center gap-2">
              <Link
                to="/"
                onClick={() => {
                  setIsLoggedIn(false);
                  alert("You have been logged out.");
                  document.getElementById("passwordInput").value = "";
                  document.getElementById("usernameInput").value = "";
                }}
                className="rounded-full bg-emerald-500 px-4 py-2 text-lg hover:scale-[110%] font-semibold text-white transition hover:bg-emerald-400 hover:-translate-y-[5px]"
              >
                Logout
              </Link>
            </div>
            <div className="flex items-center gap-2">
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
      <LoginPage username="Manan" password="123" isloggedin={isloggedin} setIsLoggedIn={setIsLoggedIn} loginCardActive={loginCardActive} setLoginCardActive={setLoginCardActive} incorrectLogin={incorrectLogin} setIncorrectLogin={setIncorrectLogin} />
    </>
  );
};

export default Navbar;
