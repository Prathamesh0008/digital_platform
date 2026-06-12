"use client";

import Image from "next/image";
import BlogInterlinkSection from "@/components/BlogInterlinkSection";
import BlogInlineLinkText from "@/components/BlogInlineLinkText";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getRelatedBlogArticles } from "@/lib/internalLinks";
import {
  CircleQuestionMark,
  Compass,
  Layers3,
  MessageSquareText,
  Palette,
  Target,
} from "lucide-react";

const articleSections = [
  {
    heading: "Quick Answer: Why Should Brand Strategy Come Before Website Design?",
    body: "Brand strategy provides the foundation for every decision made during the website design process. It defines who your audience is, what makes your business different, how you communicate your value, and why customers should choose you over competitors. When brand strategy comes first, businesses benefit from clear messaging and positioning, stronger customer trust, consistent visual identity, better user experience, higher conversion rates, improved SEO performance, and greater long-term marketing success. Without a strategy, website design becomes a guessing game rather than a growth-focused business asset.",
  },
  {
    heading: "Why Brand Strategy Matters Before Website Design",
    body: "Most businesses start a new website project by discussing colors, layouts, animations, and design inspiration. While these elements are important, they are not where successful websites begin. The strongest websites are built on a clear brand strategy long before a designer creates the first homepage mockup. A website is not simply a digital brochure. It is often the first interaction a potential customer has with a business. Visitors make decisions within seconds based on what they see, read, and feel. If a company lacks a defined brand strategy, even the most visually impressive website can struggle to generate leads, build trust, or convert visitors into customers. At Nova Techscience, we have seen businesses invest significant budgets into website redesigns only to discover that the underlying problem was not the design itself. The real issue was unclear positioning, inconsistent messaging, and a lack of brand direction. A beautiful website without a clear strategy is like building a luxury showroom without knowing what products you want to sell.",
  },
  {
    heading: "What Is Brand Strategy?",
    body: "Brand strategy is the blueprint that guides how a business presents itself to the market. It goes far beyond logos and color palettes. A strong brand strategy answers critical questions such as: Who are we? What do we stand for? Who is our ideal customer? What problems do we solve? Why should customers trust us? What makes us different from competitors? How should our brand be perceived? Before any website design begins, these questions need clear answers.",
  },
  {
    heading: "Your Website Is A Reflection Of Your Brand",
    body: "Many businesses mistakenly believe that a website creates a brand. In reality, the brand should shape the website. The website should communicate your mission, your expertise, your value proposition, your personality, and your customer promise. When visitors arrive on your website, they should immediately understand who you are and how you can help them. A website without a defined brand often feels generic, confusing, and forgettable.",
  },
  {
    heading: "Why Brand Strategy Improves Website Performance",
    body: "A strategically built website does more than look attractive. It performs better because every element serves a purpose. Clear messaging creates clarity. Visitors do not want to spend time figuring out what a business does. A strong brand strategy helps create stronger headlines, clearer service descriptions, better calls-to-action, and more persuasive content. Better positioning helps you stand out. Every industry is crowded with competitors offering similar services. Brand strategy helps identify unique selling points, competitive advantages, market opportunities, and customer pain points. This differentiation becomes a powerful part of website design and content creation. Consistent branding builds trust. Trust is one of the most important factors influencing online conversions. Consistent branding across your website creates professionalism, credibility, recognition, and customer confidence.",
  },
  {
    heading: "How Brand Strategy Impacts SEO",
    body: "Many business owners do not realize that brand strategy directly influences SEO performance. Search engines increasingly prioritize expertise, authority, trustworthiness, user satisfaction, and brand recognition. A well-defined brand helps create content that resonates with users and search engines alike. SEO benefits of brand strategy include stronger keyword targeting, better content creation, improved topical authority, increased engagement metrics, higher click-through rates, and greater backlink opportunities. Brand clarity makes SEO significantly more effective.",
  },
  {
    heading: "Why Brand Strategy Matters For GEO And AI Search",
    body: "The rise of AI-powered search platforms is changing how businesses attract visibility online. Platforms such as ChatGPT, Google AI Overviews, Perplexity, Gemini, Claude, and Microsoft Copilot are increasingly recommending brands that demonstrate expertise, consistency, and authority. Brand strategy helps businesses build strong digital entities, consistent online mentions, authoritative content, and recognizable brand signals. This is a critical component of modern Generative Engine Optimization (GEO).",
  },
  {
    heading: "The Website Design Mistakes Businesses Make Without A Brand Strategy",
    body: "Many website projects fail because businesses jump directly into design. Common mistakes include focusing only on visual appearance, copying competitors, inconsistent messaging, weak calls-to-action, and frequent redesigns. A visually attractive website does not guarantee conversions. Businesses often imitate competitors instead of developing their own identity. Different pages communicate different messages, creating confusion. Without clear positioning, CTAs become generic and ineffective. Businesses often redesign websites repeatedly because the underlying strategy was never defined.",
  },
  {
    heading: "Key Elements Of A Brand Strategy Before Website Design",
    body: "Before hiring a web designer or agency, businesses should establish several foundational elements. Target Audience Definition: understand demographics, pain points, buying behaviors, and decision-making factors. The better you understand your audience, the more effective your website becomes. Brand Positioning: define what makes you unique, who you serve, and why customers should choose you. Brand Voice And Messaging: determine how your brand speaks, the language you use, and the emotions you want to create. Visual Identity Guidelines: establish logo usage, color palette, typography, imagery style, and graphic elements. These guidelines create a cohesive user experience.",
  },
  {
    heading: "Brand Strategy And Conversion Optimization",
    body: "A strategically designed website is built to guide visitors toward action. When brand strategy is established first, businesses can create strong value propositions, persuasive content, clear conversion paths, relevant trust signals, and targeted landing pages. The result is higher conversion rates and stronger return on investment.",
  },
  {
    heading: "A Brand-First Website Process",
    body: "At Nova Techscience, we recommend a brand-first approach to website development. Step 1: Brand Discovery to understand business goals, audience, and market opportunities. Step 2: Positioning Strategy to define unique value propositions and competitive differentiation. Step 3: Messaging Development to create core messaging frameworks and content direction. Step 4: Visual Identity Planning to establish branding guidelines and design direction. Step 5: Website Architecture to plan user journeys and content structure. Step 6: Website Design And Development to build a website that reflects the strategy established in earlier phases. This process creates a stronger foundation for long-term growth.",
  },
  {
    heading: "The Long-Term Business Impact Of Brand Strategy",
    body: "Businesses that prioritize brand strategy before website design often experience higher customer trust, improved conversion rates, better lead quality, stronger SEO performance, enhanced GEO visibility, more effective marketing campaigns, greater brand recognition, and increased customer loyalty. Instead of continuously redesigning websites, they build digital assets that support sustainable business growth.",
  },
  {
    heading: "Conclusion",
    body: "Website design should never be the starting point of a digital growth strategy. The most successful websites are built on a foundation of clear brand positioning, consistent messaging, audience understanding, and long-term business goals. A strong brand strategy transforms a website from a simple online presence into a powerful business tool that attracts visitors, builds trust, generates leads, and supports growth across search engines, AI platforms, and digital marketing channels. Before investing in a new website, invest in understanding your brand. The design will be stronger, the messaging will be clearer, and the results will be significantly better. At Nova Techscience, we believe that great websites do not start with design. They start with strategy.",
  },
];

