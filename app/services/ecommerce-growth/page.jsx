"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const growthStats = [
  { value: "+42%", label: "Conversion Improvement" },
  { value: "3.4x", label: "Return On Ad Spend" },
  { value: "+68%", label: "Cart Recovery Growth" },
];

const growthAreas = [
  "Store Audit",
  "Conversion Strategy",
  "Product Page Optimization",
  "Cart Flow Improvement",
  "Retention Campaigns",
  "Upsell & Cross-Sell",
  "Email Automation",
  "Performance Tracking",
];

const services = [
  {
    title: "Store Conversion Audit",
    text: "Find friction points across product pages, navigation, checkout flow, offers, and mobile experience.",
  },
  {
    title: "Product Page Optimization",
    text: "Improve product layout, messaging, visuals, trust signals, and buying confidence.",
  },
  {
    title: "Cart & Checkout Growth",
    text: "Reduce drop-offs with smoother checkout journeys, better CTAs, and stronger cart recovery flows.",
  },
  {
    title: "Retention Marketing",
    text: "Build repeat purchases using email, WhatsApp, remarketing, loyalty, and customer lifecycle flows.",
  },
  {
    title: "Performance Campaigns",
    text: "Create paid growth systems for product discovery, retargeting, and scalable revenue.",
  },
  {
    title: "Analytics & Tracking",
    text: "Track sales funnels, ROAS, revenue sources, customer behaviour, and optimization opportunities.",
  },
];

const process = [
  "Audit Store",
  "Map Funnel",
  "Fix Friction",
  "Launch Campaigns",
  "Track Revenue",
  "Scale Growth",
];

export default function EcommerceGrowthPage() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -90]);
  const floatY = useTransform(scrollYProgress, [0, 0.4], [0, 70]);

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
        <div className="pointer-events-none absolute bottom-[-180px] right-[-120px] h-[430px] w-[430px] rounded-full bg-[#7392FB]/35 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
          <motion.div style={{ y: heroY }}>
            <p className="mb-6 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] backdrop-blur-md">
              E-Commerce Growth
            </p>

            <h1 className="max-w-5xl text-[48px] font-semibold uppercase leading-[0.88] tracking-tight sm:text-7xl md:text-[104px] lg:text-[120px]">
              Turn Store Traffic Into Revenue
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
              We improve e-commerce performance through conversion strategy,
              product page optimization, retention systems, paid growth, and
              revenue-focused analytics.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-[#0d2d47] px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
              >
                Grow My Store
              </Link>

              <Link
                href="/portfolio"
                className="rounded-full border border-[#0d2d47]/25 bg-white/25 px-7 py-3 text-center text-sm font-medium text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
              >
                View Work
              </Link>
            </div>
          </motion.div>

          {/* Animated Store Funnel */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75 }}
            className="relative rounded-[38px] border border-white/45 bg-white/25 p-4 shadow-[0_30px_90px_rgba(13,45,71,0.18)] backdrop-blur-md"
          >
            <motion.div
              style={{ y: floatY }}
              className="absolute -right-5 -top-8 hidden rounded-3xl border border-white/45 bg-white/45 px-5 py-4 shadow-xl backdrop-blur-md sm:block"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0d2d47]/60">
                Revenue
              </p>
              <p className="mt-1 text-3xl font-semibold">+68%</p>
            </motion.div>

            <div className="rounded-[30px] bg-[#EAEBDB]/85 p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0d2d47]/55">
                  Growth Funnel
                </span>
                <span className="rounded-full bg-[#0d2d47] px-3 py-1 text-xs font-semibold text-white">
                  Optimizing
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Visitors", width: "100%" },
                  { label: "Product Views", width: "82%" },
                  { label: "Add To Cart", width: "58%" },
                  { label: "Checkout", width: "42%" },
                  { label: "Purchase", width: "31%" },
                ].map((item, i) => (
                  <div key={item.label}>
                    <div className="mb-1 flex justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[#0d2d47]/60">
                      <span>{item.label}</span>
                      <span>{item.width}</span>
                    </div>
                    <div className="h-4 overflow-hidden rounded-full bg-[#0d2d47]/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: item.width }}
                        transition={{
                          duration: 1.2,
                          delay: i * 0.16,
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

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {growthStats.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + i * 0.1 }}
                    className="rounded-2xl bg-white/55 p-4 text-center"
                  >
                    <p className="text-2xl font-semibold">{item.value}</p>
                    <p className="mt-2 text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] text-[#0d2d47]/55">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GROWTH AREAS */}
      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 max-w-5xl">
            <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Growth Areas
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[72px]">
              We Optimize Every Step Of The Buying Journey
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {growthAreas.map((item, i) => (
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

      {/* DARK REVENUE SYSTEM */}
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
              Revenue System
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[72px]">
              Built For Conversion, Retention And Scale
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              E-commerce growth is not only traffic. We connect conversion,
              customer retention, tracking, and campaigns into one revenue
              system.
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
            Growth Process
          </p>

          <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[72px]">
            From Store Audit To Scalable Revenue
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
            Scale Your Online Store
          </p>

          <h2 className="mx-auto max-w-5xl text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[76px]">
            Let&apos;s Turn Your Store Into A Growth Engine
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
            Improve your conversion rate, customer retention, sales funnel, and
            long-term e-commerce revenue with a smarter growth system.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
            >
              Start E-Commerce Growth
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