//app\services\social-media\SocialMediaClient.jsx
"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ServiceInternalLinkText from "@/components/ServiceInternalLinkText";
import {
  FaMobileAlt,
  FaClock,
  FaShoppingBag,
  FaChartLine,
  FaComments,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaPinterest,
  FaMicroscope,
  FaMapMarkedAlt,
  FaPalette,
  FaChartBar,
  FaRobot,
  FaBullseye,
  FaPenAlt,
  FaHandshake,
  FaSeedling,
  FaRedoAlt,
  FaLightbulb,
  FaEye,
  FaHeart,
  FaDollarSign,
  FaShareAlt,
  FaChartPie,
} from "react-icons/fa";
import { faqs } from "./socialMediaData";

const heroStats = [
  {
    value: "4.9B+",
    label: "Active social media users worldwide",
  },
  {
    value: "320%",
    label: "Average engagement growth",
  },
  {
    value: "6x",
    label: "ROI through social campaigns",
  },
  {
    value: "500+",
    label: "Brands scaled with social strategy",
  },
];

const tickerItems = [
  "Instagram Marketing",
  "LinkedIn Strategy",
  "Facebook Campaigns",
  "YouTube Growth",
  "TikTok Branding",
  "Content Creation",
  "Community Management",
  "Paid Social Ads",
  "Analytics & Reporting",
  "AI-Powered Social Media",
];

const whyStats = [
  { icon: FaMobileAlt, value: "4.9B", text: "People actively using social media platforms worldwide" },
  { icon: FaClock, value: "2.5 hrs", text: "Average daily time spent on social media per user" },
  { icon: FaShoppingBag, value: "76%", text: "Consumers purchase after discovering a brand on social media" },
  { icon: FaChartLine, value: "89%", text: "Marketers say social media increases brand awareness" },
  { icon: FaComments, value: "54%", text: "Consumers use social media to research products before buying" },
];

const platformCards = [
  {
    icon: FaInstagram,
    title: "Instagram",
    text: "Instagram remains the visual center of modern social media marketing. We create Reels, carousel posts, Stories, and live content that stop scrolling and spark real engagement.",
    tags: ["Reels Strategy", "Stories", "Visual Branding", "Influencer Collabs"],
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    text: "LinkedIn is powerful for B2B brands, consultants, professional services, and thought leadership. We build authority-driven content and decision-maker engagement.",
    tags: ["Thought Leadership", "B2B Strategy", "Lead Generation"],
  },
  {
    icon: FaFacebookF,
    title: "Facebook",
    text: "Facebook supports community-building, retargeting, paid ads, and customer relationship growth for brands targeting broad audiences.",
    tags: ["Community Building", "Facebook Ads", "Retargeting"],
  },
  {
    icon: FaTiktok,
    title: "TikTok",
    text: "TikTok rewards platform-native creativity. We create trend-aware short-form content that makes brands culturally relevant and discoverable.",
    tags: ["Short-Form Video", "Trend Integration", "Viral Content"],
  },
  {
    icon: FaYoutube,
    title: "YouTube",
    text: "YouTube is both a social platform and a search engine. We develop Shorts, long-form video strategy, channel growth, and YouTube SEO.",
    tags: ["YouTube SEO", "Shorts Strategy", "Channel Growth"],
  },
  {
    icon: FaPinterest,
    title: "X & Pinterest",
    text: "X supports real-time conversation while Pinterest supports product and lifestyle discovery. We tailor both for visibility and referral traffic.",
    tags: ["Real-Time Marketing", "Pinterest SEO", "Trend Monitoring"],
  },
];

const strategySteps = [
  {
    icon: FaMicroscope,
    title: "Discovery & Audit",
    text: "We audit your current social presence, competitors, audience behaviour, and missed opportunities to create a strong foundation.",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Strategy & Planning",
    text: "We build your roadmap including content pillars, platform priorities, brand voice, posting cadence, and campaign goals.",
  },
  {
    icon: FaPalette,
    title: "Content Creation",
    text: "We create platform-native content including Reels, graphics, carousels, Stories, captions, and interactive content.",
  },
  {
    icon: FaChartBar,
    title: "Optimize & Scale",
    text: "We track engagement, reach, conversions, audience response, and campaign data to improve performance every month.",
  },
];

