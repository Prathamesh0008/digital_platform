// import Image from "next/image";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden bg-[#0d2d47] px-4 pt-36 sm:px-6 sm:pt-40 md:px-10">
//       <Image
//         src="/Home_2.png"
//         alt="Nova Techscience digital marketing workspace"
//         fill
//         priority
//         sizes="100vw"
//         className="object-cover object-center"
//       />

//       <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,31,0.78),rgba(13,45,71,0.62),rgba(13,45,71,0.76))]" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(156,173,218,0.16),transparent_36%)]" />
//       <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(0deg,#EAEBDB,rgba(234,235,219,0))]" />

//       <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center pb-12 text-center sm:pb-16 md:pb-20">
        

//         <h1 className="mt-6 max-w-5xl text-[2.45rem] font-semibold uppercase leading-[0.94] tracking-[-0.05em] text-white sm:text-[3.8rem] md:text-[5rem] lg:text-[5.9rem]">
//           Grow Online
//           <br />
//           With Clarity
//         </h1>

//         <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg md:text-[1.15rem]">
//           Digital marketing, SEO, and website development for brands that want
//           sharper visibility, better conversion, and steady growth.
//         </p>

//         <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
//           <Link
//             href="/contact"
//             className="w-full rounded-full bg-white px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-[#0d2d47] transition hover:bg-[#dfe7f5] sm:w-auto"
//           >
//             Start A Project
//           </Link>
//           <Link
//             href="/services"
//             className="w-full rounded-full border border-white/24 bg-white/8 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition hover:bg-white hover:text-[#0d2d47] sm:w-auto"
//           >
//             View Services
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }







import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07121f]">
      {/* Background */}
      <Image
        src="/heroimage.png"
        alt="Nova Techscience"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(115,146,251,0.18),transparent_55%)]" />

      {/* Vertical Lines */}
      <div className="absolute inset-0 z-[1] hidden md:block">
        <div className="mx-auto h-full max-w-[1400px]">
          <div className="grid h-full grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="border-l border-white/15 last:border-r"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
  <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-28 sm:pt-32 md:pt-36">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="relative">

            {/* Left Label */}
            <div className="absolute left-0 top-10 hidden lg:block">
              <p className="text-xl font-medium uppercase leading-relaxed text-white/90 text-center">
                DIGITAL
                <br />
                MARKETING
                <br />
                AGENCY
              </p>
            </div>

            {/* Right Label */}
            {/* <div className="absolute right-0 top-10 hidden lg:block text-right">
              <p className="text-xl font-medium uppercase leading-relaxed text-white/90 text-center">
                NOVA
                <br />
                TECHSCIENCE
              </p>
            </div> */}

            {/* Main Heading */}
            <div className="text-center">
             <h1 className="font-black uppercase leading-[0.88] tracking-[-0.05em] text-[#F2F0E4]">
  <span className="block text-[1rem] sm:text-[1rem] md:text-[5.8rem] lg:text-[7rem] xl:text-[8rem]">
    VISIBILITY
  </span>

  <span className="block text-[3rem] sm:text-[4rem] md:text-[5.8rem] lg:text-[7rem] xl:text-[8rem]">
    THAT
  </span>

  <span className="block text-[3rem] sm:text-[4rem] md:text-[5.8rem] lg:text-[7rem] xl:text-[8rem]">
    CONVERTS
  </span>
</h1>

              <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                SEO, GEO, AEO, Web Development and Digital Growth
                strategies designed to help brands dominate both
                traditional search and AI-powered search engines.
              </p>

              <Link
                href="/contact"
                className="mt-10 inline-flex rounded-full border border-white bg-[#7392FB]/90 px-8 py-4 text-lg font-semibold uppercase text-white transition hover:scale-105 hover:bg-[#5A7EFF]"
              >
                Start Your Project
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      {/* <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#EAEBDB] to-transparent" /> */}
    </section>
  );
}