"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutApproach() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]); // For 4 slides, move 75% (each slide is 25%)

  const approaches = [
    {
      title: "Strategy First",
      description:
        "Every campaign begins with deep research, clear goals, and a roadmap tailored to your unique challenges.",
      extra:
        "We analyze market trends, competitors, and user behavior to create strategies that are not just creative, but highly effective and scalable.",
    },
    {
      title: "Creative Excellence",
      description:
        "We craft compelling visuals and narratives that capture attention and leave lasting impressions.",
      extra:
        "Our design approach focuses on storytelling, emotional connection, and brand consistency — ensuring your identity stands out in a crowded digital space.",
    },
    {
      title: "Data-Driven Execution",
      description:
        "Real-time analytics guide our decisions, ensuring every dollar spent delivers maximum ROI.",
      extra:
        "From performance tracking to conversion optimization, we continuously refine campaigns using insights that drive measurable growth.",
    },
    {
      title: "Continuous Optimization",
      description:
        "We never stop improving. Constant testing and iteration keep your campaigns ahead of the curve.",
      extra:
        "Through A/B testing, user feedback, and performance metrics, we evolve your campaigns to maintain long-term success and competitive advantage.",
    },
  ];

  return (
    <section 
      ref={ref} 
      className="relative bg-[#EAEBDB]"
    >
      <div className="md:hidden">
        {approaches.map((item, i) => (
          <div
            key={item.title}
            className={`px-4 sm:px-6 py-16 ${
              i === 0
                ? "bg-[#5A7EFF]"
                : i === 1
                ? "bg-[#7392FB]"
                : i === 2
                ? "bg-[#8EA5F1]"
                : "bg-[#C4CFE3]"
            }`}
          >
            <div className="max-w-3xl text-white">
              <h2 className="text-4xl sm:text-5xl leading-[0.95] mb-6">{item.title}</h2>
              <p className="text-base text-white/90 leading-relaxed mb-5">{item.description}</p>
              <p className="text-sm text-white/75 leading-relaxed">{item.extra}</p>
            </div>
          </div>
        ))}
      </div>

      {/* STICKY CONTAINER */}
      <div className="hidden md:block" style={{ height: `${approaches.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* HORIZONTAL WRAPPER */}
        <motion.div style={{ x }} className="flex h-full w-[400vw]"> {/* Keep original width */}
          {approaches.map((item, i) => (
            <div
              key={i}
              className="w-screen h-full flex items-center justify-center px-20 relative"
            >
              {/* BACKGROUND COLOR BLOCK */}
              <div className={`absolute inset-0 ${
                i === 0 && "bg-[#5A7EFF]"
              } ${
                i === 1 && "bg-[#7392FB]"
              } ${
                i === 2 && "bg-[#8EA5F1]"
              } ${
                i === 3 && "bg-[#C4CFE3]"
              }`} />

              {/* CONTENT */}
              <div className="relative z-10 max-w-4xl text-white">
                <motion.h2
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-[60px] md:text-[100px] leading-[0.9] mb-8"
                >
                  {item.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-white/90 leading-relaxed mb-6 max-w-2xl"
                >
                  {item.description}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-base text-white/70 leading-relaxed max-w-xl"
                >
                  {item.extra}
                </motion.p>

                <div className="mt-10 h-[2px] w-24 bg-white/40" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      </div>
    </section>
  );
}



















// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function AboutApproach() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"]
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]); // For 4 slides, move 75% (each slide is 25%)

// const approaches = [
//   {
//     title: "Strategy First",
//     image: "/Strategy first.png",
//     description:
//       "Every campaign begins with deep research, clear goals, and a roadmap tailored to your unique challenges.",
//     extra:
//       "We analyze market trends, competitors, and user behavior to create strategies that are not just creative, but highly effective and scalable.",
//   },
//   {
//     title: "Creative Excellence",
//     image: "/Creative Excellence.png",
//     description:
//       "We craft compelling visuals and narratives that capture attention and leave lasting impressions.",
//     extra:
//       "Our design approach focuses on storytelling, emotional connection, and brand consistency — ensuring your identity stands out in a crowded digital space.",
//   },
//   {
//     title: "Data-Driven Execution",
//     image: "/Data Driven 1.png",
//     description:
//       "Real-time analytics guide our decisions, ensuring every dollar spent delivers maximum ROI.",
//     extra:
//       "From performance tracking to conversion optimization, we continuously refine campaigns using insights that drive measurable growth.",
//   },
//   {
//     title: "Continuous Optimization",
//     image: "/Continous Optimization.png",
//     description:
//       "We never stop improving. Constant testing and iteration keep your campaigns ahead of the curve.",
//     extra:
//       "Through A/B testing, user feedback, and performance metrics, we evolve your campaigns to maintain long-term success and competitive advantage.",
//   },
// ];

//   return (
//     <section 
//       ref={ref} 
//       className="relative bg-[#EAEBDB]"
//     >
//       <div className="md:hidden">
//         {approaches.map((item, i) => (
//          <div
//   key={item.title}
//   className="relative overflow-hidden px-4 py-16 sm:px-6"
// >
//   <div
//     className="absolute inset-0 bg-cover bg-center"
//     style={{ backgroundImage: `url("${item.image}")` }}
//   />
//   <div className="absolute inset-0 bg-[#0d2d47]/60" />

//   <div className="relative z-10 max-w-3xl text-white">
//     <h2 className="mb-6 text-4xl leading-[0.95] sm:text-5xl">
//       {item.title}
//     </h2>
//     <p className="mb-5 text-base leading-relaxed text-white/90">
//       {item.description}
//     </p>
//     <p className="text-sm leading-relaxed text-white/75">
//       {item.extra}
//     </p>
//   </div>
// </div>
//         ))}
//       </div>

//       {/* STICKY CONTAINER */}
//       <div className="hidden md:block" style={{ height: `${approaches.length * 100}vh` }}>
//       <div className="sticky top-0 h-screen overflow-hidden">
        
//         {/* HORIZONTAL WRAPPER */}
//         <motion.div style={{ x }} className="flex h-full w-[400vw]"> {/* Keep original width */}
//           {approaches.map((item, i) => (
//             <div
//               key={i}
//               className="w-screen h-full flex items-center justify-center px-20 relative"
//             >
//               {/* BACKGROUND COLOR BLOCK */}
//              <div
//   className="absolute inset-0 bg-cover bg-center"
//   style={{ backgroundImage: `url("${item.image}")` }}
// />
// <div className="absolute inset-0 bg-gradient-to-r from-[#0d2d47]/85 via-[#0d2d47]/70 to-[#0d2d47]/55" />
//               {/* CONTENT */}
//               <div className="relative z-10 max-w-4xl text-white">
//                 <motion.h2
//                   initial={{ opacity: 0, y: 60 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8 }}
//                   className="text-[60px] md:text-[100px] leading-[0.9] mb-8 font-semibold text-white"
// style={{
//   textShadow: `
//     0 2px 10px rgba(0,0,0,0.7),
//     0 8px 30px rgba(0,0,0,0.6),
//     0 0 50px rgba(255,255,255,0.25)
//   `,
// }}
//                 >
//                   {item.title}
//                 </motion.h2>

//                 <motion.p
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                   className="text-lg md:text-xl text-white leading-relaxed mb-6 max-w-2xl"
// style={{
//   textShadow: "0 2px 12px rgba(0,0,0,0.7)",
// }}
//                 >
//                   {item.description}
//                 </motion.p>

//                 <motion.p
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//               className="text-base text-white/90 leading-relaxed max-w-xl"
// style={{
//   textShadow: "0 2px 10px rgba(0,0,0,0.6)",
// }}
//                 >
//                   {item.extra}
//                 </motion.p>

//                 <div className="mt-10 h-[2px] w-24 bg-white/40" />
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//       </div>
//     </section>
//   );
// }
