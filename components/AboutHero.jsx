"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  const items = [
    { label: "Story", img: "/about1.jpg", id: "story" },
    { label: "Team", img: "/about2.jpg", id: "team" },
    { label: "Values", img: "/about3.jpg", id: "cta" },
    { label: "Approach", img: "/about4.jpg", id: "approach" },
  ];

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
    <section className="relative h-screen w-full overflow-hidden">

      {/* 🔥 PANELS */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 z-20">

        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => scrollToSection(item.id)}
            className="relative group overflow-hidden cursor-pointer"
          >

            {/* IMAGE */}
            <motion.img
              src={item.img}
              alt={item.label}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition" />

            {/* BLUE HOVER */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-40 
              bg-gradient-to-t from-[#5A7EFF] to-transparent transition duration-500"
            />

          
  {/* 🔥 HORIZONTAL TEXT (BOTTOM) */}
<div className="absolute bottom-6 left-6 text-white z-10">
  <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold tracking-wide drop-shadow-lg">
    {item.label}
  </h3>
</div>

          </div>
        ))}
      </div>

      {/* 🔥 DIVIDER LINES */}
      <div className="absolute inset-0 flex z-30 pointer-events-none">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="w-[1px] bg-white/20 h-full"
            style={{ left: `${(i + 1) * 25}%`, position: "absolute" }}
          />
        ))}
      </div>

      {/* 🔥 GLOBAL OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      {/* 🔥 CENTER TEXT */}
      <div className="relative z-40 h-full flex flex-col justify-center items-center text-center text-white px-6 pointer-events-none">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold"
        >
          We Build <br /> Digital Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-white/80 max-w-xl"
        >
          Strategy, creativity, and technology combined to create
          impactful digital growth.
        </motion.p>

      </div>
    </section>
  );
}