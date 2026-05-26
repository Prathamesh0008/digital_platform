"use client";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

const steps = [
  {
    no: "1",
    color: "#C69C6D",
    glow: "#FF0000",
    gradient: "linear-gradient(135deg, #C69C6D 0%, #FF0000 100%)",
    title: "Strategic Planning in Digital Marketing",
    text: "The first step in any effective digital marketing strategy is thorough planning. This includes research, competitor analysis, and clear goal setting.",
    left: "13%",
    top: "67px",
  },
  {
    no: "2",
    color: "#3CF4FF",
    glow: "#FF0000",
    gradient: "linear-gradient(135deg, #3CF4FF 0%, #FF0000 100%)",
    title: "Strategy: Crafting a Roadmap for Digital Marketing Success",
    text: "At the strategy stage, we define the most effective approaches to engage your audience and achieve your marketing objectives.",
    left: "50%",
    top: "67px",
  },
  {
    no: "3",
    color: "#2FA084",
    glow: "#6FCF97",
    gradient: "linear-gradient(135deg, #2FA084 0%, #6FCF97 100%)",
    title: "Execution: Bringing Your Digital Marketing Plan to Life",
    text: "This is where strategy turns into action through campaigns across the most effective digital marketing channels.",
    left: "87%",
    top: "67px",
  },
  {
    no: "4",
    color: "#143F6B",
    glow: "#F55353",
    gradient: "linear-gradient(135deg, #143F6B 0%, #F55353 100%)",
    title: "Tracking and Analysis: Measuring Digital Marketing Success",
    text: "We track key performance metrics, analyze campaign results, and improve campaigns continuously.",
    left: "87%",
    top: "452px",
  },
  {
    no: "5",
    color: "#72FFFF",
    glow: "#00D7FF",
    gradient: "linear-gradient(135deg, #72FFFF 0%, #00D7FF 100%)",
    title: "Refinement: Optimizing Your Digital Marketing Strategy",
    text: "After analyzing results, we fine-tune your digital marketing plan to maximize performance and ROI.",
    left: "50%",
    top: "452px",
  },
  {
    no: "6",
    color: "#C5172E",
    glow: "#4A102A",
    gradient: "linear-gradient(135deg, #C5172E 0%, #4A102A 100%)",
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
  const [glowStates, setGlowStates] = useState<boolean[]>(
    new Array(6).fill(false)
  );

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
        const dist = Math.hypot(dx, dy);

        if (dist < minDist) {
          minDist = dist;
          bestLength = len;
        }
      }

      lengthsAtPoints.push(bestLength);
    }

    let animationFrame: number;
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
      cancelAnimationFrame(animationFrame);
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
              <filter id="processArrowShadow" x="-50%" y="-50%" width="200%" height="200%">
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
                  glowStates[idx]
                    ? "scale-110 glow-effect"
                    : "scale-100 opacity-70"
                }`}
                style={{
                  background: step.gradient,
                  boxShadow: glowStates[idx]
                    ? "0 18px 42px rgba(13, 45, 71, 0.42), 0 0 0 8px rgba(13, 45, 71, 0.16)"
                    : "0 12px 26px rgba(13, 45, 71, 0.24)",
                }}
              >
                {step.no}
              </div>

              <div
                className={`mt-5 rounded-2xl border border-[#0d2d47]/10 bg-[#B6C4E7] p-5 shadow-[0_18px_40px_rgba(13,45,71,0.14)] transition-all duration-700 ${
                  glowStates[idx]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <h3 className="text-base font-bold leading-snug text-[#0d2d47]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[#0d2d47]/75">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

       {/* Mobile / Tablet Timeline view */}
<div className="relative mx-auto mt-12 max-w-4xl lg:hidden">
  {/* Main vertical process line */}
  <div className="absolute left-5 top-4 h-[calc(100%-32px)] w-[3px] rounded-full bg-[#0d2d47]/20 sm:left-1/2 sm:-translate-x-1/2" />

  {/* Animated glowing line overlay */}
  <motion.div
    initial={{ height: 0 }}
    whileInView={{ height: "calc(100% - 32px)" }}
    transition={{ duration: 3.2, ease: "easeInOut" }}
    viewport={{ once: true, amount: 0.35 }}
    className="absolute left-5 top-4 w-[3px] rounded-full bg-[#0d2d47] sm:left-1/2 sm:-translate-x-1/2"
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
          {/* Step circle */}
          <div
            className="absolute left-5 top-4 z-20 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full text-base font-bold text-white sm:left-1/2"
            style={{
              background: step.gradient,
              boxShadow:
                "0 0 0 7px rgba(13, 45, 71, 0.12), 0 16px 34px rgba(13, 45, 71, 0.3)",
            }}
          >
            {step.no}
          </div>

          {/* Connector small line */}
          <div
            className={`absolute top-[36px] hidden h-[2px] w-[54px] bg-[#0d2d47]/25 sm:block ${
              isRight
                ? "left-1/2 ml-[22px]"
                : "right-1/2 mr-[22px]"
            }`}
          />

          {/* Content box */}
          <div
            className={`ml-14 w-[calc(100%-56px)] rounded-[24px] border border-[#0d2d47]/10 bg-[#B6C4E7] p-5 text-left shadow-[0_18px_40px_rgba(13,45,71,0.14)] sm:ml-0 sm:w-[43%] ${
              isRight ? "sm:text-left" : "sm:text-right"
            }`}
          >
            <span className="mb-3 inline-flex rounded-full bg-[#0d2d47]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0d2d47]">
              Step {step.no}
            </span>

            <h3 className="text-base font-bold leading-snug text-[#0d2d47] sm:text-lg">
              {step.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#0d2d47]/75">
              {step.text}
            </p>
          </div>
        </motion.div>
      );
    })}
  </div>
