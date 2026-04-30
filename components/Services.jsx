export default function Services() {
  const services = [
    {
      title: "Comprehensive Digital Campaigns",
      desc: "Creating holistic digital strategies.",
    },
    {
      title: "SEO Mastery",
      desc: "Boosting your site on search engines.",
    },
    {
      title: "Social Media Engagement",
      desc: "Building relationships with your audience.",
    },
    {
      title: "Targeted Advertisement",
      desc: "Maximizing ROI through precise targeting.",
    },
  ];

  return (
    <section
      className="relative py-20 md:py-28"
      style={{
        background:
          "linear-gradient(to bottom, #9CADDA 0%, #BFC8DD 58%, #E8E9DD 100%)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 h-fit border-l border-black/15 pl-6 md:pl-10">
            <h2 className="text-[56px] font-semibold uppercase leading-[0.9] tracking-tight text-black md:text-[92px] lg:text-[118px]">
              Our
              <br />
              Services
            </h2>
          </div>

          <div className="border-l border-black/15 pl-6 md:pl-10">
            <div className="grid grid-cols-1 gap-y-12 md:gap-y-16 lg:min-h-[145vh] lg:content-start">
              {services.map((service, index) => (
                <article key={service.title} className="group max-w-[360px]">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg font-semibold text-white">
                    {index + 1}
                  </div>

                  <h3 className="mb-4 text-[23px] font-medium uppercase leading-[1.2] tracking-tight text-black md:text-[31px]">
                    {service.title}
                  </h3>

                  <p className="text-lg leading-relaxed text-black/75 md:text-[21px]">
                    {service.desc}
                  </p>

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
