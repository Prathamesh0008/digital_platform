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







import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a1320]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#07121f_0%,#0d2237_52%,#091622_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(115,146,251,0.14),transparent_34%),radial-gradient(circle_at_82%_20%,rgba(255,122,63,0.12),transparent_22%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1200px] items-center px-4 pb-12 pt-24 sm:px-6 sm:pt-28 md:px-10 md:pb-16 md:pt-36">
        <div className="w-full text-left lg:max-w-[980px]">
       

          <h1 className="mt-4 max-w-5xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] text-[#f7f1e4]">
            <span className="block text-[clamp(2.7rem,14vw,8rem)]">Make Search</span>
            <span className="block text-[clamp(2.7rem,14vw,8rem)] text-[#9db6ff]">
              Worth More
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8 md:text-[1.1rem]">
            We build clean search and growth systems that help brands get
            discovered, earn trust, and convert visibility into qualified
            business.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/#digital-growth-form"
              className="group relative inline-flex h-14 w-full items-center justify-between overflow-visible rounded-full border border-[#ffd2a8]/45 bg-[linear-gradient(135deg,#ff9e63_0%,#ff7d48_34%,#0d2d47_100%)] px-4 text-white shadow-[0_18px_44px_rgba(13,45,71,0.28),0_0_28px_rgba(255,122,63,0.24),inset_0_0_0_1px_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_58px_rgba(13,45,71,0.34),0_0_38px_rgba(255,122,63,0.34)] sm:hidden"
            >
              <span className="absolute inset-[1px] rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.06)_34%,rgba(255,255,255,0)_100%)] opacity-100" />
              <span className="absolute -inset-[2px] rounded-full bg-[radial-gradient(circle_at_left,rgba(255,188,133,0.42),transparent_40%),radial-gradient(circle_at_right,rgba(255,255,255,0.18),transparent_34%)] opacity-90 blur-md transition duration-300 group-hover:opacity-100" />
              <span className="absolute left-3 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#ffd0b0]/35 blur-md transition duration-300 group-hover:scale-125" />
              <span className="absolute inset-y-1 left-[-18%] w-[34%] rounded-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.28)_45%,transparent_100%)] opacity-70 blur-sm animate-[hero-pill-shimmer_2.8s_ease-in-out_infinite]" />
              <span
                className="relative flex flex-1 items-center justify-center text-center text-[24px] font-normal text-white"
                style={{
                  fontFamily: "var(--font-great-vibes), cursive",
                  textShadow: `
                    0 0 12px rgba(255,214,170,0.48),
                    0 0 24px rgba(255,122,63,0.24),
                    0 2px 10px rgba(8,26,43,0.36)
                  `,
                }}
              >
                <span className="animate-[hero-pill-text_2.4s_ease-in-out_infinite]">
                  Start Project
                </span>
              </span>
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#fff3e8_0%,#ffffff_45%,#ffe0c7_100%)] text-xl text-[#ff6a3d] shadow-[0_10px_22px_rgba(255,255,255,0.28)] transition duration-300 group-hover:translate-x-1 group-hover:scale-105 animate-[hero-pill-arrow_1.8s_ease-in-out_infinite]">
                &rarr;
              </span>
            </Link>

            <Link
              href="/#digital-growth-form"
              className="hidden items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8b47_0%,#ff6a3d_100%)] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.1em] text-white shadow-[0_20px_48px_rgba(255,122,63,0.3)] transition hover:-translate-y-1 hover:shadow-[0_28px_56px_rgba(255,122,63,0.38)] sm:inline-flex sm:min-w-[220px]"
            >
              Start Your Project
            </Link>

            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/16 bg-transparent px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.1em] text-[#f7f1e4] transition hover:bg-white hover:text-[#0d2d47] sm:w-auto sm:min-w-[220px]"
            >
              Explore Services
            </Link>
          </div>

          
        </div>
      </div>

    </section>
  );
}
