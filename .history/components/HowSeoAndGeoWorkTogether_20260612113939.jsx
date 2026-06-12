"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  Brain,
  ChartColumn,
  Check,
  CircleQuestionMark,
  Eye,
  Globe,
  MapPinned,
  Medal,
  Rocket,
  ShieldCheck,
  Network,
  Target,
} from "lucide-react";

const heroPoints = [
  {
    title: "SEO Visibility",
    text: "Rank higher in Google and Bing with technical SEO, content, keywords, and authority signals.",
    Icon: ChartColumn,
  },
  {
    title: "GEO Visibility",
    text: "Help AI engines understand, trust, and recommend your brand in generated answers.",
    Icon: Bot,
  },
  {
    title: "International Growth",
    text: "Build visibility across Europe with localized content, entity optimization, and authority building.",
    Icon: Globe,
  },
];

const modernSearchCards = [
  {
    title: "SEO Builds Discoverability",
    text: "SEO improves technical structure, rankings, keyword visibility, internal linking, page speed, and organic traffic from traditional search engines.",
    Icon: Network,
  },
  {
    title: "GEO Builds AI Recognition",
    text: "GEO helps AI platforms understand your brand, connect your expertise with relevant topics, and reference your business in generated answers.",
    Icon: Brain,
  },
  {
    title: "AEO Improves Direct Answers",
    text: "Answer Engine Optimization structures your content so Google AI Overviews, Perplexity, and other answer engines can extract clear responses.",
    Icon: Target,
  },
];

const seoList = [
  "Technical SEO and crawlability",
  "Keyword targeting and content optimization",
  "Internal linking and site architecture",
  "Authority building and backlinks",
  "Core Web Vitals and user experience",
];

const geoList = [
  "Entity optimization",
  "AI-friendly content structure",
  "FAQ and answer optimization",
  "Knowledge graph visibility",
  "Trust and authority signals",
];

const comparisonRows = [
  ["Main Goal", "Rank higher in search engines", "Appear in AI-generated answers"],
  ["Platform Focus", "Google, Bing, Yahoo", "ChatGPT, Gemini, Perplexity, Copilot"],
  ["Optimization Style", "Keywords, links, technical SEO", "Entities, citations, answer structure"],
  ["User Journey", "Click from search results", "Trust AI recommendations"],
  ["Best Result", "Organic traffic", "AI visibility and brand mentions"],
];

const steps = [
  {
    title: "Build Strong SEO Foundations",
    text: "Start with technical SEO, fast loading speed, mobile optimization, schema markup, XML sitemap, and clean website architecture.",
  },
  {
    title: "Create Localized Content",
    text: "Do not only translate content. Adapt it for each European market, including Germany, France, Spain, Italy, Netherlands, and other target regions.",
  },
  {
    title: "Optimize Brand Entities",
    text: "Connect your brand name, services, industry, locations, authors, and expertise clearly across your website and external platforms.",
  },
  {
    title: "Use Structured Data",
    text: "Add Organization Schema, Service Schema, FAQ Schema, Breadcrumb Schema, and Article Schema to make your content easier for AI systems to interpret.",
  },
  {
    title: "Build Regional Authority",
    text: "Earn mentions from local directories, industry publications, business platforms, and trusted websites in your target European countries.",
  },
];

const benefits = [
  {
    title: "Better Search Visibility",
    text: "Your business can appear in search results and AI-generated recommendations.",
    Icon: Eye,
  },
  {
    title: "Stronger Trust Signals",
    text: "AI citations and organic rankings improve authority and customer confidence.",
    Icon: ShieldCheck,
  },
  {
    title: "Higher Quality Leads",
    text: "Users coming from search and AI recommendations often have stronger buying intent.",
    Icon: Medal,
  },
  {
    title: "Local Market Growth",
    text: "Localized GEO helps your brand appear across different European search journeys.",
    Icon: MapPinned,
  },
  {
    title: "Competitive Advantage",
    text: "Most businesses still focus only on SEO, giving early GEO adopters a strong edge.",
    Icon: Target,
  },
  {
    title: "Future-Ready Visibility",
    text: "SEO and GEO together prepare your business for how people will search next.",
    Icon: Rocket,
  },
];

