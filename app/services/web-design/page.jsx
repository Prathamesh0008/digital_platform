// app/services/web-design/page.jsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaMobileAlt,
  FaPalette,
  FaSearch,
  FaRocket,
  FaEdit,
  FaShoppingCart,
  FaSitemap,
  FaCode,
  FaVial,
  FaHeadset,
} from "react-icons/fa";

const features = [
  { icon: FaMobileAlt, title: "Responsive website design" },
  { icon: FaPalette, title: "Custom UI/UX design" },
  { icon: FaSearch, title: "SEO-friendly structure" },
  { icon: FaRocket, title: "Fast loading performance" },
  { icon: FaEdit, title: "CMS-ready architecture" },
  { icon: FaShoppingCart, title: "Conversion-focused layouts" },
];

const websiteTypes = [
  {
    title: "Static Websites",
    text: "Clean, fast, and secure websites for companies that need a professional online presence with low maintenance.",
  },
  {
    title: "Dynamic Websites",
    text: "Flexible websites with editable content, interactive sections, and scalable features for growing businesses.",
  },
  {
    title: "CMS Websites",
    text: "Easy-to-manage websites built so your team can update content, blogs, pages, and media without technical stress.",
  },
  {
    title: "E-Commerce Websites",
    text: "Modern online stores designed for product visibility, smooth checkout, and better customer experience.",
  },
];

const process = [
  { icon: FaSitemap, title: "Discovery & Planning" },
  { icon: FaPalette, title: "UI/UX Wireframe" },
  { icon: FaCode, title: "Website Design" },
  { icon: FaRocket, title: "Development" },
  { icon: FaVial, title: "Testing & Optimization" },
  { icon: FaHeadset, title: "Launch & Support" },
];

