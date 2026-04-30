//marketing-website\components\Hero.jsx
"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // reset when leaving
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <motion.img
        src="/Hero-image-desktop.avif"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
        variants={{
          hidden: { scale: 1.1 },
          visible: { scale: 1 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 6, ease: "easeOut" }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* VERTICAL LINES */}
      <div className="absolute inset-0 flex justify-between px-10 pointer-events-none">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-[1px] bg-white/20 h-full" />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">

        {/* TOP TEXT */}
        <motion.div
          className="flex justify-between w-full max-w-5xl mb-6 text-sm text-white/80"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p>DIGITAL MARKETING AGENCY</p>
          <p>BASED IN MUMBAI</p>
        </motion.div>

        {/* TITLE */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          NOVATECH <br /> MARKETING
        </motion.h1>

        {/* CTA */}
        <motion.button
          className="mt-8 px-6 py-2 cursor-pointer rounded-full border border-white/50 text-white"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1, delay: 0.7 }}
          whileHover={{
            scale: 1.08,
            backgroundColor: "#ffffff",
            color: "#000000",
          }}
          whileTap={{ scale: 0.95 }}
        >
          TALK TO US
        </motion.button>

      </div>
    </section>
  );
}