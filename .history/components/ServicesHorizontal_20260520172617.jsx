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
    setActiveIndex(Math.round(latest));
  });

  const getCircularDistance = (cardIndex) => {
    const total = cards.length;
    let diff = cardIndex - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

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
          style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
        >
          {cards.map((card, i) => {
            const distanceFromActive = getCircularDistance(i);
            const isVisible = distanceFromActive >= -3 && distanceFromActive <= 3;
            const depth = Math.abs(distanceFromActive);
            const zOrder = cards.length - depth;
            const isNearSide = depth === 1;
            const isFarSide = depth >= 2;

            const curveX =
              distanceFromActive === 0
                ? 0
                : distanceFromActive === -1
                ? -310
                : distanceFromActive === 1
                ? 310
                : distanceFromActive === -2
                ? -540
                : distanceFromActive === 2
                ? 540
                : distanceFromActive < 0
                ? -670
                : 670;

            const curveY =
              depth === 0 ? 0 : depth === 1 ? 12 : depth === 2 ? 28 : 44;
            const curveZ =
              depth === 0 ? 0 : depth === 1 ? -120 : depth === 2 ? -320 : -560;
            const rotateY =
              distanceFromActive === 0
                ? 0
                : distanceFromActive === -1
                ? 18
                : distanceFromActive === 1
                ? -18
                : distanceFromActive === -2
                ? 44
                : distanceFromActive === 2
                ? -44
                : distanceFromActive < 0
                ? 74
                : -74;

            return (
              <motion.div
                key={i}
                className="absolute w-[50vw] max-w-[760px] h-[340px] md:h-[390px] rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col justify-between shadow-2xl text-white"
                style={{
                  backgroundImage: `linear-gradient(rgba(3, 8, 20, 0.58), rgba(3, 8, 20, 0.58)), url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  zIndex: zOrder,
                }}
                animate={{
                  x: curveX,
                  y: curveY,
                  z: curveZ,
                  scale: depth === 0 ? 1 : isNearSide ? 0.91 : isFarSide ? 0.82 : 0.76,
                  rotateY,
                  rotateZ: distanceFromActive * -1.4,
                  opacity: isVisible ? (depth === 0 ? 1 : isNearSide ? 0.88 : depth === 2 ? 0.62 : 0.4) : 0,
                  filter: isVisible ? `blur(${depth === 0 ? 0 : depth === 1 ? 0.4 : depth === 2 ? 1.2 : 2}px)` : "blur(5px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 88,
                  damping: 20,
                  mass: 1.05,
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
