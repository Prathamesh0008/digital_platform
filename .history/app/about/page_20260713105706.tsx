// marketing-website/app/about/page.tsx
import dynamic from "next/dynamic";

import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
const AboutTeam = dynamic(() => import("@/components/AboutTeam"));
const AboutApproach = dynamic(() => import("@/components/AboutApproach"));
const AboutCTA = dynamic(() => import("@/components/AboutCTA"));
const HomeWhyChooseSection = dynamic(() => import("@/components/HomeWhyChooseSection"));
// marketing-website/app/about/page.tsx

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      <section id="story" className="scroll-mt-24">
        <AboutStory />
      </section>
      <section id="impact" className="scroll-mt-24">
        <HomeWhyChooseSection />
      </section>
      {/* <section id="team" className="scroll-mt-24">
        <AboutTeam />
      </section> */}

      <section id="approach" className="scroll-mt-24">
        <AboutApproach />
      </section>

      <section id="cta" className="scroll-mt-24">
        <AboutCTA />
      </section>
    </main>
  );
}
