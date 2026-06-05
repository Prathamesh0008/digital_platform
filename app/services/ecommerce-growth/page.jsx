"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import ServiceInternalLinkText from "@/components/ServiceInternalLinkText";
import {
  FaStore,
  FaChartLine,
  FaShoppingCart,
  FaUndo,
  FaEnvelopeOpenText,
  FaChartBar,
  FaCode,
  FaWordpress,
  FaSearch,
  FaMobileAlt,
  FaRobot,
  FaRocket,
  FaMapSigns,
  FaWrench,
  FaBullhorn,
} from "react-icons/fa";

const growthStats = [
  { value: "+42%", label: "Conversion Improvement" },
  { value: "3.4x", label: "Return On Ad Spend" },
  { value: "+68%", label: "Cart Recovery Growth" },
];

const growthAreas = [
  { icon: FaStore, title: "Store Audit" },
  { icon: FaChartLine, title: "Conversion Strategy" },
  { icon: FaShoppingCart, title: "Product Page Optimization" },
  { icon: FaWrench, title: "Cart Flow Improvement" },
  { icon: FaUndo, title: "Retention Campaigns" },
  { icon: FaRocket, title: "Upsell & Cross-Sell" },
  { icon: FaEnvelopeOpenText, title: "Email Automation" },
  { icon: FaChartBar, title: "Performance Tracking" },
];

const services = [
  {
    icon: FaCode,
    title: "Custom E-Commerce Website Development",
    text: "Secure, scalable, SEO-friendly online stores built around your business goals, product structure, and customer journey.",
  },
  {
    icon: FaWordpress,
    title: "Shopify, WooCommerce & Magento",
    text: "Modern platform-based e-commerce stores with custom themes, payment setup, performance optimization, and product management.",
  },
  {
    icon: FaSearch,
    title: "E-Commerce SEO & GEO",
    text: "Product visibility, search rankings, structured content, local targeting, AI search readiness, and voice-friendly optimization.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Commerce Solutions",
    text: "Responsive shopping experiences, mobile apps, progressive web apps, wallets, push notifications, and mobile-first checkout.",
  },
  {
    icon: FaRobot,
    title: "AI-Powered Commerce",
    text: "Chatbots, recommendations, predictive analytics, customer behaviour tracking, fraud detection, and personalization.",
  },
  {
    icon: FaRocket,
    title: "Conversion & Retention Growth",
    text: "Product page optimization, checkout improvement, cart recovery, email automation, remarketing, loyalty, and analytics.",
  },
];

const process = [
  { icon: FaStore, title: "Audit Store" },
  { icon: FaMapSigns, title: "Map Funnel" },
  { icon: FaWrench, title: "Fix Friction" },
  { icon: FaSearch, title: "Optimize SEO" },
  { icon: FaBullhorn, title: "Launch Campaigns" },
  { icon: FaRocket, title: "Scale Revenue" },
];

