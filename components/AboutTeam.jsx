"use client";

import { motion } from "framer-motion";

export default function AboutTeam() {
  const teamMembers = [
    {
      name: "Rajiv Mehta",
      role: "Founder & CEO",
      image: "/team1.jpg",
    },
    {
      name: "Priya Sharma",
      role: "Creative Director",
      image: "/team2.jpg",
    },
    {
      name: "Amit Kumar",
      role: "Head of Strategy",
      image: "/team3.jpg",
    },
    {
      name: "Neha Patel",
      role: "SEO Specialist",
      image: "/team4.jpg",
    },
  ];

  return (
    <section className="relative w-full bg-[#EAEBDB] px-4 sm:px-6 md:px-10 py-20 sm:py-28 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* 🔥 HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-20 md:mb-24"
        >
          <p className="uppercase text-sm text-black/50 mb-4 tracking-[0.2em]">
            The Minds Behind The Magic
          </p>

          <h2 className="uppercase tracking-tight leading-[0.9] 
            text-4xl sm:text-6xl md:text-[100px] lg:text-[120px] font-medium">
            Meet Our <br />
            <span className="text-[#5A7EFF]">Team</span>
          </h2>
        </motion.div>

        {/* 🔥 GRID WITH STAGGER ANIMATION */}
    {/* 🔥 GRID WITH SLOW STAGGER */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, margin: "-100px" }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.35, // 🔥 slower spacing between cards
      },
    },
  }}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
>
          {teamMembers.map((member, i) => (
            <motion.div
  key={i}
  variants={{
    hidden: {
      opacity: 0,
      x: 220,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  }}
  transition={{
    duration: 1.4, // 🔥 slower (was 0.9)
    ease: [0.16, 1, 0.3, 1], // 🔥 smoother luxury easing
  }}
  whileHover={{ y: -12, scale: 1.02 }}
  className="group cursor-pointer"
>

              {/* 🔥 IMAGE CARD */}
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">

                {/* IMAGE */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover 
                  transition duration-700 group-hover:scale-110"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 
                  bg-black/20 group-hover:bg-black/40 transition duration-500" />

                {/* BLUE GRADIENT */}
                <div className="absolute inset-0 opacity-0 
                  group-hover:opacity-60 transition duration-500
                  bg-gradient-to-t from-[#5A7EFF] via-transparent to-transparent"
                />

                {/* 🔥 GLASS PANEL */}
                <div className="absolute bottom-0 left-0 w-full p-6
                  backdrop-blur-md bg-white/10 border-t border-white/20
                  translate-y-6 group-hover:translate-y-0 transition duration-500">

                  <h3 className="text-white text-lg font-semibold">
                    {member.name}
                  </h3>

                  <p className="text-white/70 text-sm uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>

              </div>

              {/* 🔥 UNDERLINE */}
              <div className="mt-4 h-[2px] w-0 bg-[#5A7EFF] 
                group-hover:w-full transition-all duration-300" />

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
