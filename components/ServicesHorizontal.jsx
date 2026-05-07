"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

export default function ServicesStacked() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cards = [
    {
      title: "Brand Strategy",
      desc: "Crafting identities that dominate markets.",
      color: "#0d2d47",
    },
    {
      title: "SEO Optimization",
      desc: "Boost visibility and rank higher.",
      color: "#111827",
    },
    {
      title: "Social Media",
      desc: "Build engagement and community.",
      color: "#1f2937",
    },
    {
      title: "Performance Ads",
      desc: "Maximize ROI with precision.",
      color: "#111827",
    },
    {
      title: "Web Design",
      desc: "Premium conversion-focused websites.",
      color: "#0d2d47",
    },
    {
      title: "E-Commerce Growth",
      desc: "Scale your online revenue channels.",
      color: "#1e293b",
    },
    {
      title: "Analytics & Data",
      desc: "Make decisions backed by real insights.",
      color: "#020617",
    },
  ];

  const index = useTransform(
    scrollYProgress,
    [0, 1],
    [0, cards.length - 1]
  );

  useMotionValueEvent(index, "change", (latest) => {
    setActiveIndex(Math.round(latest));
  });

  return (
    <section ref={containerRef} className="relative h-[450vh] md:h-[600vh] bg-[#FFF8F5]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute left-4 sm:left-6 md:left-10 top-12 md:top-20 z-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#0d2d47]">
            Case Studies
          </h2>
        </div>

        <div className="relative w-full flex justify-center items-center">
          {cards.map((card, i) => {
            const isActive = i <= activeIndex;

            return (
              <motion.div
                key={i}
                className="absolute w-[92vw] max-w-[900px] h-[360px] md:h-[420px] rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col justify-between shadow-2xl text-white"
                style={{
                  background: card.color,
                  zIndex: i,
                }}
                animate={{
                  y: isActive ? (activeIndex - i) * 20 : 100,
                  scale: isActive ? 1 - (activeIndex - i) * 0.04 : 0.9,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <div className="text-white/50 text-lg">0{i + 1}</div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
                    {card.title}
                  </h3>

                  <p className="text-white/70 max-w-md text-sm md:text-base">
                    {card.desc}
                  </p>
                </div>

                <Link href="/case-studies" className="bg-white text-black px-6 py-3 rounded-full text-sm w-fit">
                  View Case Study ?
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
