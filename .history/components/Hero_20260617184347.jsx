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
    <section className="relative min-h-screen overflow-hidden bg-[#0a1320]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#07121f_0%,#0d2237_52%,#091622_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(115,146,251,0.14),transparent_34%),radial-gradient(circle_at_82%_20%,rgba(255,122,63,0.12),transparent_22%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1200px] items-center px-4 pb-12 pt-28 sm:px-6 sm:pt-32 md:px-10 md:pb-16 md:pt-36">
        <div className="w-full text-center">
       

          <h1 className="mx-auto mt-6 max-w-5xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] text-[#f7f1e4]">
            <span className="block text-[clamp(3.5rem,12vw,8rem)]">Make Search</span>
            <span className="block text-[clamp(3.5rem,12vw,8rem)] text-[#9db6ff]">
              Worth More
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/72 sm:text-lg md:text-[1.15rem]">
            We build clean search and growth systems that help brands get
            discovered, earn trust, and convert visibility into qualified
            business.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8b47_0%,#ff6a3d_100%)] px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.1em] text-white shadow-[0_20px_48px_rgba(255,122,63,0.3)] transition hover:-translate-y-1 hover:shadow-[0_28px_56px_rgba(255,122,63,0.38)]"
            >
              Start Your Project
            </Link>

            <Link
              href="/services"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/16 bg-transparent px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.1em] text-[#f7f1e4] transition hover:bg-white hover:text-[#0d2d47]"
            >
              Explore Services
            </Link>
          </div>

          
        </div>
      </div>
    </section>
  );
}
