//marketing-website\components\ContactSection.jsx
"use client";

import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
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
      className="relative min-h-screen w-full overflow-hidden"
    >

      {/* 🔥 BACKGROUND (CONTINUOUS LOOP) */}
      <motion.img
        src="/background-contact-desktop.avif"
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover"
        animate={{
          scale: [1.05, 1.1, 1.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 grid md:grid-cols-2 h-full px-4 sm:px-6 md:px-10 py-16 sm:py-24 text-white gap-10 md:gap-12">

        {/* LEFT TEXT */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6">
            <Image
              src="/ne2.png"
              alt="NovaTech logo"
              width={180}
              height={72}
              className="h-auto w-auto"
            />
          </div>

          <p className="uppercase text-sm mb-6 text-white/80">
            Ready to elevate your brand? <br />
            Let’s start today
          </p>

          <h1 className="uppercase leading-[0.9] font-medium
            text-4xl sm:text-5xl md:text-[100px] lg:text-[130px]">
            Contact <br /> Us
          </h1>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1 }}
          className="flex items-center"
        >
          <form className="w-full max-w-2xl ml-auto space-y-7 sm:space-y-10">

            {/* NAME ROW */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

              <div className="group">
                <label className="text-sm text-white/70 group-focus-within:text-white transition">
                  First name *
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/40
                    focus:border-white focus:outline-none py-2 transition"
                />
              </div>

              <div className="group">
                <label className="text-sm text-white/70 group-focus-within:text-white transition">
                  Last name *
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/40
                    focus:border-white focus:outline-none py-2 transition"
                />
              </div>

            </div>

            {/* EMAIL */}
            <div className="group">
              <label className="text-sm text-white/70 group-focus-within:text-white transition">
                Email *
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-white/40
                  focus:border-white focus:outline-none py-2 transition"
              />
            </div>

            {/* MESSAGE */}
            <div className="group">
              <label className="text-sm text-white/70 group-focus-within:text-white transition">
                Message
              </label>
              <textarea
                rows="3"
                className="w-full bg-transparent border-b border-white/40
                  focus:border-white focus:outline-none py-2 resize-none transition"
              />
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="mt-6 px-10 py-3 rounded-full
                bg-[#5A7EFF] hover:bg-[#4a6ae0]
                transition text-white cursor-pointer"
            >
              Submit
            </motion.button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
