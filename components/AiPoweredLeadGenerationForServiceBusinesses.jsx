"use client";

import Image from "next/image";
import BlogInterlinkSection from "@/components/BlogInterlinkSection";
import BlogInlineLinkText from "@/components/BlogInlineLinkText";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getRelatedBlogArticles } from "@/lib/internalLinks";
import {
  BrainCircuit,
  CircleQuestionMark,
  Clock3,
  Filter,
  Target,
} from "lucide-react";

const articleSections = [
  {
    heading: "AI Snapshot: What Is AI-Powered Lead Generation?",
    body: "AI-powered lead generation uses artificial intelligence to identify, attract, qualify, and nurture potential customers automatically. Instead of relying solely on manual prospecting, businesses can use AI tools to analyze customer behavior, predict buying intent, personalize communication, and automate follow-ups. For service businesses, AI-powered lead generation improves lead quality, reduces acquisition costs, increases conversion rates, and helps teams focus on closing deals rather than chasing unqualified prospects.",
  },
  {
    heading: "The Lead Generation Landscape Has Changed",
    body: "For years, service businesses generated leads through referrals, cold outreach, paid advertising, and networking events. While these methods still have value, customer behavior has changed significantly. Today's buyers research extensively before contacting a company. They compare options, read reviews, consult AI assistants, and often make decisions before speaking with a salesperson. This shift has created a major challenge. Businesses need to identify high-intent prospects earlier while delivering personalized experiences at scale. This is exactly where artificial intelligence is transforming lead generation. AI is no longer a future trend. It has become one of the most practical growth tools available to service-based businesses. From legal firms and healthcare providers to consultants, agencies, financial advisors, and home service companies, AI is helping businesses attract and convert better leads faster than ever before.",
  },
  {
    heading: "What Is AI-Powered Lead Generation?",
    body: "AI-powered lead generation is the process of using artificial intelligence technologies to automate and improve customer acquisition. Rather than manually identifying prospects, AI systems analyze massive amounts of data to identify individuals or businesses most likely to become customers. AI can assist with lead identification, audience targeting, website personalization, predictive analytics, chatbot conversations, email automation, lead scoring, appointment scheduling, customer segmentation, and sales forecasting. The result is a more efficient and scalable lead generation process.",
  },
  {
    heading: "Why Traditional Lead Generation Is Becoming Less Effective",
    body: "Many service businesses still depend on outdated lead generation strategies. Common challenges include low quality leads, manual qualification, slow response times, generic marketing, and rising advertising costs. Large volumes of inquiries do not necessarily produce customers. Sales teams spend valuable time filtering prospects. Potential customers often move to competitors before receiving responses. Mass messaging no longer performs effectively. Paid media costs continue increasing across most digital channels. AI helps solve each of these challenges through automation and intelligence.",
  },
  {
    heading: "How AI Is Transforming Service Business Marketing",
    body: "Artificial intelligence is changing how businesses attract prospects at every stage of the customer journey. Intelligent Audience Targeting: AI systems can analyze search behavior, website interactions, purchase history, social engagement, and industry trends. This allows businesses to target audiences more accurately. Instead of guessing who may become a customer, AI identifies patterns that indicate buying intent. Predictive Lead Scoring: Not every lead has the same value. AI-powered lead scoring evaluates prospects based on engagement levels, website activity, demographics, previous interactions, and conversion likelihood. Sales teams can prioritize high-intent leads rather than wasting time on unlikely prospects. AI-Powered Chatbots: Modern AI chatbots are far more advanced than traditional live chat systems. They can answer questions instantly, collect customer information, schedule appointments, qualify prospects, and route inquiries. This creates a seamless customer experience while generating leads 24/7.",
  },
  {
    heading: "The Rise Of Conversational Lead Generation",
    body: "One of the biggest trends in 2026 is conversational lead generation. Consumers increasingly expect immediate answers. They are comfortable interacting with AI chatbots, virtual assistants, voice search, and AI-powered support systems. Businesses that provide instant engagement often capture more leads than competitors relying solely on contact forms. The speed of response has become a competitive advantage.",
  },
  {
    heading: "How AI Improves Conversion Rates",
    body: "Generating leads is only part of the process. Converting those leads into customers is where AI creates significant value. Personalized Experiences: AI adapts messaging based on user behavior. Dynamic Website Content: Visitors see content tailored to their interests. Smart Follow-Ups: Automated systems engage prospects at optimal times. Better Timing: AI identifies when customers are most likely to respond. Reduced Friction: Automation simplifies the buying journey. Together, these improvements create higher conversion rates and better customer experiences.",
  },
  {
    heading: "AI And GEO: The New Lead Generation Advantage",
    body: "As AI-powered search platforms become more popular, GEO (Generative Engine Optimization) is becoming a critical lead generation strategy. Platforms such as ChatGPT, Gemini, Perplexity, and Copilot increasingly influence purchasing decisions. When users ask Best digital marketing agency, Top SEO company, Reliable business consultant, or Leading financial advisor, AI platforms generate recommendations. Businesses that optimize for GEO improve their chances of being cited within these responses. This creates a new source of qualified leads that many competitors are still ignoring.",
  },
  {
    heading: "AI Lead Generation Channels Service Businesses Should Focus On",
    body: "SEO + GEO Integration: Organic visibility remains one of the strongest lead generation channels. Combining SEO and GEO creates visibility across both traditional search engines and AI-generated answers. AI-Enhanced Content Marketing: Content remains essential. However, AI now helps businesses identify topics, analyze intent, improve personalization, and optimize distribution. AI Email Automation: Modern AI platforms can personalize messages, predict engagement, optimize send times, and improve response rates. CRM Automation: AI integrated with CRM systems provides lead prioritization, customer insights, opportunity forecasting, and sales pipeline optimization.",
  },
  {
    heading: "Industries Benefiting Most From AI Lead Generation",
    body: "The following industries are seeing significant growth from AI-powered lead generation: Professional Services including law firms, consultants, accountants, and agencies. Healthcare including private clinics, healthcare providers, and specialists. Financial Services including insurance agencies, investment firms, and advisors. Home Services including HVAC, plumbing, roofing, landscaping, and maintenance companies. Technology Companies including software providers, SaaS businesses, and IT services.",
  },
  {
    heading: "Common AI Lead Generation Mistakes",
    body: "Many businesses implement AI incorrectly. Avoid these mistakes: over-automation, ignoring human interaction, poor data quality, generic content creation, lack of personalization, and no conversion tracking. The most effective strategies combine AI efficiency with human expertise.",
  },
  {
    heading: "The Future Of Lead Generation Is Hybrid",
    body: "The future is not AI replacing people. The future is AI enhancing people. Successful service businesses will combine human expertise, strategic marketing, AI automation, GEO visibility, and customer personalization. Businesses that embrace this hybrid approach will outperform competitors still relying entirely on manual processes.",
  },
  {
    heading: "Final Thoughts",
    body: "AI-powered lead generation is fundamentally changing how service businesses attract, qualify, and convert customers. Organizations that adopt AI strategically gain faster response times, better lead quality, improved conversion rates, and stronger operational efficiency. As search, marketing, and customer behavior continue evolving, AI-powered lead generation will become a core growth strategy rather than a competitive advantage. At Nova Techscience, we help service businesses combine AI automation, SEO, GEO, conversion optimization, and data-driven marketing strategies to create scalable lead generation systems that deliver measurable business growth.",
  },
];