const contentSections = [
  {
    title: "What Makes Website Design the Most Critical Investment for Your Business in 2026?",
    paragraphs: [
      "Every second your website takes to load, every confusing menu item, and every broken link is not just a technical glitch—it is a lost customer.",
      "In the modern digital landscape, your website is your headquarters, your salesperson, and your reputation all rolled into one.",
      "Simply having a digital presence is not enough. You need strategic website design that speaks directly to human emotions and answers machine algorithms at the same time.",
      "Website design has evolved from an aesthetic choice into a business survival tactic because it directly impacts trust, conversion, visibility, and long-term revenue.",
    ],
  },
  {
    title: "Why Traditional Web Design Fails the Modern Search Engine",
    paragraphs: [
      "Generative Engine Optimization is the new rulebook. Unlike traditional SEO that focused on ten blue links, GEO optimizes your content for AI models like Google SGE, ChatGPT, and Bing Copilot.",
      "These engines do not just list your site; they summarize it. If your website design lacks structured clarity, AI may ignore your data and pull answers from a competitor.",
      "A poor website design confuses AI crawlers. When generative AI tries to understand your business, it looks for logical hierarchies, accessible content, and clear answers.",
      "To win in generative search, your website design must embrace answer architecture, where every page directly answers a specific and obvious question.",
    ],
  },
  {
    title: "How Does Answer Engine Optimization Change Your Design Priorities?",
    paragraphs: [
      "Answer Engine Optimization shifts focus from keywords to context. When a user asks a voice assistant a question, the engine looks for schema markup, loading speed, and local signals.",
      "Your website design must be built with AEO protocols from the ground up.",
      "Every element of your website design must serve a declarative purpose. This means FAQ schema, How-To schema, Product schema, conversational headers, and direct answers above the fold.",
      "If the answer is hidden in a PDF or image, answer engines cannot read it, and you lose the voice search opportunity.",
    ],
  },
  {
    title: "What Are the Non-Negotiable Elements of High-Performing Website Design?",
    paragraphs: [
      "Effective website design is a blend of art and engineering. A high-performing layout must be fast, accessible, structured, responsive, conversion-focused, and easy for search engines to understand.",
    ],
    subsections: [
      {
        title: "Mobile-First Indexing",
        text: "Google primarily uses the mobile version of your content for indexing and ranking. Your website must work perfectly on phones, tablets, laptops, and desktops.",
      },
      {
        title: "Core Web Vitals Compliance",
        text: "Your website design must perform well on loading speed, responsiveness, and visual stability to support better search performance and user experience.",
      },
      {
        title: "Intuitive Information Architecture",
        text: "Users should understand where they are and what to do next within seconds. Clear navigation improves both conversion and crawlability.",
      },
      {
        title: "High-Contrast Visual Hierarchy",
        text: "Good design uses size, spacing, colour, and whitespace to guide users toward the most important actions.",
      },
      {
        title: "Schema Markup Integration",
        text: "Schema helps answer engines understand your services, FAQs, address, business hours, reviews, and products.",
      },
      {
        title: "Fast Hosting and Light Code",
        text: "Modern website design should use lightweight code, optimized images, lazy loading, and fast hosting to reduce load time.",
      },
      {
        title: "Accessibility",
        text: "Accessible websites include alt text, ARIA labels, keyboard navigation, readable contrast, and logical tab order.",
      },
      {
        title: "Clear Value Proposition",
        text: "Your hero section must instantly answer what you offer and why users should trust you.",
      },
      {
        title: "Social Proof Integration",
        text: "Testimonials, case studies, trust badges, client logos, and reviews increase credibility near conversion points.",
      },
      {
        title: "Analytics and Heatmap Ready",
        text: "Your website should be ready for GA4, Microsoft Clarity, Hotjar, event tracking, and user behaviour analysis.",
      },
    ],
  },
  {
    title: "Why Does Your Business Need Professional Website Design Over DIY Builders?",
    paragraphs: [
      "DIY builders may look affordable, but they often create bloated code, slow page speed, limited customization, and poor schema control.",
      "Professional website design gives your business scalability, technical strength, better SEO structure, stronger UX, and a more unique brand experience.",
      "A custom-coded solution allows unique functionality that generic templates cannot provide.",
      "Professional website design also includes strategic copywriting, conversion planning, responsive structure, security monitoring, and long-term optimization.",
    ],
  },
  {
    title: "How to Implement an AEO-Ready Website Design Strategy",
    paragraphs: [
      "A future-proof website design requires a clear workflow. You cannot jump directly into visuals without understanding user intent, search behaviour, structure, and technical requirements.",
    ],
    subsections: [
      {
        title: "Step 1: Query Research",
        text: "Analyze Google People Also Ask questions and identify the exact queries your website must answer.",
      },
      {
        title: "Step 2: Conversational Information Architecture",
        text: "Structure your sitemap using question-based headers and user-friendly navigation.",
      },
      {
        title: "Step 3: Wireframing for Answers",
        text: "Place the answer to the primary query in a clear position near the top of the page.",
      },
      {
        title: "Step 4: Technical Foundation",
        text: "Set up strong hosting, CDN, security, and performance foundations before design begins.",
      },
      {
        title: "Step 5: Accessibility-Focused Visual Design",
        text: "Use readable contrast, keyboard-friendly structure, and layouts that work for all users.",
      },
      {
        title: "Step 6: Development and Schema Tagging",
        text: "Add JSON-LD schema for local business, services, FAQs, products, articles, and reviews.",
      },
      {
        title: "Step 7: Content Injection",
        text: "Write SEO, AEO, and NLP-friendly content that sounds natural and answers real user questions.",
      },
      {
        title: "Step 8: Testing and Live Monitoring",
        text: "Test the site across browsers, devices, performance tools, accessibility tools, and Google Search Console.",
      },
    ],
  },
  {
    title: "What Are the Hidden Costs of Poor Website Design?",
    paragraphs: [
      "A poor website design does not only cost the amount spent on building it. It also causes lost leads, wasted ad spend, poor trust, low conversion rates, and higher support costs.",
      "If users leave within a few seconds, your paid traffic becomes wasted budget.",
      "Confusing website design also increases support tickets because users cannot find key information like pricing, contact details, return policies, or login options.",
      "Bad design damages brand perception. If your site looks outdated, users may assume your services or products are outdated too.",
    ],
  },
  {
    title: "How Often Should You Redesign Your Website Design?",
    paragraphs: [
      "The shelf life of a modern website design is usually 18 to 24 months because user expectations, search algorithms, design trends, and technology change quickly.",
      "A partial refresh can be done every 12 months, while a full redesign every two years helps your brand stay competitive.",
    ],
    listTitle: "You should consider a redesign when:",
    list: [
      "Your conversion rate drops for several months",
      "Your website is not mobile-friendly",
      "Your business model has changed",
      "Your load time exceeds 3 seconds",
      "Your design feels outdated",
      "Your site does not support AI search or voice search",
    ],
  },
  {
    title: "Why Local Businesses Need Hyper-Specific Website Design",
    paragraphs: [
      "Local businesses need more than generic website design. They need local schema, Google Business Profile integration, service area pages, local testimonials, and NAP consistency.",
      "If a user asks for a service near them, your website must clearly show location relevance.",
      "Hyper-local website design includes embedded maps, city-specific landing pages, localized trust signals, and clear contact information.",
    ],
  },
  {
    title: "The Future of Website Design: AI and Human Collaboration",
    paragraphs: [
      "The future of website design is not human versus machine. It is human plus machine.",
      "AI tools can speed up wireframing, content ideation, layout testing, and design variations, but human strategy is still needed to understand emotion, trust, positioning, and buyer psychology.",
      "The winning website design approach uses AI to handle repetitive work and human strategists to handle conversion, messaging, and user empathy.",
      "Voice commerce and conversational checkout are also rising, so future websites must support simpler forms, voice-friendly content, and faster decision paths.",
    ],
  },
  {
    title: "Conclusion: Why Waiting to Improve Your Website Design Costs You Money",
    paragraphs: [
      "Every day you delay professional website design, you risk sending customers to competitors with faster load times, clearer navigation, stronger mobile experiences, and better conversion systems.",
      "The cost of website design is not just an expense. It is a revenue generator when built correctly.",
      "A strategic website design builds trust, supports SEO and GEO, answers customer questions, works 24/7, and turns visitors into loyal customers.",
      "Whether you need to fix a broken layout, optimize for voice search, or completely rebrand, the right time to improve your website is now.",
    ],
  },
];

