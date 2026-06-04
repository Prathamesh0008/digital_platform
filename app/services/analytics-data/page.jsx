//app\services\analytics-data\page.jsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ServiceInternalLinkText from "@/components/ServiceInternalLinkText";
import {
  FaChartLine,
  FaBullseye,
  FaChartBar,
  FaFilter,
  FaUsers,
  FaRoute,
  FaMousePointer,
  FaLightbulb,
  FaCog,
  FaTachometerAlt,
  FaProjectDiagram,
  FaShareAlt,
  FaEye,
  FaRocket,
  FaDatabase,
  FaClipboardList,
} from "react-icons/fa";
const insightCards = [
  { label: "Traffic Quality", value: "72%" },
  { label: "Lead Sources", value: "14" },
  { label: "Conversion Rate", value: "6.8%" },
  { label: "Revenue Signals", value: "+38%" },
];

const dataAreas = [
  { icon: FaChartLine, title: "GA4 Setup" },
  { icon: FaBullseye, title: "Conversion Tracking" },
  { icon: FaTachometerAlt, title: "Dashboard Reporting" },
  { icon: FaFilter, title: "Funnel Analysis" },
  { icon: FaUsers, title: "Customer Behaviour" },
  { icon: FaShareAlt, title: "Campaign Attribution" },
  { icon: FaMousePointer, title: "Event Tracking" },
  { icon: FaLightbulb, title: "Monthly Insights" },
];

const services = [
  {
    icon: FaCog,
    title: "Analytics Setup",
    text: "Set up GA4, pixels, tags, events, conversions, and tracking systems correctly across your website.",
  },
  {
    icon: FaTachometerAlt,
    title: "Dashboard Reporting",
    text: "Create clean reporting dashboards that show traffic, leads, revenue, campaign performance, and growth signals.",
  },
  {
    icon: FaProjectDiagram,
    title: "Funnel Analysis",
    text: "Identify where users drop, what pages convert, and which journeys create the strongest business results.",
  },
  {
    icon: FaShareAlt,
    title: "Campaign Attribution",
    text: "Understand which channels, campaigns, ads, and content actually contribute to leads and conversions.",
  },
  {
    icon: FaEye,
    title: "User Behaviour Insights",
    text: "Study visitor actions, engagement patterns, scroll behaviour, clicks, and conversion intent.",
  },
  {
    icon: FaRocket,
    title: "Growth Recommendations",
    text: "Turn data into practical action plans for improving marketing, UX, content, and conversion performance.",
  },
];

const process = [
  { icon: FaDatabase, title: "Track" },
  { icon: FaChartBar, title: "Measure" },
  { icon: FaFilter, title: "Analyse" },
  { icon: FaClipboardList, title: "Report" },
  { icon: FaLightbulb, title: "Recommend" },
  { icon: FaRocket, title: "Improve" },
];

