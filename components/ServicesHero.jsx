// components/ServicesHero.jsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesHero() {
  const heroStats = [
    ["560+", "Projects Delivered"],
    ["18+", "Industry Awards"],
    ["Global", "Campaign Reach"],
  ];

  return (
    <section
      className="relative overflow-hidden px-4 pb-14 pt-28 text-[#0d2d47] sm:px-6 sm:pb-20 md:px-10 md:pt-32"
      style={{
        background:
          "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 35%, #8EA5F1 70%, #7392FB 100%)",
      }}
    >
      <div className="pointer-events-none absolute left-[-180px] top-[-140px] h-[420px] w-[420px] rounded-full bg-white/35 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-220px] right-[-160px] h-[520px] w-[520px] rounded-full bg-[#0d2d47]/12 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="grid items-end gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="mb-5 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] backdrop-blur-md">
              Digital growth services
            </p>

            <h1 className="max-w-5xl text-[52px] font-semibold uppercase leading-[0.88] tracking-tight sm:text-7xl md:text-[104px] lg:text-[128px]">
              Services Built For Digital Momentum
            </h1>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
              >
                Start A Project
              </Link>

              <a
                href="#services-grid"
                className="inline-flex justify-center rounded-full border border-[#0d2d47]/25 bg-white/25 px-7 py-3 text-sm font-medium text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="rounded-[28px] border border-white/40 bg-white/20 p-5 shadow-[0_28px_90px_rgba(13,45,71,0.16)] backdrop-blur-md sm:p-7"
          >
            <p className="text-base leading-relaxed text-[#0d2d47]/78 sm:text-lg">
              We combine strategy, content, design, search, and paid media into
              practical systems that help brands get found, trusted, and chosen.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {heroStats.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[#0d2d47]/10 bg-[#EAEBDB]/45 p-4"
                >
                  <p className="text-2xl font-semibold">{value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0d2d47]/58">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
