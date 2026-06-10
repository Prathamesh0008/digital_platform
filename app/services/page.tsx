// app/services/page.jsx
import dynamic from "next/dynamic";

import InternalLinkSection from "@/components/InternalLinkSection";
import ServicesHero from "@/components/ServicesHero";
import ServicesHorizontal from "@/components/ServicesHorizontal";
import LazySection from "@/components/LazySection";
import {
  insightLinks,
  intentLandingLinks,
  locationLandingLinks,
  serviceHubLinks,
} from "@/lib/internalLinks";
const ServicesGrid = dynamic(() => import("@/components/ServicesGrid"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));

export const metadata = {
  title: "Digital Marketing Services | Nova Techscience",
  description:
    "Explore Nova Techscience digital marketing services including website development, SEO, performance ads, social media, analytics, ecommerce growth, and brand strategy.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#EAEBDB] text-[#0d2d47]">
      <ServicesHero />
      <ServicesHorizontal />
      {/* <LazySection minHeight={860}>
        <ServicesGrid />
      </LazySection> */}
      <LazySection minHeight={620}>
        <WhyChooseUs />
      </LazySection>
      <InternalLinkSection
        title="Explore Related Growth Paths"
        intro="Move from service discovery into supporting resources, real project examples, and deeper search-focused solutions."
        items={[...serviceHubLinks, insightLinks[1]]}
      />
      <InternalLinkSection
        title="Search-Focused Landing Pages"
        intro="Explore dedicated pages built around high-intent website development, SEO, local SEO, and performance marketing searches."
        items={intentLandingLinks.slice(0, 3)}
      />
      <InternalLinkSection
        title="Location-Focused Service Pages"
        intro="Explore city-targeted landing pages created for Mumbai, Navi Mumbai, and Thane search intent."
        items={locationLandingLinks.slice(0, 3)}
      />
    </main>
  );
}
