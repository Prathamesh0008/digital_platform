import IntentLandingPage from "@/components/IntentLandingPage";
import { insightLinks, serviceHubLinks } from "@/lib/internalLinks";
import { absoluteUrl, siteName } from "@/lib/site";

export const metadata = {
  title: `SEO Agency | ${siteName}`,
  description:
    "Nova Techscience is an SEO agency helping businesses improve technical SEO, rankings, content structure, AI search visibility, and long-term organic growth.",
  alternates: {
    canonical: "/seo-agency",
  },
  openGraph: {
    title: `SEO Agency | ${siteName}`,
    description:
      "Improve rankings, technical SEO performance, content quality, and AI search visibility with Nova Techscience SEO services.",
    url: absoluteUrl("/seo-agency"),
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Agency Services",
  serviceType: "Search Engine Optimization",
  provider: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/"),
  },
  url: absoluteUrl("/seo-agency"),
  description:
    "SEO agency services for technical SEO, content optimization, local SEO, authority building, and AI search readiness.",
};

export default function Page() {
  return (
    <IntentLandingPage
      eyebrow="SEO Agency"
      title="SEO Agency For Technical SEO, Content Growth, And Visibility"
      intro="We help businesses improve rankings and organic visibility through technical SEO, content structure, internal linking, on-page improvements, and search-focused strategy."
      ctaLabel="Start SEO Growth"
      primaryHref="/contact"
      secondaryHref="/services/seo-services"
      secondaryLabel="Explore SEO Services"
      proofStats={[
        ["Technical", "Better Crawlability And Structure"],
        ["Content", "Search-Focused Messaging"],
        ["AI-Ready", "Prepared For Modern Search Behavior"],
      ]}
      servicePoints={[
        "Technical SEO audits and structural improvements for better search engine understanding.",
        "Content optimization for target queries, search intent, and on-page clarity.",
        "Internal linking and authority flow planning across service, blog, and proof pages.",
        "Support for modern search visibility including GEO, AEO, and entity clarity.",
      ]}
      audienceFit={[
        "Businesses with decent services but weak organic visibility because the site structure is not supporting search well.",
        "Brands publishing content without a clear internal-linking, keyword-cluster, or intent-led page strategy.",
        "Teams redesigning websites and wanting SEO included from the foundation instead of bolted on later.",
        "Service companies that want to grow through search but need both technical fixes and content direction.",
      ]}
      processSteps={[
        {
          title: "Audit The Current State",
          description:
            "We review crawlability, page structure, metadata, thin content, internal linking, and intent coverage to identify what is limiting visibility.",
        },
        {
          title: "Prioritize High-Impact Fixes",
          description:
            "The work is sequenced around technical issues, search intent gaps, and page improvements that can compound over time instead of scattered low-value changes.",
        },
        {
          title: "Expand Search Coverage",
          description:
            "Once the foundation is stronger, we support content planning, service-page depth, and landing-page growth so rankings have more room to improve.",
        },
      ]}
      differentiators={[
        {
          title: "SEO That Connects To Business Pages",
          description:
            "We focus on service pages, proof pages, and conversion paths, not just blog traffic that looks good on a report but does not support revenue.",
        },
        {
          title: "Modern Search Awareness",
          description:
            "The strategy takes into account classic search ranking factors alongside AI-overview, answer-engine, and entity-understanding trends.",
        },
        {
          title: "Structure Before Volume",
          description:
            "Publishing more pages rarely helps if the site architecture is weak. We strengthen the structure first so new content performs better later.",
        },
      ]}
      outcomes={[
        "Stronger organic visibility for relevant service and location-based searches.",
        "Better alignment between content structure and user intent.",
        "A more durable search foundation for blogs, services, and future landing pages.",
      ]}
      faq={[
        {
          question: "What does an SEO agency help with?",
          answer:
            "An SEO agency helps improve how a website appears in search engines through technical fixes, content strategy, on-page optimization, internal linking, and authority-building work.",
        },
        {
          question: "How long does SEO take to show results?",
          answer:
            "SEO is a long-term channel. Some technical and on-page gains can show earlier, but stronger ranking improvements usually take time depending on competition and site authority.",
        },
        {
          question: "Can SEO support AI search visibility too?",
          answer:
            "Yes. Strong SEO structure, entity clarity, question-based content, and trustworthy pages also help with GEO and answer-engine visibility.",
        },
      ]}
      relatedLinks={[serviceHubLinks[0], serviceHubLinks[2], insightLinks[0]]}
      schema={schema}
    />
  );
}
