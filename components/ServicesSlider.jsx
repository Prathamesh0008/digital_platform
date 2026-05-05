//marketing-website\components\ServicesSlider.jsx
"use client";

import { motion } from "framer-motion";

function Icon({ path }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
      <path d={path} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServicesSlider() {
  const services = [
  {
    icon: <Icon path="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    title: "Brand Strategy",
    desc: "Building powerful brand identities...",
  },
  {
    icon: <Icon path="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1ZM14 9a4 4 0 0 1 0 6" />,
    title: "Digital Marketing",
    desc: "Data-driven campaigns...",
  },
  {
    icon: <Icon path="M11 19a8 8 0 1 1 5.3-14M21 21l-4.3-4.3M9.5 12l1.8 1.8L15 10" />,
    title: "SEO Optimization",
    desc: "Rank higher...",
  },
  {
    icon: <Icon path="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20" />,
    title: "Social Media",
    desc: "Engaging content...",
  },
  {
    icon: <Icon path="M6 15c-1.5 1.5-2 4-2 4s2.5-.5 4-2l2-2-2-2-2 2Zm5-5 3-3a6 6 0 0 1 8-2 6 6 0 0 1-2 8l-3 3-6-6Z" />,
    title: "Performance Ads",
    desc: "Maximize ROI...",
  },
  {
    icon: <Icon path="M4 6h16v10H4zM2 20h20" />,
    title: "Web Design",
    desc: "Modern websites...",
  },
];

  return (
    <section className="w-full py-28 bg-[#FFF8F5]">

      {/* 🔥 HEADER */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-medium text-[#0d2d47]">
          Our <span className="text-[#5A7EFF]">Services</span>
        </h1>

        <p className="mt-6 text-[#0d2d47]/70 max-w-xl mx-auto">
          We create powerful digital solutions that help brands grow,
          scale and dominate their industry.
        </p>
      </div>

      {/* 🔥 GRID */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E1E4DD]"
          >

            {/* ICON */}
            <div className="text-3xl text-[#5A7EFF] mb-6">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-2xl font-semibold text-[#0d2d47] mb-4">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-[#0d2d47]/70 leading-relaxed mb-6">
              {item.desc}
            </p>

            {/* LINE ANIMATION */}
            <div className="h-[2px] w-0 bg-gradient-to-r from-[#5A7EFF] to-[#7392FB] group-hover:w-full transition-all duration-500" />

          </motion.div>
        ))}

      </div>
    </section>
  );
}
