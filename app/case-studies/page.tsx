import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/data/portfolio";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#EAEBDB] px-4 pb-20 pt-32 sm:px-6 md:px-10 md:pt-36">
      <section className="mx-auto max-w-[1400px]">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5A7EFF]">
              Case Studies
            </p>

            <h1 className="mt-4 text-5xl font-semibold uppercase leading-[0.9] tracking-tight text-[#0d2d47] sm:text-6xl md:text-[92px]">
              Websites
              <br />
              We Built
            </h1>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[#0d2d47]/70 md:text-lg">
            Explore selected websites designed and developed by NovaTech
            Sciences. Each project focuses on clean UI, responsive layouts,
            strong brand presentation, and better digital presence.
          </p>
        </div>

        <div className="grid gap-8">
          {portfolioProjects.map((item, index) => (
            <article
              key={item.slug}
              className="group overflow-hidden rounded-[34px] border border-[#0d2d47]/10 bg-white/45 shadow-[0_24px_70px_rgba(13,45,71,0.1)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/65"
            >
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10">
                  <div>
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <span className="rounded-full bg-[#0d2d47] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white">
                        {item.category}
                      </span>

                      <span className="text-sm font-medium text-[#0d2d47]/45">
                        0{index + 1}
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

                    <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-[#5A7EFF]">
                      {item.domain}
                    </p>

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

                <div className="relative min-h-[320px] overflow-hidden bg-[#C4CFE3]/40 p-5 sm:min-h-[420px] sm:p-8">
                  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#5A7EFF]/20 blur-3xl" />
                  <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/50 blur-3xl" />

                  <div className="relative flex h-full items-center justify-center">
                    <div className="relative w-full max-w-[760px]">
                      <div className="overflow-hidden rounded-[28px] border border-white/60 bg-white/40 p-2 shadow-[0_30px_80px_rgba(13,45,71,0.22)] backdrop-blur-md">
                        <div className="overflow-hidden rounded-[22px] bg-white">
                       <div className="h-[380px] w-full overflow-hidden bg-white">
  <iframe
    src={item.url}
    title={`${item.name} live website preview`}
    loading="lazy"
    className="h-[760px] origin-top-left border-0 bg-white"
    style={{
      width: "1440px",
      transform: "scale(0.5)",
    }}
  />
</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
    </main>
  );
}