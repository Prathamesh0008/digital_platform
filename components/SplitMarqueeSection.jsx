"use client";

import { motion } from "framer-motion";

export default function SplitMarqueeSection() {
  const marqueeItems = [
    "Global Digital Marketing",
    "SEO Excellence",
    "Audience Targeting",
    "Performance Campaigns",
    "Brand Growth",
  ];

  return (
    <section className="w-full overflow-hidden">
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-scroll {
          animation: marquee 25s linear infinite;
        }
      `}</style>

      {/* 🔥 SOFT MARQUEE */}
      <div className="bg-[#EAEBDB] border-b border-black/10 overflow-hidden">
        <div
          className="flex whitespace-nowrap py-3 sm:py-4 text-[#0d2d47] font-medium text-base sm:text-lg marquee-scroll"
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-5 sm:mx-8 flex items-center gap-3">
              ✦ {item}
            </span>
          ))}
        </div>
      </div>

      {/* 🔥 MAIN SECTION (SOFT GRADIENT LIKE NextSection) */}
      <div
        className="min-h-[80vh]"
        style={{
          background:
             "linear-gradient(to top, #EAEBDB, #C4CFE3, #8EA5F1, #7392FB)",
        }}
      >

        {/* 🔥 LEFT */}
        <div className="mx-auto grid min-h-[80vh] max-w-[1400px] md:grid-cols-2">
       <div className="flex min-h-[80vh] flex-col items-center justify-center px-5 py-14 text-center text-[#0d2d47] sm:px-8 sm:py-20 md:px-10">

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-[80px] lg:text-[90px] leading-[1.1] font-medium"
          >
            Leading <br /> Digital Marketing <br /> Agency Worldwide
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-[#0d2d47]/70 max-w-md"
          >
            We help brands establish, strengthen, and scale their online presence
            with transparent, measurable, and performance-focused execution.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 rounded-full bg-[#0d2d47] text-white hover:bg-[#5A7EFF] transition"
          >
            Explore Strategy
          </motion.button>

        </div>

        {/* 🔥 RIGHT */}
        <div className="flex items-center justify-center px-5 sm:px-8 md:px-10 py-14 sm:py-20">

          <motion.p
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-[#0d2d47] text-base sm:text-lg md:text-xl max-w-xl text-center leading-relaxed"
          >
            Behind every great result is a seamless workflow: planning, strategy,
            execution, tracking, refinement, and repeat. This cycle keeps your
            SEO, social, content, and paid campaigns improving with every phase.
          </motion.p>

        </div>

      </div>
      </div>
    </section>
  );
}
