//digital_platform\components\ServicesStacked.jsx
"use client";
 
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
 
const cards = [
  {
    title: "Brand Strategy",
    desc: "Crafting identities that dominate markets.",
    image: "/caseStudy/Brand%20Strategy.png",
    href: "/case-studies/brand-strategy",
  },
  {
    title: "SEO Optimization",
    desc: "Boost visibility and rank higher.",
    image: "/caseStudy/SEO.png",
    href: "/case-studies/seo-optimization",
  },
  {
    title: "Social Media",
    desc: "Build engagement and community.",
    image: "/caseStudy/Social%20media%20marketing.jpg",
    href: "/case-studies/social-media",
  },
  {
    title: "Performance Ads",
    desc: "Maximize ROI with precision.",
    image: "/caseStudy/performance%20ads.png",
    href: "/case-studies/performance-ads",
  },
  {
    title: "Web Design",
    desc: "Premium conversion-focused websites.",
    image: "/caseStudy/Web%20Development.png",
    href: "/case-studies/web-design",
  },
  {
    title: "E-Commerce Growth",
    desc: "Scale your online revenue channels.",
    image: "/caseStudy/Ecommerce%20Growth.png",
    href: "/case-studies/ecommerce-growth",
  },
  {
    title: "Analytics & Data",
    desc: "Make decisions backed by real insights.",
    image: "/caseStudy/Analytics%20%26%20data.png",
    href: "/case-studies/analytics-data",
  },
];
 
export default function ServicesStacked() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1440);
 
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
 
  const index = useTransform(scrollYProgress, [0, 1], [0, cards.length - 1]);
 
  useMotionValueEvent(index, "change", (latest) => {
    setActiveIndex(latest);
  });
 
  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
 
    onResize();
    window.addEventListener("resize", onResize);
 
    return () => window.removeEventListener("resize", onResize);
  }, []);
 
  const total = cards.length;
  const stepDeg = 360 / total;
  const ringRotation = (activeIndex / total) * 360;
 
  const ringRadius =
    viewportWidth < 640
      ? 240
      : viewportWidth < 768
      ? 320
      : viewportWidth < 1024
      ? 450
      : 620;
 
  return (
    <section
      ref={containerRef}
      className="relative h-[450vh] bg-[#FFF8F5] md:h-[600vh]"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute left-4 top-10 z-20 sm:left-6 md:left-10 md:top-16">
          <h2 className="text-3xl font-medium text-[#0d2d47] sm:text-4xl md:text-5xl">
            Case Studies
          </h2>
        </div>
 
        <div
          className="relative flex w-full items-center justify-center"
          style={{
            perspective: "2400px",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            className="relative h-[280px] w-full sm:h-[320px] md:h-[360px] lg:h-[420px]"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: -ringRotation }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 24,
              mass: 1,
            }}
          >
            {cards.map((card, i) => {
              const cardAngle = i * stepDeg;
              const theta = ((cardAngle - ringRotation) * Math.PI) / 180;
              const frontness = (Math.cos(theta) + 1) / 2;
              const isCenter = frontness > 0.96;
 
              return (
                <div
                  key={card.title}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `rotateY(${cardAngle}deg) translateZ(${ringRadius}px)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.div
                    className="flex h-[220px] w-[86vw] max-w-[760px] flex-col justify-between overflow-hidden p-4 text-white sm:h-[260px] sm:w-[74vw] sm:p-5 md:h-[320px] md:w-[60vw] md:p-7 lg:h-[380px] lg:w-[35vw] lg:p-10"
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
                    <div
                      className={`text-sm sm:text-base md:text-lg ${
                        isCenter ? "text-white/50" : "text-white/20"
                      }`}
                    >
                      0{i + 1}
                    </div>
 
                    <div
                      className={
                        isCenter
                          ? "opacity-100 transition-opacity duration-200"
                          : "opacity-0 transition-opacity duration-200"
                      }
                    >
                      <h3 className="mb-2 text-lg font-semibold sm:mb-3 sm:text-xl md:mb-4 md:text-2xl lg:text-3xl">
                        {card.title}
                      </h3>
 
                      <p className="max-w-md text-xs text-white/70 sm:text-sm md:text-base">
                        {card.desc}
                      </p>
                    </div>
 
                    <Link
                      href={card.href}
                      className={`w-fit rounded-full bg-white px-4 py-2 text-xs text-black transition-opacity duration-200 sm:px-5 sm:py-2.5 sm:text-sm md:px-6 md:py-3 ${
                        isCenter ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      View Case Study →
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
 