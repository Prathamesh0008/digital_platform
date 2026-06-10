import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import InternalLinkSection from "@/components/InternalLinkSection";
import { notFound } from "next/navigation";
import { portfolioProjects } from "@/data/portfolio";
import { projectRelatedLinks } from "@/lib/internalLinks";
import { absoluteUrl, siteName } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: `${project.name} Case Study | ${siteName}`,
    description: project.about,
    alternates: {
      canonical: `/case-studies/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} Case Study`,
      description: project.about,
      url: absoluteUrl(`/case-studies/${project.slug}`),
      images: [
        {
          url: project.desktop,
          alt: `${project.name} case study preview`,
        },
      ],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) notFound();

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${project.name} Case Study`,
    description: project.about,
    url: absoluteUrl(`/case-studies/${project.slug}`),
    image: absoluteUrl(project.desktop),
    creator: {
      "@type": "Organization",
      name: siteName,
    },
    about: project.whatWeDid,
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#EAEBDB] px-4 pb-20 pt-28 text-[#0d2d47] sm:px-6 md:px-10 md:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />

      <section className="mx-auto max-w-[1450px]">
        <div className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-white/60 via-white/25 to-[#C4CFE3]/45 p-5 shadow-[0_35px_100px_rgba(13,45,71,0.12)] backdrop-blur-md sm:rounded-[44px] md:p-8 lg:rounded-[56px] lg:p-10">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#5A7EFF]/20 blur-3xl" />
          <div className="absolute -bottom-28 -left-24 h-96 w-96 rounded-full bg-white/70 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <Link
                href="/case-studies"
                className="mb-6 inline-flex text-sm font-medium text-[#5A7EFF] underline underline-offset-4"
              >
                Back to Case Studies
              </Link>

              <div className="mt-4 flex h-16 w-44 items-center">
                <Image
                  src={project.logo}
                  alt={project.name}
                  width={220}
                  height={90}
                  className="max-h-14 w-auto object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#5A7EFF]">
                {project.category}
              </p>

              <h1 className="mt-4 text-4xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-[82px]">
                {project.name}
              </h1>

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
                  className="rounded-full bg-white/45 px-6 py-3 text-sm font-medium text-[#0d2d47] transition hover:bg-[#0d2d47] hover:text-white"
                >
                  Start Your Project
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[34px] bg-[#C4CFE3]/35 p-4 sm:rounded-[48px] sm:p-6 lg:min-h-[620px] lg:p-8">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#5A7EFF]/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/60 blur-3xl" />

              <div className="relative flex h-full items-center justify-center">
                <div className="relative w-full max-w-[900px]">
                  <div className="relative z-10 hidden overflow-hidden rounded-[34px] bg-white/55 p-2 shadow-[0_30px_90px_rgba(13,45,71,0.22)] backdrop-blur-md lg:block">
                    <div className="mb-2 flex items-center justify-between px-2">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0d2d47]/55">
                        Desktop Preview
                      </p>
                      <span className="rounded-full bg-[#0d2d47] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white">
                        Live
                      </span>
                    </div>

                    <div className="overflow-hidden rounded-[26px] bg-white">
                      <div className="h-[460px] w-full overflow-y-auto overflow-x-hidden bg-white">
                        <iframe
                          src={project.url}
                          title={`${project.name} desktop live website preview`}
                          loading="lazy"
                          className="h-[1100px] origin-top-left border-0 bg-white"
                          style={{
                            width: "1440px",
                            transform: "scale(0.5)",
                            transformOrigin: "top left",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mx-auto w-[245px] overflow-hidden rounded-[34px] border-[7px] border-[#0d2d47] bg-white shadow-[0_24px_65px_rgba(13,45,71,0.35)] sm:w-[285px] lg:absolute lg:-bottom-10 lg:-right-4 lg:z-30 lg:w-[190px]">
                    <div className="mx-auto mt-2 h-1.5 w-14 rounded-full bg-[#0d2d47]/25" />

                    <div className="mt-2 h-[500px] overflow-y-auto overflow-x-hidden bg-white sm:h-[560px] lg:h-[380px]">
                      <iframe
                        src={project.url}
                        title={`${project.name} mobile live website preview`}
                        loading="lazy"
                        className="h-[900px] origin-top-left border-0 bg-white"
                        style={{
                          width: "390px",
                          transform: "scale(0.58)",
                          transformOrigin: "top left",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {project.metrics?.length > 0 && (
            <div className="relative mt-12 grid gap-6 border-t border-[#0d2d47]/10 pt-8 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={`${metric.value}-${metric.label}`}>
                  <p className="text-4xl font-semibold text-[#5A7EFF]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0d2d47]/55">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-[1450px] gap-10 lg:mt-16 lg:grid-cols-[300px_1fr] lg:gap-12">
        <aside className="h-fit rounded-[32px] bg-white/35 p-5 backdrop-blur-md sm:p-6 lg:sticky lg:top-32 lg:rounded-[40px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A7EFF]">
            Project Info
          </p>

          <div className="mt-6 space-y-5">
            {[
              ["Client", project.name],
              ["Category", project.category],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-[#0d2d47]/10 pb-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#0d2d47]/45">
                  {label}
                </p>
                <p className="mt-1 font-semibold text-[#0d2d47]">{value}</p>
              </div>
            ))}
          </div>

          {project.services?.length > 0 && (
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0d2d47]/45">
                Services
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-white/55 px-3 py-2 text-xs font-medium text-[#0d2d47]/75"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          )}
        </aside>

        <article className="space-y-14 lg:space-y-16">
          {project.projectOverview?.length > 0 && (
            <section>
              <h2 className="text-center text-3xl font-semibold uppercase leading-tight md:text-5xl">
                Project Overview
              </h2>

              <div className="mx-auto mt-8 max-w-4xl space-y-5 text-center text-base leading-8 text-[#0d2d47]/75 md:text-lg">
                {project.projectOverview.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </section>
          )}

          {project.resultCards?.length > 0 && (
            <section>
              <h2 className="text-center text-3xl font-semibold uppercase leading-tight md:text-5xl">
                The Results
              </h2>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {project.resultCards.map((card) => (
                  <div
                    key={`${card.value}-${card.label}`}
                    className="overflow-hidden rounded-2xl bg-[#416a9f] text-white shadow-[0_18px_50px_rgba(13,45,71,0.12)]"
                  >
                    <div className="p-6 text-center">
                      <p className="text-4xl font-bold md:text-5xl">
                        {card.value}
                      </p>
                    </div>
                    <div className="bg-white/10 px-4 py-4 text-center">
                      <p className="text-sm font-semibold">{card.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {project.resultText?.length > 0 && (
                <div className="mx-auto mt-8 max-w-4xl space-y-5 text-center text-base leading-8 text-[#0d2d47]/75 md:text-lg">
                  {project.resultText.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              )}
            </section>
          )}

          {project.execution?.length > 0 && (
            <section>
              <h2 className="text-center text-3xl font-semibold uppercase leading-tight md:text-5xl">
                The Execution
              </h2>

              <p className="mx-auto mt-6 max-w-4xl text-center text-base leading-8 text-[#0d2d47]/75 md:text-lg">
                We used a structured execution approach focused on strategy,
                clarity and performance so the project could deliver a polished
                experience instead of only a visual redesign.
              </p>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="space-y-6">
                  {project.execution.slice(0, 2).map((item, index) => (
                    <div
                      key={item.title}
                      className="rounded-[28px] bg-[#e9f1fb] p-5 sm:p-6"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0d2d47] text-sm font-bold text-white sm:h-12 sm:w-12">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-[#0d2d47]">
                            {item.title}
                          </h3>
                          <p className="mt-3 leading-8 text-[#0d2d47]/75">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex min-h-[260px] items-center justify-center overflow-hidden rounded-[34px] bg-white/40 p-3 shadow-[0_24px_70px_rgba(13,45,71,0.12)] sm:min-h-[360px] lg:min-h-[420px]">
                  <Image
                    src={project.desktop}
                    alt={`${project.name} execution`}
                    width={900}
                    height={560}
                    className="h-full w-full rounded-[26px] object-cover object-top"
                  />
                </div>

                {project.execution.slice(2).map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-[28px] bg-[#e9f1fb] p-5 sm:p-6 lg:col-span-2"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0d2d47] text-sm font-bold text-white sm:h-12 sm:w-12">
                        {index + 3}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#0d2d47]">
                          {item.title}
                        </h3>
                        <p className="mt-3 leading-8 text-[#0d2d47]/75">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-3xl font-semibold uppercase leading-tight md:text-5xl">
              What We Delivered
            </h2>

            <div className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {project.whatWeDid.map((point, index) => (
                <div
                  key={point}
                  className="flex gap-4 border-t border-[#0d2d47]/10 pt-5"
                >
                  <span className="text-sm font-semibold text-[#5A7EFF]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-medium leading-7 text-[#0d2d47]/80">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-10">
            {[
              ["Challenge", project.challenge],
              ["Solution", project.solution],
              ["Outcome", project.outcome],
            ].map(([title, text]) => (
              <div
                key={title}
                className="grid gap-5 border-t border-[#0d2d47]/10 pt-8 md:grid-cols-[190px_1fr]"
              >
                <h2 className="text-lg font-semibold uppercase text-[#0d2d47]">
                  {title}
                </h2>
                <p className="text-base leading-8 text-[#0d2d47]/72 md:text-lg">
                  {text}
                </p>
              </div>
            ))}
          </section>

          {project.sections?.length > 0 && (
            <section>
              <h2 className="text-3xl font-semibold uppercase leading-tight md:text-5xl">
                Project Details
              </h2>

              <div className="mt-8 space-y-8">
                {project.sections.map((section, index) => (
                  <div
                    key={section.title}
                    className="grid gap-5 border-t border-[#0d2d47]/10 pt-8 md:grid-cols-[80px_1fr]"
                  >
                    <span className="text-sm font-semibold text-[#5A7EFF]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-2xl font-semibold uppercase">
                        {section.title}
                      </h3>
                      <p className="mt-3 text-base leading-8 text-[#0d2d47]/72">
                        {section.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.faqs?.length > 0 && (
            <section>
              <h2 className="text-3xl font-semibold uppercase leading-tight md:text-5xl">
                FAQs
              </h2>

              <div className="mt-8 divide-y divide-[#0d2d47]/10">
                {project.faqs.map((faq) => (
                  <div key={faq.q} className="py-6">
                    <h3 className="font-semibold text-[#0d2d47]">{faq.q}</h3>
                    <p className="mt-3 leading-7 text-[#0d2d47]/70">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

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

      <InternalLinkSection
        title="Related Services And Insights"
        intro="Use these connected pages to explore the strategy, SEO, and design services behind project execution."
        items={projectRelatedLinks}
      />
    </main>
  );
}