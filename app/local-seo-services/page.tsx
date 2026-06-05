import IntentLandingPage from "@/components/IntentLandingPage";
import { insightLinks, serviceHubLinks } from "@/lib/internalLinks";
import { absoluteUrl, siteName } from "@/lib/site";

export const metadata = {
  title: `Local SEO Services | ${siteName}`,
  description:
    "Nova Techscience provides local SEO services to improve local search visibility, service-area landing pages, website structure, and Google-focused discovery for businesses.",
  alternates: {
    canonical: "/local-seo-services",
  },
  openGraph: {
    title: `Local SEO Services | ${siteName}`,
    description:
      "Improve local search visibility with location-focused landing pages, local SEO strategy, stronger structure, and trust signals.",
    url: absoluteUrl("/local-seo-services"),
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO Services",
  serviceType: "Local Search Engine Optimization",
  provider: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/"),
  },
  url: absoluteUrl("/local-seo-services"),
  description:
    "Local SEO services for service businesses, local landing pages, Google visibility, trust signals, and location-focused content strategy.",
};

export default function Page() {
  return (
    <IntentLandingPage
      eyebrow="Local SEO"
      title="Local SEO Services For Service Businesses And Regional Growth"
      intro="We help service businesses improve local search visibility with clearer location pages, stronger site structure, trust signals, and content that matches how customers search nearby."
      ctaLabel="Discuss Local SEO"
      primaryHref="/contact"
      secondaryHref="/services/seo-services"
      secondaryLabel="Explore SEO Services"
      proofStats={[
        ["Local Intent", "Better Match With Nearby Searches"],
        ["Landing Pages", "Structured For Service Areas"],
        ["Visibility", "Built For Discovery And Trust"],
      ]}
      servicePoints={[
        "Local landing page planning for cities, service areas, and regional business growth.",
        "Website content structure for location-intent searches and clearer service communication.",
        "On-page improvements that support trust, relevance, and local discovery.",
        "SEO foundations that help turn local traffic into real enquiries.",
      ]}
      audienceFit={[
        "Service businesses that operate in one city or across multiple nearby service areas and want more qualified local leads.",
        "Companies with broad service pages but no clear local landing-page strategy for individual cities or regions.",
        "Agencies, clinics, consultants, and home-service businesses that depend on nearby trust and discoverability.",
        "Brands trying to compete in local search where intent is high and users are ready to contact quickly.",
      ]}
      processSteps={[
        {
          title: "Map Service Areas",
          description:
            "We identify the locations, search patterns, and page opportunities that matter most so local SEO efforts are tied to real business geography.",
        },
        {
          title: "Build Relevant Local Pages",
          description:
            "Location-based page structure, service messaging, and supporting trust cues are shaped so each page speaks clearly to local intent.",
        },
        {
          title: "Strengthen Local Signals",
          description:
            "We improve on-page clarity, internal linking, and supporting proof so search engines and users can connect your services to the right area.",
        },
      ]}
      differentiators={[
        {
          title: "Intent-Led Local Structure",
          description:
            "Local SEO is more than adding city names. The page structure has to reflect how people search, compare, and contact providers in their area.",
        },
        {
          title: "Useful Location Pages",
          description:
            "Each page should explain the actual service context for that area so it feels relevant to users rather than a duplicate page with swapped place names.",
        },
        {
          title: "Ready For Expansion",
          description:
            "A strong local framework makes it easier to add more city pages, proof points, and localized content as the business grows regionally.",
        },
      ]}
      outcomes={[
        "More relevant local visibility for users searching for nearby services.",
        "Better connection between service offerings and location-based intent.",
        "Stronger conversion flow for local enquiries, calls, and direct contact.",
      ]}
      faq={[
        {
          question: "What are local SEO services?",
          answer:
            "Local SEO services help businesses become more visible for searches that include city, area, or nearby intent, often through location pages, content structure, and trust-focused optimization.",
        },
        {
          question: "Who needs local SEO?",
          answer:
            "Local SEO is especially useful for service businesses, consultants, agencies, clinics, and professional firms that want to attract enquiries from a specific area or city.",
        },
        {
          question: "Does local SEO require separate landing pages?",
          answer:
            "Often yes. Dedicated location or service-area pages help search engines and users understand where you work and what services you offer in each region.",
        },
      ]}
      relatedLinks={[serviceHubLinks[0], serviceHubLinks[1], insightLinks[0]]}
      schema={schema}
    />
  );
}