const faqs = [
  {
    question: "How long does a professional website design project take?",
    answer:
      "A typical website design project takes 6 to 12 weeks. A basic brochure site may take around 4 weeks, while larger e-commerce or custom platforms can take longer depending on features, content, and feedback rounds.",
  },
  {
    question: "What is the average cost of website design for a small business?",
    answer:
      "Website design cost depends on page count, custom features, copywriting, animations, CMS setup, and e-commerce requirements. Small business websites usually cost less than complex custom or online store platforms.",
  },
  {
    question: "Can I update my website design myself after it launches?",
    answer:
      "Yes. A professional website can include a CMS so your team can edit text, images, blogs, and pages without coding knowledge.",
  },
  {
    question: "Does website design affect Google rankings?",
    answer:
      "Yes. Website design affects rankings through mobile responsiveness, page speed, content structure, crawlability, bounce rate, schema, and user experience.",
  },
  {
    question: "What is responsive website design?",
    answer:
      "Responsive website design means your website automatically adjusts to phones, tablets, laptops, desktops, and different screen sizes without needing a separate mobile version.",
  },
  {
    question: "Do I need custom website design or a template?",
    answer:
      "Custom website design is better for unique brands, scalability, custom features, and stronger differentiation. Templates are cheaper but can limit flexibility and make brands look generic.",
  },
  {
    question: "How often should I refresh my website design?",
    answer:
      "A website should usually be refreshed every 18 to 24 months. Smaller updates like blogs, images, and content improvements should happen more regularly.",
  },
  {
    question: "Will you write the content for my website design?",
    answer:
      "Website content can be added as part of the project. Strong copywriting is important because design arranges the message, but words help drive conversions.",
  },
  {
    question: "What information do I need before website design starts?",
    answer:
      "You should provide your logo, brand colours, competitor examples, favourite website references, photos, text content, hosting access, and any feature requirements.",
  },
  {
    question: "Do you offer maintenance after the website design is complete?",
    answer:
      "Yes. Maintenance can include backups, updates, uptime monitoring, bug fixes, security checks, performance optimization, and content support.",
  },
];

function WebsitePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 35 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="rounded-[30px] border border-white/35 bg-white/20 p-3 shadow-[0_24px_80px_rgba(13,45,71,0.2)] backdrop-blur-md"
    >
      <div className="overflow-hidden rounded-[24px] border border-white/40 bg-white/30">
        <div className="flex items-center gap-2 border-b border-[#0d2d47]/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#0d2d47]/35" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#0d2d47]/22" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#0d2d47]/14" />
          <span className="ml-auto text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0d2d47]/50">
            Website Preview
          </span>
        </div>

        <div className="p-5">
          <motion.div
            initial={{ width: "45%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mb-4 h-36 rounded-[24px] bg-[#0d2d47]"
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item * 0.12 }}
                className="h-24 rounded-2xl bg-white/45"
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 h-20 rounded-2xl bg-white/45"
          />
        </div>
      </div>
    </motion.div>
  );
}

function CompactList({ items }) {
  if (!items?.length) return null;

  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-[#0d2d47]/10 bg-[#EAEBDB]/80 px-4 py-3 text-[15px] font-semibold leading-relaxed text-[#0d2d47]/80"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function MiniCards({ items }) {
  if (!items?.length) return null;

  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <motion.div
          key={item.title}
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-[#0d2d47]/10 bg-[#EAEBDB]/75 p-4"
        >
          <h3 className="text-base font-bold uppercase text-[#0d2d47]">
            {item.title}
          </h3>
          <p className="mt-2 text-[15px] leading-7 text-[#0d2d47]/72">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

function ContentArticle({ section, index, open, setOpen }) {
  const isOpen = open === index;

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-[26px] border border-[#0d2d47]/10 bg-white/60 shadow-[0_18px_55px_rgba(13,45,71,0.08)] backdrop-blur-md"
    >
      <button
        type="button"
        onClick={() => setOpen(isOpen ? -1 : index)}
        className="flex w-full cursor-pointer items-start justify-between gap-5 px-5 py-5 text-left transition hover:bg-white/45 sm:px-7 sm:py-6"
      >
        <div className="flex gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0d2d47] text-sm font-bold text-white">
            {(index + 1).toString().padStart(2, "0")}
          </span>

          <h2 className="text-xl font-bold uppercase leading-tight text-[#0d2d47] sm:text-2xl lg:text-[27px]">
            {section.title}
          </h2>
        </div>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7392FB] text-2xl font-light text-white"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="border-t border-[#0d2d47]/10 px-5 pb-6 pt-5 sm:px-7">
              <div className="space-y-4">
                {section.paragraphs?.map((text) => (
                  <p
                    key={text}
                    className="text-base leading-8 text-[#0d2d47]/78 sm:text-[17px]"
                  >
                    {text}
                  </p>
                ))}
              </div>

              {section.listTitle && (
                <h3 className="mt-6 text-base font-bold uppercase tracking-[0.08em] text-[#0d2d47]">
                  {section.listTitle}
                </h3>
              )}

              <CompactList items={section.list} />
              <MiniCards items={section.subsections} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function ContentDropdownList() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-4">
      {contentSections.map((section, index) => (
        <ContentArticle
          key={`${section.title}-${index}`}
          section={section}
          index={index}
          open={open}
          setOpen={setOpen}
        />
      ))}
    </div>
  );
}

function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section className="px-4 py-14 sm:px-6 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-8">
          {/* <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#7392FB]">
            Most Askable FAQs
          </p> */}
          <h2 className="text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
            Website Design FAQs
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-[#0d2d47]/10 bg-white/55"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/45"
                >
                  <span className="text-base font-bold uppercase text-[#0d2d47] md:text-lg">
                    {item.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0d2d47] text-xl text-white"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-5 pb-5 text-base leading-8 text-[#0d2d47]/72">
                        {item.answer}
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
  );
}

export default function WebDesignPage() {
  return (
    <main className="min-h-screen bg-[#EAEBDB] text-[#0d2d47]">
      {/* HERO */}
      <section
        className="relative overflow-hidden px-4 pb-14 pt-36 sm:px-6 sm:pt-40 md:px-10 md:pb-20 md:pt-44 lg:pt-48"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 38%, #8EA5F1 72%, #6887FB 100%)",
        }}
      >
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-[#0d2d47]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1180px] items-center gap-9 lg:grid-cols-[1fr_0.86fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {/* <p className="mb-5 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] backdrop-blur-md">
              Web Design & Development
            </p> */}

            <h1 className="max-w-4xl text-[42px] font-bold uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-[92px]">
              Websites That Look Premium And Convert
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#0d2d47]/75 md:text-lg">
              We design and develop responsive, fast, SEO-ready and AEO-friendly
              websites that help brands build trust, improve visibility, and
              generate real business growth.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
              >
                Start Your Website
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex justify-center rounded-full border border-[#0d2d47]/25 bg-white/25 px-7 py-3 text-sm font-semibold text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

          <WebsitePreview />
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            {/* <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#7392FB]">
              Why It Matters
            </p> */}

            <h2 className="text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
              Your Website Is Your Digital First Impression
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.035 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-[#0d2d47]/10 bg-white/40 p-4 shadow-[0_14px_40px_rgba(13,45,71,0.07)] backdrop-blur-md"
              >
                {/* <p className="mb-3 text-sm font-bold text-[#7392FB]">
                  {(i + 1).toString().padStart(2, "0")}
                </p> */}
        {(() => {
  const Icon = item.icon;
  return <Icon className="mb-3 text-2xl text-[#7392FB]" />;
})()}

<h3 className="text-base font-bold uppercase">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WEBSITE TYPES */}
      <section
        className="px-4 py-12 sm:px-6 md:px-10 md:py-16"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 48%, #8EA5F1 100%)",
        }}
      >
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 max-w-4xl">
            {/* <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#0d2d47]/65">
              Website Solutions
            </p> */}

            <h2 className="text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
              Websites Built For Every Business Stage
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {websiteTypes.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="rounded-[24px] border border-white/35 bg-white/30 p-5 shadow-[0_18px_50px_rgba(13,45,71,0.1)] backdrop-blur-md"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#0d2d47] text-sm font-bold text-white">
                  0{i + 1}
                </span>

                <h3 className="text-xl font-bold uppercase">{item.title}</h3>

                <p className="mt-3 text-base leading-8 text-[#0d2d47]/72">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8">
            {/* <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#7392FB]">
              Our Process
            </p> */}

            <h2 className="text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
             Our Process From Idea To Launch
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {process.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl border border-[#0d2d47]/10 bg-[#B6C4E7] p-4"
              >
                {/* <p className="text-3xl font-bold text-[#0d2d47]/20">
                  {(i + 1).toString().padStart(2, "0")}
                </p> */}
             <h3 className="mt-4 text-sm font-bold uppercase">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL CONTENT */}
      <section className="relative overflow-hidden px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#7392FB]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-40 h-80 w-80 rounded-full bg-white/45 blur-3xl" />

        <div className="relative mx-auto max-w-[1180px]">
          <div className="mb-10 max-w-4xl">
            {/* <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#7392FB]">
              Complete Website Design Strategy
            </p> */}

            <h2 className="text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
              Explore Our Full Web Design Growth Framework
            </h2>

            <p className="mt-4 text-base leading-8 text-[#0d2d47]/75 sm:text-lg">
              Open each section to read the complete website design, GEO, AEO,
              UX, conversion, performance, accessibility, and future-ready
              strategy.
            </p>
          </div>

          <ContentDropdownList />
        </div>
      </section>

      <FAQAccordion />

      {/* CTA */}
      <section className="bg-[#6887FB] px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[1180px] rounded-[26px] border border-white/35 bg-white/20 p-6 text-center shadow-[0_22px_70px_rgba(13,45,71,0.18)] backdrop-blur-md md:p-10"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#0d2d47]/55">
            Build A Better Website
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
            Let&apos;s Create A Website That Works For Your Brand
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#0d2d47]/75">
            Get a clean, responsive, SEO-ready website designed to support
            visibility, trust, AI search presence, and conversion.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
            >
              Start Your Website
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-[#0d2d47]/20 bg-white/25 px-7 py-3 text-sm font-semibold text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}