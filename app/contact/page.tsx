import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#0f172a_0%,#1e1b4b_36%,#312e81_62%,#5a7eff_100%)]">
      <section className="px-4 sm:px-6 md:px-10 pt-28 sm:pt-32 pb-12 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="uppercase tracking-[0.22em] text-xs sm:text-sm text-white/70">
            Let&apos;s Build Something Meaningful
          </p>
          <h1 className="mt-5 uppercase leading-[0.9] text-4xl sm:text-5xl md:text-[96px] lg:text-[120px] font-medium">
            Contact
            <br />
            NovaTech
          </h1>
          <p className="mt-5 max-w-2xl text-sm sm:text-base text-white/80">
            Tell us your goals and timeline. We&apos;ll craft a focused strategy,
            strong creative direction, and measurable growth plan for your brand.
          </p>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
