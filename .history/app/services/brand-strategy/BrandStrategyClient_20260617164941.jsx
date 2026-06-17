// app/services/brand-strategy/page.jsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaComments,
  FaUnlockAlt,
  FaEye,
  FaPalette,
  FaChartLine,
  FaSearch,
  FaRedoAlt,
  FaChartBar,
  FaRobot,
  FaGlobe,
  FaBullseye,
  FaPenNib,
  FaBullhorn,
  FaMobileAlt,
  FaClipboardList,
  FaTag,
  FaTrophy,
  FaShieldAlt,
  FaHeart,
  FaStar,
  FaUsers,
  FaVideo,
  FaSeedling,
  FaBookOpen,
  FaLink,
  FaMicrophoneAlt,
  FaLightbulb,
  FaBrain,
} from "react-icons/fa";

const stats = [
  { value: "500+", label: "Brands Transformed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3x", label: "Average Growth Rate" },
  { value: "12+", label: "Years Of Excellence" },
];

const problemItems = [
  { icon: FaComments, text: "Confusing brand messaging" },
  { icon: FaUnlockAlt, text: "Weak customer trust" },
  { icon: FaEye, text: "Poor market recognition" },
  { icon: FaPalette, text: "Inconsistent visual identity" },
  { icon: FaChartLine, text: "Low social engagement" },
  { icon: FaSearch, text: "Weak SEO and AI visibility" },
  { icon: FaRedoAlt, text: "Lower customer retention" },
  { icon: FaChartBar, text: "Reduced conversions" },
];

const oldBranding = [
  "Logos and print advertisements",
  "Traditional websites",
  "Basic social media marketing",
  "Google-only search optimization",
  "One-size-fits-all messaging",
];

const modernBranding = [
  "AI search optimization and GEO",
  "Voice search visibility",
  "Search Everywhere Optimization",
  "Multi-platform omnichannel branding",
  "Conversational AI-readable content",
  "Video-first communication",
  "Personalized customer experiences",
  "Community-led engagement",
];

const services = [
  {
    icon: FaRobot,
    title: "AI Branding",
    text: "Optimize your brand for AI-driven digital experiences so your content, authority, and digital presence are understandable to AI systems like ChatGPT, Gemini, and Perplexity.",
    features: [
      "AI search result visibility",
      "Structured content optimization",
      "Brand authority building",
    ],
  },
  {
    icon: FaGlobe,
    title: "GEO Optimization",
    text: "Generative Engine Optimization helps your business appear in AI-generated summaries, conversational search responses, and knowledge-based answers.",
    features: [
      "Entity recognition setup",
      "Semantic content structure",
      "Multi-platform consistency",
    ],
  },
  {
  icon: FaBullseye,
    title: "Brand Positioning",
    text: "Define exactly how your business stands apart from competitors with clear differentiation that connects emotionally and logically with your audience.",
    features: [
      "Competitive analysis",
      "Differentiation strategy",
      "Emotional value mapping",
    ],
  },
  {
   icon: FaPenNib,
    title: "Brand Identity Design",
    text: "Create a premium visual identity that builds trust instantly through logo systems, typography, colours, visual consistency, and brand guidelines.",
    features: [
      "Logo system design",
      "Typography and colour palette",
      "Brand guidelines",
    ],
  },
  {
    icon: FaBullhorn,
    title: "SEO Branding",
    text: "Combine search optimization with brand authority to build topical trust, organic visibility, and long-term digital growth.",
    features: [
      "Topical authority building",
      "Search intent mapping",
      "High-quality content strategy",
    ],
  },
  {
    icon: FaMobileAlt,
    title: "Social Media Branding",
    text: "Build platform-specific branding that drives real engagement through storytelling, video-first content, and community-building.",
    features: [
      "Platform content strategy",
      "Video-first campaigns",
      "Community engagement",
    ],
  },
];

