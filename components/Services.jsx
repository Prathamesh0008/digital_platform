export default function Services() {
  const services = [
    { title: "SEO Optimization", desc: "Improve search rankings and visibility." },
    { title: "Social Media Marketing", desc: "Grow your audience and engagement." },
    { title: "Google Ads", desc: "High ROI paid campaigns." },
    { title: "Web Development", desc: "Modern responsive websites." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12 text-center">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-6 border rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}