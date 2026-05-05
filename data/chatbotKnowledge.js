export const BOT_NAME = "Nova";

export const OPENING_MESSAGE =
  "Hi, welcome to NovaTech. I’m here to help you with website development, SEO, social media marketing, branding, and digital growth solutions. What are you looking to improve today?";

export const SERVICES = [
  {
    name: "Website Development",
    keywords: [
      "website",
      "web development",
      "landing page",
      "ecommerce",
      "e-commerce",
      "ui",
      "ux",
      "website development",
      "business website",
    ],
    answer:
      "We create custom business websites, landing pages, e-commerce websites, responsive designs, modern UI/UX layouts, and fast-loading websites. Do you already have a website or do you want to build a new one?",
  },
  {
    name: "SEO Services",
    keywords: [
      "seo",
      "google ranking",
      "rank",
      "keyword",
      "local seo",
      "technical seo",
      "seo services",
    ],
    answer:
      "We provide on-page SEO, technical SEO, local SEO, keyword research, content strategy, and Google ranking improvement plans. Do you want SEO for a new website or an existing website?",
  },
  {
    name: "Social Media Marketing",
    keywords: [
      "social media",
      "instagram",
      "facebook",
      "linkedin",
      "reels",
      "post design",
      "social media marketing",
    ],
    answer:
      "We help with Instagram, Facebook, and LinkedIn marketing, including content planning, post design, captions, reels strategy, and campaign planning. Which platform do you want to grow?",
  },
  {
    name: "Paid Ads",
    keywords: [
      "ads",
      "google ads",
      "meta ads",
      "paid ads",
      "advertising",
      "retargeting",
      "paid advertising",
    ],
    answer:
      "We create and manage Google Ads and Meta Ads campaigns focused on leads, traffic, conversions, retargeting, and measurable business results. Are you looking for leads, sales, or website traffic?",
  },
  {
    name: "Branding",
    keywords: [
      "branding",
      "logo",
      "brand identity",
      "color palette",
      "typography",
      "brand guidelines",
    ],
    answer:
      "We help businesses build a complete brand identity, including logo design, colors, typography, brand guidelines, and creative direction. Do you want a new brand identity or improvement of an existing brand?",
  },
  {
    name: "Content Marketing",
    keywords: [
      "content",
      "blog",
      "copywriting",
      "website content",
      "captions",
      "description",
      "content marketing",
    ],
    answer:
      "We create website content, blog writing, SEO content, social media captions, product descriptions, and service page content. Do you need content for a website, SEO, or social media?",
  },
  {
    name: "Lead Generation",
    keywords: [
      "lead",
      "leads",
      "lead generation",
      "crm",
      "whatsapp",
      "contact form",
    ],
    answer:
      "We can help generate leads using landing pages, paid ads, SEO, WhatsApp enquiry flow, contact forms, CRM integration, and conversion tracking. What type of leads does your business need?",
  },
];

