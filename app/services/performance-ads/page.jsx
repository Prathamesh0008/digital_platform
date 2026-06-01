// app/services/performance-ads/page.jsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const heroStats = [
  { value: "$12.5K", label: "Tracked ad spend sample" },
  { value: "4.8x", label: "Return on ad spend" },
  { value: "1,240", label: "Leads generated" },
  { value: "-36%", label: "Average CPA reduction" },
];

const tickerItems = [
  "Google Ads",
  "Meta Ads",
  "LinkedIn Ads",
  "YouTube Ads",
  "Lead Generation",
  "Retargeting",
  "Landing Pages",
  "Creative Testing",
  "Conversion Tracking",
  "Performance Scaling",
];

const platformCards = [
  {
    icon: "🔍",
    title: "Google Ads",
    text: "Capture high-intent users through search, display, shopping, and conversion-led paid campaigns.",
    tags: ["Search Intent", "PPC", "Shopping Ads"],
  },
  {
    icon: "📱",
    title: "Meta Ads",
    text: "Build awareness, retarget interested users, and generate leads across Facebook and Instagram.",
    tags: ["Facebook Ads", "Instagram Ads", "Retargeting"],
  },
  {
    icon: "💼",
    title: "LinkedIn Ads",
    text: "Reach B2B decision-makers with account-based campaigns, lead forms, and industry targeting.",
    tags: ["B2B Leads", "Decision Makers", "Lead Forms"],
  },
  {
    icon: "▶️",
    title: "YouTube Ads",
    text: "Use video campaigns to build trust, explain offers, increase recall, and drive conversion intent.",
    tags: ["Video Ads", "Brand Recall", "Awareness"],
  },
  {
    icon: "🛒",
    title: "Ecommerce Ads",
    text: "Track product views, add-to-cart actions, purchases, and ROAS across ecommerce campaigns.",
    tags: ["ROAS", "Cart Recovery", "Product Ads"],
  },
  {
    icon: "🔁",
    title: "Remarketing",
    text: "Reconnect with warm audiences who visited your website, viewed products, or started checkout.",
    tags: ["Warm Traffic", "Funnels", "Repeat Touchpoints"],
  },
];

const strategySteps = [
  {
    icon: "🔬",
    title: "Audit & Research",
    text: "We review your current ads, funnel, audience, tracking, competitors, and landing page performance.",
  },
  {
    icon: "🧭",
    title: "Strategy & Setup",
    text: "We define campaign objectives, platforms, budgets, audience targeting, tracking, and launch structure.",
  },
  {
    icon: "🎨",
    title: "Creative Testing",
    text: "We test hooks, headlines, visuals, CTAs, offers, and landing page angles to find what converts.",
  },
  {
    icon: "📊",
    title: "Optimize & Scale",
    text: "We shift budget to winners, reduce wasted spend, improve lead quality, and scale profitable campaigns.",
  },
];

const whyStats = [
  {
    icon: "🎯",
    value: "High Intent",
    text: "Reach users already searching, comparing, or ready to take action.",
  },
  {
    icon: "📉",
    value: "Lower CPA",
    text: "Improve cost efficiency through testing, targeting, and tracking.",
  },
  {
    icon: "📈",
    value: "Fast Growth",
    text: "Generate traffic, enquiries, leads, and sales faster than organic alone.",
  },
  {
    icon: "🔍",
    value: "Clear Data",
    text: "Understand which platform, campaign, ad, and audience creates results.",
  },
  {
    icon: "🔁",
    value: "Remarketing",
    text: "Bring back warm users who did not convert on their first visit.",
  },
];

const resultCards = [
  { value: "4.8x", label: "Sample return on ad spend" },
  { value: "-36%", label: "CPA reduction through optimization" },
  { value: "+68%", label: "Landing page conversion improvement" },
  { value: "1,240", label: "Tracked leads generated" },
];

const contentTypes = [
  {
    title: "Search Campaigns",
    text: "Campaigns built around search intent, service keywords, location targeting, and conversion-ready landing pages.",
    tags: ["Search Ads", "Keywords", "Local Intent"],
  },
  {
    title: "Lead Generation Ads",
    text: "Campaigns designed to generate calls, forms, WhatsApp enquiries, bookings, and qualified sales opportunities.",
    tags: ["Lead Forms", "Calls", "Bookings"],
  },
  {
    title: "Retargeting Ads",
    text: "Ads that re-engage website visitors, cart abandoners, product viewers, and warm audiences.",
    tags: ["Warm Audience", "Cart Recovery", "Repeat Reach"],
  },
  {
    title: "Creative Testing",
    text: "Testing hooks, images, videos, offers, CTAs, headlines, and formats to identify winning combinations.",
    tags: ["Hooks", "Visuals", "A/B Testing"],
  },
  {
    title: "Landing Page Optimization",
    text: "Improving message match, trust signals, speed, content structure, and calls to action for better conversions.",
    tags: ["CRO", "Message Match", "Trust Signals"],
  },
  {
    title: "Analytics & Reporting",
    text: "Clear tracking for conversions, cost per result, ROAS, lead quality, audience performance, and next actions.",
    tags: ["Tracking", "ROAS", "Reporting"],
  },
];

