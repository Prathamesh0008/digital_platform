import IntentLandingPage from "@/components/IntentLandingPage";
import { intentLandingLinks, locationLandingLinks, serviceHubLinks } from "@/lib/internalLinks";
import { absoluteUrl, siteName } from "@/lib/site";

export const metadata = {
  title: `Performance Marketing Agency In Mumbai | ${siteName}`,
  description:
    "Nova Techscience is a performance marketing agency in Mumbai helping brands generate leads and sales through paid ads, landing pages, tracking, and optimization.",
  alternates: {
    canonical: "/performance-marketing-agency-in-mumbai",
  },
  openGraph: {
    title: `Performance Marketing Agency In Mumbai | ${siteName}`,
    description:
      "Scale leads and revenue in Mumbai with paid media strategy, landing page support, conversion tracking, and ROI-focused optimization.",
    url: absoluteUrl("/performance-marketing-agency-in-mumbai"),
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Performance Marketing Agency In Mumbai",
  serviceType: "Performance Marketing",
  areaServed: "Mumbai",
  provider: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/"),
  },
  url: absoluteUrl("/performance-marketing-agency-in-mumbai"),
  description:
    "Performance marketing agency in Mumbai for paid ads, campaign strategy, landing pages, conversion tracking, and lead generation growth.",
};

export default function Page() {
  return (
    <IntentLandingPage
      eyebrow="Mumbai Performance Marketing"
      title="Performance Marketing Agency In Mumbai For Leads, Sales, And Measurable Growth"
      intro="We help Mumbai businesses build performance marketing systems that combine paid traffic, landing pages, tracking, and ongoing optimization so ad spend turns into clearer business outcomes."
      ctaLabel="Start Paid Growth In Mumbai"
      primaryHref="/contact"
      secondaryHref="/services/performance-ads"
      secondaryLabel="Explore Performance Ads"
      proofStats={[
        ["Paid Media", "Google, Meta, And More"],
        ["Tracking", "Clear Conversion Visibility"],
        ["ROI Focus", "Optimized For Real Outcomes"],
      ]}
      servicePoints={[
        "Performance ad strategy for Mumbai lead generation, direct response, and scalable campaign growth.",
        "Landing page alignment to improve message match, trust, and conversion rate from paid traffic.",
        "Tracking support for forms, calls, and important business actions across the funnel.",
        "Ongoing optimization based on spend efficiency, lead quality, and campaign learning.",
      ]}
      audienceFit={[
        "Mumbai businesses already spending on ads but lacking good tracking, landing pages, or optimization discipline.",
        "Teams that want more qualified leads instead of broad traffic that does not convert into real business.",
        "Brands launching a new offer or campaign and needing clean paid acquisition support from the start.",
        "Companies scaling digital growth and wanting stronger clarity around which channels actually perform.",
      ]}
      processSteps={[
        {
          title: "Align Offer And Funnel",
          description:
            "We define the audience, ad message, landing page, and conversion event together so the campaign is built around business outcomes from day one.",
        },
        {
          title: "Launch With Measurement",
          description:
            "Campaigns are paired with tracking and landing-page support so we can see which channels, creatives, and offers are driving results.",
        },
        {
          title: "Improve With Data",
          description:
            "Optimization is guided by conversion quality, cost efficiency, and user friction so ad spend gets smarter over time rather than simply larger.",
        },
      ]}
      differentiators={[
        {
          title: "Beyond The Ad Click",
          description:
            "Performance often breaks after the click, so we pay attention to landing page clarity and conversion flow instead of treating ads in isolation.",
        },
        {
          title: "Measurement First",
          description:
            "Reliable tracking makes it easier to separate useful performance signals from vanity metrics and improve budget decisions with confidence.",
        },
        {
          title: "Campaign Systems Thinking",
          description:
            "We treat paid growth as a connected system of targeting, offer, page experience, and optimization rather than a one-time ad setup.",
        },
      ]}
      outcomes={[
        "More qualified paid traffic for Mumbai offers, campaigns, and service enquiries.",
        "Stronger visibility into what is producing leads, sales, and efficient spend.",
        "Better lead quality through tighter messaging, page flow, and ongoing testing.",
      ]}
      faq={[
        {
          question: "Why hire a performance marketing agency in Mumbai?",
          answer:
            "A Mumbai-focused performance strategy can align campaigns with local offers, business goals, and landing-page expectations while still supporting broader scale.",
        },
        {
          question: "Do I need a landing page for paid campaigns?",
          answer:
            "In many cases yes. A focused landing page improves message match, user clarity, and conversion rate more effectively than sending paid traffic to a generic page.",
        },
        {
          question: "Can you help with tracking too?",
          answer:
            "Yes. Tracking support is important because it shows which campaigns, forms, calls, and actions are creating actual business outcomes.",
        },
      ]}
      relatedLinks={[serviceHubLinks[2], intentLandingLinks[4], locationLandingLinks[0]]}
      schema={schema}
    />
  );
}
