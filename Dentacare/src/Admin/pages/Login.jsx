import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
      console.log("Attempting login to:", `${API_URL}/api/auth/login`);

      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("Login response:", data);

      if (data.success) {
        localStorage.setItem("adminToken", data.token);
        localStorage.setItem("adminData", JSON.stringify(data.admin));
        navigate("/admin");
      } else {
        setMessage(data.message || "Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Login failed. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5fbff] px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="text-center text-3xl font-bold text-[#063c40]">
          Admin Login
        </h1>

        {message && (
          <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-center text-sm font-semibold text-red-600">
            {message}
          </p>
        )}

        <form onSubmit={handleLogin} className="mt-8 space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Admin email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-2xl border px-4 py-3 outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full rounded-2xl border px-4 py-3 outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-[#063c40] py-3 font-semibold text-white disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}