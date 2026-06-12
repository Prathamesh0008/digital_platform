"use client";

import Image from "next/image";
import BlogInterlinkSection from "@/components/BlogInterlinkSection";
import BlogInlineLinkText from "@/components/BlogInlineLinkText";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getRelatedBlogArticles } from "@/lib/internalLinks";
import {
  BarChart3,
  CheckCircle2,
  CircleQuestionMark,
  LayoutTemplate,
  MousePointerClick,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { blogs } from "@/data/blog";

const blog = blogs.find(
  (item) => item.slug === "why-every-brand-needs-a-conversion-focused-website"
);

const heroPoints = [
  {
    title: "Clearer Messaging",
    text: "Visitors understand what you offer, who you help, and why they should trust your brand.",
    Icon: LayoutTemplate,
  },
  {
    title: "Stronger Actions",
    text: "Every section supports a next step like contacting your team, requesting a quote, or starting a project.",
    Icon: MousePointerClick,
  },
  {
    title: "Better Business Results",
    text: "The website becomes a lead-generation asset instead of just an online company profile.",
    Icon: TrendingUp,
  },
];

const elementCards = [
  {
    title: "Clear Value Proposition",
    text: "Visitors should instantly understand what you do, who you help, why you are different, and what they should do next.",
    Icon: Sparkles,
  },
  {
    title: "Strong Calls To Action",
    text: "Clear CTAs reduce confusion and guide users toward consultation requests, quotes, forms, calls, and purchases.",
    Icon: MousePointerClick,
  },
  {
    title: "Trust Signals",
    text: "Testimonials, case studies, reviews, certifications, partner logos, and proof points reduce hesitation.",
    Icon: ShieldCheck,
  },
  {
    title: "Mobile-First Experience",
    text: "A conversion-focused website must perform smoothly across phones, tablets, laptops, and desktop devices.",
    Icon: Smartphone,
  },
];

const benefitCards = [
  {
    title: "Higher Lead Generation",
    text: "Better design and sharper messaging increase contact form submissions and business enquiries.",
    Icon: TrendingUp,
  },
  {
    title: "Improved Sales Performance",
    text: "Visitors move through the buying journey faster because the website reduces friction.",
    Icon: BarChart3,
  },
  {
    title: "Better Marketing ROI",
    text: "SEO, PPC, content, and social traffic produce more value when the website converts attention into action.",
    Icon: Search,
  },
  {
    title: "Stronger Brand Authority",
    text: "Professional websites improve trust, credibility, and market positioning.",
    Icon: ShieldCheck,
  },
];

const warningSigns = [
  "Bounce rates are high",
  "Leads are inconsistent",
  "Contact forms receive few submissions",
  "Mobile experience feels difficult",
  "Website speed is slow",
  "Calls to action are unclear",
  "Users struggle to navigate pages",
];

const faqItems = blog.content.slice(13).map((item) => ({
  q: item.heading.replace("FAQ: ", ""),
  a: item.body,
}));

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

export default function WhyEveryBrandNeedsConversionFocusedWebsite() {
  const [openFaq, setOpenFaq] = useState(0);
  const relatedBlogs = getRelatedBlogArticles(
    "why-every-brand-needs-a-conversion-focused-website"
  );

  if (!blog) return null;

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
              <LayoutTemplate className="h-4 w-4 text-[#7392FB]" />
              Web Design + Conversion Strategy
            </div>

            <h1 className="mt-6 max-w-5xl text-[38px] font-semibold uppercase leading-[0.92] tracking-tight text-[#0d2d47] sm:text-6xl md:text-[78px]">
              {blog.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#263b52] md:text-lg">
              {blog.excerpt}
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
              Why Conversion Focus Matters
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
      
      <section className="px-4 pb-6 sm:px-6 md:px-10 md:pb-10">
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
                src="/blog/WhyEvery.jpg"
                alt="Why every brand needs a conversion-focused website"
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
            Quick Answer: What Is A Conversion-Focused Website?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#40536a] md:text-lg">
            <BlogInlineLinkText currentPath="/blog/why-every-brand-needs-a-conversion-focused-website">
              {blog.content[0].body}
            </BlogInlineLinkText>
          </p>
        </div>
      </section>



      <section id="article" className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            eyebrow="Main Shift"
            title="Your Website Is No Longer Just A Digital Brochure"
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-[30px] bg-white p-8 shadow-[0_20px_70px_rgba(13,45,71,0.07)] md:p-10"
          >
            {blog.content.slice(1, 5).map((section) => (
              <div
                key={section.heading}
                className="border-b border-[#0d2d47]/10 py-6 first:pt-0 last:border-b-0 last:pb-0"
              >
                <h3 className="text-2xl font-semibold uppercase leading-tight text-[#0d2d47] md:text-3xl">
                  {section.heading}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#40536a] md:text-lg">
                  <BlogInlineLinkText currentPath="/blog/why-every-brand-needs-a-conversion-focused-website">
                    {section.body}
                  </BlogInlineLinkText>
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            eyebrow="Core Elements"
            title="What A High-Converting Website Needs"
            text={
              <BlogInlineLinkText currentPath="/blog/why-every-brand-needs-a-conversion-focused-website">
                {blog.content[5].body}
              </BlogInlineLinkText>
            }
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {elementCards.map(({ title, text, Icon }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[24px] border border-[#0d2d47]/6 bg-white p-7 shadow-[0_16px_50px_rgba(13,45,71,0.07)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#edf1ff] text-[#7392FB]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#0d2d47]">{title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[#40536a]">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-2">
          {[blog.content[6], blog.content[7]].map((section, index) => (
            <motion.article
              key={section.heading}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-[30px] bg-white p-8 shadow-[0_20px_70px_rgba(13,45,71,0.07)] md:p-10"
            >
              <h2 className="text-3xl font-semibold uppercase leading-tight text-[#0d2d47] md:text-4xl">
                {section.heading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#40536a] md:text-lg">
                <BlogInlineLinkText currentPath="/blog/why-every-brand-needs-a-conversion-focused-website">
                  {section.body}
                </BlogInlineLinkText>
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            eyebrow="Business Benefits"
            title="Why Brands Invest In Conversion-Focused Websites"
            text={
              <BlogInlineLinkText currentPath="/blog/why-every-brand-needs-a-conversion-focused-website">
                {blog.content[8].body}
              </BlogInlineLinkText>
            }
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefitCards.map(({ title, text, Icon }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="rounded-[24px] border border-[#0d2d47]/6 bg-white p-8 shadow-[0_16px_50px_rgba(13,45,71,0.07)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#edf1ff] text-[#7392FB]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#0d2d47]">{title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[#40536a]">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="rounded-[30px] bg-[#0d2d47] p-8 text-white shadow-[0_20px_70px_rgba(13,45,71,0.16)] md:p-10"
          >
            <h2 className="text-3xl font-semibold uppercase leading-tight md:text-4xl">
              Signs Your Website Is Hurting Conversions
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
              <BlogInlineLinkText currentPath="/blog/why-every-brand-needs-a-conversion-focused-website">
                {blog.content[9].body}
              </BlogInlineLinkText>
            </p>

            <div className="mt-8 space-y-3">
              {warningSigns.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white/8 px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#9DC2FF]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-5">
            {[blog.content[10], blog.content[11], blog.content[12]].map((section, index) => (
              <motion.article
                key={section.heading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="rounded-[22px] bg-white p-6 shadow-[0_12px_40px_rgba(13,45,71,0.07)] md:p-8"
              >
                <h3 className="text-2xl font-semibold text-[#0d2d47]">{section.heading}</h3>
                <p className="mt-3 text-base leading-relaxed text-[#40536a]">
                  <BlogInlineLinkText currentPath="/blog/why-every-brand-needs-a-conversion-focused-website">
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
            Ready To Build A Conversion-Focused Website?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/88 md:text-lg">
            Nova Techscience builds websites that guide users, strengthen trust, support SEO and GEO, and turn more visitors into real business results.
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
