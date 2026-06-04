import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioProjects } from "@/data/portfolio";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((item) => ({ slug: item.slug }));
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen overflow-hidden bg-[#EAEBDB] px-4 pb-20 pt-32 sm:px-6 md:px-10 md:pt-36">
      <section className="mx-auto max-w-[1300px]">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#5A7EFF]">
              {project.category}
            </p>

            <div className="mt-6 flex h-16 w-44 items-center">
              <Image
                src={project.logo}
                alt={project.name}
                width={220}
                height={90}
                className="max-h-14 w-auto object-contain"
              />
            </div>

            <h1 className="mt-6 text-5xl font-semibold uppercase leading-[0.9] tracking-tight text-[#0d2d47] sm:text-6xl md:text-[82px]">
              {project.name}
            </h1>

            <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-[#5A7EFF]">
              {project.domain}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#0d2d47]/72 md:text-lg">
              {project.about}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#0d2d47] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#5A7EFF]"
              >
                Visit Website
              </a>

              <Link
                href="/case-studies"
                className="rounded-full border border-[#0d2d47]/20 px-6 py-3 text-sm font-medium text-[#0d2d47] transition hover:bg-[#0d2d47] hover:text-white"
              >
                Back To Case Studies
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#5A7EFF]/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/60 blur-3xl" />

            <div className="relative grid gap-6">
             <div className="rounded-[28px] border border-[#0d2d47]/10 bg-white/45 p-3 shadow-[0_24px_70px_rgba(13,45,71,0.12)] backdrop-blur-md">
  <div className="mb-3 flex items-center justify-between px-2">
    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#0d2d47]/55">
      Desktop Website
    </p>

    <span className="rounded-full bg-[#0d2d47] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white">
      Live
    </span>
  </div>

  <div className="relative h-[360px] w-full overflow-hidden rounded-[22px] bg-white lg:h-[390px]">
    <iframe
      src={project.url}
      title={`${project.name} desktop live website preview`}
      loading="lazy"
      className="absolute left-1/2 top-0 h-[780px] border-0 bg-white"
      style={{
        width: "1440px",
        transform: "translateX(-50%) scale(0.54)",
        transformOrigin: "top center",
      }}
    />
  </div>
</div>

              <div className="rounded-[28px] border border-[#0d2d47]/10 bg-white/45 p-5 shadow-[0_24px_70px_rgba(13,45,71,0.1)] backdrop-blur-md">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#0d2d47]/55">
                    Mobile Website
                  </p>

                  <span className="rounded-full bg-[#5A7EFF] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white">
                    Responsive
                  </span>
                </div>

                <div className="mx-auto w-[220px] overflow-hidden rounded-[32px] border-[7px] border-[#0d2d47] bg-[#0d2d47] shadow-[0_20px_55px_rgba(13,45,71,0.2)] sm:w-[245px]">
                  <div className="mx-auto mb-2 mt-1.5 h-1.5 w-16 rounded-full bg-white/25" />

                  <div className="h-[430px] overflow-hidden rounded-[23px] bg-white sm:h-[480px]">
                    <iframe
                      src={project.url}
                      title={`${project.name} mobile live website preview`}
                      loading="lazy"
                      className="h-full w-full border-0 bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[300px_1fr]">
          <aside className="h-fit rounded-[28px] border border-[#0d2d47]/10 bg-white/55 p-6 shadow-[0_20px_60px_rgba(13,45,71,0.08)] backdrop-blur-md lg:sticky lg:top-32">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#5A7EFF]">
              Project Info
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#0d2d47]/45">
                  Client
                </p>
                <p className="mt-1 font-semibold text-[#0d2d47]">
                  {project.name}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#0d2d47]/45">
                  Category
                </p>
                <p className="mt-1 font-semibold text-[#0d2d47]">
                  {project.category}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#0d2d47]/45">
                  Website
                </p>
                <p className="mt-1 font-semibold text-[#0d2d47]">
                  {project.domain}
                </p>
              </div>
            </div>
          </aside>

          <article className="space-y-10">
            <section className="rounded-[30px] border border-[#0d2d47]/10 bg-white/55 p-6 shadow-[0_20px_60px_rgba(13,45,71,0.08)] backdrop-blur-md md:p-10">
              <h2 className="text-3xl font-semibold uppercase leading-tight text-[#0d2d47] md:text-5xl">
                What We Delivered
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {project.whatWeDid.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-[#0d2d47]/10 bg-[#EAEBDB]/75 p-5 transition hover:-translate-y-1 hover:bg-white/70"
                  >
                    <p className="font-medium text-[#0d2d47]">{point}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-6 rounded-[30px] border border-[#0d2d47]/10 bg-white/45 p-6 backdrop-blur-md md:grid-cols-[190px_1fr] md:p-10">
              <h2 className="text-lg font-semibold uppercase text-[#0d2d47]">
                Overview
              </h2>

              <p className="text-base leading-8 text-[#0d2d47]/72 md:text-lg">
                This project was planned to create a clean, responsive, and
                professional online presence for {project.name}. The design
                direction focused on brand trust, easy navigation, clear service
                communication, and a smooth user experience across desktop,
                tablet, and mobile devices.
              </p>
            </section>

            <section className="grid gap-6 rounded-[30px] border border-[#0d2d47]/10 bg-white/45 p-6 backdrop-blur-md md:grid-cols-[190px_1fr] md:p-10">
              <h2 className="text-lg font-semibold uppercase text-[#0d2d47]">
                Result
              </h2>

              <p className="text-base leading-8 text-[#0d2d47]/72 md:text-lg">
                The final website presents {project.name} with a stronger
                digital identity, better content structure, improved responsive
                design, and a more professional brand experience for visitors.
              </p>
            </section>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#0d2d47]/10 pt-8">
              <Link
                href="/case-studies"
                className="text-sm font-medium text-[#5A7EFF] underline underline-offset-4"
              >
                Back to All Case Studies
              </Link>

              <Link
                href="/contact"
                className="rounded-full bg-[#0d2d47] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#5A7EFF]"
              >
                Start Your Project
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}