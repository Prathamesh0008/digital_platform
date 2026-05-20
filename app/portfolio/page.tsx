import PortfolioHero from "@/components/PortfolioHero";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#f5f7f2]">
      <section className="relative overflow-hidden border-b border-black/10 bg-[radial-gradient(circle_at_12%_18%,rgba(90,126,255,0.2),transparent_42%),radial-gradient(circle_at_90%_12%,rgba(16,185,229,0.18),transparent_36%),linear-gradient(180deg,#0c1933_0%,#12274a_58%,#183a64_100%)] px-6 pb-14 pt-24 text-white md:px-10 md:pb-20 md:pt-28">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/85">
              Portfolio
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Digital Experiences That Convert And Scale
            </h1>
            <p className="mt-5 max-w-2xl text-sm text-white/85 md:text-base">
              A curated collection of websites and growth-focused digital products we designed for
              pharma, biotech, logistics, and modern service brands.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0d2446] transition hover:bg-white/90"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/45 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#0d2446]"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
              <p className="text-3xl font-semibold">50+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/75">Projects Delivered</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
              <p className="text-3xl font-semibold">7+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/75">Featured Brands</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
              <p className="text-3xl font-semibold">99%</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/75">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <PortfolioHero />
    </main>
  );
}
