"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const previewModes = {
  desktop: {
    label: "Desktop Preview",
    hint: "Open the full desktop design",
  },
  mobile: {
    label: "Mobile Preview",
    hint: "Open the phone layout",
  },
};

function PreviewModal({
  item,
  mode,
  desktopLoaded,
  mobileLoaded,
  onDesktopLoad,
  onMobileLoad,
  onClose,
}) {
  const isDesktop = mode === "desktop";

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-[#081120]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.name} ${mode} preview`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/95 text-sm font-semibold text-[#0d2d47] shadow-lg transition hover:bg-[#5A7EFF] hover:text-white"
        aria-label="Close preview"
      >
        X
      </button>

      {isDesktop ? (
        <div
          className="h-screen w-screen px-6 pb-6 pt-[60px] md:px-8 md:pb-8"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
            {!desktopLoaded && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#eef2f7]">
                <div className="rounded-full border border-[#d7dfef] bg-white px-4 py-2 text-sm font-medium text-[#0d2d47]/70 shadow-sm">
                  Loading live website...
                </div>
              </div>
            )}

            <iframe
              src={item.url}
              title={`${item.name} desktop live preview`}
              className="h-full w-full border-0 bg-white"
              onLoad={onDesktopLoad}
            />
          </div>
        </div>
      ) : (
          <div
            className="flex h-screen w-screen items-center justify-center p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="w-full max-w-[380px] overflow-hidden rounded-[34px] border-[8px] border-[#0d2d47] bg-white shadow-[0_28px_80px_rgba(0,0,0,0.35)]">
            <div className="mx-auto mt-3 h-2 w-20 rounded-full bg-[#0d2d47]/25" />

            <div className="relative mt-3 h-[78vh] w-full overflow-hidden bg-white">
              {!mobileLoaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#eef2f7]">
                  <div className="rounded-full border border-[#d7dfef] bg-white px-4 py-2 text-center text-sm font-medium text-[#0d2d47]/70 shadow-sm">
                    Loading mobile preview...
                  </div>
                </div>
              )}

              <iframe
                src={item.url}
                title={`${item.name} mobile live preview`}
                className="h-[740px] origin-top-left border-0 bg-white"
                onLoad={onMobileLoad}
                style={{
                  width: "390px",
                  transform: "scale(0.94)",
                  transformOrigin: "top left",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}

export default function CaseStudyPreview({ item }) {
  const [activePreview, setActivePreview] = useState(null);
  const [desktopLoaded, setDesktopLoaded] = useState(false);
  const [mobileLoaded, setMobileLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!activePreview) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActivePreview(null);
      }
    };

    const scrollY = window.scrollY;
    const previousOverflow = document.body.style.overflow;
    const previousPosition = document.body.style.position;
    const previousTop = document.body.style.top;
    const previousWidth = document.body.style.width;

    document.body.classList.add("preview-modal-open");
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("preview-modal-open");
      document.body.style.overflow = previousOverflow;
      document.body.style.position = previousPosition;
      document.body.style.top = previousTop;
      document.body.style.width = previousWidth;
      window.removeEventListener("keydown", handleKeyDown);
      window.scrollTo(0, scrollY);
    };
  }, [activePreview]);

  useEffect(() => {
    if (activePreview === "desktop") {
      setDesktopLoaded(false);
    }

    if (activePreview === "mobile") {
      setMobileLoaded(false);
    }
  }, [activePreview]);

  return (
    <>
      <div className="relative min-h-[540px] overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(90,126,255,0.22),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.7),rgba(196,207,227,0.68))] p-5 sm:min-h-[620px] sm:p-8 lg:min-h-[650px] lg:p-10">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#5A7EFF]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/55 blur-3xl" />

        <div className="relative flex h-full flex-col justify-between gap-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5A7EFF]">
                Interactive Preview
              </p>
              <p className="mt-2 max-w-md text-sm leading-6 text-[#0d2d47]/68">
                Click the desktop screen or phone mockup to inspect the matching
                layout without leaving this page.
              </p>
            </div>

            <div className="hidden rounded-full border border-white/65 bg-white/60 px-4 py-2 text-xs font-medium text-[#0d2d47]/72 shadow-[0_10px_30px_rgba(13,45,71,0.08)] sm:block">
              Same-screen preview
            </div>
          </div>

          <div className="relative flex flex-1 items-center justify-center">
            <div className="relative w-full max-w-[920px]">
              <button
                type="button"
                onClick={() => setActivePreview("desktop")}
                className="group relative z-10 block w-full cursor-pointer overflow-hidden rounded-[30px] border border-white/70 bg-white/60 p-2 text-left shadow-[0_32px_90px_rgba(13,45,71,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_38px_100px_rgba(13,45,71,0.24)]"
                aria-label={`Open ${item.name} desktop preview`}
              >
                <div className="absolute left-5 top-5 z-10 inline-flex rounded-full bg-[#0d2d47] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white shadow-lg">
                  Desktop
                </div>

                <div className="overflow-hidden rounded-[24px] bg-[#eef2f7]">
                  <div className="flex items-center gap-2 border-b border-[#d7dfef] px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#06d6a0]" />
                    <span className="ml-3 truncate text-xs font-medium text-[#0d2d47]/55">
                      {item.url}
                    </span>
                  </div>

                  <div className="relative h-[360px] w-full overflow-hidden bg-white sm:h-[420px] lg:h-[460px]">
                    <Image
                      src={item.desktop}
                      alt={`${item.name} desktop preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-[1.015]"
                    />
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setActivePreview("mobile")}
                className="group absolute -bottom-8 right-0 z-30 hidden w-[175px] cursor-pointer overflow-hidden rounded-[30px] border-[6px] border-[#0d2d47] bg-white text-left shadow-[0_28px_70px_rgba(13,45,71,0.32)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_80px_rgba(13,45,71,0.38)] sm:block md:w-[190px] lg:-bottom-10"
                aria-label={`Open ${item.name} mobile preview`}
              >
                <div className="absolute left-3 top-3 z-10 rounded-full bg-[#0d2d47] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                  Mobile
                </div>

                <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-[#0d2d47]/25" />
                <div className="relative mt-2 h-[330px] w-full overflow-hidden bg-white md:h-[370px]">
                  <Image
                    src={item.mobile}
                    alt={`${item.name} mobile preview`}
                    fill
                    sizes="190px"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </button>
            </div>
          </div>

          <div className="grid gap-3 sm:hidden">
            {Object.entries(previewModes).map(([mode, preview]) => (
              <button
                key={mode}
                type="button"
                onClick={() => setActivePreview(mode)}
                className="flex cursor-pointer items-center justify-between rounded-[20px] border border-white/70 bg-white/72 px-4 py-3 text-left shadow-[0_12px_35px_rgba(13,45,71,0.08)] backdrop-blur-md transition hover:bg-white"
              >
                <div>
                  <p className="text-sm font-semibold text-[#0d2d47]">
                    {preview.label}
                  </p>
                  <p className="mt-1 text-xs text-[#0d2d47]/62">
                    {preview.hint}
                  </p>
                </div>
                <span className="rounded-full bg-[#0d2d47] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                  Open
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {mounted && activePreview && (
        <PreviewModal
          item={item}
          mode={activePreview}
          desktopLoaded={desktopLoaded}
          mobileLoaded={mobileLoaded}
          onDesktopLoad={() => setDesktopLoaded(true)}
          onMobileLoad={() => setMobileLoaded(true)}
          onClose={() => setActivePreview(null)}
        />
      )}
    </>
  );
}
