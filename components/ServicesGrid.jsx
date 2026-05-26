"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function Icon({ path }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d={path} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServicesGrid() {
  const services = [
    {
      icon: <Icon path="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
      title: "Brand Strategy",
      desc: "Positioning, messaging, and identity systems that make your brand easier to remember and choose.",
    },
    {
      icon: <Icon path="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1ZM14 9a4 4 0 0 1 0 6" />,
      title: "Digital Marketing",
      desc: "Full-funnel campaigns built around awareness, acquisition, nurturing, and measurable growth.",
    },
    {
      icon: <Icon path="M11 19a8 8 0 1 1 5.3-14M21 21l-4.3-4.3M9.5 12l1.8 1.8L15 10" />,
      title: "SEO Optimization",
      desc: "Technical, content, and authority improvements that help search engines understand your value.",
    },
    {
      icon: <Icon path="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20" />,
      title: "Social Media",
      desc: "Platform-native content and community systems that keep your audience engaged consistently.",
    },
    {
      icon: <Icon path="M6 15c-1.5 1.5-2 4-2 4s2.5-.5 4-2l2-2-2-2-2 2Zm5-5 3-3a6 6 0 0 1 8-2 6 6 0 0 1-2 8l-3 3-6-6Z" />,
      title: "Performance Ads",
      desc: "Paid campaigns with sharp targeting, landing-page alignment, and ongoing optimization.",
    },
    {
      icon: <Icon path="M4 6h16v10H4zM2 20h20" />,
      title: "Web Design",
      desc: "Modern websites designed for clarity, speed, conversion, and long-term brand credibility.",
    },
  ];

  return (
    <section
      id="services-grid"
      className="relative overflow-hidden bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24"
    >
      <div className="pointer-events-none absolute right-[-160px] top-10 h-[360px] w-[360px] rounded-full bg-[#7392FB]/18 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="mb-10 flex flex-col justify-between gap-5 border-t border-[#0d2d47]/18 pt-8 sm:mb-14 md:flex-row md:items-end">
          <div>
            {/* <p className="mb-4 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Capabilities
            </p> */}
            <h2 className="max-w-3xl text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-[#0d2d47] sm:text-5xl md:text-[72px]">
              Practical Services For Every Growth Stage
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#0d2d47]/70 md:text-base">
            Choose a focused service or combine them into one connected growth
            plan. Each one is designed to move from strategy to execution.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.06, duration: 0.55 }}
              whileHover={{ y: -8 }}
              className="group relative min-h-[300px] overflow-hidden rounded-[28px] border border-white/45 bg-white/25 p-6 shadow-[0_24px_70px_rgba(13,45,71,0.12)] backdrop-blur-md transition"
            >
              {/* <div className="absolute right-5 top-5 text-6xl font-semibold leading-none text-[#0d2d47]/8">
                {(i + 1).toString().padStart(2, "0")}
              </div> */}

              <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0d2d47] text-white shadow-[0_16px_40px_rgba(13,45,71,0.22)] transition group-hover:scale-105">
                {item.icon}
              </div>

              <h3 className="max-w-xs text-2xl font-semibold uppercase leading-tight text-[#0d2d47]">
                {item.title}
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-[#0d2d47]/72">
                {item.desc}
              </p>

              <Link
                href="/services/details"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#0d2d47]/20 bg-[#EAEBDB]/45 px-5 py-2 text-sm font-semibold text-[#0d2d47] transition group-hover:bg-[#0d2d47] group-hover:text-white"
              >
                View more
                <span aria-hidden="true">→</span>
              </Link>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#7392FB] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
