// components/ClientsAndTestimonials.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedLogoMerge from "./AnimatedLogoMerge";

export default function ClientsAndTestimonials() {
  const clientLogos = [
    {
      src: "/www.novatechsciences.com.webp",
      url: "https://www.novatechsciences.com/",
      alt: "Nova Tech Sciences",
    },
    {
      src: "/Ivexia.svg",
      url: "https://www.ivexiapharma.com/",
      alt: "Ivexia Pharma",
    },
    {
      src: "/kvs.png",
      url: "https://www.kvalogistics.nl/",
      alt: "KVA Logistics",
    },
    {
      src: "/larkosis.webp",
      url: "https://www.larksoispharma.com/",
      alt: "Larksois Pharma",
    },
    {
      src: "/edPharma.svg",
      url: "https://www.edpharma.co/",
      alt: "ED Pharma",
    },
    {
      src: "/asblogi.png",
      url: "https://asblogi.com/",
      alt: "AS Blogi",
    },
    {
      src: "/biopeptide.png",
      url: "https://www.bio-peptides.com/",
      alt: "Bio Peptides",
    },
  ];

  const loopLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="w-full overflow-x-hidden md:overflow-x-visible">
      <style jsx global>{`
        .clientsLogoMerge img:first-of-type,
        .clientsLogoMerge > *:first-child,
        .clientsLogoMerge > *:first-child * {
          opacity: 1 !important;
        }
      `}</style>

      <div className="bg-[#EAEBDB] px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="grid md:grid-cols-4 border-t border-black/20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 md:p-10 border-b md:border-b-0 md:border-r border-black/20 flex items-start"
          >
            <h2 className="uppercase leading-[0.9] text-4xl sm:text-5xl md:text-[60px] font-medium">
              Our <br /> Clients
            </h2>
          </motion.div>

          <div className="md:col-span-3 flex flex-col gap-4 sm:gap-6 overflow-hidden py-4">
            <motion.div
              className="flex gap-6 sm:gap-12 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              {loopLogos.map((item, i) => (
                <a
                  key={`top-${i}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-[70px] sm:h-[110px] min-w-[120px] sm:min-w-[190px] cursor-pointer"
                  aria-label={`Open ${item.alt}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={220}
                    height={88}
                    className="max-h-[45px] sm:max-h-[72px] w-auto object-contain hover:opacity-100 transition"
                  />
                </a>
              ))}
            </motion.div>

            <motion.div
              className="flex gap-6 sm:gap-12 whitespace-nowrap"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              {loopLogos.map((item, i) => (
                <a
                  key={`bottom-${i}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-[76px] sm:h-[120px] min-w-[130px] sm:min-w-[210px] cursor-pointer"
                  aria-label={`Open ${item.alt}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={220}
                    height={96}
                    className="max-h-[48px] sm:max-h-[80px] md:max-h-[88px] w-auto object-contain hover:grayscale-0 hover:opacity-100 hover:scale-105 transition duration-300"
                  />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div
        className="px-4 sm:px-6 md:px-10 py-10 sm:py-20 md:py-32"
        style={{
          background:
            "linear-gradient(to bottom, #EAEBDB, #E1E4DD, #BEC9E7, #6988FB, #5A7EFF)",
        }}
      >
        <div className="grid items-start gap-3 sm:gap-6 md:gap-5 md:grid-cols-2 md:min-h-[140vh]">
          <div className="self-start md:sticky md:top-24 md:h-[calc(100vh-6rem)] md:flex md:items-start md:pt-2">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="uppercase tracking-tight leading-[1.0] text-4xl sm:text-5xl md:text-[90px] lg:text-[120px] font-medium"
            >
              Smart, simple, <br />
              and efficient <br />
              solutions for <br />
              every project.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative flex min-h-[160vh] items-start justify-center md:min-h-0 md:items-end md:justify-center"
          >
            <div className="sticky top-[34vh] pt-8 sm:pt-0 md:static md:top-auto">
              <AnimatedLogoMerge
                className="clientsLogoMerge"
                topImageSrc="/Toppart.png"
                bottomImageSrc="/Bottompart.png"
                ariaLabel="NovaTech animated logo"
                size="clamp(120px, 38vw, 220px)"
                pieceGap={4}
                scrollLinked={true}
                scrollSceneHeight="220vh"
                useImagePieces={true}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="relative px-4 sm:px-6 md:px-10 py-16 sm:py-24 text-black"
        style={{ background: "linear-gradient(to bottom, #5A7EFF, #6988FB)" }}
      >
        <div className="absolute inset-0 hidden md:grid grid-cols-4 pointer-events-none">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border-l border-black/20" />
          ))}
        </div>

        <div className="relative grid md:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="uppercase leading-[0.9] text-4xl sm:text-5xl md:text-[60px] font-medium">
              What Our <br /> Clients <br /> Say About Us
            </h2>
          </motion.div>

          {[
            {
              text: "Nova Techscience transformed our ideas into measurable growth. Their strategy and execution gave us stronger visibility and better lead quality.",
              name: "Client Story",
            },
            {
              text: "From SEO to paid campaigns, every step felt structured and data-backed. We saw consistent improvements in rankings and conversions.",
              name: "Client Story ",
            },
            {
              text: "Their team understands global audiences and adapts quickly. We now have a stronger brand presence with better campaign ROI.",
              name: "Client Story ",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col justify-between group border-t border-black/20 pt-6 md:border-t-0 md:pt-0"
            >
              <p className="mb-8 sm:mb-10 text-black leading-relaxed text-sm sm:text-base">
                &quot;{item.text}&quot;
              </p>

              <span className="border border-black px-4 py-2 rounded-full w-fit text-sm group-hover:bg-black group-hover:text-white transition">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}