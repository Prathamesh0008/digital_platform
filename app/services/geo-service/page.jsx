"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const aiPlatforms = [
  "ChatGPT",
  "Google Gemini",
  "Perplexity",
  "Claude",
  "Microsoft Copilot",
];

const stats = [
  { value: "80%", label: "Search journeys influenced by AI answers" },
  { value: "52%", label: "Users choosing AI answers over websites" },
  { value: "61%", label: "Potential CTR drop from AI summaries" },
];

const risks = [
  {
    title: "AI engines do not understand your content",
    text: "If your pages are not structured clearly, AI systems may skip, misread, or fail to reference your brand.",
  },
  {
    title: "Competitors appear before your brand",
    text: "AI tools prefer brands with strong entity signals, trusted mentions, and clear topical authority.",
  },
  {
    title: "SEO alone is no longer enough",
    text: "Traditional rankings still matter, but AI visibility needs content clarity, schema, citations, and entity reinforcement.",
  },
];

const benefits = [
  {
    title: "Increase AI answer visibility",
    text: "Help AI engines understand when your brand should appear in answers, summaries, and recommendations.",
  },
  {
    title: "Make content easier to trust",
    text: "Structure and enrich pages so AI systems can interpret your expertise and surface your content confidently.",
  },
  {
    title: "Win AI-led search traffic",
    text: "Capture visits from users who start inside AI tools rather than traditional search pages.",
  },
  {
    title: "Strengthen your brand entity",
    text: "Build clearer signals around who you are, what you do, and why your business is credible.",
  },
  {
    title: "Improve conversion quality",
    text: "Reach people with stronger intent by answering the questions they ask before they choose a provider.",
  },
  {
    title: "Protect future search visibility",
    text: "Stay discoverable as AI engines evolve and search behaviour shifts across channels.",
  },
];

const phases = [
  {
    no: "01",
    phase: "Strategy",
    title: "Bespoke AI Visibility Strategy",
    text: "We identify where GEO can deliver the strongest gains based on your market, audience, competitors, and existing digital presence.",
    points: [
      "Market and audience analysis",
      "AI visibility opportunity mapping",
      "Competitor and query research",
    ],
  },
  {
    no: "02",
    phase: "Optimisation",
    title: "Technical LLM Optimisation",
    text: "We refine your website content and structure so AI systems can interpret your brand, services, and expertise accurately.",
    points: [
      "Entity-focused content improvements",
      "Schema and structured data",
      "Internal linking and topical clarity",
    ],
  },
  {
    no: "03",
    phase: "Authority",
    title: "Citation And Entity Reinforcement",
    text: "We strengthen the signals AI platforms use to trust your business through mentions, references, and brand consistency.",
    points: [
      "Authority signal building",
      "AI mention tracking",
      "Continuous refinement",
    ],
  },
];

const faqs = [
  {
    q: "What is GEO?",
    a: "GEO stands for Generative Engine Optimisation. It improves how your brand is understood, trusted, and recommended by AI search engines and answer platforms.",
  },
  {
    q: "How is GEO different from SEO?",
    a: "SEO focuses on ranking web pages in search results. GEO focuses on making your brand visible inside AI-generated answers, summaries, and recommendations.",
  },
  {
    q: "Does GEO replace SEO?",
    a: "No. GEO works alongside SEO. Strong SEO helps your website perform in traditional search, while GEO prepares your content for AI-driven discovery.",
  },
  {
    q: "What will you change on my website?",
    a: "We improve content clarity, page structure, schema, entity signals, internal linking, and authority cues so AI tools understand your brand better.",
  },
];

