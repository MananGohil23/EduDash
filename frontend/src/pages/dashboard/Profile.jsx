import React, { useMemo } from "react";
import {
  FaIdBadge,
  FaUniversity,
  FaTrophy,
  FaChartLine,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";
import profilePic from "../../assets/profile_pic.jpg";
import { useAttendance } from "../../context/AttendanceContext";
import { useUser } from "../../context/UserContext";

const Profile = () => {
  const { attendanceData } = useAttendance();
  const { user } = useUser();

  const subjects = useMemo(
    () => Object.entries(attendanceData).filter(([name]) => name !== ""),
    [attendanceData]
  );

  const overall = useMemo(
    () =>
      subjects.reduce(
        (acc, [, data]) => {
          acc.present += data.present;
          acc.total += data.total;
          return acc;
        },
        { present: 0, total: 0 }
      ),
    [subjects]
  );

  const overallPercentage =
    overall.total > 0
      ? ((overall.present / overall.total) * 100).toFixed(2)
      : 0;

  const subjectStats = useMemo(
    () =>
      subjects.map(([name, data]) => ({
        name,
        percentage:
          data.total > 0
            ? Number(((data.present / data.total) * 100).toFixed(2))
            : 0,
      })),
    [subjects]
  );

  const bestSubject =
    subjectStats.length > 0
      ? subjectStats.reduce((a, b) => (a.percentage > b.percentage ? a : b))
      : null;

  const worstSubject =
    subjectStats.length > 0
      ? subjectStats.reduce((a, b) => (a.percentage < b.percentage ? a : b))
      : null;

  const hasData = subjects.length > 0;

  const initials = (user?.username || "S").charAt(0).toUpperCase();

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card dark:border-slate-800 dark:bg-slate-900">
        <div className="h-28 bg-gradient-to-r from-brand-600 to-indigo-800" />
        <div className="flex flex-col items-center gap-6 px-6 pb-8 sm:flex-row sm:items-end">
          <div className="-mt-14 h-28 w-28 shrink-0 overflow-hidden rounded-3xl border-4 border-white bg-slate-100 shadow-card dark:border-slate-900 dark:bg-slate-800">
            <img
              src={profilePic}
              alt={user?.username || "Profile"}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex-1 text-center sm:pb-1 sm:text-left">
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {user?.username || "Student"}
            </h1>
          </div>

          <div className="flex gap-3 sm:pb-1">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-lg font-extrabold text-brand-600 dark:bg-brand-900/40 dark:text-brand-300">
              {initials}
            </span>
          </div>
        </div>

        <div className="grid gap-px border-t border-slate-100 bg-slate-100 dark:border-slate-800 dark:bg-slate-800 sm:grid-cols-2">
          <div className="flex items-center gap-4 bg-white px-6 py-5 dark:bg-slate-900">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300">
              <FaIdBadge />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Student ID
              </p>
              <p className="font-bold text-slate-800 dark:text-slate-100">
                {user?.studentID || "Not provided"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white px-6 py-5 dark:bg-slate-900">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300">
              <FaUniversity />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                College
              </p>
              <p className="font-bold text-slate-800 dark:text-slate-100">
                {user?.collegeName || "Dwarkadas J. Sanghvi College of Engineering"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {!hasData && (
        <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-500 shadow-card dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
          <FaInfoCircle className="mt-0.5 shrink-0 text-brand-500 dark:text-brand-400" />
          No attendance data yet. Upload your attendance report from the
          Attendance page to unlock subject insights and best/worst subject
          analysis.
        </div>
      )}

      {hasData && (
        <>
          <section className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-6 text-white shadow-card">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white/80">
                  Overall attendance
                </span>
                <FaChartLine className="h-5 w-5 text-white/80" />
              </div>
              <p className="mt-3 text-4xl font-extrabold">{overallPercentage}%</p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 p-6 text-white shadow-card">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white/80">
                  Best subject
                </span>
                <FaTrophy className="h-5 w-5 text-white/80" />
              </div>
              <p className="mt-3 truncate text-xl font-extrabold">
                {bestSubject?.name}
              </p>
              <p className="text-sm text-white/80">
                {bestSubject?.percentage}% attendance
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-rose-500 to-red-700 p-6 text-white shadow-card">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white/80">
                  Needs improvement
                </span>
                <FaExclamationTriangle className="h-5 w-5 text-white/80" />
              </div>
              <p className="mt-3 truncate text-xl font-extrabold">
                {worstSubject?.name}
              </p>
              <p className="text-sm text-white/80">
                {worstSubject?.percentage}% attendance
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
              Subject-wise attendance
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Tracking {subjectStats.length} subjects from your latest upload
            </p>

            <div className="mt-6 space-y-5">
              {subjectStats
                .slice()
                .sort((a, b) => b.percentage - a.percentage)
                .map((subject) => {
                  const safe = subject.percentage >= 75;
                  return (
                    <div key={subject.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                          {subject.name}
                        </span>
                        <span
                          className={`font-bold ${
                            safe
                              ? "text-emerald-600 dark:text-emerald-400"
                              : "text-rose-600 dark:text-rose-400"
                          }`}
                        >
                          {subject.percentage}%
                        </span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            safe ? "bg-emerald-500" : "bg-rose-500"
                          }`}
                          style={{
                            width: `${Math.min(subject.percentage, 100)}%`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Profile;
