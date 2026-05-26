//components\DigitalGrowthForm.jsx
"use client";

const rotatingWords = ["Digital", "Growth", "Online"];

export default function DigitalGrowthForm() {
  return (
    <section
      className="relative py-16 md:py-24"
      style={{
        background:
          "linear-gradient(to top, #EAEBDB, #C4CFE3, #8EA5F1, #7392FB)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* LEFT TITLE */}
          <div className="h-fit border-l border-black/15 pl-4 sm:pl-6 md:pl-10 lg:sticky lg:top-28">
            <span className="mb-5 inline-flex rounded-full bg-black px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white">
              Let’s Connect
            </span>

            <h2 className="text-4xl font-semibold uppercase leading-[0.9] tracking-tight text-black sm:text-5xl md:text-[82px] lg:text-[106px]">
              Build
              <br />
              Your
              <br />
              Brand
            </h2>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-black/70 md:text-base">
  Let’s build your brand’s{" "}
  <span className="relative inline-flex h-[62px] min-w-[210px] overflow-hidden align-bottom font-serif text-2xl font-bold italic leading-[62px] text-[#0d2d47] md:text-6xl md:leading-[70px]">
    <span className="animate-word-slide">
      {rotatingWords.map((word) => (
        <span key={word} className="block h-[62px] md:h-[70px]">
          {word}
        </span>
      ))}
    </span>
  </span>{" "}
  presence with strategy, performance, and measurable growth.
</p>
          </div>

          {/* RIGHT FORM */}
          <div className="border-l border-black/15 pl-4 sm:pl-6 md:pl-10">
            <div className="rounded-[30px] border border-black/10 bg-white/15 p-5 backdrop-blur-sm sm:p-7 md:p-8">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-14 rounded-2xl border border-black/10 bg-white/25 px-5 text-sm text-black outline-none placeholder:text-black/45 focus:bg-white/35"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="h-14 rounded-2xl border border-black/10 bg-white/25 px-5 text-sm text-black outline-none placeholder:text-black/45 focus:bg-white/35"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="h-14 rounded-2xl border border-black/10 bg-white/25 px-5 text-sm text-black outline-none placeholder:text-black/45 focus:bg-white/35"
                  />

                  <input
                    type="text"
                    placeholder="Service"
                    className="h-14 rounded-2xl border border-black/10 bg-white/25 px-5 text-sm text-black outline-none placeholder:text-black/45 focus:bg-white/35"
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

            {/* <div className="mt-8 overflow-hidden rounded-[30px] border border-black/10 bg-white/15 p-5 backdrop-blur-sm">
              <img
                src="/digital-growth.png"
                alt="Digital marketing growth illustration"
                className="mx-auto w-full max-w-[430px] object-contain"
              />
            </div> */}
          </div>
        </div>
      </div>

      <style jsx>{`
  @keyframes word-slide {
    0%,
    28% {
      transform: translate3d(0, 0, 0);
    }

    33%,
    61% {
      transform: translate3d(0, -62px, 0);
    }

    66%,
    94% {
      transform: translate3d(0, -124px, 0);
    }

    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  @media (min-width: 768px) {
    @keyframes word-slide {
      0%,
      28% {
        transform: translate3d(0, 0, 0);
      }

      33%,
      61% {
        transform: translate3d(0, -70px, 0);
      }

      66%,
      94% {
        transform: translate3d(0, -140px, 0);
      }

      100% {
        transform: translate3d(0, 0, 0);
      }
    }
  }

  .animate-word-slide {
    animation: word-slide 5.5s cubic-bezier(0.76, 0, 0.24, 1) infinite;
    will-change: transform;
  }
`}</style>
    </section>
  );
}