const geoElements = [
  { icon: FaClipboardList, title: "Structured Content", text: "Organized semantic content AI systems can parse and trust." },
  { icon: FaTag, title: "Entity Optimization", text: "Strong brand entity recognition across search engines." },
  { icon: FaTrophy, title: "Authority Building", text: "Expert-level content that improves AI trust signals." },
  { icon: FaComments, title: "Conversational Language", text: "Natural writing aligned with modern search behavior." },
  { icon: FaGlobe, title: "Multi-Platform Presence", text: "Consistent brand signals across every digital platform." },
  { icon: FaLightbulb, title: "Future-Proof Strategy", text: "Early GEO adoption gives lasting competitive advantage." },
];

const components = [
  {
    num: "01",
    title: "Brand Positioning",
    text: "Defines how your business stands apart, why customers should choose you, what makes you unique, and what emotional value you deliver.",
    tags: ["Differentiation", "Market Gap Analysis", "Perception Mapping"],
  },
  {
    num: "02",
    title: "Brand Identity Design",
    text: "Visual identity creates the first impression through logo systems, typography, brand colours, visual consistency, and guidelines.",
    tags: ["Logo System", "Typography", "Colour Language"],
  },
  {
    num: "03",
    title: "Brand Messaging",
    text: "Defines how your business communicates through clear messaging, emotional storytelling, consistent tone of voice, and customer-focused language.",
    tags: ["Tone Of Voice", "Storytelling", "Value Communication"],
  },
  {
    num: "04",
    title: "SEO + Social Branding",
    text: "Combines topical authority, search intent, user experience, and social storytelling for organic growth and platform-specific engagement.",
    tags: ["Topical Authority", "Video-First", "Community"],
  },
];

const psychologyStats = [
  { value: "73%", label: "of buyers trust a consistent brand" },
  { value: "5x", label: "more likely to buy with strong branding" },
  { value: "80%", label: "recall from visual consistency" },
  { value: "23%", label: "average revenue uplift from branding" },
];

const feelings = [
  { icon: FaShieldAlt, title: "Trust", text: "Professional branding increases customer confidence in your business and offerings." },
  { icon: FaRedoAlt, title: "Familiarity", text: "Consistent visuals and messaging improve recognition across every touchpoint." },
  { icon: FaHeart, title: "Emotional Connection", text: "Storytelling creates meaningful relationships that outlast any single campaign." },
  { icon: FaStar, title: "Authority", text: "Expert-driven branding builds long-term credibility and market leadership." },
];
const trends = [
  {
    icon: FaRobot,
    title: "AI-Powered Personalization",
    text: "Brands now create customized customer experiences using AI-driven insights for better engagement and conversion.",
    points: [
      "Personalized recommendations",
      "Dynamic content delivery",
      "Higher conversion rates",
    ],
  },
  {
    icon: FaMicrophoneAlt,
    title: "Conversational Branding",
    text: "Customers prefer natural human-like communication instead of cold corporate language.",
    points: [
      "Human-like messaging",
      "Community interaction",
      "Relationship marketing",
    ],
  },
  {
    icon: FaSeedling,
    title: "Ethical Branding",
    text: "Modern consumers value transparency, sustainability, and responsible business practices.",
    points: [
      "Sustainability initiatives",
      "Social responsibility",
      "Authentic communication",
    ],
  },
  {
    icon: FaUsers,
    title: "Community-Led Branding",
    text: "Brands are shifting from audience building to community building for stronger loyalty.",
    points: [
      "User-generated content",
      "Online communities",
      "Brand advocacy programs",
    ],
  },
  {
    icon: FaVideo,
    title: "Video-First Branding",
    text: "Short-form video has become a dominant discovery channel across Reels, TikTok, YouTube Shorts, and LinkedIn.",
    points: [
      "Short-form content",
      "Emotional storytelling",
      "Platform-native formats",
    ],
  },
  {
    icon: FaSearch,
    title: "Search Everywhere",
    text: "Customers search across Google, YouTube, TikTok, Instagram, Reddit, and AI platforms.",
    points: [
      "Multi-platform visibility",
      "AI platform presence",
      "Omnichannel discoverability",
    ],
  },
  {
    icon:  FaBrain,
    title: "Human-Centered Design",
    text: "Consumers prefer brands that feel authentic, transparent, and emotionally relatable.",
    points: [
      "Authentic storytelling",
      "Transparent communication",
      "Emotional relatability",
    ],
  },
  {
    icon: FaGlobe,
    title: "AI Search Visibility",
    text: "Brands optimizing for ChatGPT, Gemini, Claude, and Perplexity can gain early visibility advantages.",
    points: [
      "ChatGPT visibility",
      "Gemini optimization",
      "Perplexity presence",
    ],
  },
];

