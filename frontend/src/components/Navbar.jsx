import React from "react";
import { useLocation } from "react-router-dom";
import { FaBars, FaBell, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../context/UserContext";

const pageTitles = {
  "/home": { title: "Dashboard", subtitle: "Your academic overview at a glance" },
  "/attendance": {
    title: "Attendance",
    subtitle: "Upload your report and track subject-wise attendance",
  },
  "/learning/lectures": {
    title: "Lectures",
    subtitle: "Curated video playlists for every subject",
  },
  "/learning/assignments": {
    title: "Assignments",
    subtitle: "Plan, track and submit your coursework",
  },
  "/profile": { title: "Profile", subtitle: "Your student details and insights" },
};

const Navbar = ({ onMenuClick }) => {
  const { pathname } = useLocation();
  const { logout } = useAuth();
  const { user } = useUser();

  const meta = pageTitles[pathname] || { title: "EduDash", subtitle: "" };
  const initial = (user?.username || "U").charAt(0).toUpperCase();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <button
          className="rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-100 lg:hidden"
          onClick={onMenuClick}
          aria-label="Open navigation"
        >
          <FaBars className="h-5 w-5" />
        </button>

        <div className="min-w-0 flex-1">
          <h1 className="truncate text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
            {meta.title}
          </h1>
          <p className="hidden truncate text-sm text-slate-500 sm:block">
            {meta.subtitle}
          </p>
        </div>

        <button
          className="relative rounded-xl border border-slate-200 p-2.5 text-slate-500 transition hover:bg-slate-100"
          aria-label="Notifications"
          title="Notifications"
        >
          <FaBell className="h-4 w-4" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
        </button>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 py-1.5 pl-1.5 pr-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white">
            {initial}
          </span>
          <span className="hidden max-w-[10rem] flex-col leading-tight sm:flex">
            <span className="truncate text-sm font-bold text-slate-800">
              {user?.username || "Student"}
            </span>
            <span className="truncate text-xs text-slate-400">
              {user?.studentID || "Student"}
            </span>
          </span>
        </div>

        <button
          onClick={logout}
          className="hidden rounded-xl bg-slate-900 p-2.5 text-white transition hover:bg-slate-700 sm:block"
          aria-label="Sign out"
          title="Sign out"
        >
          <FaSignOutAlt className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
