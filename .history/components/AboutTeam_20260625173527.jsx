//components/AboutTeam.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutTeam() {
  const teamMembers = [
    {
      name: "Adarsh Singh",
      role: "Senior Creative Designer",
      image: "/teams/adarshsingh.png",
    },
    {
      name: "Rushikesh Andhale",
      role: "Full Stack Developer",
      image: "/teams/rushikeshandhale.jpg",
    },
    {
      name: "Chotelal Singh",
      role: "SEO Specialist",
      image: "/teams/chotelalsingh.png",
    },
    {
      name: "Prathamesh Shinde",
      role: "Senior Manager",
      image: "/teams/manager.png",
    },
  ];

  const repeatedMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const dragRef = useRef({
    active: false,
    lastX: 0,
    offset: 0,
  });

  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const speed = 0.45;

    const animate = () => {
      if (!dragRef.current.active) {
        const track = trackRef.current;

        if (track) {
          const resetWidth = track.scrollWidth / 3;

          dragRef.current.offset -= speed;

          if (Math.abs(dragRef.current.offset) >= resetWidth) {
            dragRef.current.offset = 0;
          }

          setOffset(dragRef.current.offset);
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handlePointerDown = (e) => {
    dragRef.current.active = true;
    dragRef.current.lastX = e.clientX;
    setIsDragging(true);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current.active) return;

    const deltaX = e.clientX - dragRef.current.lastX;
    dragRef.current.lastX = e.clientX;
    dragRef.current.offset += deltaX;

    const track = trackRef.current;

    if (track) {
      const resetWidth = track.scrollWidth / 3;

      if (dragRef.current.offset > 0) {
        dragRef.current.offset = -resetWidth + dragRef.current.offset;
      }

      if (Math.abs(dragRef.current.offset) >= resetWidth) {
        dragRef.current.offset = 0;
      }
    }

    setOffset(dragRef.current.offset);
  };

  const handlePointerUp = (e) => {
    dragRef.current.active = false;
    setIsDragging(false);
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  const TeamCard = ({ member }) => (
    <div className="group w-[280px] shrink-0 cursor-pointer md:w-auto">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
        <Image
          src={member.image}
          alt={member.name}
          width={640}
          height={820}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/40" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#5A7EFF] via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-60" />

        <div className="absolute bottom-0 left-0 w-full translate-y-6 border-t border-white/20 bg-white/10 p-6 backdrop-blur-md transition duration-500 group-hover:translate-y-0">
          <h3 className="text-lg font-semibold text-white">{member.name}</h3>

          <p className="text-sm uppercase tracking-wide text-white/70">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden bg-[#EAEBDB] px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="text-4xl font-medium uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-[100px] lg:text-[120px]">
            Meet Our <br />
            <span className="text-[#5A7EFF]">Team</span>
          </h2>
        </motion.div>

        {/* Desktop grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.35,
              },
            },
          }}
          className="hidden gap-10 md:grid md:grid-cols-2 lg:grid-cols-4"
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
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile moving slider */}
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className={`md:hidden overflow-hidden py-3 select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ touchAction: "pan-y" }}
        >
          <div
            ref={trackRef}
            className="flex w-max gap-5"
            style={{
              transform: `translateX(${offset}px)`,
              transition: isDragging ? "none" : "transform 0.03s linear",
            }}
          >
            {repeatedMembers.map((member, index) => (
              <TeamCard key={`${member.name}-${index}`} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
