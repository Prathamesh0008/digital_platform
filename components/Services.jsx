import Link from "next/link";
import { services } from "@/data/servicesData";

export default function Services() {
  return (
    <section
      className="relative py-12 md:py-16"
      style={{
        background:
          "linear-gradient(to bottom, #9CADDA 0%, #BFC8DD 58%, #E8E9DD 100%)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div className="h-fit pt-2 lg:sticky lg:top-28 lg:pt-6 lg:pl-10">
            <h2 className="text-4xl font-semibold uppercase leading-[0.92] tracking-tight text-black sm:text-5xl md:text-[64px] lg:text-[88px]">
              Core
              <br />
              Services
            </h2>
          </div>

          <div className="lg:border-l lg:border-black/15 lg:pl-10">
            <div className="grid grid-cols-1 gap-y-10 md:gap-y-12 lg:content-start">
              {services.map((service, index) => (
                <article
                  key={service.slug}
                  className="group max-w-full sm:max-w-[360px]"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg font-semibold text-white transition-transform duration-300 group-hover:scale-110">
                    {index + 1}
                  </div>

                  <h3 className="mb-4 text-xl font-medium uppercase leading-[1.2] tracking-tight text-black sm:text-[23px] md:text-[31px]">
                    {service.title}
                  </h3>

                  <p className="text-base leading-relaxed text-black/75 sm:text-lg md:text-[21px]">
                    {service.desc}
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/25 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-all duration-300 hover:bg-black hover:text-white"
                  >
                    Learn More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {">"}
                    </span>
                  </Link>

                  <div className="mt-5 h-px w-0 bg-black/30 transition-all duration-300 group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
