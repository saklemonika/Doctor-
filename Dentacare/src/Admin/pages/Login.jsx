import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (form.email === "admin@gmail.com" && form.password === "123456") {
      localStorage.setItem("adminToken", "fake_token");
      navigate("/admin");
    } else {
      setMessage("Invalid email or password");
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
            className="w-full rounded-2xl bg-[#063c40] py-3 font-semibold text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}