const contentSections = [
  {
    title:
      "What Are E-Commerce Services and Why Are They Important for Online Business Growth?",
    paragraphs: [
      "Whether you are a startup, a small business, or an enterprise company, professional e-commerce services help businesses create scalable online stores, improve customer experience, increase online visibility, and drive higher sales globally.",
      "Nova Techscience provides advanced e-commerce services and e-commerce website solutions for businesses in the USA, UK, and global markets. Our expert team builds secure, fast, SEO-friendly, and conversion-focused e-commerce websites.",
      "E-commerce is no longer limited to selling products online. Today, businesses need complete e-commerce website development, SEO services, payment gateway integration, mobile commerce, cart optimization, inventory management, AI-driven marketing, and omnichannel commerce support.",
    ],
  },
  {
    title: "Why Do Businesses Need Professional E-Commerce Services?",
    paragraphs: [
      "Businesses need professional e-commerce services because modern online customers demand seamless digital experiences. A professionally developed e-commerce website improves brand trust, customer engagement, and sales opportunities.",
      "Many businesses fail online because they use outdated websites that do not meet current customer expectations. A slow or poorly designed e-commerce website can increase bounce rates and reduce sales.",
    ],
    listTitle: "Professional e-commerce services include:",
    list: [
      "Custom e-commerce website design",
      "Secure payment integration",
      "Mobile-friendly shopping experiences",
      "SEO optimization",
      "AI-powered customer support",
      "Conversion rate optimization",
    ],
  },
  {
    title: "How Does an E-Commerce Website Help Increase Online Sales?",
    paragraphs: [
      "An e-commerce website acts as a digital storefront available 24/7. Customers can browse products, compare prices, place orders, and make secure payments from anywhere.",
      "Nova Techscience develops conversion-focused e-commerce websites that help businesses generate more leads, improve customer retention, and maximize online revenue.",
    ],
    subsections: [
      {
        title: "Improving User Experience",
        text: "Easy navigation, product search, responsive design, and fast-loading pages improve customer satisfaction.",
      },
      {
        title: "Building Customer Trust",
        text: "Secure checkout systems, SSL certificates, customer reviews, and trusted payment methods increase buyer confidence.",
      },
      {
        title: "Increasing Conversion Rates",
        text: "Strategic product pages, optimized CTA buttons, AI personalization, and streamlined checkout improve sales.",
      },
    ],
  },
  {
    title: "What Types of E-Commerce Services Does Nova Techscience Offer?",
    paragraphs: [
      "Nova Techscience offers complete e-commerce services for startups, SMEs, enterprises, and global brands.",
    ],
    subsections: [
      {
        title: "Custom E-Commerce Website Development",
        text: "We create custom e-commerce websites tailored to business goals, audience, and industry requirements.",
      },
      {
        title: "Shopify Development Services",
        text: "Our Shopify experts develop modern stores with advanced themes, payment integrations, and SEO optimization.",
      },
      {
        title: "WooCommerce Development Services",
        text: "We build flexible WooCommerce websites with custom plugins, product systems, and responsive design.",
      },
      {
        title: "E-Commerce SEO Services",
        text: "Our e-commerce SEO services improve online visibility, organic rankings, and traffic generation.",
      },
      {
        title: "AI-Powered E-Commerce Solutions",
        text: "We integrate AI chatbots, personalized recommendations, predictive analytics, and customer behavior tracking.",
      },
    ],
  },
  {
    title: "How Does E-Commerce SEO Improve Online Visibility?",
    paragraphs: [
      "E-commerce SEO is one of the most important components of digital commerce success. Without SEO optimization, even the best e-commerce website may struggle to attract organic traffic.",
    ],
    listTitle: "E-commerce SEO improves:",
    list: [
      "Google rankings",
      "Product visibility",
      "Organic traffic",
      "Customer engagement",
      "Conversion rates",
      "Brand authority",
      "Search engine indexing",
      "Voice search optimization",
    ],
  },
];

