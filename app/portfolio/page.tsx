// app/portfolio/page.tsx
import PortfolioHero from "@/components/PortfolioHero";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#EAEBDB] text-[#0d2d47]">
      <section
        className="relative overflow-hidden px-4 pb-12 pt-24 sm:px-6 sm:pb-14 sm:pt-28 md:px-10 md:pb-20 md:pt-48"
        style={{
          background:
            "linear-gradient(to top, #EAEBDB, #C4CFE3, #8EA5F1, #6887FB)",
        }}
      >
        <div className="pointer-events-none absolute left-[-140px] top-[-140px] h-[280px] w-[280px] rounded-full bg-white/25 blur-3xl sm:h-[320px] sm:w-[320px]" />
        <div className="pointer-events-none absolute bottom-[-140px] right-[-140px] h-[300px] w-[300px] rounded-full bg-[#0d2d47]/15 blur-3xl sm:h-[360px] sm:w-[360px]" />

        <div className="relative mx-auto grid w-full max-w-[1400px] items-end gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            {/* <p className="mb-5 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0d2d47] backdrop-blur-md sm:px-5 sm:text-xs sm:tracking-[0.24em]">
              Portfolio
            </p> */}

            <h1 className="max-w-4xl text-[42px] font-semibold uppercase leading-[0.94] tracking-tight text-[#0d2d47] sm:text-6xl md:text-[82px] lg:text-[96px]">
              Digital Experiences That Convert And Scale
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#0d2d47]/75 sm:mt-6 sm:text-base md:text-lg">
              A curated collection of websites and growth-focused digital
              products designed for pharma, biotech, logistics, and modern
              service brands.
            </p>

            <div className="mt-7 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap sm:items-center">
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-[#0d2d47] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
              >
                Start Your Project
              </Link>

              <Link
                href="/services"
                className="inline-flex justify-center rounded-full border border-[#0d2d47]/25 bg-white/25 px-6 py-3 text-sm font-medium text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
              >
                Explore Services
              </Link>
            </div>
          </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-1">
  {[
    ["50+", "Projects Delivered"],
    ["7+", "Featured Brands"],
    ["99%", "Client Satisfaction"],
  ].map(([value, label]) => (
    <div
      key={label}
      className="min-w-0 overflow-hidden rounded-[18px] border border-white/30 bg-white/20 p-2 text-center backdrop-blur-md sm:rounded-[28px] sm:p-5 lg:text-left"
    >
      <p className="text-2xl font-semibold leading-none text-[#0d2d47] sm:text-4xl">
        {value}
      </p>

      <p className="mt-2 whitespace-normal break-words text-[9px] font-medium uppercase leading-[1.15] tracking-[0.04em] text-[#0d2d47]/65 sm:text-xs sm:leading-tight sm:tracking-[0.16em]">
        {label}
      </p>
    </div>
  ))}
</div>
        </div>
      </section>

      <PortfolioHero />
    </main>
  );
}