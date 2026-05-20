"use client";

import { useEffect, useRef, useState } from "react";
import Pusher from "pusher-js";
import { Maximize2, Minimize2, Mic, MicOff } from "lucide-react";

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

function sortMessages(messages) {
  return [...messages].sort((a, b) => {
    return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
  });
}

export default function ChatWindow({
  session,
  agent,
  onRefresh,
  isFullscreen = false,
  onFullscreenChange,
}) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [visitorTyping, setVisitorTyping] = useState(false);

  const [speechSupported] = useState(() => {
    if (typeof window === "undefined") return false;
    return Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);
  });
  const [isListening, setIsListening] = useState(false);

  const bottomRef = useRef(null);
  const seenMessageIdsRef = useRef(new Set());
  const recognitionRef = useRef(null);

  // Typing indicator refs
  const typingTimerRef = useRef(null);
  const lastTypingSentAtRef = useRef(0);
  const visitorTypingTimerRef = useRef(null);

  const canReply = session?.status === "active";

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);

    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript || "";

      if (transcript) {
        setInput((prev) => {
          if (!prev.trim()) return transcript;
          return `${prev} ${transcript}`;
        });

      }
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop?.();
    };
  }, []);

  useEffect(() => {
    if (!session?.sessionId) {
      seenMessageIdsRef.current.clear();
      return;
    }

    seenMessageIdsRef.current.clear();
    loadMessages(session.sessionId);

    const refreshInterval = setInterval(() => {
      loadMessages(session.sessionId, true);
    }, 4000);

    const pusherKey = process.env.NEXT_PUBLIC_PUSHER_KEY;
    const pusherCluster = process.env.NEXT_PUBLIC_PUSHER_CLUSTER;

    if (!pusherKey || !pusherCluster) {
      return () => clearInterval(refreshInterval);
    }

    const pusher = new Pusher(pusherKey, {
      cluster: pusherCluster,
    });

    const channel = pusher.subscribe(`nova-chat-${session.sessionId}`);

    channel.bind("new-message", (data) => {
      const message = data?.message;
      if (!message) return;

      const id = String(message._id || "");
      if (id && seenMessageIdsRef.current.has(id)) return;

      if (id) seenMessageIdsRef.current.add(id);

      setMessages((prev) => sortMessages([...prev, message]));
      onRefresh?.();
    });

    channel.bind("agent-connected", () => {
      loadMessages(session.sessionId, true);
      onRefresh?.();
    });

    channel.bind("session-closed", () => {
      loadMessages(session.sessionId, true);
      onRefresh?.();
    });

    channel.bind("typing", (data) => {
      if (data?.senderType !== "visitor") return;

      const isVisitorTyping = Boolean(data?.isTyping);
      setVisitorTyping(isVisitorTyping);

      if (visitorTypingTimerRef.current) {
        clearTimeout(visitorTypingTimerRef.current);
      }

      if (isVisitorTyping) {
        visitorTypingTimerRef.current = setTimeout(() => {
          setVisitorTyping(false);
        }, 2500);
      }
    });

    return () => {
      clearInterval(refreshInterval);
      channel.unbind_all();
      pusher.unsubscribe(`nova-chat-${session.sessionId}`);
      pusher.disconnect();
    };
  }, [session?.sessionId, onRefresh]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, visitorTyping]);

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
      }
      if (visitorTypingTimerRef.current) {
        clearTimeout(visitorTypingTimerRef.current);
      }
    };
  }, []);

  async function loadMessages(sessionId, silent = false) {
    try {
      const response = await fetch(
        `/api/live-chat/message?sessionId=${sessionId}`
      );

      const data = await response.json();

      if (!data.success) return;

      const nextMessages = sortMessages(data.messages || []);

      nextMessages.forEach((message) => {
        if (message?._id) {
          seenMessageIdsRef.current.add(String(message._id));
        }
      });

      setMessages(nextMessages);
    } catch (error) {
      if (!silent) {
        console.error("Load messages error:", error);
      }
    }
  }

  async function sendTypingStatus(isTyping = true) {
    if (!session?.sessionId || session.status !== "active") return;

    const now = Date.now();

    // Prevent too many typing API calls
    if (isTyping && now - lastTypingSentAtRef.current < 700) {
      return;
    }

    lastTypingSentAtRef.current = now;

    try {
      const response = await fetch("/api/live-chat/typing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId: session.sessionId,
          senderType: "agent",
          senderName: agent?.name || session.assignedAgentName || "Upasana",
          isTyping,
        }),
      });

      let data = null;

      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok || !data?.success) {
        // Avoid noisy console spam for transient typing events,
        // but keep one concise diagnostic.
        const status = response.status;
        const message =
          data?.message ||
          (data && Object.keys(data).length > 0
            ? JSON.stringify(data)
            : "Empty typing API response");

        console.warn(`Typing API issue (${status}): ${message}`);
      }
    } catch (error) {
      console.error("Typing status error:", error);
    }
  }

  function handleInputChange(event) {
    setInput(event.target.value);

    if (!canReply) return;

    sendTypingStatus(true);

    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current);
    }

    typingTimerRef.current = setTimeout(() => {
      sendTypingStatus(false);
    }, 1800);
  }

  function handleMicClick() {
    if (!speechSupported || !recognitionRef.current) {
      setInput((prev) =>
        prev
          ? `${prev} Voice input is not supported in this browser.`
          : "Voice input is not supported in this browser."
      );
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    recognitionRef.current.start();
  }

  async function joinChat() {
    if (!session?.sessionId) return;

    await fetch("/api/live-chat/assign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId: session.sessionId,
      }),
    });

    await loadMessages(session.sessionId, true);
    onRefresh?.();
    onFullscreenChange?.(true);
  }

  async function closeChat(status = "resolved") {
    if (!session?.sessionId) return;

    await fetch("/api/live-chat/close", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId: session.sessionId,
        status,
      }),
    });

    await loadMessages(session.sessionId, true);
    onRefresh?.();
  }

  async function sendMessage(event) {
    event.preventDefault();

    if (!input.trim() || !session?.sessionId || sending) return;

    const messageText = input.trim();

    setInput("");
    setSending(true);
    sendTypingStatus(false);

    try {
      await fetch("/api/live-chat/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId: session.sessionId,
          senderType: "agent",
          senderName: agent?.name || session.assignedAgentName || "Upasana",
          message: messageText,
        }),
      });

      await loadMessages(session.sessionId, true);
      onRefresh?.();
    } catch (error) {
      console.error("Send agent message error:", error);
    } finally {
      setSending(false);
    }
  }

  if (!session) {
    return (
      <section className="flex h-full min-h-0 w-full items-center justify-center bg-[linear-gradient(180deg,#f9fbfe_0%,#eaf0f8_100%)]">
        <div className="rounded-2xl border border-white/70 bg-[linear-gradient(150deg,#ffffff_0%,#edf2f8_100%)] px-8 py-7 text-center shadow-[0_10px_24px_rgba(15,23,42,0.14)]">
          <h2 className="text-lg font-bold text-slate-950">Select a chat</h2>
          <p className="mt-2 text-sm text-slate-500">
            Choose a visitor chat from the left panel.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`flex min-h-0 w-full min-w-0 flex-col overflow-hidden bg-[linear-gradient(180deg,#f9fbfe_0%,#eaf0f8_100%)] ${
        isFullscreen ? "h-screen" : "h-full"
      }`}
    >
      {/* Header */}
      <div className="shrink-0 border-b border-slate-300/40 bg-[linear-gradient(180deg,#f8fbfe_0%,#e9eff8_100%)] px-5 py-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-slate-950">
                {session.visitorName || "Website Visitor"}
              </h2>

              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-bold capitalize ${
                  session.status === "active"
                    ? "border border-blue-200 bg-blue-100 text-blue-800"
                    : session.status === "pending"
                    ? "border border-amber-200 bg-amber-100 text-amber-800"
                    : session.status === "resolved"
                    ? "border border-emerald-200 bg-emerald-100 text-emerald-800"
                    : "border border-slate-300 bg-slate-200 text-slate-700"
                }`}
              >
                {session.status}
              </span>
            </div>

            <p className="mt-1 text-xs text-slate-500">
              {session.selectedService || "General enquiry"} ·{" "}
              {session.visitorLocation || "No location"}
              {session.assignedAgentName
                ? ` · Agent: ${session.assignedAgentName}`
                : ""}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {!isFullscreen ? (
              <button
                type="button"
                onClick={() => onFullscreenChange?.(true)}
                className="flex cursor-pointer items-center gap-1 rounded-full border border-slate-300 bg-[linear-gradient(150deg,#f4f8fd_0%,#dfe8f5_100%)] px-3 py-2 text-xs font-bold text-slate-800 transition hover:brightness-105"
              >
                <Maximize2 size={14} />
                Fullscreen
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onFullscreenChange?.(false)}
                className="flex cursor-pointer items-center gap-1 rounded-full border border-slate-300 bg-[linear-gradient(150deg,#f1f4f8_0%,#dde3ec_100%)] px-3 py-2 text-xs font-bold text-slate-700 transition hover:brightness-105"
              >
                <Minimize2 size={14} />
                Minimize
              </button>
            )}

            {session.status === "pending" && (
              <button
                type="button"
                onClick={joinChat}
                className="cursor-pointer rounded-full border border-slate-300 bg-[linear-gradient(150deg,#f4f8fd_0%,#dfe8f5_100%)] px-4 py-2 text-xs font-bold text-slate-800 transition hover:brightness-105"
              >
                Join Chat
              </button>
            )}

            <button
              type="button"
              onClick={() => closeChat("resolved")}
              className="cursor-pointer rounded-full border border-emerald-300 bg-emerald-100 px-4 py-2 text-xs font-bold text-emerald-800 transition hover:bg-emerald-200"
            >
              Mark Resolved
            </button>

            <button
              type="button"
              onClick={() => closeChat("closed")}
              className="cursor-pointer rounded-full border border-slate-300 bg-slate-200 px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-300"
            >
              Close
            </button>
          </div>
        </div>

        {session.visitorRequirement && (
          <div className="mt-3 rounded-xl border border-slate-200/70 bg-white/85 px-4 py-2.5 text-sm text-slate-800">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[#426286]">
              Requirement
            </p>
            <p className="mt-1 text-[13px] leading-relaxed">
              {session.visitorRequirement}
            </p>
          </div>
        )}
      </div>

      {/* Messages */}
      <div className="min-h-0 flex-1 overflow-y-auto bg-[linear-gradient(180deg,#f8fbfe_0%,#ebf1f9_100%)] px-5 py-4">
        <div className="space-y-2">
          {messages.map((message) => {
            const isAgent = message.senderType === "agent";
            const isVisitor = message.senderType === "visitor";
            const isSystem = message.senderType === "system";

            if (isSystem) {
              return (
                <div key={message._id} className="flex justify-center">
                  <div className="rounded-full border border-slate-300 bg-[linear-gradient(150deg,#f8fafd_0%,#e6ecf5_100%)] px-3 py-1 text-[10px] font-bold text-slate-700 shadow-sm">
                    {message.message}
                  </div>
                </div>
              );
            }

            return (
              <div
                key={message._id}
                className={`flex items-end gap-1.5 ${
                  isAgent ? "justify-end" : "justify-start"
                }`}
              >
                {isVisitor && (
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[9px] font-bold text-slate-700 shadow">
                    {(session.visitorName || "U").charAt(0).toUpperCase()}
                  </div>
                )}

                <div
                  className={`max-w-[240px] px-2.5 py-1.5 text-xs shadow-sm ${
                    isAgent
                      ? "rounded-lg rounded-br-none border border-slate-600 bg-[linear-gradient(160deg,#3f4754_0%,#262d37_58%,#171c25_100%)] text-slate-100"
                      : "rounded-lg rounded-bl-none border border-slate-200 bg-white/90 text-slate-950"
                  }`}
                >
                  <p className="mt-0.5 text-[11px] leading-snug">
                    {message.message}
                  </p>

                  <p
                    className={`mt-0.5 text-[8px] ${
                      isAgent ? "text-white/45" : "text-slate-400"
                    }`}
                  >
                    {formatTime(message.createdAt)}
                  </p>
                </div>

                {isAgent && (
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-500 bg-[linear-gradient(160deg,#3f4754_0%,#262d37_58%,#171c25_100%)] text-[9px] font-bold text-slate-100 shadow">
                    N
                  </div>
                )}
              </div>
            );
          })}

          {visitorTyping && (
            <div className="flex items-end gap-1.5 justify-start">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[9px] font-bold text-slate-700 shadow">
                {(session.visitorName || "U").charAt(0).toUpperCase()}
              </div>
              <div className="rounded-lg rounded-bl-none border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-slate-600 shadow-sm">
                Visitor is typing...
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <form
        onSubmit={sendMessage}
        className="shrink-0 border-t border-slate-300/40 bg-[linear-gradient(180deg,#f8fbfe_0%,#e9eff8_100%)] px-5 py-3"
      >
        <div className="flex items-center gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            disabled={!canReply}
            className="h-10 flex-1 rounded-full border border-slate-300/70 bg-white/80 px-5 text-sm outline-none transition focus:border-slate-500 focus:bg-white disabled:bg-slate-100"
            placeholder={
              canReply ? "Reply to visitor..." : "Join chat to reply..."
            }
          />

          <button
            type="button"
            onClick={handleMicClick}
            disabled={!canReply}
            className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition disabled:cursor-not-allowed disabled:opacity-50 ${
              isListening
                ? "border-red-200 bg-red-50 text-red-600"
                : "border-slate-300 bg-white/80 text-slate-600 hover:border-slate-500 hover:bg-white"
            }`}
            title={
              speechSupported ? "Speak message" : "Voice input not supported"
            }
          >
            {isListening ? <MicOff size={15} /> : <Mic size={15} />}
          </button>

          <button
            type="submit"
            disabled={sending || !canReply}
            className="h-10 cursor-pointer rounded-full border border-slate-500 bg-[linear-gradient(160deg,#3f4754_0%,#262d37_58%,#171c25_100%)] px-6 text-sm font-bold text-slate-100 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
