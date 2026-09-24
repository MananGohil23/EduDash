import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaClipboardCheck,
  FaVideo,
  FaTasks,
  FaUser,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../context/UserContext";
import logo from "../assets/logo.png";

const navItems = [
  { to: "/home", label: "Dashboard", icon: FaHome },
  { to: "/attendance", label: "Attendance", icon: FaClipboardCheck },
  { to: "/learning/lectures", label: "Lectures", icon: FaVideo },
  { to: "/learning/assignments", label: "Assignments", icon: FaTasks },
  { to: "/profile", label: "Profile", icon: FaUser },
];

const Sidebar = ({ open, onClose }) => {
  const { logout } = useAuth();
  const { user } = useUser();

  const initial = (user?.username || "U").charAt(0).toUpperCase();

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between px-6">
          <NavLink to="/home" className="flex items-center gap-3" onClick={onClose}>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 shadow-soft">
              <img src={logo} alt="EduDash" className="h-6 w-6" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-extrabold tracking-tight text-slate-900">
                EduDash
              </span>
              <span className="text-xs font-medium text-slate-400">
                Student Dashboard
              </span>
            </span>
          </NavLink>

          <button
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 lg:hidden"
            onClick={onClose}
            aria-label="Close navigation"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 pb-4">
          <p className="px-3 pb-2 pt-2 text-xs font-bold uppercase tracking-wider text-slate-400">
            Menu
          </p>
          <ul className="space-y-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "bg-brand-600 text-white shadow-soft"
                        : "text-slate-600 hover:bg-slate-100 hover:text-brand-700"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={`h-5 w-5 ${
                          isActive
                            ? "text-white"
                            : "text-slate-400 group-hover:text-brand-600"
                        }`}
                      />
                      {label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-slate-100 p-4">
          <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 font-bold text-brand-700">
              {initial}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-slate-800">
                {user?.username || "Student"}
              </p>
              <p className="truncate text-xs text-slate-400">
                {user?.collegeName || "EduDash member"}
              </p>
            </div>
          </div>
          <button
            onClick={logout}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
          >
            <FaSignOutAlt className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
