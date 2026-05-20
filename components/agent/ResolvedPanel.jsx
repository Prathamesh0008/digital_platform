"use client";

import { useEffect, useState } from "react";

export default function ResolvedPanel({ onSelect }) {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function run() {
      const response = await fetch("/api/live-chat/sessions?status=resolved");
      const data = await response.json();
      if (isMounted && data.success) setSessions(data.sessions || []);
    }

    run();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold text-gray-950">Resolved Chats</h2>
      <p className="mt-1 text-sm text-gray-500">
        View old resolved live chat history.
      </p>

      <div className="mt-5 grid gap-3">
        {sessions.map((session) => (
          <button
            key={session.sessionId}
            onClick={() => onSelect?.(session)}
            className="rounded-2xl border border-gray-100 bg-gray-50 p-4 text-left hover:bg-gray-100"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold text-gray-950">
                {session.visitorName || "Website Visitor"}
              </h3>
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                Resolved
              </span>
            </div>

            <p className="mt-2 text-sm text-gray-500">
              {session.lastMessage || "No message preview"}
            </p>
          </button>
        ))}

        {sessions.length === 0 && (
          <p className="rounded-2xl bg-gray-50 p-5 text-sm text-gray-500">
            No resolved chats found.
          </p>
        )}
      </div>
    </div>
  );
}
