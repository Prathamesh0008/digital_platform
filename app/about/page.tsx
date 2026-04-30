// marketing-website/app/about/page.tsx
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutTeam from "@/components/AboutTeam";
import AboutApproach from "@/components/AboutApproach";
import AboutCTA from "@/components/AboutCTA";

// marketing-website/app/about/page.tsx

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      <section id="story">
        <AboutStory />
      </section>

      <section id="team">
        <AboutTeam />
      </section>

      <section id="approach">
        <AboutApproach />
      </section>

      <section id="cta">
        <AboutCTA />
      </section>
    </main>
  );
}