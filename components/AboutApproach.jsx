"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutApproach() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const approaches = [
    {
      title: "Strategy First",
      bg: "/Strategy First.jpg",
      description:
        "Every campaign begins with deep research, clear goals, and a roadmap tailored to your unique challenges.",
      extra:
        "We analyze market trends, competitors, and user behavior to create strategies that are not just creative, but highly effective and scalable.",
    },
    {
      title: "Creative Excellence",
      bg: "/Creative Excellence.jpg",
      description:
        "We craft compelling visuals and narratives that capture attention and leave lasting impressions.",
      extra:
        "Our design approach focuses on storytelling, emotional connection, and brand consistency — ensuring your identity stands out in a crowded digital space.",
    },
    {
      title: "Data-Driven Execution",
      bg: "/Data Driven Execution.jpg",
      description:
        "Real-time analytics guide our decisions, ensuring every dollar spent delivers maximum ROI.",
      extra:
        "From performance tracking to conversion optimization, we continuously refine campaigns using insights that drive measurable growth.",
    },
    {
      title: "Continuous Optimization",
      bg: "/Continuous Optimization.jpg",
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
      style={{ height: `${approaches.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-full w-[400vw]">
          {approaches.map((item, i) => (
            <div
              key={item.title}
              className="relative flex h-full w-screen items-center justify-center overflow-hidden px-5 sm:px-8 md:px-20"
            >
              {/* Background image */}
              <Image
                src={item.bg}
                alt={item.title}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />

              {/* Dark overlay */}
              {/* <div className="absolute inset-0 bg-black/10" /> */}

              {/* Soft color overlay */}
              <div
                className={`absolute inset-0 ${
                  i === 0
                    ? "bg-[#5A7EFF]/40"
                    : i === 1
                    ? "bg-[#7392FB]/40"
                    : i === 2
                    ? "bg-[#8EA5F1]/40"
                    : "bg-[#C4CFE3]/40"
                }`}
              />

              {/* Content */}
              <div className="relative z-10 max-w-4xl text-center text-white md:text-left">
                <motion.h2
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false, amount: 0.4 }}
                  className="mb-6 text-4xl leading-[0.92] sm:text-6xl md:mb-8 md:text-[100px]"
                >
                  {item.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: false, amount: 0.4 }}
                  className="mx-auto mb-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg md:mx-0 md:mb-6 md:text-xl"
                >
                  {item.description}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: false, amount: 0.4 }}
                  className="mx-auto max-w-xl text-sm leading-relaxed text-white/75 sm:text-base md:mx-0"
                >
                  {item.extra}
                </motion.p>

                <div className="mx-auto mt-8 h-[2px] w-24 bg-white/40 md:mx-0 md:mt-10" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}