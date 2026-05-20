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

  const index = useTransform(scrollYProgress, [0, 1], [0, cards.length - 1]);

  useMotionValueEvent(index, "change", (latest) => {
    setActiveIndex(latest);
  });

  const total = cards.length;
  const stepDeg = 360 / total;
  const ringRotation = (activeIndex / total) * 360;

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
          style={{ perspective: "2400px", transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="relative h-[360px] md:h-[420px] w-full"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: -ringRotation }}
            transition={{ type: "spring", stiffness: 90, damping: 24, mass: 1 }}
          >
            {cards.map((card, i) => {
              const cardAngle = i * stepDeg;
              const theta = ((cardAngle - ringRotation) * Math.PI) / 180;
              const frontness = (Math.cos(theta) + 1) / 2;
              const isCenter = frontness > 0.96;

              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `rotateY(${cardAngle}deg) translateZ(620px)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                <motion.div
                  className="w-[40vw] max-w-[760px] h-[320px] md:h-[380px] p-6 md:p-10 flex flex-col justify-between text-white overflow-hidden"
                  style={{
                    transformStyle: "preserve-3d",
                    backgroundImage: `linear-gradient(rgba(3, 8, 20, 0.58), rgba(3, 8, 20, 0.58)), url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "54px / 24px",
                  }}
                  animate={{
                    opacity: 0.18 + frontness * 0.82,
                    scale: 0.74 + frontness * 0.26,
                    filter: `blur(${(1 - frontness) * 1.8}px)`,
                    boxShadow:
                      frontness > 0.9
                        ? "0 30px 70px rgba(2, 10, 30, 0.45)"
                        : "0 14px 36px rgba(2, 10, 30, 0.2)",
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={`${isCenter ? "text-white/50" : "text-white/20"} text-lg`}>0{i + 1}</div>

                  <div className={isCenter ? "opacity-100 transition-opacity duration-200" : "opacity-0 transition-opacity duration-200"}>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
                      {card.title}
                    </h3>

                    <p className="text-white/70 max-w-md text-sm md:text-base">
                      {card.desc}
                    </p>
                  </div>

                  <Link
                    href="/case-studies"
                    className={`${isCenter ? "opacity-100" : "opacity-0"} bg-white text-black px-6 py-3 rounded-full text-sm w-fit transition-opacity duration-200`}
                  >
                    View Case Study ?
                  </Link>
                </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
