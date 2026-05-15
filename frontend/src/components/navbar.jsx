import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  return (
    <>
      <nav className=" w-full bg-slate-900 fixed text-white px-4 py-3 shadow-lg shadow-slate-950/30 z-50">
        <div className="flex justify-between items-center gap-3">
          <Link
            to="/home"
            className="text-lg font-semibold tracking-wide"
            title="Student Dashboard"
          >
            <div className="flex items-center gap-2 transition hover:scale-[110%] hover:-translate-y-[5px] transition-delay-100">
              <img
                src={logo}
                alt="Logo"
                className="h-8 w-8 inline-block mr-2"
              />
              <div>EduDash</div>
            </div>
          </Link>
          <div className="flex gap-2">
            <NavLink
              className={({ isActive }) =>
                `relative px-4 py-2 text-lg font-bold transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-white after:rounded-lg after:transition-all after:duration-300 hover:after:w-full ${isActive ? "after:w-full text-blue-300" : "after:w-0 text-white"}`} to="/attendance">
              Attendance
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `relative px-4 py-2 text-lg font-bold transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-white after:rounded-lg after:transition-all after:duration-300 hover:after:w-full ${isActive ? "after:w-full text-blue-300" : "after:w-0 text-white"}`} to="/learning/Lectures">
              Lectures
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `relative px-4 py-2 text-lg font-bold transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-white after:rounded-lg after:transition-all after:duration-300 hover:after:w-full ${isActive ? "after:w-full text-blue-300" : "after:w-0 text-white"}`} to="/learning/Assignments">
              Assignments
            </NavLink>
          </div>
          <div
            className={`flex items-center gap-2 ${isLoggedIn ? "block" : "hidden"}`}
          >
            <div className="flex items-center gap-2">
              <Link
                to="/"
                onClick={() => {
                  logout();
                  alert("You have been logged out.");
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
    </>
  );
};

export default Navbar;
