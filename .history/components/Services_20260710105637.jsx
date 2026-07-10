import Link from "next/link";
import { services } from "@/data/servicesData";

export default function Services() {
  const featuredPoints = [
    "Strategy-first planning",
    "Creative + performance execution",
    "Tracking built into every rollout",
  ];

  return (
    <section
      className="relative py-7 md:py-8"
      style={{
        background:
          "linear-gradient(to bottom, #9CADDA 0%, #BFC8DD 58%, #E8E9DD 100%)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
          <div className="h-fit pt-1 lg:sticky lg:top-24 lg:pt-3 lg:pl-10">
            <h2 className="text-4xl font-semibold uppercase leading-[0.92] tracking-tight text-black sm:text-5xl md:text-[64px] lg:text-[82px]">
              Core
              <br />
              Services
            </h2>

            <p className="mt-6 max-w-[320px] text-base leading-7 text-black/70 sm:text-lg">
              A connected growth stack for brands that want sharper strategy,
              stronger visibility, and cleaner conversion paths across every
              major digital touchpoint.
            </p>

            <div className="mt-8 grid gap-3 max-w-[360px]">
              {featuredPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-[22px] border border-black/12 bg-white/35 px-4 py-3 backdrop-blur-sm"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
                    +
                  </div>
                  <p className="text-sm font-medium uppercase tracking-[0.08em] text-black/78">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 max-w-[360px] rounded-[28px] border border-black/12 bg-black px-5 py-5 text-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                Built For Growth
              </div>
              <p className="mt-3 text-lg leading-7 text-white/86">
                From discovery to reporting, each service is designed to work
                together so growth feels measurable, not scattered.
              </p>
              <div className="mt-5 flex items-end gap-6 border-t border-white/12 pt-4">
                <div>
                  <div className="text-3xl font-semibold">08</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-white/55">
                    Core Offers
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-semibold">360</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-white/55">
                    Growth View
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:border-l lg:border-black/15 lg:pl-10">
            <div className="grid grid-cols-1 gap-y-6 md:gap-y-7 lg:content-start">
              {services.map((service, index) => (
                <article
                  key={service.slug}
                  className="group max-w-full sm:max-w-[360px]"
                >
                  <div className="mb-3 flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-lg font-semibold text-white transition-transform duration-300 group-hover:scale-110">
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-medium uppercase leading-[1.2] tracking-tight text-black sm:text-[23px] md:text-[29px]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-base leading-relaxed text-black/75 sm:text-lg md:text-[19px]">
                    {service.desc}
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-black/25 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-all duration-300 hover:bg-black hover:text-white"
                  >
                    Learn More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {">"}
                    </span>
                  </Link>

                  <div className="mt-3 h-px w-0 bg-black/30 transition-all duration-300 group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
