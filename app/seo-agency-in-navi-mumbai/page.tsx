import IntentLandingPage from "@/components/IntentLandingPage";
import { intentLandingLinks, locationLandingLinks, serviceHubLinks } from "@/lib/internalLinks";
import { absoluteUrl, siteName } from "@/lib/site";

export const metadata = {
  title: `SEO Agency In Navi Mumbai | ${siteName}`,
  description:
    "Nova Techscience is an SEO agency in Navi Mumbai helping businesses improve technical SEO, rankings, content structure, local visibility, and long-term organic growth.",
  alternates: {
    canonical: "/seo-agency-in-navi-mumbai",
  },
  openGraph: {
    title: `SEO Agency In Navi Mumbai | ${siteName}`,
    description:
      "Improve rankings, technical SEO, local search visibility, and content structure with Navi Mumbai SEO services.",
    url: absoluteUrl("/seo-agency-in-navi-mumbai"),
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Agency In Navi Mumbai",
  serviceType: "Search Engine Optimization",
  areaServed: "Navi Mumbai",
  provider: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/"),
  },
  url: absoluteUrl("/seo-agency-in-navi-mumbai"),
  description:
    "SEO agency in Navi Mumbai for technical SEO, content optimization, local visibility, service page growth, and long-term search performance.",
};

export default function Page() {
  return (
    <IntentLandingPage
      eyebrow="Navi Mumbai SEO Agency"
      title="SEO Agency In Navi Mumbai For Technical SEO, Content, And Search Growth"
      intro="We help Navi Mumbai businesses grow organic visibility through technical SEO, service-page improvements, content planning, internal linking, and better search-focused structure."
      ctaLabel="Start SEO In Navi Mumbai"
      primaryHref="/contact"
      secondaryHref="/services/seo-services"
      secondaryLabel="Explore SEO Services"
      proofStats={[
        ["Technical", "Better Crawlability And Structure"],
        ["Local Intent", "Improved Regional Search Relevance"],
        ["Content", "Search-Focused Page Expansion"],
      ]}
      servicePoints={[
        "Technical SEO improvements for websites struggling with crawlability, structure, or weak search performance.",
        "On-page optimization for service pages, location pages, and target commercial queries.",
        "Internal linking and content planning to strengthen authority flow across the site.",
        "Local SEO support for Navi Mumbai visibility, service-area targeting, and nearby-intent searches.",
      ]}
      audienceFit={[
        "Navi Mumbai businesses with strong services but limited search visibility because the website structure is weak.",
        "Teams publishing content without a clear keyword-cluster, internal-linking, or commercial-intent strategy.",
        "Service providers that need location pages, stronger SEO foundations, and better authority flow.",
        "Brands redesigning websites and wanting SEO included from the beginning rather than added later.",
      ]}
      processSteps={[
        {
          title: "Audit The SEO Base",
          description:
            "We review indexing signals, page structure, metadata, thin content, local intent coverage, and internal linking to find what is holding rankings back.",
        },
        {
          title: "Fix High-Impact Gaps",
          description:
            "The priority is on improvements that strengthen search understanding and business-page performance rather than random low-value SEO tasks.",
        },
        {
          title: "Expand Intent Coverage",
          description:
            "After the foundation improves, we support better service pages, local landing pages, and content growth to widen organic reach over time.",
        },
      ]}
      differentiators={[
        {
          title: "Commercial SEO Focus",
          description:
            "We pay close attention to the pages that actually drive enquiries and leads, not only top-of-funnel content that looks good in isolation.",
        },
        {
          title: "Local Plus Technical",
          description:
            "Strong SEO in Navi Mumbai needs both local relevance and technical hygiene, so the work connects site structure with location-based intent.",
        },
        {
          title: "Scalable Search Architecture",
          description:
            "The site is shaped so future city pages, service clusters, blog posts, and proof assets can support each other more effectively.",
        },
      ]}
      outcomes={[
        "Better organic visibility for Navi Mumbai service and location-based searches.",
        "Improved alignment between site structure, search intent, and business goals.",
        "A stronger long-term foundation for rankings, content growth, and local SEO expansion.",
      ]}
      faq={[
        {
          question: "Why work with an SEO agency in Navi Mumbai?",
          answer:
            "A Navi Mumbai-focused SEO approach helps align technical SEO and content strategy with local competition, service-area opportunities, and nearby search behavior.",
        },
        {
          question: "Can SEO help local service businesses grow?",
          answer:
            "Yes. Strong service pages, location-specific content, and technical improvements can help local businesses attract more relevant search traffic and enquiries.",
        },
        {
          question: "Do you support both technical SEO and content growth?",
          answer:
            "Yes. We work across technical fixes, on-page optimization, internal linking, and page expansion so search performance improves more holistically.",
        },
      ]}
      relatedLinks={[serviceHubLinks[0], intentLandingLinks[2], locationLandingLinks[3]]}
      schema={schema}
    />
  );
}
