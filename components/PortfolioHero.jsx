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
      accent: "from-cyan-500 to-blue-600",
      tint: "from-slate-50 via-cyan-50 to-blue-100",
      logo: "/www.novatechsciences.com.webp",
    },
    {
      name: "Ivexia Pharma",
      category: "Pharma Website",
      url: "https://www.ivexiapharma.com/",
      domain: "ivexiapharma.com",
      accent: "from-indigo-500 to-blue-500",
      tint: "from-slate-50 via-indigo-50 to-blue-100",
      logo: "/Ivexia.svg",
    },
    {
      name: "ED Pharma",
      category: "Healthcare Website",
      url: "https://www.edpharma.co/",
      domain: "edpharma.co",
      accent: "from-sky-500 to-cyan-500",
      tint: "from-slate-50 via-sky-50 to-cyan-100",
      logo: "/ED_p.svg",
    },
    {
      name: "Bio-Peptides",
      category: "Biotech Website",
      url: "https://www.bio-peptides.com/",
      domain: "bio-peptides.com",
      accent: "from-cyan-500 to-teal-500",
      tint: "from-slate-50 via-teal-50 to-emerald-100",
      logo: "/bio-peptide.webp",
    },
    {
      name: "Larksois Pharma",
      category: "Pharma Brand Site",
      url: "https://www.larksoispharma.com/",
      domain: "larksoispharma.com",
      accent: "from-orange-500 to-rose-500",
      tint: "from-slate-50 via-orange-50 to-rose-100",
      logo: "/larkosis.webp",
    },
    {
      name: "KVA Logistics",
      category: "Logistics Website",
      url: "https://www.kvalogistics.nl/",
      domain: "kvalogistics.nl",
      accent: "from-amber-500 to-orange-500",
      tint: "from-slate-50 via-amber-50 to-orange-100",
      logo: "/kvs.png",
    },
    {
      name: "AS Blogi",
      category: "Blog Platform",
      url: "https://asblogi.com/",
      domain: "asblogi.com",
      accent: "from-violet-500 to-indigo-500",
      tint: "from-slate-50 via-violet-50 to-indigo-100",
      logo: "/ASB-logo.webp",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#eef1e6] px-6 py-20 md:px-10">
      <div className="pointer-events-none absolute -left-24 top-14 h-64 w-64 rounded-full bg-[#5A7EFF]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />

      <div className="mx-auto mb-14 max-w-7xl text-center">
        <h2 className="text-[40px] font-medium text-black md:text-[60px] lg:text-[70px]">
          Featured <span className="text-[#5A7EFF]">Projects</span>
        </h2>

        <div className="mx-auto mt-6 h-[2px] w-20 bg-[#5A7EFF]" />
      </div>

      <div className="relative z-10 mx-auto mb-10 flex max-w-7xl flex-wrap items-center gap-3">
        {projects.map((project) => (
          <div
            key={`${project.url}-chip`}
            className="flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 backdrop-blur"
          >
            <div className="relative h-5 w-5 overflow-hidden rounded-full">
              <Image src={project.logo} alt={`${project.name} mark`} fill className="object-contain" />
            </div>
            <p className="text-xs font-medium text-black/70">{project.name}</p>
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-white/70 bg-white shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)] transition"
            >
              <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.tint}`}>
                <div
                  className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${project.accent} opacity-20 blur-2xl transition duration-500 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(255,255,255,0.85),transparent_40%)]" />

                <div className="absolute left-5 top-5">
                  <p className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-black/70">
                    {project.category}
                  </p>
                </div>

                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/70 bg-white/90 p-3 backdrop-blur">
                  <div className="mb-2 h-10">
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      width={180}
                      height={40}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <p className="truncate text-xs text-black/55">https://{project.domain}</p>
                  <p className="mt-1 text-base font-semibold leading-tight text-black">{project.name}</p>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-black">{project.name}</h3>
                    <p className="mt-1 text-sm text-black/60">{project.domain}</p>
                  </div>
                  <div className={`rounded-xl bg-gradient-to-br ${project.accent} p-[1.5px]`}>
                    <div className="rounded-[11px] bg-white p-2">
                      <Image
                        src={project.logo}
                        alt={`${project.name} logo`}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-md object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.16em] text-black/45">{initials} Project</span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center rounded-full bg-gradient-to-r ${project.accent} px-4 py-2 text-sm font-medium text-white transition hover:opacity-90`}
                  >
                    Visit Live Site
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