const faqItems = [
  {
    q: "Why should brand strategy come before website design?",
    a: "Brand strategy should come before website design because it defines your positioning, messaging, audience, and business goals. A website built without a clear strategy may look attractive but struggle to communicate value or generate conversions. Strategy ensures every design decision supports long-term business growth and customer engagement.",
  },
  {
    q: "Can a website succeed without a brand strategy?",
    a: "A website can function without a brand strategy, but it is unlikely to perform at its full potential. Without clear positioning and messaging, businesses often face low conversion rates, inconsistent communication, and weaker customer trust. Brand strategy provides the foundation that helps websites become effective marketing and sales tools.",
  },
  {
    q: "How does brand strategy improve website conversions?",
    a: "Brand strategy improves website conversions by creating clarity around who you serve, what problems you solve, and why customers should choose your business. When visitors immediately understand your value proposition, they are more likely to trust your brand, engage with your content, and take action.",
  },
  {
    q: "What is the difference between branding and website design?",
    a: "Branding focuses on strategy, positioning, messaging, identity, and customer perception, while website design focuses on presenting that brand digitally. Branding determines what your business stands for, and website design communicates that message visually. Effective websites are built upon strong branding rather than design trends alone.",
  },
  {
    q: "How does brand strategy support SEO performance?",
    a: "Brand strategy strengthens SEO by helping businesses create focused content, establish topical authority, and communicate expertise consistently. Search engines increasingly reward brands that demonstrate trust, relevance, and authority. A clear strategy makes keyword targeting, content marketing, and user engagement more effective over time.",
  },
  {
    q: "Does brand strategy help businesses appear in AI search results?",
    a: "Yes. Brand strategy helps businesses establish consistent brand signals, authoritative content, and recognizable expertise across digital channels. AI-powered search platforms such as ChatGPT, Google AI Overviews, Gemini, and Perplexity often favor brands that demonstrate authority, consistency, and trustworthiness within their industry.",
  },
  {
    q: "What are the key elements of a successful brand strategy?",
    a: "A successful brand strategy typically includes audience research, brand positioning, value proposition development, messaging frameworks, competitive differentiation, visual identity guidelines, and customer experience planning. Together, these elements create a consistent and memorable brand that supports marketing, sales, and website performance.",
  },
  {
    q: "How does brand strategy influence website content?",
    a: "Brand strategy provides the direction for website content by defining tone of voice, key messages, customer pain points, and business objectives. This ensures that every page communicates a consistent message and helps visitors understand the value of your products or services more effectively.",
  },
  {
    q: "When should a business invest in brand strategy?",
    a: "Businesses should invest in brand strategy before launching a new website, entering a new market, rebranding, or scaling marketing efforts. Establishing a strategic foundation early helps avoid costly redesigns, improves marketing effectiveness, and creates a stronger customer experience across all channels.",
  },
  {
    q: "Why do many website redesign projects fail?",
    a: "Many website redesigns fail because businesses focus on visual improvements without addressing deeper branding issues. If positioning, messaging, and audience understanding remain unclear, a new design alone rarely improves results. Successful redesigns start with strategy and then translate that strategy into the website experience.",
  },
  {
    q: "How does brand strategy improve customer trust online?",
    a: "Brand strategy creates consistency across messaging, design, and customer experiences. When customers encounter a clear and professional brand, they are more likely to perceive the business as credible and reliable. Consistent branding helps build trust, which directly impacts engagement, inquiries, and purchasing decisions.",
  },
  {
    q: "What business benefits come from aligning brand strategy and website design?",
    a: "Aligning brand strategy and website design creates a stronger digital presence, higher conversion rates, improved customer trust, better SEO performance, and more effective marketing campaigns. Businesses benefit from a cohesive experience that supports long-term growth rather than relying solely on visual appeal.",
  },
];

