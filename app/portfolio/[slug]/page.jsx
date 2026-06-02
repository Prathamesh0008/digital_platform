// app/portfolio/[slug]/page.jsx
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaRocket,
  FaSearch,
  FaShieldAlt,
} from "react-icons/fa";
import { portfolioProjects } from "@/data/portfolio";

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

function Tag({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[#0d2d47]/10 bg-white/45 px-4 py-3 shadow-[0_12px_35px_rgba(13,45,71,0.07)] backdrop-blur-md">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7392FB]/15 text-[#7392FB]">
        <Icon />
      </span>
      <span className="text-sm font-bold uppercase text-[#0d2d47]/75">
        {children}
      </span>
    </div>
  );
}

function SectionHeading({ title, text }) {
  return (
    <div className="mb-10 max-w-5xl">
      <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[72px]">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 max-w-3xl text-base leading-8 text-[#0d2d47]/72 md:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
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
  const nextProject =
    portfolioProjects[(projectIndex + 1) % portfolioProjects.length];

  const outcomePoints = [
    `Created a stronger digital presence for ${project.name}.`,
    "Improved page structure for clearer service communication.",
    "Built responsive desktop and mobile experiences for modern users.",
    "Designed trust-led sections that support enquiries and business credibility.",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#EAEBDB] text-[#0d2d47]">
      {/* HERO */}
      <section
        className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 md:px-10 md:pb-24 md:pt-44"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 38%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-white/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -right-36 h-[560px] w-[560px] rounded-full bg-[#0d2d47]/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-4rem] right-[-1rem] text-[22vw] font-black uppercase leading-none tracking-tighter text-[#0d2d47]/[0.035]">
          WORK
        </div>

        <div className="relative mx-auto max-w-[1400px]">
          <Link
            href="/portfolio"
            className="mb-9 inline-flex items-center gap-3 rounded-full border border-[#0d2d47]/15 bg-white/30 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur-md transition hover:bg-white/55"
          >
            <FaArrowLeft />
            Back To Portfolio
          </Link>

          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[34px] border border-white/45 bg-white/30 p-6 shadow-[0_28px_90px_rgba(13,45,71,0.14)] backdrop-blur-md md:p-8">
              <div className="absolute right-5 top-5 rounded-full bg-[#0d2d47] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                Featured
              </div>

              <div className="flex min-h-[220px] items-center justify-center rounded-[26px] bg-white/45 p-8">
                <Image
                  src={project.logo}
                  alt={project.name}
                  width={320}
                  height={160}
                  className="max-h-[130px] w-auto object-contain"
                  priority
                />
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <Tag icon={FaSearch}>Strategy</Tag>
                <Tag icon={FaPalette}>Design</Tag>
                <Tag icon={FaLaptopCode}>Build</Tag>
              </div>
            </div>

            <div>
              <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-[4px_4px_0_rgba(115,146,251,0.45)]">
                {project.category}
              </p>

              <h1 className="max-w-5xl text-[44px] font-black uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-[88px]">
                {project.name}
              </h1>

              <p className="mt-5 text-base font-bold text-[#7392FB]">
                {project.domain}
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#0d2d47]/75 md:text-lg">
                {project.about}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(13,45,71,0.22)] transition hover:-translate-y-1 hover:bg-[#0d2d47]/90"
                >
                  Visit Live Website
                  <FaExternalLinkAlt className="text-xs" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex justify-center rounded-full border border-[#0d2d47]/20 bg-white/30 px-7 py-3 text-sm font-bold text-[#0d2d47] backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/55"
                >
                  Start Similar Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading title="Building A Clearer Digital Experience" />

          <div className="grid gap-4">
            {[
              `${project.name} needed a web presence that could communicate trust, explain the brand clearly, and work smoothly across desktop and mobile users.`,
              "Nova Techscience shaped the experience around clear information flow, modern presentation, responsive layouts, and conversion-led user journeys.",
              "The result is a focused digital platform that makes the brand easier to understand, evaluate, and contact.",
            ].map((text, i) => (
              <div
                key={text}
                className={`rounded-2xl border border-[#0d2d47]/10 p-5 leading-8 shadow-[0_16px_45px_rgba(13,45,71,0.07)] ${
                  i === 2
                    ? "bg-[#0d2d47] font-semibold text-white"
                    : "bg-white/50 text-[#0d2d47]/75"
                }`}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK SUMMARY */}
      <section
        className="px-4 py-16 sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 48%, #8EA5F1 100%)",
        }}
      >
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            title="Project Work Summary"
            text="A focused mix of strategy, interface design, responsive development, and conversion-led communication."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.whatWeDid.map((item) => (
              <div
                key={item}
                className="group rounded-2xl border border-[#0d2d47]/10 bg-white/35 p-5 shadow-[0_18px_50px_rgba(13,45,71,0.08)] backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/60"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#7392FB]/15 text-[#7392FB] transition group-hover:bg-[#0d2d47] group-hover:text-white">
                  <FaRocket />
                </span>
                <p className="text-sm font-bold uppercase leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE FLOW */}
      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading title="Challenge, Approach And Outcome" />

          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                icon: FaShieldAlt,
                label: "Challenge",
                text: `The ${project.category.toLowerCase()} needed to present information clearly while creating a polished first impression for visitors.`,
              },
              {
                icon: FaPalette,
                label: "Approach",
                text: "We focused on brand clarity, responsive UI structure, strong visual hierarchy, and a page flow that helps visitors understand the business quickly.",
              },
              {
                icon: FaRocket,
                label: "Outcome",
                text: "The final experience supports trust, easy navigation, and stronger conversion intent across desktop and mobile screens.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.label}
                  className="rounded-[26px] border border-[#0d2d47]/10 bg-white/50 p-6 shadow-[0_18px_55px_rgba(13,45,71,0.08)] backdrop-blur-md"
                >
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7392FB]/15 text-xl text-[#7392FB]">
                    <Icon />
                  </span>
                  <h3 className="text-2xl font-black uppercase">
                    {item.label}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[#0d2d47]/72">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PREVIEW */}
      <section className="bg-[#0d2d47] px-4 py-16 text-white sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            title="Desktop And Mobile Preview"
            text="A responsive visual system designed to keep the brand sharp, readable, and conversion-ready on every screen."
          />

          <div className="grid items-start gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">
                  Desktop Website
                </p>
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/70">
                  1440px Preview
                </span>
              </div>

              <div className="overflow-hidden rounded-[34px] border border-white/15 bg-white/10 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-md">
                <div className="flex items-center gap-2 rounded-t-[24px] border-b border-white/10 bg-white/10 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-white/35" />
                  <span className="h-3 w-3 rounded-full bg-white/25" />
                  <span className="h-3 w-3 rounded-full bg-white/15" />
                  <span className="ml-auto text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                    {project.domain}
                  </span>
                </div>

                <div
                  className="relative overflow-hidden rounded-b-[24px] bg-white"
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
            </div>

            <div className="lg:pt-16">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">
                  Mobile Website
                </p>
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/70">
                  Mobile UI
                </span>
              </div>

              <div className="relative mx-auto max-w-[330px]">
                <div className="absolute -left-10 top-16 h-28 w-28 rounded-full bg-[#7392FB]/30 blur-2xl" />
                <div className="absolute -right-8 bottom-16 h-32 w-32 rounded-full bg-white/15 blur-2xl" />

                <div className="relative rounded-[42px] border-[10px] border-black bg-black p-2 shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
                  <div className="mx-auto mb-2 h-1.5 w-20 rounded-full bg-white/20" />

                  <div
                    className="relative overflow-hidden rounded-[30px] bg-white"
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
        </div>
      </section>

      {/* IMPACT */}
      <section
        className="px-4 py-16 sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 36%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading title="Designed For Better Business Communication" />

          <div className="grid gap-4 sm:grid-cols-2">
            {outcomePoints.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#0d2d47]/10 bg-white/35 p-5 text-sm font-bold leading-relaxed shadow-[0_16px_45px_rgba(13,45,71,0.08)] backdrop-blur-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-4 md:grid-cols-2">
          <Link
            href={`/portfolio/${previousProject.slug}`}
            className="group rounded-[28px] border border-[#0d2d47]/10 bg-white/45 p-6 shadow-[0_20px_60px_rgba(13,45,71,0.08)] backdrop-blur-md transition hover:bg-white/70 md:p-8"
          >
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#0d2d47] text-white transition group-hover:-translate-x-1">
              <FaArrowLeft />
            </span>
            <span className="block text-xs font-bold uppercase tracking-[0.22em] text-[#0d2d47]/45">
              Previous Project
            </span>
            <span className="mt-2 block truncate text-2xl font-black uppercase">
              {previousProject.name}
            </span>
            <span className="mt-1 block text-sm text-[#0d2d47]/65">
              {previousProject.category}
            </span>
          </Link>

          <Link
            href={`/portfolio/${nextProject.slug}`}
            className="group rounded-[28px] border border-[#0d2d47]/10 bg-white/45 p-6 text-left shadow-[0_20px_60px_rgba(13,45,71,0.08)] backdrop-blur-md transition hover:bg-white/70 md:p-8 md:text-right"
          >
            <span className="mb-5 ml-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0d2d47] text-white transition group-hover:translate-x-1">
              <FaArrowRight />
            </span>
            <span className="block text-xs font-bold uppercase tracking-[0.22em] text-[#0d2d47]/45">
              Next Project
            </span>
            <span className="mt-2 block truncate text-2xl font-black uppercase">
              {nextProject.name}
            </span>
            <span className="mt-1 block text-sm text-[#0d2d47]/65">
              {nextProject.category}
            </span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#6887FB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1200px] rounded-[34px] border border-white/35 bg-white/20 p-8 text-center shadow-[0_30px_90px_rgba(13,45,71,0.22)] backdrop-blur-md md:p-12">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#0d2d47]/55">
            Build Your Next Website
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[76px]">
            Want A Website Like This?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
            Nova Techscience designs responsive websites that make your brand
            clearer, more credible, and easier to choose.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#0d2d47]/90"
            >
              Start Your Project
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-[#0d2d47]/20 bg-white/30 px-7 py-3 text-sm font-bold text-[#0d2d47] backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/55"
            >
              View All Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}