export const FAQS = [
  {
    question: "What services do you provide?",
    keywords: ["services", "what do you provide", "offer"],
    answer:
      "We provide website development, SEO, social media marketing, branding, paid advertising, content marketing, and lead generation services for businesses that want to grow online. Which service are you interested in?",
  },
  {
    question: "Can you create a website for my business?",
    keywords: [
      "create website",
      "business website",
      "make website",
      "build website",
    ],
    answer:
      "Yes, we create modern, responsive, fast-loading websites for businesses, startups, agencies, and e-commerce brands. We can also design landing pages for lead generation. Do you want a simple website or a custom website?",
  },
  {
    question: "Do you provide SEO services?",
    keywords: ["provide seo", "seo service", "google seo"],
    answer:
      "Yes, we provide on-page SEO, technical SEO, keyword research, local SEO, content optimization, and ranking improvement strategies to help your website perform better on Google. Do you already have a website?",
  },
  {
    question: "Can you manage my social media?",
    keywords: [
      "manage social media",
      "social media management",
      "instagram management",
    ],
    answer:
      "Yes, we can help with social media content planning, post design, captions, campaign strategy, and growth-focused marketing for Instagram, Facebook, and LinkedIn. Which platform do you want to focus on?",
  },
  {
    question: "Do you run Google Ads or Meta Ads?",
    keywords: ["google ads", "meta ads", "facebook ads", "instagram ads"],
    answer:
      "Yes, we create and manage paid advertising campaigns on Google and Meta platforms. Our focus is on lead generation, traffic, conversions, and measurable business results. Do you want ads for leads or sales?",
  },
  {
    question: "How much does a website cost?",
    keywords: ["website cost", "website price", "how much", "pricing", "charges"],
    answer:
      "Website pricing depends on the design, number of pages, features, and project requirements. A basic website costs less, while custom or e-commerce websites need a higher budget. Would you like to request a quote?",
  },
  {
    question: "How long does it take to build a website?",
    keywords: ["how long", "timeline", "website time", "days to build"],
    answer:
      "A simple website can usually be completed faster, while custom websites, e-commerce platforms, or advanced designs take more time. The timeline depends on content, features, and approval speed. What type of website do you need?",
  },
  {
    question: "Can you improve my existing website?",
    keywords: [
      "improve website",
      "redesign",
      "existing website",
      "website update",
    ],
    answer:
      "Yes, we can redesign your website, improve UI/UX, optimize page speed, fix SEO issues, update content, and make it more professional and conversion-focused. What problem are you facing with your current website?",
  },
  {
    question: "Do you help with branding?",
    keywords: ["help with branding", "brand design", "logo design"],
    answer:
      "Yes, we help businesses create a complete brand identity, including logo design, colors, typography, brand style, and visual direction for online and offline use. Do you already have a logo?",
  },
  {
    question: "Can you help my business get more leads?",
    keywords: ["get more leads", "business leads", "generate leads"],
    answer:
      "Yes, we can create a lead generation strategy using landing pages, SEO, paid ads, WhatsApp enquiry forms, contact forms, and conversion tracking. What type of business do you run?",
  },
  {
    question: "Do you work with small businesses?",
    keywords: ["small business", "startup", "new business"],
    answer:
      "Yes, we work with startups, small businesses, growing brands, and established companies. We can suggest a marketing plan based on your budget and business goals. What is your business category?",
  },
  {
    question: "How can I contact your team?",
    keywords: ["contact", "call", "email", "talk to team", "consultation"],
    answer:
      "You can share your name, phone number, email, business type, and requirement. Our team will contact you with the right solution. Would you like to share your details now?",
  },
];

export const LEAD_FIELDS = [
  {
    key: "name",
    question: "Great. What is your name?",
  },
  {
    key: "business",
    question: "What business do you run?",
  },
  {
    key: "service",
    question:
      "Which service are you interested in? Website, SEO, social media, branding, paid ads, content, or lead generation?",
  },
  {
    key: "website",
    question: "Do you already have a website?",
  },
  {
    key: "contact",
    question: "What is your phone number or email?",
  },
  {
    key: "budget",
    question: "What is your budget range?",
  },
  {
    key: "startTime",
    question: "When do you want to start?",
  },
];

export const QUICK_REPLIES = [
  "Website Development",
  "SEO Services",
  "Social Media Marketing",
  "Paid Ads",
  "Branding",
  "Content Marketing",
  "Lead Generation",
  "Request a Quote",
  "View FAQs",
];

