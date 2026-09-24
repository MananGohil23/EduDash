import React, { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FaBars, FaBell, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../context/UserContext";
import ThemeToggle from "./ThemeToggle";
import { announcements } from "../data/announcements";

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

  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [unread, setUnread] = useState(true);
  const notificationsRef = useRef(null);

  const meta = pageTitles[pathname] || { title: "EduDash", subtitle: "" };
  const initial = (user?.username || "U").charAt(0).toUpperCase();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setNotificationsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setNotificationsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleNotifications = () => {
    setNotificationsOpen((open) => !open);
    setUnread(false);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <button
          className="rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
          onClick={onMenuClick}
          aria-label="Open navigation"
        >
          <FaBars className="h-5 w-5" />
        </button>

        <div className="min-w-0 flex-1">
          <h1 className="truncate text-lg font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-xl">
            {meta.title}
          </h1>
          <p className="hidden truncate text-sm text-slate-500 dark:text-slate-400 sm:block">
            {meta.subtitle}
          </p>
        </div>

        <ThemeToggle />

        <div className="relative hidden sm:block" ref={notificationsRef}>
          <button
            className="relative rounded-xl border border-slate-200 p-2.5 text-slate-500 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
            onClick={toggleNotifications}
            aria-label="Notifications"
            aria-haspopup="true"
            aria-expanded={notificationsOpen}
            title="Notifications"
          >
            <FaBell className="h-4 w-4" />
            {unread && (
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900" />
            )}
          </button>

          {notificationsOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 w-80 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-slate-800">
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                  Notifications
                </h3>
                <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-bold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                  {announcements.length} new
                </span>
              </div>

              <ul className="max-h-80 overflow-y-auto">
                {announcements.map((item) => (
                  <li
                    key={item.id}
                    className="flex gap-3 border-b border-slate-50 px-4 py-3 last:border-0 dark:border-slate-800/60"
                  >
                    <span
                      className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${item.tone}`}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
                          {item.title}
                        </p>
                        <span className="shrink-0 text-xs text-slate-400 dark:text-slate-500">
                          {item.time}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="border-t border-slate-100 px-4 py-2.5 text-center dark:border-slate-800">
                <Link
                  to="/home"
                  onClick={() => setNotificationsOpen(false)}
                  className="text-xs font-bold text-brand-600 hover:underline dark:text-brand-400"
                >
                  View all announcements
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="hidden items-center gap-3 rounded-2xl border border-slate-200 py-1.5 pl-1.5 pr-3 dark:border-slate-700 md:flex">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white">
            {initial}
          </span>
          <span className="hidden max-w-[10rem] flex-col leading-tight sm:flex">
            <span className="truncate text-sm font-bold text-slate-800 dark:text-slate-100">
              {user?.username || "Student"}
            </span>
            <span className="truncate text-xs text-slate-400 dark:text-slate-500">
              {user?.studentID || "Student"}
            </span>
          </span>
        </div>

        <button
          onClick={logout}
          className="hidden rounded-xl bg-slate-900 p-2.5 text-white transition hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 sm:block"
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