const faqs = [
  {
    q: "What is the difference between SEO and GEO?",
    a: "SEO focuses on improving visibility in traditional search engines like Google and Bing, while GEO focuses on increasing visibility within AI-powered platforms such as ChatGPT, Gemini, Perplexity, and Copilot. Together, SEO and GEO help businesses reach users through both search results and AI-generated answers, creating stronger overall digital visibility.",
  },
  {
    q: "Why is GEO important for modern search visibility?",
    a: "GEO is important because more users are relying on AI assistants to find information, compare services, and make purchasing decisions. AI platforms often provide direct answers instead of lists of links. GEO helps businesses become trusted sources that AI systems can understand, reference, and recommend in generated responses.",
  },
  {
    q: "Can GEO replace traditional SEO?",
    a: "No, GEO cannot replace SEO. Traditional SEO remains essential for search engine rankings, organic traffic, and website discoverability. GEO works alongside SEO by helping AI systems understand your expertise and brand authority. The most successful businesses combine both strategies to maximize visibility across all modern search channels.",
  },
  {
    q: "How do I implement an International GEO strategy?",
    a: "An International GEO strategy starts with creating high-quality, localized content for each target market. Businesses should optimize brand entities, build regional authority, use structured data, and publish expert-led content in multiple languages. This helps AI systems understand and recommend your business across different countries and regions.",
  },
  {
    q: "What industries benefit most from SEO and GEO?",
    a: "Industries that rely on expertise and trust benefit the most from SEO and GEO. These include healthcare, legal services, SaaS, technology, finance, consulting, manufacturing, and eCommerce. Businesses in these sectors can improve search rankings, gain AI citations, and strengthen their digital authority by implementing both strategies together.",
  },
  {
    q: "How can a GEO agency help my business grow?",
    a: "A GEO agency helps businesses optimize content for AI-driven search experiences. This includes improving entity recognition, building authority signals, creating AI-friendly content structures, implementing schema markup, and increasing the likelihood of being cited by platforms like ChatGPT and Gemini. The result is stronger visibility, trust, and lead generation.",
  },
];

function SectionHeading({ eyebrow, title, text, centered = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={centered ? "mx-auto mb-10 max-w-4xl text-center" : "mb-10 max-w-4xl"}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7392FB]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-[#0d2d47] sm:text-5xl md:text-[64px]">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-relaxed text-[#0d2d47]/72 md:text-lg">
          {text}
        </p>
      ) : null}
    </motion.div>
  );
}

