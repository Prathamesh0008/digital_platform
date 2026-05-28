import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, caseStudyMap } from "../data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudyMap[slug];

  if (!study) notFound();

  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#f8fbff_0%,#eef4ff_50%,#e3ecff_100%)] px-4 py-16 sm:px-6 md:px-10">
      <section className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#5A7EFF]">{study.sector}</p>
        <h1 className="mt-3 text-3xl font-semibold text-[#0d2d47] sm:text-4xl md:text-5xl">
          {study.title}
        </h1>
        <p className="mt-4 max-w-3xl text-[#0d2d47]/75">{study.summary}</p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-[#d6def2] bg-white shadow-[0_20px_40px_-30px_rgba(13,45,71,0.55)]">
          <div
            className="h-[220px] sm:h-[280px] md:h-[340px] bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(4,12,26,0.38),rgba(4,12,26,0.38)),url(${study.image})`,
            }}
          />

          <div className="grid gap-8 p-6 md:grid-cols-3 md:p-8">
            <article className="md:col-span-1">
              <h2 className="text-lg font-semibold text-[#0d2d47]">Challenge</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#0d2d47]/75">{study.challenge}</p>
            </article>

            <article className="md:col-span-1">
              <h2 className="text-lg font-semibold text-[#0d2d47]">Solution</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#0d2d47]/75">{study.solution}</p>
            </article>

            <article className="md:col-span-1">
              <h2 className="text-lg font-semibold text-[#0d2d47]">Outcomes</h2>
              <ul className="mt-3 space-y-2 text-sm text-[#0d2d47]/75">
                {study.outcome.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          {/* <a
            href={study.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[#0d2d47] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#163f61]"
          >
            Visit Live Site
          </a> */}
          <Link href="/case-studies" className="text-[#5A7EFF] underline underline-offset-4">
            Back to All Case Studies
          </Link>
        </div>
      </section>
    </main>
  );
}
