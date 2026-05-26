// components/PortfolioHero.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioHero() {
  const projects = [
    {
      name: "Nova Tech Sciences",
      category: "Corporate Website",
      url: "https://www.novatechsciences.com/",
      domain: "novatechsciences.com",
      logo: "/www.novatechsciences.com.webp",
    },
    {
      name: "Ivexia Pharma",
      category: "Pharma Website",
      url: "https://www.ivexiapharma.com/",
      domain: "ivexiapharma.com",
      logo: "/Ivexia.svg",
    },
    {
      name: "ED Pharma",
      category: "Healthcare Website",
      url: "https://www.edpharma.co/",
      domain: "edpharma.co",
      logo: "/edPharma.svg",
    },
    {
      name: "Bio-Peptides",
      category: "Biotech Website",
      url: "https://www.bio-peptides.com/",
      domain: "bio-peptides.com",
      logo: "/biopeptide.png",
    },
    {
      name: "Larksois Pharma",
      category: "Pharma Brand Site",
      url: "https://www.larksoispharma.com/",
      domain: "larksoispharma.com",
      logo: "/larkosis.webp",
    },
    {
      name: "KVA Logistics",
      category: "Logistics Website",
      url: "https://www.kvalogistics.nl/",
      domain: "kvalogistics.nl",
      logo: "/kvs.png",
    },
    {
      name: "AS Blogi",
      category: "Blog Platform",
      url: "https://asblogi.com/",
      domain: "asblogi.com",
      logo: "/asblogi.png",
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24"
      style={{
        background:
          "linear-gradient(to bottom, #EAEBDB, #C4CFE3, #8EA5F1, #6887FB)",
      }}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-white/30 blur-3xl" />
      <div className="pointer-events-none absolute right-[-160px] top-1/2 h-[420px] w-[420px] rounded-full bg-[#0d2d47]/12 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-180px] left-1/3 h-[380px] w-[380px] rounded-full bg-[#EAEBDB]/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="mb-10 grid gap-8 border-l border-[#0d2d47]/20 pl-4 sm:pl-6 md:mb-14 md:grid-cols-[1fr_0.75fr] md:items-end md:pl-10">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-[0_14px_30px_rgba(13,45,71,0.18)]">
              Selected Work
            </p>

            <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.92] tracking-tight text-[#0d2d47] sm:text-5xl md:text-[72px]">
              Featured
              <br />
              Projects
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-[#0d2d47]/75 sm:text-base md:pb-2">
            Clean, scalable, and conversion-focused digital platforms built for
            brands that want stronger visibility, better trust, and measurable
            online growth.
          </p>
        </div>

        {/* Project chips */}
        <div className="mb-10 flex gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0">
          {projects.map((project) => (
            <a
              key={`${project.url}-chip`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex shrink-0 items-center gap-2 rounded-full border border-[#0d2d47]/10 bg-white/25 px-3 py-2 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/45"
            >
              <div className="relative h-6 w-6 overflow-hidden rounded-full bg-white">
                <Image
                  src={project.logo}
                  alt={`${project.name} mark`}
                  fill
                  className="object-contain p-1"
                />
              </div>

              <p className="whitespace-nowrap text-xs font-medium text-[#0d2d47]/75 transition group-hover:text-[#0d2d47]">
                {project.name}
              </p>
            </a>
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {projects.map((project, i) => {
            const initials = project.name
              .split(" ")
              .slice(0, 2)
              .map((word) => word[0])
              .join("")
              .toUpperCase();

            return (
              <motion.article
                key={project.url}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06, duration: 0.65 }}
                whileHover={{ y: -8 }}
                className="group rounded-[32px] border border-white/35 bg-white/20 p-3 shadow-[0_22px_60px_rgba(13,45,71,0.16)] backdrop-blur-md transition"
              >
                {/* Browser preview */}
                <div className="overflow-hidden rounded-[26px] border border-white/45 bg-white/25">
                  <div className="flex items-center gap-2 border-b border-[#0d2d47]/10 bg-white/25 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#0d2d47]/35" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#0d2d47]/22" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#0d2d47]/14" />

                    <span className="ml-auto rounded-full bg-[#0d2d47]/8 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0d2d47]/55">
                      Live Project
                    </span>
                  </div>

                  <div className="relative h-[250px] overflow-hidden bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.95),transparent_38%),linear-gradient(135deg,rgba(234,235,219,0.95),rgba(196,207,227,0.9),rgba(142,165,241,0.68))] p-5 sm:h-[260px]">
                    <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#0d2d47]/10 blur-3xl transition duration-700 group-hover:scale-125" />
                    <div className="absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-white/30 blur-3xl" />

                    <div className="relative flex h-full flex-col justify-between">
                      <div className="flex items-center justify-between gap-3">
                        <span className="rounded-full border border-[#0d2d47]/10 bg-white/45 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0d2d47]/70 backdrop-blur">
                          {project.category}
                        </span>

                        <span className="text-xs font-semibold text-[#0d2d47]/45">
                          0{i + 1}
                        </span>
                      </div>

                      <div className="rounded-[22px] border border-white/60 bg-white/60 p-4 shadow-[0_18px_45px_rgba(13,45,71,0.12)] backdrop-blur-md">
                        <div className="mb-4 flex h-14 items-center">
                          <Image
                            src={project.logo}
                            alt={`${project.name} logo`}
                            width={200}
                            height={56}
                            className="max-h-14 w-auto object-contain"
                          />
                        </div>

                        <p className="truncate text-xs font-medium text-[#0d2d47]/55">
                          https://{project.domain}
                        </p>

                        <p className="mt-1 text-xl font-semibold leading-tight text-[#0d2d47]">
                          {project.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card bottom */}
                <div className="px-2 pb-2 pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-semibold text-[#0d2d47]">
                        {project.name}
                      </h3>
                      <p className="mt-1 truncate text-sm text-[#0d2d47]/60">
                        {project.domain}
                      </p>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/45 bg-white/35 backdrop-blur-md">
                      <Image
                        src={project.logo}
                        alt={`${project.name} logo`}
                        width={36}
                        height={36}
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#0d2d47]/45">
                      {initials} Project
                    </span>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full justify-center rounded-full bg-[#0d2d47] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#0d2d47]/90 sm:w-auto"
                    >
                      Visit Site
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}