</div>
      </div>

      <style>{`
        .glow-effect {
          box-shadow:
            0 0 0 8px rgba(13, 45, 71, 0.16),
            0 0 0 16px rgba(13, 45, 71, 0.08),
            0 0 36px rgba(13, 45, 71, 0.42),
            0 0 56px rgba(13, 45, 71, 0.28);
          animation: dotGlowPulse 1.5s ease-in-out infinite;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }

        @keyframes dotGlowPulse {
          0%,
          100% {
            box-shadow:
              0 0 0 8px rgba(13, 45, 71, 0.14),
              0 0 0 16px rgba(13, 45, 71, 0.07),
              0 0 34px rgba(13, 45, 71, 0.36),
              0 0 52px rgba(13, 45, 71, 0.24);
          }
          50% {
            box-shadow:
              0 0 0 12px rgba(13, 45, 71, 0.2),
              0 0 0 23px rgba(13, 45, 71, 0.1),
              0 0 48px rgba(13, 45, 71, 0.5),
              0 0 72px rgba(13, 45, 71, 0.34);
          }
        }

      `}</style>
    </section>
  );
}



// //digital_platform\components\WorkProcess.tsx
// "use client";
 
// import { useEffect, useRef, useState } from "react";
 
// const steps = [
//   {
//     no: "1",
//     color: "bg-green-400",
//     title: "Strategic Planning in Digital Marketing",
//     text: "The first step in any effective digital marketing strategy is thorough planning. This includes research, competitor analysis, and clear goal setting.",
//     left: "13%",    // 175 / 1350 ≈ 13%
//     top: "55px",
//   },
//   {
//     no: "2",
//     color: "bg-rose-400",
//     title: "Strategy: Crafting a Roadmap for Digital Marketing Success",
//     text: "At the strategy stage, we define the most effective approaches to engage your audience and achieve your marketing objectives.",
//     left: "50%",    // 675 / 1350
//     top: "55px",
//   },
//   {
//     no: "3",
//     color: "bg-blue-600",
//     title: "Execution: Bringing Your Digital Marketing Plan to Life",
//     text: "This is where strategy turns into action through campaigns across the most effective digital marketing channels.",
//     left: "87%",    // 1175 / 1350
//     top: "55px",
//   },
//   {
//     no: "4",
//     color: "bg-pink-500",
//     title: "Tracking and Analysis: Measuring Digital Marketing Success",
//     text: "We track key performance metrics, analyze campaign results, and improve campaigns continuously.",
//     left: "87%",
//     top: "355px",
//   },
//   {
//     no: "5",
//     color: "bg-indigo-400",
//     title: "Refinement: Optimizing Your Digital Marketing Strategy",
//     text: "After analyzing results, we fine-tune your digital marketing plan to maximize performance and ROI.",
//     left: "50%",
//     top: "355px",
//   },
//   {
//     no: "6",
//     color: "bg-sky-400",
//     title: "Repeat: Continuously Optimizing Your Digital Marketing Success",
//     text: "After achieving results, we restart the process to further improve performance and growth.",
//     left: "13%",
//     top: "355px",
//   },
// ];
 
// // Points in SVG coordinate space (used for length calculation)
// const circlePoints = [
//   { x: 175, y: 95 },
//   { x: 675, y: 95 },
//   { x: 1175, y: 95 },
//   { x: 1175, y: 395 },
//   { x: 675, y: 395 },
//   { x: 175, y: 395 },
// ];
 
// export default function WorkProcess() {
//   const pathRef = useRef<SVGPathElement>(null);
//   const [glowStates, setGlowStates] = useState<boolean[]>(new Array(6).fill(false));
//   const [drawingComplete, setDrawingComplete] = useState(false);
 
//  useEffect(() => {
//   const path = pathRef.current;
//   if (!path) return;

//   const section = path.closest("section");
//   if (!section) return;

//   const totalLength = path.getTotalLength();

//   path.style.strokeDasharray = `${totalLength}`;
//   path.style.strokeDashoffset = `${totalLength}`;

//   setGlowStates(new Array(6).fill(false));
//   setDrawingComplete(false);

//   let animationFrame: number;
//   let hasAnimated = false;

//   const observer = new IntersectionObserver(
//     ([entry]) => {
//       if (!entry.isIntersecting || hasAnimated) return;

//       hasAnimated = true;

//       const lengthsAtPoints: number[] = [];

