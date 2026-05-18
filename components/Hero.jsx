"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-gr7nouhE7TXWGE9GLpmKbqhE/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="h-full w-full"
          title="Nexbot robot character concept"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-black/45" />

      <Link
        href="/"
        className="absolute bottom-4 right-4 z-20 translate-x-[1%] -translate-y-[4%] rounded-full border border-white/35 bg-[#040208]/100 px-4 py-2 text-sm md:px-6 md:py-3 md:text-base font-semibold tracking-wide text-white backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.75)] transition hover:bg-[#0a0416]"
      >
        NovaTech Science
      </Link>
    </section>
  );
}