const faqs = [
  {
    question: "How to start an e-commerce business?",
    answer:
      "To start an e-commerce business, choose a profitable niche, register your business, and build a professional e-commerce website. Set up secure payment gateways, plan your digital marketing strategy, and optimize your store with SEO services to drive organic traffic. Launch, analyze, and scale consistently.",
  },
  {
    question: "What is e-commerce business?",
    answer:
      "An e-commerce business is the buying and selling of products or services through an online store or website. It uses digital marketing, SEO, social media marketing, and paid advertising to attract customers, generate leads, and grow online sales while operating without geographic limitations.",
  },
  {
    question: "What are the types of e-commerce?",
    answer:
      "The main types of e-commerce are B2C, B2B, C2C, D2C, and B2G. Each model requires a tailored digital marketing strategy, SEO approach, and e-commerce website design to reach and convert the right audience.",
  },
  {
    question: "What is an e-commerce website?",
    answer:
      "An e-commerce website is an online platform where businesses list, promote, and sell products or services digitally. A well-designed e-commerce site includes fast page speed, mobile optimization, SEO-friendly structure, secure checkout, and conversion-focused UI/UX design.",
  },
  {
    question: "Which type of e-commerce is best?",
    answer:
      "The best e-commerce model depends on your goal. D2C offers high margins and brand control, while B2C suits mass-market selling. For long-term brand growth, D2C combined with SEO, performance marketing, and social media marketing delivers strong ROI and online visibility.",
  },
  {
    question: "What is the future of e-commerce?",
    answer:
      "The future of e-commerce is driven by AI personalization, voice search, AR shopping, and social commerce. Brands investing in AI-powered digital marketing, SEO optimization, video content, and omnichannel strategies will have stronger opportunities to grow.",
  },
  {
    question: "Who is the king of e-commerce?",
    answer:
      "Amazon is widely considered the king of global e-commerce because of its online retail market share, customer experience, logistics, personalization, and SEO dominance. In India, Flipkart also leads alongside Amazon in the e-commerce market.",
  },
  {
    question: "What are the top 10 e-commerce sites?",
    answer:
      "The top e-commerce websites globally include Amazon, Alibaba, eBay, Flipkart, Walmart, Shopify stores, JD.com, Rakuten, Etsy, and Meesho. These platforms perform well because of SEO, digital advertising, UI/UX design, and mobile optimization.",
  },
  {
    question: "How do I start my own e-commerce store?",
    answer:
      "Start your own e-commerce store by selecting a niche, building a Shopify or WooCommerce website, adding products with SEO-optimized descriptions, and integrating a payment gateway. Then launch digital marketing campaigns using Google Ads, social media, and email marketing.",
  },
  {
    question: "What are the 7 types of e-commerce?",
    answer:
      "The 7 types of e-commerce are B2C, B2B, C2C, C2B, D2C, B2G, and G2C. Each model needs a specific digital marketing strategy, SEO plan, website structure, content strategy, and paid campaign approach.",
  },
];

