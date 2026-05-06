"use client";

import { motion } from "framer-motion";

export default function PortfolioHeroLight() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <motion.img
        src="/Zestor-project-desktop.avif"
        alt="Zestor Project"
        className="absolute inset-0 h-full w-full object-cover"
        animate={{ scale: [1.03, 1.08, 1.03] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,10,22,0.30),rgba(7,10,22,0.55),rgba(7,10,22,0.82))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(90,126,255,0.35),transparent_42%)]" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute left-4 right-4 top-24 z-10 flex justify-between text-xs uppercase tracking-[0.18em] text-white/80 sm:left-6 sm:right-6 sm:top-28 sm:text-sm"
      >
        <p>Our Work</p>
        <p className="text-right leading-tight">Campaigns</p>
      </motion.div>

      <div className="relative z-10 flex h-full items-end px-4 pb-16 sm:px-6 sm:pb-20 md:px-10">
        <div className="max-w-3xl text-white">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-xs uppercase tracking-[0.2em] text-white/70 sm:text-sm"
          >
            Branding • Product • 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-medium uppercase leading-[0.9] tracking-tight sm:text-5xl md:text-[90px] lg:text-[120px]"
          >
            Portfolio
            <br />
            Highlights
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-5 max-w-2xl text-sm text-white/85 sm:text-base md:text-lg"
          >
            A curated showcase of campaigns, brand films, and digital experiences
            crafted to turn attention into impact.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 cursor-pointer rounded-full border border-white/45 bg-white/10 px-7 py-3 transition duration-300 hover:bg-white hover:text-black"
          >
            View Projects ?
          </motion.button>
        </div>
      </div>
    </section>
  );
}
