"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  { label: "Story", img: "/about1.jpg", id: "story" },
  { label: "Team", img: "/about2.jpg", id: "team" },
  { label: "Values", img: "/about3.jpg", id: "cta" },
  { label: "Approach", img: "/about4.jpg", id: "approach" },
];

export default function AboutHero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
<section className="relative h-[72vh] w-full overflow-hidden md:h-screen">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="absolute inset-0 z-20 grid grid-cols-4"
      >
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => scrollToSection(item.id)}
            variants={{
              hidden: {
                y: i % 2 === 0 ? -80 : 80,
                opacity: 0,
                scale: 0.95,
              },
              visible: {
                y: 0,
                opacity: 1,
                scale: 1,
              },
            }}
            transition={{
              duration: 0.9,
              delay: i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative cursor-pointer overflow-hidden text-left"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative h-full w-full will-change-transform"
            >
              <Image
                src={item.img}
                alt={item.label}
                fill
                sizes="25vw"
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/50 transition group-hover:bg-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5A7EFF] to-transparent opacity-0 transition duration-500 group-hover:opacity-40" />

              <div className="absolute bottom-6 left-3 z-10 text-white sm:left-6">
                <h3 className="text-xs font-medium tracking-wide sm:text-sm md:text-lg">
                  {item.label}
                </h3>
              </div>
            </motion.div>
          </motion.button>
        ))}
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-30">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-px bg-white/20"
            style={{ left: `${(i + 1) * 25}%` }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-black/40" />

      <div className="pointer-events-none relative z-40 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl font-semibold leading-tight md:text-5xl lg:text-6xl"
        >
          We Build <br /> Digital Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          className="mt-4 max-w-md text-sm text-white/80 md:text-base"
        >
          Strategy, creativity, and technology combined to create impactful
          digital growth.
        </motion.p>
      </div>
    </section>
  );
}