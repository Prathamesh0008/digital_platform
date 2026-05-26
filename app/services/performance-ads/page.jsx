"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const channels = ["Google Ads", "Meta Ads", "LinkedIn Ads", "YouTube Ads"];

const metrics = [
  { label: "Ad Spend", value: "$12.5K" },
  { label: "ROAS", value: "4.8x" },
  { label: "Leads", value: "1,240" },
  { label: "CPA Drop", value: "-36%" },
];

const services = [
  {
    title: "Campaign Strategy",
    text: "Plan paid campaigns based on audience intent, offer strength, funnel stage, and business goals.",
  },
  {
    title: "Audience Targeting",
    text: "Build precise targeting systems using buyer behaviour, interests, remarketing, and lookalike signals.",
  },
  {
    title: "Ad Creative Testing",
    text: "Test hooks, visuals, copy, CTAs, formats, and landing page angles to improve performance.",
  },
  {
    title: "Landing Page Alignment",
    text: "Match ad messaging with landing page experience to increase conversions and reduce wasted spend.",
  },
  {
    title: "Conversion Tracking",
    text: "Set up tracking for leads, sales, calls, forms, purchases, and important campaign actions.",
  },
  {
    title: "Performance Scaling",
    text: "Optimize budgets, winning audiences, creatives, and campaigns to scale profitably.",
  },
];

const funnel = [
  "Awareness",
  "Traffic",
  "Leads",
  "Conversions",
  "Retargeting",
  "Scaling",
];

const process = [
  "Audit",
  "Strategy",
  "Setup",
  "Creative Test",
  "Optimize",
  "Scale",
];

export default function PerformanceAdsPage() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -95]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 220]);

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
        <motion.div
          style={{ rotate }}
          className="pointer-events-none absolute -right-28 top-20 h-[460px] w-[460px] rounded-full border border-white/45"
        />
        <div className="pointer-events-none absolute left-[-140px] top-[-140px] h-[360px] w-[360px] rounded-full bg-white/35 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-170px] right-[-130px] h-[430px] w-[430px] rounded-full bg-[#7392FB]/35 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
          <motion.div style={{ y: heroY }}>
            <p className="mb-6 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] backdrop-blur-md">
              Performance Ads
            </p>

            <h1 className="max-w-5xl text-[48px] font-semibold uppercase leading-[0.88] tracking-tight sm:text-7xl md:text-[104px] lg:text-[120px]">
              Paid Campaigns Built To Convert
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
              We build and optimize paid advertising systems that turn ad spend
              into measurable leads, sales, conversions, and scalable business
              growth.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-[#0d2d47] px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
              >
                Start Ads Campaign
              </Link>

              <Link
                href="/portfolio"
                className="rounded-full border border-[#0d2d47]/25 bg-white/25 px-7 py-3 text-center text-sm font-medium text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
              >
                View Results
              </Link>
            </div>
          </motion.div>

          {/* Ads Performance Console */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75 }}
            className="relative rounded-[38px] border border-white/45 bg-white/25 p-4 shadow-[0_30px_90px_rgba(13,45,71,0.18)] backdrop-blur-md"
          >
            <div className="rounded-[30px] bg-[#EAEBDB]/85 p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0d2d47]/55">
                  Ads Console
                </span>
                <span className="rounded-full bg-[#0d2d47] px-3 py-1 text-xs font-semibold text-white">
                  Scaling
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {metrics.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.1 }}
                    className="rounded-2xl bg-white/55 p-4 shadow-[0_14px_35px_rgba(13,45,71,0.08)]"
                  >
                    <p className="text-3xl font-semibold">{item.value}</p>
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0d2d47]/55">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                {channels.map((item, i) => (
                  <div key={item}>
                    <div className="mb-1 flex justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[#0d2d47]/60">
                      <span>{item}</span>
                      <span>{[88, 74, 62, 81][i]}%</span>
                    </div>

                    <div className="h-4 overflow-hidden rounded-full bg-[#0d2d47]/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${[88, 74, 62, 81][i]}%` }}
                        transition={{
                          duration: 1.1,
                          delay: i * 0.15,
                          repeat: Infinity,
                          repeatType: "reverse",
                          repeatDelay: 2,
                        }}
                        className="h-full rounded-full bg-[#7392FB]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FUNNEL STRIP */}
      <section className="overflow-hidden bg-[#0d2d47] py-6 text-white">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-10 whitespace-nowrap text-5xl font-semibold uppercase opacity-90 md:text-7xl"
        >
          {[...funnel, ...funnel, ...funnel].map((item, i) => (
            <span key={`${item}-${i}`}>• {item}</span>
          ))}
        </motion.div>
      </section>

      {/* CAMPAIGN SYSTEM */}
      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Campaign System
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[72px]">
              We Connect Creative, Targeting And Conversion
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
              Performance ads work best when strategy, creative testing,
              landing pages, and tracking operate together.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                  rotate: i % 2 === 0 ? -1.5 : 1.5,
                }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-[30px] border border-[#0d2d47]/10 bg-white/35 p-6 shadow-[0_22px_60px_rgba(13,45,71,0.1)] backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/55"
              >
                <p className="text-5xl font-semibold text-[#7392FB]">
                  0{i + 1}
                </p>

                <h3 className="mt-8 text-2xl font-semibold uppercase">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[#0d2d47]/72 md:text-base">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* DARK OPTIMIZATION SECTION */}
      <section
        className="overflow-hidden px-4 py-16 text-white sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, #7392FB 0%, #243f78 52%, #0d2d47 100%)",
        }}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur-md">
                Optimization Loop
              </p>

              <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[76px]">
                Test, Learn, Optimize And Scale
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-white/75 md:text-base">
              Every campaign is improved through creative testing, audience
              refinement, budget control, and conversion tracking.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {["Creative Testing", "Audience Learning", "Budget Scaling"].map(
              (item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative min-h-[300px] overflow-hidden rounded-[34px] border border-white/25 bg-white/12 p-6 backdrop-blur-md"
                >
                  <div className="absolute -bottom-6 -left-4 text-[150px] font-semibold leading-none text-white/10">
                    {i + 1}
                  </div>

                  <h3 className="relative text-3xl font-semibold uppercase">
                    {item}
                  </h3>

                  <p className="relative mt-5 text-sm leading-relaxed text-white/75 md:text-base">
                    We use performance data to identify what works, remove what
                    wastes spend, and scale the best campaign opportunities.
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
            Ads Process
          </p>

          <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[72px]">
            From Setup To Scalable Campaigns
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
            Scale With Ads
          </p>

          <h2 className="mx-auto max-w-5xl text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[76px]">
            Let&apos;s Turn Ad Spend Into Business Growth
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
            Build a performance advertising system focused on measurable leads,
            sales, conversions, and scalable campaign growth.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
            >
              Start Performance Ads
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