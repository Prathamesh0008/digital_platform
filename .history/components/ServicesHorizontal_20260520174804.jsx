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
      image: "/caseStudy/Brand%20Strategy.png",
    },
    {
      title: "SEO Optimization",
      desc: "Boost visibility and rank higher.",
      image: "/caseStudy/SEO.png",
    },
    {
      title: "Social Media",
      desc: "Build engagement and community.",
      image: "/caseStudy/Social%20media%20marketing.jpg",
    },
    {
      title: "Performance Ads",
      desc: "Maximize ROI with precision.",
      image: "/caseStudy/performance%20ads.png",
    },
    {
      title: "Web Design",
      desc: "Premium conversion-focused websites.",
      image: "/caseStudy/Web%20Development.png",
    },
    {
      title: "E-Commerce Growth",
      desc: "Scale your online revenue channels.",
      image: "/caseStudy/Ecommerce%20Growth.png",
    },
    {
      title: "Analytics & Data",
      desc: "Make decisions backed by real insights.",
      image: "/caseStudy/Analytics%20%26%20data.png",
    },
  ];

  const index = useTransform(
    scrollYProgress,
    [0, 1],
    [0, cards.length - 1]
  );

  useMotionValueEvent(index, "change", (latest) => {
    setActiveIndex(latest);
  });

  return (
    <section ref={containerRef} className="relative h-[450vh] md:h-[600vh] bg-[#FFF8F5]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute left-4 sm:left-6 md:left-10 top-12 md:top-20 z-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#0d2d47]">
            Case Studies
          </h2>
        </div>

        <div
          className="relative w-full flex justify-center items-center"
          style={{ perspective: "2200px", transformStyle: "preserve-3d" }}
        >
          {cards.map((card, i) => {
            const total = cards.length;
            const rotation = (activeIndex / total) * Math.PI * 2;
            const baseAngle = (i / total) * Math.PI * 2;
            const theta = baseAngle - rotation;

            const radiusX = 700;
            const radiusZ = 620;
            const curveX = Math.sin(theta) * radiusX;
            const curveZ = Math.cos(theta) * radiusZ - radiusZ;
            const curveY = 0;

            const frontness = (Math.cos(theta) + 1) / 2;
            const isVisible = frontness > 0.16;
            const isCenter = frontness > 0.96;
            const zOrder = Math.round(frontness * 100);
            const angleDeg = (theta * 180) / Math.PI;

            return (
              <motion.div
                key={i}
                className="absolute w-[5vw] max-w-[760px] h-[340px] md:h-[390px] p-6 md:p-10 flex flex-col justify-between shadow-2xl text-white overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(rgba(3, 8, 20, 0.58), rgba(3, 8, 20, 0.58)), url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  zIndex: zOrder,
                  borderRadius: "64px / 30px",
                }}
                animate={{
                  x: curveX,
                  y: curveY,
                  z: curveZ,
                  scale: 0.72 + frontness * 0.28,
                  rotateY: -angleDeg * 1.2,
                  rotateX: (1 - frontness) * -3,
                  rotateZ: (1 - frontness) * -1.5,
                  opacity: isVisible ? 0.22 + frontness * 0.78 : 0,
                  filter: isVisible ? `blur(${(1 - frontness) * 2.2}px)` : "blur(5px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 20,
                  mass: 0.9,
                }}
              >
                <div className={`${isCenter ? "text-white/50" : "text-white/20"} text-lg`}>0{i + 1}</div>

                <div className={isCenter ? "opacity-100" : "opacity-0"}>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
                    {card.title}
                  </h3>

                  <p className="text-white/70 max-w-md text-sm md:text-base">
                    {card.desc}
                  </p>
                </div>

                <Link
                  href="/case-studies"
                  className={`${isCenter ? "opacity-100" : "opacity-0"} bg-white text-black px-6 py-3 rounded-full text-sm w-fit transition-opacity`}
                >
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