const analyticsMetrics = [
  ["👁️", "Impressions", "Campaign visibility"],
  ["🖱️", "Clicks", "Ad engagement"],
  ["📊", "CTR", "Click-through rate"],
  ["💰", "CPC", "Cost per click"],
  ["🎯", "CPL", "Cost per lead"],
  ["🛒", "ROAS", "Ad revenue return"],
  ["📞", "Calls", "Lead actions"],
  ["🔁", "Retargeting", "Warm audience results"],
];

const contentSections = [
  {
    title: "What Are Performance Ads?",
    paragraphs: [
      "Performance Ads are paid digital advertisements where the main focus is measurable action. These actions may include form submissions, phone calls, purchases, WhatsApp enquiries, downloads, sign-ups or other business goals.",
      "Performance Ads are commonly run across platforms such as Google Ads, Meta Ads, Instagram Ads, LinkedIn Ads, YouTube Ads and other paid media channels.",
      "The main strength of Performance Ads is tracking. Businesses can clearly understand how much they spent, how many users engaged, how many leads were generated and how much revenue came from the campaign.",
      "From an AI-search and answer-engine point of view, Performance Ads are one of the clearest forms of result-driven digital marketing.",
    ],
  },
  {
    title: "Why Are Performance Ads Important for Modern Businesses?",
    paragraphs: [
      "Performance Ads are important because modern customers make decisions across multiple digital touchpoints. A user may search on Google, compare brands on social media, watch a video, read reviews and then submit an enquiry.",
      "Traditional marketing often focuses on reach and awareness. Performance Ads go further by focusing on measurable business outcomes.",
      "This allows brands to reduce wasted spending and invest more in campaigns that actually work.",
    ],
    listTitle: "Performance Ads are especially valuable for businesses that want:",
    list: [
      "More qualified leads",
      "Higher website conversions",
      "Better sales enquiries",
      "Increased ecommerce revenue",
      "Lower cost per lead",
      "Improved return on ad spend",
      "Stronger remarketing campaigns",
      "Faster market testing",
      "Clear campaign reporting",
    ],
  },
  {
    title: "How Do Performance Ads Work?",
    paragraphs: [
      "Performance Ads work by combining audience targeting, creative messaging, campaign optimisation and conversion tracking.",
      "The process starts with understanding the business goal. One campaign may focus on lead generation, while another may focus on product sales or appointment bookings.",
      "Once the goal is clear, the campaign is built around a specific audience selected by search intent, interests, demographics, location, behaviour, industry, job role or past website activity.",
      "When users interact with Performance Ads, every action is tracked. Poor-performing ads are paused, high-performing ads are scaled and budgets are shifted toward better results.",
      "This continuous improvement is what makes Performance Ads different from simple paid promotion.",
    ],
  },
  {
    title: "What Makes Performance Ads Different from Normal Paid Ads?",
    paragraphs: [
      "The biggest difference is the goal. Normal paid ads may focus mainly on impressions, reach or brand visibility. Performance Ads focus on specific actions that can be measured.",
      "A normal ad campaign may report that 100,000 people saw the ad. A Performance Ads campaign will show how many people clicked, how many submitted a form, how much each lead cost and which campaign generated the best return.",
      "Performance Ads are more accountable because businesses can connect ad spend directly with results.",
      "Performance Ads also depend heavily on data, testing and optimisation.",
    ],
  },
  {
    title: "Which Platforms Are Best for Performance Ads?",
    paragraphs: [
      "The best platform for Performance Ads depends on the business model, audience and campaign goal.",
    ],
    subsections: [
      {
        title: "Google Ads",
        text: "Google Ads are highly effective for search-intent campaigns, lead generation, ecommerce sales, local services, B2B enquiries and high-intent traffic.",
      },
      {
        title: "Meta Ads",
        text: "Meta Ads, including Facebook and Instagram Ads, are useful for visual campaigns, lead generation, remarketing and audience-based targeting.",
      },
      {
        title: "LinkedIn Ads",
        text: "LinkedIn Performance Ads are suitable for B2B companies, consultants, software providers, recruitment firms, manufacturers and professional services.",
      },
      {
        title: "YouTube Ads",
        text: "YouTube Performance Ads help businesses build awareness and conversions through video, explanation and trust-building.",
      },
      {
        title: "Remarketing Ads",
        text: "Remarketing Performance Ads target people who already visited a website, viewed a product, added to cart or interacted with a brand.",
      },
    ],
  },
  {
    title: "How Can Performance Ads Improve Lead Generation?",
    paragraphs: [
      "Performance Ads improve lead generation by reaching users who are already interested or likely to take action.",
      "Instead of waiting for users to find the business organically, Performance Ads actively place the offer in front of the right audience.",
      "For service-based businesses, Performance Ads can generate direct enquiries through landing pages, call extensions, lead forms and WhatsApp buttons.",
      "For B2B businesses, Performance Ads can attract decision-makers by using industry-specific messaging and problem-solving ad copy.",
      "The quality of leads matters as much as the number of leads.",
    ],
    listTitle: "A strong lead generation campaign includes:",
    list: [
      "Clear audience targeting",
      "Strong offer or value proposition",
      "Conversion-focused landing page",
      "Simple enquiry form",
      "Fast-loading website",
      "Trust-building content",
      "Call, WhatsApp or form tracking",
      "Regular campaign optimisation",
    ],
  },
  {
    title: "How Do Performance Ads Help Ecommerce Sales?",
    paragraphs: [
      "Performance Ads are highly effective for ecommerce because every stage of the buying journey can be measured.",
      "Ecommerce businesses can track product views, add-to-cart actions, checkout activity and final purchases.",
      "Google Shopping Ads, Meta catalogue ads, dynamic remarketing ads and conversion campaigns can help ecommerce brands show relevant products to users who are likely to buy.",
      "For ecommerce, success depends on product pricing, website speed, product page quality, trust signals, payment experience and delivery clarity.",
    ],
    listTitle: "Performance Ads help ecommerce businesses by:",
    list: [
      "Increasing product visibility",
      "Bringing high-intent traffic",
      "Recovering abandoned carts",
      "Promoting best-selling products",
      "Testing new product demand",
      "Improving return on ad spend",
      "Scaling profitable campaigns",
    ],
  },
  {
    title: "Why Is Tracking Important in Performance Ads?",
    paragraphs: [
      "Tracking is the backbone of Performance Ads. Without tracking, a business cannot know which campaign is working and which campaign is wasting budget.",
      "When tracking is properly set up, Performance Ads become more intelligent. Platforms can learn from conversion data and optimise delivery toward people who are more likely to take action.",
      "For AEO and GEO visibility, tracking also helps businesses understand user behaviour and create better answer-focused content.",
    ],
    listTitle: "Important tracking elements include:",
    list: [
      "Website conversion tracking",
      "Call tracking",
      "WhatsApp click tracking",
      "Form submission tracking",
      "Purchase tracking",
      "Pixel setup",
      "Google Tag Manager setup",
      "Analytics integration",
      "CRM lead tracking",
    ],
  },
  {
    title: "What Is the Role of Landing Pages in Performance Ads?",
    paragraphs: [
      "A landing page is one of the most important parts of Performance Ads. Even if the ad is strong, a weak landing page can reduce conversions and increase cost.",
      "Performance Ads work best when landing pages are simple, fast, mobile-friendly and focused on one main goal.",
      "A strong landing page includes a clear headline, benefit-focused content, trust badges, testimonials, service details, FAQs and a strong call to action.",
    ],
    listTitle: "A good landing page should clearly answer:",
    list: [
      "What is the service or product?",
      "Why should the user choose this brand?",
      "What problem does it solve?",
      "What proof or trust signals are available?",
      "What action should the user take next?",
    ],
  },
  {
    title: "How Does Audience Targeting Improve Performance Ads?",
    paragraphs: [
      "Audience targeting helps Performance Ads reach people who are more likely to become customers.",
      "Instead of showing ads to everyone, targeting allows businesses to focus on specific groups.",
      "The better the targeting, the better the campaign efficiency. However, targeting should not be too narrow unless the campaign goal requires it.",
      "Performance Ads also benefit from audience segmentation. Cold audiences may need educational content, while remarketing audiences may respond better to direct offers.",
    ],
    listTitle: "Audience targeting may include:",
    list: [
      "Location",
      "Age group",
      "Interests",
      "Search keywords",
      "Online behaviour",
      "Device type",
      "Income group",
      "Industry",
      "Job title",
      "Website visitors",
      "Lookalike audiences",
    ],
  },
  {
    title: "How Can Ad Creatives Improve Performance Ads?",
    paragraphs: [
      "Ad creative is the first thing users notice. In Performance Ads, creative quality directly affects click-through rate, engagement and conversion cost.",
      "A strong Performance Ads creative should be clear, relevant and action-oriented.",
      "Creative testing is important because different users respond to different messages. Testing multiple headlines, images, videos and formats helps identify what works best.",
      "For AI-driven advertising platforms, creative performance data helps the system understand which messages are most effective for different audience groups.",
    ],
    listTitle: "Effective ad creatives often include:",
    list: [
      "Problem-solution messaging",
      "Strong visual design",
      "Clear product or service benefit",
      "Trust-building statement",
      "Limited-time offer",
      "Customer-focused headline",
      "Direct call to action",
    ],
  },
  {
    title: "How Do Performance Ads Support GEO and AEO Strategy?",
    paragraphs: [
      "Performance Ads support GEO and AEO strategy by creating measurable user behaviour signals and helping brands understand what audiences are searching, asking and responding to.",
      "GEO focuses on making content easier for AI-powered search systems to understand, summarise and recommend.",
      "AEO focuses on answering user questions clearly and directly.",
      "When this data is used properly, businesses can improve website content, service pages, FAQs, product pages and ad messaging.",
      "A strong Performance Ads page should use askable headings, direct answers, structured sections and clear service explanations.",
    ],
    listTitle: "Performance Ads reveal:",
    list: [
      "Which questions users ask before converting",
      "Which keywords bring qualified traffic",
      "Which offers attract the right audience",
      "Which landing page sections improve engagement",
      "Which FAQs reduce confusion",
      "Which audience segments respond best",
    ],
  },
  {
    title: "What Are the Main Benefits of Performance Ads?",
    paragraphs: [
      "Performance Ads offer many benefits for businesses that want fast and measurable growth.",
    ],
    subsections: [
      {
        title: "Measurable Results",
        text: "Every campaign can be tracked, including clicks, leads, purchases, cost per result and return on ad spend.",
      },
      {
        title: "Faster Growth",
        text: "Performance Ads can start generating traffic and enquiries quickly compared to slower organic methods.",
      },
      {
        title: "Better Budget Control",
        text: "Budgets can be increased, reduced or shifted based on campaign performance.",
      },
      {
        title: "High Audience Relevance",
        text: "Brands can reach people based on intent, interest, behaviour and location.",
      },
      {
        title: "Continuous Optimisation",
        text: "Campaigns can be improved regularly using real-time performance data.",
      },
      {
        title: "Scalable Campaigns",
        text: "Once a campaign becomes profitable, it can be scaled to reach more users.",
      },
      {
        title: "Stronger Remarketing",
        text: "Brands can re-engage users who already showed interest but did not convert.",
      },
      {
        title: "Better Decision-Making",
        text: "Performance Ads provide data that helps improve marketing, sales and website strategy.",
      },
    ],
  },
  {
    title: "How Much Budget Is Needed for Performance Ads?",
    paragraphs: [
      "The right budget for Performance Ads depends on the industry, competition, location, campaign goal and expected result.",
      "A local service business may start with a smaller budget, while a competitive ecommerce or B2B campaign may need a higher investment.",
      "Instead of asking only how much to spend, businesses should ask what result they want and what acceptable cost per result looks like.",
      "The best approach is to start with a controlled budget, measure results and scale campaigns that show strong performance.",
    ],
  },
  {
    title: "What Is a Good Performance Ads Strategy?",
    paragraphs: [
      "A good Performance Ads strategy starts with business clarity. The campaign must know what it is trying to achieve.",
      "More leads, more sales, more calls and more brand enquiries require different strategies.",
      "The strategy should also match the customer journey. New users may need education, while returning users may need proof, pricing clarity or urgency.",
      "Performance Ads perform best when marketing, design, content and analytics work together.",
    ],
    listTitle: "A successful strategy includes:",
    list: [
      "Clear campaign objective",
      "Accurate audience targeting",
      "Strong offer",
      "Conversion-ready landing page",
      "Proper tracking setup",
      "Multiple ad creatives",
      "Keyword and audience testing",
      "Remarketing funnel",
      "Weekly optimisation",
      "Transparent reporting",
    ],
  },
  {
    title: "How Are Performance Ads Optimised?",
    paragraphs: [
      "Performance Ads are optimised by analysing campaign data and improving weak areas.",
      "Optimisation is not a one-time task. It is an ongoing process.",
      "The goal is to reduce wasted spend and improve conversion efficiency. Over time, optimisation helps Performance Ads become more stable, predictable and profitable.",
    ],
    listTitle: "Common optimisation steps include:",
    list: [
      "Pausing low-performing ads",
      "Increasing budget on winning campaigns",
      "Testing new audiences",
      "Improving landing page content",
      "Adjusting bidding strategy",
      "Refining keywords",
      "Excluding poor-quality traffic",
      "Improving ad copy",
      "Testing new creatives",
      "Reviewing conversion quality",
    ],
  },
  {
    title: "What Metrics Should Businesses Track in Performance Ads?",
    paragraphs: [
      "The most important Performance Ads metrics depend on campaign goals.",
      "For lead generation, cost per qualified lead is more important than cost per raw lead.",
      "For ecommerce, return on ad spend and purchase value are critical.",
      "For B2B, lead quality and sales pipeline value matter more than simple form submissions.",
    ],
    listTitle: "Important metrics include:",
    list: [
      "Impressions",
      "Clicks",
      "Click-through rate",
      "Cost per click",
      "Conversion rate",
      "Cost per lead",
      "Cost per acquisition",
      "Return on ad spend",
      "Lead quality",
      "Revenue generated",
      "Landing page engagement",
    ],
  },
  {
    title: "Why Do Some Performance Ads Fail?",
    paragraphs: [
      "Performance Ads may fail when campaigns are launched without proper strategy, tracking or optimisation.",
      "Many businesses run ads but do not connect them with the right landing page, audience or offer.",
      "Performance Ads require planning and regular management. Running ads without analysis can waste money.",
    ],
    listTitle: "Common reasons Performance Ads fail include:",
    list: [
      "Poor tracking setup",
      "Weak landing page",
      "Unclear offer",
      "Wrong audience targeting",
      "Low-quality creatives",
      "Slow website speed",
      "No remarketing",
      "Poor budget allocation",
      "Lack of testing",
      "Ignoring lead quality",
    ],
  },
  {
    title: "How Can Businesses Choose the Right Performance Ads Partner?",
    paragraphs: [
      "Choosing the right Performance Ads partner is important because paid media requires technical knowledge, creative thinking and data analysis.",
      "A good partner should understand campaign strategy, ad platforms, tracking tools, landing page optimisation and reporting.",
      "They should not only focus on clicks but also on actual business outcomes.",
      "The right partner should explain results clearly and help the business understand where the budget is going and what it is producing.",
    ],
    listTitle: "Businesses should look for a partner that offers:",
    list: [
      "Clear strategy",
      "Transparent reporting",
      "Conversion tracking setup",
      "Creative testing",
      "Landing page guidance",
      "Budget planning",
      "Regular optimisation",
      "ROI-focused approach",
    ],
  },
  {
    title: "How Do Performance Ads Help Local Businesses?",
    paragraphs: [
      "Performance Ads are very useful for local businesses because they can target people in specific cities, areas or service locations.",
      "A clinic, agency, real estate company, restaurant, coaching institute, repair service or local store can use Performance Ads to reach nearby customers.",
      "Local Performance Ads can drive calls, direction requests, WhatsApp messages, appointment bookings and store visits.",
      "For local campaigns, location targeting, call extensions, local keywords, map visibility and mobile-friendly landing pages are very important.",
    ],
  },
  {
    title: "How Do Performance Ads Help B2B Companies?",
    paragraphs: [
      "B2B companies can use Performance Ads to generate enquiries from decision-makers and industry-specific audiences.",
      "Platforms like Google and LinkedIn are especially useful for B2B Performance Ads.",
      "B2B Performance Ads can promote services, software, manufacturing solutions, consulting, exports, logistics, professional services and enterprise products.",
      "The B2B buying journey is usually longer than B2C, so B2B Performance Ads should include lead nurturing, remarketing, downloadable resources, case studies, service pages and strong trust signals.",
      "For B2B campaigns, quality matters more than quantity.",
    ],
  },
  {
    title: "How Do Performance Ads Help Build Brand Trust?",
    paragraphs: [
      "Although Performance Ads are focused on results, they also support brand trust.",
      "When users repeatedly see a brand across Google, social media, YouTube and remarketing campaigns, the brand becomes more familiar.",
      "Performance Ads should not always push hard selling. Sometimes educational ads and trust-building content help users move closer to conversion.",
    ],
    listTitle: "Trust can be improved by using:",
    list: [
      "Customer reviews",
      "Case studies",
      "Certifications",
      "Testimonials",
      "Founder or team visibility",
      "Clear pricing or process",
      "Professional landing pages",
      "Helpful FAQ sections",
      "Educational ad content",
    ],
  },
  {
    title: "What Is the Future of Performance Ads?",
    paragraphs: [
      "The future of Performance Ads is becoming more AI-driven, data-focused and creative-led.",
      "Advertising platforms are using machine learning to improve targeting, bidding and campaign delivery.",
      "However, human strategy is still important. AI can optimise delivery, but businesses still need strong offers, good creatives, clear messaging and accurate tracking.",
      "As AI search grows, businesses will need both paid visibility and helpful answer-based content.",
      "Performance Ads will work best when connected with SEO, GEO, AEO, content marketing and conversion optimisation.",
    ],
    listTitle: "Future-ready Performance Ads will focus on:",
    list: [
      "First-party data",
      "AI-powered campaign optimisation",
      "Better landing page experience",
      "Personalised ad journeys",
      "Video-led advertising",
      "Stronger conversion tracking",
      "Privacy-friendly measurement",
      "GEO and AEO-ready content",
    ],
  },
  {
    title: "Why Should Businesses Invest in Performance Ads?",
    paragraphs: [
      "Businesses should invest in Performance Ads because they provide speed, control and measurable growth.",
      "Instead of waiting for results without clarity, Performance Ads allow brands to understand exactly what is working.",
      "Performance Ads are suitable for businesses that want more enquiries, more sales, more qualified traffic and better marketing accountability.",
      "When managed properly, Performance Ads become more than advertising. They become a growth system powered by data, creativity and continuous improvement.",
    ],
  },
  {
    title: "Conclusion",
    paragraphs: [
      "Performance Ads are one of the most effective ways to generate measurable business growth in today’s digital market.",
      "They help businesses reach the right audience, track every important action and optimise campaigns for better results.",
      "From lead generation to ecommerce sales, from local campaigns to B2B marketing, Performance Ads give brands the ability to advertise with clarity and confidence.",
      "When combined with strong landing pages, accurate tracking, creative testing and GEO/AEO-friendly content, Performance Ads can become a powerful engine for long-term digital growth.",
      "For any business that wants more control over marketing spend and better visibility into results, Performance Ads are a smart and scalable solution.",
    ],
  },
];

