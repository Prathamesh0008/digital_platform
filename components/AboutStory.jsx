"use client";

import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section
      id="story"
      className="relative min-h-screen px-4 sm:px-6 md:px-10 py-20 sm:py-28 md:py-40 overflow-hidden bg-[#EAEBDB]"
    >

      {/* 🔥 SOFT GLOW */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 
        w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-[#5A7EFF]/10 blur-[120px] md:blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* 🔥 TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ amount: 0.4 }}
          className="mb-16 sm:mb-24 md:mb-32 max-w-4xl"
        >
          {/* <p className="uppercase text-black/50 text-sm tracking-[0.3em] mb-6">
            Our Story
          </p> */}

          <h1 className="uppercase leading-[0.9]
            text-4xl sm:text-6xl md:text-[100px] lg:text-[120px] font-medium">
            From Vision <br />
            To Impact
          </h1>
        </motion.div>

        {/* 🔥 MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 sm:gap-14 md:gap-20 items-center">

          {/* 🔥 IMAGE (SLIDE FROM LEFT) */}
          <motion.div
            initial={{ opacity: 0, x: -120, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1], // premium easing
            }}
            viewport={{ amount: 0.4 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <motion.img
                src="/about1.jpg"
                alt="Story"
                className="w-full h-[360px] sm:h-[450px] md:h-[550px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </div>

            {/* FLOAT CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 sm:-bottom-10 -right-2 sm:-right-10
                bg-white px-8 py-6 rounded-2xl shadow-xl"
            >
              <p className="text-xs uppercase text-black/40 mb-1">
                Founded
              </p>
              <p className="text-2xl font-medium text-[#5A7EFF]">
                2020
              </p>
            </motion.div>
          </motion.div>

          {/* 🔥 TEXT (SLIDE FROM RIGHT) */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ amount: 0.4 }}
            className="space-y-10"
          >
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl leading-relaxed font-medium"
            >
              NovaTech started with a simple belief —  
              brands deserve more than visibility.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-black/70 leading-relaxed"
            >
              What began as a small team of passionate creators has evolved
              into a performance-driven agency focused on delivering real,
              measurable impact.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-black/70 leading-relaxed"
            >
              Today, we blend strategy, creativity, and technology to help
              businesses grow, scale, and stand out in a competitive digital world.
            </motion.p>

            <div className="h-[1px] bg-black/20 w-full" />
          </motion.div>

        </div>

        {/* 🔥 BIG STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ amount: 0.4 }}
          className="mt-16 sm:mt-24 md:mt-40 max-w-5xl"
        >
          <h2 className="text-2xl sm:text-4xl md:text-6xl leading-tight font-medium">
            We don’t just build campaigns —  
            <br />
            we build <span className="text-[#5A7EFF]">long-term brand value.</span>
          </h2>
        </motion.div>

      </div>
    </section>
  );
}
