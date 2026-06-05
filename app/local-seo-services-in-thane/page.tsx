import IntentLandingPage from "@/components/IntentLandingPage";
import { intentLandingLinks, locationLandingLinks, serviceHubLinks } from "@/lib/internalLinks";
import { absoluteUrl, siteName } from "@/lib/site";

export const metadata = {
  title: `Local SEO Services In Thane | ${siteName}`,
  description:
    "Nova Techscience provides local SEO services in Thane to improve local search visibility, service-area landing pages, website structure, and Google-focused discovery.",
  alternates: {
    canonical: "/local-seo-services-in-thane",
  },
  openGraph: {
    title: `Local SEO Services In Thane | ${siteName}`,
    description:
      "Improve local search visibility in Thane with location-focused landing pages, trust signals, and stronger local SEO structure.",
    url: absoluteUrl("/local-seo-services-in-thane"),
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO Services In Thane",
  serviceType: "Local Search Engine Optimization",
  areaServed: "Thane",
  provider: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/"),
  },
  url: absoluteUrl("/local-seo-services-in-thane"),
  description:
    "Local SEO services in Thane for service businesses, location-focused landing pages, stronger local relevance, and improved enquiry visibility.",
};

export default function Page() {
  return (
    <IntentLandingPage
      eyebrow="Thane Local SEO"
      title="Local SEO Services In Thane For Higher Visibility And Better Local Leads"
      intro="We help Thane service businesses improve local search visibility with stronger location pages, clearer website structure, and content that matches how nearby customers search."
      ctaLabel="Discuss Local SEO In Thane"
      primaryHref="/contact"
      secondaryHref="/services/seo-services"
      secondaryLabel="Explore SEO Services"
      proofStats={[
        ["Thane Focus", "Built For Local Search Intent"],
        ["Location Pages", "Structured For Service Areas"],
        ["Trust Signals", "Designed For Better Discovery"],
      ]}
      servicePoints={[
        "Location landing pages for Thane businesses targeting city, suburb, and service-area search queries.",
        "Website structure improvements that connect local service intent with clearer page messaging.",
        "On-page local SEO support for trust, relevance, and stronger conversion paths.",
        "Scalable local content foundations for businesses planning multi-location or regional growth.",
      ]}
      audienceFit={[
        "Thane-based service businesses that want more qualified enquiries from nearby searchers.",
        "Brands with broad website pages but no clear local service-area strategy yet.",
        "Consultants, agencies, clinics, and professional firms that rely on trust and local discoverability.",
        "Growing businesses trying to compete for city-specific search terms without wasting effort on weak pages.",
      ]}
      processSteps={[
        {
          title: "Map Local Opportunities",
          description:
            "We identify the locations, service combinations, and page opportunities that matter most for how customers search in and around Thane.",
        },
        {
          title: "Create Stronger Local Pages",
          description:
            "The service messaging, page structure, and local relevance cues are shaped so each page feels useful instead of templated.",
        },
        {
          title: "Support Enquiry Conversion",
          description:
            "We connect local SEO improvements with trust-building content and easier contact paths so visibility is more likely to turn into real leads.",
        },
      ]}
      differentiators={[
        {
          title: "More Than City Keywords",
          description:
            "Local SEO works better when the page genuinely reflects the service context, trust cues, and business relevance for that location.",
        },
        {
          title: "Useful Regional Structure",
          description:
            "A strong local architecture helps each service area page support the rest of the site rather than creating isolated duplicates.",
        },
        {
          title: "Ready To Scale",
          description:
            "Once the framework is working for Thane, it becomes much easier to expand into additional nearby cities and service areas.",
        },
      ]}
      outcomes={[
        "More relevant local visibility for Thane service and nearby-intent searches.",
        "Better connection between service offerings, local trust, and conversion flow.",
        "A stronger base for adding more regional landing pages over time.",
      ]}
      faq={[
        {
          question: "Who needs local SEO services in Thane?",
          answer:
            "Local SEO is especially useful for Thane businesses that depend on nearby customers, city-level visibility, and stronger trust when users compare service providers.",
        },
        {
          question: "Do local SEO pages need unique content?",
          answer:
            "Yes. Location pages perform better when they explain the service context for that area instead of reusing the same copy with only place names changed.",
        },
        {
          question: "Can local SEO help with multiple service areas?",
          answer:
            "Yes. A strong local structure in one city often becomes the foundation for expanding into nearby areas with better consistency and clarity.",
        },
      ]}
      relatedLinks={[serviceHubLinks[0], intentLandingLinks[3], locationLandingLinks[2]]}
      schema={schema}
    />
  );
}
