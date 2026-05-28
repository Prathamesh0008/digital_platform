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

  const topLogos = [
    clientLogos[0],
    clientLogos[3],
    clientLogos[6],
    clientLogos[2],
    clientLogos[5],
    clientLogos[1],
    clientLogos[4],
  ];

  const bottomLogos = [
    clientLogos[4],
    clientLogos[1],
    clientLogos[5],
    clientLogos[0],
    clientLogos[6],
    clientLogos[3],
    clientLogos[2],
  ];

  const topLoopLogos = [...topLogos, ...topLogos];
  const bottomLoopLogos = [...bottomLogos, ...bottomLogos];

  return (
    <section className="w-full overflow-x-hidden md:overflow-x-visible">
      <style jsx global>{`
        .clientsLogoMerge img:first-of-type,
        .clientsLogoMerge > *:first-child,
        .clientsLogoMerge > *:first-child * {
          opacity: 1 !important;
        }
      `}</style>

      <div className="bg-[#EAEBDB] px-4 py-16 sm:px-6 sm:py-24 md:px-10">
        <div className="grid border-t border-black/20 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex items-start border-b border-black/20 p-6 sm:p-8 md:border-b-0 md:border-r md:p-10"
          >
            <h2 className="text-4xl font-medium uppercase leading-[0.9] sm:text-5xl md:text-[60px]">
              Our <br /> Clients
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4 overflow-hidden py-4 sm:gap-6 md:col-span-3">
            <motion.div
              className="flex whitespace-nowrap gap-6 sm:gap-12"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              {topLoopLogos.map((item, i) => (
                <a
                  key={`top-${item.alt}-${i}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[70px] min-w-[120px] cursor-pointer items-center justify-center sm:h-[110px] sm:min-w-[190px]"
                  aria-label={`Open ${item.alt}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={220}
                    height={88}
                    className="max-h-[45px] w-auto object-contain transition hover:opacity-100 sm:max-h-[72px]"
                  />
                </a>
              ))}
            </motion.div>

            <motion.div
              className="flex whitespace-nowrap gap-6 sm:gap-12"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              {bottomLoopLogos.map((item, i) => (
                <a
                  key={`bottom-${item.alt}-${i}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[76px] min-w-[130px] cursor-pointer items-center justify-center sm:h-[120px] sm:min-w-[210px]"
                  aria-label={`Open ${item.alt}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={220}
                    height={96}
                    className="max-h-[48px] w-auto object-contain transition duration-300 hover:scale-105 hover:grayscale-0 hover:opacity-100 sm:max-h-[80px] md:max-h-[88px]"
                  />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div
        className="px-4 py-10 sm:px-6 sm:py-20 md:px-10 md:py-32"
        style={{ background: "#E6E8DC" }}
      >
        <div className="grid items-start gap-3 sm:gap-6 md:min-h-[140vh] md:grid-cols-2 md:gap-5">
          <div className="self-start md:sticky md:top-24 md:flex md:h-[calc(100vh-6rem)] md:items-start md:pt-2">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-medium uppercase leading-[1.0] tracking-tight sm:text-5xl md:text-[90px] lg:text-[120px]"
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
                topImageSrc="/toppart1.svg"
                bottomImageSrc="/bottompart1.svg"
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
        className="relative px-4 py-16 text-black sm:px-6 sm:py-24 md:px-10"
        style={{ background: "linear-gradient(to bottom, #5A7EFF, #6988FB)" }}
      >
        <div className="pointer-events-none absolute inset-0 hidden grid-cols-4 md:grid">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border-l border-black/20" />
          ))}
        </div>

        <div className="relative grid gap-10 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-medium uppercase leading-[0.9] sm:text-5xl md:text-[60px]">
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
              name: "Client Story",
            },
            {
              text: "Their team understands global audiences and adapts quickly. We now have a stronger brand presence with better campaign ROI.",
              name: "Client Story",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="group flex flex-col justify-between border-t border-black/20 pt-6 md:border-t-0 md:pt-0"
            >
              <p className="mb-8 text-sm leading-relaxed text-black sm:mb-10 sm:text-base">
                &quot;{item.text}&quot;
              </p>

              <span className="w-fit rounded-full border border-black px-4 py-2 text-sm transition group-hover:bg-black group-hover:text-white">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}