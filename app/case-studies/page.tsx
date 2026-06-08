import Image from "next/image";
import Link from "next/link";
import InternalLinkSection from "@/components/InternalLinkSection";
import CaseStudyPreview from "@/components/CaseStudyPreview";
import { serviceHubLinks, insightLinks } from "@/lib/internalLinks";
import { portfolioProjects } from "@/data/portfolio";

export const metadata = {
  title: "Website Case Studies | Nova Techscience",
  description:
    "Explore Nova Techscience case studies covering website design, development, responsive UX, and industry-specific digital growth work.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#EAEBDB] px-4 pb-20 pt-32 sm:px-6 md:px-10 md:pt-36">
      <section className="mx-auto max-w-[1400px]">
        <div className="grid gap-8">
          {portfolioProjects.map((item) => (
            <article
              key={item.slug}
              className="group overflow-hidden rounded-[34px] border border-[#0d2d47]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(255,255,255,0.4))] shadow-[0_24px_70px_rgba(13,45,71,0.1)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(13,45,71,0.14)]"
            >
              <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
                <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10">
                  <div>
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-[#0d2d47]/12 bg-[#EAEBDB]/85 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#0d2d47]/72">
                        {item.category}
                      </span>
                    </div>

                    <div className="mb-6 flex h-16 w-40 items-center">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={220}
                        height={90}
                        className="max-h-14 w-auto object-contain"
                      />
                    </div>

                    <h2 className="text-3xl font-semibold uppercase leading-tight text-[#0d2d47] sm:text-4xl md:text-5xl">
                      {item.name}
                    </h2>

                    {/* <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-[#5A7EFF]">
                      {item.domain}
                    </p> */}

                    <p className="mt-5 max-w-xl text-base leading-8 text-[#0d2d47]/72">
                      {item.about}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.whatWeDid.slice(0, 3).map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-[#0d2d47]/10 bg-[#EAEBDB]/70 px-4 py-2 text-xs font-medium text-[#0d2d47]/75"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={`/case-studies/${item.slug}`}
                      className="rounded-full bg-[#0d2d47] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#5A7EFF]"
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
