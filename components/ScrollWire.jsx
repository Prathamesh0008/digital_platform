"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollWire() {
  const { scrollYProgress } = useScroll();

  // 🔥 X + Y positions mapped to curve manually
  const x = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ["0%", "-40%", "20%", "0%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">

      {/* 🔥 RIGHT SIDE CONTAINER */}
      <div className="absolute right-10 top-0 h-full w-[200px]">

        {/* 🔥 SVG PATH */}
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M80,0 C90,20 60,40 85,60 C95,75 70,90 80,100"
            stroke="white"
            strokeWidth="0.3"
            fill="transparent"
            opacity="0.6"
          />
        </svg>

        {/* 🔥 BALL FOLLOWING CURVE */}
        <motion.div
          style={{
            top: y,
            x: x,
          }}
          className="absolute w-4 h-4 bg-white rounded-full shadow-lg"
        />

      </div>
    </div>
  );
}