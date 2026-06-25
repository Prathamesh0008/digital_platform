// components/ClientsAndTestimonials.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ClientsAndTestimonials() {
  const clientLogos = [
    {
      src: "/biopeptide.png",
      alt: "Bio Peptides",
    },
    {
      src: "/kvs.png",
      alt: "KVA Logistics",
    },
    {
      src: "/asblogi.png",
      alt: "ASB Logistics",
    },
    {
      src: "/www.novatechsciences.com.webp",
      alt: "Nova Tech Sciences",
    },
    {
      src: "/Ivexia.svg",
      alt: "Ivexia Pharma",
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
      src: "/biopeptide.png",
      alt: "Bio Peptides",
    },
    {
      src: "/kvs.png",
      alt: "KVA Logistics",
    },
  ];

  const mobileLoopLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="w-full overflow-x-hidden md:overflow-x-visible">
      <div className="bg-[#EAEBDB] px-4 py-8 sm:px-6 sm:py-10 md:px-10">
        <div className="mx-auto max-w-[1400px]">
        <div className="grid border-t border-black/20 md:grid-cols-[280px_minmax(0,1fr)] lg:grid-cols-[340px_minmax(0,1fr)]">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          className="flex items-center justify-start border-b border-black/20 p-5 text-left sm:p-6 md:border-b-0 md:border-r md:p-8 lg:p-10"
          >
            <h2 className="text-4xl font-medium uppercase leading-[0.92] sm:text-5xl md:text-[50px] lg:text-[64px]">
              Our Clients
            </h2>
          </motion.div>

          <div className="relative overflow-hidden py-4 md:hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-[linear-gradient(90deg,#EAEBDB_15%,rgba(234,235,219,0))]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-[linear-gradient(270deg,#EAEBDB_15%,rgba(234,235,219,0))]" />

            <motion.div
              className="flex w-max items-center gap-7"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              {mobileLoopLogos.map((item, i) => (
                <div
                  key={`${item.alt}-mobile-${i}`}
                  className="flex h-[88px] min-w-[180px] items-center justify-center px-2"
                  aria-label={item.alt}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={320}
                    height={140}
                    className="max-h-[54px] w-auto max-w-full object-contain opacity-95"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="hidden md:grid md:grid-cols-3 md:gap-x-5 md:gap-y-5 md:p-6 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-5 lg:p-8">
            {clientLogos.map((item, i) => (
              <motion.div
                key={`${item.alt}-${i}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
                viewport={{ once: true, amount: 0.25 }}
                className="flex min-h-[96px] items-center justify-center px-4 py-4 lg:min-h-[104px]"
                aria-label={item.alt}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={300}
                  height={132}
                  className="max-h-[58px] w-auto max-w-full object-cover lg:max-h-[64px]"
                />
              </motion.div>
            ))}
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
