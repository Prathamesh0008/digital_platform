// components/WhyChooseUs.jsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const items = [
    {
      title: "Flexible Roadmaps",
      desc: "Timelines and service plans shaped around your team, budget, and growth stage.",
    },
    {
      title: "Personalized Strategy",
      desc: "Every campaign is tailored to your audience, market, offer, and business goals.",
    },
    {
      title: "Senior-Led Execution",
      desc: "Work with experienced digital specialists across strategy, search, design, and media.",
    },
    {
      title: "Comprehensive Approach",
      desc: "End-to-end digital systems that connect visibility, trust, traffic, and conversion.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden px-4 py-16 sm:px-6 md:px-10 md:py-24"
      style={{
        background:
          "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 42%, #8EA5F1 78%, #7392FB 100%)",
      }}
    >
      <div className="pointer-events-none absolute left-[-180px] bottom-[-180px] h-[420px] w-[420px] rounded-full bg-white/35 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="mb-10 grid gap-8 border-t border-[#0d2d47]/18 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end sm:mb-14">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Why choose us
            </p>

            <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-[#0d2d47] sm:text-5xl md:text-[72px]">
              Digital Growth With Direction, Not Guesswork
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
              We build clear marketing systems that connect strategy, execution,
              reporting, and improvement, so every move has a purpose.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
            >
              Plan Your Growth
            </Link>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.07, duration: 0.55 }}
              className={`group relative min-h-[280px] overflow-hidden rounded-[28px] border p-6 shadow-[0_24px_70px_rgba(13,45,71,0.14)] transition hover:-translate-y-1 ${
                i === 0
                  ? "border-[#0d2d47]/15 bg-[#0d2d47] text-white"
                  : "border-white/45 bg-white/24 text-[#0d2d47] backdrop-blur-md"
              }`}
            >
              <div
                className={`mb-12 flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold ${
                  i === 0
                    ? "bg-white text-[#0d2d47]"
                    : "bg-[#0d2d47] text-white"
                }`}
              >
                {(i + 1).toString().padStart(2, "0")}
              </div>

              <h3 className="text-2xl font-semibold uppercase leading-tight">
                {item.title}
              </h3>

              <p
                className={`mt-5 text-sm leading-relaxed ${
                  i === 0 ? "text-white/78" : "text-[#0d2d47]/72"
                }`}
              >
                {item.desc}
              </p>

              <div
                className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${
                  i === 0 ? "bg-[#7392FB]" : "bg-[#0d2d47]"
                }`}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