const heroPoints = [
  {
    title: "Clear Positioning",
    text: "Strategy defines what makes your business different before design decisions start.",
    Icon: Compass,
  },
  {
    title: "Stronger Messaging",
    text: "Your website content becomes clearer, more persuasive, and easier to trust.",
    Icon: MessageSquareText,
  },
  {
    title: "Better Long-Term Growth",
    text: "SEO, GEO, conversion paths, and customer trust improve when the brand is well defined.",
    Icon: Target,
  },
];

const strategyCards = [
  {
    title: "Target Audience Definition",
    text: "Understand demographics, pain points, buying behavior, and decision-making factors.",
    Icon: Target,
  },
  {
    title: "Brand Positioning",
    text: "Define what makes your business unique and why customers should choose you.",
    Icon: Compass,
  },
  {
    title: "Brand Voice And Messaging",
    text: "Create a consistent language system for headlines, service descriptions, and content.",
    Icon: MessageSquareText,
  },
  {
    title: "Visual Identity Guidelines",
    text: "Establish logo rules, colors, typography, imagery, and graphic direction.",
    Icon: Palette,
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

export default function WhyBrandStrategyMattersBeforeWebsiteDesign() {
  const [openFaq, setOpenFaq] = useState(0);
  const relatedBlogs = getRelatedBlogArticles(
    "why-brand-strategy-matters-before-design"
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
              <Layers3 className="h-4 w-4 text-[#7392FB]" />
              Brand Strategy + Website Direction
            </div>

            <h1 className="mt-6 max-w-5xl text-[38px] font-semibold uppercase leading-[0.92] tracking-tight text-[#0d2d47] sm:text-6xl md:text-[78px]">
              Why Brand Strategy Matters Before Website Design
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#263b52] md:text-lg">
              Discover why brand strategy should come before website design and how it improves conversions, SEO, user experience, and long-term business growth.
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
              Why Strategy Comes First
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
            Quick Answer: Why Should Brand Strategy Come Before Website Design?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#40536a] md:text-lg">
            <BlogInlineLinkText currentPath="/blog/why-brand-strategy-matters-before-design">
              {articleSections[0].body}
            </BlogInlineLinkText>
          </p>
        </div>
      </section>

     

      <section id="article" className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            eyebrow="Complete Article"
            title="Why Strong Websites Start With Brand Strategy"
          />

          <div className="space-y-5">
            {articleSections.slice(1, 8).map((section, index) => (
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
                  <BlogInlineLinkText currentPath="/blog/why-brand-strategy-matters-before-design">
                    {section.body}
                  </BlogInlineLinkText>
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            eyebrow="Core Foundations"
            title="Key Elements Of A Brand Strategy Before Website Design"
            text={articleSections[8].body}
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {strategyCards.map(({ title, text, Icon }, index) => (
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
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-3">
          {[articleSections[9], articleSections[10], articleSections[11]].map((section, index) => (
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
                <BlogInlineLinkText currentPath="/blog/why-brand-strategy-matters-before-design">
                  {section.body}
                </BlogInlineLinkText>
              </p>
            </motion.article>
          ))}
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
            Ready To Start With Brand Strategy?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/88 md:text-lg">
            Nova Techscience helps businesses define positioning, messaging, and brand direction before turning strategy into stronger website experiences.
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