const contentTypes = [
  {
    title: "Short-Form Video Content",
    text: "Reels, TikToks, and YouTube Shorts are among the highest-performing formats. We script, design, edit, and package short videos that grab attention.",
    tags: ["Instagram Reels", "TikTok Videos", "YouTube Shorts"],
  },
  {
    title: "Educational Content",
    text: "Carousels, infographics, LinkedIn posts, and expert-led content help position your brand as a trusted authority in your industry.",
    tags: ["LinkedIn Articles", "Carousels", "Infographics"],
  },
  {
    title: "Storytelling Content",
    text: "Founder stories, team spotlights, brand narratives, customer success stories, and behind-the-brand posts create stronger emotional connection.",
    tags: ["Brand Stories", "Case Studies", "Testimonials"],
  },
  {
    title: "Interactive Content",
    text: "Polls, Q&A sessions, challenges, live videos, and UGC campaigns turn passive followers into active community members.",
    tags: ["Polls & Quizzes", "Live Sessions", "UGC Campaigns"],
  },
  {
    title: "Paid Social Ads",
    text: "We manage targeted paid campaigns across Meta, LinkedIn, TikTok, and YouTube with creative testing and conversion optimization.",
    tags: ["Meta Ads", "LinkedIn Ads", "TikTok Ads"],
  },
  {
    title: "Influencer Partnerships",
    text: "We identify and manage creator collaborations that expand reach, improve credibility, and create authentic brand visibility.",
    tags: ["Micro-Influencers", "Creator Briefs", "ROI Tracking"],
  },
];

const aiFeatures = [
  {
    icon: FaRobot,
    title: "AI Content Intelligence",
    text: "AI tools help identify trends, content opportunities, and audience interests before they peak.",
  },
  {
    icon: FaBullseye,
    title: "Predictive Audience Targeting",
    text: "Machine learning helps refine posting times, audience segments, and campaign targeting.",
  },
  {
    icon: FaPenAlt,
    title: "Content Personalization",
    text: "Dynamic content variations help brands speak to different audience segments more effectively.",
  },
  {
    icon: FaChartBar,
    title: "Performance Forecasting",
    text: "AI-assisted dashboards help forecast KPIs and highlight optimization opportunities.",
  },
];

const results = [
  {
    value: "320%",
    label: "Average increase in engagement rate",
  },
  {
    value: "185%",
    label: "Growth in organic reach within 90 days",
  },
  {
    value: "6x",
    label: "Return on paid social advertising",
  },
  {
    value: "500+",
    label: "Brands grown through social media strategy",
  },
];

const values = [
  {
    icon: FaHandshake,
    title: "Authentic Communication",
    text: "Social media content that reflects your real brand personality and values.",
  },
  {
    icon: FaSeedling,
    title: "Community-First Mindset",
    text: "We focus on building loyal communities, not only chasing follower counts.",
  },
  {
    icon: FaBullseye,
    title: "Audience-Driven Content",
    text: "Every decision is based on what your audience needs, likes, and responds to.",
  },
  {
    icon: FaRedoAlt,
    title: "Consistent Brand Voice",
    text: "Your brand communicates with a unified tone across every social platform.",
  },
  {
    icon: FaLightbulb,
    title: "Value Before Promotion",
    text: "We lead with education, entertainment, usefulness, and trust-building content.",
  },
];

const metrics = [
  { icon: FaChartLine, title: "Engagement Rate", sub: "Likes, comments, shares" },
  { icon: FaEye, title: "Reach & Impressions", sub: "Unique views per platform" },
  { icon: FaChartBar, title: "Follower Growth", sub: "Community size and velocity" },
  { icon: FaDollarSign, title: "Conversion Tracking", sub: "Social to revenue attribution" },
  { icon: FaBullseye, title: "Click-Through Rate", sub: "Traffic from social media" },
  { icon: FaHeart, title: "Audience Sentiment", sub: "Brand perception analysis" },
  { icon: FaShareAlt, title: "Share Of Voice", sub: "Competitor comparison" },
  { icon: FaChartPie, title: "Cost Per Acquisition", sub: "Paid social efficiency" },
];
const investmentItems = [
  "Premium brand positioning through consistent social media presence",
  "Reduced customer acquisition cost as organic visibility grows",
  "Higher customer lifetime value through community-led loyalty",
  "Stronger SEO performance supported by social authority signals",
  "AI search visibility boosted by cross-platform brand presence",
];

