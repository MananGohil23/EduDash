import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import {
  FaClipboardCheck,
  FaVideo,
  FaTasks,
  FaArrowRight,
  FaBullhorn,
  FaChartLine,
  FaBookOpen,
  FaExclamationTriangle,
} from "react-icons/fa";
import attendance from "../../assets/attendance.jpg";
import startLearning from "../../assets/startLearning.jpg";
import assignments from "../../assets/assignments.jpg";
import { useUser } from "../../context/UserContext";
import { useAttendance } from "../../context/AttendanceContext";
import { announcements } from "../../data/announcements";

const Home = () => {
  const { user } = useUser();
  const { attendanceData } = useAttendance();

  const subjects = Object.entries(attendanceData).filter(
    ([name]) => name !== ""
  );

  const totals = subjects.reduce(
    (acc, [, data]) => {
      acc.present += data.present;
      acc.total += data.total;
      return acc;
    },
    { present: 0, total: 0 }
  );

  const overall =
    totals.total > 0 ? ((totals.present / totals.total) * 100).toFixed(1) : null;

  const belowThreshold = subjects.filter(([, data]) => {
    const pct = data.total > 0 ? (data.present / data.total) * 100 : 0;
    return pct < 75;
  }).length;

  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const features = [
    {
      to: "/attendance",
      title: "Attendance",
      description:
        "Upload your institution's PDF report and instantly see subject-wise percentages and shortage warnings.",
      image: attendance,
      icon: FaClipboardCheck,
      accent: "from-brand-500 to-brand-700",
    },
    {
      to: "/learning/lectures",
      title: "Lectures",
      description:
        "Curated YouTube playlists for 7 subjects with chapter and subtopic navigation and an embedded player.",
      image: startLearning,
      icon: FaVideo,
      accent: "from-amber-500 to-orange-600",
    },
    {
      to: "/learning/assignments",
      title: "Assignments",
      description:
        "Create assignments, track due dates, mark submissions and never miss an important deadline again.",
      image: assignments,
      icon: FaTasks,
      accent: "from-emerald-500 to-teal-700",
    },
  ];

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-indigo-900 p-8 text-white shadow-card sm:p-10">
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute -bottom-24 right-32 h-56 w-56 rounded-full bg-white/5" />

        <div className="relative max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">
            {today}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
            Hello {user?.username || "Student"} 👋
          </h1>
          <p className="mt-3 text-lg text-brand-100">
            Welcome back to EduDash. Here's a quick look at your academic
            progress today.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/attendance"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-brand-700 transition hover:bg-brand-50"
            >
              Check attendance
              <FaArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              to="/learning/lectures"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              Start learning
              <FaArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              Overall attendance
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-300">
              <FaChartLine />
            </span>
          </div>
          <p className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white">
            {overall !== null ? `${overall}%` : "—"}
          </p>
          <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">
            {overall !== null
              ? "Across all uploaded subjects"
              : "Upload a report to see this"}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              Subjects tracked
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300">
              <FaBookOpen />
            </span>
          </div>
          <p className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white">
            {subjects.length}
          </p>
          <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">
            Subjects in your latest upload
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              Below 75%
            </span>
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                belowThreshold > 0
                  ? "bg-rose-50 text-rose-600 dark:bg-rose-900/40 dark:text-rose-300"
                  : "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300"
              }`}
            >
              <FaExclamationTriangle />
            </span>
          </div>
          <p className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white">
            {belowThreshold}
          </p>
          <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">
            Subjects needing attention
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-900/40 dark:text-amber-300">
            <FaBullhorn />
          </span>
          <div>
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
              Latest announcements
            </h2>
            <p className="text-sm text-slate-400 dark:text-slate-500">
              Campus & course updates
            </p>
          </div>
        </div>

        <Marquee speed={45} gradient={false} pauseOnHover className="py-1">
          {announcements.map((item, index) => (
            <div
              key={index}
              className="mr-4 flex max-w-xl items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 dark:border-slate-700 dark:bg-slate-800"
            >
              <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.tone}`} />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {item.text}
              </span>
            </div>
          ))}
        </Marquee>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-extrabold text-slate-900 dark:text-white">
          Jump back in
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.to}
                to={feature.to}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${feature.accent} text-lg text-white shadow-lg`}
                  >
                    <Icon />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {feature.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-600 dark:text-brand-400">
                    Open
                    <FaArrowRight className="h-3 w-3 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
