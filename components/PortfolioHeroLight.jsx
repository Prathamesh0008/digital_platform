"use client";

import { motion } from "framer-motion";

export default function PortfolioHeroLight() {
  const clientLogos = [
    "/www.novatechsciences.com.webp",
    "/Ivexia.svg",
    "/ED_p.svg",
    "/bio-peptide.webp",
    "/larkosis.webp",
    "/kvs.png",
    "/ASB-logo.webp",
  ];
  const floatingLogos = [
    { src: "/Ivexia.svg", className: "left-[8%] top-[18%] w-28 md:w-36" },
    { src: "/bio-peptide.webp", className: "right-[10%] top-[22%] w-24 md:w-32" },
    { src: "/kvs.png", className: "left-[12%] bottom-[18%] w-24 md:w-32" },
    { src: "/larkosis.webp", className: "right-[14%] bottom-[14%] w-24 md:w-32" },
  ];

  return (
    <section className="relative min-h-[96vh] w-full overflow-hidden">
      <motion.img
        src="/Sat-net-prtable-project-desktop.avif"
        alt="Portfolio Background"
        className="absolute inset-0 h-full w-full object-cover"
        animate={{ scale: [1.02, 1.06, 1.02] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(7,15,38,0.78),rgba(7,15,38,0.52)_42%,rgba(7,15,38,0.86)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(86,120,255,0.42),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_66%,rgba(14,190,224,0.26),transparent_48%)]" />
      <div className="pointer-events-none absolute inset-0">
        {floatingLogos.map((item) => (
          <img
            key={item.src}
            src={item.src}
            alt=""
            aria-hidden="true"
            className={`absolute opacity-[0.12] grayscale blur-[0.4px] ${item.className}`}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute left-4 right-4 top-24 z-10 flex justify-between text-xs uppercase tracking-[0.18em] text-white/80 sm:left-6 sm:right-6 sm:top-28 sm:text-sm"
      >
        <p>Our Work</p>
        <p className="text-right leading-tight">Digital Excellence</p>
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[96vh] w-full max-w-7xl items-end px-4 pb-14 sm:px-6 sm:pb-20 md:px-10">
        <div className="grid w-full items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl text-white">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85 sm:text-xs"
            >
              Branding | Product | Web | 2026
            </motion.p>
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-cyan-100/85 sm:text-sm">
              Pharma • Biotech • Logistics • Corporate
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-semibold uppercase leading-[0.92] tracking-tight sm:text-5xl md:text-[86px] lg:text-[108px]"
            >
              Premium
              <br />
              Portfolio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-6 max-w-2xl text-sm text-white/90 sm:text-base md:text-lg"
            >
              High-performance websites crafted for pharma, biotech, logistics, and modern brands
              that need trust, speed, and conversion in one experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button className="cursor-pointer rounded-full bg-gradient-to-r from-[#5A7EFF] to-[#36c7dd] px-7 py-3 text-sm font-medium text-white shadow-lg shadow-[#5A7EFF]/35 transition hover:opacity-90">
                View Projects
              </button>
              <button className="cursor-pointer rounded-full border border-white/45 bg-white/10 px-7 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black">
                Start a Project
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="rounded-3xl border border-white/25 bg-white/10 p-5 backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-white/80">Trusted By</p>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {clientLogos.map((logo, idx) => (
                <div
                  key={logo}
                  className="flex h-12 items-center justify-center overflow-hidden rounded-xl border border-white/25 bg-white/90 p-2"
                >
                  <img
                    src={logo}
                    alt={`Client ${idx + 1}`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/20 bg-black/20 p-3 text-white">
                <p className="text-2xl font-semibold">50+</p>
                <p className="text-xs text-white/75">Delivered Projects</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-black/20 p-3 text-white">
                <p className="text-2xl font-semibold">7</p>
                <p className="text-xs text-white/75">Featured Brands</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-black/20 p-3 text-white">
                <p className="text-2xl font-semibold">99%</p>
                <p className="text-xs text-white/75">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
