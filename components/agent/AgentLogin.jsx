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
    <div className="flex min-h-screen items-center justify-center bg-[#f3f5f8] px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"
      >
        <div className="mb-8">
          <p className="text-sm font-medium text-gray-500">Nova Support</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-950">
            Agent Login
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Sign in to manage live visitor chats.
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <label className="mb-2 block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mb-4 h-12 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-black"
          placeholder="admin@novatech.com"
        />

        <label className="mb-2 block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          className="mb-6 h-12 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-black"
          placeholder="Password"
        />

        <button
          type="submit"
          disabled={loading}
          className="h-12 w-full rounded-xl bg-black text-sm font-semibold text-white transition hover:bg-gray-800 disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Login"}
        </button>
      </form>
    </div>
  );
}