"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import Pusher from "pusher-js";
import liveChatbotAnimation from "@/data/live-chatbot.json";

import {
  Send,
  X,
  User,
  Loader2,
  Mic,
  MicOff,
  HelpCircle,
  Paperclip,
  Smile,
} from "lucide-react";

import {
  BOT_NAME,
  OPENING_MESSAGE,
  SERVICES,
  FAQS,
  LEAD_FIELDS,
  QUICK_REPLIES,
  SERVICE_MENUS,
} from "@/data/chatbotKnowledge";

const AGENCY_WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999";

const BOT_LOGO = "/N.png";
const EMOJIS = ["😀", "😃", "😊", "👍", "🙏", "❤️", "🚀", "✅", "📞", "💬"];

function normalizeText(text) {
  return String(text || "").toLowerCase().trim();
}

function createFallbackId() {
  return `visitor_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

function isLeadIntent(text) {
  const value = normalizeText(text);

  return [
    "quote",
    "request quote",
    "contact",
    "consultation",
    "call",
    "start",
    "interested",
    "book",
    "price",
    "pricing",
    "cost",
    "budget",
    "hire",
    "proposal",
  ].some((word) => value.includes(word));
}

function isFaqIntent(text) {
  const value = normalizeText(text);

  return [
    "faq",
    "faqs",
    "questions",
    "show questions",
    "all questions",
    "help",
    "common questions",
    "view faqs",
  ].some((word) => value.includes(word));
}

function isLiveAgentIntent(text) {
  const value = normalizeText(text);

  return [
    "talk to live agent",
    "live agent",
    "human support",
    "connect with team",
    "talk to agent",
    "agent",
    "human agent",
    "support team",
  ].some((word) => value.includes(word));
}

function createWhatsAppMessage(leadData) {
  return encodeURIComponent(`
New Lead from Nova Website Chatbot

Name: ${leadData.name || "-"}
Business: ${leadData.business || "-"}
Service: ${leadData.service || "-"}
Existing Website: ${leadData.website || "-"}
Contact: ${leadData.contact || "-"}
Budget: ${leadData.budget || "-"}
Start Time: ${leadData.startTime || "-"}
`);
}

export default function NovaTechAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  const safeFaqs = Array.isArray(FAQS) ? FAQS : [];
  const safeServices = Array.isArray(SERVICES) ? SERVICES : [];
  const safeLeadFields = Array.isArray(LEAD_FIELDS) ? LEAD_FIELDS : [];
  const safeQuickReplies = Array.isArray(QUICK_REPLIES) ? QUICK_REPLIES : [];
  const safeServiceMenus = SERVICE_MENUS || {};

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);

  const [leadMode, setLeadMode] = useState(false);
  const [leadStep, setLeadStep] = useState(0);
  const [leadData, setLeadData] = useState({});

  const [visitorId, setVisitorId] = useState("");
  const [liveSession, setLiveSession] = useState(null);
  const [liveMode, setLiveMode] = useState(false);
  const [agentConnected, setAgentConnected] = useState(false);
  const [isRestoringLiveChat, setIsRestoringLiveChat] = useState(false);

  const [agentTyping, setAgentTyping] = useState(false);
  
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedAttachment, setSelectedAttachment] = useState(null);

  const [liveForm, setLiveForm] = useState({
    name: "",
    contact: "",
    business: "",
    service: "",
    location: "",
    requirement: "",
  });

  const [messages, setMessages] = useState([
    {
      role: "bot",
      type: "text",
      text: OPENING_MESSAGE,
    },
    {
      role: "bot",
      type: "quickReplies",
      text: "You can choose one option below:",
    },
  ]);

  const chatEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const handleSendRef = useRef(null);
  const seenLiveMessageIdsRef = useRef(new Set());

  const fileInputRef = useRef(null);
  const typingTimerRef = useRef(null);
  const notificationAudioRef = useRef(null);
  const userInteractedRef = useRef(false);

  const currentLeadField = useMemo(() => {
    return safeLeadFields?.[leadStep] || null;
  }, [leadStep, safeLeadFields]);

  useEffect(() => {
    handleSendRef.current = handleSend;
  });

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isListening, agentTyping]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    notificationAudioRef.current = new Audio("/sounds/mixkit-software-interface-remove-2576.wav");
    notificationAudioRef.current.volume = 0.55;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedVisitorId = getOrCreateVisitorId();
    setVisitorId(storedVisitorId);

    const storedSessionId = localStorage.getItem("nova_live_session_id");

    if (storedSessionId) {
      restoreLiveSession(storedSessionId);
    }
  }, []);

  useEffect(() => {
    if (!visitorId) return;

    sendVisitorHeartbeat(true);

    const interval = setInterval(() => {
      sendVisitorHeartbeat(true);
    }, 30000);

    function handleBeforeUnload() {
      try {
        const payload = JSON.stringify({
          visitorId,
          name: liveForm.name || leadData?.name || "",
          contact: liveForm.contact || leadData?.contact || "",
          business: liveForm.business || leadData?.business || "",
          selectedService: liveForm.service || leadData?.service || "",
          location: liveForm.location || "",
          requirement: liveForm.requirement || "",
          pageUrl: window.location.href,
          userAgent: navigator.userAgent,
          isOnline: false,
        });

        const blob = new Blob([payload], {
          type: "application/json",
        });

        navigator.sendBeacon?.("/api/live-chat/visitor-heartbeat", blob);
      } catch {
        // ignore browser unload errors
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearInterval(interval);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [visitorId, leadData, liveForm]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    setSpeechSupported(true);

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
      addMessage(
        "bot",
        "I could not hear clearly. Please try again or type your question."
      );
    };

    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript || "";

      if (transcript) {
        setInput(transcript);

        setTimeout(() => {
          handleSendRef.current?.(transcript);
        }, 300);
      }
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop?.();
    };
  }, []);

  useEffect(() => {
    if (!liveSession?.sessionId) return;

    refreshLiveSessionMessages(liveSession.sessionId);

    const interval = setInterval(() => {
      refreshLiveSessionMessages(liveSession.sessionId);
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [liveSession?.sessionId]);

  useEffect(() => {
    if (!liveSession?.sessionId) return;

    const pusherKey = process.env.NEXT_PUBLIC_PUSHER_KEY;
    const pusherCluster = process.env.NEXT_PUBLIC_PUSHER_CLUSTER;

    if (!pusherKey || !pusherCluster) {
      console.warn("Pusher public environment values are missing.");
      return;
    }

    const pusher = new Pusher(pusherKey, {
      cluster: pusherCluster,
    });

    const channel = pusher.subscribe(`nova-chat-${liveSession.sessionId}`);
    console.log("✅ Bot subscribed to channel:", `nova-chat-${liveSession.sessionId}`);

    channel.bind("new-message", (data) => {
      const message = data?.message;

      if (!message) return;

      const messageId = String(message._id || "");

      if (messageId && seenLiveMessageIdsRef.current.has(messageId)) {
        return;
      }

      if (messageId) {
        seenLiveMessageIdsRef.current.add(messageId);
      }

      if (message.senderType === "agent") {
        setAgentTyping(false);
        addMessage("bot", message.message, "agentText");
        playNotificationSound();
      }

      if (message.senderType === "system") {
        setAgentTyping(false);
        addMessage("bot", message.message);
        playNotificationSound();
      }
    });
channel.bind("typing", (data) => {
  console.log("✅ Bot received typing event:", data);

  if (data?.senderType !== "agent") return;

  const isAgentTyping = Boolean(data.isTyping);

  setAgentTyping(isAgentTyping);

  if (typingTimerRef.current) {
    clearTimeout(typingTimerRef.current);
  }

  if (isAgentTyping) {
    typingTimerRef.current = setTimeout(() => {
      setAgentTyping(false);
    }, 3000);
  }
});

channel.bind("typing", (data) => {
  console.log("✅ Bot received typing event:", data);

  if (data?.senderType !== "agent") return;

  const isAgentTyping = Boolean(data.isTyping);

  setAgentTyping(isAgentTyping);

  if (typingTimerRef.current) {
    clearTimeout(typingTimerRef.current);
  }

  if (isAgentTyping) {
    typingTimerRef.current = setTimeout(() => {
      setAgentTyping(false);
    }, 3000);
  }
});

channel.bind("agent-typing", (data) => {
  console.log("✅ Bot received agent-typing event:", data);

  if (data?.senderType !== "agent") return;

  const isAgentTyping = Boolean(data.isTyping);

  setAgentTyping(isAgentTyping);

  if (typingTimerRef.current) {
    clearTimeout(typingTimerRef.current);
  }

  if (isAgentTyping) {
    typingTimerRef.current = setTimeout(() => {
      setAgentTyping(false);
    }, 3000);
  }
});

    channel.bind("agent-connected", (data) => {
      const agentName =
        data?.agent?.name ||
        data?.session?.assignedAgentName ||
        "Nova Agent";

      setAgentConnected(true);
      setAgentTyping(false);

      if (data?.session) {
        setLiveSession(data.session);
      }

      const messageId = data?.message?._id ? String(data.message._id) : "";

      if (messageId && !seenLiveMessageIdsRef.current.has(messageId)) {
        seenLiveMessageIdsRef.current.add(messageId);

        addMessage(
          "bot",
          data?.visitorText ||
            `Agent connected. You are now chatting with ${agentName}.`
        );

        playNotificationSound();
      } else if (!messageId) {
        addMessage(
          "bot",
          data?.visitorText ||
            `Agent connected. You are now chatting with ${agentName}.`
        );

        playNotificationSound();
      }

      refreshLiveSessionMessages(liveSession.sessionId);
    });

    channel.bind("session-closed", () => {
      setLiveMode(false);
      setAgentConnected(false);
      setAgentTyping(false);
      setLiveSession(null);

      if (typeof window !== "undefined") {
        localStorage.removeItem("nova_live_session_id");
      }

      addMessage(
        "bot",
        "Live chat has ended. You can continue with Nova AI assistant."
      );

      addMainMenu();
      playNotificationSound();
    });

    return () => {
      channel.unbind_all();
      pusher.unsubscribe(`nova-chat-${liveSession.sessionId}`);
      pusher.disconnect();
    };
  }, [liveSession?.sessionId]);

  function playNotificationSound() {
    try {
      if (!userInteractedRef.current) return;
      if (!notificationAudioRef.current) return;

      notificationAudioRef.current.currentTime = 0;
      notificationAudioRef.current.play().catch(() => {});
    } catch {
      // ignore browser sound errors
    }
  }

  function getOrCreateVisitorId() {
    if (typeof window === "undefined") return visitorId || "";

    let storedVisitorId = localStorage.getItem("nova_visitor_id");

    if (!storedVisitorId) {
      storedVisitorId =
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : createFallbackId();

      localStorage.setItem("nova_visitor_id", storedVisitorId);
    }

    return storedVisitorId;
  }

  function addMessage(role, text, type = "text") {
    setMessages((prev) => [...prev, { role, text, type }]);
  }

  function addQuickRepliesMessage() {
    setMessages((prev) => [
      ...prev,
      {
        role: "bot",
        type: "quickReplies",
        text: "Here are some quick options:",
      },
    ]);
  }

  function addFaqMessage() {
    setMessages((prev) => [
      ...prev,
      {
        role: "bot",
        type: "faqList",
        text: "Here are the most common questions visitors ask us:",
      },
    ]);
  }

  function addMainMenu() {
    setMessages((prev) => [
      ...prev,
      {
        role: "bot",
        type: "quickReplies",
        text: "Here are some quick options:",
      },
    ]);
  }

  async function refreshLiveSessionMessages(sessionId) {
    if (!sessionId) return;

    try {
      const response = await fetch(
        `/api/live-chat/session?sessionId=${sessionId}`
      );
      const data = await response.json();

      if (!data.success || !data.session) {
        return;
      }

      const session = data.session;
      const liveMessages = Array.isArray(data.messages) ? data.messages : [];

      setLiveSession(session);
      setLiveMode(["pending", "active", "offline"].includes(session.status));
      setAgentConnected(session.status === "active");

      if (!["pending", "active", "offline"].includes(session.status)) {
        setLiveMode(false);
        setAgentConnected(false);
        setAgentTyping(false);
        setLiveSession(null);

        if (typeof window !== "undefined") {
          localStorage.removeItem("nova_live_session_id");
        }

        return;
      }

      liveMessages.forEach((message) => {
        const messageId = String(message._id || "");

        if (messageId && seenLiveMessageIdsRef.current.has(messageId)) {
          return;
        }

        if (messageId) {
          seenLiveMessageIdsRef.current.add(messageId);
        }

  if (message.senderType === "agent") {
  setAgentTyping(false);
  addMessage("bot", message.message, "agentText");
  playNotificationSound?.();
}

        if (message.senderType === "system") {
          setAgentTyping(false);
          addMessage("bot", message.message);
          playNotificationSound();
        }
      });
    } catch (error) {
      console.error("Refresh live messages error:", error);
    }
  }

  function showLiveAgentForm() {
    setIsOpen(true);

    if (liveMode) {
      addMessage(
        "bot",
        agentConnected
          ? "You are already connected with Upasana."
          : "Hiii....\nUpasana is connecting with you shortly."
      );
      addMainMenu();
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        role: "bot",
        type: "liveAgentForm",
        text: "Connect with Live Agent",
      },
    ]);
  }

  function addServiceMenu(serviceName) {
    const service = safeServiceMenus?.[serviceName];

    if (!service) {
      addMessage(
        "bot",
        "I’ll need a few more details to guide you properly. Please share your requirement, and our team will assist you."
      );
      addMainMenu();
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        role: "bot",
        type: "serviceMenu",
        text: serviceName,
      },
    ]);
  }

  function addServiceAnswer(serviceName, option) {
    setMessages((prev) => [
      ...prev,
      {
        role: "bot",
        type: "serviceAnswer",
        text: JSON.stringify({
          serviceName,
          label: option.label,
          answer: option.answer,
        }),
      },
    ]);
  }

  function startLeadCollection() {
    if (!safeLeadFields?.length) {
      addMessage(
        "bot",
        "I could not start the enquiry form. Please contact our team directly."
      );
      return;
    }

    setLeadMode(true);
    setLeadStep(0);
    addMessage("bot", safeLeadFields[0].question);
  }

  function finishLeadCollection(finalLeadData) {
    const whatsappUrl = `https://wa.me/${AGENCY_WHATSAPP_NUMBER}?text=${createWhatsAppMessage(
      finalLeadData
    )}`;

    addMessage(
      "bot",
      "Thank you. I have noted your details. Our team will review your requirement and contact you shortly with the best solution."
    );

    addMessage(
      "bot",
      JSON.stringify({
        whatsappUrl,
        leadData: finalLeadData,
      }),
      "leadSummary"
    );
  }

  function getExactServiceName(userMessage) {
    const value = normalizeText(userMessage);

    return Object.keys(safeServiceMenus).find(
      (serviceName) => normalizeText(serviceName) === value
    );
  }

  function getReadyAnswer(userText) {
    const value = normalizeText(userText);

    if (["hi", "hello", "hey", "hii", "start"].includes(value)) {
      return OPENING_MESSAGE;
    }

    const faqMatch = safeFaqs.find((faq) =>
      faq.keywords?.some((keyword) => value.includes(keyword))
    );

    if (faqMatch) return faqMatch.answer;

    const serviceMatch = safeServices.find((service) =>
      service.keywords?.some((keyword) => value.includes(keyword))
    );

    if (serviceMatch) return serviceMatch.answer;

    if (
      value.includes("full package") ||
      value.includes("digital marketing package")
    ) {
      return "A full digital marketing package can include website development, SEO, social media marketing, paid ads, branding, content, and lead generation. Do you want a complete package or only one service?";
    }

    return null;
  }

  function appendToLastBotMessage(chunk) {
    setMessages((prev) => {
      const next = [...prev];

      for (let i = next.length - 1; i >= 0; i--) {
        if (next[i].role === "bot" && next[i].type === "text") {
          next[i] = {
            ...next[i],
            text: `${next[i].text || ""}${chunk}`,
          };

          return next;
        }
      }

      return [
        ...prev,
        {
          role: "bot",
          type: "text",
          text: chunk,
        },
      ];
    });
  }

  async function sendVisitorHeartbeat(isOnline = true) {
    if (!visitorId && typeof window === "undefined") return;

    const activeVisitorId = visitorId || getOrCreateVisitorId();

    if (!activeVisitorId) return;

    try {
      await fetch("/api/live-chat/visitor-heartbeat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        keepalive: true,
        body: JSON.stringify({
          visitorId: activeVisitorId,
          name: liveForm.name || leadData?.name || "",
          contact: liveForm.contact || leadData?.contact || "",
          business: liveForm.business || leadData?.business || "",
          selectedService: liveForm.service || leadData?.service || "",
          location: liveForm.location || "",
          requirement: liveForm.requirement || "",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          userAgent:
            typeof navigator !== "undefined" ? navigator.userAgent : "",
          isOnline,
        }),
      });
    } catch (error) {
      console.error("Visitor heartbeat error:", error);
    }
  }

  async function restoreLiveSession(sessionId) {
    try {
      setIsRestoringLiveChat(true);

      const response = await fetch(
        `/api/live-chat/session?sessionId=${sessionId}`
      );

      const data = await response.json();

      if (!data.success || !data.session) {
        localStorage.removeItem("nova_live_session_id");
        return;
      }

      const session = data.session;

      if (!["pending", "active", "offline"].includes(session.status)) {
        localStorage.removeItem("nova_live_session_id");
        return;
      }

      setLiveSession(session);
      setLiveMode(true);
      setAgentConnected(session.status === "active");

      setLiveForm((prev) => ({
        ...prev,
        name: session.visitorName || "",
        contact: session.visitorContact || "",
        business: session.visitorBusiness || "",
        service: session.selectedService || "",
        location: session.visitorLocation || "",
        requirement: session.visitorRequirement || "",
      }));

      const restoredMessages = Array.isArray(data.messages)
        ? data.messages
        : [];

      restoredMessages.forEach((message) => {
        if (message?._id) {
          seenLiveMessageIdsRef.current.add(String(message._id));
        }
      });

      if (restoredMessages.length > 0) {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            type: "text",
            text: "Restored your previous live chat session.",
          },
          ...restoredMessages.map((message) => ({
            role: message.senderType === "visitor" ? "user" : "bot",
            type: message.senderType === "agent" ? "agentText" : "text",
            text: message.message,
          })),
          {
            role: "bot",
            type: "quickReplies",
            text: "Live chat is active.",
          },
        ]);
      }
    } catch (error) {
      console.error("Restore live session error:", error);
    } finally {
      setIsRestoringLiveChat(false);
    }
  }

  async function streamAIAnswer(userMessage) {
    try {
      setIsTyping(true);

      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          history: messages
            .filter((message) => message.type === "text")
            .slice(-8)
            .map((message) => ({
              role: message.role,
              text: message.text,
            })),
        }),
      });

      setIsTyping(false);

      if (!response.ok) {
        addMessage(
          "bot",
          "I’ll need a few more details to guide you properly. Please share your requirement, and our team will assist you."
        );
        return;
      }

      const contentType = response.headers.get("content-type") || "";

      if (contentType.includes("application/json")) {
        const data = await response.json();

        addMessage(
          "bot",
          data?.answer ||
            "I’ll need a few more details to guide you properly. Please share your requirement, and our team will assist you."
        );

        return;
      }

      if (!response.body) {
        const text = await response.text();

        addMessage(
          "bot",
          text ||
            "I’ll need a few more details to guide you properly. Please share your requirement, and our team will assist you."
        );

        return;
      }

      addMessage("bot", "", "text");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let finalAnswer = "";

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        const chunk = decoder.decode(value, { stream: true });

        if (chunk) {
          finalAnswer += chunk;
          appendToLastBotMessage(chunk);
        }
      }

      if (!finalAnswer.trim()) {
        appendToLastBotMessage(
          "I’ll need a few more details to guide you properly. Please share your requirement, and our team will assist you."
        );
      }
    } catch (error) {
      console.error("AI chatbot error:", error);

      setIsTyping(false);

      addMessage(
        "bot",
        "I’ll need a few more details to guide you properly. Please share your requirement, and our team will assist you."
      );
    }
  }

  async function submitLiveAgentRequest(event) {
    event.preventDefault();

    if (!liveForm.name.trim() || !liveForm.contact.trim()) {
      addMessage("bot", "Please enter your name and phone/email to continue.");
      return;
    }

    try {
      const activeVisitorId = visitorId || getOrCreateVisitorId();

      if (!visitorId && activeVisitorId) {
        setVisitorId(activeVisitorId);
      }

      setLeadData((prev) => ({
        ...prev,
        name: liveForm.name,
        contact: liveForm.contact,
        business: liveForm.business,
        service: liveForm.service,
        location: liveForm.location,
        requirement: liveForm.requirement,
      }));

      addMessage(
        "user",
        liveForm.requirement || "Live agent request submitted."
      );

      if (typeof window !== "undefined") {
        localStorage.removeItem("nova_live_session_id");
      }

      const response = await fetch("/api/live-chat/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          visitorId: activeVisitorId,
          visitorName: liveForm.name,
          visitorContact: liveForm.contact,
          visitorBusiness: liveForm.business,
          selectedService: liveForm.service || "General enquiry",
          visitorLocation: liveForm.location,
          visitorRequirement: liveForm.requirement,
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          userAgent:
            typeof navigator !== "undefined" ? navigator.userAgent : "",
        }),
      });

      const data = await response.json();

      if (!data.success) {
        addMessage(
          "bot",
          data.message || "Could not connect you right now. Please try again."
        );
        return;
      }

      if (data.visitorId) {
        setVisitorId(data.visitorId);

        if (typeof window !== "undefined") {
          localStorage.setItem("nova_visitor_id", data.visitorId);
        }
      }

      setLiveSession(data.session);
      setLiveMode(true);
      setAgentConnected(data.session?.status === "active");

      if (typeof window !== "undefined" && data.session?.sessionId) {
        localStorage.setItem("nova_live_session_id", data.session.sessionId);
      }

      if (Array.isArray(data.messages)) {
        data.messages.forEach((message) => {
          if (message?._id) {
            seenLiveMessageIdsRef.current.add(String(message._id));
          }
        });
      }

      addMessage("bot", "Hiii....\nUpasana is connecting with you shortly.");

      if (data.offlineMessage) {
        addMessage("bot", data.offlineMessage);
      }

      addMainMenu();
    } catch (error) {
      console.error("Submit live agent request error:", error);

      addMessage("bot", "Could not connect you right now. Please try again.");
    }
  }

  async function sendLiveAgentMessage(userMessage) {
    if (!liveSession?.sessionId) {
      setLiveMode(false);
      setAgentConnected(false);
      setLiveSession(null);

      if (typeof window !== "undefined") {
        localStorage.removeItem("nova_live_session_id");
      }

      addMessage(
        "bot",
        "Live chat session not found. Returning to Nova assistant."
      );

      addMainMenu();
      return;
    }

    try {
      const response = await fetch("/api/live-chat/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId: liveSession.sessionId,
          visitorId,
          senderType: "visitor",
          senderName: liveForm.name || leadData?.name || "Website Visitor",
          message: userMessage,
        }),
      });

      const data = await response.json();

      if (data?.message?._id) {
        seenLiveMessageIdsRef.current.add(String(data.message._id));
      }
    } catch (error) {
      console.error("Send live message error:", error);

      addMessage(
        "bot",
        "Your message could not be sent to the live agent. Please try again."
      );
    }
  }

  async function endLiveChat() {
    const sessionId = liveSession?.sessionId;

    setLiveMode(false);
    setAgentConnected(false);
    setAgentTyping(false);
    setLiveSession(null);

    if (typeof window !== "undefined") {
      localStorage.removeItem("nova_live_session_id");
    }

    addMessage("user", "End Live Chat");
    addMessage("bot", "Live chat ended. Nova AI assistant is active again.");
    addMainMenu();

    if (!sessionId) return;

    try {
      await fetch("/api/live-chat/end", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId,
          visitorId,
        }),
      });
    } catch (error) {
      console.error("End live chat error:", error);
    }
  }

  async function handleLeadInput(userMessage) {
    if (!currentLeadField) {
      setLeadMode(false);
      setLeadStep(0);

      addMessage(
        "bot",
        "I could not continue the enquiry form. Please click Request a Quote again."
      );

      addMainMenu();
      return;
    }

    const updatedLeadData = {
      ...leadData,
      [currentLeadField.key]: userMessage,
    };

    setLeadData(updatedLeadData);

    const nextStep = leadStep + 1;

    if (nextStep < safeLeadFields.length) {
      setLeadStep(nextStep);
      addMessage("bot", safeLeadFields[nextStep].question);
      return;
    }

    setLeadMode(false);
    setLeadStep(0);
    finishLeadCollection(updatedLeadData);
  }

  async function handleSend(customText) {
    const userMessage = customText || input.trim();

    if (!userMessage) return;

    userInteractedRef.current = true;

    addMessage("user", userMessage);
    setInput("");
    setShowEmojiPicker(false);

    if (liveMode) {
      await sendLiveAgentMessage(userMessage);
      return;
    }

    if (leadMode) {
      await handleLeadInput(userMessage);
      return;
    }

    if (isFaqIntent(userMessage)) {
      addFaqMessage();
      return;
    }

    if (isLiveAgentIntent(userMessage)) {
      showLiveAgentForm();
      return;
    }

    const exactServiceName = getExactServiceName(userMessage);

    if (exactServiceName) {
      addServiceMenu(exactServiceName);
      return;
    }

    if (isLeadIntent(userMessage)) {
      startLeadCollection();
      return;
    }

    const readyAnswer = getReadyAnswer(userMessage);

    if (readyAnswer) {
      addMessage("bot", readyAnswer);
      addQuickRepliesMessage();
      return;
    }

    await streamAIAnswer(userMessage);
    addQuickRepliesMessage();
  }

  function handleMicClick() {
    userInteractedRef.current = true;

    if (!speechSupported) {
      addMessage(
        "bot",
        "Voice input is not supported in this browser. Please use Chrome or type your question."
      );
      return;
    }

    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    recognitionRef.current.start();
  }

  function handleAttachmentChange(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    userInteractedRef.current = true;
    setSelectedAttachment(file);
    addMessage("user", `Attached file: ${file.name}`, "attachmentPreview");

    event.target.value = "";
  }

  function insertEmoji(emoji) {
    userInteractedRef.current = true;
    setInput((prev) => `${prev}${emoji}`);
    setShowEmojiPicker(false);
  }

  function renderQuickReplyButton(reply) {
    const isService = safeServiceMenus?.[reply];

    return (
      <button
        key={reply}
        type="button"
        onClick={async () => {
          userInteractedRef.current = true;
          addMessage("user", reply);

          if (isService) {
            addServiceMenu(reply);
            return;
          }

          if (reply === "Talk to Live Agent") {
            showLiveAgentForm();
            return;
          }

          if (reply === "Request a Quote") {
            startLeadCollection();
            return;
          }

          if (reply === "View FAQs") {
            addFaqMessage();
            return;
          }

          if (isLiveAgentIntent(reply)) {
            showLiveAgentForm();
            return;
          }

          await handleSend(reply);
        }}
        className="cursor-pointer rounded-full border border-gray-200 bg-white px-3 py-2 text-xs text-gray-700 transition hover:border-black hover:bg-black hover:text-white"
      >
        {reply === "View FAQs" ? (
          <span className="inline-flex items-center gap-1">
            <HelpCircle size={13} />
            View FAQs
          </span>
        ) : (
          reply
        )}
      </button>
    );
  }

  function renderMessageContent(message) {
    if (message.type === "agentText") {
      return (
        <div>
          <p className="mb-1 text-[11px] font-semibold text-gray-400">
            Upasana
          </p>
          <p>{message.text}</p>
        </div>
      );
    }

    if (message.type === "attachmentPreview") {
      return (
        <div className="flex items-center gap-2">
          <Paperclip size={14} />
          <span>{message.text}</span>
        </div>
      );
    }

    if (message.type === "liveAgentForm") {
      return (
        <form onSubmit={submitLiveAgentRequest} className="space-y-3">
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Connect with Live Agent
            </p>

            <p className="mt-1 text-xs leading-relaxed text-gray-500">
              Share your details so our team can connect you faster.
            </p>
          </div>

          <input
            value={liveForm.name}
            onChange={(event) =>
              setLiveForm((prev) => ({
                ...prev,
                name: event.target.value,
              }))
            }
            placeholder="Your name *"
            className="h-10 w-full rounded-xl border border-gray-200 px-3 text-sm outline-none focus:border-black"
          />

          <input
            value={liveForm.contact}
            onChange={(event) =>
              setLiveForm((prev) => ({
                ...prev,
                contact: event.target.value,
              }))
            }
            placeholder="Phone or email *"
            className="h-10 w-full rounded-xl border border-gray-200 px-3 text-sm outline-none focus:border-black"
          />

          <input
            value={liveForm.location}
            onChange={(event) =>
              setLiveForm((prev) => ({
                ...prev,
                location: event.target.value,
              }))
            }
            placeholder="Location / city"
            className="h-10 w-full rounded-xl border border-gray-200 px-3 text-sm outline-none focus:border-black"
          />

          <textarea
            value={liveForm.requirement}
            onChange={(event) =>
              setLiveForm((prev) => ({
                ...prev,
                requirement: event.target.value,
              }))
            }
            placeholder="Message / requirement"
            rows={3}
            className="w-full resize-none rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-black"
          />

          <button
            type="submit"
            className="w-full cursor-pointer rounded-xl border border-[#b7cdf0] bg-[#d8e7fb] px-4 py-2.5 text-sm font-semibold text-[#0d2d47] transition hover:bg-[#c7dcf6]"
          >
            Submit Request
          </button>
        </form>
      );
    }

    if (message.type === "quickReplies") {
      return (
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-800">{message.text}</p>

          {liveMode && (
            <div className="rounded-2xl border border-red-100 bg-red-50 p-3">
              <p className="mb-2 text-xs font-medium text-red-700">
                {agentConnected
                  ? "Live agent is connected."
                  : "Waiting for live agent..."}
              </p>

              <button
                type="button"
                onClick={endLiveChat}
                className="cursor-pointer rounded-full bg-red-100 px-4 py-2 text-xs font-semibold text-red-700 transition hover:bg-red-200"
              >
                End Live Chat
              </button>
            </div>
          )}

          {!liveMode && (
            <div className="flex flex-wrap gap-2">
              {safeQuickReplies.map((reply) => renderQuickReplyButton(reply))}
            </div>
          )}
        </div>
      );
    }

    if (message.type === "serviceMenu") {
      const service = safeServiceMenus?.[message.text];

      if (!service) {
        return (
          <div className="space-y-3">
            <p>
              I’ll need a few more details to guide you properly. Please share
              your requirement, and our team will assist you.
            </p>

            <button
              type="button"
              onClick={() => {
                addMessage("user", "Back to Main Menu");
                addMainMenu();
              }}
              className="cursor-pointer rounded-full bg-black px-4 py-2 text-xs font-medium text-white"
            >
              ← Back to Main Menu
            </button>
          </div>
        );
      }

      return (
        <div className="space-y-3">
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {service.title}
            </p>
            <p className="mt-1 text-xs text-gray-600">{service.intro}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {service.options?.map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => {
                  addMessage("user", option.label);
                  addServiceAnswer(service.title, option);
                }}
                className="cursor-pointer rounded-full border border-gray-200 bg-white px-3 py-2 text-xs text-gray-700 transition hover:border-black hover:bg-black hover:text-white"
              >
                {option.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              addMessage("user", "Back to Main Menu");
              addMainMenu();
            }}
            className="cursor-pointer rounded-full bg-black px-4 py-2 text-xs font-medium text-white transition hover:scale-105"
          >
            ← Back to Main Menu
          </button>
        </div>
      );
    }

    if (message.type === "serviceAnswer") {
      const payload = JSON.parse(message.text);

      return (
        <div className="space-y-3">
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {payload.label}
            </p>

            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              {payload.answer}
            </p>
          </div>

          <div className="mt-5 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => {
                addMessage("user", "Back to Main Menu");
                addMainMenu();
              }}
              className="w-fit cursor-pointer rounded-full border border-[#b8c4d4] bg-[#dfe6ee] px-5 py-2.5 text-xs font-medium text-[#243447] shadow-sm transition hover:bg-[#cfd9e5] hover:text-black"
            >
              Main Menu
            </button>

            <button
              type="button"
              onClick={() => {
                addMessage("user", "Request a Quote");
                startLeadCollection();
              }}
              className="w-fit cursor-pointer rounded-full border border-[#b7cdf0] bg-[#d8e7fb] px-6 py-2.5 text-xs font-semibold text-[#0d2d47] shadow-sm transition hover:bg-[#c7dcf6] hover:text-black"
            >
              Request Quote
            </button>

            <button
              type="button"
              onClick={() => {
                addMessage("user", `Back to ${payload.serviceName}`);
                addServiceMenu(payload.serviceName);
              }}
              className="w-fit cursor-pointer rounded-full border border-[#d0bfae] bg-[#eadfd2] px-5 py-2.5 text-xs font-medium text-[#493421] shadow-sm transition hover:bg-[#ded0bf] hover:text-black"
            >
              ← Back to {payload.serviceName}
            </button>
          </div>
        </div>
      );
    }

    if (message.type === "faqList") {
      return (
        <div className="space-y-3">
          <p className="font-medium">{message.text}</p>

          <div className="space-y-2">
            {safeFaqs.map((faq, faqIndex) => (
              <details
                key={faqIndex}
                className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2"
              >
                <summary className="cursor-pointer text-xs font-semibold text-gray-900">
                  {faq.question}
                </summary>

                <p className="mt-2 text-xs leading-relaxed text-gray-700">
                  {faq.answer}
                </p>

                <button
                  type="button"
                  onClick={() => handleSend(faq.question)}
                  className="mt-2 cursor-pointer rounded-full bg-black px-3 py-1 text-[11px] text-white"
                >
                  Ask this
                </button>
              </details>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              addMessage("user", "Back to Main Menu");
              addMainMenu();
            }}
            className="cursor-pointer rounded-full bg-black px-4 py-2 text-xs font-medium text-white"
          >
            ← Back to Main Menu
          </button>
        </div>
      );
    }

    if (message.type === "leadSummary") {
      const payload = JSON.parse(message.text);
      const summaryLeadData = payload.leadData;
      const whatsappUrl = payload.whatsappUrl;

      return (
        <div className="space-y-3">
          <p className="font-medium text-gray-900">Enquiry Summary</p>

          <div className="space-y-1 rounded-xl bg-gray-50 p-3 text-xs text-gray-700">
            <p>
              <strong>Name:</strong> {summaryLeadData.name || "-"}
            </p>
            <p>
              <strong>Business:</strong> {summaryLeadData.business || "-"}
            </p>
            <p>
              <strong>Service:</strong> {summaryLeadData.service || "-"}
            </p>
            <p>
              <strong>Website:</strong> {summaryLeadData.website || "-"}
            </p>
            <p>
              <strong>Contact:</strong> {summaryLeadData.contact || "-"}
            </p>
            <p>
              <strong>Budget:</strong> {summaryLeadData.budget || "-"}
            </p>
            <p>
              <strong>Start Time:</strong> {summaryLeadData.startTime || "-"}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-black px-4 py-2 text-xs font-medium text-white transition hover:scale-105"
            >
              Share Enquiry on WhatsApp
            </a>

            <button
              type="button"
              onClick={() => {
                addMessage("user", "Back to Main Menu");
                addMainMenu();
              }}
              className="cursor-pointer rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-700"
            >
              Main Menu
            </button>
          </div>
        </div>
      );
    }

    if (message.type === "whatsapp") {
      return (
        <a
          href={message.text}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 underline"
        >
          Send details on WhatsApp
        </a>
      );
    }

    return message.text;
  }

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={() => {
            userInteractedRef.current = true;
            setIsOpen(true);
          }}
          className="fixed bottom-6 right-6 z-50 flex h-[120px] w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full transition hover:scale-105"
          aria-label="Open chatbot"
        >
          <Lottie
            animationData={liveChatbotAnimation}
            loop
            autoplay
            className="h-[110px] w-[110px]"
          />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[620px] w-[360px] max-w-[calc(100vw-24px)] flex-col overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-black px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white p-1">
                <Image
                  src={BOT_LOGO}
                  alt="Nova logo"
                  width={44}
                  height={44}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-sm font-semibold">{BOT_NAME}</h3>
                <p className="text-xs text-white/70">
                  {isRestoringLiveChat
                    ? "Restoring live chat..."
                    : agentConnected
                    ? "Live Agent Connected"
                    : liveMode
                    ? "Waiting for Live Agent"
                    : "Digital Growth Assistant"}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer rounded-full p-1 text-white/80 transition hover:bg-white/10 hover:text-white"
              aria-label="Close chatbot"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto bg-[#f7f7f7] px-4 py-4">
            <div className="space-y-3">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${message.type}-${index}`}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex max-w-[88%] items-start gap-2 ${
                      message.role === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div
                      className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full ${
                        message.role === "user"
                          ? "bg-black text-white"
                          : "bg-white text-black shadow"
                      }`}
                    >
                      {message.role === "user" ? (
                        <User size={15} />
                      ) : (
                        <Lottie
                          animationData={liveChatbotAnimation}
                          loop
                          autoplay
                          className="h-8 w-8"
                        />
                      )}
                    </div>

                    <div
                      className={`whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        message.role === "user"
                          ? "bg-black text-white"
                          : "bg-white text-gray-800 shadow-sm"
                      }`}
                    >
                      {renderMessageContent(message)}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm text-gray-600 shadow-sm">
                    <Loader2 size={16} className="animate-spin" />
                    Typing...
                  </div>
                </div>
              )}

              {isListening && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm text-gray-600 shadow-sm">
                    <Mic size={16} />
                    Listening...
                  </div>
                </div>
              )}

{agentTyping && (
  <div className="flex justify-start">
    <div className="flex max-w-[88%] items-start gap-2">
      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-black shadow">
        <Lottie
          animationData={liveChatbotAnimation}
          loop
          autoplay
          className="h-8 w-8"
        />
      </div>

      <div className="rounded-2xl bg-white px-4 py-3 text-sm text-gray-600 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:120ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:240ms]" />
          </span>

          <span>Upasana is typing...</span>
        </div>
      </div>
    </div>
  </div>
)}

              <div ref={chatEndRef} />
            </div>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              userInteractedRef.current = true;
              handleSend();
            }}
            className="relative border-t border-gray-100 bg-white p-3"
          >
            {selectedAttachment && (
              <div className="mb-2 flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2 text-xs text-gray-700">
                <span className="line-clamp-1">
                  Attached: {selectedAttachment.name}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedAttachment(null)}
                  className="cursor-pointer rounded-full px-2 py-1 text-red-600 hover:bg-red-50"
                >
                  Remove
                </button>
              </div>
            )}

            {showEmojiPicker && (
              <div className="absolute bottom-[62px] left-[96px] z-10 grid grid-cols-5 gap-2 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl">
                {EMOJIS.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => insertEmoji(emoji)}
                    className="cursor-pointer rounded-lg p-2 text-lg transition hover:bg-gray-100"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleAttachmentChange}
            />

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleMicClick}
                className={`flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border transition ${
                  isListening
                    ? "border-red-500 bg-red-50 text-red-600"
                    : "border-gray-200 bg-white text-gray-700 hover:border-black hover:text-black"
                }`}
                aria-label="Voice input"
              >
                {isListening ? <MicOff size={17} /> : <Mic size={17} />}
              </button>

              <button
                type="button"
                onClick={() => {
                  userInteractedRef.current = true;
                  fileInputRef.current?.click();
                }}
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-black hover:text-black"
                aria-label="Attach file"
              >
                <Paperclip size={17} />
              </button>

              <button
                type="button"
                onClick={() => {
                  userInteractedRef.current = true;
                  setShowEmojiPicker((prev) => !prev);
                }}
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-black hover:text-black"
                aria-label="Emoji"
              >
                <Smile size={17} />
              </button>

              <input
                value={input}
                onChange={(event) => {
                  userInteractedRef.current = true;
                  setInput(event.target.value);
                }}
                placeholder={
                  liveMode
                    ? "Type message for live agent..."
                    : leadMode
                    ? "Type your answer..."
                    : isListening
                    ? "Listening..."
                    : "Ask about website, SEO, ads..."
                }
                className="h-10 min-w-0 flex-1 rounded-full border border-gray-200 px-4 text-sm outline-none transition focus:border-black"
              />

              <button
                type="submit"
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-black text-white transition hover:scale-105"
                aria-label="Send message"
              >
                <Send size={17} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}