import Link from "next/link";

const serviceDetails = [
  {
    name: "Brand Strategy",
    detail: "Positioning, messaging, and visual direction to build a consistent brand identity.",
  },
  {
    name: "Digital Marketing",
    detail: "Cross-channel campaigns focused on qualified traffic, leads, and measurable growth.",
  },
  {
    name: "SEO Optimization",
    detail: "Technical SEO, on-page structure, and content strategy to improve ranking visibility.",
  },
  {
    name: "Social Media",
    detail: "Content systems and engagement playbooks designed for audience growth and retention.",
  },
  {
    name: "Performance Ads",
    detail: "Data-driven paid campaigns with clear testing frameworks and ROI tracking.",
  },
  {
    name: "Web Design",
    detail: "Modern websites engineered for trust, speed, and conversion across all devices.",
  },
];

export default function ServiceDetailsPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#ffffff_0%,#eff4ff_45%,#e4ecff_100%)] px-4 py-20 sm:px-6 md:px-10">
      <section className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#5A7EFF]">Services</p>
        <h1 className="mt-3 text-4xl font-semibold text-[#0d2d47] md:text-6xl">Service Details</h1>
        <p className="mt-4 max-w-2xl text-[#0d2d47]/70">
          Everything behind our delivery model, from strategy and design to acquisition and growth.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {serviceDetails.map((service) => (
            <article key={service.name} className="rounded-2xl border border-[#d6def2] bg-white p-6">
              <h2 className="text-xl font-semibold text-[#0d2d47]">{service.name}</h2>
              <p className="mt-2 text-sm text-[#0d2d47]/70">{service.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-[#5A7EFF] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#496ae8]"
          >
            Start a Project
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-[#0d2d47]/20 px-6 py-2.5 text-sm font-medium text-[#0d2d47]"
          >
            Back to Services
          </Link>
        </div>
      </section>
    </main>
  );
}
