// app/services/ecommerce-growth/page.jsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
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
      "Nova Techscience provides advanced e-commerce services and e-commerce website solutions for businesses in the USA, UK, and global markets. Our expert team builds secure, fast, SEO-friendly, and conversion-focused e-commerce websites that help businesses compete in the modern online marketplace.",
      "E-commerce is no longer limited to selling products online. Today, businesses need complete e-commerce website development, e-commerce SEO services, payment gateway integration, mobile commerce solutions, shopping cart optimization, inventory management, customer engagement tools, AI-driven marketing strategies, and omnichannel commerce support.",
      "A professional e-commerce website is the foundation of digital business success. Customers expect fast-loading pages, easy navigation, secure checkout systems, responsive mobile design, and personalized shopping experiences.",
      "Nova Techscience specializes in custom e-commerce website development, Shopify development, WooCommerce solutions, Magento development, e-commerce app development, B2B e-commerce solutions, and enterprise e-commerce services.",
    ],
  },
  {
    title: "Why Do Businesses Need Professional E-Commerce Services?",
    paragraphs: [
      "Businesses need professional e-commerce services because modern online customers demand seamless digital experiences. A professionally developed e-commerce website improves brand trust, enhances customer engagement, and increases online sales opportunities.",
      "Many businesses fail online because they use outdated websites that do not meet current customer expectations. A slow or poorly designed e-commerce website can increase bounce rates and reduce sales.",
      "Nova Techscience creates e-commerce website solutions designed for speed, scalability, and performance.",
      "Professional e-commerce services also help businesses expand globally with multilingual support, international payment gateways, and global shipping integrations.",
    ],
    listTitle: "Professional e-commerce services provide businesses with:",
    list: [
      "Custom e-commerce website design",
      "Secure payment integration",
      "Mobile-friendly shopping experiences",
      "SEO optimization for search engines",
      "AI-powered customer support",
      "Fast website performance",
      "Advanced product management",
      "Conversion rate optimization",
      "Multi-vendor marketplace solutions",
      "Scalable cloud-based infrastructure",
    ],
  },
  {
    title: "How Does an E-Commerce Website Help Increase Online Sales?",
    paragraphs: [
      "An e-commerce website acts as a digital storefront available 24/7. Customers can browse products, compare prices, place orders, and make secure payments from anywhere in the world.",
      "Nova Techscience develops conversion-focused e-commerce websites that help businesses generate more leads, increase customer retention, and maximize online revenue.",
    ],
    subsections: [
      {
        title: "Improving User Experience",
        text: "Easy navigation, quick product search, responsive design, and fast-loading pages improve customer satisfaction and reduce cart abandonment.",
      },
      {
        title: "Enhancing Mobile Shopping",
        text: "Most online users shop through smartphones. Mobile-optimized e-commerce websites improve accessibility and customer convenience.",
      },
      {
        title: "Building Customer Trust",
        text: "Secure checkout systems, SSL certificates, customer reviews, and trusted payment methods increase buyer confidence.",
      },
      {
        title: "Supporting SEO and GEO Optimization",
        text: "Search engine optimized e-commerce websites rank higher on Google, Bing, and AI-driven search platforms.",
      },
      {
        title: "Increasing Conversion Rates",
        text: "Strategic product pages, optimized call-to-action buttons, AI personalization, and streamlined checkout systems improve sales conversions.",
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
        text: "We create custom e-commerce websites tailored to business goals, target audience, and industry requirements.",
      },
      {
        title: "Shopify Development Services",
        text: "Our Shopify experts develop modern Shopify stores with advanced themes, payment integrations, and SEO optimization.",
      },
      {
        title: "WooCommerce Development Services",
        text: "We build flexible WooCommerce websites with custom plugins, product management systems, and responsive design.",
      },
      {
        title: "Magento Development Services",
        text: "Magento development services are ideal for enterprise businesses requiring advanced functionality and multi-store capabilities.",
      },
      {
        title: "E-Commerce App Development",
        text: "Nova Techscience develops mobile commerce apps for Android and iOS platforms.",
      },
      {
        title: "E-Commerce SEO Services",
        text: "Our e-commerce SEO services improve online visibility, organic rankings, and traffic generation.",
      },
      {
        title: "Marketplace Development",
        text: "We create multi-vendor marketplace platforms with vendor dashboards, commission systems, and product management features.",
      },
      {
        title: "Payment Gateway Integration",
        text: "Secure payment gateway integration improves customer trust and supports global online transactions.",
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
    subsections: [
      {
        title: "Keyword Optimization",
        text: "We target e-commerce services, e-commerce website development, online store development, Shopify development, WooCommerce services, and e-commerce SEO keywords.",
      },
      {
        title: "Technical SEO",
        text: "Technical SEO improves crawlability, indexing, website speed, structured data, and mobile performance.",
      },
      {
        title: "AI Search Optimization",
        text: "Modern AI-driven search engines prioritize conversational content, semantic search, and user intent optimization.",
      },
      {
        title: "Content Optimization",
        text: "Optimized product descriptions, category pages, FAQs, blogs, and metadata improve search engine rankings.",
      },
      {
        title: "Voice Search SEO",
        text: "Voice search queries are conversational, so we create voice-friendly content structures.",
      },
    ],
  },
  {
    title: "What Makes a Successful E-Commerce Website?",
    paragraphs: [
      "A successful e-commerce website combines technology, design, SEO, and customer psychology. Businesses that focus only on website appearance often fail to optimize user experience and search performance.",
      "Nova Techscience combines modern technology with user-centric design principles to build high-performing e-commerce websites.",
    ],
    subsections: [
      { title: "Fast Website Speed", text: "Customers expect websites to load within seconds." },
      { title: "Mobile Responsiveness", text: "Responsive e-commerce websites adapt to smartphones, tablets, and desktop devices." },
      { title: "Secure Payment Systems", text: "Customers need secure and trusted payment methods for online purchases." },
      { title: "SEO-Friendly Architecture", text: "SEO-friendly URLs, structured data, optimized images, and internal linking improve rankings." },
      { title: "Advanced Product Management", text: "Easy product categorization, inventory tracking, and filtering systems improve usability." },
      { title: "AI-Powered Recommendations", text: "Personalized recommendations increase average order value and customer retention." },
      { title: "User-Friendly Navigation", text: "Clear menus, filters, and search functionality improve customer satisfaction." },
    ],
  },
  {
    title: "Why Is Mobile Commerce Important for Modern Businesses?",
    paragraphs: [
      "Mobile commerce has transformed online shopping behavior. Most consumers now browse and purchase products through mobile devices.",
      "Businesses without mobile-friendly e-commerce websites risk losing customers to competitors.",
      "Nova Techscience develops mobile-first e-commerce solutions with responsive design, mobile apps, fast loading speeds, and secure payment integration.",
    ],
    listTitle: "Mobile commerce improves:",
    list: [
      "Customer accessibility",
      "Online engagement",
      "Conversion rates",
      "Brand visibility",
      "Shopping convenience",
      "Android apps",
      "iOS apps",
      "Progressive web apps",
      "Mobile wallets",
      "Push notifications",
      "AI-driven personalization",
    ],
  },
  {
    title: "How Can AI Improve E-Commerce Services?",
    paragraphs: [
      "Artificial intelligence is changing the future of e-commerce services. AI-powered tools improve customer experience, automate business processes, and increase operational efficiency.",
      "Nova Techscience integrates AI-powered e-commerce solutions into modern online stores to improve customer satisfaction and business growth.",
    ],
    subsections: [
      { title: "Personalized Shopping Experiences", text: "AI analyzes customer behavior and recommends relevant products." },
      { title: "Chatbots and Virtual Assistants", text: "AI chatbots provide instant customer support and improve engagement." },
      { title: "Predictive Analytics", text: "AI helps businesses forecast demand, optimize inventory, and improve marketing campaigns." },
      { title: "Voice Commerce Optimization", text: "Voice assistants influence online shopping trends." },
      { title: "Fraud Detection", text: "AI systems identify suspicious transactions and improve security." },
    ],
  },
  {
    title: "What Are the Benefits of Hiring Nova Techscience for E-Commerce Services?",
    paragraphs: [
      "Nova Techscience is a trusted provider of professional e-commerce services for businesses in the USA, UK, and global markets.",
    ],
    subsections: [
      { title: "Industry Expertise", text: "Our team has extensive experience in e-commerce website development, SEO, AI integration, and online business strategy." },
      { title: "Customized Solutions", text: "We create customized e-commerce platforms based on business goals and target audience requirements." },
      { title: "Advanced SEO and AEO Optimization", text: "Our websites are optimized for search engines, AI search systems, and voice assistants." },
      { title: "Scalable Infrastructure", text: "We develop scalable e-commerce platforms that support future business expansion." },
      { title: "Global Market Reach", text: "Our e-commerce solutions support international customers, multiple currencies, and multilingual content." },
      { title: "Secure Technology", text: "We prioritize website security, secure payment integration, and data protection." },
      { title: "Conversion-Focused Strategy", text: "Our websites are designed to increase leads, customer engagement, and online sales." },
    ],
  },
  {
    title: "How Does GEO Optimization Help E-Commerce Businesses?",
    paragraphs: [
      "GEO optimization improves local and regional search visibility. Businesses targeting customers in the USA, UK, and global markets need location-focused SEO strategies.",
      "These techniques help businesses attract customers from targeted geographic regions.",
    ],
    listTitle: "GEO optimization helps businesses:",
    list: [
      "Rank in regional search results",
      "Improve local customer targeting",
      "Increase online visibility",
      "Generate qualified traffic",
      "Enhance voice search performance",
      "Location-based keywords",
      "Google Business optimization",
      "Local schema markup",
      "Regional landing pages",
      "Local backlink strategies",
    ],
  },
  {
    title: "What Are the Future Trends in E-Commerce Services?",
    paragraphs: [
      "The e-commerce industry continues to evolve rapidly. Businesses that adopt modern technologies and customer-centric strategies gain competitive advantages.",
      "Nova Techscience helps businesses stay ahead of evolving e-commerce trends through innovative technology solutions.",
    ],
    subsections: [
      { title: "AI-Powered Personalization", text: "Customers expect personalized shopping experiences based on preferences and behavior." },
      { title: "Voice Commerce", text: "Voice search and voice shopping continue to grow globally." },
      { title: "Augmented Reality Shopping", text: "AR technology allows customers to visualize products before purchase." },
      { title: "Headless Commerce", text: "Headless architecture improves flexibility and omnichannel experiences." },
      { title: "Sustainable E-Commerce", text: "Eco-friendly packaging and ethical business practices influence customer decisions." },
      { title: "Social Commerce", text: "Social media platforms increasingly support direct online shopping experiences." },
    ],
  },
  {
    title: "How Can Businesses Choose the Right E-Commerce Service Provider?",
    paragraphs: [
      "Choosing the right e-commerce service provider is essential for long-term business success.",
      "Nova Techscience provides end-to-end e-commerce solutions tailored to modern business requirements. Our expert team focuses on performance, scalability, SEO, and customer experience.",
    ],
    listTitle: "Businesses should evaluate:",
    list: [
      "Technical expertise",
      "Portfolio and experience",
      "SEO capabilities",
      "AI integration support",
      "Mobile optimization",
      "Security standards",
      "Scalability",
      "Customer support",
      "Pricing transparency",
      "Global commerce experience",
    ],
  },
  {
    title: "What Makes Nova Techscience Different From Other E-Commerce Companies?",
    paragraphs: [
      "Nova Techscience combines technology innovation, AI integration, SEO expertise, and customer-focused strategies to deliver high-performance e-commerce services.",
      "Our mission is to help businesses build profitable, future-ready e-commerce platforms for global success.",
    ],
    listTitle: "Unlike many traditional web development agencies, we focus on:",
    list: [
      "AI search optimization",
      "GEO-targeted SEO",
      "Voice search readiness",
      "Conversion optimization",
      "Scalable architecture",
      "Mobile commerce solutions",
      "Enterprise-level security",
      "Omnichannel commerce strategy",
    ],
  },
  {
    title: "Conclusion",
    paragraphs: [
      "Professional e-commerce services are essential for businesses that want to succeed in the digital marketplace. Modern customers expect fast, secure, mobile-friendly, and personalized online shopping experiences.",
      "Nova Techscience delivers complete e-commerce website solutions, SEO services, AI integration, and scalable online commerce platforms designed for USA, UK, and global businesses.",
      "Whether you need custom e-commerce website development, Shopify solutions, WooCommerce services, AI-powered commerce tools, or enterprise-level e-commerce strategy, Nova Techscience provides reliable and future-ready digital commerce solutions tailored to your business goals.",
    ],
  },
];

const faqs = [
  {
    question: "What are e-commerce services?",
    answer:
      "E-commerce services include store development, SEO, product optimization, payment integration, mobile commerce, automation, analytics, and growth strategy.",
  },
  {
    question: "Why does my business need e-commerce services?",
    answer:
      "Professional e-commerce services improve trust, speed, visibility, checkout flow, customer experience, and conversion rates.",
  },
  {
    question: "Do you build Shopify and WooCommerce stores?",
    answer:
      "Yes. Nova Techscience builds Shopify, WooCommerce, Magento, marketplace, custom, and enterprise e-commerce platforms.",
  },
  {
    question: "How does e-commerce SEO help?",
    answer:
      "E-commerce SEO improves product visibility, search rankings, indexing, organic traffic, schema, category pages, and AI search readiness.",
  },
  {
    question: "Can AI improve an e-commerce website?",
    answer:
      "Yes. AI improves product recommendations, chatbot support, personalization, forecasting, customer tracking, fraud detection, and automation.",
  },
];

function Badge({ children, light = false }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-4 inline-flex rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] ${
        light
          ? "border border-white/25 bg-white/15 text-white"
          : "bg-[#0d2d47] text-white"
      }`}
    >
      {children}
    </motion.span>
  );
}

function FunnelVisual({ y }) {
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
      {/* <motion.div
        style={{ y }}
        className="absolute -right-3 -top-5 hidden rounded-2xl bg-white/65 px-4 py-3 shadow-xl backdrop-blur-md sm:block"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0d2d47]/55">
          Revenue Lift
        </p>
        <p className="text-2xl font-bold">+68%</p>
      </motion.div> */}

      <div className="rounded-[22px] bg-[#EAEBDB]/90 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0d2d47]/60">
              Growth Funnel
            </p>
            <p className="text-xs text-[#0d2d47]/55">Live optimization view</p>
          </div>
        <motion.span
  initial={{ scale: 0.95 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.4 }}
            className="rounded-full bg-[#0d2d47] px-3 py-1 text-xs font-semibold text-white"
          >
            Active
          </motion.span>
        </div>

        <div className="space-y-3">
          {rows.map(([label, width, value], i) => (
            <div key={label}>
              <div className="mb-1 flex justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0d2d47]/60">
                <span>{label}</span>
                <span>{value}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-[#0d2d47]/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width }}
                transition={{
  duration: 1,
  delay: i * 0.12,
  ease: "easeOut",
}}
                  className="h-full rounded-full bg-[#7392FB]"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          {growthStats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="rounded-xl bg-white/60 p-3 text-center"
            >
              <p className="text-xl font-bold">{item.value}</p>
              <p className="mt-1 text-[9px] font-bold uppercase leading-snug tracking-[0.1em] text-[#0d2d47]/55">
                {item.label}
              </p>
            </motion.div>
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
    <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <motion.div
          key={item.title}
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-[#0d2d47]/10 bg-[#EAEBDB]/70 p-4"
        >
          <h3 className="text-sm font-bold uppercase text-[#0d2d47]">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#0d2d47]/70">
            {item.text}
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
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-[26px] border border-[#0d2d47]/10 bg-white/55 shadow-[0_18px_55px_rgba(13,45,71,0.08)] backdrop-blur-md"
    >
      <button
        type="button"
        onClick={() => setOpen(isOpen ? -1 : index)}
        className="flex w-full items-start justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6 cursor-pointer"
      >
        <div className="flex gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0d2d47] text-sm font-bold text-white">
            {(index + 1).toString().padStart(2, "0")}
          </span>

          <h2 className="text-xl font-bold uppercase leading-tight text-[#0d2d47] sm:text-2xl lg:text-[28px]">
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

function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section className="px-4 py-12 sm:px-6 md:px-10">
      <div className="mx-auto max-w-[1180px]">
        <Badge>Frequently Asked Questions</Badge>

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-[#0d2d47]/10 bg-white/45"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                >
                  <span className="text-sm font-bold uppercase text-[#0d2d47] md:text-base">
                    {item.question}
                  </span>
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
                      <p className="px-5 pb-5 text-sm leading-relaxed text-[#0d2d47]/70">
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

export default function EcommerceGrowthPage() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -55]);
  const floatY = useTransform(scrollYProgress, [0, 0.4], [0, 45]);

  return (
    <main className="min-h-screen bg-[#EAEBDB] text-[#0d2d47]">
      {/* HERO */}
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
            {/* <p className="mb-4 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] backdrop-blur-md">
              E-Commerce Growth
            </p> */}

            <h1 className="max-w-4xl text-[42px] font-bold uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-[92px]">
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
                className="rounded-full bg-[#0d2d47] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
              >
                Grow My Store
              </Link>

              <Link
                href="/portfolio"
                className="rounded-full border border-[#0d2d47]/25 bg-white/25 px-6 py-3 text-center text-sm font-semibold text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
              >
                View Work
              </Link>
            </div>
          </motion.div>

          <FunnelVisual y={floatY} />
        </div>
      </section>

      {/* GROWTH AREAS */}
      <section className="px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1180px]">
          {/* <Badge>Growth Areas</Badge> */}

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

      {/* <p className="mb-2 text-xs font-bold text-[#7392FB]">
        {(i + 1).toString().padStart(2, "0")}
      </p> */}

      <h3 className="text-base font-bold uppercase">{item.title}</h3>
    </motion.div>
  );
})}
          </div>
        </div>
      </section>

      {/* SERVICES */}
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
              {/* <Badge light>Revenue System</Badge> */}
              <h2 className="text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
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

      <h3 className="text-lg font-bold uppercase">{item.title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-white/75">
        {item.text}
      </p>
    </motion.article>
  );
})}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1180px]">
          {/* <Badge>Growth Process</Badge> */}

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

      {/* <p className="mt-4 text-3xl font-bold text-[#0d2d47]/20">
        {(i + 1).toString().padStart(2, "0")}
      </p> */}

      <h3 className="mt-3 text-sm font-bold uppercase">{item.title}</h3>
    </motion.div>
  );
})}
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
        Complete E-Commerce Services
      </p> */}

      <h2 className="text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
        Explore Our Full E-Commerce Growth Strategy
      </h2>

      <p className="mt-4 text-base leading-8 text-[#0d2d47]/75 sm:text-lg">
        Open each section to read the complete SEO, GEO, AEO and conversion-focused e-commerce content.
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
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#0d2d47]/55">
            Scale Your Online Store
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
            Let&apos;s Turn Your Store Into A Growth Engine
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
            Improve your conversion rate, customer retention, sales funnel, and
            long-term e-commerce revenue with a smarter growth system.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#0d2d47] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
            >
              Start E-Commerce Growth
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-[#0d2d47]/20 bg-white/25 px-6 py-3 text-sm font-semibold text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}