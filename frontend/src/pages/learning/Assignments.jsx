import React, { useEffect, useState } from "react";
import {
  FaClipboardList,
  FaCheckCircle,
  FaExclamationTriangle,
  FaCalendarAlt,
  FaPlus,
  FaSpinner,
  FaInfoCircle,
} from "react-icons/fa";
import {
  getAssignments,
  createAssignment,
  submitAssignment,
} from "../../services/assignmentService";

const emptyForm = { title: "", subject: "", description: "", dueDate: "" };

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");

  const loadAssignments = async () => {
    try {
      setError("");
      const data = await getAssignments();
      setAssignments(data);
    } catch (err) {
      console.log(err);
      setError("Could not load your assignments. Please refresh and try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAssignments();
  }, []);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleCreate = async (e) => {
    e.preventDefault();

    if (!form.title || !form.subject || !form.description || !form.dueDate) {
      setError("Please fill in every field before adding an assignment.");
      return;
    }

    setError("");
    setCreating(true);

    try {
      await createAssignment(form);
      setForm(emptyForm);
      await loadAssignments();
    } catch (err) {
      console.log(err);
      setError("Could not create the assignment. Please try again.");
    } finally {
      setCreating(false);
    }
  };

  const handleSubmitAssignment = async (id) => {
    try {
      await submitAssignment(id);
      await loadAssignments();
    } catch (err) {
      console.log(err);
      setError("Could not update the assignment. Please try again.");
    }
  };

  const submittedCount = assignments.filter((a) => a.status === "Submitted").length;
  const overdueCount = assignments.filter(
    (a) => a.status === "Pending" && new Date(a.dueDate) < new Date()
  ).length;

  const stats = [
    {
      label: "Total",
      value: assignments.length,
      icon: FaClipboardList,
      tone: "bg-brand-50 text-brand-600",
    },
    {
      label: "Submitted",
      value: submittedCount,
      icon: FaCheckCircle,
      tone: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Overdue",
      value: overdueCount,
      icon: FaExclamationTriangle,
      tone: "bg-rose-50 text-rose-600",
    },
  ];

  return (
    <div className="space-y-8">
      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg ${stat.tone}`}
              >
                <Icon />
              </span>
              <div>
                <p className="text-3xl font-extrabold text-slate-900">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-slate-500">
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <h2 className="text-lg font-extrabold text-slate-900">
          Add an assignment
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Keep track of your coursework and due dates.
        </p>

        <form onSubmit={handleCreate} className="mt-6 space-y-4">
          {error && (
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
              {error}
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              placeholder="Assignment title"
              value={form.title}
              onChange={update("title")}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100"
            />
            <input
              placeholder="Subject"
              value={form.subject}
              onChange={update("subject")}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100"
            />
          </div>

          <textarea
            placeholder="Description"
            rows={3}
            value={form.description}
            onChange={update("description")}
            className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100"
          />

          <div className="sm:max-w-xs">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Due date
            </label>
            <input
              type="date"
              value={form.dueDate}
              onChange={update("dueDate")}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100"
            />
          </div>

          <button
            type="submit"
            disabled={creating}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 font-bold text-white shadow-soft transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {creating ? (
              <>
                <FaSpinner className="animate-spin" /> Adding…
              </>
            ) : (
              <>
                <FaPlus className="h-3.5 w-3.5" /> Add assignment
              </>
            )}
          </button>
        </form>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold text-slate-900">
          Your assignments
        </h2>

        {loading && (
          <div className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-10 text-slate-500 shadow-card">
            <FaSpinner className="animate-spin" /> Loading assignments…
          </div>
        )}

        {!loading && assignments.length === 0 && (
          <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-500 shadow-card">
            <FaInfoCircle className="mt-0.5 shrink-0 text-brand-500" />
            No assignments yet. Add your first one above to start tracking
            deadlines.
          </div>
        )}

        {!loading &&
          assignments.map((assignment) => {
            const overdue =
              assignment.status !== "Submitted" &&
              new Date(assignment.dueDate) < new Date();

            const badge = overdue
              ? { label: "Overdue", cls: "bg-rose-50 text-rose-600" }
              : assignment.status === "Submitted"
              ? { label: "Submitted", cls: "bg-emerald-50 text-emerald-600" }
              : { label: "Pending", cls: "bg-amber-50 text-amber-600" };

            return (
              <div
                key={assignment._id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:shadow-soft"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-lg font-extrabold text-slate-900">
                      {assignment.title}
                    </h3>
                    <span className="mt-2 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                      {assignment.subject}
                    </span>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${badge.cls}`}
                  >
                    {badge.label}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {assignment.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500">
                    <FaCalendarAlt />
                    Due{" "}
                    {new Date(assignment.dueDate).toLocaleDateString(undefined, {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>

                  {assignment.status === "Pending" && (
                    <button
                      onClick={() => handleSubmitAssignment(assignment._id)}
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-700"
                    >
                      <FaCheckCircle className="h-3.5 w-3.5" />
                      Mark submitted
                    </button>
                  )}
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Assignments;