const contentSections = [
  {
    title:
      "What Are Analytics Data Services and Why Do Modern Businesses Need Them?",
    paragraphs: [
      "Analytics Data Services by Nova Techscience help businesses collect, analyse, and transform raw information into actionable insights.",
      "In the digital-first business era, data has become one of the most valuable business assets. Every click, search, transaction, customer interaction, and online behavior generates valuable information.",
      "Nova Techscience provides advanced analytics data solutions for businesses across the USA, UK, and global markets. Our analytics services help companies improve decision-making, increase operational efficiency, understand customer behavior, optimize marketing performance, reduce business risks, and drive sustainable growth.",
      "Whether you are a startup, enterprise, eCommerce company, healthcare provider, finance organization, SaaS business, or retail brand, our data analytics experts help you unlock the true power of your business data.",
    ],
  },
  {
    title: "What Is Data Analytics and How Does It Help Businesses Grow?",
    paragraphs: [
      "Data analytics is the process of collecting, organizing, processing, and analyzing business data to discover meaningful patterns, trends, and insights.",
      "Companies use data analytics to make smarter business decisions instead of relying on assumptions.",
      "Nova Techscience offers intelligent analytics data services that transform complex data into easy-to-understand business intelligence.",
      "Our advanced analytics solutions help organizations stay competitive in rapidly changing global markets.",
    ],
    listTitle: "Core Benefits of Data Analytics Services",
    list: [
      "Better business decision-making",
      "Improved customer experience",
      "Increased operational efficiency",
      "Real-time business insights",
      "Predictive business forecasting",
      "Marketing campaign optimization",
      "Revenue growth opportunities",
      "Risk management improvement",
      "Enhanced customer retention",
      "Scalable business intelligence solutions",
    ],
  },
  {
    title: "Why Are Analytics Data Services Important for Digital Transformation?",
    paragraphs: [
      "Digital transformation is impossible without data-driven strategies. Businesses today need accurate insights to compete in highly competitive industries.",
      "Analytics data services provide organizations with the ability to track performance, understand user behavior, and predict future outcomes.",
      "Nova Techscience helps businesses modernize operations using AI-powered analytics solutions, machine learning models, cloud analytics, predictive analytics, and real-time reporting systems.",
    ],
    subsections: [
      {
        title: "Customer Behavior Analysis",
        text: "Businesses can understand what customers want, how they interact with websites, and why they purchase products.",
      },
      {
        title: "Predictive Analytics",
        text: "Companies can forecast future trends, customer demand, and sales performance using historical data.",
      },
      {
        title: "Marketing Analytics",
        text: "Organizations can optimize PPC campaigns, SEO performance, conversion funnels, and advertising ROI.",
      },
      {
        title: "Business Intelligence Reporting",
        text: "Executives gain access to interactive dashboards and KPI tracking systems.",
      },
      {
        title: "Real-Time Data Monitoring",
        text: "Businesses can identify issues instantly and improve operational efficiency.",
      },
    ],
  },
  {
    title: "How Does Nova Techscience Deliver Advanced Analytics Data Solutions?",
    paragraphs: [
      "Nova Techscience follows a strategic data-driven methodology designed to maximize business performance and ROI.",
    ],
    subsections: [
      {
        title: "Step 1: Data Collection",
        text: "We gather data from websites, mobile applications, CRM systems, cloud platforms, social media channels, ERP software, eCommerce platforms, and customer databases.",
      },
      {
        title: "Step 2: Data Cleaning and Processing",
        text: "Raw data is cleaned, filtered, and organized to eliminate inaccuracies and duplicates.",
      },
      {
        title: "Step 3: Data Analysis",
        text: "Our analytics experts use advanced tools and AI-driven models to identify patterns, correlations, and trends.",
      },
      {
        title: "Step 4: Visualization and Reporting",
        text: "We create intuitive dashboards and visual reports for easy business interpretation.",
      },
      {
        title: "Step 5: Strategic Recommendations",
        text: "Nova Techscience provides actionable insights that help businesses improve growth, marketing, operations, and customer engagement.",
      },
    ],
  },
  {
    title: "What Are the Main Analytics Data Services Offered by Nova Techscience?",
    paragraphs: [
      "Nova Techscience provides complete analytics services for business intelligence, big data, predictive analytics, marketing analytics, customer analytics, data visualization, and cloud analytics.",
    ],
    subsections: [
      {
        title: "Business Intelligence Services",
        text: "KPI tracking, executive dashboards, real-time analytics, data visualization, performance reporting, and automated reporting systems.",
      },
      {
        title: "Big Data Analytics Services",
        text: "Hadoop analytics, Spark data processing, cloud-based big data architecture, data warehousing, data lake solutions, and structured or unstructured data analysis.",
      },
      {
        title: "Predictive Analytics Services",
        text: "Sales forecasting, customer churn prediction, fraud detection, inventory forecasting, demand planning, and market trend prediction.",
      },
      {
        title: "Marketing Analytics Services",
        text: "Google Analytics management, SEO analytics, PPC campaign analytics, conversion rate optimization, user journey analysis, and social media analytics.",
      },
      {
        title: "Customer Analytics Services",
        text: "Customer segmentation, retention optimization, personalized marketing, customer lifetime value analysis, and behavioral tracking.",
      },
      {
        title: "Data Visualization Services",
        text: "Power BI, Tableau, Google Data Studio, Looker Studio, and Excel dashboards.",
      },
      {
        title: "Cloud Analytics Services",
        text: "AWS Analytics, Microsoft Azure Analytics, Google Cloud Analytics, Snowflake, and Databricks.",
      },
    ],
  },
  {
    title: "Which Industries Benefit Most from Analytics Data Services?",
    paragraphs: [
      "Almost every industry today depends on analytics-driven decision-making. Nova Techscience provides industry-specific analytics solutions.",
    ],
    subsections: [
      { title: "Healthcare Analytics", text: "Improve patient outcomes, optimize operations, and reduce costs." },
      { title: "Retail Analytics", text: "Analyze customer behavior, inventory performance, and sales trends." },
      { title: "Financial Analytics", text: "Use predictive analytics for fraud detection and risk management." },
      { title: "Manufacturing Analytics", text: "Improve supply chain efficiency and production optimization." },
      { title: "eCommerce Analytics", text: "Track customer journeys, cart abandonment, and conversion optimization." },
      { title: "Education Analytics", text: "Analyze student performance and engagement metrics." },
      { title: "Real Estate Analytics", text: "Use data analytics for property valuation and market forecasting." },
    ],
  },
  {
    title: "How Does Data Analytics Improve Customer Experience?",
    paragraphs: [
      "Customer experience is one of the biggest competitive advantages in modern business. Analytics data helps organizations personalize interactions and improve satisfaction.",
      "Nova Techscience develops customer intelligence systems that help businesses create exceptional customer experiences.",
    ],
    subsections: [
      {
        title: "Personalized Recommendations",
        text: "Analytics helps businesses recommend products based on customer preferences.",
      },
      {
        title: "Faster Customer Support",
        text: "Businesses identify common customer issues and improve support systems.",
      },
      {
        title: "Better User Experience",
        text: "Website analytics reveal user behavior patterns for UX optimization.",
      },
      {
        title: "Customer Retention Strategies",
        text: "Predictive analytics identifies customers likely to leave.",
      },
    ],
  },
  {
    title: "Why Should Businesses Invest in Predictive Analytics Solutions?",
    paragraphs: [
      "Predictive analytics is one of the fastest-growing areas of business intelligence. Companies using predictive analytics gain a major competitive advantage.",
      "Nova Techscience uses AI-powered predictive analytics models to help businesses make proactive decisions.",
    ],
    listTitle: "Benefits of Predictive Analytics",
    list: [
      "Reduced business risks",
      "Improved forecasting accuracy",
      "Better inventory management",
      "Enhanced marketing ROI",
      "Smarter financial planning",
      "Improved operational efficiency",
    ],
  },
  {
    title: "How Does AI Improve Modern Analytics Data Services?",
    paragraphs: [
      "Artificial intelligence is transforming the future of data analytics. AI-powered analytics solutions can process massive datasets faster and more accurately than traditional systems.",
      "Nova Techscience integrates AI and machine learning technologies into advanced analytics ecosystems.",
    ],
    subsections: [
      {
        title: "Machine Learning Models",
        text: "AI systems continuously improve prediction accuracy using historical data.",
      },
      {
        title: "Automated Insights",
        text: "AI automatically identifies patterns and anomalies.",
      },
      {
        title: "Natural Language Processing",
        text: "Businesses can analyze customer reviews, chats, and social media conversations.",
      },
      {
        title: "Intelligent Forecasting",
        text: "AI predicts future business outcomes with high accuracy.",
      },
    ],
  },
  {
    title: "What Makes Nova Techscience a Trusted Analytics Data Company?",
    paragraphs: [
      "Nova Techscience is committed to delivering scalable, secure, and results-driven analytics solutions for global businesses.",
    ],
    subsections: [
      {
        title: "Experienced Data Experts",
        text: "Our team includes certified data analysts, AI engineers, business intelligence specialists, and cloud architects.",
      },
      {
        title: "Customized Analytics Solutions",
        text: "Every business has unique data requirements. We create tailored analytics strategies.",
      },
      {
        title: "Advanced Technology Stack",
        text: "We use modern analytics technologies, AI frameworks, and cloud infrastructure.",
      },
      {
        title: "Global Analytics Support",
        text: "We serve businesses across the USA, UK, Europe, Asia, and international markets.",
      },
      {
        title: "Data Security and Compliance",
        text: "Nova Techscience follows strict security protocols and compliance standards.",
      },
    ],
  },
  {
    title: "How Can Small Businesses Use Data Analytics Effectively?",
    paragraphs: [
      "Many small businesses believe analytics solutions are only for large enterprises. However, modern cloud analytics platforms make data-driven insights affordable and scalable.",
      "Nova Techscience provides cost-effective analytics solutions designed specifically for startups and small businesses.",
    ],
    listTitle: "Small Business Analytics Benefits",
    list: [
      "Customer trend analysis",
      "Marketing optimization",
      "Sales forecasting",
      "Budget planning",
      "Website performance tracking",
      "Customer retention improvement",
    ],
  },
  {
    title: "What Are the Most Important Data Analytics Trends in 2026?",
    paragraphs: [
      "The analytics industry continues evolving rapidly due to AI, automation, and cloud technologies.",
      "Nova Techscience stays ahead of emerging trends to provide future-ready analytics solutions.",
    ],
    subsections: [
      { title: "AI-Driven Analytics", text: "Artificial intelligence automates data processing and decision-making." },
      { title: "Real-Time Analytics", text: "Businesses increasingly rely on live data monitoring systems." },
      { title: "Self-Service Analytics", text: "Non-technical users access analytics dashboards independently." },
      { title: "Augmented Analytics", text: "AI-generated recommendations simplify business insights." },
      { title: "Data Privacy and Security", text: "Organizations focus heavily on compliance and cybersecurity." },
      { title: "Cloud-Native Analytics", text: "Cloud infrastructure enables scalable analytics ecosystems." },
    ],
  },
  {
    title: "How Does Business Intelligence Improve Decision-Making?",
    paragraphs: [
      "Business intelligence enables executives and managers to make informed decisions based on accurate data.",
      "Nova Techscience develops powerful business intelligence systems that transform complex data into strategic business value.",
    ],
    listTitle: "Business Intelligence Advantages",
    list: [
      "Real-time performance monitoring",
      "Improved financial analysis",
      "Better operational planning",
      "Enhanced productivity tracking",
      "Data-driven strategy development",
    ],
  },
  {
    title: "What Technologies Are Used in Modern Analytics Data Services?",
    paragraphs: [
      "Modern analytics platforms rely on advanced technologies to process and analyze massive datasets.",
      "Our analytics experts use enterprise-grade technologies to deliver scalable and high-performance analytics solutions.",
    ],
    listTitle: "Popular Analytics Technologies",
    list: [
      "Python",
      "SQL",
      "R Programming",
      "Apache Spark",
      "Hadoop",
      "Tableau",
      "Power BI",
      "TensorFlow",
      "Snowflake",
      "AWS",
      "Azure",
      "Google Cloud Platform",
    ],
  },
  {
    title: "How Does Nova Techscience Ensure Data Accuracy and Reliability?",
    paragraphs: [
      "Data quality is critical for accurate business insights. Poor data quality leads to incorrect decisions and financial losses.",
      "Nova Techscience maintains high standards of data integrity and reliability.",
    ],
    listTitle: "Our Data Quality Process",
    list: [
      "Data validation",
      "Duplicate removal",
      "Error correction",
      "Data standardization",
      "Automated quality monitoring",
      "Secure data governance",
    ],
  },
  {
    title: "What Are the Benefits of Real-Time Analytics?",
    paragraphs: [
      "Real-time analytics allows businesses to monitor operations instantly and respond quickly to changing conditions.",
      "Nova Techscience develops real-time analytics dashboards for modern digital businesses.",
    ],
    listTitle: "Real-Time Analytics Benefits",
    list: [
      "Immediate issue detection",
      "Faster decision-making",
      "Enhanced operational efficiency",
      "Better customer engagement",
      "Real-time KPI monitoring",
    ],
  },
  {
    title: "Why Is Data Visualization Important in Analytics?",
    paragraphs: [
      "Data visualization simplifies complex information and improves understanding.",
      "Our visualization experts create interactive dashboards that improve business communication and reporting.",
    ],
    listTitle: "Advantages of Data Visualization",
    list: [
      "Faster data interpretation",
      "Better executive reporting",
      "Improved collaboration",
      "Easier trend identification",
      "Enhanced business presentations",
    ],
  },
  {
    title: "How Can Businesses Start Their Analytics Transformation Journey?",
    paragraphs: [
      "Starting an analytics transformation requires strategic planning and expert guidance.",
      "Nova Techscience provides end-to-end analytics consulting and implementation services.",
    ],
    listTitle: "Steps to Begin Analytics Transformation",
    list: [
      "Define business goals",
      "Identify data sources",
      "Choose analytics technologies",
      "Build scalable infrastructure",
      "Implement dashboards",
      "Train teams",
      "Monitor performance continuously",
    ],
  },
  {
    title: "Conclusion",
    paragraphs: [
      "Analytics data services are no longer optional in modern business environments. Organizations that leverage advanced analytics gain deeper customer insights, stronger operational efficiency, improved forecasting accuracy, and better competitive positioning.",
      "Nova Techscience provides scalable, AI-powered, and results-driven analytics data solutions tailored for businesses worldwide.",
      "From business intelligence and predictive analytics to cloud analytics and customer insights, our services empower organizations to unlock the full potential of their data.",
      "If your business wants to improve decision-making, accelerate growth, optimize operations, and stay competitive in the digital economy, Nova Techscience is your trusted analytics technology partner.",
    ],
  },
];

