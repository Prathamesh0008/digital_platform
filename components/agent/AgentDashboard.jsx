"use client";

import { useEffect, useState } from "react";
import Pusher from "pusher-js";

import AgentLogin from "./AgentLogin";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import StatsCards from "./StatsCards";
import VisitorsPanel from "./VisitorsPanel";
import LeadsPanel from "./LeadsPanel";
import ResolvedPanel from "./ResolvedPanel";
import FaqTrainingPanel from "./FaqTrainingPanel";

const tabs = ["Live Chats", "Visitors", "Leads", "Resolved", "Settings"];

function StatBox({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/70 bg-[linear-gradient(150deg,#ffffff_0%,#edf2f8_55%,#dbe2ec_100%)] px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.14)]">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-xl font-bold text-slate-950">{value ?? 0}</p>
    </div>
  );
}

function StatusBadge({ isOnline }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${
        isOnline
          ? "border border-emerald-200 bg-emerald-100 text-emerald-800"
          : "border border-slate-300 bg-slate-200 text-slate-700"
      }`}
    >
      <span
        className={`mr-2 h-2 w-2 rounded-full ${
          isOnline ? "bg-emerald-500" : "bg-slate-400"
        }`}
      />
      {isOnline ? "Online" : "Offline"}
    </span>
  );
}

export default function AgentDashboard() {
  const [agent, setAgent] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [activeTab, setActiveTab] = useState("Live Chats");

  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);

  const [stats, setStats] = useState({});
  const [onlineVisitorsList, setOnlineVisitorsList] = useState([]);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const [isChatFullscreen, setIsChatFullscreen] = useState(false);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    checkAgent();
  }, []);

  useEffect(() => {
    if (!agent) return;

    refreshAll();

    const refreshInterval = setInterval(() => {
      refreshAll();
    }, 4000);

    const pusherKey = process.env.NEXT_PUBLIC_PUSHER_KEY;
    const pusherCluster = process.env.NEXT_PUBLIC_PUSHER_CLUSTER;

    if (!pusherKey || !pusherCluster) {
      return () => clearInterval(refreshInterval);
    }

    const pusher = new Pusher(pusherKey, {
      cluster: pusherCluster,
    });

    const channel = pusher.subscribe("nova-agent-dashboard");

    channel.bind("new-session", refreshAll);
    channel.bind("message-updated", refreshAll);
    channel.bind("session-updated", refreshAll);
    channel.bind("visitor-updated", refreshAll);
    channel.bind("stats-updated", refreshAll);
    channel.bind("agent-status-updated", refreshAll);

    return () => {
      clearInterval(refreshInterval);
      channel.unbind_all();
      pusher.unsubscribe("nova-agent-dashboard");
      pusher.disconnect();
    };
  }, [agent?.id, search, status, selectedSession?.sessionId]);
  /* eslint-enable react-hooks/exhaustive-deps */

  useEffect(() => {
    const count = stats?.onlineVisitors || 0;

    if (typeof document !== "undefined") {
      document.title =
        count > 0
          ? `(${count}) Online Visitors - Nova Agent Portal`
          : "Nova Agent Portal";
    }

    return () => {
      if (typeof document !== "undefined") {
        document.title = "Nova Agent Portal";
      }
    };
  }, [stats?.onlineVisitors]);

  async function refreshAll() {
    await Promise.allSettled([loadAgentStatus(), loadStats(), loadSessions()]);
  }

  async function checkAgent() {
    try {
      const response = await fetch("/api/agent/me");
      const data = await response.json();

      if (data.success) {
        setAgent(data.agent);
      }
    } catch {
      setAgent(null);
    } finally {
      setCheckingAuth(false);
    }
  }

  async function loadAgentStatus() {
    try {
      const response = await fetch("/api/agent/me");
      const data = await response.json();

      if (data.success) {
        setAgent(data.agent);
      }
    } catch (error) {
      console.error("Load agent status error:", error);
    }
  }

  async function loadStats() {
    try {
      const response = await fetch("/api/live-chat/stats");
      const data = await response.json();

      if (data.success) {
        setStats(data.stats || {});
        setOnlineVisitorsList(data.onlineVisitorsList || []);
      }
    } catch (error) {
      console.error("Load stats error:", error);
    }
  }

  async function loadSessions() {
    try {
      const params = new URLSearchParams();

      if (search) params.set("q", search);
      if (status) params.set("status", status);

      const response = await fetch(`/api/live-chat/sessions?${params}`);
      const data = await response.json();

      if (!data.success) return;

      const nextSessions = data.sessions || [];
      setSessions(nextSessions);

      if (selectedSession?.sessionId) {
        const updatedSelected = nextSessions.find(
          (session) => session.sessionId === selectedSession.sessionId
        );

        if (updatedSelected) {
          setSelectedSession(updatedSelected);
        }
      }
    } catch (error) {
      console.error("Load sessions error:", error);
    }
  }

  async function toggleOnline() {
    try {
      const nextStatus = !agent.isOnline;

      const response = await fetch("/api/agent/status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isOnline: nextStatus }),
      });

      const data = await response.json();

      if (data.success) {
        setAgent(data.agent);
        refreshAll();
      }
    } catch (error) {
      console.error("Toggle online error:", error);
    }
  }

  async function logout() {
    await fetch("/api/agent/logout", {
      method: "POST",
    });

    setAgent(null);
  }

  if (checkingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,#f7f9fc_0%,#d8dee7_48%,#bac2ce_100%)]">
        <p className="text-sm text-slate-500">Loading agent portal...</p>
      </div>
    );
  }

  if (!agent) {
    return <AgentLogin onLogin={setAgent} />;
  }

  return (
    <>
      {isChatFullscreen && selectedSession && (
        <div className="fixed inset-0 z-[9999] bg-[radial-gradient(circle_at_top,#f7f9fc_0%,#d9e0ea_60%,#b9c3d0_100%)]">
          <ChatWindow
            session={selectedSession}
            agent={agent}
            isFullscreen={true}
            onFullscreenChange={setIsChatFullscreen}
            onRefresh={refreshAll}
          />
        </div>
      )}

      <div className="flex h-screen w-screen overflow-hidden bg-[radial-gradient(circle_at_top,#f6f9fc_0%,#d9e0ea_58%,#b7c1cd_100%)] text-slate-950">
        <aside className="hidden h-full w-[270px] shrink-0 border-r border-slate-300/50 bg-[linear-gradient(180deg,#f4f7fb_0%,#e2e8f1_52%,#d2dae6_100%)] p-5 shadow-[0_14px_34px_rgba(15,23,42,0.18)] lg:flex lg:flex-col">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-400">
              Nova
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-950">
              Agent Portal
            </h1>
          </div>

          <div className="mt-8 rounded-3xl border border-white/70 bg-[linear-gradient(155deg,#ffffff_0%,#eef3f9_48%,#d9e0ea_100%)] p-4 shadow-[0_10px_24px_rgba(15,23,42,0.14)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-slate-950">
                  {agent.name}
                </p>
                <p className="mt-1 text-xs text-slate-500">{agent.email}</p>
              </div>

              <StatusBadge isOnline={agent.isOnline} />
            </div>

            <button
              type="button"
              onClick={toggleOnline}
              className={`mt-4 w-full cursor-pointer rounded-full px-4 py-2.5 text-xs font-bold transition ${
                agent.isOnline
                  ? "border border-emerald-300 bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                  : "border border-slate-300 bg-slate-200 text-slate-800 hover:bg-slate-300"
              }`}
            >
              Set {agent.isOnline ? "Offline" : "Online"}
            </button>
          </div>

          <nav className="mt-8 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`w-full cursor-pointer rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                  activeTab === tab
                    ? "border border-slate-300/70 bg-[linear-gradient(140deg,#f7fbff_0%,#e5edf8_100%)] text-slate-900 shadow"
                    : "text-slate-700 hover:bg-white/70 hover:text-slate-950"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={logout}
            className="mt-auto cursor-pointer rounded-full border border-slate-500 bg-[linear-gradient(160deg,#3f4753_0%,#262c36_58%,#171c25_100%)] px-4 py-3 text-sm font-bold text-slate-100 shadow-[0_10px_24px_rgba(15,23,42,0.35)] transition hover:brightness-110"
          >
            Logout
          </button>
        </aside>

        <main className="flex h-full min-w-0 flex-1 flex-col overflow-hidden">
          <header className="shrink-0 border-b border-slate-300/40 bg-[linear-gradient(180deg,#f9fbfe_0%,#eaf0f8_100%)] px-5 py-4 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-950">
                  {activeTab}
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Manage live chats, visitors, leads and support history.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                <StatBox label="Total" value={stats.totalSessions} />
                <StatBox label="Pending" value={stats.pendingChats} />
                <StatBox label="Active" value={stats.activeChats} />
                <StatBox label="Online" value={stats.onlineVisitors} />
              </div>
            </div>
          </header>

          <div className="min-h-0 flex-1 overflow-hidden">
            {activeTab === "Live Chats" && (
              <div className="flex h-full min-h-0 gap-4 p-4">
                <ChatList
                  sessions={sessions}
                  selectedSession={selectedSession}
                  onSelect={setSelectedSession}
                  search={search}
                  setSearch={setSearch}
                  status={status}
                  setStatus={setStatus}
                />

                <div className="min-h-0 min-w-0 flex-1 overflow-hidden rounded-3xl border border-white/70 bg-[linear-gradient(180deg,#ffffff_0%,#edf2f8_100%)] shadow-[0_14px_34px_rgba(15,23,42,0.15)]">
                  <ChatWindow
                    session={selectedSession}
                    agent={agent}
                    isFullscreen={false}
                    onFullscreenChange={setIsChatFullscreen}
                    onRefresh={refreshAll}
                  />
                </div>
              </div>
            )}

            {activeTab === "Visitors" && (
              <div className="h-full overflow-y-auto p-5">
                <StatsCards stats={stats} />

                <div className="mt-5 rounded-3xl border border-white/70 bg-[linear-gradient(165deg,#ffffff_0%,#eef2f7_55%,#dbe2ec_100%)] p-5 shadow-[0_12px_30px_rgba(15,23,42,0.14)]">
                  <h2 className="text-lg font-bold text-slate-950">
                    Live Visitors
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Currently online visitors from your website.
                  </p>

                  <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {onlineVisitorsList.length > 0 ? (
                      onlineVisitorsList.map((visitor) => (
                        <div
                          key={visitor.visitorId}
                          className="rounded-2xl border border-slate-200/70 bg-white/85 p-4"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <p className="font-bold text-slate-950">
                              {visitor.name || "Website Visitor"}
                            </p>
                            <span className="rounded-full bg-emerald-100 px-2 py-1 text-[11px] font-bold text-emerald-700">
                              Online
                            </span>
                          </div>

                          <p className="mt-2 text-sm text-slate-500">
                            {visitor.contact || "No contact"}
                          </p>
                          <p className="mt-1 text-xs text-slate-400">
                            {visitor.selectedService || "General enquiry"}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm text-slate-500">
                        No live visitors right now.
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <VisitorsPanel />
                </div>
              </div>
            )}

            {activeTab === "Leads" && (
              <div className="h-full overflow-y-auto p-5">
                <StatsCards stats={stats} />

                <div className="mt-5">
                  <LeadsPanel />
                </div>
              </div>
            )}

            {activeTab === "Resolved" && (
              <div className="h-full overflow-y-auto p-5">
                <StatsCards stats={stats} />

                <div className="mt-5">
                  <ResolvedPanel onSelect={setSelectedSession} />
                </div>
              </div>
            )}

            {activeTab === "Settings" && (
              <div className="h-full overflow-y-auto p-5">
                <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
                  <div className="rounded-3xl border border-white/70 bg-[linear-gradient(165deg,#ffffff_0%,#edf2f8_55%,#dbe2ec_100%)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.14)]">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <h2 className="text-xl font-bold text-slate-950">
                          Agent Settings
                        </h2>
                        <p className="mt-2 text-sm text-slate-500">
                          Control your live-agent availability and support
                          status.
                        </p>
                      </div>

                      <StatusBadge isOnline={agent.isOnline} />
                    </div>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-4">
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                          Agent Name
                        </p>
                        <p className="mt-1 font-bold text-slate-950">
                          {agent.name}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-4">
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                          Agent Email
                        </p>
                        <p className="mt-1 font-bold text-slate-950">
                          {agent.email}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-4">
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                          Current Status
                        </p>
                        <p className="mt-1 font-bold text-slate-950">
                          {agent.isOnline ? "Online" : "Offline"}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-4">
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                          Last Updated
                        </p>
                        <p className="mt-1 font-bold text-slate-950">
                          {agent.lastSeenAt
                            ? new Date(agent.lastSeenAt).toLocaleString()
                            : "Not available"}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={toggleOnline}
                      className={`mt-6 cursor-pointer rounded-full px-6 py-3 text-sm font-bold transition ${
                        agent.isOnline
                          ? "border border-slate-300 bg-slate-200 text-slate-800 hover:bg-slate-300"
                          : "border border-emerald-300 bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                      }`}
                    >
                      Set Agent {agent.isOnline ? "Offline" : "Online"}
                    </button>
                  </div>

                  <div className="rounded-3xl border border-white/70 bg-[linear-gradient(165deg,#ffffff_0%,#edf2f8_55%,#dbe2ec_100%)] p-5 shadow-[0_12px_30px_rgba(15,23,42,0.14)]">
                    <h3 className="text-lg font-bold text-slate-950">
                      Live Visitors
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {stats.onlineVisitors || 0} visitor(s) online now.
                    </p>

                    <div className="mt-4 space-y-3">
                      {onlineVisitorsList.length > 0 ? (
                        onlineVisitorsList.slice(0, 6).map((visitor) => (
                          <div
                            key={visitor.visitorId}
                            className="rounded-2xl border border-slate-200/70 bg-white/85 p-3"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <p className="text-sm font-bold text-slate-950">
                                {visitor.name || "Website Visitor"}
                              </p>
                              <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            </div>
                            <p className="mt-1 text-xs text-slate-500">
                              {visitor.contact || "No contact"}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p className="rounded-2xl border border-slate-200/70 bg-white/85 p-4 text-sm text-slate-500">
                          No online visitors.
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <FaqTrainingPanel />
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
