"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { faqs, platforms, sections } from "./socialMediaData";

const orbitItems = ["Social SEO", "Reels", "Paid Ads", "AI Insights", "Content", "Growth"];

function SectionIntro({ eyebrow, title, text, dark = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mb-10 max-w-5xl"
    >
      <p
        className={`mb-5 text-xs font-semibold uppercase tracking-[0.24em] ${
          dark ? "text-white/65" : "text-[#0d2d47]/55"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[72px] ${
          dark ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-6 max-w-3xl text-base leading-relaxed md:text-lg ${
            dark ? "text-white/76" : "text-[#0d2d47]/75"
          }`}
        >
          {text}
        </p>
      ) : null}
    </motion.div>
  );
}

function PointGrid({ points, dark = false }) {
  return (
    <div
      className={`grid gap-px overflow-hidden rounded-[24px] ${
        dark ? "bg-white/20" : "bg-[#0d2d47]/10"
      } sm:grid-cols-2`}
    >
      {points.map((point, i) => (
        <motion.div
          key={point}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: i * 0.025 }}
          className={`p-4 text-sm font-semibold backdrop-blur-md ${
            dark ? "bg-white/10 text-white" : "bg-white/32 text-[#0d2d47]"
          }`}
        >
          {point}
        </motion.div>
      ))}
    </div>
  );
}

