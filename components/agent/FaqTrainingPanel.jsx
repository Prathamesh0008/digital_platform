"use client";

import { useEffect, useState } from "react";

export default function FaqTrainingPanel() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [keywords, setKeywords] = useState("");
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadFaqs();
  }, []);

  async function loadFaqs() {
    try {
      const response = await fetch("/api/agent/faq");
      const data = await response.json();
      if (data.success) setItems(data.faqs || []);
    } catch (error) {
      console.error("Load FAQ training data error:", error);
    }
  }

  async function saveFaq(event) {
    event.preventDefault();
    if (!question.trim() || !answer.trim()) return;

    try {
      setLoading(true);
      const response = await fetch("/api/agent/faq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question,
          answer,
          keywords,
        }),
      });
      const data = await response.json();
      if (!data.success) return;

      setQuestion("");
      setAnswer("");
      setKeywords("");
      loadFaqs();
    } catch (error) {
      console.error("Save FAQ training data error:", error);
    } finally {
      setLoading(false);
    }
  }

  async function toggleStatus(item) {
    try {
      const response = await fetch("/api/agent/faq", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: item._id,
          isActive: !item.isActive,
        }),
      });
      const data = await response.json();
      if (data.success) loadFaqs();
    } catch (error) {
      console.error("Toggle FAQ status error:", error);
    }
  }

  async function deleteFaq(id) {
    try {
      const response = await fetch(`/api/agent/faq?id=${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) loadFaqs();
    } catch (error) {
      console.error("Delete FAQ error:", error);
    }
  }

  return (
    <div className="rounded-3xl border border-white/70 bg-[linear-gradient(165deg,#ffffff_0%,#edf2f8_55%,#dbe2ec_100%)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.14)]">
      <h3 className="text-lg font-bold text-slate-950">FAQ Auto-Training</h3>
      <p className="mt-1 text-sm text-slate-500">
        Add or disable FAQs used by Nova bot instantly.
      </p>

      <form onSubmit={saveFaq} className="mt-4 grid gap-3">
        <input
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Question"
          className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-500"
        />
        <textarea
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          placeholder="Answer"
          rows={3}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-slate-500"
        />
        <input
          value={keywords}
          onChange={(event) => setKeywords(event.target.value)}
          placeholder="Keywords (comma-separated)"
          className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
        >
          {loading ? "Saving..." : "Save FAQ"}
        </button>
      </form>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div
            key={item._id}
            className="rounded-2xl border border-slate-200/70 bg-white/90 p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-slate-950">{item.question}</p>
                <p className="mt-1 text-sm text-slate-600">{item.answer}</p>
              </div>
              <span
                className={`rounded-full px-2 py-1 text-[11px] font-bold ${
                  item.isActive
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {item.isActive ? "Active" : "Inactive"}
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Keywords: {(item.keywords || []).join(", ") || "None"}
            </p>
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={() => toggleStatus(item)}
                className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
              >
                {item.isActive ? "Disable" : "Enable"}
              </button>
              <button
                type="button"
                onClick={() => deleteFaq(item._id)}
                className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 hover:bg-rose-100"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <p className="rounded-2xl border border-slate-200/70 bg-white/85 p-4 text-sm text-slate-500">
            No trained FAQs yet.
          </p>
        )}
      </div>
    </div>
  );
}
