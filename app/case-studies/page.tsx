//app\case-studies\page.tsx
import Image from "next/image";
import Link from "next/link";
import InternalLinkSection from "@/components/InternalLinkSection";
import CaseStudyPreview from "@/components/CaseStudyPreview";
import { serviceHubLinks, insightLinks } from "@/lib/internalLinks";
import { portfolioProjects } from "@/data/portfolio";

export const metadata = {
  title: "Website Case Studies | Nova Techscience",
  description:
    "Explore Nova Techscience case studies covering website design, development, responsive UX, SEO structure, and digital growth work.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#EAEBDB] px-4 pb-20 pt-32 sm:px-6 md:px-10 md:pt-36">
      <section className="mx-auto max-w-[1400px]">
        <div className="relative mb-14 overflow-hidden rounded-[36px] border border-white/55 bg-[linear-gradient(135deg,rgba(255,255,255,0.74),rgba(255,255,255,0.38)_58%,rgba(196,207,227,0.5))] px-6 py-8 shadow-[0_26px_80px_rgba(13,45,71,0.1)] backdrop-blur-md sm:px-8 sm:py-10 md:px-12 md:py-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#5A7EFF]/18 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-10 h-44 w-44 rounded-full bg-white/75 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-end">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-[#0d2d47]/12 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5A7EFF]">
                Case Studies
              </span>

              <h1 className="mt-5 text-4xl font-semibold uppercase leading-[0.94] text-[#0d2d47] sm:text-5xl md:text-7xl">
                Website Work Built For Trust, Clarity And Growth
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[#0d2d47]/72 sm:text-lg">
                Explore how Nova Techscience designs and develops websites for
                pharma, biotech, logistics, healthcare, corporate and
                content-led brands.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[
                ["Responsive", "Desktop and mobile-first presentation"],
                ["Structured", "Clear content hierarchy and conversion flow"],
                ["Industry-led", "Built for pharma, corporate and healthcare brands"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[24px] border border-white/65 bg-white/58 p-4 shadow-[0_14px_34px_rgba(13,45,71,0.06)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5A7EFF]">
                    {title}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#0d2d47]/68">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          {portfolioProjects.map((item) => (
            <article
              key={item.slug}
              className="group overflow-hidden rounded-[34px] border border-[#0d2d47]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,255,255,0.46))] shadow-[0_24px_70px_rgba(13,45,71,0.1)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(13,45,71,0.14)]"
            >
              <div className="grid gap-0 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
                <div className="relative flex flex-col justify-between border-b border-[#0d2d47]/8 p-6 sm:p-8 md:p-10 lg:border-b-0 lg:border-r">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(90,126,255,0.08),transparent)]" />

                  <div>
                    <div className="relative z-10 mb-6 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-[#0d2d47]/10 bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5A7EFF]">
                        {item.category}
                      </span>

                      <span className="rounded-full bg-[#0d2d47]/6 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#0d2d47]/62">
                        Responsive Website
                      </span>
                    </div>

                    <div className="relative z-10 mb-7 flex h-16 w-40 items-center rounded-[18px] bg-white/55 px-4 shadow-[0_10px_26px_rgba(13,45,71,0.05)]">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={220}
                        height={90}
                        className="max-h-14 w-auto object-contain"
                      />
                    </div>

                    <h2 className="relative z-10 text-3xl font-semibold uppercase leading-[0.96] text-[#0d2d47] sm:text-4xl md:text-5xl">
                      {item.name}
                    </h2>

                    <p className="relative z-10 mt-5 max-w-xl text-base leading-8 text-[#0d2d47]/72">
                      {item.about}
                    </p>

                    <div className="relative z-10 mt-8 rounded-[24px] border border-[#0d2d47]/8 bg-white/42 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0d2d47]/55">
                        What We Handled
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                      {item.whatWeDid.slice(0, 3).map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-[#0d2d47]/10 bg-[#EAEBDB]/72 px-4 py-2 text-xs font-medium text-[#0d2d47]/75"
                        >
                          {point}
                        </span>
                      ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 mt-8 flex items-center justify-between gap-4 border-t border-[#0d2d47]/8 pt-6">
                    <p className="max-w-[220px] text-sm leading-6 text-[#0d2d47]/58">
                      View the full case study and inspect the live design
                      across devices.
                    </p>

                    <Link
                      href={`/case-studies/${item.slug}`}
                      className="shrink-0 rounded-full bg-[#0d2d47] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#5A7EFF]"
                    >
                      View Case Study
                    </Link>
                  </div>
                </div>

                <CaseStudyPreview item={item} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex rounded-full border border-[#0d2d47]/20 px-6 py-3 text-sm font-medium text-[#0d2d47] transition hover:bg-[#0d2d47] hover:text-white"
          >
            Back to Portfolio
          </Link>
        </div>
      </section>

      <InternalLinkSection
        title="Related Services And Articles"
        intro="Support these case studies with the service pages and educational content that explain how the work is planned and executed."
        items={[serviceHubLinks[1], serviceHubLinks[0], insightLinks[0]]}
      />
    </main>
  );
}
