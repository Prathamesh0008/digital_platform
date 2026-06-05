import IntentLandingPage from "@/components/IntentLandingPage";
import { insightLinks, serviceHubLinks } from "@/lib/internalLinks";
import { absoluteUrl, siteName } from "@/lib/site";

export const metadata = {
  title: `Performance Marketing Agency | ${siteName}`,
  description:
    "Nova Techscience is a performance marketing agency helping brands generate leads, sales, and measurable growth through paid ads, landing pages, tracking, and optimization.",
  alternates: {
    canonical: "/performance-marketing-agency",
  },
  openGraph: {
    title: `Performance Marketing Agency | ${siteName}`,
    description:
      "Scale leads and revenue with paid media strategy, landing page support, conversion tracking, and ROI-focused campaign management.",
    url: absoluteUrl("/performance-marketing-agency"),
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Performance Marketing Agency Services",
  serviceType: "Performance Marketing",
  provider: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/"),
  },
  url: absoluteUrl("/performance-marketing-agency"),
  description:
    "Performance marketing services for paid ads, conversion tracking, landing page support, lead generation, and ROI-focused campaign optimization.",
};

export default function Page() {
  return (
    <IntentLandingPage
      eyebrow="Performance Marketing"
      title="Performance Marketing Agency For Leads, Sales, And Campaign Growth"
      intro="We plan and optimize performance marketing systems that combine paid traffic, landing pages, tracking, and conversion-focused improvement so businesses can scale with clearer data."
      ctaLabel="Start Performance Marketing"
      primaryHref="/contact"
      secondaryHref="/services/performance-ads"
      secondaryLabel="Explore Performance Ads"
      proofStats={[
        ["Paid Media", "Google, Meta, And More"],
        ["Tracking", "Lead And Conversion Clarity"],
        ["Optimization", "Continuous Testing And Improvement"],
      ]}
      servicePoints={[
        "Performance ad strategy for lead generation, direct response, and scalable growth.",
        "Landing page alignment that improves message match and conversion flow.",
        "Tracking setup for forms, calls, actions, and campaign measurement.",
        "Ongoing optimization based on data, lead quality, and cost efficiency.",
      ]}
      audienceFit={[
        "Businesses already spending on ads but lacking clean tracking, clear landing pages, or dependable optimization rhythm.",
        "Teams that want lead generation campaigns tied more closely to enquiry quality and actual business outcomes.",
        "Brands launching new offers that need paid traffic, funnel support, and reporting clarity from the start.",
        "Companies trying to scale digital acquisition without wasting budget on broad clicks that do not convert.",
      ]}
      processSteps={[
        {
          title: "Define The Funnel",
          description:
            "We align the offer, audience, landing experience, and conversion event so campaigns are structured around measurable business actions.",
        },
        {
          title: "Launch And Measure",
          description:
            "Campaigns are paired with tracking, creative direction, and page support so we can see which channels and messages are producing results.",
        },
        {
          title: "Optimize For ROI",
          description:
            "We review performance data, lead quality, conversion friction, and cost efficiency to keep improving the account over time.",
        },
      ]}
      differentiators={[
        {
          title: "Paid Media Plus Landing Pages",
          description:
            "Campaign performance usually depends on what happens after the click, so we connect ad strategy with landing page clarity and conversion flow.",
        },
        {
          title: "Tracking That Supports Decisions",
          description:
            "Reliable measurement helps distinguish vanity metrics from real outcomes, making budget allocation and optimization decisions much stronger.",
        },
        {
          title: "Growth Through Iteration",
          description:
            "Performance marketing improves through testing and refinement, not one-time setup. We treat campaigns as systems that need active learning.",
        },
      ]}
      outcomes={[
        "More qualified traffic aligned with business goals and intent.",
        "Stronger visibility into which campaigns and pages create results.",
        "Better lead quality through clearer offers, structure, and testing.",
      ]}
      faq={[
        {
          question: "What does a performance marketing agency do?",
          answer:
            "A performance marketing agency focuses on measurable campaign results such as leads, sales, bookings, and revenue through paid ads, landing pages, tracking, and optimization.",
        },
        {
          question: "How is performance marketing different from general marketing?",
          answer:
            "Performance marketing is more directly tied to trackable actions and business results, rather than only broad awareness or visibility metrics.",
        },
        {
          question: "Do I need a landing page for performance marketing?",
          answer:
            "In many cases yes. A focused landing page improves message match, user clarity, and conversion rate compared to sending paid traffic to a generic page.",
        },
      ]}
      relatedLinks={[serviceHubLinks[2], serviceHubLinks[1], insightLinks[0]]}
      schema={schema}
    />
  );
}
