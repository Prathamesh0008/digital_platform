"use client";

const cards = [
  ["totalSessions", "Total Sessions"],
  ["pendingChats", "Pending Chats"],
  ["activeChats", "Active Chats"],
  ["onlineVisitors", "Online Visitors"],
  ["offlineVisitors", "Offline Visitors"],
  ["resolvedToday", "Resolved Today"],
  ["totalLeads", "Total Leads"],
  ["averageResponseTime", "Avg Response"],
];

export default function StatsCards({ stats }) {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {cards.map(([key, label]) => (
        <div
          key={key}
          className="rounded-2xl border border-white/70 bg-[linear-gradient(155deg,#ffffff_0%,#eef2f7_45%,#d9e0ea_100%)] p-4 shadow-[0_8px_24px_rgba(15,23,42,0.12)]"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {label}
          </p>
          <p className="mt-2 text-2xl font-bold text-slate-900">
            {stats?.[key] ?? 0}
          </p>
        </div>
      ))}
    </div>
  );
}
