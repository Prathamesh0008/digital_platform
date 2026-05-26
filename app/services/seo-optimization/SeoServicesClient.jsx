"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

const discoveryChannels = [
  "Google Search",
  "Google AI Overviews",
  "ChatGPT",
  "Gemini",
  "Perplexity",
  "Voice Assistants",
  "Maps",
  "Featured Snippets",
];

const seoPillars = [
  "Technical performance",
  "Search intent understanding",
  "Helpful content creation",
  "Brand authority",
  "AI search optimisation",
  "Conversion optimisation",
  "User experience",
  "Local visibility",
  "Entity understanding",
  "Structured data",
];

const serviceSections = [
  {
    title: "Technical SEO Services",
    intro:
      "Technical SEO forms the foundation of every successful website. Without a strong technical structure, even excellent content may struggle to rank or be indexed properly.",
    body: [
      "Nova Techscience performs detailed technical SEO audits to identify problems affecting search visibility and website performance. We analyse how search engines crawl your site, how pages are indexed and whether technical issues are limiting rankings or user experience.",
      "Our technical SEO process improves website speed, crawlability, mobile usability, page structure and structured data implementation. We also optimise Core Web Vitals, internal linking systems and indexing controls to ensure search engines can process your website efficiently.",
      "Technical SEO is especially important for AI search optimisation because large language models and AI-driven search systems depend on clean, structured and accessible content.",
    ],
  },
  {
    title: "Content SEO And Search Intent Optimisation",
    intro:
      "Content remains one of the strongest ranking factors because it helps users solve problems, compare solutions and understand services.",
    body: [
      "Nova Techscience develops SEO content strategies based on search intent, user behaviour and topical authority. Instead of writing generic pages, we create structured, informative and conversion-focused content that supports both search engines and human readers.",
      "Our content strategies include service pages, blog articles, local landing pages, product descriptions, knowledge hubs, FAQs and comparison content. Each page is built around a clear search purpose and designed to answer questions naturally.",
      "Good SEO content improves rankings while also strengthening brand trust and engagement.",
    ],
  },
  {
    title: "Local SEO Services",
    intro:
      "Local SEO helps businesses appear in searches connected to specific geographic locations, cities, regions or service areas.",
    body: [
      "When users search for terms such as SEO agency near me or digital marketing services in London, search engines evaluate location relevance, business trust signals and local authority.",
      "Nova Techscience improves local visibility through local keyword targeting, Google Business Profile optimisation, review strategy, location pages and local content development.",
      "Strong local SEO increases visibility in Google Maps, local search results and mobile-based location searches.",
    ],
  },
  {
    title: "AI SEO And GEO Optimisation",
    intro:
      "AI-driven search is transforming how people discover information online. Platforms such as Google AI Overviews, ChatGPT, Gemini and Perplexity increasingly provide direct answers.",
    body: [
      "Nova Techscience integrates AI SEO and GEO optimisation into modern search campaigns. We structure content in ways that improve machine readability and entity clarity.",
      "Our approach focuses on schema implementation, conversational formatting, semantic SEO, FAQ optimisation and authority signals that support AI understanding.",
      "AI SEO does not replace traditional SEO. Instead, it expands SEO for modern search behaviour.",
    ],
  },
  {
    title: "International SEO For Global Visibility",
    intro:
      "Businesses targeting multiple countries or international audiences need SEO strategies designed for global search behaviour.",
    body: [
      "International SEO involves more than translating content. Search intent, keyword usage and competition levels often vary significantly between regions.",
      "Nova Techscience provides international SEO strategies for businesses targeting Europe, the United States, India and global markets.",
      "We optimise multilingual websites, regional landing pages, hreflang implementation and country-specific keyword targeting.",
    ],
  },
  {
    title: "SEO Reporting And Performance Tracking",
    intro:
      "SEO success should always be measurable. Nova Techscience provides transparent reporting focused on meaningful business metrics rather than vanity numbers.",
    body: [
      "We track keyword rankings, organic traffic growth, conversion actions, technical improvements and content performance.",
      "Our reporting also includes insights into user behaviour, visibility trends and future optimisation opportunities.",
      "Continuous tracking allows campaigns to adapt over time and maintain long-term performance growth.",
    ],
  },
];

