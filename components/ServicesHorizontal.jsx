// // components/ServicesHorizontal.jsx
// "use client";

// import { motion, useReducedMotion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// export default function ServicesStacked() {
//   const [rotationDeg, setRotationDeg] = useState(0);
//   const [viewportWidth, setViewportWidth] = useState(1440);
//   const [isDragging, setIsDragging] = useState(false);

//   const dragRef = useRef({ active: false, lastX: 0 });
//   const shouldReduceMotion = useReducedMotion();

//   const cards = [
//     {
//       title: "Brand Strategy",
//       desc: "Crafting identities that dominate markets.",
//       image: "/caseStudy/Brand%20Strategy.png",
//       href: "/case-studies/brand-strategy",
//     },
//     {
//       title: "SEO Optimization",
//       desc: "Boost visibility and rank higher.",
//       image: "/caseStudy/SEO.png",
//       href: "/case-studies/seo-optimization",
//     },
//     {
//       title: "Social Media",
//       desc: "Build engagement and community.",
//       image: "/caseStudy/Social%20media%20marketing.jpg",
//       href: "/case-studies/social-media",
//     },
//     {
//       title: "Performance Ads",
//       desc: "Maximize ROI with precision.",
//       image: "/caseStudy/performance%20ads.png",
//       href: "/case-studies/performance-ads",
//     },
//     {
//       title: "Web Design",
//       desc: "Premium conversion-focused websites.",
//       image: "/caseStudy/Web%20Development.png",
//       href: "/case-studies/web-design",
//     },
//     {
//       title: "E-Commerce Growth",
//       desc: "Scale your online revenue channels.",
//       image: "/caseStudy/Ecommerce%20Growth.png",
//       href: "/case-studies/ecommerce-growth",
//     },
//     {
//       title: "Analytics & Data",
//       desc: "Make decisions backed by real insights.",
//       image: "/caseStudy/Analytics%20%26%20data.png",
//       href: "/case-studies/analytics-data",
//     },
//   ];

//   useEffect(() => {
//     const onResize = () => setViewportWidth(window.innerWidth);
//     onResize();

//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   useEffect(() => {
//     if (shouldReduceMotion) return;

//     let frame;

//     const animate = () => {
//       if (!dragRef.current.active) {
//         setRotationDeg((prev) => prev + 0.16);
//       }

//       frame = requestAnimationFrame(animate);
//     };

//     frame = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(frame);
//   }, [shouldReduceMotion]);

//   const total = cards.length;
//   const stepDeg = 360 / total;

//   const ringRadius =
//     viewportWidth < 480
//       ? 260
//       : viewportWidth < 640
//       ? 320
//       : viewportWidth < 768
//       ? 420
//       : viewportWidth < 1024
//       ? 560
//       : viewportWidth < 1280
//       ? 680
//       : 780;

//   const isInteractiveTarget = (target) => {
//     return target instanceof Element && Boolean(target.closest("a, button"));
//   };

//   const handlePointerDown = (e) => {
//     if (isInteractiveTarget(e.target)) return;

//     dragRef.current.active = true;
//     dragRef.current.lastX = e.clientX;
//     setIsDragging(true);

//     e.currentTarget.setPointerCapture?.(e.pointerId);
//   };

//   const handlePointerMove = (e) => {
//     if (!dragRef.current.active) return;

//     const deltaX = e.clientX - dragRef.current.lastX;
//     dragRef.current.lastX = e.clientX;

//     setRotationDeg((prev) => prev - deltaX * 0.35);
//   };

//   const handlePointerUp = (e) => {
//     dragRef.current.active = false;
//     setIsDragging(false);

//     e.currentTarget.releasePointerCapture?.(e.pointerId);
//   };

//   return (
//     <section className="relative min-h-[640px] overflow-hidden bg-[#FFF8F5] sm:min-h-[720px] md:min-h-screen">
//       {/* Soft Background Shapes */}
//       <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-[#19a6b5]/10 blur-3xl" />
//       <div className="pointer-events-none absolute bottom-[-160px] right-[-120px] h-[360px] w-[360px] rounded-full bg-[#0d2d47]/10 blur-3xl" />

