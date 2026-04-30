"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* 🔥 SPLINE (REAL CONTROL ENABLED) */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-gr7nouhE7TXWGE9GLpmKbqhE/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="h-full w-full"
          title="Nexbot robot character concept"
        />
      </div>

      {/* 🔥 LIGHT OVERLAY */}
     

      {/* 🔥 CONTENT */}
      {/* <div className="relative z-20 h-full flex justify-center items-center text-white">

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-6 py-2 rounded-full border border-white/50"
        >
          TALK TO US
        </motion.button>

      </div> */}
    </section>
  );
}
