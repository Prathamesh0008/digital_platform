export default function Loading() {
  return (
    <main className="min-h-screen bg-[#EAEBDB] px-4 pb-16 pt-32 sm:px-6 md:px-10">
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className="h-4 w-32 rounded-full bg-[#0d2d47]/10" />
        <div className="mt-6 h-14 max-w-3xl rounded-3xl bg-[#0d2d47]/12 sm:h-20" />
        <div className="mt-4 h-5 max-w-2xl rounded-full bg-[#0d2d47]/10" />
        <div className="mt-2 h-5 max-w-xl rounded-full bg-[#0d2d47]/10" />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-40 rounded-[28px] border border-[#0d2d47]/8 bg-white/60"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
