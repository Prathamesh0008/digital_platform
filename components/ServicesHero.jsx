// components/ServicesHero.jsx
"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section
      className="relative px-4 sm:px-6 md:px-10 py-20 sm:py-28 md:py-32 text-[#0d2d47]"
      style={{
        background:
          "linear-gradient(to bottom, #5A7EFF, #7392FB, #8EA5F1, #C4CFE3, #EAEBDB)",
      }}
    >
      <div className="max-w-6xl">

        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl md:text-[100px] leading-[0.9] font-medium"
        >
          Our <br /> Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 sm:mt-10 max-w-xl text-base sm:text-lg"
        >
          We deliver performance-driven marketing solutions that help brands grow,
          scale, and dominate in the digital space.
        </motion.p>

        <div className="mt-10">
          <button className="bg-[#0d2d47] text-white px-6 py-3 rounded-full">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
}
