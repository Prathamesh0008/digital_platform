"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const seoMetrics = [
  { label: "Organic Growth", value: "+180%" },
  { label: "Keyword Reach", value: "500+" },
  { label: "Technical Fixes", value: "90+" },
];

const auditItems = [
  "Technical SEO Audit",
  "Keyword Research",
  "On-Page SEO",
  "Content Optimization",
  "Internal Linking",
  "Schema Markup",
  "Core Web Vitals",
  "SEO Reporting",
];

const services = [
  {
    title: "Technical SEO",
    text: "Improve crawlability, indexation, site speed, structure, and technical health.",
  },
  {
    title: "On-Page SEO",
    text: "Optimize titles, headings, metadata, content structure, and keyword relevance.",
  },
  {
    title: "Keyword Strategy",
    text: "Target the right keywords based on intent, competition, and business value.",
  },
  {
    title: "Content SEO",
    text: "Build SEO-focused pages that answer user intent and support organic rankings.",
  },
  {
    title: "Schema & Structure",
    text: "Add structured data and clear page architecture for better search understanding.",
  },
  {
    title: "SEO Reporting",
    text: "Track rankings, traffic, performance, and growth opportunities every month.",
  },
];

const process = [
  "Audit",
  "Research",
  "Optimization",
  "Content",
  "Authority",
  "Tracking",
];

export default function SeoOptimizationPage() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -100]);

  return (
    <main className="min-h-screen bg-[#EAEBDB] text-[#0d2d47]">
      {/* HERO */}
      <section
        className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 md:px-10 md:pb-28 md:pt-36"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 38%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <div className="pointer-events-none absolute left-[-140px] top-[-140px] h-[360px] w-[360px] rounded-full bg-white/35 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#7392FB]/35 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <motion.div style={{ y: heroY }}>
            <p className="mb-6 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] backdrop-blur-md">
              SEO Optimization
            </p>

            <h1 className="max-w-5xl text-[48px] font-semibold uppercase leading-[0.88] tracking-tight sm:text-7xl md:text-[104px] lg:text-[120px]">
              Rank Higher With Smarter SEO
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
              We improve your website visibility through technical SEO,
              keyword strategy, content optimization, and performance-focused
              search growth.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-[#0d2d47] px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
              >
                Get SEO Audit
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-[#0d2d47]/25 bg-white/25 px-7 py-3 text-center text-sm font-medium text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* SEO Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75 }}
            className="rounded-[34px] border border-white/45 bg-white/25 p-4 shadow-[0_30px_90px_rgba(13,45,71,0.18)] backdrop-blur-md"
          >
            <div className="rounded-[28px] bg-[#EAEBDB]/80 p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0d2d47]/55">
                  SEO Dashboard
                </span>
                <span className="rounded-full bg-[#0d2d47] px-3 py-1 text-xs font-semibold text-white">
                  Live
                </span>
              </div>

              <div className="grid gap-3">
                {seoMetrics.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ width: "45%" }}
                    animate={{ width: ["45%", "100%", "82%"] }}
                    transition={{
                      duration: 2.2,
                      delay: i * 0.25,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    className="rounded-2xl bg-[#0d2d47] p-4 text-white"
                  >
                    <p className="text-3xl font-semibold">{item.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/70">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-4 gap-2">
                {[40, 70, 52, 90, 62, 80, 44, 72].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 25 }}
                    animate={{ height }}
                    transition={{
                      duration: 1.2,
                      delay: i * 0.08,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 1,
                    }}
                    className="rounded-t-xl bg-[#7392FB]"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AUDIT GRID */}
      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 max-w-5xl">
            <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              SEO Audit Areas
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[72px]">
              We Fix What Stops Your Website From Ranking
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {auditItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-[24px] border border-[#0d2d47]/10 bg-white/35 p-5 shadow-[0_18px_50px_rgba(13,45,71,0.08)] backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/55"
              >
                <p className="mb-5 text-sm font-semibold text-[#7392FB]">
                  {(i + 1).toString().padStart(2, "0")}
                </p>
                <h3 className="text-lg font-semibold uppercase">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK SERVICE SYSTEM */}
      <section
        className="px-4 py-16 text-white sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, #7392FB 0%, #243f78 52%, #0d2d47 100%)",
        }}
      >
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur-md">
              SEO Growth System
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[72px]">
              Search Growth Built On Strategy And Data
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? 45 : -45 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-[30px] border border-white/25 bg-white/12 p-6 shadow-[0_24px_70px_rgba(13,45,71,0.22)] backdrop-blur-md transition hover:bg-white/18"
              >
                <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#0d2d47]">
                  0{i + 1}
                </span>

                <h3 className="text-2xl font-semibold uppercase">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/78 md:text-base">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
            SEO Process
          </p>

          <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[72px]">
            From Audit To Organic Growth
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {process.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-[24px] border border-[#0d2d47]/10 bg-[#B6C4E7] p-5 shadow-[0_18px_45px_rgba(13,45,71,0.12)] transition hover:bg-[#C4CFE3]"
              >
                <p className="text-5xl font-semibold text-[#0d2d47]/20">
                  {(i + 1).toString().padStart(2, "0")}
                </p>

                <h3 className="mt-6 text-xl font-semibold uppercase">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#6887FB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px] rounded-[38px] border border-white/35 bg-white/20 p-6 text-center shadow-[0_30px_90px_rgba(13,45,71,0.2)] backdrop-blur-md sm:p-10 md:p-14">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#0d2d47]/55">
            Grow With SEO
          </p>

          <h2 className="mx-auto max-w-5xl text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[76px]">
            Let&apos;s Improve Your Search Visibility
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
            Build a smarter SEO system that improves rankings, traffic,
            technical health, and long-term organic growth.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
            >
              Start SEO Project
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-[#0d2d47]/20 bg-white/25 px-7 py-3 text-sm font-medium text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}