const faqs = [
  {
    question: "What are Performance Ads?",
    answer:
      "Performance Ads are paid digital advertisements focused on measurable actions such as leads, sales, calls, sign-ups or purchases. Success is measured by real business outcomes instead of only impressions or reach.",
  },
  {
    question: "Why are Performance Ads important for businesses?",
    answer:
      "Performance Ads help businesses spend advertising budgets more wisely by tracking clicks, conversions, cost per lead and return on ad spend.",
  },
  {
    question: "How do Performance Ads generate leads?",
    answer:
      "Performance Ads generate leads by targeting people likely to need a product or service and sending them to a landing page, form, call button or WhatsApp enquiry option.",
  },
  {
    question: "What platforms are best for Performance Ads?",
    answer:
      "The best platforms include Google Ads, Meta Ads, Instagram Ads, LinkedIn Ads, YouTube Ads and remarketing networks. The right platform depends on the business goal.",
  },
  {
    question: "How much budget is needed for Performance Ads?",
    answer:
      "Budget depends on industry, location, competition and campaign goal. The ideal budget should allow enough data for testing, learning and optimisation.",
  },
  {
    question: "What is the difference between Performance Ads and normal ads?",
    answer:
      "Normal ads may focus on reach or awareness, while Performance Ads focus on measurable actions like leads, purchases and cost per conversion.",
  },
  {
    question: "How long does it take for Performance Ads to work?",
    answer:
      "Performance Ads can generate traffic quickly, but stable results usually need testing, optimisation, audience learning and landing page improvement.",
  },
  {
    question: "Why do Performance Ads need landing pages?",
    answer:
      "Landing pages turn visitors into leads or customers by explaining the offer, building trust and giving users a clear action to take.",
  },
  {
    question: "How are Performance Ads optimised?",
    answer:
      "Performance Ads are optimised by testing creatives, adjusting audiences, refining keywords, improving landing pages and shifting budget toward better-performing campaigns.",
  },
  {
    question: "Are Performance Ads good for small businesses?",
    answer:
      "Yes. Performance Ads offer budget control, location targeting and measurable results, making them useful for small businesses that want calls, enquiries, bookings and website traffic.",
  },
];

