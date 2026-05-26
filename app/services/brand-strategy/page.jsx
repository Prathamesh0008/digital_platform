"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const strategyPoints = [
  "Brand positioning",
  "Audience research",
  "Visual direction",
  "Messaging strategy",
  "Tone of voice",
  "Growth-focused identity",
];

const services = [
  {
    title: "Brand Positioning",
    text: "Define where your brand stands, who it serves, and why customers should choose you over competitors.",
  },
  {
    title: "Visual Identity",
    text: "Create a consistent visual system across logo, colors, typography, graphics, and digital presence.",
  },
  {
    title: "Messaging Strategy",
    text: "Build clear brand messages that communicate value, trust, and differentiation across all channels.",
  },
  {
    title: "Tone Of Voice",
    text: "Shape how your brand sounds across website, ads, social media, emails, and customer communication.",
  },
  {
    title: "Brand Guidelines",
    text: "Document your brand rules so every design, campaign, and content piece stays consistent.",
  },
  {
    title: "Rebranding Strategy",
    text: "Refresh outdated branding with a stronger identity built for modern digital growth.",
  },
];

const process = [
  "Research",
  "Positioning",
  "Strategy",
  "Identity Direction",
  "Brand System",
  "Launch Support",
];

export default function BrandStrategyPage() {
  return (
    <main className="min-h-screen bg-[#EAEBDB] text-[#0d2d47]">
      <section
        className="relative overflow-hidden px-4 pb-20 pt-28 text-[#0d2d47] sm:px-6 md:px-10 md:pb-28 md:pt-36"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 38%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <div className="pointer-events-none absolute left-[-140px] top-[-140px] h-[360px] w-[360px] rounded-full bg-white/35 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-180px] right-[-120px] h-[430px] w-[430px] rounded-full bg-[#7392FB]/35 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px]">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#0d2d47] backdrop-blur-md"
          >
            Brand Strategy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-6xl text-[48px] font-semibold uppercase leading-[0.88] tracking-tight text-[#0d2d47] sm:text-7xl md:text-[110px] lg:text-[136px]"
          >
            Brands Built To Lead Markets
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="mt-8 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]"
          >
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
              >
                Build Your Brand
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex justify-center rounded-full border border-[#0d2d47]/25 bg-white/25 px-7 py-3 text-sm font-medium text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
              >
                View Portfolio
              </Link>
            </div>

            <p className="max-w-3xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
              We create brand strategies that help businesses become more
              recognizable, trusted, and competitive through clear positioning,
              strong messaging, and consistent visual direction.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Brand Thinking
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[76px]">
              Your Brand Is More Than A Logo
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {strategyPoints.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-[24px] border border-[#0d2d47]/10 bg-white/35 p-5 shadow-[0_18px_50px_rgba(13,45,71,0.08)] backdrop-blur-md transition hover:bg-white/55"
              >
                <p className="mb-4 text-sm font-semibold text-[#7392FB]">
                  {(i + 1).toString().padStart(2, "0")}
                </p>
                <h3 className="text-lg font-semibold uppercase">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-4 py-16 text-white sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, #7392FB 0%, #243f78 52%, #0d2d47 100%)",
        }}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 max-w-5xl">
            <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
              Strategy Services
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[76px]">
              Strategic Systems For Stronger Brand Growth
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-[28px] border border-white/25 bg-white/12 p-6 shadow-[0_24px_70px_rgba(13,45,71,0.22)] backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/18"
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

      <section className="bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12">
            <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Our Process
            </p>

            <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[76px]">
              From Research To Brand Direction
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
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
                <h3 className="mt-6 text-xl font-semibold uppercase text-[#0d2d47]">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-4 py-16 sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 36%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <div className="mx-auto max-w-[1400px] rounded-[38px] border border-white/35 bg-white/20 p-6 text-center shadow-[0_30px_90px_rgba(13,45,71,0.2)] backdrop-blur-md sm:p-10 md:p-14">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#0d2d47]/55">
            Build A Better Brand
          </p>

          <h2 className="mx-auto max-w-5xl text-4xl font-semibold uppercase leading-[0.95] text-[#0d2d47] sm:text-5xl md:text-[76px]">
            Let&apos;s Build A Brand People Remember
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
            Create a brand strategy that gives your business stronger
            positioning, clearer communication, and a more premium digital
            identity.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
            >
              Start Brand Strategy
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