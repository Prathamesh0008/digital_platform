import SeoServicesClient from "./SeoServicesClient";
import { absoluteUrl, siteName } from "@/lib/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.novatechscience.com/services/seo-services/#service",
      name: "SEO Services",
      serviceType: "Search Engine Optimization Services",
      description:
        "Nova Techscience provides professional SEO services including technical SEO, keyword research, content optimisation, local SEO, AI SEO, authority building and search visibility strategy to improve rankings, organic traffic and lead generation.",
      provider: {
        "@type": "Organization",
        "@id": "https://www.novatechscience.com/#organization",
        name: "Nova Techscience",
        url: "https://www.novatechscience.com/",
      },
      areaServed: [
        { "@type": "Place", name: "India" },
        { "@type": "Place", name: "United States" },
        { "@type": "Place", name: "Europe" },
        { "@type": "Place", name: "International" },
      ],
      audience: {
        "@type": "Audience",
        audienceType:
          "Businesses, startups, online service providers, ecommerce brands and digital-first companies",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SEO Services Offered by Nova Techscience",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Technical SEO",
              description:
                "Technical SEO improves website structure, speed, crawlability, indexing, structured data and mobile performance so search engines can understand and rank pages correctly.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Keyword Research",
              description:
                "Keyword research identifies search terms, questions and user intent that help businesses target relevant audiences and improve organic search visibility.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Content Optimisation",
              description:
                "Content optimisation improves website copy, headings, metadata, internal links and answer-focused content to increase rankings, engagement and conversions.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Local SEO",
              description:
                "Local SEO improves visibility for location-based searches using local keywords, Google Business Profile optimisation, citations, reviews and location landing pages.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI SEO",
              description:
                "AI SEO optimises websites and content for AI-powered search systems such as Google AI Overviews, ChatGPT, Gemini and conversational search engines.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.novatechscience.com/services/seo-services/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are SEO services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO services are professional optimisation solutions designed to improve a website's visibility in search engines. These services include technical SEO, keyword research, content optimisation, local SEO and authority building to increase rankings, traffic and lead generation.",
          },
        },
        {
          "@type": "Question",
          name: "Why is SEO important for businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO helps businesses appear when customers search online for products, services or information. Strong SEO improves visibility, builds authority, increases organic traffic and reduces dependence on paid advertising while supporting long-term business growth.",
          },
        },
        {
          "@type": "Question",
          name: "What is technical SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Technical SEO improves the structural and backend performance of a website so search engines can crawl, index and understand pages correctly. It includes speed optimisation, structured data, mobile usability and indexing improvements.",
          },
        },
        {
          "@type": "Question",
          name: "How long does SEO take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO is a long-term strategy. While some technical improvements may show early results, significant ranking and traffic growth usually takes several months depending on competition, content quality and website authority.",
          },
        },
        {
          "@type": "Question",
          name: "What is AI SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI SEO is the process of optimising websites and content for AI-powered search systems such as Google AI Overviews, ChatGPT, Gemini and conversational search engines. It focuses on entity clarity, structured information and answer-focused content.",
          },
        },
        {
          "@type": "Question",
          name: "What is SEO and how does it work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO, or Search Engine Optimization, is the process of improving a website so it appears higher in search engine results like Google. SEO works by optimising content, keywords, technical performance, user experience and authority signals, helping search engines understand your website and connect it with users searching for relevant products, services or information.",
          },
        },
        {
          "@type": "Question",
          name: "Is SEO dead or evolving in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO is not dead in 2026; it is evolving rapidly with AI-powered search and changing user behaviour. Modern SEO now includes AI SEO, GEO, AEO, structured data and conversational search optimisation. Businesses still rely on SEO to improve visibility, traffic and trust across Google, AI Overviews, ChatGPT and voice search platforms.",
          },
        },
        {
          "@type": "Question",
          name: "What is a SEO salary?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An SEO salary depends on experience, location, skills and industry demand. Beginners may earn entry-level salaries, while experienced SEO specialists, technical SEO experts and SEO managers can earn significantly more. In 2026, AI SEO, technical SEO and data-driven SEO skills are increasing demand and salary opportunities worldwide.",
          },
        },
        {
          "@type": "Question",
          name: "How do I start SEO for beginners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beginners can start SEO by learning keyword research, on-page SEO, content optimisation, technical SEO basics and Google Search Console. Start with understanding how search engines work, then practise improving website structure, writing SEO-friendly content and analysing search performance. Consistent learning and practical experience are essential for SEO growth.",
          },
        },
        {
          "@type": "Question",
          name: "Is SEO replaced by AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO is not being replaced by AI. Instead, AI is changing how SEO works and how users search online. AI-powered search engines still rely on high-quality, structured and authoritative content. Modern SEO now includes AI SEO, GEO and AEO strategies to improve visibility across traditional search and AI-generated search experiences.",
          },
        },
      ],
    },
  ],
};

export const metadata = {
  title: `Professional SEO Services Agency | ${siteName}`,
  description:
    "Nova Techscience provides SEO, AI SEO, technical SEO and digital marketing services designed to improve rankings, traffic, visibility and lead generation.",
  alternates: {
    canonical: "/services/seo-services",
  },
  openGraph: {
    title: `Professional SEO Services Agency | ${siteName}`,
    description:
      "Improve rankings, organic traffic, technical SEO performance, local SEO visibility, and AI search discoverability with Nova Techscience.",
    url: absoluteUrl("/services/seo-services"),
  },
};

export default function SeoOptimizationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SeoServicesClient />
    </>
  );
}