function Badge({ children, light = false }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-4 inline-flex rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] ${
        light
          ? "border border-white/25 bg-white/15 text-white"
          : "bg-[#0d2d47] text-white"
      }`}
    >
      {children}
    </motion.span>
  );
}

function FunnelVisual() {
  const rows = [
    ["Visitors", "100%", "24.8K"],
    ["Product Views", "82%", "18.4K"],
    ["Add To Cart", "58%", "7.9K"],
    ["Checkout", "42%", "4.1K"],
    ["Purchase", "31%", "2.7K"],
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 35 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative rounded-[28px] border border-white/45 bg-white/25 p-3 shadow-[0_25px_70px_rgba(13,45,71,0.18)] backdrop-blur-md"
    >
      <div className="rounded-[22px] bg-[#EAEBDB]/90 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0d2d47]/60">
              Growth Funnel
            </p>
            <p className="text-xs text-[#0d2d47]/55">Live optimization view</p>
          </div>

          <span className="rounded-full bg-[#0d2d47] px-3 py-1 text-xs font-medium text-white">
            Active
          </span>
        </div>

        <div className="space-y-3">
          {rows.map(([label, width, value], i) => (
            <div key={label}>
              <div className="mb-1 flex justify-between text-[11px] font-medium uppercase tracking-[0.12em] text-[#0d2d47]/60">
                <span>{label}</span>
                <span>{value}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-[#0d2d47]/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width }}
                  transition={{ duration: 1, delay: i * 0.12, ease: "easeOut" }}
                  className="h-full rounded-full bg-[#7392FB]"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          {growthStats.map((item) => (
            <div key={item.label} className="rounded-xl bg-white/60 p-3 text-center">
              <p className="text-xl font-semibold">{item.value}</p>
              <p className="mt-1 text-[9px] font-medium uppercase leading-snug tracking-[0.1em] text-[#0d2d47]/55">
                {item.label}
              </p>
            </div>
          ))}
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
          className="rounded-2xl border border-[#0d2d47]/10 bg-[#EAEBDB]/80 px-4 py-3 text-[15px] font-medium leading-relaxed text-[#0d2d47]/80"
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
    <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <motion.div
          key={item.title}
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-[#0d2d47]/10 bg-[#EAEBDB]/70 p-4"
        >
          <h3 className="text-sm font-semibold uppercase text-[#0d2d47]">
            <ServiceInternalLinkText currentHref="/services/ecommerce-growth">
              {item.title}
            </ServiceInternalLinkText>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#0d2d47]/70">
            <ServiceInternalLinkText currentHref="/services/ecommerce-growth">
              {item.text}
            </ServiceInternalLinkText>
          </p>
        </motion.div>
      ))}
    </div>
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

function ContentArticle({ section, index, open, setOpen }) {
  const isOpen = open === index;

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-[26px] border border-[#0d2d47]/10 bg-white/55 shadow-[0_18px_55px_rgba(13,45,71,0.08)] backdrop-blur-md"
    >
      <button
        type="button"
        onClick={() => setOpen(isOpen ? -1 : index)}
        className="flex w-full cursor-pointer items-start justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
      >
        <div className="flex gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0d2d47] text-sm font-medium text-white">
            {(index + 1).toString().padStart(2, "0")}
          </span>

          <h2 className="text-xl font-semibold uppercase leading-tight text-[#0d2d47] sm:text-2xl lg:text-[28px]">
            <ServiceInternalLinkText currentHref="/services/ecommerce-growth">
              {section.title}
            </ServiceInternalLinkText>
          </h2>
        </div>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
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
                  <p key={text} className="text-base leading-8 text-[#0d2d47]/78">
                    <ServiceInternalLinkText currentHref="/services/ecommerce-growth">
                      {text}
                    </ServiceInternalLinkText>
                  </p>
                ))}
              </div>

              {section.listTitle && (
                <h3 className="mt-6 text-base font-semibold uppercase tracking-[0.08em] text-[#0d2d47]">
                  <ServiceInternalLinkText currentHref="/services/ecommerce-growth">
                    {section.listTitle}
                  </ServiceInternalLinkText>
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

function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section className="px-4 py-14 sm:px-6 md:px-10 md:py-20">
      <div className="mx-auto max-w-[980px]">
        <div className="mb-10 text-center">
          {/* <Badge>FAQ + Voice AI Optimized</Badge> */}
          <h2 className="text-3xl font-semibold uppercase leading-tight sm:text-4xl md:text-5xl">
            E-Commerce FAQs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#0d2d47]/70 sm:text-base">
            Direct answers structured for users, search engines, AI Overviews,
            and voice search results.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-2xl border bg-white/50 shadow-[0_16px_45px_rgba(13,45,71,0.07)] backdrop-blur-md transition ${
                  isOpen ? "border-[#7392FB]/45" : "border-[#0d2d47]/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left cursor-pointer"
                >
                  <div className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#7392FB] text-xs font-medium text-white">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>

                    <span className="text-base font-semibold leading-snug text-[#0d2d47] md:text-lg">
                      <ServiceInternalLinkText currentHref="/services/ecommerce-growth">
                        {item.question}
                      </ServiceInternalLinkText>
                    </span>
                  </div>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0d2d47] text-lg text-white"
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
                      <div className="px-5 pb-5 sm:pl-[76px]">
                        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#7392FB]">
                          Voice-ready answer
                        </p>
                        <p className="text-sm leading-7 text-[#0d2d47]/72 sm:text-base">
                          <ServiceInternalLinkText currentHref="/services/ecommerce-growth">
                            {item.answer}
                          </ServiceInternalLinkText>
                        </p>
                      </div>
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

export default function EcommerceGrowthPage() {
  useScroll();
  useTransform(useScroll().scrollYProgress, [0, 0.35], [0, -55]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#EAEBDB] text-[#0d2d47]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
        className="relative overflow-hidden px-4 pb-14 pt-36 sm:px-6 sm:pt-40 md:px-10 md:pb-20 md:pt-44 lg:pt-48"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 38%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-[#7392FB]/35 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1180px] items-center gap-8 lg:grid-cols-[1fr_0.86fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <h1 className="max-w-4xl text-[42px] font-semibold uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[86px]">
              Turn Store Traffic Into Revenue
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
              Nova Techscience builds secure, fast, SEO-friendly, AI-ready and
              conversion-focused e-commerce websites for businesses in the USA,
              UK and global markets.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-[#0d2d47] px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-[#0d2d47]/90"
              >
                Grow My Store
              </Link>

              <Link
                href="/portfolio"
                className="rounded-full border border-[#0d2d47]/25 bg-white/25 px-6 py-3 text-center text-sm font-medium text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
              >
                View Work
              </Link>
            </div>
          </motion.div>

          <FunnelVisual />
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {growthAreas.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.035 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-[#0d2d47]/10 bg-white/45 p-5 shadow-[0_18px_45px_rgba(13,45,71,0.08)] backdrop-blur-md transition hover:bg-white/70"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7392FB]/15 text-xl text-[#7392FB] transition group-hover:bg-[#0d2d47] group-hover:text-white">
                    <Icon />
                  </div>

                  <h3 className="text-base font-semibold uppercase">
                    <ServiceInternalLinkText currentHref="/services/ecommerce-growth">
                      {item.title}
                    </ServiceInternalLinkText>
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="px-4 py-12 text-white sm:px-6 md:px-10 md:py-16"
        style={{
          background:
            "linear-gradient(135deg, #7392FB 0%, #243f78 52%, #0d2d47 100%)",
        }}
      >
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 grid gap-5 lg:grid-cols-[0.7fr_1fr] lg:items-end">
            <div>
              <h2 className="text-3xl font-semibold uppercase leading-tight sm:text-4xl md:text-5xl">
                Built For Conversion, Retention And Scale
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-white/75 md:text-base">
              E-commerce growth is not only traffic. We connect store
              development, customer retention, SEO, analytics, AI systems and
              campaigns into one revenue-focused system.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -7 }}
                  className="group rounded-[24px] border border-white/20 bg-white/12 p-6 shadow-[0_22px_65px_rgba(13,45,71,0.18)] backdrop-blur-md transition hover:bg-white/18"
                >
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-xl text-white ring-1 ring-white/20">
                    <Icon />
                  </span>

                  <h3 className="text-lg font-semibold uppercase">
                    <ServiceInternalLinkText currentHref="/services/ecommerce-growth">
                      {item.title}
                    </ServiceInternalLinkText>
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    <ServiceInternalLinkText currentHref="/services/ecommerce-growth">
                      {item.text}
                    </ServiceInternalLinkText>
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {process.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded-2xl border border-[#0d2d47]/10 bg-gradient-to-br from-[#B6C4E7] to-white/50 p-4 shadow-[0_14px_35px_rgba(13,45,71,0.08)]"
                >
                  <Icon className="text-2xl text-[#7392FB]" />
                  <h3 className="mt-3 text-sm font-semibold uppercase">
                   
                      {item.title}
                   
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="relative mx-auto max-w-[1180px]">
          <div className="mb-10 max-w-4xl">
            <h2 className="text-3xl font-semibold uppercase leading-tight sm:text-4xl md:text-5xl">
              Explore Our Full E-Commerce Growth Strategy
            </h2>

            <p className="mt-4 text-base leading-8 text-[#0d2d47]/75 sm:text-lg">
              Open each section to read the complete SEO, GEO, AEO and
              conversion-focused e-commerce content.
            </p>
          </div>

          <ContentDropdownList />
        </div>
      </section>

      <FAQAccordion />

      <section className="bg-[#6887FB] px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[1180px] rounded-[26px] border border-white/35 bg-white/20 p-6 text-center shadow-[0_22px_70px_rgba(13,45,71,0.18)] backdrop-blur-md md:p-10"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-[#0d2d47]/55">
            Scale Your Online Store
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-semibold uppercase leading-tight sm:text-4xl md:text-5xl">
            Let&apos;s Turn Your Store Into A Growth Engine
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
            Improve your conversion rate, customer retention, sales funnel, and
            long-term e-commerce revenue with a smarter growth system.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#0d2d47] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0d2d47]/90"
            >
              Start E-Commerce Growth
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-[#0d2d47]/20 bg-white/25 px-6 py-3 text-sm font-medium text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
