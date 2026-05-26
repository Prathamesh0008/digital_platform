import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blog";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const project = blogs.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen overflow-hidden bg-[#EAEBDB] text-[#0d2d47]">
      <section
        className="px-4 pb-16 pt-32 sm:px-6 md:px-10 md:pb-24 md:pt-40"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 38%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <div className="mx-auto max-w-[1400px]">
          <Link
            href="/services/blog"
            className="mb-8 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-md"
          >
            ← Back To Projects
          </Link>

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="rounded-[34px] border border-white/45 bg-white/30 p-8 shadow-[0_24px_70px_rgba(13,45,71,0.12)] backdrop-blur-md">
              <Image
                src={project.logo}
                alt={project.name}
                width={280}
                height={140}
                className="max-h-[120px] w-auto object-contain"
                priority
              />
            </div>

            <div>
              <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                {project.category}
              </p>

              <h1 className="text-[42px] font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-[88px]">
                {project.name}
              </h1>

              <p className="mt-5 text-base font-medium text-[#0d2d47]/55">
                {project.domain}
              </p>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
                {project.about}
              </p>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
              >
                Visit Live Website
              </a>
            </div>
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
            <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              What We Did
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[72px]">
              Project Work Summary
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {project.whatWeDid.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-white/35 bg-white/30 p-5 text-sm font-semibold text-[#0d2d47] backdrop-blur-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12">
            <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Screenshots
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[72px]">
              Desktop And Mobile Preview
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#0d2d47]/55">
                Desktop Website
              </p>

              <div className="relative min-h-[360px] overflow-hidden rounded-[34px] border border-[#0d2d47]/10 bg-white/40 shadow-[0_28px_90px_rgba(13,45,71,0.16)] md:min-h-[620px]">
                <Image
                  src={project.desktop}
                  alt={`${project.name} desktop screenshot`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                />
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#0d2d47]/55">
                Mobile Website
              </p>

              <div className="mx-auto max-w-[360px] rounded-[38px] border-[10px] border-[#0d2d47] bg-[#0d2d47] shadow-[0_28px_90px_rgba(13,45,71,0.2)]">
                <div className="relative min-h-[640px] overflow-hidden rounded-[28px] bg-white">
                  <Image
                    src={project.mobile}
                    alt={`${project.name} mobile screenshot`}
                    fill
                    className="object-cover object-top"
                    sizes="360px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}