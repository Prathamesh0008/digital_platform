//components\Footer.jsx
"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Mail, ShieldCheck, Accessibility } from "lucide-react";
import { contactDetails } from "@/lib/contactDetails";
import { useState } from "react";

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

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isConsentChecked, setIsConsentChecked] = useState(false);
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_s3guxj2";
  const contactTemplateId =
    process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID ||
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
    "template_tyimu0f";
  const autoReplyTemplateId =
    process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID || "template_l3un0rw";
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault();
    setNewsletterMessage("");

    if (!isConsentChecked) {
      setNewsletterMessage("Please confirm that you want to subscribe.");
      return;
    }

    if (!serviceId || !contactTemplateId || !autoReplyTemplateId || !publicKey) {
      setNewsletterMessage("Newsletter service is not configured yet.");
      return;
    }

    setIsSubmittingNewsletter(true);

    const templateParams = {
      first_name: "Newsletter",
      last_name: "Subscriber",
      from_name: "Newsletter Subscriber",
      reply_to: newsletterEmail,
      email: newsletterEmail,
      message: "Newsletter subscription request submitted from the website footer.",
      subject: "Newsletter Subscription",
      form_type: "Newsletter Subscription",
      consent: "Yes, subscribe me to your newsletter.",
    };

    try {
      await emailjs.send(serviceId, contactTemplateId, templateParams, {
        publicKey,
      });

      await emailjs.send(serviceId, autoReplyTemplateId, templateParams, {
        publicKey,
      });

      setNewsletterMessage("Thanks! You have been subscribed.");
      setNewsletterEmail("");
      setIsConsentChecked(false);
    } catch (error) {
      const errorDetail = getEmailJsErrorMessage(error);
      console.error("Newsletter EmailJS send failed:", errorDetail, error);
      setNewsletterMessage(`Subscription failed. ${errorDetail}`);
    } finally {
      setIsSubmittingNewsletter(false);
    }
  };

  return (
    <footer className="bg-[#EAEBDB] text-black px-4 sm:px-6 md:px-10 py-14 sm:py-20 overflow-hidden">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 sm:gap-16">

        {/* LEFT CONTACT */}
        <div>
          <div className="mb-6">
            <Image
              src="/novalogo1.svg"
              alt="NovaTechscience"
              width={220}
              height={88}
              className="h-auto w-[160px] sm:w-[200px] md:w-[220px] brightness-100"
            />
          </div>

          <div className="space-y-3">
            <p className="mb-4 flex items-start gap-2 break-words">
              <MapPin size={18} className="mt-1 shrink-0 text-[#5A7EFF]" />
              <span>{contactDetails.office}</span>
            </p>
            <p className="mb-2 flex items-center gap-2">
              <Phone size={18} className="text-[#5A7EFF]" />
              <span>{contactDetails.phone}</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} className="text-[#5A7EFF]" />
              <span>{contactDetails.email}</span>
            </p>
          </div>

        </div>

        {/* RIGHT NEWSLETTER */}
        <div>
          <h3 className="uppercase mb-6 text-lg">
            Subscribe to our newsletter
          </h3>

          <form onSubmit={handleNewsletterSubmit} className="max-w-2xl">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(event) => setNewsletterEmail(event.target.value)}
              placeholder="Email *"
              required
              className="w-full border-b border-black/30 bg-transparent py-3 outline-none mb-6"
            />

            <label className="flex items-start gap-2 mb-6">
              <input
                type="checkbox"
                checked={isConsentChecked}
                onChange={(event) => setIsConsentChecked(event.target.checked)}
                required
                className="mt-1"
              />
              <span className="text-sm leading-relaxed">
                Yes, subscribe me to your newsletter.
              </span>
            </label>

            {newsletterMessage ? (
              <p className="mb-5 text-sm text-black/75">{newsletterMessage}</p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmittingNewsletter}
              className="bg-[#5A7EFF] text-white px-8 py-3 rounded-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmittingNewsletter ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

      </div>

      {/* SOCIAL ICONS */}
      {/* <div className="flex justify-center gap-6 mt-16 text-xl">
        <span className="cursor-pointer">in</span>
        <span className="cursor-pointer">ig</span>
        <span className="cursor-pointer">fb</span>
        <span className="cursor-pointer">x</span>
      </div> */}

      {/* BIG TEXT (SCROLL ANIMATION) */}


      {/* BOTTOM TEXT */}
     <div className="mt-10 text-center text-sm">
  {"\u00A9"} 2026 by NovaTech. Powered and secured by NovaTech
</div>
    </footer>
  );
}


