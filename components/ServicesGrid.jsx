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
      desc: "Crafting strong identities that stand out.",
    },
    {
      icon: <Icon path="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1ZM14 9a4 4 0 0 1 0 6" />,
      title: "Digital Marketing",
      desc: "Campaigns that deliver measurable growth.",
    },
    {
      icon: <Icon path="M11 19a8 8 0 1 1 5.3-14M21 21l-4.3-4.3M9.5 12l1.8 1.8L15 10" />,
      title: "SEO Optimization",
      desc: "Improve rankings and visibility.",
    },
    {
      icon: <Icon path="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20" />,
      title: "Social Media",
      desc: "Engage and grow your audience.",
    },
    {
      icon: <Icon path="M6 15c-1.5 1.5-2 4-2 4s2.5-.5 4-2l2-2-2-2-2 2Zm5-5 3-3a6 6 0 0 1 8-2 6 6 0 0 1-2 8l-3 3-6-6Z" />,
      title: "Performance Ads",
      desc: "Maximize ROI with precision targeting.",
    },
    {
      icon: <Icon path="M4 6h16v10H4zM2 20h20" />,
      title: "Web Design",
      desc: "Modern high-converting websites.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#EAEBDB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-medium text-[#0d2d47] mb-10 sm:mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="group bg-white p-6 rounded-xl border border-[#C4CFE3]"
            >
              <div className="text-[#5A7EFF] text-2xl mb-4">{item.icon}</div>

              <h3 className="text-lg font-medium mb-2 text-[#0d2d47]">{item.title}</h3>

              <p className="text-sm text-[#0d2d47]/70 mb-4">{item.desc}</p>

              <Link href="/services/details" className="text-sm text-[#5A7EFF] flex items-center gap-2">
                View more ?
              </Link>

              <div className="mt-2 h-[1px] w-0 bg-[#5A7EFF] group-hover:w-full transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
