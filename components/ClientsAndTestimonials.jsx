// components/ClientsAndTestimonials.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ClientsAndTestimonials() {
  const clientLogos = [
    {
      src: "/www.novatechsciences.com.webp",
      alt: "Nova Tech Sciences",
    },
    {
      src: "/Ivexia.svg",
      alt: "Ivexia Pharma",
    },
    {
      src: "/kvs.png",
      alt: "KVA Logistics",
    },
    {
      src: "/larkosis.webp",
      alt: "Larksois Pharma",
    },
    {
      src: "/edPharma.svg",
      alt: "ED Pharma",
    },
    {
      src: "/asblogi.png",
      alt: "AS Blogi",
    },
    {
      src: "/biopeptide.png",
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
      <div className="bg-[#EAEBDB] px-4 py-8 sm:px-6 sm:py-10 md:px-10">
        <div className="mx-auto max-w-[1400px]">
        <div className="grid border-t border-black/20 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          className="flex items-center justify-center border-b border-black/20 p-5 text-center sm:p-6 md:border-b-0 md:border-r md:p-8"
          >
            <h2 className="text-4xl font-medium uppercase leading-[0.92] sm:text-5xl md:text-[50px]">
              Our <br /> Clients
            </h2>
          </motion.div>

          <div className="flex flex-col gap-3 overflow-hidden py-2 sm:gap-4 md:col-span-3">
            <motion.div
              className="flex whitespace-nowrap gap-6 sm:gap-12"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              {topLoopLogos.map((item, i) => (
                <div
                  key={`top-${item.alt}-${i}`}
                  className="flex h-[56px] min-w-[120px] items-center justify-center sm:h-[82px] sm:min-w-[170px]"
                  aria-label={item.alt}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={220}
                    height={88}
                    className="max-h-[34px] w-auto object-contain transition hover:opacity-100 sm:max-h-[54px]"
                  />
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex whitespace-nowrap gap-6 sm:gap-12"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              {bottomLoopLogos.map((item, i) => (
                <div
                  key={`bottom-${item.alt}-${i}`}
                  className="flex h-[60px] min-w-[130px] items-center justify-center sm:h-[88px] sm:min-w-[180px]"
                  aria-label={item.alt}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={220}
                    height={96}
                    className="max-h-[36px] w-auto object-contain transition duration-300 hover:scale-105 hover:grayscale-0 hover:opacity-100 sm:max-h-[58px] md:max-h-[64px]"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        </div>
      </div>
      <div
        className="relative px-4 py-12 text-black sm:px-6 sm:py-14 md:px-10 md:py-16"
        style={{ background: "linear-gradient(to bottom, #5A7EFF, #6988FB)" }}
      >
        {/* <div className="pointer-events-none absolute inset-0 hidden grid-cols-4 md:grid">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border-l border-black/20" />
          ))}
        </div> */}

        <div className="relative mx-auto grid max-w-[1400px] gap-10 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-medium uppercase leading-[0.92] sm:text-5xl md:text-[50px]">
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