const faqItems = [
  {
    q: "What is AI-powered lead generation?",
    a: "AI-powered lead generation uses artificial intelligence to identify, attract, qualify, and nurture potential customers automatically. It helps businesses improve lead quality, automate repetitive tasks, and increase conversion opportunities while reducing manual effort.",
  },
  {
    q: "How does AI improve lead quality?",
    a: "AI analyzes customer behavior, engagement patterns, demographics, and intent signals to identify prospects most likely to convert. This allows businesses to focus on high-quality leads instead of spending time on unqualified inquiries.",
  },
  {
    q: "Can small service businesses use AI lead generation?",
    a: "Yes. Modern AI tools are accessible to businesses of all sizes. Small service businesses can use AI chatbots, CRM automation, email personalization, and predictive analytics to improve lead generation without large marketing teams.",
  },
  {
    q: "What is the role of AI chatbots in lead generation?",
    a: "AI chatbots engage website visitors instantly, answer questions, collect customer information, schedule appointments, and qualify leads. This improves response times and helps businesses capture opportunities around the clock.",
  },
  {
    q: "How does GEO support AI lead generation?",
    a: "GEO helps businesses appear in AI-generated answers on platforms like ChatGPT, Gemini, and Perplexity. Increased AI visibility can generate highly qualified leads from users actively seeking recommendations and solutions.",
  },
  {
    q: "Is AI replacing human sales teams?",
    a: "No. AI enhances sales teams by automating repetitive tasks and providing insights. Human expertise remains essential for relationship building, strategic conversations, negotiations, and closing complex service-based sales.",
  },
];

