//app\portfolio\[slug]\page.jsx
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { portfolioProjects } from "@/data/portfolio";

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function PortfolioDetailPage({ params }) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) notFound();

  const projectIndex = portfolioProjects.findIndex((item) => item.slug === slug);
  const previousProject =
    portfolioProjects[
      (projectIndex - 1 + portfolioProjects.length) % portfolioProjects.length
    ];
  const nextProject = portfolioProjects[(projectIndex + 1) % portfolioProjects.length];

  const outcomePoints = [
    `Created a stronger digital presence for ${project.name}.`,
    "Improved page structure for clearer service communication.",
    "Built responsive desktop and mobile experiences for modern users.",
    "Designed trust-led sections that support enquiries and business credibility.",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#EAEBDB] text-[#0d2d47]">
      <section
        className="relative px-4 pb-16 pt-32 sm:px-6 md:px-10 md:pb-24 md:pt-40"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 38%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <div className="pointer-events-none absolute -right-40 top-24 h-[460px] w-[460px] rounded-full bg-white/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-[520px] w-[520px] rounded-full bg-[#0d2d47]/10 blur-3xl" />

        <div className="mx-auto max-w-[1400px]">
          <Link
            href="/portfolio"
            className="mb-8 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-md"
          >
            ← Back To Portfolio
          </Link>

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[34px] border border-white/45 bg-white/30 p-8 shadow-[0_24px_70px_rgba(13,45,71,0.12)] backdrop-blur-md">
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#0d2d47]/45">
                Featured Project
              </p>
              <Image
                src={project.logo}
                alt={project.name}
                width={280}
                height={140}
                className="max-h-[120px] w-auto object-contain"
                priority
              />
              <div className="mt-10 grid gap-px overflow-hidden rounded-[22px] bg-[#0d2d47]/10">
                {["Strategy", "Design", "Responsive Build"].map((item) => (
                  <div
                    key={item}
                    className="bg-white/35 px-4 py-3 text-sm font-semibold backdrop-blur-md"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                {project.category}
              </p> */}

              <h1 className="text-[42px] font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-[88px]">
                {project.name}
              </h1>

              <p className="mt-5 text-base font-medium text-[#0d2d47]/55">
                {project.domain}
              </p>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
                {project.about}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
                >
                  Visit Live Website
                </a>
                <Link
                  href="/contact"
                  className="inline-flex justify-center rounded-full border border-[#0d2d47]/20 bg-white/25 px-7 py-3 text-sm font-medium text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
                >
                  Start Similar Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            {/* <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#0d2d47]/55">
              Project Overview
            </p> */}

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[72px]">
              Building A Clearer Digital Experience
            </h2>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
            <p>
              {project.name} needed a web presence that could communicate trust,
              explain the brand clearly, and work smoothly across desktop and
              mobile users.
            </p>
            <p>
              Nova Techscience shaped the experience around clear information
              flow, modern presentation, responsive layouts, and conversion-led
              user journeys.
            </p>
            <p className="border-l-4 border-[#0d2d47] pl-5 font-semibold text-[#0d2d47]">
              The result is a focused digital platform that makes the brand
              easier to understand, evaluate, and contact.
            </p>
          </div>
        </div>
      </section>

      <section
        className="px-4 py-16 sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(to bottom, #EAEBDB, #C4CFE3, #8EA5F1)",
        }}
      >
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            {/* <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#0d2d47]/55">
              What We Did
            </p> */}

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[72px]">
              Project Work Summary
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[24px] bg-[#0d2d47]/10 sm:grid-cols-2">
            {project.whatWeDid.map((item) => (
              <div
                key={item}
                className="bg-white/30 p-5 text-sm font-semibold text-[#0d2d47] backdrop-blur-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 max-w-5xl">
            {/* <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#0d2d47]/55">
              Case Study Flow
            </p> */}
            <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[72px]">
              Challenge, Approach And Outcome
            </h2>
          </div>

          <div className="divide-y divide-[#0d2d47]/12 border-y border-[#0d2d47]/12">
            {[
              {
                label: "Challenge",
                text: `The ${project.category.toLowerCase()} needed to present information clearly while creating a polished first impression for visitors.`,
              },
              {
                label: "Approach",
                text: "We focused on brand clarity, responsive UI structure, strong visual hierarchy, and a page flow that helps visitors understand the business quickly.",
              },
              {
                label: "Outcome",
                text: "The final experience supports trust, easy navigation, and stronger conversion intent across desktop and mobile screens.",
              },
            ].map((item) => (
              <article
                key={item.label}
                className="grid gap-4 py-7 md:grid-cols-[0.28fr_0.72fr]"
              >
                <h3 className="text-2xl font-semibold uppercase leading-tight">
                  {item.label}
                </h3>
                <p className="text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12">
            {/* <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#0d2d47]/55">
              Screenshots
            </p> */}

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[72px]">
              Desktop And Mobile Preview
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#0d2d47]/55">
                Desktop Website
              </p>

              <div
                className="relative overflow-hidden rounded-[34px] border border-[#0d2d47]/10 bg-white shadow-[0_28px_90px_rgba(13,45,71,0.16)]"
                style={{ aspectRatio: "1903 / 902" }}
              >
                <Image
                  src={project.desktop}
                  alt={`${project.name} desktop`}
                  fill
                  className="object-contain object-top"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                />
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#0d2d47]/55">
                Mobile Website
              </p>

              <div className="mx-auto max-w-[285px] rounded-[32px] border-[8px] border-[#0d2d47] bg-[#0d2d47] shadow-[0_24px_70px_rgba(13,45,71,0.18)] sm:max-w-[310px]">
                <div
                  className="relative overflow-hidden rounded-[24px] bg-white"
                  style={{ aspectRatio: "317 / 799" }}
                >
                  <Image
                    src={project.mobile}
                    alt={`${project.name} mobile`}
                    fill
                    className="object-contain object-top"
                    sizes="360px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="px-4 py-16 sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 36%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            {/* <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#0d2d47]/55">
              Project Impact
            </p> */}
            <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[72px]">
              Designed For Better Business Communication
            </h2>
          </div>

          <div className="divide-y divide-[#0d2d47]/12 border-y border-[#0d2d47]/12">
            {outcomePoints.map((item) => (
              <p key={item} className="py-4 text-sm font-semibold md:text-base">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-px overflow-hidden rounded-[28px] bg-[#0d2d47]/10 shadow-[0_24px_80px_rgba(13,45,71,0.12)] md:grid-cols-2">
          <Link
            href={`/portfolio/${previousProject.slug}`}
            className="group flex items-center gap-5 bg-white/35 p-6 backdrop-blur-md transition hover:bg-white/60 md:p-8"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#0d2d47]/15 text-xl font-semibold text-[#0d2d47] transition group-hover:-translate-x-1 group-hover:bg-[#0d2d47] group-hover:text-white">
              ←
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-[#0d2d47]/45">
                Previous Project
              </span>
              <span className="mt-1 block truncate text-xl font-semibold uppercase leading-tight">
                {previousProject.name}
              </span>
              <span className="mt-1 block text-sm text-[#0d2d47]/65">
                {previousProject.category}
              </span>
            </span>
          </Link>

          <Link
            href={`/portfolio/${nextProject.slug}`}
            className="group flex items-center justify-between gap-5 bg-white/35 p-6 text-left backdrop-blur-md transition hover:bg-white/60 md:p-8 md:text-right"
          >
            <span className="min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-[#0d2d47]/45">
                Next Project
              </span>
              <span className="mt-1 block truncate text-xl font-semibold uppercase leading-tight">
                {nextProject.name}
              </span>
              <span className="mt-1 block text-sm text-[#0d2d47]/65">
                {nextProject.category}
              </span>
            </span>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#0d2d47]/15 text-xl font-semibold text-[#0d2d47] transition group-hover:translate-x-1 group-hover:bg-[#0d2d47] group-hover:text-white">
              →
            </span>
          </Link>
        </div>
      </section>

      <section className="bg-[#6887FB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#0d2d47]/55">
            Build Your Next Website
          </p>
          <h2 className="mx-auto max-w-4xl text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[76px]">
            Want A Website Like This?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
            Nova Techscience designs responsive websites that make your brand
            clearer, more credible, and easier to choose.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
            >
              Start Your Project
            </Link>
            <Link
              href="/portfolio"
              className="rounded-full border border-[#0d2d47]/20 bg-white/25 px-7 py-3 text-sm font-medium text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
            >
              View All Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