const authorityItems = [
  {
    icon: FaBookOpen,
    title: "Publish Expert Content",
    text: "Educational, research-backed content positions your business as the go-to industry leader.",
  },
  {
    icon: FaLink,
    title: "Build High-Quality Backlinks",
    text: "Authority websites and trusted publications improve search credibility and AI trust signals.",
  },
  {
    icon: FaMicrophoneAlt,
    title: "Create Thought Leadership",
    text: "Industry insights, original research, and bold perspectives establish genuine expertise.",
  },
  {
    icon: FaRobot,
    title: "Optimize For AI Search",
    text: "AI visibility is the future of discovery. Early optimization creates long-term advantage.",
  },
];

const investmentItems = [
  "Higher customer trust and loyalty",
  "Premium pricing opportunities",
  "Improved organic SEO performance",
  "Increased AI search visibility",
  "Better customer retention rates",
  "Long-term competitive advantage",
  "Stronger conversion performance",
  "Sustainable business growth",
];

const platforms = [
  "Google",
  "ChatGPT",
  "Gemini",
  "Perplexity",
  "YouTube",
  "Instagram",
  "TikTok",
  "LinkedIn",
  "Pinterest",
  "Reddit",
  "X / Twitter",
  "Claude AI",
];

function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] ${
        light ? "text-white/70" : "text-[#7392FB]"
      }`}
    >
      <span
        className={`h-[2px] w-6 rounded-full ${
          light ? "bg-white/60" : "bg-[#7392FB]"
        }`}
      />
      {children}
    </p>
  );
}

function SectionTitle({ children, light = false }) {
  return (
    <h2
      className={`max-w-5xl text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl ${
        light ? "text-white" : "text-[#0d2d47]"
      }`}
    >
      {children}
    </h2>
  );
}

export default function BrandStrategyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#EAEBDB] text-[#0d2d47]">
      {/* HERO */}
      <section
        className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-36 sm:px-6 md:px-10 md:pt-44"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 38%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <motion.div
          animate={{ x: [0, 35, 0], y: [0, 25, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-white/35 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -25, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -bottom-48 -right-36 h-[560px] w-[560px] rounded-full bg-[#7392FB]/40 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute right-[12%] top-[38%] h-[260px] w-[260px] rounded-full bg-[#0d2d47]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1180px] text-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#0d2d47]/15 bg-white/30 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0d2d47] backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-[#7392FB] shadow-[0_0_0_6px_rgba(115,146,251,0.18)]" />
            Future-Ready Brand Strategy For 2026
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="mx-auto max-w-6xl text-[44px] font-extrabold uppercase leading-[0.95] tracking-tight text-[#0d2d47] sm:text-6xl md:text-7xl lg:text-[92px]"
          >
            Build A Brand That{" "}
            <span className="bg-gradient-to-r from-[#0d2d47] via-[#243f78] to-[#7392FB] bg-clip-text text-transparent">
              AI Recognizes
            </span>{" "}
            And Customers Remember
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24 }}
            className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#0d2d47]/75 md:text-lg"
          >
            We help businesses grow through AI-driven branding, GEO
            optimization, AI search visibility, storytelling, and digital
            marketing solutions built for the intelligence era.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.36 }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/contact"
              className="rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(13,45,71,0.22)] transition hover:-translate-y-1 hover:bg-[#0d2d47]/90"
            >
              Start Your Brand Journey →
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-[#0d2d47]/20 bg-white/30 px-7 py-3 text-sm font-bold text-[#0d2d47] backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/55"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="grid border-y border-[#0d2d47]/10 bg-[#0d2d47]/10 p-px sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-[#EAEBDB] px-5 py-8 text-center transition hover:bg-[#C4CFE3]/70"
          >
            <p className="text-4xl font-extrabold text-[#7392FB] md:text-5xl">
              {item.value}
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#0d2d47]/60">
              {item.label}
            </p>
          </motion.div>
        ))}
      </section>

      {/* PROBLEM */}
      <section className="bg-[#EAEBDB] px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            {/* <SectionLabel>The Problem</SectionLabel> */}
            <SectionTitle>
              What Happens Without A Brand Strategy?
            </SectionTitle>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#0d2d47]/72">
              Many businesses invest heavily in advertising without a strong
              branding foundation leading to wasted budgets, poor recall,
              weak trust, and stagnant growth.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-[#0d2d47]/72">
              A brand strategy creates a structured roadmap for how a business
              should appear, communicate, and grow across every digital
              touchpoint.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {problemItems.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-start gap-3 rounded-2xl border border-[#0d2d47]/10 bg-white/45 p-4 shadow-[0_15px_45px_rgba(13,45,71,0.07)] backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/65"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7392FB]/20 text-lg">
                  {(() => {
  const Icon = item.icon;
  return <Icon />;
})()}
                </span>
                <p className="text-sm font-bold uppercase leading-relaxed text-[#0d2d47]/75">
                    {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI ERA */}
      <section className="bg-[#C4CFE3] px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          {/* <SectionLabel>The Shift</SectionLabel> */}
          <SectionTitle>Branding Has Changed In The AI Era</SectionTitle>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#0d2d47]/72">
            The branding industry has evolved dramatically because of artificial
            intelligence, conversational search, and new consumer behaviour
            patterns.
          </p>

          <div className="mt-9 grid gap-4 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[26px] border border-[#0d2d47]/10 bg-white/35 p-6 backdrop-blur-md"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-full bg-[#0d2d47]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0d2d47]/60">
                  Past
                </span>
                <h3 className="text-xl font-bold uppercase">
                  Traditional Branding
                </h3>
              </div>

              <ul className="space-y-3">
                {oldBranding.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-base leading-7 text-[#0d2d47]/68"
                  >
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d2d47]/35" />
                      {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[26px] border border-[#7392FB]/35 bg-white/50 p-6 shadow-[0_25px_70px_rgba(13,45,71,0.12)] backdrop-blur-md"
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#7392FB] to-[#0d2d47]" />
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-full bg-[#7392FB]/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0d2d47]">
                  2026
                </span>
                <h3 className="text-xl font-bold uppercase">
                  Modern AI Branding
                </h3>
              </div>

              <ul className="space-y-3">
                {modernBranding.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-base font-medium leading-7 text-[#0d2d47]/78"
                  >
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7392FB]" />
                      {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="px-4 py-14 text-white sm:px-6 md:px-10 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, #7392FB 0%, #243f78 52%, #0d2d47 100%)",
        }}
      >
        <div className="mx-auto max-w-[1180px]">
          {/* <SectionLabel light>Our Services</SectionLabel> */}
          <SectionTitle light>Complete Brand Strategy Services</SectionTitle>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/72">
            Every service is designed to build authority, trust, and long-term
            visibility across the intelligence-driven digital landscape.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -7 }}
                className="rounded-[26px] border border-white/20 bg-white/12 p-6 shadow-[0_24px_70px_rgba(13,45,71,0.22)] backdrop-blur-md transition hover:bg-white/18"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                  {(() => {
  const Icon = item.icon;
  return <Icon />;
})()}
                </div>
                <h3 className="text-xl font-bold uppercase">
                    {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/74 md:text-base">
                    {item.text}
                </p>

                <div className="mt-5 space-y-2">
                  {item.features.map((feature) => (
                    <p
                      key={feature}
                      className="flex gap-2 text-sm font-medium text-white/70"
                    >
                      <span className="text-[#EAEBDB]">→</span>
                        {feature}
                    </p>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* GEO */}
      <section className="bg-[#EAEBDB] px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 overflow-hidden rounded-[32px] border border-[#7392FB]/25 bg-gradient-to-br from-[#7392FB]/18 to-white/35 p-6 shadow-[0_24px_80px_rgba(13,45,71,0.12)] backdrop-blur-md md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            {/* <SectionLabel>GEO Explained</SectionLabel> */}
            <SectionTitle>What Is Generative Engine Optimization?</SectionTitle>
            <p className="mt-5 text-base leading-8 text-[#0d2d47]/72">
              GEO is one of the biggest branding and SEO trends of 2026. It
              focuses on optimizing your content for AI-generated search
              platforms so your brand appears in the answers customers see.
            </p>
            <p className="mt-4 text-base leading-8 text-[#0d2d47]/72">
              AI tools analyze brand authority, content quality, entity
              recognition, and cross-platform consistency to determine which
              businesses get recommended.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {geoElements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl border border-[#0d2d47]/10 bg-white/45 p-4 transition hover:-translate-y-1 hover:bg-white/65"
              >
                <span className="text-2xl">{(() => {
  const Icon = item.icon;
  return <Icon />;
})()}</span>
                <h3 className="mt-3 text-base font-bold uppercase">
                    {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#0d2d47]/68">
                    {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPONENTS */}
      <section className="bg-[#C4CFE3] px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          {/* <SectionLabel>Strategy Framework</SectionLabel> */}
          <SectionTitle>
            What Makes A Strong Modern Brand Strategy?
          </SectionTitle>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#0d2d47]/72">
            A powerful brand strategy combines psychology, design, technology,
            communication, and digital visibility into one cohesive system.
          </p>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {components.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-5 rounded-[26px] border border-[#0d2d47]/10 bg-white/40 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/60"
              >
                <div className="shrink-0 text-4xl font-extrabold text-[#7392FB]/45">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase">
                      {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#0d2d47]/72 md:text-base">
                      {item.text}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#7392FB]/25 bg-[#7392FB]/10 px-3 py-1 text-xs font-bold text-[#0d2d47]"
                      >
                          {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PSYCHOLOGY */}
      <section className="bg-[#EAEBDB] px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[30px] border border-[#0d2d47]/10 bg-white/45 p-6 text-center shadow-[0_22px_70px_rgba(13,45,71,0.1)] backdrop-blur-md"
          >
            <motion.span
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mb-5 block text-7xl"
            >
             <FaBrain />
            </motion.span>
            <h3 className="text-2xl font-bold uppercase">
              The Psychology Of Branding
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#0d2d47]/68">
              Consumers make emotional decisions before logical ones. Strong
              brands win the heart first.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {psychologyStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-[#C4CFE3]/70 p-4"
                >
                  <strong className="block text-2xl font-extrabold text-[#7392FB]">
                    {item.value}
                  </strong>
                  <span className="mt-1 block text-xs font-semibold leading-snug text-[#0d2d47]/65">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <div>
            {/* <SectionLabel>Customer Psychology</SectionLabel> */}
            <SectionTitle>How Branding Shapes Customer Perception</SectionTitle>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#0d2d47]/72">
              Strong branding creates emotional trust, familiarity, and
              confidence long before a purchase decision is made.
            </p>

            <div className="mt-7 space-y-3">
              {feelings.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-4 rounded-2xl border border-[#0d2d47]/10 bg-white/45 p-4 backdrop-blur-md transition hover:translate-x-1 hover:bg-white/65"
                >
                  <span className="text-3xl">{(() => {
  const Icon = item.icon;
  return <Icon />;
})()}</span>
                  <div>
                    <h3 className="text-lg font-bold uppercase">
                        {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-[#0d2d47]/68">
                        {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRENDS */}
      <section
        className="px-4 py-14 text-white sm:px-6 md:px-10 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, #7392FB 0%, #243f78 52%, #0d2d47 100%)",
        }}
      >
        <div className="mx-auto max-w-[1180px]">
          {/* <SectionLabel light>2026 Landscape</SectionLabel> */}
          <SectionTitle light>The Biggest Branding Trends Of 2026</SectionTitle>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/72">
            The branding landscape is evolving rapidly because of AI, shifting
            consumer values, and new digital behaviors.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {trends.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-[24px] border border-white/20 bg-white/12 p-5 backdrop-blur-md"
              >
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-white/80 to-[#7392FB]" />
                <span className="text-4xl">{(() => {
  const Icon = item.icon;
  return <Icon />;
})()}</span>
                <h3 className="mt-4 text-lg font-bold uppercase">
                    {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/70">
                    {item.text}
                </p>

                <div className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <p
                      key={point}
                      className="flex gap-2 text-xs font-semibold text-white/65"
                    >
                      <span>●</span>
                        {point}
                    </p>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHORITY */}
      <section className="bg-[#EAEBDB] px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            {/* <SectionLabel>Brand Authority</SectionLabel> */}
            <SectionTitle>How To Build Long-Term Brand Authority</SectionTitle>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#0d2d47]/72">
              Authority is one of the most valuable digital assets a business
              can develop. It improves SEO, AI visibility, customer trust, and
              conversion performance simultaneously.
            </p>

            <div className="mt-7 space-y-3">
              {authorityItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="relative overflow-hidden rounded-2xl border border-[#0d2d47]/10 bg-white/45 p-5 backdrop-blur-md transition hover:bg-white/65"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#7392FB] to-[#0d2d47]" />
                  <div className="flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#7392FB]/15 text-2xl">
                      {(() => {
  const Icon = item.icon;
  return <Icon />;
})()}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold uppercase">
                          {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-7 text-[#0d2d47]/68">
                          {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-fit rounded-[30px] border border-[#7392FB]/25 bg-gradient-to-br from-[#7392FB]/20 to-white/45 p-6 shadow-[0_22px_70px_rgba(13,45,71,0.1)] backdrop-blur-md"
          >
            <h3 className="text-2xl font-extrabold uppercase text-[#0d2d47]">
              <span className="inline-flex items-center gap-3">
  <FaLightbulb />
  Branding Is An Investment, Not An Expense
</span>
            </h3>
            <p className="mt-4 text-base leading-8 text-[#0d2d47]/72">
              Many businesses treat branding as a short-term design project. In
              reality, it is the most powerful long-term growth investment a
              business can make.
            </p>

            <div className="mt-6 space-y-3">
              {investmentItems.map((item) => (
                <p
                  key={item}
                  className="flex gap-3 text-sm font-bold text-[#0d2d47]/75"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7392FB]/20 text-xs text-[#0d2d47]">
                    ✓
                  </span>
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PLATFORM TICKER */}
      <section className="overflow-hidden bg-[#C4CFE3] px-4 py-14 text-center sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex justify-center">
            {/* <SectionLabel>Search Everywhere Optimization</SectionLabel> */}
          </div>
          <SectionTitle>Your Brand, Visible On Every Platform</SectionTitle>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#0d2d47]/72">
            Modern consumers search everywhere. We ensure your brand is
            discoverable across every digital channel they use.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#C4CFE3] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#C4CFE3] to-transparent" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-4"
          >
            {[...platforms, ...platforms].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="rounded-full border border-[#0d2d47]/10 bg-white/45 px-5 py-3 text-sm font-bold text-[#0d2d47] backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#6887FB] px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[1180px] overflow-hidden rounded-[32px] border border-white/35 bg-white/20 p-6 text-center shadow-[0_30px_90px_rgba(13,45,71,0.2)] backdrop-blur-md sm:p-10 md:p-14"
        >
          {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0d2d47]/15 bg-white/25 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0d2d47]/70">
            <span className="h-2 w-2 rounded-full bg-[#0d2d47]" />
            Ready To Build Something Great?
          </div> */}

          <h2 className="mx-auto max-w-5xl text-3xl font-extrabold uppercase leading-tight text-[#0d2d47] sm:text-4xl md:text-5xl lg:text-6xl">
            Build A Future Ready Brand That Lasts
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#0d2d47]/75">
            From GEO optimization and AI search visibility to storytelling,
            customer psychology, and omnichannel experiences  your brand
            transformation starts here.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#0d2d47]/90"
            >
              Start Your Brand Journey →
            </Link>

            {/* <Link
              href="/portfolio"
              className="rounded-full border border-[#0d2d47]/20 bg-white/30 px-7 py-3 text-sm font-bold text-[#0d2d47] backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/55"
            >
              Schedule A Free Audit
            </Link> */}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
