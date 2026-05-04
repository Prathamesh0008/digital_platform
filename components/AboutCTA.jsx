"use client";

import { motion } from "framer-motion";

export default function AboutValues() {
  const values = [
    {
      title: "Innovation",
      text: "We constantly push boundaries to deliver fresh, forward-thinking solutions.",
    },
    {
      title: "Strategy",
      text: "Every decision is backed by data, insight, and a clear long-term vision.",
    },
    {
      title: "Creativity",
      text: "We craft unique experiences that make brands stand out in crowded markets.",
    },
    {
      title: "Impact",
      text: "Our focus is not just visibility — but measurable business growth.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <motion.img
        src="/contact-bg.avif"
        alt="Values Background"
        className="absolute inset-0 w-full h-full object-cover"
        animate={{ scale: [1.05, 1.1, 1.05] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-black/75" />

      {/* 🔥 CONTENT */}
      <div className="relative z-20 px-4 sm:px-6 md:px-10 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 sm:gap-20 md:gap-40">

          {/* 🔥 LEFT SECTION - SLIDING FROM LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="max-w-xl"
          >
            <p className="uppercase text-sm text-white/60 mb-6 tracking-[0.2em]">
              Our Values
            </p>

            <h2
              className="uppercase leading-[0.9]
              text-4xl sm:text-6xl md:text-[90px] lg:text-[110px] 
              text-white font-medium max-w-[600px]"
            >
              What Drives <br />
              <span className="text-[#5A7EFF]">Everything</span>
            </h2>

            <p className="mt-8 text-white/70 max-w-md leading-relaxed">
              Our philosophy is built on a strong foundation of innovation,
              creativity, and measurable impact — helping brands grow with clarity
              and confidence.
            </p>
          </motion.div>

          {/* 🔥 RIGHT SECTION - SLIDING FROM RIGHT TO LEFT */}
          <div className="space-y-8 sm:space-y-12">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 100 }} // 👈 RIGHT TO LEFT (positive x starts from right)
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: i * 0.2 + 0.2,
                  duration: 0.8,
                  ease: "easeOut"
                }}
                viewport={{ once: false, margin: "-100px" }} // 👈 Triggers slightly before entering viewport
                className="group cursor-pointer"
              >
                {/* TITLE */}
                <h3 className="text-2xl md:text-3xl text-white font-medium">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="mt-3 text-white/60 max-w-md leading-relaxed">
                  {item.text}
                </p>

                {/* UNDERLINE */}
                <div
                  className="mt-6 h-[2px] w-0 bg-[#5A7EFF] 
                  group-hover:w-full transition-all duration-500"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