export const SERVICE_MENUS = {
  "Website Development": {
    title: "Website Development",
    intro: "Choose what you need for website development:",
    options: [
      {
        label: "Custom Business Website",
        answer:
          "We create custom business websites with modern UI, responsive design, fast loading speed, and professional layouts. This is ideal for businesses that want a strong online presence. Do you want a new website or redesign?",
      },
      {
        label: "Landing Page",
        answer:
          "We design conversion-focused landing pages for lead generation, ads, product launches, and service promotions. The goal is to turn visitors into enquiries. Would you like a landing page for Google Ads or Meta Ads?",
      },
      {
        label: "E-commerce Website",
        answer:
          "We build e-commerce websites with product pages, cart, checkout flow, payment integration, responsive design, and clean product presentation. What type of products do you want to sell online?",
      },
      {
        label: "UI/UX Redesign",
        answer:
          "We can redesign your existing website with better UI/UX, improved structure, modern visuals, mobile responsiveness, and conversion-focused sections. Do you already have a live website?",
      },
      {
        label: "Website Speed Optimization",
        answer:
          "We improve website speed by optimizing images, layout, code, loading performance, and technical structure. A faster website improves user experience and can support SEO performance. Do you want us to check your current website?",
      },
      {
        label: "Website Maintenance",
        answer:
          "We provide website maintenance support including updates, content changes, bug fixes, design improvements, and regular checks. Do you need monthly maintenance or one-time support?",
      },
    ],
  },

  "SEO Services": {
    title: "SEO Services",
    intro: "Choose the SEO service you want to know about:",
    options: [
      {
        label: "On-page SEO",
        answer:
          "On-page SEO includes title tags, meta descriptions, headings, internal links, image optimization, content structure, and keyword placement. Do you want SEO for your full website or selected pages?",
      },
      {
        label: "Technical SEO",
        answer:
          "Technical SEO focuses on speed, indexing, sitemap, robots file, crawl errors, schema, mobile usability, and website structure. Do you want us to audit your website?",
      },
      {
        label: "Local SEO",
        answer:
          "Local SEO helps businesses appear for location-based searches and Google Business Profile visibility. It is useful for clinics, agencies, shops, service providers, and local companies. Which city do you target?",
      },
      {
        label: "Keyword Research",
        answer:
          "We research keywords based on your business, competition, search volume, and user intent. This helps build better SEO pages and content strategy. What business category do you want keywords for?",
      },
      {
        label: "SEO Content Strategy",
        answer:
          "SEO content strategy includes service pages, blogs, landing pages, FAQs, and keyword-focused content planning. This helps your website attract relevant visitors. Do you need content for services or blogs?",
      },
    ],
  },

  "Social Media Marketing": {
    title: "Social Media Marketing",
    intro: "Choose the social media service you need:",
    options: [
      {
        label: "Instagram Marketing",
        answer:
          "We help with Instagram content planning, post design, reels strategy, captions, hashtags, and brand presentation. Do you want organic growth or paid campaign support?",
      },
      {
        label: "Facebook Marketing",
        answer:
          "We manage Facebook content, campaigns, page updates, ad creatives, and audience-focused promotions. Is your goal awareness, leads, or sales?",
      },
      {
        label: "LinkedIn Marketing",
        answer:
          "LinkedIn marketing is ideal for B2B brands, agencies, consultants, and professional services. We help with content planning, profile branding, and lead-focused posts. What industry do you work in?",
      },
      {
        label: "Post Design",
        answer:
          "We create professional social media post designs that match your brand colors, tone, and campaign goals. Do you need daily, weekly, or monthly post designs?",
      },
      {
        label: "Reels Strategy",
        answer:
          "We plan reels ideas, hooks, captions, creative direction, and campaign-based short video strategy. Do you want reels for brand awareness or lead generation?",
      },
    ],
  },

  "Paid Ads": {
    title: "Paid Ads",
    intro: "Choose the paid advertising service:",
    options: [
      {
        label: "Google Ads",
        answer:
          "We run Google Ads for search campaigns, service enquiries, website traffic, and lead generation. We focus on proper keywords, ad copy, tracking, and conversion improvement. What service do you want to advertise?",
      },
      {
        label: "Meta Ads",
        answer:
          "We create Meta Ads for Facebook and Instagram using campaign strategy, creatives, audience targeting, and lead forms. Do you want leads, sales, or brand awareness?",
      },
      {
        label: "Lead Generation Ads",
        answer:
          "Lead generation ads are designed to collect enquiries through forms, landing pages, WhatsApp, or contact pages. What type of leads do you want?",
      },
      {
        label: "Retargeting Ads",
        answer:
          "Retargeting ads help reconnect with people who visited your website or interacted with your brand. It is useful for improving conversions. Do you already have website traffic?",
      },
      {
        label: "Conversion Tracking",
        answer:
          "Conversion tracking helps measure leads, calls, form submissions, purchases, and campaign results. This helps improve advertising performance. Do you already have tracking installed?",
      },
    ],
  },

  Branding: {
    title: "Branding",
    intro: "Choose the branding service:",
    options: [
      {
        label: "Logo Design",
        answer:
          "We design modern and professional logos based on your business type, target audience, and brand personality. Do you want a minimal, premium, bold, or creative logo style?",
      },
      {
        label: "Brand Identity",
        answer:
          "Brand identity includes your logo, colors, typography, design style, and visual direction. It helps your business look consistent and professional. Are you creating a new brand?",
      },
      {
        label: "Color Palette",
        answer:
          "We create brand color palettes that match your business personality and industry positioning. Do you want a premium, modern, corporate, or energetic color style?",
      },
      {
        label: "Typography",
        answer:
          "Typography selection helps your brand look consistent across website, social media, and marketing materials. Do you already have a preferred font style?",
      },
      {
        label: "Brand Guidelines",
        answer:
          "Brand guidelines define how your logo, colors, fonts, and visuals should be used across platforms. This is useful for long-term brand consistency. Do you need guidelines for your team?",
      },
    ],
  },

  "Content Marketing": {
    title: "Content Marketing",
    intro: "Choose the content service:",
    options: [
      {
        label: "Website Content",
        answer:
          "We write professional website content for home pages, about pages, service pages, landing pages, and contact sections. Do you need content for a new website or existing website?",
      },
      {
        label: "Blog Writing",
        answer:
          "We create blog content based on SEO keywords, user intent, and business topics. Blogs can help improve visibility and educate visitors. What topics do you want blogs on?",
      },
      {
        label: "SEO Content",
        answer:
          "SEO content is written with keywords, structure, headings, FAQs, and search intent in mind. It helps your website become more useful for visitors and search engines. Which page needs SEO content?",
      },
      {
        label: "Social Media Captions",
        answer:
          "We write clear, engaging captions for Instagram, Facebook, and LinkedIn posts. Captions can support engagement, awareness, and enquiries. Do you need captions with post ideas?",
      },
    ],
  },

  "Lead Generation": {
    title: "Lead Generation",
    intro: "Choose the lead generation service:",
    options: [
      {
        label: "Landing Page Strategy",
        answer:
          "A landing page strategy focuses on clear messaging, strong CTA, enquiry forms, WhatsApp flow, and conversion-focused design. What service or product do you want leads for?",
      },
      {
        label: "WhatsApp Enquiry Flow",
        answer:
          "WhatsApp enquiry flow helps visitors contact your business quickly through pre-filled messages, buttons, and lead-focused CTAs. Do you want WhatsApp added to your website?",
      },
      {
        label: "Contact Form Setup",
        answer:
          "We can set up contact forms for enquiries, quote requests, consultation bookings, and service-specific leads. Do you want form details sent to email or WhatsApp?",
      },
      {
        label: "CRM Integration",
        answer:
          "CRM integration helps organize leads, track enquiries, and manage follow-ups. It is useful for growing businesses that receive regular enquiries. Which CRM do you use?",
      },
      {
        label: "Paid Lead Campaigns",
        answer:
          "Paid lead campaigns use Google Ads or Meta Ads to bring targeted enquiries. We combine ads, landing pages, and tracking for better results. What is your monthly ad budget range?",
      },
    ],
  },
};

