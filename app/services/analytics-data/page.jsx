"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const insightCards = [
  { label: "Traffic Quality", value: "72%" },
  { label: "Lead Sources", value: "14" },
  { label: "Conversion Rate", value: "6.8%" },
  { label: "Revenue Signals", value: "+38%" },
];

const dataAreas = [
  "GA4 Setup",
  "Conversion Tracking",
  "Dashboard Reporting",
  "Funnel Analysis",
  "Customer Behaviour",
  "Campaign Attribution",
  "Event Tracking",
  "Monthly Insights",
];

const services = [
  {
    title: "Analytics Setup",
    text: "Set up GA4, pixels, tags, events, conversions, and tracking systems correctly across your website.",
  },
  {
    title: "Dashboard Reporting",
    text: "Create clean reporting dashboards that show traffic, leads, revenue, campaign performance, and growth signals.",
  },
  {
    title: "Funnel Analysis",
    text: "Identify where users drop, what pages convert, and which journeys create the strongest business results.",
  },
  {
    title: "Campaign Attribution",
    text: "Understand which channels, campaigns, ads, and content actually contribute to leads and conversions.",
  },
  {
    title: "User Behaviour Insights",
    text: "Study visitor actions, engagement patterns, scroll behaviour, clicks, and conversion intent.",
  },
  {
    title: "Growth Recommendations",
    text: "Turn data into practical action plans for improving marketing, UX, content, and conversion performance.",
  },
];

const process = [
  "Track",
  "Measure",
  "Analyse",
  "Report",
  "Recommend",
  "Improve",
];

export default function AnalyticsDataPage() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -95]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

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
              Analytics And Data
            </p>

            <h1 className="max-w-5xl text-[48px] font-semibold uppercase leading-[0.88] tracking-tight sm:text-7xl md:text-[104px] lg:text-[120px]">
              Turn Data Into Smarter Growth
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
              We help businesses track the right metrics, understand customer
              behaviour, measure campaign performance, and make better marketing
              decisions with clear data.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-[#0d2d47] px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
              >
                Build Analytics System
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-[#0d2d47]/25 bg-white/25 px-7 py-3 text-center text-sm font-medium text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Analytics Console */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75 }}
            className="relative rounded-[38px] border border-white/45 bg-white/25 p-4 shadow-[0_30px_90px_rgba(13,45,71,0.18)] backdrop-blur-md"
          >
            <div className="rounded-[30px] bg-[#EAEBDB]/85 p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0d2d47]/55">
                  Data Console
                </span>
                <span className="rounded-full bg-[#0d2d47] px-3 py-1 text-xs font-semibold text-white">
                  Tracking
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {insightCards.map((item, i) => (
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

              <div className="mt-6 grid h-[180px] grid-cols-8 items-end gap-2 rounded-3xl bg-white/35 p-4">
                {[45, 72, 52, 88, 63, 96, 70, 84].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 20 }}
                    animate={{ height }}
                    transition={{
                      duration: 1.2,
                      delay: i * 0.08,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 1.2,
                    }}
                    className="rounded-t-xl bg-[#7392FB]"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DATA AREAS */}
      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 max-w-5xl">
            <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Data Foundations
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[72px]">
              We Make Your Marketing Performance Easier To Understand
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dataAreas.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
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

      {/* DARK INSIGHT SYSTEM */}
      <section
        className="overflow-hidden px-4 py-16 text-white sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, #7392FB 0%, #243f78 52%, #0d2d47 100%)",
        }}
      >
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur-md">
              Insight System
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[72px]">
              Data That Explains What To Do Next
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Reporting is not enough. We build analytics systems that help you
              understand what is working, what is wasting budget, and where the
              next growth opportunity exists.
            </p>
          </div>

          <div className="space-y-5">
            {services.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? 55 : -55 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-[30px] border border-white/25 bg-white/12 p-6 shadow-[0_24px_70px_rgba(13,45,71,0.22)] backdrop-blur-md transition hover:bg-white/18"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-start">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#0d2d47]">
                    0{i + 1}
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold uppercase">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/78 md:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
            Analytics Process
          </p>

          <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[72px]">
            From Tracking Setup To Actionable Insights
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
            Make Better Decisions
          </p>

          <h2 className="mx-auto max-w-5xl text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[76px]">
            Let&apos;s Build A Clear Data System For Your Brand
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
            Track the right metrics, understand customer behaviour, measure
            marketing performance, and turn data into smarter growth decisions.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
            >
              Start Analytics Project
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