const advantages = [
  "Reduces dependence on paid advertising",
  "Creates sustainable traffic growth",
  "Builds trust before sales conversations",
  "Improves website structure and usability",
  "Supports AI-generated search visibility",
  "Improves mobile and desktop experience",
];

const chooseReasons = [
  "Technical SEO expertise",
  "Strategic content development",
  "AI-ready optimisation",
  "Long-term authority building",
  "Transparent communication",
  "Campaigns tailored to your market",
  "Practical growth strategy",
  "Measurable search performance",
];

const faqs = [
  {
    q: "What are SEO services?",
    a: "SEO services are professional optimisation solutions designed to improve a website's visibility in search engines. These services include technical SEO, keyword research, content optimisation, local SEO and authority building to increase rankings, traffic and lead generation.",
  },
  {
    q: "Why is SEO important for businesses?",
    a: "SEO helps businesses appear when customers search online for products, services or information. Strong SEO improves visibility, builds authority, increases organic traffic and reduces dependence on paid advertising while supporting long-term business growth.",
  },
  {
    q: "What is technical SEO?",
    a: "Technical SEO improves the structural and backend performance of a website so search engines can crawl, index and understand pages correctly. It includes speed optimisation, structured data, mobile usability and indexing improvements.",
  },
  {
    q: "How long does SEO take?",
    a: "SEO is a long-term strategy. While some technical improvements may show early results, significant ranking and traffic growth usually takes several months depending on competition, content quality and website authority.",
  },
  {
    q: "What is AI SEO?",
    a: "AI SEO is the process of optimising websites and content for AI-powered search systems such as Google AI Overviews, ChatGPT, Gemini and conversational search engines. It focuses on entity clarity, structured information and answer-focused content.",
  },
  {
    q: "What is SEO and how does it work?",
    a: "SEO, or Search Engine Optimization, is the process of improving a website so it appears higher in search engine results like Google. SEO works by optimising content, keywords, technical performance, user experience and authority signals, helping search engines understand your website and connect it with users searching for relevant products, services or information.",
  },
  {
    q: "Is SEO dead or evolving in 2026?",
    a: "SEO is not dead in 2026; it is evolving rapidly with AI-powered search and changing user behaviour. Modern SEO now includes AI SEO, GEO, AEO, structured data and conversational search optimisation.",
  },
  {
    q: "What is a SEO salary?",
    a: "An SEO salary depends on experience, location, skills and industry demand. Beginners may earn entry-level salaries, while experienced SEO specialists, technical SEO experts and SEO managers can earn significantly more.",
  },
  {
    q: "How do I start SEO for beginners?",
    a: "Beginners can start SEO by learning keyword research, on-page SEO, content optimisation, technical SEO basics and Google Search Console. Start with understanding how search engines work, then practise improving website structure, writing SEO-friendly content and analysing search performance.",
  },
  {
    q: "Is SEO replaced by AI?",
    a: "SEO is not being replaced by AI. Instead, AI is changing how SEO works and how users search online. AI-powered search engines still rely on high-quality, structured and authoritative content.",
  },
];

function SectionIntro({ eyebrow, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      className="mb-10 max-w-5xl"
    >
      {/* <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#0d2d47]/55">
        {eyebrow}
      </p> */}
      <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[72px]">
        {title}
      </h2>
      {text ? (
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
          {text}
        </p>
      ) : null}
    </motion.div>
  );
}