export function buildKnowledgePrompt() {
  return `
You are NovaTech Assistant, a professional chatbot for a digital marketing agency.

Business type:
Digital marketing agency offering website development, SEO, social media marketing, branding, paid ads, content marketing, lead generation, and business growth strategy.

Tone:
Professional, friendly, modern, confident, helpful, and simple to understand. Avoid robotic answers.

Main goals:
- Answer website-related questions.
- Explain digital marketing services.
- Help users choose the right service.
- Collect user details for leads.
- Guide users to contact, book a consultation, or request a quote.
- Give short but useful replies.

Important rules:
- Keep answers short and clear.
- Do not give fake pricing.
- Do not guarantee 100% Google ranking.
- Always guide visitors toward consultation, quote request, or contact.
- End with one helpful follow-up question when possible.

Services:
${SERVICES.map((service) => `- ${service.name}: ${service.answer}`).join("\n")}

Service menus:
${Object.values(SERVICE_MENUS)
  .map(
    (menu) =>
      `- ${menu.title}: ${menu.options
        .map((option) => `${option.label} - ${option.answer}`)
        .join(" | ")}`
  )
  .join("\n")}

FAQs:
${FAQS.map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`).join("\n\n")}

Fallback:
If you do not know something, say:
"I’ll need a few more details to guide you properly. Please share your requirement, and our team will assist you."
`;
}