import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blog";

export const metadata = {
  title: "Our Website Projects | NovaTech",
  description: "Explore websites and digital projects created by NovaTech.",
};

export default function BlogPage() {
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
          <p className="mb-5 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur-md">
            Website Projects
          </p>

          <h1 className="max-w-5xl text-[44px] font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-[88px] lg:text-[104px]">
            Brands We Have Worked With
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
            Explore selected websites we designed and developed. Click any logo
            to view the full project details, screenshots and work done.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((project) => (
            <Link
              key={project.slug}
              href={`/services/blog/${project.slug}`}
              className="group rounded-[32px] border border-[#0d2d47]/10 bg-white/35 p-6 shadow-[0_24px_70px_rgba(13,45,71,0.12)] backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/50"
            >
              <div className="flex h-[170px] items-center justify-center rounded-[24px] border border-white/50 bg-white/40 p-8">
                <Image
                  src={project.logo}
                  alt={project.name}
                  width={220}
                  height={110}
                  className="max-h-[90px] w-auto object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-6">
                <p className="mb-3 inline-flex rounded-full bg-[#0d2d47] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                  {project.category}
                </p>

                <h2 className="text-2xl font-semibold uppercase leading-tight">
                  {project.name}
                </h2>

                <p className="mt-2 text-sm font-medium text-[#0d2d47]/55">
                  {project.domain}
                </p>

                <p className="mt-5 text-sm font-semibold text-[#5A7EFF]">
                  View Project →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}