//       {/* Responsive 3D Carousel */}
//       <div
//         onPointerDown={handlePointerDown}
//         onPointerMove={handlePointerMove}
//         onPointerUp={handlePointerUp}
//         onPointerCancel={handlePointerUp}
//         onPointerLeave={handlePointerUp}
//         className={`relative flex h-full min-h-[640px] items-center justify-center overflow-hidden sm:min-h-[720px] md:min-h-screen ${
//           isDragging ? "cursor-grabbing" : "cursor-grab"
//         }`}
//         style={{ touchAction: "pan-y" }}
//       >
//         <div className="absolute left-4 top-8 z-20 sm:left-6 sm:top-10 md:left-10 md:top-16 lg:left-14">
//           {/* <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#19a6b5]">
//             Our Work
//           </p> */}
//           <h2 className="text-3xl font-semibold tracking-tight text-[#0d2d47] sm:text-4xl md:text-5xl lg:text-6xl">
//             Case Studies
//           </h2>
//         </div>

//         <div
//           className="relative flex w-full items-center justify-center"
//           style={{
//             perspective: viewportWidth < 640 ? "1400px" : "2400px",
//             transformStyle: "preserve-3d",
//           }}
//         >
//           <motion.div
//             className="relative h-[300px] w-full sm:h-[320px] md:h-[380px] lg:h-[430px]"
//             style={{ transformStyle: "preserve-3d" }}
//             animate={{ rotateY: -rotationDeg }}
//             transition={{
//               type: "spring",
//               stiffness: 90,
//               damping: 24,
//               mass: 1,
//             }}
//           >
//             {cards.map((card, i) => {
//               const cardAngle = i * stepDeg;
//               const theta = ((cardAngle - rotationDeg) * Math.PI) / 180;
//               const frontness = (Math.cos(theta) + 1) / 2;
//               const isCenter = frontness > 0.94;

//               return (
//                 <div
//                   key={card.title}
//                   className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//                   style={{
//                     transform: `rotateY(${cardAngle}deg) translateZ(${ringRadius}px)`,
//                     transformStyle: "preserve-3d",
//                   }}
//                 >
//                   <motion.div
//                     className="relative flex h-[260px] w-[76vw] max-w-[340px] flex-col justify-between overflow-hidden p-5 text-white sm:h-[280px] sm:w-[58vw] sm:max-w-[560px] sm:p-6 md:h-[340px] md:w-[46vw] md:p-8 lg:h-[390px] lg:w-[32vw] lg:max-w-[620px] lg:p-10"
//                     style={{
//                       transformStyle: "preserve-3d",
//                       backgroundImage: `url(${card.image})`,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                       backgroundRepeat: "no-repeat",
//                       borderRadius: viewportWidth < 640 ? "32px" : "42px",
//                     }}
//                     animate={{
//                       opacity: 0.24 + frontness * 0.76,
//                       scale: 0.76 + frontness * 0.24,
//                       filter: `blur(${(1 - frontness) * 1.4}px)`,
//                       boxShadow:
//                         frontness > 0.9
//                           ? "0 30px 80px rgba(2, 10, 30, 0.45)"
//                           : "0 14px 36px rgba(2, 10, 30, 0.18)",
//                     }}
//                     transition={{ duration: 0.25 }}
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/15" />

//                     <div className="relative z-10 text-sm font-medium text-white/90 md:text-base">
//                       0{i + 1}
//                     </div>

//                     <div
//                       className={`relative z-10 rounded-[26px] border border-white/10 bg-black/35 p-4 backdrop-blur-[3px] transition duration-200 sm:rounded-3xl sm:p-5 ${
//                         isCenter
//                           ? "translate-y-0 opacity-100"
//                           : "translate-y-3 opacity-0"
//                       }`}
//                     >
//                       <h3 className="mb-2 text-xl font-semibold drop-shadow-md sm:mb-3 sm:text-2xl lg:text-3xl">
//                         {card.title}
//                       </h3>

//                       <p className="max-w-md text-sm leading-6 text-white/85 drop-shadow-md md:text-base">
//                         {card.desc}
//                       </p>
//                     </div>

//                     <Link
//                       href={card.href}
//                       onPointerDown={(e) => e.stopPropagation()}
//                       className={`relative z-10 w-fit rounded-full bg-white px-4 py-2 text-sm font-medium text-[#0d2d47] shadow-lg shadow-black/10 transition duration-200 hover:bg-[#0d2d47] hover:text-white sm:px-5 sm:py-2.5 md:px-6 md:py-3 ${
//                         isCenter
//                           ? "translate-y-0 opacity-100"
//                           : "pointer-events-none translate-y-3 opacity-0"
//                       }`}
//                     >
//                       View Case Study →
//                     </Link>
//                   </motion.div>
//                 </div>
//               );
//             })}
//           </motion.div>
//         </div>

