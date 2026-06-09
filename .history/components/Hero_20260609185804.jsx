import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden bg-[#0d2d47] px-4 pt-28 sm:px-6 sm:pt-32 md:px-10">
      <Image
        src="/Hero-image-desktop.avif"
        alt="Nova Techscience digital marketing and website strategy"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,31,0.72),rgba(13,45,71,0.58),rgba(13,45,71,0.74))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(156,173,218,0.18),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(0deg,#EAEBDB,rgba(234,235,219,0))]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center pb-10 text-center sm:pb-14 md:pb-16">
        

        <h1 className="mt-6 max-w-5xl text-[2.45rem] font-semibold uppercase leading-[0.94] tracking-[-0.05em] text-white sm:text-[3.8rem] md:text-[5rem] lg:text-[5.9rem]">
          Grow Online
          <br />
          With Clarity
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg md:text-[1.15rem]">
          Digital marketing, SEO, and website development for brands that want
          sharper visibility, better conversion, and steady growth.
        </p>

        <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/contact"
            className="w-full rounded-full bg-white px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-[#0d2d47] transition hover:bg-[#dfe7f5] sm:w-auto"
          >
            Start A Project
          </Link>
          <Link
            href="/services"
            className="w-full rounded-full border border-white/24 bg-white/8 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition hover:bg-white hover:text-[#0d2d47] sm:w-auto"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
