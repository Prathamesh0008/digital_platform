// components/WorkProcess.tsx
"use client";

import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { Cookie } from "next/font/google";

const cookie = Cookie({
  subsets: ["latin"],
  weight: "400",
});

const steps = [
  {
    no: "1",
    color: "#C69C6D",
    glow: "#FF0000",
    gradient: "linear-gradient(135deg, #91C382 0%, #A0CD91 100%)",
    title: "Strategic Planning in Digital Marketing",
    text: "The first step in any effective digital marketing strategy is thorough planning. This includes research, competitor analysis, and clear goal setting.",
    left: "13%",
    top: "67px",
  },
  {
    no: "2",
    color: "#3CF4FF",
    glow: "#FF0000",
    gradient: "linear-gradient(135deg, #FA6482 0%, #FA7880 100%)",
    title: "Strategy: Crafting a Roadmap for Digital Marketing Success",
    text: "At the strategy stage, we define the most effective approaches to engage your audience and achieve your marketing objectives.",
    left: "50%",
    top: "67px",
  },
  {
    no: "3",
    color: "#2FA084",
    glow: "#6FCF97",
    gradient: "linear-gradient(135deg, #09509B 0%, #3273AF 100%)",
    title: "Execution: Bringing Your Digital Marketing Plan to Life",
    text: "This is where strategy turns into action through campaigns across the most effective digital marketing channels.",
    left: "87%",
    top: "67px",
  },
  {
    no: "4",
    color: "#007979",
    glow: "#24B1B1",
    gradient: "linear-gradient(135deg, #007979 0%, #24B1B1 100%)",
    title: "Tracking and Analysis: Measuring Digital Marketing Success",
    text: "We track key performance metrics, analyze campaign results, and improve campaigns continuously.",
    left: "87%",
    top: "452px",
  },
  {
    no: "5",
    color: "#740A03",
    glow: "#C3110C",
    gradient: "linear-gradient(135deg, #D24545 0%, #A94438 100%)",
    title: "Refinement: Optimizing Your Digital Marketing Strategy",
    text: "After analyzing results, we fine-tune your digital marketing plan to maximize performance and ROI.",
    left: "50%",
    top: "452px",
  },
  {
    no: "6",
    color: "#982598",
    glow: "#E491C9",
    gradient: "linear-gradient(135deg, #982598 0%, #E491C9 100%)",
    title: "Repeat: Continuously Optimizing Your Digital Marketing Success",
    text: "After achieving results, we restart the process to further improve performance and growth.",
    left: "13%",
    top: "452px",
  },
];

const circlePoints = [
  { x: 175, y: 95 },
  { x: 675, y: 95 },
  { x: 1175, y: 95 },
  { x: 1175, y: 480 },
  { x: 675, y: 480 },
  { x: 175, y: 480 },
];

const arrowHints = [
  { x: 531, y: 112, rotate: 5 },
  { x: 1039, y: 58, rotate: 10 },
  { x: 1266, y: 390, rotate: 115 },
  { x: 816, y: 460, rotate: -174 },
  { x: 313, y: 521, rotate: -169 },
];