export default function SocialMediaClient() {
  const [openFaq, setOpenFaq] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -120]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <main className="min-h-screen bg-[#EAEBDB] text-[#0d2d47]">
      <section
        className="relative min-h-screen overflow-hidden px-4 pb-24 pt-28 sm:px-6 md:px-10 md:pt-36"
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
          <motion.div style={{ y: heroY }}>
            <p className="mb-6 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] backdrop-blur-md">
              Social Media Marketing Agency
            </p>

            <h1 className="max-w-6xl text-[42px] font-semibold uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-[100px] lg:text-[112px]">
              Social Media Marketing Services That Build Brand Visibility And Engagement
            </h1>

            <div className="mt-7 max-w-3xl space-y-4 text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
              <p>
                Social media has transformed how businesses connect with
                customers, promote services and build long-term brand
                visibility. Modern audiences spend hours every day on platforms
                such as Instagram, Facebook, LinkedIn, TikTok, YouTube and X
                searching for recommendations, discovering brands and engaging
                with content before making purchasing decisions.
              </p>
              <p>
                Nova Techscience provides professional social media marketing
                services designed to help businesses grow across modern digital
                platforms. Our social media marketing strategies combine content
                creation, audience targeting, social SEO, paid campaigns,
                engagement optimisation and AI-driven insights to help brands
                improve visibility, reach and conversions.
              </p>
              <p>
                Today, social media marketing is no longer only about posting
                attractive images or trending videos. Social platforms now
                operate like discovery engines where algorithms, AI
                recommendations and user engagement determine how content is
                distributed.
              </p>
              <p>
                At Nova Techscience, we build social media marketing strategies
                that help businesses strengthen authority, increase audience
                engagement and remain visible across modern digital ecosystems.
              </p>
            </div>

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

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto flex h-[360px] w-full max-w-[360px] items-center justify-center rounded-full border border-white/45 bg-white/20 shadow-[0_30px_90px_rgba(13,45,71,0.2)] backdrop-blur-md sm:h-[470px] sm:max-w-[470px]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-[#0d2d47]/15"
            />

            <div className="z-10 flex h-40 w-40 items-center justify-center rounded-full bg-[#0d2d47] text-center text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-2xl">
              Social
              <br />
              Growth
            </div>

            {orbitItems.map((item, i) => {
              const angle = (i / orbitItems.length) * Math.PI * 2;
              const distance = 150;
              const x = Math.cos(angle) * distance;
              const y = Math.sin(angle) * distance;

              return (
                <motion.div
                  key={item}
                  animate={{ y: [y, y - 10, y] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    delay: i * 0.18,
                  }}
                  className="absolute max-w-[120px] rounded-full border border-white/50 bg-white/45 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.1em] text-[#0d2d47] backdrop-blur-md"
                  style={{ x }}
                >
                  {item}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="relative mx-auto mt-14 grid max-w-[1400px] gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {platforms.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-[18px] border border-white/35 bg-white/25 px-5 py-4 text-center shadow-[0_16px_40px_rgba(13,45,71,0.1)] backdrop-blur-md"
            >
              <p className="text-sm font-semibold">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-[#0d2d47] py-6 text-white">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-10 whitespace-nowrap text-4xl font-semibold uppercase opacity-90 md:text-7xl"
        >
          {[...orbitItems, ...platforms, ...orbitItems, ...platforms].map(
            (item, i) => (
              <span key={`${item}-${i}`}>* {item}</span>
            )
          )}
        </motion.div>
      </section>

      {sections.map((section, index) => {
        const isDark = index === 4 || index === 7;
        const isSplit = index % 2 === 0;

        return (
          <section
            key={section.eyebrow}
            className={`px-4 py-16 sm:px-6 md:px-10 md:py-24 ${
              isDark ? "text-white" : ""
            }`}
            style={{
              background: isDark
                ? "linear-gradient(135deg, #7392FB 0%, #243f78 52%, #0d2d47 100%)"
                : index % 3 === 1
                ? "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 46%, #8EA5F1 100%)"
                : "#EAEBDB",
            }}
          >
            <div
              className={`mx-auto grid max-w-[1400px] gap-10 ${
                isSplit ? "lg:grid-cols-[0.86fr_1.14fr]" : "lg:grid-cols-[1.14fr_0.86fr]"
              }`}
            >
              <div className={isSplit ? "lg:sticky lg:top-24 lg:h-fit" : ""}>
                <SectionIntro
                  eyebrow={section.eyebrow}
                  title={section.title}
                  dark={isDark}
                />
                <div
                  className={`space-y-4 text-base leading-relaxed md:text-lg ${
                    isDark ? "text-white/76" : "text-[#0d2d47]/75"
                  }`}
                >
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className={isSplit ? "" : "lg:order-first"}>
                <PointGrid points={section.points} dark={isDark} />
              </div>
            </div>
          </section>
        );
      })}

      <section
        className="px-4 py-16 sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(to bottom, #EAEBDB, #C4CFE3, #8EA5F1, #6887FB)",
        }}
      >
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionIntro
              eyebrow="The Future Of Social Media Marketing"
              title="Relevance, Engagement Quality And AI Recommendations"
              text="Social media marketing will continue evolving as AI systems, recommendation algorithms and audience behaviour become more advanced."
            />
            <div className="space-y-4 text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
              <p>
                Platforms increasingly prioritise relevance, engagement quality
                and meaningful interactions instead of vanity metrics.
              </p>
              <p>
                Businesses that invest in strategic social media marketing
                today will build stronger long-term visibility and adaptability
                for future digital trends.
              </p>
              <p>
                Nova Techscience helps brands stay ahead of these changes
                through social media marketing strategies designed for both
                current platform performance and future AI-driven digital
                ecosystems.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[64px]">
              Social Media Marketing FAQs
            </h2>
            <div className="space-y-3">
              {faqs.map((item, i) => {
                const isOpen = openFaq === i;

                return (
                  <div
                    key={item.q}
                    className="overflow-hidden rounded-[24px] border border-white/35 bg-white/25 backdrop-blur-md"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                    >
                      <span className="text-base font-semibold uppercase">
                        {item.q}
                      </span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0d2d47] text-white">
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-sm leading-relaxed text-[#0d2d47]/70 md:text-base">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#6887FB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px] rounded-[38px] border border-white/35 bg-white/20 p-6 text-center shadow-[0_30px_90px_rgba(13,45,71,0.2)] backdrop-blur-md sm:p-10 md:p-14">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#0d2d47]/55">
            Grow Your Social Presence
          </p>
          <h2 className="mx-auto max-w-5xl text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[76px]">
            Build A Social Media System People Remember
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
            Nova Techscience helps brands improve visibility, engagement,
            customer trust, paid campaign performance and AI-driven discovery
            across modern social platforms.
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
