//marketing-website\components\ContactSection.jsx
"use client";

import Image from "next/image";
import emailjs from "@emailjs/browser";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_s3guxj2";
  const contactTemplateId =
    process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID ||
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
    "template_tyimu0f";
  const autoReplyTemplateId =
    process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID || "template_l3un0rw";
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitMessage("");

    if (!serviceId || !contactTemplateId || !autoReplyTemplateId || !publicKey) {
      setSubmitMessage("Email service is not configured yet. Add EmailJS environment values.");
      return;
    }

    setIsSending(true);

    try {
      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        from_name: `${formData.firstName} ${formData.lastName}`.trim(),
        reply_to: formData.email,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        serviceId,
        contactTemplateId,
        templateParams,
        { publicKey }
      );

      await emailjs.send(
        serviceId,
        autoReplyTemplateId,
        templateParams,
        { publicKey }
      );

      setSubmitMessage("Thanks! Your message has been sent.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      const errorDetail = getEmailJsErrorMessage(error);
      console.error("EmailJS send failed:", errorDetail, error);
      setSubmitMessage(`Message failed to send. ${errorDetail}`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden"
    >

      {/* 🔥 BACKGROUND (CONTINUOUS LOOP) */}
      <motion.img
        src="/background-contact-desktop.avif"
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover"
        animate={{
          scale: [1.05, 1.1, 1.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 grid md:grid-cols-2 h-full px-4 sm:px-6 md:px-10 py-16 sm:py-24 text-white gap-10 md:gap-12">

        {/* LEFT TEXT */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6">
            <Image
              src="/ne2.png"
              alt="NovaTech logo"
              width={180}
              height={72}
              className="h-auto w-auto"
            />
          </div>

          <p className="uppercase text-sm mb-6 text-white/80">
            Connect with Nova Techscience today. <br />
            Let&apos;s build your next growth chapter.
          </p>

          <h1 className="uppercase leading-[0.9] font-medium
            text-4xl sm:text-5xl md:text-[100px] lg:text-[130px]">
            Contact <br /> Us
          </h1>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1 }}
          className="flex items-center"
        >
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl ml-auto space-y-7 sm:space-y-10"
          >

            {/* NAME ROW */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

              <div className="group">
                <label htmlFor="firstName" className="text-sm text-white/70 group-focus-within:text-white transition">
                  First name *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/40
                    focus:border-white focus:outline-none py-2 transition"
                />
              </div>

              <div className="group">
                <label htmlFor="lastName" className="text-sm text-white/70 group-focus-within:text-white transition">
                  Last name *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/40
                    focus:border-white focus:outline-none py-2 transition"
                />
              </div>

            </div>

            {/* EMAIL */}
            <div className="group">
              <label htmlFor="email" className="text-sm text-white/70 group-focus-within:text-white transition">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/40
                  focus:border-white focus:outline-none py-2 transition"
              />
            </div>

            {/* MESSAGE */}
            <div className="group">
              <label htmlFor="message" className="text-sm text-white/70 group-focus-within:text-white transition">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/40
                  focus:border-white focus:outline-none py-2 resize-none transition"
              />
            </div>

            {submitMessage ? (
              <p className="text-sm text-white/90">{submitMessage}</p>
            ) : null}

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isSending}
              className="mt-6 px-10 py-3 rounded-full
                bg-[#5A7EFF] hover:bg-[#4a6ae0] disabled:cursor-not-allowed disabled:opacity-70
                transition text-white cursor-pointer"
            >
              {isSending ? "Sending..." : "Submit"}
            </motion.button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