export default function HowSeoAndGeoWorkTogether() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-[#f7f8fb] text-[#102033]">
      <section
        className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 md:px-10 md:pt-36"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 35%, #8EA5F1 70%, #7392FB 100%)",
        }}
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-white/20 blur-3xl" />
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/55 bg-white/70 px-5 py-3 text-sm font-semibold text-[#0d2d47] shadow-[0_10px_24px_rgba(13,45,71,0.08)]">
              <ChartColumn className="h-4 w-4 text-[#7392FB]" />
              SEO + GEO + AEO Strategy
            </div>

            <h1 className="mt-6 max-w-5xl text-[38px] font-semibold uppercase leading-[0.92] tracking-tight text-[#0d2d47] sm:text-6xl md:text-[78px]">
              How SEO And GEO Work Together For Modern Search Visibility
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#263b52] md:text-lg">
              Search is no longer limited to Google rankings. Modern customers now discover brands through search engines, AI answers, voice search, and conversational platforms. Nova Techscience helps businesses combine SEO and GEO to improve visibility across both traditional search results and AI-generated answers.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#article"
                className="rounded-full bg-[#0d2d47] px-7 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#102f4a]"
              >
                Read Full Guide
              </Link>
              <Link
                href="#faq"
                className="rounded-full border border-[#0d2d47]/15 bg-white/65 px-7 py-3 text-center text-sm font-semibold text-[#0d2d47] transition hover:-translate-y-1 hover:bg-white/85"
              >
                View FAQs
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="rounded-[30px] border border-white/60 bg-white/80 p-7 shadow-[0_30px_80px_rgba(13,45,71,0.18)] backdrop-blur-md"
          >
            <h3 className="text-2xl font-semibold text-[#0d2d47]">
              Modern Visibility Framework
            </h3>

            <div className="mt-6 space-y-5">
              {heroPoints.map(({ title, text, Icon }) => (
                <div key={title} className="flex gap-4">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#edf1ff] text-[#7392FB]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0d2d47]">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#40536a]">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px] rounded-[30px] border-l-[6px] border-[#7392FB] bg-white p-8 shadow-[0_20px_60px_rgba(13,45,71,0.08)]">
          <h2 className="text-3xl font-semibold uppercase leading-tight text-[#0d2d47] md:text-4xl">
            AI Snapshot: Why Do Businesses Need Both SEO and GEO?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#40536a] md:text-lg">
            SEO and GEO are no longer separate digital marketing strategies. SEO helps websites rank in traditional search engines like Google, while GEO helps brands appear in AI-generated answers from platforms such as ChatGPT, Gemini, Perplexity, and Copilot. Businesses across Europe that combine SEO services with GEO strategies gain stronger rankings, better brand authority, higher AI visibility, and improved organic discovery. A professional SEO company or GEO agency can help businesses optimize content for both search engines and answer engines. The future of search belongs to brands that are visible in Google results and AI-generated recommendations at the same time.
          </p>
        </div>
      </section>

      <section className="px-4 pb-4 sm:px-6 md:px-10 md:pb-10">
        <div className="mx-auto max-w-[860px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[30px] bg-white shadow-[0_20px_70px_rgba(13,45,71,0.08)]"
          >
            <div className="relative h-[240px]  sm:h-[300px] md:h-[450px]">
              <Image
                src="/blog/seo_img.jpg"
                alt="SEO and GEO strategy illustration for modern search visibility"
                fill
                priority
                className="object-contain"
                sizes="(min-width: 1280px) 860px, (min-width: 768px) 80vw, calc(100vw - 32px)"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="article" className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            eyebrow="Complete Article"
            title="Search Has Changed Faster Than Most Businesses Realize"
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-[30px] bg-white p-8 shadow-[0_20px_70px_rgba(13,45,71,0.07)] md:p-10"
          >
            {[
              "Not long ago, the path to online visibility was relatively simple. A company invested in SEO services, improved its website, targeted relevant keywords, earned backlinks, and gradually climbed Google’s search results.",
              "Today, that journey looks very different. A business owner in Berlin may still search Google for the best SEO company. Another entrepreneur in Amsterdam may ask ChatGPT for recommendations. A startup founder in Paris may compare agencies through Gemini, while a marketing manager in Barcelona may use Perplexity before making a decision.",
              "Search is no longer happening in one place. People now discover businesses through search engines, AI assistants, answer engines, voice search, and conversational interfaces. As a result, companies that focus only on traditional SEO may miss a major part of modern visibility.",
              "This is where Generative Engine Optimization, also called GEO, becomes important. At Nova Techscience, we view SEO and GEO as two sides of one strategy. SEO helps search engines understand your website. GEO helps artificial intelligence understand your expertise.",
            ].map((paragraph) => (
              <p key={paragraph} className="mb-5 text-base leading-relaxed text-[#40536a] last:mb-0 md:text-lg">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            eyebrow="SEO + GEO"
            title="How Both Strategies Support Modern Search"
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {modernSearchCards.map(({ title, text, Icon }, i) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-[24px] border border-[#0d2d47]/6 bg-white p-8 shadow-[0_16px_50px_rgba(13,45,71,0.07)] transition hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(13,45,71,0.12)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#edf1ff] text-[#7392FB]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-[#0d2d47]">{title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[#40536a]">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-2">
          {[
            {
              title: "What Is SEO?",
              text: [
                "Search Engine Optimization is the process of improving a website’s visibility in traditional search engines. It helps users find your website when they search for services, products, or information.",
                "A professional SEO company focuses on technical SEO, content optimization, keyword research, backlinks, schema markup, user experience, and website performance.",
              ],
              list: seoList,
            },
            {
              title: "What Is GEO?",
              text: [
                "Generative Engine Optimization is the practice of optimizing content so AI platforms can understand, trust, and recommend your brand when generating answers.",
                "Unlike traditional search engines, AI tools do not only show links. They generate direct answers. GEO helps your brand become part of those answers.",
              ],
              list: geoList,
            },
          ].map((block, i) => (
            <motion.article
              key={block.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-[30px] bg-white p-8 shadow-[0_20px_70px_rgba(13,45,71,0.07)] md:p-10"
            >
              <h2 className="text-3xl font-semibold uppercase leading-tight text-[#0d2d47] md:text-4xl">
                {block.title}
              </h2>
              {block.text.map((item) => (
                <p key={item} className="mt-5 text-base leading-relaxed text-[#40536a] md:text-lg">
                  {item}
                </p>
              ))}
              <ul className="mt-6 space-y-3">
                {block.list.map((item) => (
                  <li key={item} className="flex gap-3 border-b border-[#0d2d47]/8 pb-3 text-[#102033]">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#7392FB]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading eyebrow="Comparison" title="SEO vs GEO: What Is The Difference?" />

          <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_20px_60px_rgba(13,45,71,0.08)]">
            <div className="grid grid-cols-3 bg-[#0d2d47] text-sm font-semibold uppercase tracking-[0.12em] text-white">
              <div className="p-5">Factor</div>
              <div className="p-5">SEO</div>
              <div className="p-5">GEO</div>
            </div>
            {comparisonRows.map(([factor, seo, geo]) => (
              <div
                key={factor}
                className="grid grid-cols-1 border-b border-[#0d2d47]/8 last:border-b-0 md:grid-cols-3"
              >
                <div className="p-5 font-semibold text-[#0d2d47]">{factor}</div>
                <div className="p-5 text-[#40536a]">{seo}</div>
                <div className="p-5 text-[#40536a]">{geo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            eyebrow="International GEO"
            title="How To Do International GEO Across Europe"
          />

          <div className="space-y-5">
            {steps.map((step, i) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="grid gap-5 rounded-[22px] bg-white p-6 shadow-[0_12px_40px_rgba(13,45,71,0.07)] md:grid-cols-[60px_1fr]"
              >
                <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#7392FB] text-xl font-black text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#0d2d47]">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-[#40536a]">{step.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            eyebrow="Benefits"
            title="Why Businesses Need SEO And GEO Together"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map(({ title, text, Icon }, i) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="rounded-[24px] border border-[#0d2d47]/6 bg-white p-8 shadow-[0_16px_50px_rgba(13,45,71,0.07)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#edf1ff] text-[#7392FB]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-[#0d2d47]">{title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[#40536a]">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" />

          <div className="space-y-4">
            {faqs.map((item, i) => {
              const isOpen = openFaq === i;

              return (
                <div
                  key={item.q}
                  className="rounded-[22px] bg-white p-6 shadow-[0_12px_40px_rgba(13,45,71,0.07)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="flex items-start gap-3 text-lg font-semibold text-[#0d2d47] md:text-xl">
                      <CircleQuestionMark className="mt-1 h-5 w-5 shrink-0 text-[#7392FB]" />
                      <span>{item.q}</span>
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0d2d47] text-white">
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.p
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden text-base leading-relaxed text-[#40536a]"
                      >
                        {item.a}
                      </motion.p>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px] rounded-[36px] bg-[linear-gradient(135deg,#0d2d47,#7392fb)] px-6 py-12 text-center text-white shadow-[0_30px_90px_rgba(13,45,71,0.2)] sm:px-10 md:px-14 md:py-16">
          <h2 className="mx-auto max-w-4xl text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[64px]">
            Ready To Improve SEO And GEO Visibility?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/88 md:text-lg">
            Nova Techscience helps businesses build future-ready visibility strategies by combining technical SEO, content authority, AI optimization, AEO, and International GEO.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0d2d47] transition hover:-translate-y-1"
            >
              Contact Nova Techscience
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