const faqs = [
  {
    question: "What are analytics data services?",
    answer:
      "Analytics data services help businesses collect, organize, analyze, visualize, and use data for better decisions, marketing performance, customer experience, and business growth.",
  },
  {
    question: "Why does my business need analytics?",
    answer:
      "Analytics helps your business understand customers, track performance, reduce guesswork, improve campaigns, forecast trends, and identify growth opportunities.",
  },
  {
    question: "Can Nova Techscience set up GA4 and dashboards?",
    answer:
      "Yes. Nova Techscience can set up GA4, tracking events, conversions, Looker Studio dashboards, KPI reports, and campaign performance dashboards.",
  },
  {
    question: "How does predictive analytics help businesses?",
    answer:
      "Predictive analytics helps businesses forecast sales, customer demand, churn risk, inventory needs, fraud patterns, and future market trends.",
  },
  {
    question: "Do small businesses need analytics data services?",
    answer:
      "Yes. Small businesses can use analytics to track website performance, improve marketing, understand customers, plan budgets, and make smarter growth decisions.",
  },
];

function AnalyticsConsole() {
  const bars = [45, 72, 52, 88, 63, 96, 70, 84];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative rounded-[30px] border border-white/45 bg-white/25 p-3 shadow-[0_24px_80px_rgba(13,45,71,0.18)] backdrop-blur-md"
    >
      <div className="rounded-[24px] bg-[#EAEBDB]/90 p-4 sm:p-5">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0d2d47]/55">
            Data Console
          </span>
          <span className="rounded-full bg-[#0d2d47] px-3 py-1 text-xs font-semibold text-white">
            Tracking
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {insightCards.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.1 }}
              className="rounded-2xl bg-white/60 p-4 shadow-[0_12px_32px_rgba(13,45,71,0.08)]"
            >
              <p className="text-3xl font-bold">{item.value}</p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0d2d47]/55">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 grid h-[170px] grid-cols-8 items-end gap-2 rounded-3xl bg-white/40 p-4">
          {bars.map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 18 }}
              animate={{ height }}
              transition={{ duration: 0.9, delay: i * 0.07, ease: "easeOut" }}
              className="rounded-t-xl bg-[#7392FB]"
            />
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
          <ServiceInternalLinkText currentHref="/services/analytics-data">
            {item}
          </ServiceInternalLinkText>
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
            <ServiceInternalLinkText currentHref="/services/analytics-data">
              {item.title}
            </ServiceInternalLinkText>
          </h3>
          <p className="mt-2 text-[15px] leading-7 text-[#0d2d47]/72">
            <ServiceInternalLinkText currentHref="/services/analytics-data">
              {item.text}
            </ServiceInternalLinkText>
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
         <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0d2d47] text-white">
  <FaChartLine />
