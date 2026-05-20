export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string[];
  image: string;
  liveUrl: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "brand-strategy",
    title: "Brand Strategy",
    sector: "Branding",
    summary: "Crafted a clear positioning system and visual language to strengthen market recall.",
    challenge:
      "The brand had fragmented messaging across channels, making trust-building and differentiation difficult.",
    solution:
      "We built a unified brand strategy with audience-specific messaging, voice guidelines, and a consistent visual framework.",
    outcome: [
      "Stronger brand consistency across digital touchpoints",
      "Higher engagement on branded campaigns",
      "Clearer messaging for sales and performance marketing",
    ],
    image: "/caseStudy/Brand%20Strategy.png",
    liveUrl: "https://www.novatechsciences.com/",
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    sector: "SEO",
    summary: "Improved rankings and discoverability with technical and on-page SEO improvements.",
    challenge:
      "Low organic visibility and weak keyword footprint in competitive service categories.",
    solution:
      "Implemented technical SEO fixes, content hierarchy improvements, schema optimization, and intent-focused landing pages.",
    outcome: [
      "Improved keyword visibility in target categories",
      "Higher organic traffic quality",
      "Better crawl health and page indexing stability",
    ],
    image: "/caseStudy/SEO.png",
    liveUrl: "https://www.ivexiapharma.com/",
  },
  {
    slug: "social-media",
    title: "Social Media",
    sector: "Social",
    summary: "Built a focused social content engine to increase engagement and audience trust.",
    challenge:
      "Inconsistent posting and weak content structure were reducing audience interaction.",
    solution:
      "Designed a monthly social framework with campaign themes, short-form creative systems, and performance tracking loops.",
    outcome: [
      "More consistent audience engagement",
      "Improved reach across priority platforms",
      "Faster campaign iteration with data-led creative updates",
    ],
    image: "/caseStudy/Social%20media%20marketing.jpg",
    liveUrl: "https://www.edpharma.co/",
  },
  {
    slug: "performance-ads",
    title: "Performance Ads",
    sector: "Paid Media",
    summary: "Scaled paid campaigns with tighter targeting, creatives, and conversion-focused landing journeys.",
    challenge:
      "Ad spends were growing but conversions and lead quality were not improving proportionally.",
    solution:
      "Reworked account structure, audience segmentation, and creatives, then aligned landing pages with ad intent.",
    outcome: [
      "Better cost-efficiency across campaigns",
      "Improved lead quality from paid channels",
      "More predictable performance at scale",
    ],
    image: "/caseStudy/performance%20ads.png",
    liveUrl: "https://www.bio-peptides.com/",
  },
  {
    slug: "web-design",
    title: "Web Design",
    sector: "Web",
    summary: "Designed a premium, conversion-driven web experience with stronger trust signals.",
    challenge:
      "The previous site looked dated, had weak user flow, and lacked clear conversion paths.",
    solution:
      "Created a modern UI system with clearer navigation, focused service storytelling, and stronger call-to-action structure.",
    outcome: [
      "Improved usability and page flow",
      "Stronger visual trust for first-time visitors",
      "Higher conversion intent across key pages",
    ],
    image: "/caseStudy/Web%20Development.png",
    liveUrl: "https://www.larksoispharma.com/",
  },
  {
    slug: "ecommerce-growth",
    title: "E-Commerce Growth",
    sector: "E-Commerce",
    summary: "Optimized growth funnels for product discovery, checkout flow, and retention.",
    challenge:
      "Users were dropping during product exploration and checkout, limiting revenue growth.",
    solution:
      "Improved category flow, PDP clarity, trust components, and checkout simplification while aligning with acquisition campaigns.",
    outcome: [
      "Smoother buyer journey from discovery to checkout",
      "Higher conversion momentum on core products",
      "Better alignment between ads and onsite experience",
    ],
    image: "/caseStudy/Ecommerce%20Growth.png",
    liveUrl: "https://www.kvalogistics.nl/",
  },
  {
    slug: "analytics-data",
    title: "Analytics & Data",
    sector: "Analytics",
    summary: "Built actionable reporting layers for faster decisions and clearer growth tracking.",
    challenge:
      "Data existed across tools but decision-making was slow due to fragmented reporting.",
    solution:
      "Set up unified event tracking, KPI dashboards, and weekly decision frameworks mapped to business goals.",
    outcome: [
      "Faster insight-to-action cycles",
      "Cleaner visibility into channel performance",
      "Better confidence in scaling decisions",
    ],
    image: "/caseStudy/Analytics%20%26%20data.png",
    liveUrl: "https://asblogi.com/",
  },
];

export const caseStudyMap: Record<string, CaseStudy> = Object.fromEntries(
  caseStudies.map((item) => [item.slug, item])
);
