import IntentLandingPage from "@/components/IntentLandingPage";
import { insightLinks, serviceHubLinks } from "@/lib/internalLinks";
import { absoluteUrl, siteName } from "@/lib/site";

export const metadata = {
  title: `Freelance Website Developer | ${siteName}`,
  description:
    "Need a freelance website developer for a professional business website, landing page, or redesign? Nova Techscience delivers custom, responsive, SEO-ready website builds.",
  alternates: {
    canonical: "/freelance-website-developer",
  },
  openGraph: {
    title: `Freelance Website Developer | ${siteName}`,
    description:
      "Work with a freelance-style website development partner focused on custom builds, responsive design, and growth-ready structure.",
    url: absoluteUrl("/freelance-website-developer"),
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Freelance Website Developer Services",
  serviceType: "Freelance Website Development",
  provider: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/"),
  },
  url: absoluteUrl("/freelance-website-developer"),
  description:
    "Freelance website developer support for business websites, landing pages, redesigns, and responsive website builds.",
};

export default function Page() {
  return (
    <IntentLandingPage
      eyebrow="Freelance Website Developer"
      title="Freelance Website Developer For Business Websites And Landing Pages"
      intro="If you need a focused website partner without agency confusion, we help businesses launch custom websites, redesign outdated pages, and improve conversion-focused digital presence."
      ctaLabel="Discuss Your Website"
      primaryHref="/contact"
      secondaryHref="/portfolio"
      secondaryLabel="View Website Portfolio"
      proofStats={[
        ["Custom", "Tailored Layouts And Content Flow"],
        ["Responsive", "Built For Mobile And Desktop"],
        ["Fast", "Performance-Conscious Build Process"],
      ]}
      servicePoints={[
        "Business websites for consultants, service brands, and professional firms.",
        "Landing page development for campaigns, local services, and direct lead generation.",
        "Website redesigns that improve clarity, trust, and user flow.",
        "Content-led page structure that supports SEO and stronger conversion intent.",
      ]}
      audienceFit={[
        "Solo founders and consultants who want direct collaboration without layers of agency handoff.",
        "Businesses that need a faster website refresh with practical recommendations and clear execution.",
        "Teams launching a service, campaign, or new offer that needs a focused landing page or mini-site.",
        "Companies that want custom website work but still care about lean delivery, responsiveness, and clarity.",
      ]}
      processSteps={[
        {
          title: "Clarify The Goal",
          description:
            "We start by understanding whether the page needs to generate leads, explain services better, support campaigns, or modernize an existing online presence.",
        },
        {
          title: "Build Around The Offer",
          description:
            "The website or landing page is shaped around your actual offer, audience questions, and strongest proof points so the content feels useful instead of generic.",
        },
        {
          title: "Refine For Conversion",
          description:
            "After the build, we improve CTA placement, page flow, responsiveness, and performance so the final result is easier for users to trust and act on.",
        },
      ]}
      differentiators={[
        {
          title: "Direct Decision Making",
          description:
            "Lean website execution usually means faster communication, fewer delays, and better continuity between planning, design direction, and development outcomes.",
        },
        {
          title: "Custom Over Template Thinking",
          description:
            "We shape the experience around the business model, offer, and content needs rather than forcing everything into a generic page structure.",
        },
        {
          title: "Better For Early-Stage Growth",
          description:
            "This approach works especially well when a business needs a credible website fast before scaling content, SEO, or paid traffic further.",
        },
      ]}
      outcomes={[
        "A cleaner website that reflects your brand more professionally.",
        "Better enquiry paths with simpler calls to action and clearer service messaging.",
        "A stronger website foundation for SEO, content marketing, and paid traffic.",
      ]}
      faq={[
        {
          question: "Who should hire a freelance website developer?",
          answer:
            "Businesses that want a clear, direct website build process often hire a freelance website developer or lean website partner for faster decisions and more customized work.",
        },
        {
          question: "Can you redesign an old website?",
          answer:
            "Yes. We can improve design, content structure, responsiveness, speed, and conversion flow while keeping the site aligned with your current business goals.",
        },
        {
          question: "Do you build SEO-friendly websites?",
          answer:
            "Yes. We focus on metadata support, page hierarchy, responsive layouts, content clarity, and technical structure that works better for SEO.",
        },
      ]}
      relatedLinks={[serviceHubLinks[1], insightLinks[2], insightLinks[1]]}
      schema={schema}
    />
  );
}
