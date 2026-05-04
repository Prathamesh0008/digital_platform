// components/WhyChooseUs.jsx
"use client";

export default function WhyChooseUs() {
  const items = [
    {
      title: "Flexible Scheduling",
      desc: "Adaptable timelines for your business needs.",
    },
    {
      title: "Personalized Programs",
      desc: "Custom strategies tailored to your goals.",
    },
    {
      title: "Expert Instructors",
      desc: "Work with experienced professionals.",
    },
    {
      title: "Comprehensive Approach",
      desc: "End-to-end digital solutions.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#EAEBDB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#0d2d47]">
            Why Choose Us?
          </h2>

          <button className="bg-[#0d2d47] text-white px-5 py-2 rounded-full">
            Join Now
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {items.map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl ${
                i === 0
                  ? "bg-[#0d2d47] text-white"
                  : "bg-[#C4CFE3] text-[#0d2d47]"
              }`}
            >
              <h3 className="font-medium mb-2">{item.title}</h3>
              <p className="text-sm opacity-80">{item.desc}</p>

              <button className="mt-4 text-xs underline">
                Join Now
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
