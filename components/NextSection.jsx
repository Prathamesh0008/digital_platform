//marketing-website\components\NextSection.jsx
"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function NextSection() {
  const ref = useRef(null);
 const isInView = useInView(ref, {
  amount: 0.2,
  margin: "-100px 0px -100px 0px", // 🔥 delays reset
});
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen text-black px-10 py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #5A7EFF, #7392FB, #8EA5F1, #C4CFE3, #EAEBDB)",
      }}
    >

      {/* 🔥 TOP CONTENT */}
      <motion.div
        className="max-w-6xl"
        variants={{
          hidden: { opacity: 0, x: -60 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1 }}
      >
        <h1 className="uppercase tracking-tight leading-[0.9]
          text-[60px] md:text-[100px] lg:text-[130px] font-medium">
          Redefining <br />
          Marketing For <br />
          The Digital Age
        </h1>
      </motion.div>

      <motion.div
        className="mt-16 max-w-xl"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p className="text-lg leading-relaxed">
          NovaTech is a performance-driven digital marketing company based in Mumbai.
          With a team of creative professionals, we specialize in brand storytelling,
          SEO strategies, and engagement campaigns that help businesses grow and connect
          with their audience effectively in the digital world.
        </p>
      </motion.div>

      {/* 🔲 DIVIDER */}
      <motion.div
        className="mt-20 border-t border-black/20"
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1 }}
        style={{ transformOrigin: "left" }}
      />

      {/* 🔥 BOTTOM SECTION */}
      <div className="relative mt-20">

        {/* GRID LINES */}
        <div className="absolute inset-0 grid grid-cols-2 pointer-events-none">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border-l border-black/20" />
          ))}
        </div>

        {/* GRID */}
        <div className="relative grid md:grid-cols-2 gap-16">

          {/* LEFT TITLE */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 1 }}
          >
            <h2 className="uppercase tracking-tight leading-[0.9]
              text-[60px] md:text-[90px] lg:text-[110px] font-medium">
              Our <br /> Services
            </h2>
          </motion.div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {[
              {
                title: "Comprehensive Digital Campaigns",
                text: "Creating holistic digital strategies.",
              },
              {
                title: "SEO Mastery",
                text: "Boosting your site on search engines.",
              },
              {
                title: "Social Media Engagement",
                text: "Building relationships with your audience.",
              },
              {
                title: "Targeted Advertisement",
                text: "Maximizing ROI through precise targeting.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                }}
                className="group"
              >

                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm mb-4">
                  {i + 1}
                </div>

                <h3 className="uppercase font-medium mb-3">
                  {item.title}
                </h3>

                <p className="text-black/70">
                  {item.text}
                </p>

                <div className="mt-4 h-[1px] bg-black/20 w-0 group-hover:w-full transition-all duration-300" />

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}