//       for (let i = 0; i < circlePoints.length; i++) {
//         const point = circlePoints[i];
//         let bestLength = 0;
//         let minDist = Infinity;

//         for (let len = 0; len <= totalLength; len += 1) {
//           const pt = path.getPointAtLength(len);
//           const dx = pt.x - point.x;
//           const dy = pt.y - point.y;
//           const dist = Math.hypot(dx, dy);

//           if (dist < minDist) {
//             minDist = dist;
//             bestLength = len;
//           }
//         }

//         lengthsAtPoints.push(bestLength);
//       }

//       const duration = 1800;
//       const startTime = performance.now();

//       const animate = (now: number) => {
//         const elapsed = now - startTime;
//         const progress = Math.min(1, elapsed / duration);
//         const currentLength = totalLength * progress;

//         path.style.strokeDashoffset = `${totalLength - currentLength}`;

//         setGlowStates((prev) =>
//           prev.map((state, i) => state || currentLength >= lengthsAtPoints[i])
//         );

//         if (progress < 1) {
//           animationFrame = requestAnimationFrame(animate);
//         } else {
//           setDrawingComplete(true);
//           setGlowStates(new Array(6).fill(true));
//         }
//       };

//       animationFrame = requestAnimationFrame(animate);
//     },
//     {
//       threshold: 0.35,
//     }
//   );

//   observer.observe(section);

//   return () => {
//     observer.disconnect();
//     cancelAnimationFrame(animationFrame);
//   };
// }, []);
 
//  return (
//   <section
//     className="w-full px-4 py-16 sm:px-6 md:px-10 md:py-24"
//     style={{
//       background:
//         "#6887FB",
//     }}
//   >
//     <div className="mx-auto max-w-[1500px] text-center">
//       <span className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white sm:text-sm">
//         Our Process
//       </span>

//       <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-[#0d2d47] sm:text-5xl md:text-[72px]">
//         Behind Every Great Result
//         <br />
//         Is Our Work Process
//       </h2>

//       <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
//         Smart, simple, and efficient solutions for every client project.
//       </p>

//       {/* Desktop view */}
//       <div className="relative mx-auto mt-16 hidden h-[720px] max-w-[1350px] lg:block">
//         <svg
//           className="absolute inset-0 z-0 h-full w-full"
//           viewBox="0 0 1350 720"
//           fill="none"
//         >
//           <path
//             ref={pathRef}
//            d="M175 95 C360 50 490 135 675 95 C850 55 1030 55 1175 95 C1325 145 1325 340 1175 395 C990 460 850 350 675 395 C490 440 355 450 175 395"
//             stroke="#0d2d47"
//             strokeWidth="3"
//          style={{
//   strokeDasharray: drawingComplete ? "10 12" : undefined,
// }}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className={drawingComplete ? "animate-dash-flow" : ""}
//           />
//         </svg>

//         {steps.map((step, idx) => (
//           <div
//             key={step.no}
//             className="absolute z-10 w-[330px] -translate-x-1/2 text-center"
//             style={{ left: step.left, top: step.top }}
//           >
//             <div
//               className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0d2d47] text-3xl font-bold text-white shadow-[0_18px_45px_rgba(13,45,71,0.28)] transition-all duration-300 ${
//                 glowStates[idx] ? "glow-effect" : ""
//               }`}
//             >
//               {step.no}
//             </div>

//             <div className="mt-5 rounded-2xl border border-black/10 bg-white/20 p-5 backdrop-blur-sm">
//               <h3 className="text-base font-bold leading-snug text-[#0d2d47]">
//                 {step.title}
//               </h3>

//               <p className="mt-4 text-sm leading-relaxed text-[#0d2d47]/75">
//                 {step.text}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Mobile view */}
//       <div className="mt-12 grid gap-5 lg:hidden">
//         {steps.map((step, idx) => (
//           <div
//             key={step.no}
//             className="rounded-2xl border border-black/10 bg-white/20 p-5 text-left backdrop-blur-sm"
//           >
//             <div className="flex items-start gap-4">
//               <div
//                 className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0d2d47] text-lg font-bold text-white ${
//                   glowStates[idx] ? "glow-effect" : ""
//                 }`}
//               >
//                 {step.no}
//               </div>

//               <div>
//                 <h3 className="font-bold leading-snug text-[#0d2d47]">
//                   {step.title}
//                 </h3>

//                 <p className="mt-2 text-sm leading-relaxed text-[#0d2d47]/75">
//                   {step.text}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

//     <style>{`
//       .glow-effect {
//         box-shadow: 0 0 0 6px rgba(13, 45, 71, 0.12), 0 0 28px rgba(13, 45, 71, 0.35);
//         transition: box-shadow 0.2s ease;
//       }

//       @keyframes dashFlow {
//         0% {
//           stroke-dashoffset: 0;
//         }
//         100% {
//           stroke-dashoffset: -44;
//         }
//       }

//       .animate-dash-flow {
//         animation: dashFlow 0.8s linear infinite;
//       }
//     `}</style>
//   </section>
// );
// }
 
