import IntentLandingPage from "@/components/IntentLandingPage";
import { intentLandingLinks, locationLandingLinks, serviceHubLinks } from "@/lib/internalLinks";
import { absoluteUrl, siteName } from "@/lib/site";

export const metadata = {
  title: `Website Development Company In Mumbai | ${siteName}`,
  description:
    "Nova Techscience is a website development company in Mumbai building responsive, SEO-ready, conversion-focused websites for service businesses and growing brands.",
  alternates: {
    canonical: "/website-development-company-in-mumbai",
  },
  openGraph: {
    title: `Website Development Company In Mumbai | ${siteName}`,
    description:
      "Build a premium business website in Mumbai with responsive design, SEO-ready structure, and conversion-focused page flow.",
    url: absoluteUrl("/website-development-company-in-mumbai"),
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Development Company In Mumbai",
  serviceType: "Website Development",
  areaServed: "Mumbai",
  provider: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/"),
  },
  url: absoluteUrl("/website-development-company-in-mumbai"),
  description:
    "Website development company in Mumbai for business websites, landing pages, responsive redesigns, and SEO-ready website builds.",
};

export default function Page() {
  return (
    <IntentLandingPage
      eyebrow="Mumbai Website Development"
      title="Website Development Company In Mumbai For Modern Business Websites"
      intro="We help Mumbai businesses build responsive, premium websites that improve trust, support SEO, and create clearer enquiry paths for real business growth."
      ctaLabel="Start Your Mumbai Website Project"
      primaryHref="/contact"
      secondaryHref="/services/web-design"
      secondaryLabel="Explore Web Design Services"
      proofStats={[
        ["Mumbai Focus", "Built For Local Business Needs"],
        ["Responsive", "Mobile And Desktop Ready"],
        ["SEO-Ready", "Structured For Search Visibility"],
      ]}
      servicePoints={[
        "Business website development for Mumbai service companies, consultants, and professional firms.",
        "Landing pages for local campaigns, direct-response ads, and city-focused lead generation.",
        "Website redesigns that improve trust, speed, and content clarity for modern users.",
        "Technical structure that supports future SEO, content publishing, and internal linking growth.",
      ]}
      audienceFit={[
        "Mumbai businesses that need a stronger website before scaling SEO, paid ads, or outbound efforts.",
        "Founders with outdated sites that no longer match the quality of their current offer or brand.",
        "Service providers that want a cleaner enquiry flow for local, regional, or pan-India clients.",
        "Teams launching a new business unit, campaign, or location-specific service page in Mumbai.",
      ]}
      processSteps={[
        {
          title: "Plan Around Business Goals",
          description:
            "We map offers, audience expectations, trust points, and page structure so the website supports real enquiries instead of just looking polished.",
        },
        {
          title: "Design For Clarity",
          description:
            "The layout, content flow, and CTA structure are shaped around how Mumbai users compare services, scan pages, and make contact decisions.",
        },
        {
          title: "Launch On A Strong Base",
          description:
            "We prepare the website for responsive performance, clean page hierarchy, and future SEO or campaign expansion after launch.",
        },
      ]}
      differentiators={[
        {
          title: "Local Relevance",
          description:
            "The page structure and messaging are tuned for businesses competing in a fast-moving Mumbai market where trust and clarity matter quickly.",
        },
        {
          title: "Growth-Ready Structure",
          description:
            "We build websites that can later support location pages, service clusters, case studies, and SEO content without needing a rebuild.",
        },
        {
          title: "Conversion-Led Thinking",
          description:
            "Every page is designed to reduce confusion, highlight proof, and move users toward contact, booking, or enquiry actions.",
        },
      ]}
      outcomes={[
        "A stronger online presence for Mumbai prospects evaluating your business.",
        "Better page flow from first visit to service understanding and contact.",
        "A cleaner digital foundation for SEO, content marketing, and paid traffic growth.",
      ]}
      faq={[
        {
          question: "Why hire a website development company in Mumbai?",
          answer:
            "A Mumbai-focused website partner can shape the site around local competition, user expectations, and service positioning while still building for broader digital growth.",
        },
        {
          question: "Can you redesign an existing Mumbai business website?",
          answer:
            "Yes. We can refresh structure, design, messaging, responsiveness, and conversion flow so the site reflects the current stage of your business more effectively.",
        },
        {
          question: "Will the website be prepared for SEO?",
          answer:
            "Yes. We focus on structure, metadata readiness, internal-link support, responsive layouts, and content hierarchy so the site is better prepared for SEO work.",
        },
      ]}
      relatedLinks={[serviceHubLinks[1], intentLandingLinks[0], locationLandingLinks[1]]}
      schema={schema}
    />
  );
}
