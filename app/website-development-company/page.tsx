import IntentLandingPage from "@/components/IntentLandingPage";
import { insightLinks, serviceHubLinks } from "@/lib/internalLinks";
import { absoluteUrl, siteName } from "@/lib/site";

export const metadata = {
  title: `Website Development Company | ${siteName}`,
  description:
    "Nova Techscience is a website development company building responsive, SEO-ready, conversion-focused websites for modern service brands and growing businesses.",
  alternates: {
    canonical: "/website-development-company",
  },
  openGraph: {
    title: `Website Development Company | ${siteName}`,
    description:
      "Build responsive, premium, SEO-ready business websites with Nova Techscience website development services.",
    url: absoluteUrl("/website-development-company"),
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Development Company",
  serviceType: "Website Development",
  provider: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/"),
  },
  url: absoluteUrl("/website-development-company"),
  description:
    "Website development services for responsive websites, service-business websites, landing pages, and conversion-focused digital platforms.",
};

export default function Page() {
  return (
    <IntentLandingPage
      eyebrow="Website Development"
      title="Website Development Company For Modern Business Growth"
      intro="We build websites that look premium, load fast, support SEO, and turn visitors into enquiries, leads, and customers."
      ctaLabel="Start Your Website Project"
      primaryHref="/contact"
      secondaryHref="/services/web-design"
      secondaryLabel="Explore Web Design Services"
      proofStats={[
        ["Responsive", "Desktop To Mobile Ready"],
        ["SEO-Ready", "Structured For Search Visibility"],
        ["Conversion", "Built Around Clear Next Actions"],
      ]}
      servicePoints={[
        "Corporate website design and development for trust-led service brands.",
        "Landing pages built for campaigns, lead generation, and paid traffic.",
        "SEO-ready structure with better page hierarchy, metadata, and internal linking.",
        "Fast-loading, mobile-first layouts for users across devices and screen sizes.",
      ]}
      audienceFit={[
        "Service businesses that need a premium online presence before investing more in ads or SEO.",
        "Founders with outdated websites that no longer match their current offer, pricing, or authority.",
        "Growing teams that need clearer service pages, stronger enquiry paths, and a more scalable site structure.",
        "Brands launching a new business unit, campaign, or offer that needs dedicated landing page support.",
      ]}
      processSteps={[
        {
          title: "Discovery And Structure",
          description:
            "We map business goals, core offers, target users, and page hierarchy so the website supports both user clarity and future search growth.",
        },
        {
          title: "Design And Build",
          description:
            "Layouts are developed around trust, readability, mobile responsiveness, and clear call-to-action flow rather than just visual styling.",
        },
        {
          title: "Optimization And Launch",
          description:
            "Before launch we tighten performance, page structure, metadata readiness, and internal navigation so the site starts with a stronger technical base.",
        },
      ]}
      differentiators={[
        {
          title: "Built For Growth Channels",
          description:
            "The website is planned to work with SEO, paid campaigns, organic content, and direct lead generation instead of functioning like a static brochure.",
        },
        {
          title: "Messaging And UX Together",
          description:
            "We do not separate copy clarity from design decisions. Content flow and interface structure are shaped together to improve understanding and action.",
        },
        {
          title: "Launch-Ready Foundation",
          description:
            "A good website launch includes technical hygiene, content hierarchy, and conversion paths so future marketing efforts do not start from a weak base.",
        },
      ]}
      outcomes={[
        "Clearer digital brand presentation for first-time visitors.",
        "Stronger user journey from homepage to service enquiry.",
        "Better technical foundation for SEO, local search, and content growth.",
      ]}
      faq={[
        {
          question: "What does a website development company do?",
          answer:
            "A website development company plans, designs, and builds websites that are technically strong, user-friendly, and aligned with business goals such as enquiries, sales, or brand visibility.",
        },
        {
          question: "How long does website development take?",
          answer:
            "Project timelines depend on page count, content readiness, design complexity, and custom functionality. Most business websites take several weeks from planning to launch.",
        },
        {
          question: "Will the website support SEO?",
          answer:
            "Yes. We focus on responsive layouts, page structure, speed, metadata, internal linking, and content organization so the site is better prepared for SEO work.",
        },
      ]}
      relatedLinks={[serviceHubLinks[1], serviceHubLinks[0], insightLinks[1]]}
      schema={schema}
    />
  );
}
