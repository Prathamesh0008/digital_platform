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
          className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
            {label}
          </p>
          <p className="mt-2 text-2xl font-bold text-gray-950">
            {stats?.[key] ?? 0}
          </p>
        </div>
      ))}
    </div>
  );
}