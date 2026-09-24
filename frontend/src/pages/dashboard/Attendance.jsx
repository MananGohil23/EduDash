import React, { useMemo, useRef, useState } from "react";
import axios from "axios";
import {
  FaCloudUploadAlt,
  FaFilePdf,
  FaTimes,
  FaCheckCircle,
  FaExclamationTriangle,
  FaSpinner,
  FaInfoCircle,
} from "react-icons/fa";
import { useAttendance } from "../../context/AttendanceContext";
import { getMissable, formatMissable } from "../../utils/attendance";

const Attendance = () => {
  const { attendanceData, setAttendanceData } = useAttendance();

  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const subjects = useMemo(
    () =>
      Object.entries(attendanceData)
        .filter(([subject]) => subject !== "")
        .sort((a, b) => b[1].percentage - a[1].percentage),
    [attendanceData]
  );

  const overall = useMemo(
    () =>
      subjects.reduce(
        (acc, [, data]) => {
          acc.present += data.present;
          acc.absent += data.absent;
          acc.total += data.total;
          return acc;
        },
        { present: 0, absent: 0, total: 0 }
      ),
    [subjects]
  );

  const overallPercentage =
    overall.total > 0
      ? Number(((overall.present / overall.total) * 100).toFixed(2))
      : 0;

  const overallMiss = getMissable(overall.present, overall.total);

  const hasData = subjects.length > 0;

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a PDF file first.");
      return;
    }

    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("attendanceFile", file);

      const res = await axios.post(
        "https://edudash-hyka.onrender.com/api/attendance/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );

      const parsed = res.data || {};
      const validSubjects = Object.keys(parsed).filter(
        (name) => name.trim() !== ""
      );

      if (validSubjects.length === 0) {
        setError(
          "No subjects were found in this PDF. Please upload your institution's Detailed Attendance report."
        );
        return;
      }

      setAttendanceData(parsed);
      setSuccess(true);
    } catch (err) {
      console.log(err);
      setError(
        err.response?.data?.message ||
          "Failed to parse the attendance PDF. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      setError("Please upload a PDF file.");
      return;
    }

    setError("");
    setSuccess(false);
    setFile(selectedFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => setDragActive(false);

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card dark:border-slate-800 dark:bg-slate-900">
        <div className="border-b border-slate-100 p-6 dark:border-slate-800 sm:p-8">
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
            Upload attendance report
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Provide the Detailed Attendance PDF issued by your institution for
            accurate subject-wise analytics.
          </p>
        </div>

        <div className="p-6 sm:p-8">
          <input
            type="file"
            accept=".pdf"
            ref={fileInputRef}
            className="hidden"
            onChange={(e) => handleFile(e.target.files[0])}
          />

          <div
            onClick={() => fileInputRef.current.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && fileInputRef.current.click()
            }
            className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-12 text-center transition sm:py-16 ${
              dragActive
                ? "border-brand-500 bg-brand-50 dark:bg-brand-900/20"
                : "border-slate-300 bg-slate-50 hover:border-brand-400 hover:bg-brand-50/50 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-brand-600 dark:hover:bg-slate-800"
            }`}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl text-brand-600 shadow-card dark:bg-slate-900 dark:text-brand-400">
              <FaCloudUploadAlt />
            </span>
            <p className="mt-5 text-base font-bold text-slate-800 dark:text-slate-100">
              Drag & drop your PDF here, or{" "}
              <span className="text-brand-600 dark:text-brand-400">
                browse files
              </span>
            </p>
            <p className="mt-2 max-w-md text-sm text-slate-500 dark:text-slate-400">
              Only PDF files are accepted. Upload the Detailed Attendance Sheet
              provided by your institution.
            </p>
          </div>

          {file && (
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-600 dark:bg-rose-900/40 dark:text-rose-300">
                <FaFilePdf />
              </span>
              <span className="min-w-0 flex-1 truncate text-sm font-semibold text-slate-700 dark:text-slate-200">
                {file.name}
              </span>
              <button
                onClick={() => {
                  setFile(null);
                  setSuccess(false);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700 dark:hover:bg-slate-700 dark:hover:text-slate-200"
                aria-label="Remove file"
              >
                <FaTimes />
              </button>
            </div>
          )}

          {error && (
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700 dark:border-rose-900 dark:bg-rose-900/20 dark:text-rose-300">
              <FaExclamationTriangle className="shrink-0" />
              {error}
            </div>
          )}

          {success && (
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-300">
              <FaCheckCircle className="shrink-0" />
              Attendance parsed successfully.
            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={loading}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 font-bold text-white shadow-soft transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                Analysing…
              </>
            ) : (
              "Calculate attendance"
            )}
          </button>
        </div>
      </section>

      {hasData && (
        <section className="space-y-6">
          <div
            className={`overflow-hidden rounded-2xl p-6 shadow-card sm:p-8 ${
              overallPercentage >= 75
                ? "bg-gradient-to-br from-emerald-500 to-teal-700 text-white"
                : "bg-gradient-to-br from-orange-500 to-rose-600 text-white"
            }`}
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                  Overall attendance
                </p>
                <p className="mt-2 text-5xl font-extrabold">
                  {overallPercentage}%
                </p>
                <p className="mt-2 max-w-md text-sm text-white/80">
                  {overallPercentage >= 75
                    ? "Great job — you are comfortably above the 75% requirement."
                    : "Warning: your overall attendance is below the 75% requirement."}
                </p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-bold backdrop-blur">
                  {formatMissable(overallMiss)}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                {[
                  { label: "Present", value: overall.present },
                  { label: "Absent", value: overall.absent },
                  { label: "Total", value: overall.total },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-extrabold sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
                Subject-wise breakdown
              </h2>
              <span className="text-sm text-slate-400 dark:text-slate-500">
                {subjects.length} subjects
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {subjects.map(([subject, data]) => {
                const safe = data.percentage >= 75;
                const miss = getMissable(data.present, data.total);
                return (
                  <div
                    key={subject}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-bold text-slate-900 dark:text-white">
                        {subject}
                      </h3>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                          safe
                            ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300"
                            : "bg-rose-50 text-rose-600 dark:bg-rose-900/40 dark:text-rose-300"
                        }`}
                      >
                        {data.percentage}%
                      </span>
                    </div>

                    <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div
                        className={`h-full rounded-full ${
                          safe ? "bg-emerald-500" : "bg-rose-500"
                        }`}
                        style={{ width: `${Math.min(data.percentage, 100)}%` }}
                      />
                    </div>

                    <div className="mt-4 flex justify-between text-center text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <div>
                        <p className="text-base font-extrabold text-slate-900 dark:text-white">
                          {data.present}
                        </p>
                        Present
                      </div>
                      <div>
                        <p className="text-base font-extrabold text-slate-900 dark:text-white">
                          {data.absent}
                        </p>
                        Absent
                      </div>
                      <div>
                        <p className="text-base font-extrabold text-slate-900 dark:text-white">
                          {data.total}
                        </p>
                        Total
                      </div>
                    </div>

                    <div
                      className={`mt-4 rounded-lg px-3 py-2 text-center text-xs font-bold ${
                        miss.isSafe
                          ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300"
                          : "bg-rose-50 text-rose-600 dark:bg-rose-900/40 dark:text-rose-300"
                      }`}
                    >
                      {formatMissable(miss)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {!hasData && !loading && (
        <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-500 shadow-card dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
          <FaInfoCircle className="mt-0.5 shrink-0 text-brand-500 dark:text-brand-400" />
          Upload a report above to see your overall attendance, subject-wise
          breakdown and shortage warnings.
        </div>
      )}
    </div>
  );
};

export default Attendance;
