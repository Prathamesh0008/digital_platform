// marketing-website/app/about/page.tsx
import dynamic from "next/dynamic";

import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import LazySection from "@/components/LazySection";
const AboutTeam = dynamic(() => import("@/components/AboutTeam"));
const AboutApproach = dynamic(() => import("@/components/AboutApproach"));
const AboutCTA = dynamic(() => import("@/components/AboutCTA"));
const HomeWhyChooseSection = dynamic(() => import("@/components/HomeWhyChooseSection"));
// marketing-website/app/about/page.tsx

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      <section id="story">
        <AboutStory />
      </section>
      <LazySection minHeight={620}>
        <HomeWhyChooseSection />
      </LazySection>
      <section id="team">
        <LazySection minHeight={720}>
          <AboutTeam />
        </LazySection>
      </section>

      <section id="approach">
        <LazySection minHeight={760}>
          <AboutApproach />
        </LazySection>
      </section>

      <section id="cta">
        <LazySection minHeight={420}>
          <AboutCTA />
        </LazySection>
      </section>
    </main>
  );
}
