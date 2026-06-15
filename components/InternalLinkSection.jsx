import Link from "next/link";

/**
 * @typedef {{
 *   href: string;
 *   title: string;
 *   description: string;
 * }} InternalLinkItem
 *
 * @typedef {{
 *   title: string;
 *   intro?: string;
 *   items: InternalLinkItem[];
 * }} InternalLinkSectionProps
 */

/** @param {InternalLinkSectionProps} props */
export default function InternalLinkSection({ title, intro, items }) {
  return (
    <section className="px-4 py-12 sm:px-6 md:px-10 md:py-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold uppercase leading-tight text-[#0d2d47] sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-base leading-8 text-[#0d2d47]/72">{intro}</p>
          ) : null}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[24px] border border-[#0d2d47]/10 bg-white/45 p-5 shadow-[0_18px_50px_rgba(13,45,71,0.08)] backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/65"
            >
              <h3 className="text-xl font-semibold uppercase leading-tight text-[#0d2d47]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#0d2d47]/72">
                {item.description}
              </p>
              <span className="mt-5 inline-flex text-sm font-semibold text-[#5A7EFF]">
                Explore Page {"->"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
