"use client";

import { useEffect, useState } from "react";

export default function VisitorsPanel({ onSelectVisitor }) {
  const [q, setQ] = useState("");
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    loadVisitors();
  }, [q]);

  async function loadVisitors() {
    const params = new URLSearchParams();
    if (q) params.set("q", q);

    const response = await fetch(`/api/live-chat/visitors?${params}`);
    const data = await response.json();

    if (data.success) setVisitors(data.visitors || []);
  }

  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-gray-950">Visitors</h2>
          <p className="text-sm text-gray-500">
            All website visitors stored in MongoDB.
          </p>
        </div>

        <input
          value={q}
          onChange={(event) => setQ(event.target.value)}
          placeholder="Search visitors..."
          className="h-11 rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-black"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-100">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-xs uppercase text-gray-400">
            <tr>
              <th className="p-3">Visitor</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Business</th>
              <th className="p-3">Service</th>
              <th className="p-3">Status</th>
              <th className="p-3">Sessions</th>
            </tr>
          </thead>

          <tbody>
            {visitors.map((visitor) => (
              <tr
                key={visitor.visitorId}
                onClick={() => onSelectVisitor?.(visitor)}
                className="cursor-pointer border-t hover:bg-gray-50"
              >
                <td className="p-3 font-medium">
                  {visitor.name || "Website Visitor"}
                </td>
                <td className="p-3">{visitor.contact || "-"}</td>
                <td className="p-3">{visitor.business || "-"}</td>
                <td className="p-3">{visitor.selectedService || "-"}</td>
                <td className="p-3">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-semibold ${
                      visitor.isOnline
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {visitor.isOnline ? "Online" : "Offline"}
                  </span>
                </td>
                <td className="p-3">{visitor.totalSessions || 0}</td>
              </tr>
            ))}

            {visitors.length === 0 && (
              <tr>
                <td className="p-5 text-gray-500" colSpan="6">
                  No visitors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}