export default function WorkProcess() {
  const pathRef = useRef<SVGPathElement>(null);

  const mobileTimelineRef = useRef<HTMLDivElement>(null);
  const firstMobileDotRef = useRef<HTMLDivElement>(null);
  const lastMobileDotRef = useRef<HTMLDivElement>(null);

  const [glowStates, setGlowStates] = useState<boolean[]>(
    new Array(6).fill(false)
  );

  const [mobileLine, setMobileLine] = useState({
    top: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const section = path.closest("section");
    if (!section) return;

    const totalLength = path.getTotalLength();

    path.style.strokeDasharray = `${totalLength}`;
    path.style.strokeDashoffset = `${totalLength}`;
    path.style.opacity = "1";

    setGlowStates(new Array(6).fill(false));

    const lengthsAtPoints: number[] = [];

    for (let i = 0; i < circlePoints.length; i++) {
      const point = circlePoints[i];
      let bestLength = 0;
      let minDist = Infinity;

      for (let len = 0; len <= totalLength; len += 1) {
        const pt = path.getPointAtLength(len);
        const dx = pt.x - point.x;
        const dy = pt.y - point.y;
        const d = dx * dx + dy * dy;

        if (d < minDist) {
          minDist = d;
          bestLength = len;
        }
      }

      lengthsAtPoints.push(bestLength);
    }

    let animationFrame: number | null = null;
    let hasAnimated = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) return;

        hasAnimated = true;

        const duration = 3600;
        const startTime = performance.now();

        const animate = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(1, elapsed / duration);
          const currentLength = totalLength * progress;

          path.style.strokeDashoffset = `${totalLength - currentLength}`;

          setGlowStates((prev) => {
            let changed = false;

            const next = prev.map((state, i) => {
              const isReached = state || currentLength >= lengthsAtPoints[i];

              if (isReached !== state) changed = true;

              return isReached;
            });

            return changed ? next : prev;
          });

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          } else {
            path.style.strokeDasharray = "";
            path.style.strokeDashoffset = "0";
            setGlowStates(new Array(6).fill(true));
          }
        };

        animationFrame = requestAnimationFrame(animate);
      },
      { threshold: 0.35, rootMargin: "0px" }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  useLayoutEffect(() => {
    const updateMobileLine = () => {
      const timeline = mobileTimelineRef.current;
      const firstDot = firstMobileDotRef.current;
      const lastDot = lastMobileDotRef.current;

      if (!timeline || !firstDot || !lastDot) return;

      const timelineRect = timeline.getBoundingClientRect();
      const firstRect = firstDot.getBoundingClientRect();
      const lastRect = lastDot.getBoundingClientRect();

      const firstCenter =
        firstRect.top - timelineRect.top + firstRect.height / 2;
      const lastCenter = lastRect.top - timelineRect.top + lastRect.height / 2;

      setMobileLine({
        top: firstCenter,
        height: Math.max(0, lastCenter - firstCenter),
      });
    };

    updateMobileLine();

    window.addEventListener("resize", updateMobileLine);

    let resizeObserver: ResizeObserver | null = null;

    if (typeof ResizeObserver !== "undefined" && mobileTimelineRef.current) {
      resizeObserver = new ResizeObserver(updateMobileLine);
      resizeObserver.observe(mobileTimelineRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateMobileLine);
      resizeObserver?.disconnect();
    };
  }, []);

  return (
    <section
      className="w-full px-4 py-16 sm:px-6 md:px-10 md:py-24"
      style={{ background: "#E6E8DC" }}
    >
      <div className="mx-auto max-w-[1500px] text-center">
        <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-[#0d2d47] sm:text-5xl md:text-[72px]">
          Behind Every Great Result
          <br />
          Is Our Work Process
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
          Smart, simple, and efficient solutions for every client project.
        </p>

        {/* Desktop view */}
        <div className="relative mx-auto mt-16 hidden h-[820px] max-w-[1350px] lg:block">
          <svg
            className="absolute inset-0 z-0 h-full w-full"
            viewBox="0 0 1350 820"
            fill="none"
          >
            <defs>
              <filter
                id="processArrowShadow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="3"
                  stdDeviation="3"
                  floodColor="#0d2d47"
                  floodOpacity="0.28"
                />
              </filter>
            </defs>

            <path
              ref={pathRef}
              d="M175 95 C340 30 500 160 675 95 C850 30 1015 35 1175 95 C1325 155 1325 420 1175 480 C990 555 850 405 675 480 C500 555 340 545 175 480"
              stroke="#0d2d47"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ opacity: 0 }}
            />

            {arrowHints.map((arrow, idx) => (
              <g
                key={`${arrow.x}-${arrow.y}`}
                className="transition-opacity duration-500"
                transform={`translate(${arrow.x} ${arrow.y}) rotate(${arrow.rotate})`}
                style={{
                  opacity: glowStates[idx + 1] ? 1 : 0,
                }}
              >
                <path
                  d="M-14 -9 L0 0 L-14 9"
                  stroke="#0d2d47"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#processArrowShadow)"
                />
              </g>
            ))}
          </svg>

          {steps.map((step, idx) => (
            <div
              key={step.no}
              className="absolute z-10 w-[330px] -translate-x-1/2 text-center"
              style={{ left: step.left, top: step.top }}
            >
              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold text-white transition-all duration-500 ${
                  glowStates[idx] ? "scale-110" : "scale-100 opacity-70"
                }`}
                style={{
                  background: step.gradient,
                  boxShadow: glowStates[idx]
                    ? `0 18px 38px rgba(13, 45, 71, 0.42), 0 0 28px ${step.glow}66`
                    : "0 10px 24px rgba(13, 45, 71, 0.24)",
                }}
              >
                {step.no}
              </div>

              <div
               className={`mt-5 flex min-h-[230px] flex-col justify-start rounded-2xl border border-[#0d2d47]/10 bg-[#B6C4E7] p-5 shadow-[0_18px_40px_rgba(13,45,71,0.14)] transition-all duration-700 ${
                  glowStates[idx]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <h3
                  className={`${cookie.className} text-[28px] text-2xl font-normal leading-[1.1] text-[#0d2d47]`}
                >
                  {step.title}
                </h3>

                <p className={`${cookie.className} mt-4 text-xl leading-relaxed text-[#0d2d47]/75`}>
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Timeline view */}
        <div
          ref={mobileTimelineRef}
          className="relative mx-auto mt-12 max-w-4xl lg:hidden"
        >
          <div
            className="absolute left-5 w-[3px] rounded-full bg-[#0d2d47]/20 sm:left-1/2 sm:-translate-x-1/2"
            style={{
              top: mobileLine.top,
              height: mobileLine.height,
            }}
          />

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: mobileLine.height }}
            transition={{ duration: 3.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.35 }}
            className="absolute left-5 w-[3px] rounded-full bg-[#0d2d47] sm:left-1/2 sm:-translate-x-1/2"
            style={{
              top: mobileLine.top,
            }}
          />

          <div className="space-y-7 sm:space-y-10">
            {steps.map((step, idx) => {
              const isRight = idx % 2 === 0;

              return (
                <motion.div
                  key={step.no}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.95, delay: 0.25 + idx * 0.16 }}
                  viewport={{ once: true, amount: 0.35 }}
                  className={`relative flex items-start ${
                    isRight ? "sm:justify-end" : "sm:justify-start"
                  }`}
                >
                  <div
                    ref={
                      idx === 0
                        ? firstMobileDotRef
                        : idx === steps.length - 1
                        ? lastMobileDotRef
                        : undefined
                    }
                    className="absolute left-5 top-4 z-20 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full text-base font-bold text-white sm:left-1/2"
                    style={{
                      background: step.gradient,
                      boxShadow: `0 16px 24px rgba(13, 45, 71, 0.36), 0 0 22px ${step.glow}66`,
                    }}
                  >
                    {step.no}
                  </div>

                  <div
                    className={`absolute top-[36px] hidden h-[2px] w-[54px] bg-[#0d2d47]/25 sm:block ${
                      isRight ? "left-1/2 ml-[22px]" : "right-1/2 mr-[22px]"
                    }`}
                  />

                  <div
                    className={`ml-14 flex min-h-[240px] w-[calc(100%-56px)] flex-col justify-start rounded-[24px] border border-[#0d2d47]/10 bg-[#B6C4E7] p-5 text-left shadow-[0_18px_40px_rgba(13,45,71,0.14)] sm:ml-0 sm:min-h-[260px] sm:w-[43%] ${
                      isRight ? "sm:text-left" : "sm:text-right"
                    }`}
                  >
                    <span className="mb-3 inline-flex rounded-full bg-[#0d2d47]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0d2d47]">
                      Step {step.no}
                    </span>

                    <h3
                      className={`${cookie.className} text-[30px] font-normal text-2xl leading-[1.05] text-[#0d2d47] sm:text-[34px]`}
                    >
                      {step.title}
                    </h3>

                    <p className={` ${cookie.className}mt-3 text-lg leading-relaxed text-[#0d2d47]/75`}>
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}






















// // components/WorkProcess.tsx
// "use client";

// import { motion } from "framer-motion";
// import { useLayoutEffect, useRef, useState } from "react";
// import { Pacifico } from "next/font/google";
// const steps = [
//   {
//     no: "1",
//     color: "#C69C6D",
//     glow: "#FF0000",
//     gradient: "linear-gradient(135deg, #91C382 0%, #A0CD91 100%)",
//     title: "Strategic Planning in Digital Marketing",
//     text: "The first step in any effective digital marketing strategy is thorough planning. This includes research, competitor analysis, and clear goal setting.",
//     left: "13%",
//     top: "67px",
//   },
//   {
//     no: "2",
//     color: "#3CF4FF",
//     glow: "#FF0000",
//     gradient: "linear-gradient(135deg, #FA6482 0%, #FA7880 100%)",
//     title: "Strategy: Crafting a Roadmap for Digital Marketing Success",
//     text: "At the strategy stage, we define the most effective approaches to engage your audience and achieve your marketing objectives.",
//     left: "50%",
//     top: "67px",
//   },
//   {
//     no: "3",
//     color: "#2FA084",
//     glow: "#6FCF97",
//     gradient: "linear-gradient(135deg, #09509B 0%, #3273AF 100%)",
//     title: "Execution: Bringing Your Digital Marketing Plan to Life",
//     text: "This is where strategy turns into action through campaigns across the most effective digital marketing channels.",
//     left: "87%",
//     top: "67px",
//   },
//   {
//     no: "4",
//     color: "#007979",
//     glow: "#24B1B1",
//     gradient: "linear-gradient(135deg, #007979 0%, #24B1B1 100%)",
//     title: "Tracking and Analysis: Measuring Digital Marketing Success",
//     text: "We track key performance metrics, analyze campaign results, and improve campaigns continuously.",
//     left: "87%",
//     top: "452px",
//   },
//   {
//     no: "5",
//     color: "#740A03",
//     glow: "#C3110C",
//    gradient: "linear-gradient(135deg, #D24545 0%, #A94438 100%)",
//     title: "Refinement: Optimizing Your Digital Marketing Strategy",
//     text: "After analyzing results, we fine-tune your digital marketing plan to maximize performance and ROI.",
//     left: "50%",
//     top: "452px",
//   },
//   {
//     no: "6",
//     color: "#982598",
//     glow: "#E491C9",
//     gradient: "linear-gradient(135deg, #982598 0%, #E491C9 100%)",
//     title: "Repeat: Continuously Optimizing Your Digital Marketing Success",
//     text: "After achieving results, we restart the process to further improve performance and growth.",
//     left: "13%",
//     top: "452px",
//   },
// ];

// const circlePoints = [
//   { x: 175, y: 95 },
//   { x: 675, y: 95 },
//   { x: 1175, y: 95 },
//   { x: 1175, y: 480 },
//   { x: 675, y: 480 },
//   { x: 175, y: 480 },
// ];

// const arrowHints = [
//   { x: 531, y: 112, rotate: 5 },
//   { x: 1039, y: 58, rotate: 10 },
//   { x: 1266, y: 390, rotate: 115 },
//   { x: 816, y: 460, rotate: -174 },
//   { x: 313, y: 521, rotate: -169 },
// ];
// const pacifico = Pacifico({
//   weight: "400",
//   subsets: ["latin"],
// });
// export default function WorkProcess() {
//   const pathRef = useRef<SVGPathElement>(null);

//   const mobileTimelineRef = useRef<HTMLDivElement>(null);
//   const firstMobileDotRef = useRef<HTMLDivElement>(null);
//   const lastMobileDotRef = useRef<HTMLDivElement>(null);

//   const [glowStates, setGlowStates] = useState<boolean[]>(
//     new Array(6).fill(false)
//   );

//   const [mobileLine, setMobileLine] = useState({
//     top: 0,
//     height: 0,
//   });

//   useLayoutEffect(() => {
//     const path = pathRef.current;
//     if (!path) return;

//     const section = path.closest("section");
//     if (!section) return;

//     const totalLength = path.getTotalLength();

//     path.style.strokeDasharray = `${totalLength}`;
//     path.style.strokeDashoffset = `${totalLength}`;
//     path.style.opacity = "1";

//     setGlowStates(new Array(6).fill(false));

//     const lengthsAtPoints: number[] = [];

//     for (let i = 0; i < circlePoints.length; i++) {
//       const point = circlePoints[i];
//       let bestLength = 0;
//       let minDist = Infinity;

//       for (let len = 0; len <= totalLength; len += 1) {
//         const pt = path.getPointAtLength(len);
//         const dx = pt.x - point.x;
//         const dy = pt.y - point.y;
//         const dist = Math.hypot(dx, dy);

//         if (dist < minDist) {
//           minDist = dist;
//           bestLength = len;
//         }
//       }

//       lengthsAtPoints.push(bestLength);
//     }

//     let animationFrame: number | null = null;
//     let hasAnimated = false;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (!entry.isIntersecting || hasAnimated) return;

//         hasAnimated = true;

//         const duration = 3600;
//         const startTime = performance.now();

//         const animate = (now: number) => {
//           const elapsed = now - startTime;
//           const progress = Math.min(1, elapsed / duration);
//           const currentLength = totalLength * progress;

//           path.style.strokeDashoffset = `${totalLength - currentLength}`;

//           setGlowStates((prev) => {
//             let changed = false;

//             const next = prev.map((state, i) => {
//               const isReached = state || currentLength >= lengthsAtPoints[i];

//               if (isReached !== state) changed = true;

//               return isReached;
//             });

//             return changed ? next : prev;
//           });

//           if (progress < 1) {
//             animationFrame = requestAnimationFrame(animate);
//           } else {
//             path.style.strokeDasharray = "";
//             path.style.strokeDashoffset = "0";
//             setGlowStates(new Array(6).fill(true));
//           }
//         };

//         animationFrame = requestAnimationFrame(animate);
//       },
//       { threshold: 0.35, rootMargin: "0px" }
//     );

//     observer.observe(section);

//     return () => {
//       observer.disconnect();

//       if (animationFrame) {
//         cancelAnimationFrame(animationFrame);
//       }
//     };
//   }, []);

//   useLayoutEffect(() => {
//     const updateMobileLine = () => {
//       const timeline = mobileTimelineRef.current;
//       const firstDot = firstMobileDotRef.current;
//       const lastDot = lastMobileDotRef.current;

//       if (!timeline || !firstDot || !lastDot) return;

//       const timelineRect = timeline.getBoundingClientRect();
//       const firstRect = firstDot.getBoundingClientRect();
//       const lastRect = lastDot.getBoundingClientRect();

//       const firstCenter =
//         firstRect.top - timelineRect.top + firstRect.height / 2;
//       const lastCenter = lastRect.top - timelineRect.top + lastRect.height / 2;

//       setMobileLine({
//         top: firstCenter,
//         height: Math.max(0, lastCenter - firstCenter),
//       });
//     };

//     updateMobileLine();

//     window.addEventListener("resize", updateMobileLine);

//     let resizeObserver: ResizeObserver | null = null;

//     if (typeof ResizeObserver !== "undefined" && mobileTimelineRef.current) {
//       resizeObserver = new ResizeObserver(updateMobileLine);
//       resizeObserver.observe(mobileTimelineRef.current);
//     }

//     return () => {
//       window.removeEventListener("resize", updateMobileLine);
//       resizeObserver?.disconnect();
//     };
//   }, []);

//   return (
//     <section
//       className="w-full px-4 py-16 sm:px-6 md:px-10 md:py-24"
//       style={{ background: "#E6E8DC" }}
//     >
//       <div className="mx-auto max-w-[1500px] text-center">
//         <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-[#0d2d47] sm:text-5xl md:text-[72px]">
//           Behind Every Great Result
//           <br />
//           Is Our Work Process
//         </h2>

//         <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
//           Smart, simple, and efficient solutions for every client project.
//         </p>

//         {/* Desktop view */}
//         <div className="relative mx-auto mt-16 hidden h-[820px] max-w-[1350px] lg:block">
//           <svg
//             className="absolute inset-0 z-0 h-full w-full"
//             viewBox="0 0 1350 820"
//             fill="none"
//           >
//             <defs>
//               <filter
//                 id="processArrowShadow"
//                 x="-50%"
//                 y="-50%"
//                 width="200%"
//                 height="200%"
//               >
//                 <feDropShadow
//                   dx="0"
//                   dy="3"
//                   stdDeviation="3"
//                   floodColor="#0d2d47"
//                   floodOpacity="0.28"
//                 />
//               </filter>
//             </defs>

//             <path
//               ref={pathRef}
//               d="M175 95 C340 30 500 160 675 95 C850 30 1015 35 1175 95 C1325 155 1325 420 1175 480 C990 555 850 405 675 480 C500 555 340 545 175 480"
//               stroke="#0d2d47"
//               strokeWidth="3"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               style={{ opacity: 0 }}
//             />

//             {arrowHints.map((arrow, idx) => (
//               <g
//                 key={`${arrow.x}-${arrow.y}`}
//                 className="transition-opacity duration-500"
//                 transform={`translate(${arrow.x} ${arrow.y}) rotate(${arrow.rotate})`}
//                 style={{
//                   opacity: glowStates[idx + 1] ? 1 : 0,
//                 }}
//               >
//                 <path
//                   d="M-14 -9 L0 0 L-14 9"
//                   stroke="#0d2d47"
//                   strokeWidth="3"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   filter="url(#processArrowShadow)"
//                 />
//               </g>
//             ))}
//           </svg>

//           {steps.map((step, idx) => (
//             <div
//               key={step.no}
//               className="absolute z-10 w-[330px] -translate-x-1/2 text-center"
//               style={{ left: step.left, top: step.top }}
//             >
//               <div
//                 className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold text-white transition-all duration-500 ${
//                   glowStates[idx] ? "scale-110" : "scale-100 opacity-70"
//                 }`}
//                 style={{
//                   background: step.gradient,
//                   boxShadow: glowStates[idx]
//                     ? `0 18px 38px rgba(13, 45, 71, 0.42), 0 0 28px ${step.glow}66`
//                     : "0 10px 24px rgba(13, 45, 71, 0.24)",
//                 }}
//               >
//                 {step.no}
//               </div>

//               <div
//                 className={`mt-5 rounded-2xl border border-[#0d2d47]/10 bg-[#B6C4E7] p-5 shadow-[0_18px_40px_rgba(13,45,71,0.14)] transition-all duration-700 ${
//                   glowStates[idx]
//                     ? "translate-y-0 opacity-100"
//                     : "translate-y-6 opacity-0"
//                 }`}
//               >
//               <h3 className={`${pacifico.className} text-base leading-snug text-[#0d2d47]`}>
//   {step.title}
// </h3>

// <p className={`${pacifico.className} mt-4 text-lg leading-relaxed text-[#0d2d47]/75`}>
//   {step.text}
// </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Mobile / Tablet Timeline view */}
//         <div
//           ref={mobileTimelineRef}
//           className="relative mx-auto mt-12 max-w-4xl lg:hidden"
//         >
//           {/* Main vertical process line - stops at 6th dot */}
//           <div
//             className="absolute left-5 w-[3px] rounded-full bg-[#0d2d47]/20 sm:left-1/2 sm:-translate-x-1/2"
//             style={{
//               top: mobileLine.top,
//               height: mobileLine.height,
//             }}
//           />

//           {/* Animated glowing line overlay - stops at 6th dot */}
//           <motion.div
//             initial={{ height: 0 }}
//             whileInView={{ height: mobileLine.height }}
//             transition={{ duration: 3.2, ease: "easeInOut" }}
//             viewport={{ once: true, amount: 0.35 }}
//             className="absolute left-5 w-[3px] rounded-full bg-[#0d2d47] sm:left-1/2 sm:-translate-x-1/2"
//             style={{
//               top: mobileLine.top,
//             }}
//           />

//           <div className="space-y-7 sm:space-y-10">
//             {steps.map((step, idx) => {
//               const isRight = idx % 2 === 0;

//               return (
//                 <motion.div
//                   key={step.no}
//                   initial={{ opacity: 0, y: 35 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.95, delay: 0.25 + idx * 0.16 }}
//                   viewport={{ once: true, amount: 0.35 }}
//                   className={`relative flex items-start ${
//                     isRight ? "sm:justify-end" : "sm:justify-start"
//                   }`}
//                 >
//                   {/* Step circle */}
//                   <div
//                     ref={
//                       idx === 0
//                         ? firstMobileDotRef
//                         : idx === steps.length - 1
//                         ? lastMobileDotRef
//                         : undefined
//                     }
//                     className="absolute left-5 top-4 z-20 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full text-base font-bold text-white sm:left-1/2"
//                     style={{
//                       background: step.gradient,
//                       boxShadow: `0 16px 24px rgba(13, 45, 71, 0.36), 0 0 22px ${step.glow}66`,
//                     }}
//                   >
//                     {step.no}
//                   </div>

//                   {/* Connector small line */}
//                   <div
//                     className={`absolute top-[36px] hidden h-[2px] w-[54px] bg-[#0d2d47]/25 sm:block ${
//                       isRight ? "left-1/2 ml-[22px]" : "right-1/2 mr-[22px]"
//                     }`}
//                   />

//                   {/* Content box */}
//                   <div
//                     className={`ml-14 w-[calc(100%-56px)] rounded-[24px] border border-[#0d2d47]/10 bg-[#B6C4E7] p-5 text-left shadow-[0_18px_40px_rgba(13,45,71,0.14)] sm:ml-0 sm:w-[43%] ${
//                       isRight ? "sm:text-left" : "sm:text-right"
//                     }`}
//                   >
//                     <span className="mb-3 inline-flex rounded-full bg-[#0d2d47]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0d2d47]">
//                       Step {step.no}
//                     </span>

//                    <h3 className={`${pacifico.className} text-base leading-snug text-[#0d2d47] sm:text-lg`}>
//   {step.title}
// </h3>

// <p className={`${pacifico.className} mt-3 text-sm leading-relaxed text-[#0d2d47]/75`}>
//   {step.text}
// </p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
