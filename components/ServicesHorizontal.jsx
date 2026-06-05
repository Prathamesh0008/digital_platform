// components/ServicesHorizontal.jsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ServicesStacked() {
  const [rotationDeg, setRotationDeg] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1440);
  const [isDragging, setIsDragging] = useState(false);

  const dragRef = useRef({ active: false, lastX: 0 });
  const shouldReduceMotion = useReducedMotion();

  const cards = [
    {
      title: "Brand Strategy",
      desc: "Crafting identities that dominate markets.",
      image: "/caseStudy/brand-strategy-500x320.png",
      href: "/case-studies/brand-strategy",
    },
    {
      title: "SEO Optimization",
      desc: "Boost visibility and rank higher.",
      image: "/caseStudy/seo-500x320.png",
      href: "/case-studies/seo-optimization",
    },
    {
      title: "Social Media",
      desc: "Build engagement and community.",
      image: "/caseStudy/social-media-marketing.png",
      href: "/case-studies/social-media",
    },
    {
      title: "Performance Ads",
      desc: "Maximize ROI with precision.",
      image: "/caseStudy/performance-ads.png",
      href: "/case-studies/performance-ads",
    },
    {
      title: "Web Design",
      desc: "Premium conversion-focused websites.",
      image: "/caseStudy/web-development-500x320.png",
      href: "/case-studies/web-design",
    },
    {
      title: "E-Commerce Growth",
      desc: "Scale your online revenue channels.",
      image: "/caseStudy/ecommerce-growth.png",
      href: "/case-studies/ecommerce-growth",
    },
    {
      title: "Analytics & Data",
      desc: "Make decisions backed by real insights.",
      image: "/caseStudy/analytics-data-500x320-blended.png",
      href: "/case-studies/analytics-data",
    },
  ];

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    onResize();

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Removed automatic rotation animation - was causing performance issues
  // Keep only drag interaction which is event-driven, not continuous

  const total = cards.length;
  const stepDeg = 360 / total;
  const isCompactLayout = viewportWidth < 1024;

  const ringRadius =
    viewportWidth < 390
      ? 260
      : viewportWidth < 480
      ? 285
      : viewportWidth < 640
      ? 330
      : viewportWidth < 768
      ? 400
      : viewportWidth < 1024
      ? 480
      : viewportWidth < 1280
      ? 560
      : 650;

const cardSize =
  viewportWidth < 390
    ? {
        height: "180px",
        width: "58vw",
        maxWidth: "220px",
        padding: "10px",
        radius: "20px",
      }
    : viewportWidth < 480
    ? {
        height: "195px",
        width: "56vw",
        maxWidth: "245px",
        padding: "11px",
        radius: "22px",
      }
    : viewportWidth < 640
    ? {
        height: "210px",
        width: "54vw",
        maxWidth: "270px",
        padding: "12px",
        radius: "24px",
      }
    : viewportWidth < 768
    ? {
        height: "235px",
        width: "44vw",
        maxWidth: "330px",
        padding: "14px",
        radius: "26px",
      }
    : viewportWidth < 1024
    ? {
        height: "270px",
        width: "34vw",
        maxWidth: "390px",
        padding: "16px",
        radius: "28px",
      }
    : {
        height: "320px",
        width: "26vw",
        maxWidth: "500px",
        padding: "26px",
        radius: "34px",
      };
  const isInteractiveTarget = (target) => {
    return target instanceof Element && Boolean(target.closest("a, button"));
  };

  const handlePointerDown = (e) => {
    if (isInteractiveTarget(e.target)) return;

    dragRef.current.active = true;
    dragRef.current.lastX = e.clientX;
    setIsDragging(true);

    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current.active) return;

    const deltaX = e.clientX - dragRef.current.lastX;
    dragRef.current.lastX = e.clientX;

    setRotationDeg((prev) => prev - deltaX * 0.35);
  };

  const handlePointerUp = (e) => {
    dragRef.current.active = false;
    setIsDragging(false);

    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  return (
    <section className="relative min-h-[560px] overflow-hidden bg-[#FFF8F5] sm:min-h-[640px] md:min-h-[760px] lg:min-h-screen">
      <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-[#19a6b5]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-160px] right-[-120px] h-[360px] w-[360px] rounded-full bg-[#0d2d47]/10 blur-3xl" />

      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className={`relative flex h-full min-h-[560px] select-none items-center justify-center overflow-hidden sm:min-h-[640px] md:min-h-[760px] lg:min-h-screen ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          touchAction: "pan-y",
          WebkitUserSelect: "none",
          userSelect: "none",
        }}
      >
        <div className="absolute left-1/2 top-8 z-20 w-full max-w-[1400px] -translate-x-1/2 px-4 sm:top-10 sm:px-6 md:top-14 md:px-10">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0d2d47] sm:text-4xl md:text-5xl lg:text-6xl">
            Case Studies
          </h2>
        </div>

        <div
          className="relative flex w-full items-center justify-center"
          style={{
            perspective:
              viewportWidth < 480
                ? "1000px"
                : viewportWidth < 768
                ? "1400px"
                : "2200px",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
          className="relative h-[220px] w-full sm:h-[250px] md:h-[300px] lg:h-[340px]"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: -rotationDeg }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 24,
              mass: 1,
            }}
          >
            {cards.map((card, i) => {
              const cardAngle = i * stepDeg;
              const theta = ((cardAngle - rotationDeg) * Math.PI) / 180;
              const frontness = (Math.cos(theta) + 1) / 2;
              const isCenter = frontness > 0.94;

              return (
                <div
                  key={card.title}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotateY(${cardAngle}deg) translateZ(${ringRadius}px)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.div
                    className="relative flex flex-col justify-end overflow-hidden text-white"
                    style={{
                      height: cardSize.height,
                      width: cardSize.width,
                      maxWidth: cardSize.maxWidth,
                      padding: cardSize.padding,
                      borderRadius: cardSize.radius,
                      transformStyle: "preserve-3d",
                      backgroundColor: "#ffffff",
                      backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
                    }}
                    animate={{
                      opacity: (isCompactLayout ? 0.08 : 0.24) + frontness * (isCompactLayout ? 0.92 : 0.76),
                      scale: (isCompactLayout ? 0.68 : 0.78) + frontness * (isCompactLayout ? 0.32 : 0.22),
                      filter: `blur(${(1 - frontness) * (isCompactLayout ? 1.8 : 1.2)}px)`,
                      boxShadow:
                        frontness > 0.9
                          ? "0 26px 70px rgba(2, 10, 30, 0.35)"
                          : "0 12px 30px rgba(2, 10, 30, 0.16)",
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                    <Link
                      href={card.href}
                      draggable={false}
                      onPointerDown={(e) => e.stopPropagation()}
                   className={`relative z-10 mx-auto w-fit rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#0d2d47] shadow-lg shadow-black/10 transition duration-200 hover:bg-[#0d2d47] hover:text-white sm:px-5 sm:py-2.5 sm:text-sm ${
  isCenter
    ? "translate-y-0 opacity-100"
    : "pointer-events-none translate-y-3 opacity-0"
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
