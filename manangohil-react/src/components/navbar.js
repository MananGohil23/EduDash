import React from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends React.Component {
  state = {};

  render() {
    return (
      <nav className=" w-full bg-slate-900 text-white px-4 py-3 shadow-lg shadow-slate-950/30">
        <div className="flex justify-between items-center gap-3">
          <Link
            to="/"
            className="text-lg font-semibold tracking-wide"
            title="Student Dashboard"
          >
            <div className="flex items-center gap-2 transition hover:scale-[110%] transition-delay-100">
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
                    : "border-white/25 text-white hover:border-white hover:bg-blue-600 hover:scale-[110%] "
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
                    : "border-white/25 text-white hover:border-white hover:bg-blue-600 hover:scale-[110%] "
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
                    : "border-white/25 text-white hover:border-white hover:bg-blue-600 hover:scale-[110%] "
                }`
              }
              to="/learning/Assignments"
            >
              Assignments
            </NavLink>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/profile"
              className="rounded-full bg-emerald-500 px-4 py-2 text-lg hover:scale-[110%] font-semibold text-white transition hover:bg-emerald-400"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
