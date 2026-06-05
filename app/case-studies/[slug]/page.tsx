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
    <main className="min-h-screen overflow-hidden bg-[#EAEBDB] px-4 pb-20 pt-32 text-[#0d2d47] sm:px-6 md:px-10 md:pt-36">
      <section className="mx-auto max-w-[1450px]">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-[42px] border border-[#0d2d47]/10 bg-white/45 p-5 shadow-[0_30px_90px_rgba(13,45,71,0.12)] backdrop-blur-md md:p-8 lg:p-10">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#5A7EFF]/20 blur-3xl" />
          <div className="absolute -bottom-28 -left-24 h-96 w-96 rounded-full bg-white/70 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            {/* LEFT CONTENT */}
            <div>
              <Link
                href="/case-studies"
                className="mb-8 inline-flex text-sm font-medium text-[#5A7EFF] underline underline-offset-4"
              >
                Back to Case Studies
              </Link>

              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5A7EFF]">
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

              <h1 className="mt-6 text-5xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-[82px]">
                {project.name}
              </h1>
{/* 
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-[#5A7EFF]">
                {project.domain}
              </p> */}

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
                  href="/contact"
                  className="rounded-full border border-[#0d2d47]/20 bg-white/35 px-6 py-3 text-sm font-medium text-[#0d2d47] transition hover:bg-[#0d2d47] hover:text-white"
                >
                  Start Your Project
                </Link>
              </div>
            </div>

            {/* RIGHT PREVIEW */}
            <div className="relative min-h-[520px] overflow-hidden rounded-[34px] bg-[#C4CFE3]/45 p-5 sm:min-h-[620px] sm:p-8">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#5A7EFF]/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/60 blur-3xl" />

              <div className="relative flex h-full items-center justify-center">
                <div className="relative w-full max-w-[900px]">
                  {/* DESKTOP */}
                  <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/70 bg-white/45 p-2 shadow-[0_30px_90px_rgba(13,45,71,0.22)] backdrop-blur-md">
                    <div className="mb-2 flex items-center justify-between px-2">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0d2d47]/55">
                        Desktop Preview
                      </p>
                      <span className="rounded-full bg-[#0d2d47] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white">
                        Live
                      </span>
                    </div>

                    <div className="overflow-hidden rounded-[22px] bg-white">
                      <div className="h-[380px] w-full overflow-hidden bg-white sm:h-[460px]">
                        <iframe
                          src={project.url}
                          title={`${project.name} desktop live website preview`}
                          loading="lazy"
                          className="h-[1100px] origin-top-left border-0 bg-white"
                          style={{
                            width: "1440px",
                            transform: "scale(0.5)",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* MOBILE */}
                  <div className="absolute -bottom-10 -right-1 z-30 hidden w-[165px] overflow-hidden rounded-[30px] border-[7px] border-[#0d2d47] bg-white shadow-[0_24px_65px_rgba(13,45,71,0.35)] sm:block md:w-[190px] lg:-right-4">
                    <div className="mx-auto mt-2 h-1.5 w-14 rounded-full bg-[#0d2d47]/25" />

                    <div className="mt-2 h-[330px] overflow-hidden bg-white md:h-[380px]">
                      <iframe
                        src={project.url}
                        title={`${project.name} mobile live website preview`}
                        loading="lazy"
                        className="h-[760px] origin-top-left border-0 bg-white"
                        style={{
                          width: "390px",
                          transform: "scale(0.48)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="mx-auto mt-12 grid max-w-[1450px] gap-8 lg:grid-cols-[320px_1fr]">
        <aside className="h-fit rounded-[30px] border border-[#0d2d47]/10 bg-white/55 p-6 shadow-[0_20px_60px_rgba(13,45,71,0.08)] backdrop-blur-md lg:sticky lg:top-32">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A7EFF]">
            Project Info
          </p>

          <div className="mt-6 space-y-5">
            {[
              ["Client", project.name],
              ["Category", project.category],
              // ["Website", project.domain],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs uppercase tracking-[0.16em] text-[#0d2d47]/45">
                  {label}
                </p>
                <p className="mt-1 font-semibold text-[#0d2d47]">{value}</p>
              </div>
            ))}
          </div>
        </aside>

        <article className="space-y-8">
          <section className="rounded-[34px] border border-[#0d2d47]/10 bg-white/55 p-6 shadow-[0_20px_60px_rgba(13,45,71,0.08)] backdrop-blur-md md:p-10">
            <h2 className="text-3xl font-semibold uppercase leading-tight md:text-5xl">
              What We Delivered
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {project.whatWeDid.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-[#0d2d47]/10 bg-[#EAEBDB]/75 p-5 transition hover:-translate-y-1 hover:bg-white/80"
                >
                  <p className="font-medium">{point}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 rounded-[34px] border border-[#0d2d47]/10 bg-white/45 p-6 backdrop-blur-md md:grid-cols-[190px_1fr] md:p-10">
            <h2 className="text-lg font-semibold uppercase">Overview</h2>
            <p className="text-base leading-8 text-[#0d2d47]/72 md:text-lg">
              This project was planned to create a clean, responsive, and
              professional online presence for {project.name}. The design
              direction focused on brand trust, easy navigation, clear service
              communication, and a smooth user experience across desktop,
              tablet, and mobile devices.
            </p>
          </section>

          <section className="grid gap-6 rounded-[34px] border border-[#0d2d47]/10 bg-white/45 p-6 backdrop-blur-md md:grid-cols-[190px_1fr] md:p-10">
            <h2 className="text-lg font-semibold uppercase">Result</h2>
            <p className="text-base leading-8 text-[#0d2d47]/72 md:text-lg">
              The final website presents {project.name} with a stronger digital
              identity, better content structure, improved responsive design, and
              a more professional brand experience for visitors.
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
      </section>
    </main>
  );
} 