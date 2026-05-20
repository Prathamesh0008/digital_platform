import Link from "next/link";
import { caseStudies } from "./data";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#f5f7ff_0%,#e9eefc_45%,#dde8fa_100%)] px-4 py-20 sm:px-6 md:px-10">
      <section className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#5A7EFF]">Portfolio</p>
        <h1 className="mt-3 text-4xl font-semibold text-[#0d2d47] md:text-6xl">Case Studies</h1>
        <p className="mt-4 max-w-2xl text-[#0d2d47]/70">
          A focused breakdown of selected projects across pharma, biotech, logistics, and digital media.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#d6def2] bg-white p-6 shadow-[0_15px_35px_-25px_rgba(13,45,71,0.5)]"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-[#5A7EFF]">{item.sector}</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#0d2d47]">{item.title}</h2>
              <p className="mt-3 text-sm text-[#0d2d47]/70">{item.summary}</p>

              <Link
                href={`/case-studies/${item.slug}`}
                className="mt-6 inline-flex rounded-full bg-[#0d2d47] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#163f61]"
              >
                View Case Study
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/portfolio" className="text-[#5A7EFF] underline underline-offset-4">
            Back to Portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