export default function SeoServicesClient() {
  const [openFaq, setOpenFaq] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -110]);

  return (
    <main className="min-h-screen bg-[#EAEBDB] text-[#0d2d47]">
      <section
        className="relative min-h-screen overflow-hidden px-4 pb-24 pt-28 sm:px-6 md:px-10 md:pt-36"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 38%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <div className="pointer-events-none absolute -right-32 top-24 h-[460px] w-[460px] rounded-full bg-white/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-[520px] w-[520px] rounded-full bg-[#0d2d47]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px]">
          <motion.div style={{ y: heroY }}>
            {/* <p className="mb-5 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] backdrop-blur-md">
              Professional SEO Services Agency
            </p> */}

            <h1 className="max-w-6xl text-[42px] font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-[88px] lg:text-[110px]">
              SEO Services That Help Your Business{" "}
              <span className="text-[#7392FB]">Grow Online</span>
            </h1>

            <div className="mt-8 grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-5 text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
                <p>
                  Search engines remain one of the most powerful ways for
                  businesses to attract customers, generate leads and build
                  long-term visibility online.
                </p>
                <p>
                  Nova Techscience provides professional SEO services designed
                  for businesses that want sustainable growth instead of
                  short-term visibility spikes.
                </p>
              </div>

              <p className="border-l-4 border-[#0d2d47] pl-5 text-base font-semibold leading-relaxed text-[#0d2d47] md:text-lg">
                Our SEO approach combines technical optimisation, content
                strategy, AI SEO, local SEO, user experience improvements and
                authority building across Google Search, AI Overviews, ChatGPT,
                Gemini, Perplexity and modern search platforms.
              </p>
            </div>

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

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[24px] bg-[#0d2d47]/10 md:grid-cols-4">
            {discoveryChannels.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/28 px-4 py-4 text-center text-sm font-semibold backdrop-blur-md"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <SectionIntro
            eyebrow="What Are SEO Services?"
            title="A Connected System For Search Visibility"
            text="SEO services are professional optimisation solutions that improve a website's visibility in search engines and digital discovery platforms."
          />

          <div className="space-y-5 text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
            <p>
              Search engine optimisation involves multiple connected areas
              working together. Technical SEO improves structure and
              performance, content optimisation answers real user questions,
              and authority building improves trust through mentions,
              references and backlinks.
            </p>
            <p>
              SEO today also includes AI search optimisation. Search behaviour
              is changing rapidly because users increasingly interact with
              AI-driven systems such as Google AI Overviews, conversational
              search engines and voice assistants.
            </p>
            <p>
              Nova Techscience provides SEO strategies that combine all of
              these areas into one connected digital growth system.
            </p>
          </div>
        </div>
      </section>

      <section
        className="px-4 py-16 sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(to bottom, #EAEBDB, #C4CFE3, #8EA5F1)",
        }}
      >
        <div className="mx-auto max-w-[1400px]">
          <SectionIntro
            eyebrow="Why SEO Is Still Essential In 2026"
            title="Search Is Still Where Decisions Begin"
            text="Even with the rise of AI-generated answers and conversational search tools, users still rely heavily on search platforms to research brands, compare services and make purchasing decisions."
          />

          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-5 text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
              <p>
                Search behaviour has evolved beyond simple Google result pages.
                People now discover businesses through AI summaries, featured
                snippets, maps, voice assistants, YouTube search, image search
                and conversational AI platforms.
              </p>
              <p>
                Businesses with strong SEO foundations are more likely to
                appear in AI-generated search experiences because AI-powered
                systems rely on well-structured, authoritative content.
              </p>
            </div>

            <div className="divide-y divide-[#0d2d47]/12 border-y border-[#0d2d47]/12">
              {advantages.map((item) => (
                <p key={item} className="py-4 text-sm font-semibold">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <SectionIntro
              eyebrow="Modern SEO Strategy"
              title="More Than Rankings"
              text="A successful SEO campaign today focuses on several important areas at the same time."
            />
          </div>

          <div className="grid gap-px overflow-hidden rounded-[24px] bg-[#0d2d47]/10 sm:grid-cols-2">
            {seoPillars.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.03 }}
                className="bg-white/30 p-5 text-sm font-semibold backdrop-blur-md"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-4 py-16 sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, #7392FB 0%, #243f78 52%, #0d2d47 100%)",
        }}
      >
        <div className="mx-auto max-w-[1400px] text-white">
          <SectionIntro
            eyebrow="SEO Services"
            title="Technical, Content, Local, AI And International SEO"
            text="Nova Techscience builds SEO strategies that balance technical precision with user-focused communication."
          />

          <div className="divide-y divide-white/18 border-y border-white/18">
            {serviceSections.map((section, i) => (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="grid gap-6 py-8 lg:grid-cols-[0.42fr_0.58fr]"
              >
                <div>
                  {/* <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                    SEO Service
                  </p> */}
                  <h3 className="mt-3 text-2xl font-semibold uppercase leading-tight">
                    {section.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/72">
                    {section.intro}
                  </p>
                </div>

                <div className="space-y-4 text-sm leading-relaxed text-white/78 md:text-base">
                  {section.body.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="SEO And User Experience"
            title="Traffic Only Matters When Visitors Can Act"
            text="Search engines increasingly prioritise websites that provide positive user experiences. This means SEO is now closely connected with design, usability and performance."
          />

          <div className="space-y-5 text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
            <p>
              A website that loads slowly, feels confusing or lacks clear
              navigation may struggle to retain visitors even if rankings
              improve.
            </p>
            <p>
              Modern SEO includes user-focused improvements such as mobile
              responsiveness, conversion-focused layouts, page speed
              optimisation and content readability.
            </p>
            <p className="border-l-4 border-[#0d2d47] pl-5 font-semibold text-[#0d2d47]">
              Strong SEO should not only attract traffic. It should guide
              visitors toward meaningful actions such as enquiries, purchases
              or consultations.
            </p>
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
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionIntro
              eyebrow="Why Businesses Choose Nova Techscience"
              title="Sustainable SEO For The Future Of Search"
              text="Nova Techscience combines technical SEO expertise, strategic content development and AI-ready optimisation into one integrated digital growth approach."
            />
            <p className="max-w-3xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
              Our SEO campaigns are designed for long-term visibility instead
              of short-term ranking manipulation. Every campaign is tailored to
              the business, audience and market rather than relying on generic
              templates.
            </p>
          </div>

          <div className="divide-y divide-[#0d2d47]/12 border-y border-[#0d2d47]/12">
            {chooseReasons.map((item) => (
              <p key={item} className="py-4 text-sm font-semibold">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="The Future Of SEO"
            title="Connected Search Across Platforms"
            text="Search is becoming more connected across platforms, devices and technologies."
          />

          <div className="space-y-5 text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
            <p>
              Users now move between search engines, AI tools, voice
              assistants, maps, social media and video platforms during the
              same research journey.
            </p>
            <p>
              Because of this, SEO is evolving into a broader visibility
              strategy rather than a single ranking tactic.
            </p>
            <p>
              Nova Techscience helps businesses prepare for this future through
              SEO strategies designed for both current search behaviour and
              emerging AI-driven search ecosystems.
            </p>
          </div>
        </div>
      </section>

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
              eyebrow="FAQ Section"
              title="SEO Frequently Asked Questions"
            />
          </div>

          <div className="space-y-3">
            {faqs.map((item, i) => {
              const isOpen = openFaq === i;

              return (
                <div
                  key={item.q}
                  className="overflow-hidden border-b border-[#0d2d47]/12"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left"
                  >
                    <span className="text-base font-semibold uppercase">
                      {item.q}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0d2d47] text-white cursor-pointer">
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
                        <p className="pb-5 text-sm leading-relaxed text-[#0d2d47]/70 md:text-base">
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
      </section>

      <section className="bg-[#6887FB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px] text-center">
          {/* <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#0d2d47]/55">
            Grow With SEO
          </p> */}
          <h2 className="mx-auto max-w-5xl text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[76px]">
            Let&apos;s Improve Your Search Visibility
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
            Build a smarter SEO system that improves rankings, traffic,
            technical health, AI visibility and long-term organic growth.
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