</span>

          <h2 className="text-xl font-bold uppercase leading-tight text-[#0d2d47] sm:text-2xl lg:text-[27px]">
            <ServiceInternalLinkText currentHref="/services/analytics-data">
              {section.title}
            </ServiceInternalLinkText>
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
                    <ServiceInternalLinkText currentHref="/services/analytics-data">
                      {text}
                    </ServiceInternalLinkText>
                  </p>
                ))}
              </div>

              {section.listTitle && (
                <h3 className="mt-6 text-base font-bold uppercase tracking-[0.08em] text-[#0d2d47]">
                  <ServiceInternalLinkText currentHref="/services/analytics-data">
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
            Frequently Asked Questions
          </p> */}
          <h2 className="text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
            Analytics Data FAQs
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
                    <ServiceInternalLinkText currentHref="/services/analytics-data">
                      {item.question}
                    </ServiceInternalLinkText>
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
                        <ServiceInternalLinkText currentHref="/services/analytics-data">
                          {item.answer}
                        </ServiceInternalLinkText>
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

export default function AnalyticsDataPage() {
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

        <div className="relative mx-auto grid max-w-[1180px] items-center gap-9 lg:grid-cols-[1fr_0.86fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {/* <p className="mb-5 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] backdrop-blur-md">
              Analytics And Data
            </p> */}

            <h1 className="max-w-4xl text-[42px] font-bold uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-[92px]">
              Turn Data Into Smarter Growth
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#0d2d47]/75 md:text-lg">
              We help businesses track the right metrics, understand customer
              behaviour, measure campaign performance, and make better marketing
              decisions with clear data.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-[#0d2d47] px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
              >
                Build Analytics System
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-[#0d2d47]/25 bg-white/25 px-7 py-3 text-center text-sm font-semibold text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          <AnalyticsConsole />
        </div>
      </section>

      {/* DATA AREAS */}
      <section className="px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 max-w-4xl">
            {/* <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#7392FB]">
              Data Foundations
            </p> */}

            <h2 className="text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
              We Make Your Marketing Performance Easier To Understand
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
       {dataAreas.map((item, i) => {
  const Icon = item.icon;

  return (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.035 }}
      whileHover={{ y: -6 }}
      className="group rounded-2xl border border-[#0d2d47]/10 bg-white/50 p-5 shadow-[0_18px_45px_rgba(13,45,71,0.08)] backdrop-blur-md transition hover:bg-white/75"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7392FB]/15 text-xl text-[#7392FB] transition group-hover:bg-[#0d2d47] group-hover:text-white">
        <Icon />
      </div>

      <h3 className="text-base font-bold uppercase">
        <ServiceInternalLinkText currentHref="/services/analytics-data">
          {item.title}
        </ServiceInternalLinkText>
      </h3>
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
          <div className="mb-8 grid gap-5 lg:grid-cols-[0.75fr_1fr] lg:items-end">
            <div>
              {/* <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-white/70">
                Insight System
              </p> */}
              <h2 className="text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
                Data That Explains What To Do Next
              </h2>
            </div>

            <p className="text-base leading-8 text-white/75">
              Reporting is not enough. We build analytics systems that help you
              understand what is working, what is wasting budget, and where the
              next growth opportunity exists.
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

      <h3 className="text-xl font-bold uppercase">
        <ServiceInternalLinkText currentHref="/services/analytics-data">
          {item.title}
        </ServiceInternalLinkText>
      </h3>

      <p className="mt-3 text-base leading-8 text-white/75">
        <ServiceInternalLinkText currentHref="/services/analytics-data">
          {item.text}
        </ServiceInternalLinkText>
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
          <div className="mb-8 max-w-4xl">
            {/* <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#7392FB]">
              Analytics Process
            </p> */}

            <h2 className="text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
              Analytics Process From Tracking Setup To Actionable Insights
            </h2>
          </div>

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
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-[#0d2d47]/10 bg-gradient-to-br from-[#B6C4E7] to-white/50 p-5 shadow-[0_14px_35px_rgba(13,45,71,0.08)]"
    >
      <Icon className="text-2xl text-[#7392FB]" />

      <h3 className="mt-5 text-sm font-bold uppercase">
        <ServiceInternalLinkText currentHref="/services/analytics-data">
          {item.title}
        </ServiceInternalLinkText>
      </h3>
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
              Complete Analytics Data Services
            </p> */}

            <h2 className="text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
              Explore Our Full Analytics Growth Strategy
            </h2>

            <p className="mt-4 text-base leading-8 text-[#0d2d47]/75 sm:text-lg">
              Open each section to read the complete analytics, AI, business
              intelligence, predictive analytics, cloud analytics, and reporting
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
            Make Better Decisions
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
            Let&apos;s Build A Clear Data System For Your Brand
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#0d2d47]/75">
            Track the right metrics, understand customer behaviour, measure
            marketing performance, and turn data into smarter growth decisions.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
            >
              Start Analytics Project
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