export default function GeoServicePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0.35]);

  return (
    <main className="min-h-screen bg-[#EAEBDB] text-[#0d2d47]">
      {/* HERO */}
      <section
        className="relative min-h-screen overflow-hidden px-4 pb-32 pt-28 text-[#0d2d47] sm:px-6 md:px-10 md:pt-32"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 38%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <div className="relative mx-auto max-w-[1400px]">
          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            <p className="mb-5 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#0d2d47] backdrop-blur-md">
              GEO & AI Search Optimisation
            </p>

            <h1 className=" max-w-5xl text-[46px] font-semibold uppercase leading-[0.9] tracking-tight text-[#0d2d47] sm:text-6xl md:text-[88px] lg:text-[104px]">
              Be Visible In <span className="text-[#7392FB]">AI</span> Search
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
              Search is changing. NovaTech helps your brand become easier for
              AI platforms to understand, trust, and recommend across modern
              search experiences.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-[#0d2d47] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
              >
                Get Your GEO Plan
              </Link>

              <Link
                href="/services"
                className="inline-flex justify-center rounded-full border border-[#0d2d47]/25 bg-white/25 px-6 py-3 text-sm font-medium text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto mt-10 grid max-w-[1400px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {aiPlatforms.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="rounded-2xl border border-white/35 bg-white/25 px-5 py-4 text-center shadow-[0_16px_40px_rgba(13,45,71,0.1)] backdrop-blur-md"
            >
              <p className="text-sm font-semibold text-[#0d2d47]">{item}</p>
            </motion.div>
          ))}
        </div>

        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
          <div className="flex flex-col items-center text-[#0d2d47]/60">
          
          
          </div>
        </div>
      </section>

      {/* WHY GEO MATTERS */}
      <section className="relative overflow-hidden bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Search Is Evolving
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[72px]">
              Why AI Search Optimisation Matters
            </h2>
          </div>

          <div>
            <p className="text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
              AI platforms are changing how people discover products, compare
              services, and choose brands. GEO helps your website become clearer
              to large language models, so your business has a better chance of
              appearing inside AI-generated answers.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="rounded-[28px] border border-[#0d2d47]/10 bg-white/35 p-5 backdrop-blur-md"
                >
                  <p className="text-4xl font-semibold">{stat.value}</p>
                  <p className="mt-3 text-xs font-medium uppercase leading-snug tracking-[0.12em] text-[#0d2d47]/60">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RISKS */}
      <section
        className="relative overflow-hidden px-4 py-16 sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(to bottom, #EAEBDB, #C4CFE3, #8EA5F1)",
        }}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur-md">
              The Real Risk For Brands
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[72px]">
              Why Most Businesses Lose Visibility In AI Search
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {risks.map((risk, i) => (
              <motion.article
                key={risk.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-[34px] border border-white/35 bg-white/25 p-6 shadow-[0_24px_70px_rgba(13,45,71,0.12)] backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/35"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#0d2d47] text-sm font-semibold text-white">
                  0{i + 1}
                </div>

                <h3 className="text-xl font-semibold uppercase leading-tight">
                  {risk.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[#0d2d47]/70">
                  {risk.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section
        className="relative overflow-visible px-4 py-16 sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 36%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              What GEO Does
            </p>

            <h2 className="max-w-xl text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-[#0d2d47] sm:text-5xl md:text-[66px]">
              What GEO And AI Search Optimisation Do For Your Business
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
              GEO refocuses your existing search work so AI engines can
              understand, trust, and surface your brand more often.
            </p>
          </div>

          <div className="space-y-6 lg:pb-[34vh]">
            {benefits.map((item, i) => {
              const cardGradients = [
                "linear-gradient(110deg, #7392FB 0%, #243f78 52%, #0d2d47 100%)",
                "linear-gradient(110deg, #8EA5F1 0%, #5877de 48%, #0d2d47 100%)",
                "linear-gradient(110deg, #C4CFE3 0%, #7392FB 48%, #0d2d47 100%)",
                "linear-gradient(110deg, #EAEBDB 0%, #8EA5F1 48%, #0d2d47 100%)",
                "linear-gradient(110deg, #7392FB 0%, #8EA5F1 36%, #0d2d47 100%)",
                "linear-gradient(110deg, #C4CFE3 0%, #7392FB 44%, #071523 100%)",
              ];

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: i * 0.04 }}
                  className="relative min-h-[260px] overflow-hidden rounded-[22px] border border-white/70 p-6 text-white shadow-[0_26px_80px_rgba(13,45,71,0.2)] sm:min-h-[320px] sm:p-8 lg:sticky"
                  style={{
                    top: `calc(5.5rem + ${i * 14}px)`,
                    zIndex: i + 1,
                    background: cardGradients[i],
                  }}
                >
                  <div className="absolute bottom-2 left-5 select-none text-[150px] font-semibold leading-none tracking-tight text-white sm:bottom-3 sm:text-[220px] lg:bottom-4 lg:text-[260px]">
                    {i + 1}.
                  </div>

                  <div className="relative z-10 ml-auto flex min-h-[210px] max-w-xl flex-col justify-center sm:min-h-[260px]">
                    <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-6 text-base font-medium leading-relaxed text-white/86">
                      {item.text}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                Our GEO Process
              </p>

              <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[72px]">
                Strategy, Optimisation, Authority
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-[#0d2d47]/70 md:text-base">
              A practical process designed to help AI engines understand your
              brand clearly and recommend it with confidence.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {phases.map((phase, i) => (
              <motion.article
                key={phase.no}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.08 }}
                className="rounded-[36px] border border-[#0d2d47]/10 bg-[#B6C4E7] p-6 shadow-[0_26px_70px_rgba(13,45,71,0.16)]"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-6xl font-semibold text-[#0d2d47]/20">
                    {phase.no}
                  </span>

                  <span className="rounded-full bg-[#0d2d47] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                    {phase.phase}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold uppercase leading-tight">
                  {phase.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[#0d2d47]/70">
                  {phase.text}
                </p>

                <div className="mt-6 space-y-3">
                  {phase.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-[#0d2d47]/10 bg-white/25 px-4 py-3 text-sm font-medium text-[#0d2d47]/75"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="px-4 py-16 sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(to bottom, #EAEBDB, #C4CFE3, #8EA5F1, #6887FB)",
        }}
      >
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              FAQ
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[72px]">
              Questions About GEO
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((item, i) => {
              const isOpen = openFaq === i;

              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-[26px] border border-white/35 bg-white/25 backdrop-blur-md"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                  >
                    <span className="text-base font-semibold uppercase text-[#0d2d47]">
                      {item.q}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0d2d47] text-white">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-[#0d2d47]/70 md:text-base">
                      {item.a}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#6887FB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px] rounded-[38px] border border-white/35 bg-white/20 p-6 text-center shadow-[0_30px_90px_rgba(13,45,71,0.2)] backdrop-blur-md sm:p-10 md:p-14">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#0d2d47]/55">
            Let’s Talk About AI Visibility
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-[#0d2d47] sm:text-5xl md:text-[76px]">
            Make Your Brand Easier For AI To Find
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
            Build a future-ready search strategy that improves your visibility
            across AI answers, search summaries, and discovery platforms.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
            >
              Start Your GEO Project
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-[#0d2d47]/20 bg-white/25 px-7 py-3 text-sm font-medium text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @font-face {
          font-family: "Zapfino Extra LT Two";
          src: url("/fonts/ZapfinoExtraLT-Two.otf") format("opentype");
          font-display: swap;
        }

        .geo-zapfino-heading {
          font-family: "Zapfino Extra LT Two", cursive;
        }
      `}</style>
    </main>
  );
}
