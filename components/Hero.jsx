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

      <Link
        href="/"
        className="absolute bottom-4 right-4 z-20 rounded-full border border-white/20 bg-[#090512]/96 px-4 py-2 text-sm md:px-6 md:py-3 md:text-base font-semibold tracking-wide text-white shadow-[0_8px_30px_rgba(0,0,0,0.45)] transition hover:bg-[#120a24]"
      >
        NovaTech Science
      </Link>
    </section>
  );
}
