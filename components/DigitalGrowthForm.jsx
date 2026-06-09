// components/DigitalGrowthForm.jsx
"use client";

const rotatingWords = ["Digital", "Growth", "Online"];

export default function DigitalGrowthForm() {
  return (
    <section
      className="relative overflow-hidden py-10 sm:py-12 md:py-14"
      style={{
        background:
          "linear-gradient(to top, #EAEBDB, #C4CFE3, #8EA5F1, #7392FB)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* LEFT TITLE */}
          <div className="h-fit pl-0 sm:pl-4 md:pl-10 lg:pt-2">
            <h2 className="text-4xl font-semibold uppercase leading-[0.92] tracking-tight text-black sm:text-5xl md:text-[62px] lg:text-[78px]">
              Build
              <br />
              Your
              <br />
              Brand
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-black/70 sm:text-base md:text-lg md:leading-8">
              Let&apos;s build your brand&apos;s{" "}
              <span className="relative inline-flex h-[34px] min-w-[92px] overflow-hidden align-middle font-serif text-[28px] font-bold italic leading-[34px] text-[#0d2d47] sm:h-[42px] sm:min-w-[120px] sm:text-[36px] sm:leading-[42px] md:h-[78px] md:min-w-[210px] md:text-[58px] md:leading-[78px]">
                <span className="animate-word-slide">
                  {rotatingWords.map((word) => (
                    <span
                      key={word}
                     className="block h-[34px] sm:h-[42px] md:h-[78px]"
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </span>{" "}
              presence with strategy, performance, and measurable growth.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="border-black/15 pl-0 sm:pl-0 md:border-l md:pl-10">
            <div className="rounded-[24px] border border-black/10 bg-white/15 p-5 backdrop-blur-sm sm:rounded-[30px] sm:p-7 md:p-8">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-13 rounded-2xl border border-black/10 bg-white/25 px-5 text-sm text-black outline-none placeholder:text-black/45 focus:bg-white/35 sm:h-14"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="h-13 rounded-2xl border border-black/10 bg-white/25 px-5 text-sm text-black outline-none placeholder:text-black/45 focus:bg-white/35 sm:h-14"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="h-13 rounded-2xl border border-black/10 bg-white/25 px-5 text-sm text-black outline-none placeholder:text-black/45 focus:bg-white/35 sm:h-14"
                  />

                  <input
                    type="text"
                    placeholder="Service"
                    className="h-13 rounded-2xl border border-black/10 bg-white/25 px-5 text-sm text-black outline-none placeholder:text-black/45 focus:bg-white/35 sm:h-14"
                  />
                </div>

                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-black/10 bg-white/25 px-5 py-4 text-sm text-black outline-none placeholder:text-black/45 focus:bg-white/35"
                />

                <button
                  type="submit"
                  className="h-14 w-full cursor-pointer rounded-full bg-black text-sm font-semibold uppercase tracking-wide text-white transition duration-300 hover:bg-[#0d2d47]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes word-slide-mobile {
          0%,
          28% {
            transform: translate3d(0, 0, 0);
          }

          33%,
          61% {
            transform: translate3d(0, -34px, 0);
          }

          66%,
          94% {
            transform: translate3d(0, -68px, 0);
          }

          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes word-slide-tablet {
          0%,
          28% {
            transform: translate3d(0, 0, 0);
          }

          33%,
          61% {
            transform: translate3d(0, -42px, 0);
          }

          66%,
          94% {
            transform: translate3d(0, -84px, 0);
          }

          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes word-slide-desktop {
          0%,
          28% {
            transform: translate3d(0, 0, 0);
          }
33%,
61% {
  transform: translate3d(0, -78px, 0);
}

66%,
94% {
  transform: translate3d(0, -156px, 0);
}

          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        .animate-word-slide {
          animation: word-slide-mobile 5.5s cubic-bezier(0.76, 0, 0.24, 1)
            infinite;
          will-change: transform;
        }

        @media (min-width: 640px) {
          .animate-word-slide {
            animation-name: word-slide-tablet;
          }
        }

        @media (min-width: 768px) {
          .animate-word-slide {
            animation-name: word-slide-desktop;
          }
        }
      `}</style>
    </section>
  );
}
