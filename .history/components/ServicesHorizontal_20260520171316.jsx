"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

// Constants
const CARDS = [
  {
    id: 1,
    title: "Brand Strategy",
    description: "Crafting identities that dominate markets with data-driven insights.",
    image: "/caseStudy/Brand%20Strategy.png",
    category: "Strategy",
  },
  {
    id: 2,
    title: "SEO Optimization",
    description: "Boost visibility and rank higher with advanced algorithms.",
    image: "/caseStudy/SEO.png",
    category: "Marketing",
  },
  {
    id: 3,
    title: "Social Media",
    description: "Build engagement and community across all major platforms.",
    image: "/caseStudy/Social%20media%20marketing.jpg",
    category: "Marketing",
  },
  {
    id: 4,
    title: "Performance Ads",
    description: "Maximize ROI with precision-targeted advertising campaigns.",
    image: "/caseStudy/performance%20ads.png",
    category: "Advertising",
  },
  {
    id: 5,
    title: "Web Design",
    description: "Premium conversion-focused websites that drive results.",
    image: "/caseStudy/Web%20Development.png",
    category: "Design",
  },
  {
    id: 6,
    title: "E-Commerce Growth",
    description: "Scale your online revenue channels with proven strategies.",
    image: "/caseStudy/Ecommerce%20Growth.png",
    category: "Growth",
  },
  {
    id: 7,
    title: "Analytics & Data",
    description: "Make decisions backed by real insights and predictive analytics.",
    image: "/caseStudy/Analytics%20%26%20data.png",
    category: "Analytics",
  },
];

// Animation configuration
const ANIMATION_CONFIG = {
  type: "spring",
  stiffness: 95,
  damping: 18,
  mass: 0.95,
};

export default function ServicesStacked() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollIndex = useTransform(scrollYProgress, [0, 1], [0, CARDS.length - 1]);

  useMotionValueEvent(scrollIndex, "change", (latest) => {
    const newIndex = Math.round(latest);
    if (newIndex !== activeIndex) {
      setIsAnimating(true);
      setActiveIndex(newIndex);
      setTimeout(() => setIsAnimating(false), 300);
    }
  });

  const getCircularDistance = useCallback(
    (cardIndex) => {
      const total = CARDS.length;
      let diff = cardIndex - activeIndex;
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;
      return diff;
    },
    [activeIndex]
  );

  const getCardStyles = useCallback(
    (distanceFromActive) => {
      const depth = Math.abs(distanceFromActive);
      const isVisible = depth <= 2;
      const isActive = distanceFromActive === 0;
      const isSideCard = Math.abs(distanceFromActive) === 1;
      
      return {
        x: distanceFromActive * 290,
        y: Math.sin((Math.PI / 4) * Math.min(depth, 2)) * 120,
        z: -Math.pow(depth, 1.25) * 320,
        scale: isActive ? 1 : isSideCard ? 0.89 : 0.72,
        rotateY: distanceFromActive * -30,
        rotateZ: distanceFromActive * -2.5,
        opacity: isVisible 
          ? isActive ? 1 : isSideCard ? 0.62 : 0.2 
          : 0,
        filter: isVisible ? `blur(${depth * 1.35}px)` : "blur(11px)",
        zIndex: CARDS.length - depth,
      };
    },
    []
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowLeft" && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      } else if (e.key === "ArrowRight" && activeIndex < CARDS.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    },
    [activeIndex]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[450vh] md:h-[600vh] bg-gradient-to-b from-[#FFF8F5] to-[#FFF0E8]"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Interactive services showcase"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Header */}
        <header className="absolute left-4 sm:left-6 md:left-10 top-12 md:top-20 z-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm uppercase tracking-wider text-[#0d2d47]/60">
              Our Expertise
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0d2d47] mt-2">
              Case Studies
            </h1>
            <p className="text-[#0d2d47]/70 mt-4 max-w-md">
              Discover how we&apos;ve transformed businesses through innovative solutions
            </p>
          </motion.div>
        </header>

        {/* Progress Indicator */}
        <div className="absolute right-4 sm:right-6 md:right-10 top-12 md:top-20 z-20">
          <div className="text-right">
            <span className="text-2xl font-bold text-[#0d2d47]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-[#0d2d47]/40 text-lg">
              /{String(CARDS.length).padStart(2, "0")}
            </span>
          </div>
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#0d2d47]/20 flex items-center justify-center mt-2">
            <motion.div
              className="w-2 h-2 bg-[#0d2d47] rounded-full"
              animate={{ scale: isAnimating ? [1, 1.5, 1] : 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Cards Container */}
        <div
          className="relative w-full flex justify-center items-center px-4"
          style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
          role="region"
          aria-label="Service cards carousel"
        >
          {CARDS.map((card) => {
            const distance = getCircularDistance(card.id - 1);
            const styles = getCardStyles(distance);
            
            return (
              <motion.article
                key={card.id}
                className="absolute w-[92vw] max-w-[900px] h-[360px] md:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  ...styles,
                  zIndex: styles.zIndex,
                }}
                animate={{
                  x: styles.x,
                  y: styles.y,
                  z: styles.z,
                  scale: styles.scale,
                  rotateY: styles.rotateY,
                  rotateZ: styles.rotateZ,
                  opacity: styles.opacity,
                  filter: styles.filter,
                }}
                transition={ANIMATION_CONFIG}
                aria-hidden={styles.opacity === 0}
                role="group"
                aria-label={`${card.title} service card`}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <Image
                    src={card.image}
                    alt={`${card.title} background`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 92vw, 900px"
                    priority={card.id === activeIndex + 1}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 md:p-10">
                  <div className="flex justify-between items-start">
                    <span className="text-white/40 text-sm font-mono">
                      {String(card.id).padStart(2, "0")}
                    </span>
                    <span className="text-white/60 text-xs px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                      {card.category}
                    </span>
                  </div>

                  <div>
                    <motion.h2
                      className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {card.title}
                    </motion.h2>

                    <motion.p
                      className="text-white/80 max-w-md text-sm md:text-base leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {card.description}
                    </motion.p>
                  </div>

                  <Link
                    href="/case-studies"
                    className="group inline-flex items-center gap-2 bg-white text-[#0d2d47] px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300 w-fit shadow-lg hover:shadow-xl"
                  >
                    <span>View Case Study</span>
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Navigation Dots (Mobile) */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 md:hidden z-20">
          {CARDS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === activeIndex
                  ? "w-8 h-2 bg-[#0d2d47]"
                  : "w-2 h-2 bg-[#0d2d47]/30 hover:bg-[#0d2d47]/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}