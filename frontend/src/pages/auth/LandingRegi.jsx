import React, { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import {
  FaEye,
  FaEyeSlash,
  FaUserGraduate,
} from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { useUser } from "../../context/UserContext";
import { registerUser } from "../../services/authService";
import logo from "../../assets/logo.png";

const Register = () => {
  const { isLoggedIn, login } = useAuth();
  const { setUser } = useUser();
  const navigate = useNavigate();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [studentID, setStudentID] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!enteredUsername || !enteredPassword) {
      setError("Username and password are required.");
      return;
    }

    if (enteredPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const data = await registerUser({
        username: enteredUsername,
        password: enteredPassword,
        studentID,
        collegeName,
      });

      login(data.token);
      setUser({
        username: data.username,
        studentID: data.studentID,
        collegeName: data.collegeName,
      });

      navigate("/home");
    } catch (err) {
      console.log(err);
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="grid min-h-screen bg-slate-100 lg:grid-cols-2">
      <div className="relative hidden overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-indigo-900 p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/10" />

        <div className="relative flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
            <img src={logo} alt="EduDash" className="h-6 w-6" />
          </span>
          <span className="text-xl font-extrabold tracking-tight">EduDash</span>
        </div>

        <div className="relative max-w-md">
          <FaUserGraduate className="mb-6 h-12 w-12 text-brand-200" />
          <h2 className="text-4xl font-extrabold leading-tight">
            Everything you need for a great semester.
          </h2>
          <p className="mt-4 text-lg text-brand-100">
            Create your account in seconds and bring your attendance,
            assignments and lectures together.
          </p>
        </div>

        <p className="relative text-sm text-brand-200">
          Free to use. Built for students.
        </p>
      </div>

      <div className="flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600">
              <img src={logo} alt="EduDash" className="h-6 w-6" />
            </span>
            <span className="text-xl font-extrabold text-slate-900">EduDash</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Create your account
          </h1>
          <p className="mt-2 text-slate-500">
            Set up your student dashboard in a few steps.
          </p>

          <form onSubmit={handleRegister} className="mt-8 space-y-4">
            {error && (
              <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                autoComplete="username"
                placeholder="Choose a username"
                value={enteredUsername}
                onChange={(e) => setEnteredUsername(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="At least 6 characters"
                  value={enteredPassword}
                  onChange={(e) => setEnteredPassword(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-12 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-slate-400 hover:text-slate-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="studentID"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Student ID
                </label>
                <input
                  id="studentID"
                  type="text"
                  placeholder="e.g. 1234567890"
                  value={studentID}
                  onChange={(e) => setStudentID(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                />
              </div>

              <div>
                <label
                  htmlFor="collegeName"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  College
                </label>
                <input
                  id="collegeName"
                  type="text"
                  placeholder="Your college"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-brand-600 px-4 py-3 font-bold text-white shadow-soft transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Creating account…" : "Create account"}
            </button>
          </form>

          <p className="mt-8 text-center text-slate-500">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-brand-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
