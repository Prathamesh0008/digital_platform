"use client";

import { motion } from "framer-motion";

export default function PortfolioHero() {
  const sideVideos = [
    { src: "/file(5).mp4", title: "Brand Evolution" },
    { src: "/file (2).mp4", title: "Creative Campaign" },
    { src: "/file.mp4", title: "Brand Management" },
  ];

  return (
    <section className="w-full bg-[#EAEBDB] px-10 py-20">

      {/* 🔥 HEADER */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <p className="uppercase text-sm text-black/50 mb-4 tracking-[0.2em]">
          Our Work
        </p>

        <h2 className="text-[40px] md:text-[60px] lg:text-[70px] font-medium text-black">
          Featured <span className="text-[#5A7EFF]">Projects</span>
        </h2>

        <div className="w-20 h-[2px] bg-[#5A7EFF] mx-auto mt-6" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {/* 🔥 MAIN VIDEO (YOUR HERO VIDEO) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 relative h-[80vh] rounded-2xl overflow-hidden shadow-2xl"
        >
          <video
            src="/file(3).mp4"   
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* content */}
          <div className="absolute bottom-10 left-10 max-w-lg">
            <h1 className="text-[50px] md:text-[80px] leading-[0.9] font-medium text-white">
              Product Story
            </h1>

            <p className="mt-3 text-white/80">
              A cinematic showcase of design, motion, and storytelling.
            </p>
          </div>
        </motion.div>

        {/* 🔥 SIDE VIDEOS */}
        <div className="flex flex-col gap-4 h-[80vh]">

          {sideVideos.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.04 }}
              className="group relative flex-1 rounded-xl overflow-hidden cursor-pointer shadow-lg"
            >

              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300" />

              {/* title */}
              <div className="absolute bottom-3 left-4 text-sm font-medium text-white">
                {item.title}
              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}