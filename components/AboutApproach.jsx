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
    <>
      <section className="bg-[#EAEBDB] px-4 py-14 sm:px-6 md:hidden">
        <div className="mx-auto max-w-6xl space-y-5">
          {approaches.map((item, i) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-[30px] border border-[#0d2d47]/10"
            >
              <div className="relative min-h-[420px]">
                <Image
                  src={item.bg}
                  alt={item.title}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-[#0d2d47]/30" />
                <div
                  className={`absolute inset-0 ${
                    i === 0
                      ? "bg-[#5A7EFF]/48"
                      : i === 1
                      ? "bg-[#7392FB]/46"
                      : i === 2
                      ? "bg-[#8EA5F1]/46"
                      : "bg-[#C4CFE3]/44"
                  }`}
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,45,71,0.16),rgba(13,45,71,0.5))]" />

                <div className="relative z-10 flex min-h-[420px] flex-col justify-end p-6 text-white">
                  <h2 className="text-4xl leading-[0.95] drop-shadow-[0_8px_24px_rgba(13,45,71,0.28)]">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-base leading-7 text-white/92">
                    {item.description}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/82">
                    {item.extra}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        ref={ref}
        className="relative hidden bg-[#EAEBDB] md:block"
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

              {/* Contrast layer for better readability */}
              <div className="absolute inset-0 bg-[#0d2d47]/26" />

              {/* Soft color overlay */}
              <div
                className={`absolute inset-0 ${
                  i === 0
                    ? "bg-[#5A7EFF]/48"
                    : i === 1
                    ? "bg-[#7392FB]/46"
                    : i === 2
                    ? "bg-[#8EA5F1]/46"
                    : "bg-[#C4CFE3]/44"
                }`}
              />

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,45,71,0.32),rgba(13,45,71,0.16)_42%,rgba(13,45,71,0.1))]" />

              {/* Content */}
              <div className="relative z-10 max-w-4xl text-center text-white md:text-left">
                <motion.h2
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false, amount: 0.4 }}
                  className="mb-6 text-4xl leading-[0.92] text-white drop-shadow-[0_8px_24px_rgba(13,45,71,0.28)] sm:text-6xl md:mb-8 md:text-[100px]"
                >
                  {item.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: false, amount: 0.4 }}
                  className="mx-auto mb-5 max-w-2xl text-base leading-relaxed text-white sm:text-lg md:mx-0 md:mb-6 md:text-xl"
                >
                  {item.description}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: false, amount: 0.4 }}
                  className="mx-auto max-w-xl text-sm leading-relaxed text-white/88 sm:text-base md:mx-0"
                >
                  {item.extra}
                </motion.p>

                <div className="mx-auto mt-8 h-[2px] w-24 bg-white/70 md:mx-0 md:mt-10" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
    </>
  );
}
