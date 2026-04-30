//marketing-website\components\PortfolioHeroLight.jsx
"use client";

import { motion } from "framer-motion";

export default function PortfolioHeroLight() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* 🔥 BACKGROUND (IDENTICAL LOOP) */}
      <motion.img
        src="/Zestor-project-desktop.avif"
        alt="Zestor Project"
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

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-white/20" />

      {/* TOP LABELS */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-6 left-6 right-6 flex justify-between text-black text-sm z-10"
      >
        <p className="uppercase tracking-wide">Our Work</p>
        <p className="uppercase text-right leading-tight">
          Campaigns
        </p>
      </motion.div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 h-full flex items-end px-10 pb-20">
        <div className="text-black max-w-xl">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="uppercase text-sm text-black/60 mb-4"
          >
            Branding • Product • 2025
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-tight leading-[0.9]
              text-[60px] md:text-[90px] lg:text-[120px] font-medium"
          >
            Zestor
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-black/70 text-lg"
          >
            A refined product storytelling experience designed to elevate
            visual identity and create strong brand recall in competitive markets.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 px-6 py-2 rounded-full border border-black/40
              hover:bg-black hover:text-white transition duration-300 cursor-pointer"
          >
            View Case Study →
          </motion.button>

        </div>
      </div>

      {/* 🔥 FLOATING CARD (MATCHED + IMPROVED) */}
      <motion.div
        className="absolute bottom-20 right-10 z-10"
        animate={{
          y: [0, -20, 0],
          x: [0, 8, 0], // 👈 subtle side drift (premium touch)
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        <motion.div
          whileHover={{ y: -10, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative w-[260px] md:w-[320px]
            bg-white/60 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl"
        >

          {/* VIDEO */}
          <video
            src="/file.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          {/* BUTTON */}
          {/* <button className="absolute cursor-pointer top-4 left-4 px-4 py-1.5 text-sm rounded-full bg-[#5A7EFF] text-white hover:scale-105 transition">
            More +
          </button> */}

        </motion.div>

      </motion.div>

    </section>
  );
}