const highlightCards = [
  {
    title: "Better Lead Quality",
    text: "AI helps service businesses focus on prospects with stronger buying intent.",
    Icon: Target,
  },
  {
    title: "Faster Response",
    text: "Automation reduces delays and captures more opportunities before competitors do.",
    Icon: Clock3,
  },
  {
    title: "Smarter Qualification",
    text: "AI scoring and segmentation keep teams focused on the right conversations.",
    Icon: Filter,
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

export default function AiPoweredLeadGenerationForServiceBusinesses() {
  const [openFaq, setOpenFaq] = useState(0);
  const relatedBlogs = getRelatedBlogArticles(
    "ai-powered-lead-generation-for-service-businesses"
  );

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
              <BrainCircuit className="h-4 w-4 text-[#7392FB]" />
              AI + Lead Generation Strategy
            </div>

            <h1 className="mt-6 max-w-5xl text-[38px] font-semibold uppercase leading-[0.92] tracking-tight text-[#0d2d47] sm:text-6xl md:text-[78px]">
              AI-Powered Lead Generation For Service Businesses
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#263b52] md:text-lg">
              Learn how AI-powered lead generation helps service businesses attract qualified leads, automate sales processes, and increase conversions in 2026 and beyond.
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
              What AI Improves
            </h3>

            <div className="mt-6 space-y-5">
              {highlightCards.map(({ title, text, Icon }) => (
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

      <section className="px-4 pb-6 pt-8 sm:px-6 md:px-10 md:pb-10">
        <div className="mx-auto max-w-[860px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[30px] bg-white shadow-[0_20px_70px_rgba(13,45,71,0.08)]"
          >
            <div className="relative aspect-[3/2] w-full bg-white">
              <Image
                src="/blog/AI-Powered.jpg"
                alt="AI-powered lead generation for service businesses"
                fill
                priority
                className="object-contain"
                sizes="(min-width: 1280px) 860px, (min-width: 768px) 80vw, calc(100vw - 32px)"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px] rounded-[30px] border-l-[6px] border-[#7392FB] bg-white p-8 shadow-[0_20px_60px_rgba(13,45,71,0.08)]">
          <h2 className="text-3xl font-semibold uppercase leading-tight text-[#0d2d47] md:text-4xl">
            AI Snapshot: What Is AI-Powered Lead Generation?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#40536a] md:text-lg">
            <BlogInlineLinkText currentPath="/blog/ai-powered-lead-generation-for-service-businesses">
              {articleSections[0].body}
            </BlogInlineLinkText>
          </p>
        </div>
      </section>

      <section id="article" className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            eyebrow="Complete Article"
            title="How AI Is Reshaping Lead Generation For Service Businesses"
          />

          <div className="space-y-5">
            {articleSections.slice(1).map((section, index) => (
              <motion.article
                key={section.heading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                className="rounded-[24px] bg-white p-7 shadow-[0_16px_50px_rgba(13,45,71,0.07)] md:p-9"
              >
                <h3 className="text-2xl font-semibold text-[#0d2d47] md:text-3xl">
                  {section.heading}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#40536a] md:text-lg">
                  <BlogInlineLinkText currentPath="/blog/ai-powered-lead-generation-for-service-businesses">
                    {section.body}
                  </BlogInlineLinkText>
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <BlogInterlinkSection items={relatedBlogs} />

      <section id="faq" className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" />

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={item.q}
                  className="rounded-[22px] bg-white p-6 shadow-[0_12px_40px_rgba(13,45,71,0.07)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
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
            Ready To Build Smarter Lead Generation?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/88 md:text-lg">
            Nova Techscience helps service businesses combine AI automation, SEO, GEO, and conversion optimization to build scalable lead generation systems.
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
