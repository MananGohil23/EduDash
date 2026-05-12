import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
  const [sidebar, setSidebarOpen] = useState(false);
  return (
    <>
      <div
        className={`z-10 fixed flex gap-3 flex-col w-64 bg-slate-900 h-full text-white p-4 -translate-x-64 shadow ${sidebar ? "translate-x-0" : "-translate-x-64"} transition-transform lg:translate-x-0`}
      >
        <nav className="">
          <header className="text-[20px] font-bold flex items-center justify-center gap-2 p-1 mb-5">
            EduDash
            <br />
            -----------------------
          </header>
          <div className="flex flex-col gap-3">
            <NavLink
              onClick={() => setSidebarOpen(!sidebar)}
              className={({ isActive }) =>
                `rounded-full bg-slate-900 px-4 py-3 text-l font-bold transition ${
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
              onClick={() => setSidebarOpen(!sidebar)}
              className={({ isActive }) =>
                `rounded-full bg-slate-900 px-4 py-3 text-l font-bold transition ${
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
              onClick={() => setSidebarOpen(!sidebar)}
              className={({ isActive }) =>
                `rounded-full bg-slate-900 px-4 py-3 text-l font-bold transition ${
                  isActive
                    ? "border-white bg-white text-slate-900"
                    : "border-white/25 text-white hover:border-white hover:bg-blue-600 hover:scale-[110%] "
                }`
              }
              to="/learning/Assignments"
            >
              Assignments
            </NavLink>
            <NavLink
              onClick={() => setSidebarOpen(!sidebar)}
              className={({ isActive }) =>
                `rounded-full bg-slate-900 px-4 py-3 text-l font-bold transition ${
                  isActive
                    ? "border-white bg-white text-slate-900"
                    : "border-white/25 text-white hover:border-white hover:bg-blue-600 hover:scale-[110%] "
                }`
              }
              to="/profile"
            >
              Profile
            </NavLink>
            <footer className = "mt-auto flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Logo"
                className=" flex items-center h-10 w-10"
              />
            </footer>
          </div>
        </nav>
      </div>
      <header className="bg-slate-900 w-full shadow shadow-slate-950/30 text-white p-4">
        <div className="flex items-center  gap-4">
          <Link to="/">
            <h1 className="text-2xl font-bold">
              <img
                src="/logo.png"
                alt="Dashboard Icon"
                className="h-8 w-8 inline-block mr-2"
              />
            </h1>
          </Link>
          <button
            className="text-white font-bold focus:outline-none lg:hidden ml-auto mr-2"
            onClick={() => setSidebarOpen(!sidebar)}
          >
            | | |
          </button>
        </div>
      </header>
    </>
  );
};

export default Sidebar;
