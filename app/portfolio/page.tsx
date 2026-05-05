import PortfolioHero from "@/components/PortfolioHero";
import PortfolioHeroLight from "@/components/PortfolioHeroLight";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#0f172a_0%,#1e293b_18%,#334155_38%,#64748b_58%,#e2e8f0_82%,#f8fafc_100%)]">
      <PortfolioHeroLight />
      <PortfolioHero />
    </main>
  );
}
