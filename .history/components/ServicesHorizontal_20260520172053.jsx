"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Brand Strategy",
    description: "Crafting identities that dominate markets with data-driven insights.",
    image: "/caseStudy/Brand%20Strategy.png",
  },
  {
    id: 2,
    title: "SEO Optimization",
    description: "Boost visibility and rank higher with advanced algorithms.",
    image: "/caseStudy/SEO.png",
  },
  {
    id: 3,
    title: "Social Media",
    description: "Build engagement and community across all major platforms.",
    image: "/caseStudy/Social%20media%20marketing.jpg",
  },
  {
    id: 4,
    title: "Performance Ads",
    description: "Maximize ROI with precision-targeted advertising campaigns.",
    image: "/caseStudy/performance%20ads.png",
  },
  {
    id: 5,
    title: "Web Design",
    description: "Premium conversion-focused websites that drive results.",
    image: "/caseStudy/Web%20Development.png",
  },
  {
    id: 6,
    title: "E-Commerce Growth",
    description: "Scale your online revenue channels with proven strategies.",
    image: "/caseStudy/Ecommerce%20Growth.png",
  },
  {
    id: 7,
    title: "Analytics & Data",
    description: "Make decisions backed by real insights and predictive analytics.",
    image: "/caseStudy/Analytics%20%26%20data.png",
  },
];

export default function ServicesStacked() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollIndex = useTransform(scrollYProgress, [0, 1], [0, services.length - 1]);

  useMotionValueEvent(scrollIndex, "change", (latest) => {
    setActiveIndex(Math.round(latest));
  });

  const getCircularDistance = (cardIndex) => {
    const total = services.length;
    let diff = cardIndex - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Header */}
        <div className="absolute top-0 left-0 right-0 p-8 md:p-12 z-30">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <span className="text-sm uppercase tracking-wider text-purple-400 font-semibold">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-3">Featured Work</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-4" />
          </motion.div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-30">
          <motion.div
            key={activeIndex}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-right"
          >
            <div className="text-6xl md:text-8xl font-bold text-white/5">
              {String(activeIndex + 1).padStart(2, "0")}
            </div>
            <div className="text-sm text-purple-400/60 mt-1 font-mono">
              / {String(services.length).padStart(2, "0")}
            </div>
          </motion.div>
        </div>

        {/* Curved Cards Container */}
        <div
          className="relative w-full flex justify-center items-center"
          style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
        >
          {services.map((service, i) => {
            const distanceFromActive = getCircularDistance(i);
            const isVisible = Math.abs(distanceFromActive) <= 2;
            const depth = Math.abs(distanceFromActive);
            const isSideCard = Math.abs(distanceFromActive) === 1;
            
            // Curved path calculations
            const curveX = distanceFromActive * 320;
            const curveY = Math.sin((Math.PI / 4) * Math.min(depth, 2)) * 100;
            const curveZ = -Math.pow(depth, 1.25) * 280;
            const scale = distanceFromActive === 0 ? 1 : isSideCard ? 0.88 : 0.7;
            const rotateY = distanceFromActive * -25;
            const rotateZ = distanceFromActive * -2;
            const opacity = isVisible 
              ? distanceFromActive === 0 ? 1 : isSideCard ? 0.65 : 0.15 
              : 0;
            const blur = isVisible ? depth * 1.5 : 12;
            const zIndex = services.length - depth;

            return (
              <motion.div
                key={service.id}
                className="absolute w-[90vw] max-w-[500px] md:max-w-[600px] lg:max-w-[700px] rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  zIndex,
                }}
                animate={{
                  x: curveX,
                  y: curveY,
                  z: curveZ,
                  scale,
                  rotateY,
                  rotateZ,
                  opacity,
                  filter: `blur(${blur}px)`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 0.9,
                }}
                onClick={() => {
                  const element = containerRef.current;
                  const scrollHeight = element.scrollHeight;
                  const targetScroll = (i / (services.length - 1)) * scrollHeight;
                  element.scrollTo({ top: targetScroll, behavior: "smooth" });
                }}
              >
                {/* Card Content */}
                <div className="relative h-[480px] md:h-[520px] bg-gradient-to-br from-gray-900 to-gray-950">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover opacity-40"
                      sizes="(max-width: 768px) 90vw, 700px"
                      priority={distanceFromActive === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
                    {/* Number */}
                    <div className="flex justify-end">
                      <span className="text-6xl md:text-7xl font-bold text-white/10">
                        {String(service.id).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-4">
                      <motion.h3 
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: distanceFromActive === 0 ? 1 : 0.7, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {service.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-white/60 text-sm md:text-base leading-relaxed max-w-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: distanceFromActive === 0 ? 0.8 : 0.5, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {service.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: distanceFromActive === 0 ? 1 : 0, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Link
                          href="/case-studies"
                          className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-white text-gray-900 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300 group"
                        >
                          <span>Explore</span>
                          <svg 
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  {/* Glow Effect on Active Card */}
                  {distanceFromActive === 0 && (
                    <div className="absolute inset-0 rounded-2xl pointer-events-none">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 animate-pulse" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30 md:hidden">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                const element = containerRef.current;
                const scrollHeight = element.scrollHeight;
                const targetScroll = (idx / (services.length - 1)) * scrollHeight;
                element.scrollTo({ top: targetScroll, behavior: "smooth" });
              }}
              className={`transition-all duration-300 rounded-full ${
                idx === activeIndex
                  ? "w-8 h-1.5 bg-purple-500"
                  : "w-4 h-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs text-white/40 uppercase tracking-wider">Scroll</span>
          <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}