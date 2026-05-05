"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#EAEBDB] text-black px-4 sm:px-6 md:px-10 py-14 sm:py-20">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 sm:gap-16">

        {/* LEFT CONTACT */}
        <div>
          <div className="mb-6">
            <Image
              src="/logo.png"
              alt="NovaTech logo"
              width={220}
              height={88}
              className="h-auto w-[160px] sm:w-[200px] md:w-[220px] brightness-0 ml"
            />
          </div>

          <p className="mb-4">
            200 Terry Francine St. San Francisco, CA 94158
          </p>
          <p className="mb-2">123-456-7890</p>
          <p>info@novatech.com</p>

          <div className="mt-10 text-sm space-y-2">
            <p className="cursor-pointer">Accessibility Statement</p>
            <p className="cursor-pointer">Privacy Policy</p>
          </div>
        </div>

        {/* RIGHT NEWSLETTER */}
        <div>
          <h3 className="uppercase mb-6 text-lg">
            Subscribe to our newsletter
          </h3>

          <input
            type="email"
            placeholder="Email *"
            className="w-full border-b border-black/30 bg-transparent py-3 outline-none mb-6"
          />

          <div className="flex items-center gap-2 mb-6">
            <input type="checkbox" />
            <span className="text-sm">
              Yes, subscribe me to your newsletter.
            </span>
          </div>

          <button className="bg-[#5A7EFF] text-white px-8 py-3 rounded-full cursor-pointer">
            Submit
          </button>
        </div>

      </div>

      {/* SOCIAL ICONS */}
      {/* <div className="flex justify-center gap-6 mt-16 text-xl">
        <span className="cursor-pointer">in</span>
        <span className="cursor-pointer">ig</span>
        <span className="cursor-pointer">fb</span>
        <span className="cursor-pointer">x</span>
      </div> */}

      {/* 🔥 BIG TEXT (SCROLL ANIMATION) */}
    <motion.h1
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.6 }} // 👈 important
  transition={{ duration: 1, ease: "easeOut" }}
  className="uppercase font-bold tracking-tight leading-[0.8]
    text-4xl sm:text-6xl md:text-[140px] lg:text-[200px] mt-12 sm:mt-16"
>
  Novatech Marketing
</motion.h1>

      {/* BOTTOM TEXT */}
      <div className="mt-6 text-sm">
        © 2026 by NovaTech. Powered and secured by NovaTech
      </div>

    </footer>
  );
}
