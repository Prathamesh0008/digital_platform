"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const platforms = ["Instagram", "Facebook", "LinkedIn", "YouTube", "TikTok"];

const services = [
  "Content Strategy",
  "Creative Direction",
  "Reels & Short Videos",
  "Social Media Calendar",
  "Community Building",
  "Campaign Planning",
];

const orbitItems = [
  "Posts",
  "Reels",
  "Stories",
  "Ads",
  "Content",
  "Growth",
];

const process = [
  {
    title: "Discover",
    text: "We study your audience, competitors, tone, and current social presence.",
  },
  {
    title: "Plan",
    text: "We create a content direction, campaign calendar, and platform strategy.",
  },
  {
    title: "Create",
    text: "We design posts, reels, captions, carousels, and creative campaign assets.",
  },
  {
    title: "Grow",
    text: "We track performance, optimize content, and improve reach over time.",
  },
];

export default function SocialMediaPage() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 0.4], [0, -120]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <main className="min-h-screen bg-[#EAEBDB] text-[#0d2d47]">
      {/* HERO */}
      <section
        className="relative min-h-screen overflow-hidden px-4 pb-20 pt-28 sm:px-6 md:px-10 md:pt-36"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 38%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <motion.div
          style={{ rotate }}
          className="pointer-events-none absolute -right-24 top-24 h-[420px] w-[420px] rounded-full border border-white/40"
        />
        <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-white/35 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-160px] right-[-120px] h-[440px] w-[440px] rounded-full bg-[#7392FB]/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <motion.div style={{ y: y1 }}>
            <p className="mb-6 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] backdrop-blur-md">
              Social Media Marketing
            </p>

            <h1 className="max-w-5xl text-[48px] font-semibold uppercase leading-[0.88] tracking-tight sm:text-7xl md:text-[110px] lg:text-[128px]">
              Content That Builds Attention
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
              We create social media strategies, content systems, and campaigns
              that help your brand stay visible, memorable, and trusted.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-[#0d2d47] px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
              >
                Start Social Growth
              </Link>

              <Link
                href="/portfolio"
                className="rounded-full border border-[#0d2d47]/25 bg-white/25 px-7 py-3 text-center text-sm font-medium text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

          {/* Animated Orbit Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto flex h-[390px] w-full max-w-[390px] items-center justify-center rounded-full border border-white/45 bg-white/20 shadow-[0_30px_90px_rgba(13,45,71,0.2)] backdrop-blur-md sm:h-[470px] sm:max-w-[470px]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-[#0d2d47]/15"
            />

            <div className="z-10 flex h-40 w-40 items-center justify-center rounded-full bg-[#0d2d47] text-center text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-2xl">
              Social
              <br />
              Engine
            </div>

            {orbitItems.map((item, i) => {
              const angle = (i / orbitItems.length) * Math.PI * 2;
              const x = Math.cos(angle) * 165;
              const y = Math.sin(angle) * 165;

              return (
                <motion.div
                  key={item}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    delay: i * 0.18,
                  }}
                  className="absolute rounded-full border border-white/50 bg-white/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#0d2d47] backdrop-blur-md"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  {item}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="relative mx-auto mt-14 grid max-w-[1400px] gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {platforms.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/35 bg-white/25 px-5 py-4 text-center shadow-[0_16px_40px_rgba(13,45,71,0.1)] backdrop-blur-md"
            >
              <p className="text-sm font-semibold">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <section className="overflow-hidden bg-[#0d2d47] py-6 text-white">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-10 whitespace-nowrap text-5xl font-semibold uppercase opacity-90 md:text-7xl"
        >
          {[...services, ...services].map((item, i) => (
            <span key={`${item}-${i}`}>• {item}</span>
          ))}
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              What We Create
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[72px]">
              Social Systems Built For Daily Attention
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 40, rotate: i % 2 ? 2 : -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group min-h-[210px] rounded-[30px] border border-[#0d2d47]/10 bg-white/35 p-6 shadow-[0_22px_60px_rgba(13,45,71,0.1)] backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/55"
              >
                <p className="text-5xl font-semibold text-[#7392FB]">
                  {(i + 1).toString().padStart(2, "0")}
                </p>
                <h3 className="mt-8 text-2xl font-semibold uppercase">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CREATIVE STRIP */}
      <section
        className="overflow-hidden px-4 py-16 text-white sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, #7392FB 0%, #243f78 52%, #0d2d47 100%)",
        }}
      >
        <div className="mx-auto max-w-[1400px]">
          <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[76px]">
            Strategy, Creativity And Consistency In One System
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {["Awareness", "Engagement", "Conversion"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative min-h-[280px] overflow-hidden rounded-[34px] border border-white/25 bg-white/12 p-6 backdrop-blur-md"
              >
                <div className="absolute -bottom-6 -left-4 text-[150px] font-semibold leading-none text-white/10">
                  {i + 1}
                </div>

                <h3 className="relative text-3xl font-semibold uppercase">
                  {item}
                </h3>

                <p className="relative mt-5 text-sm leading-relaxed text-white/75 md:text-base">
                  We connect creative content with clear business goals so your
                  brand is not just posting, but building recognition and trust.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
            Our Process
          </p>

          <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[72px]">
            From Content Direction To Growth
          </h2>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {process.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-[32px] border border-[#0d2d47]/10 bg-[#B6C4E7] p-6 shadow-[0_24px_70px_rgba(13,45,71,0.14)]"
              >
                <p className="text-6xl font-semibold text-[#0d2d47]/20">
                  0{i + 1}
                </p>

                <h3 className="mt-10 text-2xl font-semibold uppercase">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[#0d2d47]/70">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#6887FB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px] rounded-[38px] border border-white/35 bg-white/20 p-6 text-center shadow-[0_30px_90px_rgba(13,45,71,0.2)] backdrop-blur-md sm:p-10 md:p-14">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#0d2d47]/55">
            Grow Your Social Presence
          </p>

          <h2 className="mx-auto max-w-5xl text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[76px]">
            Let&apos;s Build Social Content People Remember
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
            Build a social media system that improves visibility, engagement,
            consistency, and brand trust.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
            >
              Start Social Media Project
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