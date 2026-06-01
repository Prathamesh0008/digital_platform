"use client";

function StatusBadge({ status }) {
  const styles = {
    pending: "bg-amber-100 text-amber-700",
    active: "bg-blue-100 text-blue-700",
    resolved: "bg-emerald-100 text-emerald-700",
    closed: "bg-slate-200 text-slate-700",
    offline: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[11px] font-bold capitalize ${
        styles[status] || styles.closed
      }`}
    >
      {status}
    </span>
  );
}

function formatTime(date) {
  if (!date) return "";

  try {
    return new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
}

function RatingStars({ rating }) {
  if (!rating?.value) return null;

  return (
    <div className="mt-2 flex items-center gap-1 text-[11px] font-bold text-amber-500">
      <span>{"★".repeat(rating.value)}</span>
      <span className="text-slate-300">{"★".repeat(5 - rating.value)}</span>
      <span className="ml-1 text-slate-400">({rating.value}/5)</span>
    </div>
  );
}

export default function ChatList({
  sessions,
  selectedSession,
  onSelect,
  search,
  setSearch,
  status,
  setStatus,
}) {
  return (
    <aside className="flex h-full min-h-0 w-[350px] shrink-0 flex-col overflow-hidden rounded-3xl border border-white/70 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.12),transparent_35%),linear-gradient(165deg,#f8fafc_0%,#e8edf4_60%,#d1d9e5_100%)] shadow-[0_24px_60px_rgba(56,95,230,0.14)] backdrop-blur-xl">
      <div className="shrink-0 border-b border-slate-300/40 p-4">
        <h2 className="text-lg font-bold text-slate-950">Live Requests</h2>
        <p className="mt-1 text-xs text-slate-500">
          Select a visitor to open the conversation.
        </p>

        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="mt-4 h-11 w-full rounded-2xl border border-slate-300/60 bg-white/80 px-4 text-sm outline-none transition focus:border-slate-500 focus:bg-white"
          placeholder="Search visitor, city, service..."
        />

        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          className="mt-3 h-11 w-full cursor-pointer rounded-2xl border border-slate-300/60 bg-white/80 px-4 text-sm outline-none transition focus:border-slate-500 focus:bg-white"
        >
          <option value="all">All Chats</option>
          <option value="pending">Pending Requests</option>
          <option value="active">Active Chats</option>
          <option value="resolved">Resolved</option>
          <option value="closed">Closed</option>
          <option value="offline">Offline</option>
        </select>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-3">
        {sessions.length === 0 ? (
          <p className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm text-slate-600">
            No chats found.
          </p>
        ) : (
          <div className="space-y-2">
            {sessions.map((session) => {
              const isSelected =
                selectedSession?.sessionId === session.sessionId;

              return (
                <button
                  key={session.sessionId}
                  type="button"
                  onClick={() => onSelect(session)}
                  className={`w-full cursor-pointer rounded-3xl border p-4 text-left transition ${
                    isSelected
                      ? "border-slate-200/80 bg-[linear-gradient(160deg,#eff6ff_0%,#e0f2fe_60%,#eefcff_100%)] shadow-[0_16px_40px_rgba(56,95,230,0.16)]"
                      : "border-slate-200/70 bg-white/90 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="line-clamp-1 text-sm font-bold text-slate-950">
                        {session.visitorName || "Website Visitor"}
                      </h3>

                      <p className="mt-1 line-clamp-1 text-xs text-slate-500">
                        {session.selectedService || "General enquiry"}
                      </p>
                    </div>

                    <StatusBadge status={session.status} />
                  </div>

                  <p className="mt-2 line-clamp-1 text-xs text-slate-500">
                    📍 {session.visitorLocation || "No location"}
                  </p>

                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-700">
                    {session.lastMessage ||
                      session.visitorRequirement ||
                      "No message yet"}
                  </p>

                  <RatingStars rating={session.rating} />

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      {formatTime(session.lastMessageAt)}
                    </span>

                    {session.unreadForAgent > 0 && (
                      <span className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
                        {session.unreadForAgent}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}
