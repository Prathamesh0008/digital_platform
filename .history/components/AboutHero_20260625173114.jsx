"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  { label: "Story", img: "/about1.jpg", id: "story" },
  { label: "Team", img: "/about2.jpg", id: "team" },
  { label: "Contact", img: "/about3.jpg", id: "cta" },
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
<section className="relative min-h-[78svh] w-full overflow-hidden md:h-screen">
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/about-hero.jpg"
          alt="About Nova Techscience"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,45,71,0.5),rgba(13,45,71,0.58),rgba(13,45,71,0.84))]" />
      </div>

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
        className="absolute inset-0 z-20 hidden md:grid md:grid-cols-4"
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

              <div className="absolute bottom-4 left-3 z-10 text-white sm:bottom-6 sm:left-6">
                <h3 className="text-[11px] font-medium tracking-wide sm:text-sm md:text-lg">
                  {item.label}
                </h3>
              </div>
            </motion.div>
          </motion.button>
        ))}
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-30 hidden md:block">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-px bg-white/20"
            style={{ left: `${(i + 1) * 25}%` }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-black/40 " />

      <div className="pointer-events-none relative z-40 flex h-full flex-col items-center justify-center px-5 py-20 text-center text-white sm:px-6 md:px-6 md:py-0">
        <div className="rounded-[28px] border border-white/12 bg-white/8 px-5 py-6 shadow-[0_24px_70px_rgba(13,45,71,0.18)] backdrop-blur-[6px] md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0">
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-[300px] text-[2rem] font-semibold leading-[1.02] sm:max-w-xl md:text-5xl lg:text-6xl"
        >
          We Build <br /> Digital Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          className="mt-4 max-w-[280px] text-sm leading-6 text-white/84 sm:max-w-md md:text-base"
        >
          Strategy, creativity, and technology combined to create impactful
          digital growth.
        </motion.p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-40 px-4 pb-5 md:hidden">
        <div className="rounded-[30px] border border-white/14 bg-[#203648]/55 p-3 shadow-[0_24px_60px_rgba(13,45,71,0.26)] backdrop-blur-xl">
          <div className="mb-3 flex items-center justify-between px-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
              Explore
            </span>
            <span className="h-px flex-1 bg-white/10 ml-3" />
          </div>
          <div className="grid grid-cols-2 gap-3">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="rounded-[20px] border border-white/10 bg-white/[0.06] px-4 py-3.5 text-left text-sm font-medium text-white transition active:scale-[0.98]"
            >
              {item.label}
            </button>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