//         {/* <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-full border border-[#0d2d47]/10 bg-white/70 px-4 py-2 text-xs font-medium text-[#0d2d47]/70 backdrop-blur-md">
//           Drag to explore
//         </div> */}
//       </div>
//     </section>
//   );
// }











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

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    onResize();

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) return;

    let frame;

    const animate = () => {
      if (!dragRef.current.active) {
        setRotationDeg((prev) => prev + 0.16);
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [shouldReduceMotion]);

  const total = cards.length;
  const stepDeg = 360 / total;

  const ringRadius =
    viewportWidth < 390
      ? 210
      : viewportWidth < 480
      ? 245
      : viewportWidth < 640
      ? 310
      : viewportWidth < 768
      ? 420
      : viewportWidth < 1024
      ? 540
      : viewportWidth < 1280
      ? 660
      : 780;

  const cardSize =
    viewportWidth < 390
      ? {
          height: "240px",
          width: "82vw",
          maxWidth: "300px",
          padding: "18px",
          radius: "30px",
        }
      : viewportWidth < 480
      ? {
          height: "255px",
          width: "80vw",
          maxWidth: "330px",
          padding: "20px",
          radius: "32px",
        }
      : viewportWidth < 640
      ? {
          height: "270px",
          width: "76vw",
          maxWidth: "360px",
          padding: "22px",
          radius: "34px",
        }
      : viewportWidth < 768
      ? {
          height: "300px",
          width: "60vw",
          maxWidth: "480px",
          padding: "24px",
          radius: "38px",
        }
      : viewportWidth < 1024
      ? {
          height: "340px",
          width: "48vw",
          maxWidth: "560px",
          padding: "30px",
          radius: "40px",
        }
      : {
          height: "390px",
          width: "32vw",
          maxWidth: "620px",
          padding: "40px",
          radius: "42px",
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
    <section className="relative min-h-[620px] overflow-hidden bg-[#FFF8F5] sm:min-h-[700px] md:min-h-screen">
      <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-[#19a6b5]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-160px] right-[-120px] h-[360px] w-[360px] rounded-full bg-[#0d2d47]/10 blur-3xl" />

      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className={`relative flex h-full min-h-[620px] select-none items-center justify-center overflow-hidden sm:min-h-[700px] md:min-h-screen ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          touchAction: "pan-y",
          WebkitUserSelect: "none",
          userSelect: "none",
        }}
      >
        <div className="absolute left-4 top-8 z-20 sm:left-6 sm:top-10 md:left-10 md:top-16 lg:left-14">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0d2d47] sm:text-4xl md:text-5xl lg:text-6xl">
            Case Studies
          </h2>
        </div>

        <div
          className="relative flex w-full items-center justify-center"
          style={{
            perspective:
              viewportWidth < 480
                ? "1100px"
                : viewportWidth < 768
                ? "1500px"
                : "2400px",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            className="relative h-[280px] w-full sm:h-[320px] md:h-[380px] lg:h-[430px]"
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
                    className="relative flex flex-col justify-between overflow-hidden text-white"
                    style={{
                      height: cardSize.height,
                      width: cardSize.width,
                      maxWidth: cardSize.maxWidth,
                      padding: cardSize.padding,
                      borderRadius: cardSize.radius,
                      transformStyle: "preserve-3d",
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    animate={{
                      opacity: 0.24 + frontness * 0.76,
                      scale: 0.76 + frontness * 0.24,
                      filter: `blur(${(1 - frontness) * 1.4}px)`,
                      boxShadow:
                        frontness > 0.9
                          ? "0 30px 80px rgba(2, 10, 30, 0.45)"
                          : "0 14px 36px rgba(2, 10, 30, 0.18)",
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/15" />

                    <div className="relative z-10 text-sm font-medium text-white/90 md:text-base">
                      0{i + 1}
                    </div>

                    <div
                      className={`relative z-10 rounded-[24px] border border-white/10 bg-black/35 p-4 backdrop-blur-[3px] transition duration-200 sm:rounded-3xl sm:p-5 ${
                        isCenter
                          ? "translate-y-0 opacity-100"
                          : "translate-y-3 opacity-0"
                      }`}
                    >
                      <h3 className="mb-2 text-lg font-semibold drop-shadow-md sm:text-2xl lg:text-3xl">
                        {card.title}
                      </h3>

                      <p className="max-w-md text-sm leading-6 text-white/85 drop-shadow-md md:text-base">
                        {card.desc}
                      </p>
                    </div>

                    <Link
                      href={card.href}
                      draggable={false}
                      onPointerDown={(e) => e.stopPropagation()}
                      className={`relative z-10 w-fit rounded-full bg-white px-4 py-2 text-sm font-medium text-[#0d2d47] shadow-lg shadow-black/10 transition duration-200 hover:bg-[#0d2d47] hover:text-white sm:px-5 sm:py-2.5 md:px-6 md:py-3 ${
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