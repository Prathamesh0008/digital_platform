// marketing-website/components/AboutMission.jsx
"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AboutMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen px-10 py-32 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #EAEBDB, #E1E4DD, #C4CFE3)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* MISSION STATEMENT */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1 }}
          className="mb-32"
        >
          <p className="uppercase text-sm text-black/50 mb-6 tracking-wide">Our Mission</p>
          <h2 className="uppercase tracking-tight leading-[1.1] text-[50px] md:text-[80px] lg:text-[100px] font-medium max-w-5xl">
            To empower brands with <br />
            <span className="text-[#5A7EFF]">data-driven creativity</span> <br />
            that delivers measurable results.
          </h2>
        </motion.div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/20 pt-16">
          {[
            { number: "50+", label: "Happy Clients" },
            { number: "200+", label: "Projects Completed" },
            { number: "8+", label: "Years Experience" },
            { number: "15+", label: "Team Members" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-[#5A7EFF] mb-2">
                {stat.number}
              </div>
              <div className="text-black/60 uppercase text-sm tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* DIVIDER */}
        <motion.div
          className="mt-20 border-t border-black/20"
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1 }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </section>
  );
}