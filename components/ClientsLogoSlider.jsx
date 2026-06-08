// components/ClientsLogoSlider.jsx
"use client";

import Image from "next/image";

const clientLogos = [
  "/Ivexia.svg",
  "/larkosis.webp",
  "/Travelo.avif",
  "/biopeptide.png",
  "/MTVS.avif",
  "/kvs.png",
  "/Fiber Box.avif",
  "/Arena.avif",
  "/Bayview.avif",
];

const partners = [
  { name: "Zoho Mail", logo: "/zohomail.png" },
  { name: "G Suite", logo: "/g-suit.png" },
  { name: "Microsoft Office", logo: "/microsoft.png" },
];

export default function ClientsLogoSlider() {
  const repeatedLogos = [...clientLogos, ...clientLogos];
  const repeatedPartners = [...partners, ...partners];

  return (
    <section
      className="relative overflow-hidden px-4 py-16 sm:px-6 md:px-10 md:py-24"
      style={{
        background:
          "linear-gradient(to top, #EAEBDB, #C4CFE3, #8EA5F1, #7392FB)",
      }}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 border-l border-[#0d2d47]/20 pl-4 sm:pl-6 md:pl-10">
          <span className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white">
            Trusted Network
          </span>

          <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-[#0d2d47] sm:text-5xl md:text-[72px]">
            Clients & Digital Partners
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
            At Nova Techscience, we partner with ambitious brands, businesses,
            and digital platforms to create powerful, results-driven digital
            solutions.
          </p>
        </div>

        {/* CLIENT LOGOS */}
  <div className="relative overflow-hidden py-8">
          <div className="mb-6 flex items-center gap-4">
            <h3 className="shrink-0 text-lg font-sbold uppercase tracking-wide text-[#0d2d47] ">
              Our Clients
            </h3>
            <div className="h-px flex-1 bg-[#0d2d47]/20" />
          </div>

          {/* <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#C4CFE3] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#C4CFE3] to-transparent" /> */}

          <div className="flex w-max animate-client-slide gap-5 sm:gap-7">
            {repeatedLogos.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
               className="flex h-[110px] w-[170px] shrink-0 items-center justify-center p-5 transition duration-300 hover:-translate-y-1 sm:h-[130px] sm:w-[205px]"
              >
                <Image
                  src={logo}
                  alt="Client brand logo"
                  width={160}
                  height={95}
                  sizes="160px"
                  className="max-h-[90px] max-w-full object-contain transition duration-300 hover:grayscale-0 sm:max-h-[95px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* DIGITAL PARTNERS */}
        <div className="relative mt-8 overflow-hidden py-8">
          <div className="mb-6 flex items-center gap-4">
            <h3 className="shrink-0 text-lg font-semibold uppercase tracking-wide text-[#0d2d47]">
              Our Digital Partners
            </h3>
            <div className="h-px flex-1 bg-[#0d2d47]/20" />
          </div>

         

          <div className="flex w-max animate-partner-slide gap-5 sm:gap-7">
            {repeatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex h-[105px] w-[240px] shrink-0 items-center justify-center p-6 transition duration-300 hover:-translate-y-1 sm:w-[300px]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={170}
                  height={58}
                  sizes="170px"
                  className="max-h-[58px] max-w-[170px] object-contain transition duration-300 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes client-slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes partner-slide {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-client-slide {
          animation: client-slide 28s linear infinite;
        }

        .animate-partner-slide {
          animation: partner-slide 22s linear infinite;
        }

        .animate-client-slide:hover,
        .animate-partner-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
