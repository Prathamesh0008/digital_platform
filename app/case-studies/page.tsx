import Link from "next/link";

const studies = [
  {
    title: "Nova Tech Sciences",
    sector: "Corporate",
    summary: "Built a trust-first corporate website focused on clarity, speed, and lead capture.",
    url: "https://www.novatechsciences.com/",
  },
  {
    title: "Ivexia Pharma",
    sector: "Pharma",
    summary: "Designed a pharma brand experience with strong product communication and modern UI.",
    url: "https://www.ivexiapharma.com/",
  },
  {
    title: "ED Pharma",
    sector: "Healthcare",
    summary: "Created a healthcare-focused platform with clean structure and conversion-friendly UX.",
    url: "https://www.edpharma.co/",
  },
  {
    title: "Bio-Peptides",
    sector: "Biotech",
    summary: "Developed a biotech web presence that simplifies complex offerings for global audiences.",
    url: "https://www.bio-peptides.com/",
  },
  {
    title: "Larksois Pharma",
    sector: "Pharma",
    summary: "Delivered a brand-led pharma website balancing visual identity with business goals.",
    url: "https://www.larksoispharma.com/",
  },
  {
    title: "KVA Logistics",
    sector: "Logistics",
    summary: "Built a logistics-first interface that presents services, reliability, and operations clearly.",
    url: "https://www.kvalogistics.nl/",
  },
  {
    title: "AS Blogi",
    sector: "Publishing",
    summary: "Launched a content-driven blog platform optimized for readability and engagement.",
    url: "https://asblogi.com/",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#f5f7ff_0%,#e9eefc_45%,#dde8fa_100%)] px-4 py-20 sm:px-6 md:px-10">
      <section className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#5A7EFF]">Portfolio</p>
        <h1 className="mt-3 text-4xl font-semibold text-[#0d2d47] md:text-6xl">Case Studies</h1>
        <p className="mt-4 max-w-2xl text-[#0d2d47]/70">
          A focused breakdown of selected projects across pharma, biotech, logistics, and digital media.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {studies.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#d6def2] bg-white p-6 shadow-[0_15px_35px_-25px_rgba(13,45,71,0.5)]"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-[#5A7EFF]">{item.sector}</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#0d2d47]">{item.title}</h2>
              <p className="mt-3 text-sm text-[#0d2d47]/70">{item.summary}</p>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-[#0d2d47] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#163f61]"
              >
                Visit Live Site
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/portfolio" className="text-[#5A7EFF] underline underline-offset-4">
            Back to Portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
