import Link from "next/link";

export default function BlogInterlinkSection({
  title = "Related Reading",
  intro = "Continue with closely related blog articles that expand on this topic.",
  items = [],
}) {
  if (!items.length) return null;

  return (
    <section className="px-4 py-16 sm:px-6 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1180px] rounded-[30px] border border-[#0d2d47]/8 bg-white p-8 shadow-[0_20px_60px_rgba(13,45,71,0.08)] md:p-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7392FB]">
            Internal Linking
          </p>
          <h2 className="mt-3 text-3xl font-semibold uppercase leading-tight text-[#0d2d47] md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#40536a] md:text-lg">
            {intro}
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[24px] border border-[#0d2d47]/8 bg-[#f7f8fb] p-6 shadow-[0_12px_32px_rgba(13,45,71,0.05)] transition hover:-translate-y-1 hover:bg-white"
            >
              <h3 className="text-lg font-semibold uppercase leading-tight text-[#0d2d47]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#40536a]">
                {item.description}
              </p>
              <span className="mt-5 inline-flex text-sm font-semibold text-[#5A7EFF]">
                Read Article {"->"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
