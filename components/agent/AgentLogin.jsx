"use client";

import { useState } from "react";

export default function AgentLogin({ onLogin }) {
  const [email, setEmail] = useState("admin@novatech.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(event) {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/agent/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.message || "Login failed.");
        return;
      }

      onLogin(data.agent);
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,#f5f7fa_0%,#d6dbe3_45%,#b9c0cb_100%)] px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-3xl border border-white/60 bg-[linear-gradient(160deg,#ffffff_0%,#edf1f6_38%,#d7dde7_100%)] p-8 shadow-[0_20px_50px_rgba(26,32,44,0.25)] backdrop-blur"
      >
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Nova Support
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Agent Login
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Sign in to manage live visitor chats.
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50/90 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <label className="mb-2 block text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mb-4 h-12 w-full rounded-xl border border-slate-300/80 bg-white/80 px-4 text-slate-900 outline-none transition focus:border-slate-500 focus:bg-white"
          placeholder="admin@novatech.com"
        />

        <label className="mb-2 block text-sm font-medium text-slate-700">
          Password
        </label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          className="mb-6 h-12 w-full rounded-xl border border-slate-300/80 bg-white/80 px-4 text-slate-900 outline-none transition focus:border-slate-500 focus:bg-white"
          placeholder="Password"
        />

        <button
          type="submit"
          disabled={loading}
          className="h-12 w-full rounded-xl border border-slate-500 bg-[linear-gradient(160deg,#3e4652_0%,#252b34_55%,#151a22_100%)] text-sm font-semibold text-slate-100 shadow-[0_10px_24px_rgba(15,23,42,0.35)] transition hover:brightness-110 disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
