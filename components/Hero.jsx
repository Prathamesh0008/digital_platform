import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] w-full items-end overflow-hidden bg-[#0d2d47] px-4 pb-12 pt-32 sm:px-6 md:px-10 md:pb-16">
      <Image
        src="/Home_1.avif"
        alt="Nova Techscience digital marketing team"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,45,71,0.92),rgba(13,45,71,0.62),rgba(13,45,71,0.18))]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,#EAEBDB,rgba(234,235,219,0))]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <div className="max-w-4xl">
          {/* <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
            Temporary Home Hero
          </p> */}

          <h1 className="text-5xl font-semibold uppercase leading-[0.92] text-white sm:text-6xl md:text-[92px] lg:text-[112px]">
            Nova Techscience
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg md:text-xl">
            Digital marketing, SEO, website development, and performance
            strategy for brands that want stronger visibility and measurable
            growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0d2d47] transition hover:bg-[#EAEBDB]"
            >
              Start A Project
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-[#0d2d47]"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
