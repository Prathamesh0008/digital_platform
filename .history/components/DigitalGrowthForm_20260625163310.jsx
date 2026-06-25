// components/DigitalGrowthForm.jsx
"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";

const rotatingWords = ["Digital", "Growth", "Online"];

const getEmailJsErrorMessage = (error) => {
  if (!error) return "Unknown error";
  if (typeof error === "string") return error;

  const maybeError = error;
  const parts = [];

  if (maybeError.status) parts.push(`status: ${maybeError.status}`);
  if (maybeError.text) parts.push(`reason: ${maybeError.text}`);
  if (maybeError.message) parts.push(`message: ${maybeError.message}`);

  if (parts.length > 0) return parts.join(" | ");

  try {
    return JSON.stringify(maybeError);
  } catch {
    return "Unknown error object";
  }
};

export default function DigitalGrowthForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({
    type: "",
    message: "",
  });

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const contactTemplateId =
    process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID ||
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const autoReplyTemplateId =
    process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitState({ type: "", message: "" });

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      setSubmitState({
        type: "error",
        message: "Please fill in name, email, phone, and message.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/project-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          pageUrl: window.location.href,
          userAgent: navigator.userAgent,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Could not submit the form.");
      }

      if (!serviceId || !contactTemplateId || !autoReplyTemplateId || !publicKey) {
        throw new Error(
          "Form saved, but email service is not configured in .env.local."
        );
      }

      const templateParams = {
        first_name: formData.name,
        last_name: "",
        from_name: formData.name,
        reply_to: formData.email,
        email: formData.email,
        phone: formData.phone,
        service: formData.service || "General enquiry",
        message: formData.message,
        subject: "Build Your Brand Form Enquiry",
        form_type: "Project Enquiry",
      };

      await emailjs.send(serviceId, contactTemplateId, templateParams, {
        publicKey,
      });

      await emailjs.send(serviceId, autoReplyTemplateId, templateParams, {
        publicKey,
      });

      setSubmitState({
        type: "success",
        message:
          data.message || "Your enquiry has been submitted and emailed.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      const errorDetail = getEmailJsErrorMessage(error);
      console.error("Project enquiry submit failed:", errorDetail, error);
      setSubmitState({
        type: "error",
        message:
          errorDetail || "Something went wrong while submitting the form.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="digital-growth-form"
      className="relative overflow-hidden py-10 sm:py-12 md:py-14"
      style={{
        background:
          "linear-gradient(to top, #EAEBDB, #C4CFE3, #8EA5F1, #7392FB)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* LEFT TITLE */}
          <div className="h-fit pl-0 sm:pl-4 md:pl-10 lg:pt-2">
            <h2 className="max-w-[260px] text-[3rem] font-semibold uppercase leading-[0.5] tracking-tight text-black sm:max-w-none sm:text-5xl md:text-[62px] lg:text-[78px]">
              Build Your
              <br />
              Brand
            </h2>

            <div className="mt-6 max-w-md text-black/70">
              <p className="text-sm leading-7 sm:text-base md:text-lg md:leading-7">
                Let&apos;s build your brand&apos;s
              </p>

              <div className="mt-1 sm:mt-2">
                <span className="relative inline-flex h-[34px] min-w-[110px] overflow-hidden align-middle font-serif text-[30px] font-bold italic leading-[34px] text-[#0d2d47] sm:h-[42px] sm:min-w-[120px] sm:text-[36px] sm:leading-[42px] md:h-[78px] md:min-w-[210px] md:text-[58px] md:leading-[78px]">
                  <span className="animate-word-slide">
                    {rotatingWords.map((word) => (
                      <span
                        key={word}
                        className="block h-[34px] sm:h-[42px] md:h-[78px]"
                      >
                        {word}
                      </span>
                    ))}
                  </span>
                </span>
              </div>

              <p className="mt-3 text-sm leading-7 sm:text-base md:text-lg md:leading-8">
                presence with strategy, performance, and measurable growth.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="border-black/15 pl-0 sm:pl-0 md:border-l md:pl-10">
            <div className="rounded-[24px] border border-black/10 bg-white/15 p-5 backdrop-blur-sm sm:rounded-[30px] sm:p-7 md:p-8">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-13 rounded-2xl border border-black/10 bg-white/25 px-5 text-sm text-black outline-none placeholder:text-black/45 focus:bg-white/35 sm:h-14"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-13 rounded-2xl border border-black/10 bg-white/25 px-5 text-sm text-black outline-none placeholder:text-black/45 focus:bg-white/35 sm:h-14"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="tel"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-13 rounded-2xl border border-black/10 bg-white/25 px-5 text-sm text-black outline-none placeholder:text-black/45 focus:bg-white/35 sm:h-14"
                  />

                  <input
                    type="text"
                    placeholder="Service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="h-13 rounded-2xl border border-black/10 bg-white/25 px-5 text-sm text-black outline-none placeholder:text-black/45 focus:bg-white/35 sm:h-14"
                  />
                </div>

                <textarea
                  placeholder="Message"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-2xl border border-black/10 bg-white/25 px-5 py-4 text-sm text-black outline-none placeholder:text-black/45 focus:bg-white/35"
                />

                {submitState.message ? (
                  <p
                    className={`text-sm leading-6 ${
                      submitState.type === "success"
                        ? "text-green-900"
                        : "text-red-700"
                    }`}
                  >
                    {submitState.message}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-14 w-full cursor-pointer rounded-full bg-black text-sm font-semibold uppercase tracking-wide text-white transition duration-300 hover:bg-[#0d2d47] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes word-slide-mobile {
          0%,
          28% {
            transform: translate3d(0, 0, 0);
          }

          33%,
          61% {
            transform: translate3d(0, -34px, 0);
          }

          66%,
          94% {
            transform: translate3d(0, -68px, 0);
          }

          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes word-slide-tablet {
          0%,
          28% {
            transform: translate3d(0, 0, 0);
          }

          33%,
          61% {
            transform: translate3d(0, -42px, 0);
          }

          66%,
          94% {
            transform: translate3d(0, -84px, 0);
          }

          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes word-slide-desktop {
          0%,
          28% {
            transform: translate3d(0, 0, 0);
          }
33%,
61% {
  transform: translate3d(0, -78px, 0);
}

66%,
94% {
  transform: translate3d(0, -156px, 0);
}

          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        .animate-word-slide {
          animation: word-slide-mobile 5.5s cubic-bezier(0.76, 0, 0.24, 1)
            infinite;
          will-change: transform;
        }

        @media (min-width: 640px) {
          .animate-word-slide {
            animation-name: word-slide-tablet;
          }
        }

        @media (min-width: 768px) {
          .animate-word-slide {
            animation-name: word-slide-desktop;
          }
        }
      `}</style>
    </section>
  );
}
