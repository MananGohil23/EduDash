import React, { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { FaGraduationCap, FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { useUser } from "../../context/UserContext";
import { loginUser } from "../../services/authService";
import logo from "../../assets/logo.png";

const LandingLogin = () => {
  const { isLoggedIn, login } = useAuth();
  const { setUser } = useUser();
  const navigate = useNavigate();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!enteredUsername || !enteredPassword) {
      setError("Please enter your username and password.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const data = await loginUser({
        username: enteredUsername,
        password: enteredPassword,
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
        err.response?.data?.message || "Invalid credentials. Please try again."
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
          <FaGraduationCap className="mb-6 h-12 w-12 text-brand-200" />
          <h2 className="text-4xl font-extrabold leading-tight">
            Your entire academic life, in one calm dashboard.
          </h2>
          <p className="mt-4 text-lg text-brand-100">
            Track attendance, stay ahead of assignments, and learn from curated
            lecture playlists — all in one place.
          </p>
          <ul className="mt-8 space-y-3 text-brand-100">
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand-200" />
              Attendance analytics from a single PDF
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand-200" />
              Assignment deadlines that never slip
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand-200" />
              7 subjects of curated video lectures
            </li>
          </ul>
        </div>

        <p className="relative text-sm text-brand-200">
          Welcome back. Let's pick up where you left off.
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
            Welcome back
          </h1>
          <p className="mt-2 text-slate-500">
            Sign in to access your student dashboard.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
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
                placeholder="e.g. manan.gohil"
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
                  autoComplete="current-password"
                  placeholder="Enter your password"
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

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-brand-600 px-4 py-3 font-bold text-white shadow-soft transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p className="mt-8 text-center text-slate-500">
            Don't have an account?{" "}
            <Link to="/" className="font-bold text-brand-600 hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingLogin;
