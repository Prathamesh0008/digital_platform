"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

export default function LeadsPanel() {
  const [q, setQ] = useState("");
  const [temperature, setTemperature] = useState("all");
  const [leads, setLeads] = useState([]);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

  const loadLeads = useCallback(async () => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (temperature !== "all") params.set("temperature", temperature);

    const response = await fetch(`/api/live-chat/leads?${params}`);
    const data = await response.json();

    if (data.success) setLeads(data.leads || []);
  }, [q, temperature]);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadLeads();
    }, 0);

    return () => clearTimeout(timer);
  }, [loadLeads]);

  const csv = useMemo(() => {
    const header = [
      "Name",
      "Contact",
      "Business",
      "Service",
      "Website",
      "Budget",
      "Start Time",
    ];

    const rows = leads.map((lead) => [
      lead.name || "",
      lead.contact || "",
      lead.business || "",
      lead.service || "",
      lead.website || "",
      lead.budget || "",
      lead.startTime || "",
    ]);

    return [header, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");
  }, [leads]);

  function downloadCsv() {
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "nova-leads.csv";
    a.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-gray-950">Leads</h2>
          <p className="text-sm text-gray-500">
            All enquiry records from MongoDB.
          </p>
        </div>

        <div className="flex gap-2">
          <select
            value={temperature}
            onChange={(event) => setTemperature(event.target.value)}
            className="h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:border-black"
          >
            <option value="all">All Leads</option>
            <option value="hot">Hot</option>
            <option value="warm">Warm</option>
            <option value="cold">Cold</option>
          </select>

          <input
            value={q}
            onChange={(event) => setQ(event.target.value)}
            placeholder="Search leads..."
            className="h-11 rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-black"
          />

          <button
            onClick={downloadCsv}
            className="rounded-xl bg-black px-4 text-sm font-semibold text-white"
          >
            Export CSV
          </button>
        </div>
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        {leads.map((lead) => {
          const message = encodeURIComponent(`
Nova Website Lead

Name: ${lead.name || "-"}
Contact: ${lead.contact || "-"}
Business: ${lead.business || "-"}
Service: ${lead.service || "-"}
Website: ${lead.website || "-"}
Budget: ${lead.budget || "-"}
Start Time: ${lead.startTime || "-"}
`);

          return (
            <div
              key={lead._id}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold text-gray-950">
                    {lead.name || "Lead"}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {lead.contact || "-"}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span
                      className={`rounded-full px-2 py-1 text-[11px] font-bold uppercase ${
                        lead.leadTemperature === "hot"
                          ? "bg-rose-100 text-rose-700"
                          : lead.leadTemperature === "warm"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {(lead.leadTemperature || "cold").toUpperCase()}
                    </span>
                    <span className="text-xs font-semibold text-gray-600">
                      Score: {lead.leadScore ?? 0}/100
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-700"
                >
                  WhatsApp
                </a>
              </div>

              <div className="mt-4 grid gap-2 text-sm text-gray-700">
                <p>
                  <strong>Business:</strong> {lead.business || "-"}
                </p>
                <p>
                  <strong>Service:</strong> {lead.service || "-"}
                </p>
                <p>
                  <strong>Budget:</strong> {lead.budget || "-"}
                </p>
                <p>
                  <strong>Start:</strong> {lead.startTime || "-"}
                </p>
                <p>
                  <strong>Reason:</strong>{" "}
                  {Array.isArray(lead.leadScoreReasons) &&
                  lead.leadScoreReasons.length > 0
                    ? lead.leadScoreReasons.join(", ")
                    : "-"}
                </p>
              </div>
            </div>
          );
        })}

        {leads.length === 0 && (
          <p className="rounded-2xl bg-gray-50 p-5 text-sm text-gray-500">
            No leads found.
          </p>
        )}
      </div>
    </div>
  );
}