function SectionHeader({ eyebrow, title, text, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-9 max-w-4xl"
    >
      {eyebrow ? (
        <p
          className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] ${
            light ? "text-white/65" : "text-[#7392FB]"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={`text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl ${
          light ? "text-white" : "text-[#0d2d47]"
        }`}
      >
        {title}
      </h2>

      {text ? (
        <p
          className={`mt-5 max-w-3xl text-base leading-8 ${
            light ? "text-white/72" : "text-[#0d2d47]/72"
          }`}
        >
          {text}
        </p>
      ) : null}
    </motion.div>
  );
}

function MovingStrip() {
  return (
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
          <h3 className="text-base font-black uppercase text-[#0d2d47]">
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
      className="overflow-hidden rounded-2xl border border-[#0d2d47]/10 bg-white/60 shadow-[0_18px_55px_rgba(13,45,71,0.08)] backdrop-blur-md"
    >
      <button
        type="button"
        onClick={() => setOpen(isOpen ? -1 : index)}
        className="flex w-full cursor-pointer items-start justify-between gap-3 px-4 py-5 text-left transition hover:bg-white/45 sm:gap-5 sm:px-7 sm:py-6"
      >
        <div className="flex gap-4">
          <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0d2d47] text-sm font-black text-white sm:flex">
            {(index + 1).toString().padStart(2, "0")}
          </span>

          <h2 className="text-lg font-black uppercase leading-tight text-[#0d2d47] sm:text-2xl lg:text-[27px]">
            {section.title}
          </h2>
        </div>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7392FB] text-xl font-light text-white sm:h-10 sm:w-10 sm:text-2xl"
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

              {section.listTitle ? (
                <h3 className="mt-6 text-base font-black uppercase tracking-[0.08em] text-[#0d2d47]">
                  {section.listTitle}
                </h3>
              ) : null}

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
            eyebrow="Performance Ads FAQs"
            title="Common Questions About Paid Growth"
            text="Open each question to understand how performance advertising works, how it is tracked, and how it can support business growth."
          />
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-white/35 bg-white/35 backdrop-blur-md"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/40"
                >
                  <span className="text-base font-black uppercase text-[#0d2d47] md:text-lg">
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

export default function PerformanceAdsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#EAEBDB] text-[#0d2d47]">
      {/* HERO */}
      <section
        className="relative overflow-hidden px-4 pb-14 pt-36 sm:px-6 sm:pt-40 md:px-10 md:pb-20 md:pt-44"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 38%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <div className="pointer-events-none absolute bottom-[-4rem] right-[-1rem] select-none text-[24vw] font-black uppercase leading-none tracking-tighter text-[#0d2d47]/[0.035]">
          ADS
        </div>

        <div className="pointer-events-none absolute -left-32 -top-32 h-[340px] w-[340px] rounded-full bg-white/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-28 h-[430px] w-[430px] rounded-full bg-[#7392FB]/35 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="mb-5 inline-flex bg-[#0d2d47] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white shadow-[4px_4px_0_rgba(115,146,251,0.45)]">
              Nova Techscience · Performance Ads
            </p>

            <h1 className="max-w-4xl text-[42px] font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[86px]">
              Paid Campaigns That{" "}
              <span className="text-[#7392FB]">Convert</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#0d2d47]/75 md:text-lg">
              Performance Ads generate measurable leads, sales, enquiries,
              traffic and revenue growth through targeted paid media, smart
              tracking, creative testing and continuous optimisation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-md bg-[#0d2d47] px-7 py-3 text-center text-sm font-black text-white shadow-[5px_5px_0_#7392FB] transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0_#7392FB]"
              >
                Start Ads Campaign
              </Link>

              <Link
                href="/portfolio"
                className="rounded-md border-2 border-[#0d2d47] bg-white/20 px-7 py-3 text-center text-sm font-black text-[#0d2d47] backdrop-blur-md transition hover:bg-[#0d2d47] hover:text-white"
              >
                View Results →
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

      <MovingStrip />

      {/* WHY PERFORMANCE ADS */}
      <section className="bg-[#EAEBDB] px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.12fr_0.88fr]">
          <div>
            <SectionHeader
              eyebrow="Why It Matters"
              title="Performance Ads Turn Budget Into Measurable Growth"
            />

            <div className="space-y-4 text-base leading-8 text-[#0d2d47]/75">
              <p>
                Performance Ads help brands move beyond simple awareness by
                focusing on measurable actions such as leads, purchases, calls,
                sign-ups, bookings and revenue.
              </p>

              <p>
                A strong paid strategy connects platform targeting, ad creative,
                landing pages, tracking and optimisation into one growth system.
              </p>

              <p>
                Instead of guessing what works, your business can see which
                campaign, audience, creative and landing page drives the best
                result.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-7 rounded-2xl bg-[#0d2d47] p-6 text-white shadow-[0_22px_65px_rgba(13,45,71,0.22)]"
            >
              <p className="text-xl font-bold italic leading-relaxed">
                “Performance advertising is not only about clicks — it is about
                building a measurable system that improves every week.”
              </p>
              <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-white/45">
                Nova Techscience Paid Growth Team
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
                  {item.icon}
                </span>
                <div>
                  <p className="text-2xl font-black text-[#7392FB]">
                    {item.value}
                  </p>
                  <p className="text-sm font-medium leading-relaxed text-[#0d2d47]/65">
                    {item.text}
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
            eyebrow="Platform Expertise"
            title="Paid Media Platforms We Manage For Growth"
            text="Every ad platform behaves differently. We build platform-specific campaigns for search intent, social discovery, B2B targeting, video awareness, ecommerce sales and remarketing."
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
                className="group relative overflow-hidden rounded-2xl border border-[#0d2d47]/10 bg-[#EAEBDB] p-6 shadow-[0_18px_55px_rgba(13,45,71,0.06)]"
              >
                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-[#7392FB] transition group-hover:scale-x-100" />

                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C4CFE3] text-3xl">
                  {item.icon}
                </span>

                <h3 className="text-2xl font-black uppercase">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#0d2d47]/70">
                  {item.text}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#0d2d47]/10 bg-white/60 px-3 py-1 text-xs font-black text-[#0d2d47]/70"
                    >
                      {tag}
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
            eyebrow="Our Process"
            title="Nova Techscience's 4-Step Performance Ads Framework"
            text="Every successful paid campaign starts with research, tracking, structured testing and continuous optimization."
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

                <span className="mt-4 block text-3xl">{item.icon}</span>

                <h3 className="mt-4 text-xl font-black uppercase">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/62">
                  {item.text}
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
            eyebrow="Campaign Excellence"
            title="Performance Advertising Systems We Build"
            text="Each campaign format is designed to support a specific business goal, from awareness and traffic to lead generation, ecommerce sales and remarketing."
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
                  <h3 className="text-xl font-black uppercase">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#0d2d47]/70">
                    {item.text}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#7392FB]/20 bg-[#7392FB]/10 px-3 py-1 text-xs font-black text-[#0d2d47]"
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

      {/* RESULTS */}
      <section className="bg-[#7392FB] px-4 py-14 text-white sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1180px] text-center">
          <SectionHeader
            eyebrow="Proven Results"
            title="Paid Campaign Results Built Around Measurable Action"
            text="We focus on metrics that matter: cost per lead, conversion rate, ROAS, lead quality, revenue and campaign scalability."
            light
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {resultCards.map((item, i) => (
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

      {/* ANALYTICS */}
      <section className="bg-[#C4CFE3] px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader
              eyebrow="Data & Analytics"
              title="Performance Tracking That Shows What Actually Works"
            />

            <div className="space-y-4 text-base leading-8 text-[#0d2d47]/75">
              <p>
                Performance Ads only work properly when tracking is clean. We
                monitor campaign visibility, clicks, cost per result, lead
                quality, conversion actions and revenue impact.
              </p>

              <p>
                Reporting is designed to explain what happened, why it happened,
                and what should be improved next.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {analyticsMetrics.map(([icon, title, sub], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.035 }}
                className="rounded-2xl border border-[#0d2d47]/10 bg-white/50 p-4 text-center shadow-[4px_4px_0_rgba(13,45,71,0.08)] backdrop-blur-md"
              >
                <span className="text-2xl">{icon}</span>
                <p className="mt-2 text-sm font-black uppercase">{title}</p>
                <p className="mt-1 text-xs leading-snug text-[#0d2d47]/55">
                  {sub}
                </p>
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
          <SectionHeader
            eyebrow="Complete Performance Ads Strategy"
            title="Explore Our Full Paid Growth Framework"
            text="Open each section to read the full Performance Ads, GEO, AEO, lead generation, ecommerce, tracking, targeting and optimisation strategy."
          />

          <ContentDropdownList />
        </div>
      </section>

      <FAQAccordion />

      {/* CTA */}
      <section className="bg-[#0d2d47] px-4 py-16 text-white sm:px-6 md:px-10 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[1180px] text-center"
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#7392FB]">
            Scale With Ads
          </p>

          <h2 className="mx-auto max-w-5xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s Turn Ad Spend Into{" "}
            <span className="text-[#7392FB]">Business Growth</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/58">
            Build a performance advertising system focused on measurable leads,
            sales, conversions and scalable campaign growth.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-white px-7 py-3 text-sm font-black text-[#0d2d47] shadow-[5px_5px_0_#7392FB] transition hover:-translate-x-1 hover:-translate-y-1"
            >
              Start Performance Ads
            </Link>

            <Link
              href="/portfolio"
              className="rounded-md border border-white/20 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}