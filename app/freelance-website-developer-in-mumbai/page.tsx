import IntentLandingPage from "@/components/IntentLandingPage";
import { insightLinks, locationLandingLinks, serviceHubLinks } from "@/lib/internalLinks";
import { absoluteUrl, siteName } from "@/lib/site";

export const metadata = {
  title: `Freelance Website Developer In Mumbai | ${siteName}`,
  description:
    "Need a freelance website developer in Mumbai? Nova Techscience delivers responsive websites, landing pages, redesigns, and SEO-ready business builds.",
  alternates: {
    canonical: "/freelance-website-developer-in-mumbai",
  },
  openGraph: {
    title: `Freelance Website Developer In Mumbai | ${siteName}`,
    description:
      "Work with a Mumbai-focused website development partner for custom business websites, landing pages, and redesigns.",
    url: absoluteUrl("/freelance-website-developer-in-mumbai"),
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Freelance Website Developer In Mumbai",
  serviceType: "Freelance Website Development",
  areaServed: "Mumbai",
  provider: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/"),
  },
  url: absoluteUrl("/freelance-website-developer-in-mumbai"),
  description:
    "Freelance website developer in Mumbai for business websites, landing pages, custom redesigns, and responsive website builds.",
};

export default function Page() {
  return (
    <IntentLandingPage
      eyebrow="Mumbai Freelance Website Developer"
      title="Freelance Website Developer In Mumbai For Fast, Custom Website Builds"
      intro="If you want direct website collaboration without bulky agency layers, we help Mumbai businesses launch custom websites, redesign key pages, and improve conversion-focused digital presence."
      ctaLabel="Discuss Your Website In Mumbai"
      primaryHref="/contact"
      secondaryHref="/portfolio"
      secondaryLabel="View Website Portfolio"
      proofStats={[
        ["Direct", "Clear Communication And Execution"],
        ["Custom", "Built Around Your Offer"],
        ["Responsive", "Mobile-First Website Delivery"],
      ]}
      servicePoints={[
        "Business website builds for Mumbai consultants, agencies, clinics, and service brands.",
        "Landing pages for local campaigns, paid ads, and offer-specific lead generation.",
        "Website redesigns that improve trust, content clarity, and enquiry flow.",
        "Flexible development support for businesses that need custom work without heavy process overhead.",
      ]}
      audienceFit={[
        "Solo founders and lean teams in Mumbai who want direct communication and faster website decisions.",
        "Businesses that need a practical redesign without waiting through a long agency pipeline.",
        "Service providers launching a new offer, campaign, or local page that needs focused execution.",
        "Brands that want a more premium website without overcomplicating the build process.",
      ]}
      processSteps={[
        {
          title: "Clarify The Offer",
          description:
            "We start by identifying the main service, target visitor questions, and desired action so the page is built around actual business goals.",
        },
        {
          title: "Build The Right Experience",
          description:
            "The site is designed for readability, trust, responsiveness, and simple conversion paths rather than unnecessary complexity.",
        },
        {
          title: "Refine Before Launch",
          description:
            "We tighten the page flow, CTA placement, and structural readiness so the finished site feels smoother for both users and future marketing activity.",
        },
      ]}
      differentiators={[
        {
          title: "Lean Collaboration",
          description:
            "A direct build process reduces communication lag and helps keep the website aligned with the original business goal.",
        },
        {
          title: "Useful Customization",
          description:
            "Instead of forcing a business into a generic page layout, we adapt the structure to the offer, audience, and conversion needs.",
        },
        {
          title: "Practical Growth Focus",
          description:
            "The result is not just a prettier website. It is a stronger base for SEO, campaigns, and long-term digital credibility.",
        },
      ]}
      outcomes={[
        "A more credible website for Mumbai prospects, referrals, and campaign traffic.",
        "Better clarity around your services and easier paths to contact or enquire.",
        "A scalable website foundation that can grow with SEO, blog content, and ads.",
      ]}
      faq={[
        {
          question: "Who should hire a freelance website developer in Mumbai?",
          answer:
            "Businesses that want a direct, flexible website build process often benefit from a freelance-style development partner, especially when speed and clarity matter.",
        },
        {
          question: "Can you build landing pages for local campaigns?",
          answer:
            "Yes. We create focused landing pages for offers, service launches, lead generation, and location-based campaigns in Mumbai and nearby regions.",
        },
        {
          question: "Do you handle redesigns too?",
          answer:
            "Yes. We can improve structure, messaging, mobile experience, and conversion flow so an older site performs better for current business needs.",
        },
      ]}
      relatedLinks={[serviceHubLinks[1], locationLandingLinks[0], insightLinks[2]]}
      schema={schema}
    />
  );
}
