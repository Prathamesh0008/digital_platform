"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import liveChatbotAnimation from "@/data/live-chatbot.json";
import {
  Send,
  X,
  MessageCircle,
  User,
  Loader2,
  Mic,
  MicOff,
  HelpCircle,
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

const AGENCY_WHATSAPP_NUMBER = "919999999999";
// Replace above with your real WhatsApp number
// Example: "919876543210"

const BOT_LOGO = "/N.png";

function normalizeText(text) {
  return String(text || "").toLowerCase().trim();
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
  const safeFaqs = Array.isArray(FAQS) ? FAQS : [];
  const safeServices = Array.isArray(SERVICES) ? SERVICES : [];
  const safeLeadFields = Array.isArray(LEAD_FIELDS) ? LEAD_FIELDS : [];
  const safeQuickReplies = Array.isArray(QUICK_REPLIES) ? QUICK_REPLIES : [];
  const safeServiceMenus = SERVICE_MENUS || {};

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);

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

  const [leadMode, setLeadMode] = useState(false);
  const [leadStep, setLeadStep] = useState(0);
  const [leadData, setLeadData] = useState({});

  const chatEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const handleSendRef = useRef(null);

  const currentLeadField = useMemo(() => {
    return safeLeadFields?.[leadStep] || null;
  }, [leadStep, safeLeadFields]);

  useEffect(() => {
    handleSendRef.current = handleSend;
  });

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isListening]);

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

    addMessage("user", userMessage);
    setInput("");

    if (leadMode) {
      handleLeadInput(userMessage);
      return;
    }

    if (isFaqIntent(userMessage)) {
      addFaqMessage();
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

  function renderBotAvatar(size = 28, rounded = "rounded-full") {
    return (
      <div
        className={`flex items-center justify-center overflow-hidden bg-white ${rounded}`}
        style={{ width: size, height: size }}
      >
        <Image
          src={BOT_LOGO}
          alt="Nova logo"
          width={size}
          height={size}
          className="h-full w-full object-contain"
        />
      </div>
    );
  }

  function renderQuickReplyButton(reply) {
    const isService = safeServiceMenus?.[reply];

    return (
      <button
        key={reply}
        type="button"
        onClick={() => {
          addMessage("user", reply);

          if (isService) {
            addServiceMenu(reply);
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

          handleSend(reply);
        }}
        className="rounded-full border border-gray-200 bg-white px-3 py-2 text-xs text-gray-700 transition hover:border-black hover:bg-black hover:text-white"
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
    if (message.type === "quickReplies") {
      return (
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-800">{message.text}</p>

          <div className="flex flex-wrap gap-2">
            {safeQuickReplies.map((reply) => renderQuickReplyButton(reply))}
          </div>
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
              className="rounded-full bg-black px-4 py-2 text-xs font-medium text-white"
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
                className="rounded-full border border-gray-200 bg-white px-3 py-2 text-xs text-gray-700 transition hover:border-black hover:bg-black hover:text-white"
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
            className="rounded-full bg-black px-4 py-2 text-xs font-medium text-white transition hover:scale-105"
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
  {/* Main Menu Button */}
  <button
    type="button"
    onClick={() => {
      addMessage("user", "Back to Main Menu");
      addMainMenu();
    }}
    className="w-fit rounded-full border border-[#b8c4d4] bg-[#dfe6ee] px-5 py-2.5 text-xs font-medium text-[#243447] shadow-sm transition hover:bg-[#cfd9e5] hover:text-black"
  >
    Main Menu
  </button>

  {/* Request Quote Button - Middle */}
  <button
    type="button"
    onClick={() => {
      addMessage("user", "Request a Quote");
      startLeadCollection();
    }}
    className="w-fit rounded-full border border-[#b7cdf0] bg-[#d8e7fb] px-6 py-2.5 text-xs font-semibold text-[#0d2d47] shadow-sm transition hover:bg-[#c7dcf6] hover:text-black"
  >
    Request Quote
  </button>

  {/* Back to Service Button - Bottom */}
  <button
    type="button"
    onClick={() => {
      addMessage("user", `Back to ${payload.serviceName}`);
      addServiceMenu(payload.serviceName);
    }}
    className="w-fit rounded-full border border-[#d0bfae] bg-[#eadfD2] px-5 py-2.5 text-xs font-medium text-[#493421] shadow-sm transition hover:bg-[#ded0bf] hover:text-black"
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
                  className="mt-2 rounded-full bg-black px-3 py-1 text-[11px] text-white"
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
            className="rounded-full bg-black px-4 py-2 text-xs font-medium text-white"
          >
            ← Back to Main Menu
          </button>
        </div>
      );
    }

    if (message.type === "leadSummary") {
      const payload = JSON.parse(message.text);
      const leadData = payload.leadData;
      const whatsappUrl = payload.whatsappUrl;

      return (
        <div className="space-y-3">
          <p className="font-medium text-gray-900">Enquiry Summary</p>

          <div className="space-y-1 rounded-xl bg-gray-50 p-3 text-xs text-gray-700">
            <p>
              <strong>Name:</strong> {leadData.name || "-"}
            </p>
            <p>
              <strong>Business:</strong> {leadData.business || "-"}
            </p>
            <p>
              <strong>Service:</strong> {leadData.service || "-"}
            </p>
            <p>
              <strong>Website:</strong> {leadData.website || "-"}
            </p>
            <p>
              <strong>Contact:</strong> {leadData.contact || "-"}
            </p>
            <p>
              <strong>Budget:</strong> {leadData.budget || "-"}
            </p>
            <p>
              <strong>Start Time:</strong> {leadData.startTime || "-"}
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
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-700"
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
   <button
  type="button"
  onClick={() => setIsOpen(true)}
  className="fixed bottom-6 right-6 z-50 flex h-35 w-35 items-center justify-center overflow-hidden rounded-full   transition hover:scale-105"
  aria-label="Open chatbot"
>
  <Lottie
    animationData={liveChatbotAnimation}
    loop
    autoplay
   className="h-30 w-30"  
  />
</button>

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
                  Digital Growth Assistant
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-white/80 transition hover:bg-white/10 hover:text-white"
              aria-label="Close chatbot"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto bg-[#f7f7f7] px-4 py-4">
            <div className="space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
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
                      className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
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

              <div ref={chatEndRef} />
            </div>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 border-t border-gray-100 bg-white p-4"
          >
            <button
              type="button"
              onClick={handleMicClick}
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition ${
                isListening
                  ? "border-red-500 bg-red-50 text-red-600"
                  : "border-gray-200 bg-white text-gray-700 hover:border-black hover:text-black"
              }`}
              aria-label="Voice input"
            >
              {isListening ? <MicOff size={18} /> : <Mic size={18} />}
            </button>

            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={
                leadMode
                  ? "Type your answer..."
                  : isListening
                  ? "Listening..."
                  : "Ask about website, SEO, ads..."
              }
              className="h-11 flex-1 rounded-full border border-gray-200 px-4 text-sm outline-none transition focus:border-black"
            />

            <button
              type="submit"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white transition hover:scale-105"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}