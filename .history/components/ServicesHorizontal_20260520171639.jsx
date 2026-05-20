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
    color: "from-purple-600/20 to-blue-600/20",
  },
  {
    id: 2,
    title: "SEO Optimization",
    description: "Boost visibility and rank higher with advanced algorithms.",
    image: "/caseStudy/SEO.png",
    color: "from-green-600/20 to-teal-600/20",
  },
  {
    id: 3,
    title: "Social Media",
    description: "Build engagement and community across all major platforms.",
    image: "/caseStudy/Social%20media%20marketing.jpg",
    color: "from-pink-600/20 to-rose-600/20",
  },
  {
    id: 4,
    title: "Performance Ads",
    description: "Maximize ROI with precision-targeted advertising campaigns.",
    image: "/caseStudy/performance%20ads.png",
    color: "from-orange-600/20 to-red-600/20",
  },
  {
    id: 5,
    title: "Web Design",
    description: "Premium conversion-focused websites that drive results.",
    image: "/caseStudy/Web%20Development.png",
    color: "from-indigo-600/20 to-purple-600/20",
  },
  {
    id: 6,
    title: "E-Commerce Growth",
    description: "Scale your online revenue channels with proven strategies.",
    image: "/caseStudy/Ecommerce%20Growth.png",
    color: "from-emerald-600/20 to-green-600/20",
  },
  {
    id: 7,
    title: "Analytics & Data",
    description: "Make decisions backed by real insights and predictive analytics.",
    image: "/caseStudy/Analytics%20%26%20data.png",
    color: "from-cyan-600/20 to-blue-600/20",
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

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        
        {/* Animated background particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500" />
        </div>

        {/* Header */}
        <div className="absolute top-0 left-0 right-0 p-8 md:p-12 z-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm uppercase tracking-wider text-purple-400 font-semibold">
                Our Services
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-4">
                What We Do Best
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-6" />
            </motion.div>
          </div>
        </div>

        {/* Progress counter */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20">
          <div className="text-right">
            <div className="text-5xl md:text-7xl font-bold text-white/10">
              {String(activeIndex + 1).padStart(2, "0")}
            </div>
            <div className="text-sm text-white/40 mt-1">
              / {String(services.length).padStart(2, "0")}
            </div>
          </div>
        </div>

        {/* Cards container */}
        <div className="relative w-full max-w-7xl mx-auto px-4" style={{ perspective: "1200px" }}>
          {services.map((service, index) => {
            const distance = index - activeIndex;
            const isActive = distance === 0;
            const isVisible = Math.abs(distance) <= 2;
            
            // Calculate position
            const xOffset = distance * 380;
            const scale = isActive ? 1 : Math.abs(distance) === 1 ? 0.85 : 0.7;
            const opacity = isActive ? 1 : Math.abs(distance) === 1 ? 0.6 : 0;
            const blur = isActive ? 0 : Math.abs(distance) * 4;
            const zIndex = services.length - Math.abs(distance);
            
            return (
              <motion.div
                key={service.id}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl"
                style={{
                  x: xOffset,
                  zIndex,
                }}
                animate={{
                  x: xOffset,
                  scale,
                  opacity,
                  filter: `blur(${blur}px)`,
                  rotateY: distance * -15,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  mass: 0.8,
                }}
              >
                {isVisible && (
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image side */}
                      <div className="relative h-64 md:h-full min-h-[320px]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          priority={isActive}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color}`} />
                      </div>
                      
                      {/* Content side */}
                      <div className="p-8 md:p-10 flex flex-col justify-between">
                        <div>
                          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs mb-6">
                            {String(service.id).padStart(2, "0")}
                          </div>
                          
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {service.title}
                          </h3>
                          
                          <p className="text-white/60 leading-relaxed mb-8">
                            {service.description}
                          </p>
                        </div>
                        
                        <Link
                          href={`/services/${service.id}`}
                          className="group inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full w-fit transition-all duration-300"
                        >
                          <span>Learn More</span>
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Navigation indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                const target = document.querySelector(`#service-${idx}`);
                target?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`transition-all duration-300 rounded-full ${
                idx === activeIndex
                  ? "w-12 h-1.5 bg-purple-500"
                  : "w-6 h-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-8 z-20 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>Scroll</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}