function SectionHeader({ eyebrow, title, text, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-9 max-w-4xl"
    >
      <p
        className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] ${
          light ? "text-white/65" : "text-[#7392FB]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl ${
          light ? "text-white" : "text-[#0d2d47]"
        }`}
      >
        {title}
      </h2>

      {text && (
        <p
          className={`mt-5 max-w-3xl text-base leading-8 ${
            light ? "text-white/72" : "text-[#0d2d47]/72"
          }`}
        >
          {text}
        </p>
      )}
    </motion.div>
  );
}

export default function SocialMediaClient() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#EAEBDB] text-[#0d2d47]">
      {/* HERO */}
      <section
        className="relative overflow-hidden px-4 pb-14 pt-32 sm:px-6 sm:pt-36 md:px-10 md:pb-20 md:pt-44"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 38%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <div className="pointer-events-none absolute bottom-[-4rem] right-[-1rem] select-none text-[24vw] font-black uppercase leading-none tracking-tighter text-[#0d2d47]/[0.035]">
          SMM
        </div>

        <div className="pointer-events-none absolute -left-32 -top-32 h-[340px] w-[340px] rounded-full bg-white/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-28 h-[430px] w-[430px] rounded-full bg-[#7392FB]/35 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {/* <p className="mb-5 inline-flex bg-[#0d2d47] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[4px_4px_0_rgba(115,146,251,0.45)]">
              Nova Techscience · Social Media Services
            </p> */}

            <h1 className="max-w-4xl text-[42px] font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[86px]">
              Social Media That Builds{" "}
              <span className="text-[#7392FB]">Real Business</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#0d2d47]/75 md:text-lg">
              At Nova Techscience, we design and execute social media strategies
              that turn your digital presence into a powerful growth engine 
              driving engagement, building authority, and converting followers
              into customers.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-md bg-[#0d2d47] px-7 py-3 text-center text-sm font-bold text-white shadow-[5px_5px_0_#7392FB] transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0_#7392FB]"
              >
                Start Growing Today
              </Link>

              <Link
                href="/portfolio"
                className="rounded-md border-2 border-[#0d2d47] bg-white/20 px-7 py-3 text-center text-sm font-bold text-[#0d2d47] backdrop-blur-md transition hover:bg-[#0d2d47] hover:text-white"
              >
                See Our Process →
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {heroStats.map((item, i) => (
              <motion.div
                key={item.label}
                whileHover={{ x: -3, y: -3 }}
                className={`rounded-2xl border border-[#0d2d47]/10 p-5 shadow-[5px_5px_0_rgba(13,45,71,0.09)] backdrop-blur-md ${
                  i === 0
                    ? "bg-[#0d2d47] text-white sm:col-span-2"
                    : "bg-white/45"
                }`}
              >
                <p
                  className={`text-4xl font-black ${
                    i === 0 ? "text-[#7392FB]" : "text-[#0d2d47]"
                  }`}
                >
                  {item.value}
                </p>
                <p
                  className={`mt-2 text-sm font-semibold leading-relaxed ${
                    i === 0 ? "text-white/65" : "text-[#0d2d47]/65"
                  }`}
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MOVING STRIP */}
      <section className="overflow-hidden bg-[#7392FB] py-5">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-8 whitespace-nowrap"
        >
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.14em] text-white"
            >
              <span className="h-2 w-2 rounded-full bg-white/50" />
              {item}
            </span>
          ))}
        </motion.div>
      </section>

      {/* WHY SOCIAL */}
      <section className="bg-[#EAEBDB] px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.12fr_0.88fr]">
          <div>
            <SectionHeader
              // eyebrow="Why It Matters"
              title="Why Social Media Is The Foundation Of Modern Growth"
            />

            <div className="space-y-4 text-base leading-8 text-[#0d2d47]/75">
              <p>
                In 2026, social media is no longer a supporting channel for
                businesses  it is where brand identities are built, customer
                relationships are formed, and buying decisions are influenced.
              </p>

              <p>
                At Nova Techscience, we understand that effective social media
                marketing goes far beyond posting content on a schedule. It
                requires audience research, storytelling, consistency, and
                intelligent data analysis.
              </p>

              <p>
                Businesses that invest in a strong social media presence create
                stronger brand loyalty, better customer lifetime value, and
                improved organic reach.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-7 rounded-2xl bg-[#0d2d47] p-6 text-white shadow-[0_22px_65px_rgba(13,45,71,0.22)]"
            >
              <p className="text-xl font-bold italic leading-relaxed">
                “Social media is not just a marketing tool  it is the most
                powerful relationship-building platform ever created.”
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                Nova Techscience Social Media Strategy Team
              </p>
            </motion.div>
          </div>

          <div className="space-y-4">
            {whyStats.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: 26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 rounded-2xl border border-[#0d2d47]/10 bg-white/45 p-4 shadow-[4px_4px_0_rgba(13,45,71,0.08)] backdrop-blur-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C4CFE3] text-2xl">
                  {(() => {
  const Icon = item.icon;
  return <Icon />;
})()}
                </span>
                <div>
                  <p className="text-2xl font-black text-[#7392FB]">
                    {item.value}
                  </p>
                  <p className="text-sm font-medium leading-relaxed text-[#0d2d47]/65 [&_a]:no-underline">
                    <ServiceInternalLinkText currentHref="/services/social-media">
                      {item.text}
                    </ServiceInternalLinkText>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="bg-white px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            // eyebrow="Platform Expertise"
            title="Social Media Platforms We Master For Your Brand"
            text="Every platform has its own audience, culture, and algorithm. Nova Techscience creates platform-specific strategies for visibility, engagement, and conversion."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {platformCards.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -6 }}
                className="relative overflow-hidden rounded-2xl border border-[#0d2d47]/10 bg-[#EAEBDB] p-6 shadow-[0_18px_55px_rgba(13,45,71,0.06)]"
              >
                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-[#7392FB] transition group-hover:scale-x-100" />

                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C4CFE3] text-3xl">
                  {(() => {
  const Icon = item.icon;
  return <Icon />;
})()}
                </span>

                <h3 className="text-2xl font-black uppercase [&_a]:no-underline">
                  <ServiceInternalLinkText currentHref="/services/social-media">
                    {item.title}
                  </ServiceInternalLinkText>
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#0d2d47]/70 [&_a]:no-underline">
                  <ServiceInternalLinkText currentHref="/services/social-media">
                    {item.text}
                  </ServiceInternalLinkText>
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#0d2d47]/10 bg-white/60 px-3 py-1 text-xs font-bold text-[#0d2d47]/70 [&_a]:no-underline"
                    >
                      <ServiceInternalLinkText currentHref="/services/social-media">
                        {tag}
                      </ServiceInternalLinkText>
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGY */}
      <section
        className="px-4 py-14 text-white sm:px-6 md:px-10 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, #7392FB 0%, #243f78 52%, #0d2d47 100%)",
        }}
      >
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            // eyebrow="Our Process"
            title="Nova Techscience's 4-Step Social Media Strategy Framework"
            text="Every social media success story starts with a structured, research-driven process."
            light
          />

          <div className="grid overflow-hidden rounded-3xl border border-white/15 md:grid-cols-2 xl:grid-cols-4">
            {strategySteps.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border-b border-white/15 p-6 transition hover:bg-white/10 md:border-r xl:border-b-0"
              >
                <p className="text-6xl font-black text-white/15">
                  {(i + 1).toString().padStart(2, "0")}
                </p>

                <span className="mt-4 block text-3xl">{(() => {
  const Icon = item.icon;
  return <Icon />;
})()}</span>

                <h3 className="mt-4 text-xl font-black uppercase [&_a]:no-underline">
                  <ServiceInternalLinkText currentHref="/services/social-media">
                    {item.title}
                  </ServiceInternalLinkText>
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/62 [&_a]:no-underline">
                  <ServiceInternalLinkText currentHref="/services/social-media">
                    {item.text}
                  </ServiceInternalLinkText>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT TYPES */}
      <section className="bg-[#EAEBDB] px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            // eyebrow="Content Excellence"
            title="Types Of Social Media Content Nova Techscience Creates"
            text="Great results begin with outstanding content. We produce every format your brand needs to dominate social media."
          />

          <div className="grid gap-4 lg:grid-cols-2">
            {contentTypes.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -22 : 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-5 rounded-2xl border border-[#0d2d47]/10 bg-white/55 p-5 backdrop-blur-md transition hover:translate-x-1"
              >
                <p className="shrink-0 text-5xl font-black text-[#7392FB]/35">
                  {(i + 1).toString().padStart(2, "0")}
                </p>

                <div>
                  <h3 className="text-xl font-black uppercase [&_a]:no-underline">
                    <ServiceInternalLinkText currentHref="/services/social-media">
                      {item.title}
                    </ServiceInternalLinkText>
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#0d2d47]/70 [&_a]:no-underline">
                    <ServiceInternalLinkText currentHref="/services/social-media">
                      {item.text}
                    </ServiceInternalLinkText>
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#7392FB]/20 bg-[#7392FB]/10 px-3 py-1 text-xs font-bold text-[#0d2d47] [&_a]:no-underline"
                      >
                        <ServiceInternalLinkText currentHref="/services/social-media">
                          {tag}
                        </ServiceInternalLinkText>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="bg-white px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[28px] bg-[#0d2d47] p-6 shadow-[0_28px_80px_rgba(13,45,71,0.22)]"
          >
            <div className="absolute -bottom-8 -right-4 text-[160px] font-black leading-none text-white/[0.04]">
              AI
            </div>

            <div className="relative space-y-4">
              {aiFeatures.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                >
                  <span className="text-2xl">{(() => {
  const Icon = item.icon;
  return <Icon />;
})()}</span>
                  <div>
                    <h3 className="text-base font-black uppercase text-white [&_a]:no-underline">
                      <ServiceInternalLinkText currentHref="/services/social-media">
                        {item.title}
                      </ServiceInternalLinkText>
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-white/55">
                      <ServiceInternalLinkText currentHref="/services/social-media">
                        {item.text}
                      </ServiceInternalLinkText>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div>
            <SectionHeader
              // eyebrow="AI-Powered Approach"
              title="How Nova Techscience Uses AI To Supercharge Social Media Results"
            />

            <div className="space-y-4 text-base leading-8 text-[#0d2d47]/75">
              <p>
                The social media landscape is too fast-moving to manage through
                intuition alone. We integrate AI tools into content ideation,
                audience analysis, campaign optimization, and reporting.
              </p>

              <p>
                AI-enhanced workflows help us identify what content audiences
                respond to, predict posting times, test creative variations, and
                improve campaign efficiency.
              </p>

              <p>
                By combining creative strategy with intelligent data, Nova
                Techscience delivers social media results that pure automation
                or manual effort cannot match alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-[#7392FB] px-4 py-14 text-white sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1180px] text-center">
          <SectionHeader
            eyebrow="Proven Results"
            title="What Nova Techscience Delivers Across Social Campaigns"
            text="Our social media strategies produce measurable results across industries."
            light
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-white/25 bg-white/15 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
              >
                <p className="text-4xl font-black">{item.value}</p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-white/72">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HUMAN */}
      <section className="bg-[#EAEBDB] px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader
              // eyebrow="Human-First Philosophy"
              title="Building Brands That People Genuinely Connect With"
            />

            <div className="space-y-4 text-base leading-8 text-[#0d2d47]/75">
              <p>
                The most successful social media brands are not always the ones
                spending the most money. They are the brands that build
                authentic communities around trust, value, and personality.
              </p>

              <p>
                Nova Techscience helps your brand create content and community
                experiences that make your audience feel seen, valued, and
                inspired.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 rounded-2xl border border-[#0d2d47]/10 bg-white/50 p-4 backdrop-blur-md transition hover:translate-x-1"
              >
                <span className="text-3xl">{(() => {
  const Icon = item.icon;
  return <Icon />;
})()}</span>
                <div>
                  <h3 className="text-base font-black uppercase [&_a]:no-underline">
                    <ServiceInternalLinkText currentHref="/services/social-media">
                      {item.title}
                    </ServiceInternalLinkText>
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#0d2d47]/68 [&_a]:no-underline">
                    <ServiceInternalLinkText currentHref="/services/social-media">
                      {item.text}
                    </ServiceInternalLinkText>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ANALYTICS */}
      <section className="bg-[#C4CFE3] px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader
              // eyebrow="Data & Analytics"
              title="Social Media Analytics That Drive Smarter Decisions"
            />

            <div className="space-y-4 text-base leading-8 text-[#0d2d47]/75">
              <p>
                We monitor metrics that actually matter: engagement quality,
                audience sentiment, reach efficiency, conversion attribution,
                and long-term community health.
              </p>

              <p>
                Monthly performance reports turn raw data into clear
                recommendations, so you always know what is working and what
                should improve next.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {metrics.map(({ icon: Icon, title, sub }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.035 }}
                className="rounded-2xl border border-[#0d2d47]/10 bg-white/50 p-4 text-center shadow-[4px_4px_0_rgba(13,45,71,0.08)] backdrop-blur-md"
              >
               <span className="text-2xl">
  <Icon />
</span>
                <p className="mt-2 text-sm font-black uppercase">{title}</p>
                <p className="mt-1 text-xs leading-snug text-[#0d2d47]/55">
                  {sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="bg-white px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeader
              // eyebrow="The Business Case"
              title="Social Media Is A Long-Term Business Investment"
            />

            <div className="space-y-4 text-base leading-8 text-[#0d2d47]/75">
              <p>
                Many businesses expect immediate sales from every post. In
                reality, social media creates compounding value through trust,
                authority, community, and repeat visibility.
              </p>

              <p>
                A strong 12–24 month social presence becomes a digital asset
                that competitors cannot easily copy.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {investmentItems.map((item) => (
                <p
                  key={item}
                  className="flex gap-3 text-sm font-bold leading-relaxed text-[#0d2d47]/75"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7392FB]/18 text-xs">
                    ✓
                  </span>
                  {item}
                </p>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[28px] border border-[#0d2d47]/10 bg-[#EAEBDB] p-6 shadow-[0_22px_65px_rgba(13,45,71,0.08)]"
          >
            <h3 className="text-2xl font-black uppercase">
              Average Growth Timeline
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#0d2d47]/65">
              Nova Techscience client performance benchmarks across social media
              campaigns by stage.
            </p>

            <div className="mt-6 space-y-5">
              {[
                ["Month 1–3 · Foundation", "40%"],
                ["Month 3–6 · Acceleration", "65%"],
                ["Month 6–9 · Scale", "82%"],
                ["Month 9–12 · Dominance", "95%"],
              ].map(([label, width], i) => (
                <div key={label}>
                  <div className="mb-2 flex justify-between text-xs font-bold uppercase tracking-[0.08em] text-[#0d2d47]/65">
                    <span>{label}</span>
                    <span>{width}</span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-[#0d2d47]/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.12 }}
                      className="h-full rounded-full bg-[#7392FB]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="px-4 py-14 sm:px-6 md:px-10 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 48%, #8EA5F1 100%)",
        }}
      >
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              // eyebrow="The Future Of Social Media Marketing"
              title="Relevance, Engagement Quality And AI Recommendations"
            />

            <div className="space-y-4 text-base leading-8 text-[#0d2d47]/75">
              <p>
                Social media marketing will continue evolving as AI systems,
                recommendation algorithms and audience behaviour become more
                advanced.
              </p>
              <p>
                Platforms increasingly prioritise relevance, engagement quality,
                and meaningful interactions instead of vanity metrics.
              </p>
              <p>
                Nova Techscience helps brands stay ready for platform changes,
                AI-driven discovery, and future search behaviour.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-black uppercase leading-tight sm:text-4xl">
              Social Media Marketing FAQs
            </h2>

            <div className="space-y-3">
              {faqs.map((item, i) => {
                const isOpen = openFaq === i;

                return (
                  <div
                    key={item.q}
                    className="overflow-hidden rounded-2xl border border-white/35 bg-white/35 backdrop-blur-md"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : i)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/40"
                    >
                      <span className="text-base font-black uppercase">
                        {item.q}
                      </span>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0d2d47] text-xl text-white">
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
                          <p className="px-5 pb-5 text-base leading-8 text-[#0d2d47]/72">
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

      {/* CTA */}
      <section className="bg-[#0d2d47] px-4 py-16 text-white sm:px-6 md:px-10 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[1180px] text-center"
        >
          {/* <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#7392FB]">
            Get Started
          </p> */}

          <h2 className="mx-auto max-w-5xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Ready To Transform Your{" "}
            <span className="text-[#7392FB]">Social Media Presence?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/58">
            Partner with Nova Techscience and build a social media strategy that
            creates real engagement, genuine community, and measurable business
            growth across every platform that matters.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-white px-7 py-3 text-sm font-black text-[#0d2d47] shadow-[5px_5px_0_#7392FB] transition hover:-translate-x-1 hover:-translate-y-1"
            >
              Get A Free Social Media Audit
            </Link>

            <Link
              href="/portfolio"
              className="rounded-md border border-white/20 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
            >
              Schedule A Strategy Call
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
