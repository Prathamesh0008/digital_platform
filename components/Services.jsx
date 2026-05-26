import Link from "next/link";
import { services } from "@/data/servicesData";
 
export default function Services() {
  return (
    <section
      className="relative py-16 md:py-24"
      style={{
        background:
          "linear-gradient(to bottom, #9CADDA 0%, #BFC8DD 58%, #E8E9DD 100%)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 h-fit border-l border-black/15 pl-4 sm:pl-6 md:pl-10">
            <h2 className="text-4xl sm:text-5xl font-semibold uppercase leading-[0.9] tracking-tight text-black md:text-[92px] lg:text-[118px]">
              Core
              <br />
              Services
            </h2>
          </div>
 
          <div className="border-l border-black/15 pl-4 sm:pl-6 md:pl-10">
            <div className="grid grid-cols-1 gap-y-12 md:gap-y-16 lg:min-h-[145vh] lg:content-start">
              {services.map((service, index) => (
                <article
                  key={service.slug}
                  className="group max-w-full sm:max-w-[360px]"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg font-semibold text-white transition-transform duration-300 group-hover:scale-110">
                    {index + 1}
                  </div>
 
                  <h3 className="mb-4 text-xl sm:text-[23px] font-medium uppercase leading-[1.2] tracking-tight text-black md:text-[31px]">
                    {service.title}
                  </h3>
 
                  <p className="text-base sm:text-lg leading-relaxed text-black/75 md:text-[21px]">
                    {service.desc}
                  </p>
 
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-black/25 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-all duration-300 hover:bg-black hover:text-white"
                  >
                    Learn More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
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
 
 
 
 
 