"use client";

import { useEffect, useRef, useState } from "react";
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

const DESKTOP_PREVIEW_WIDTH = 1440;

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

            <div className="relative mt-3 h-[min(78vh,740px)] w-full overflow-auto bg-white">
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
                className="h-[740px] w-full border-0 bg-white"
                onLoad={onMobileLoad}
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
  const [desktopScale, setDesktopScale] = useState(1);
  const desktopFrameRef = useRef(null);

  useEffect(() => {
    const frame = desktopFrameRef.current;

    if (!frame || typeof ResizeObserver === "undefined") {
      return;
    }

    const updateDesktopScale = () => {
      const nextScale = Math.min(frame.clientWidth / DESKTOP_PREVIEW_WIDTH, 1);
      setDesktopScale(nextScale > 0 ? nextScale : 1);
    };

    updateDesktopScale();

    const resizeObserver = new ResizeObserver(() => {
      updateDesktopScale();
    });

    resizeObserver.observe(frame);
    window.addEventListener("resize", updateDesktopScale);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateDesktopScale);
    };
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

  const openDesktopPreview = () => {
    setDesktopLoaded(false);
    setActivePreview("desktop");
  };

  const openMobilePreview = () => {
    setMobileLoaded(false);
    setActivePreview("mobile");
  };

  return (
    <>
      <div className="relative min-h-[540px] overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(90,126,255,0.22),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.7),rgba(196,207,227,0.68))] p-5 sm:min-h-[620px] sm:p-8 lg:min-h-[650px] lg:p-10">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#5A7EFF]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/55 blur-3xl" />

        <div className="relative flex h-full flex-col justify-between gap-5">
          <div className="relative flex flex-1 items-center justify-center">
            <div className="relative w-full max-w-[920px]">
              <button
                type="button"
                onClick={openDesktopPreview}
                className="group relative z-10 hidden w-full cursor-pointer overflow-hidden rounded-[30px] border border-white/70 bg-white/60 p-2 text-left shadow-[0_32px_90px_rgba(13,45,71,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_38px_100px_rgba(13,45,71,0.24)] lg:block"
                aria-label={`Open ${item.name} desktop preview`}
              >
                <div className="absolute left-5 -top-5 z-100 inline-flex rounded-full bg-[#0d2d47] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white shadow-lg">
                  Desktop
                </div>

                <div className="overflow-hidden rounded-[24px] bg-[#eef2f7]">
                 
                  <div
                    ref={desktopFrameRef}
                    className="relative h-[360px] w-full overflow-hidden bg-white sm:h-[420px] lg:h-[460px]"
                  >
                    <iframe
                      src={item.url}
                      title={`${item.name} desktop website preview`}
                      className="pointer-events-none origin-top-left border-0 bg-white"
                      style={{
                        width: `${DESKTOP_PREVIEW_WIDTH}px`,
                        height: `${460 / desktopScale}px`,
                        transform: `scale(${desktopScale})`,
                      }}
                      tabIndex={-1}
                    />
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={openMobilePreview}
                className="group relative z-30 mx-auto block w-[min(100%,230px)] cursor-pointer overflow-hidden rounded-[30px] border-[6px] border-[#0d2d47] bg-white text-left shadow-[0_28px_70px_rgba(13,45,71,0.32)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_80px_rgba(13,45,71,0.38)] sm:w-[250px] md:w-[270px] lg:absolute lg:-bottom-10 lg:right-0 lg:mx-0 lg:w-[190px]"
                aria-label={`Open ${item.name} mobile preview`}
              >
                <div className="absolute left-3 top-3 z-10 rounded-full bg-[#0d2d47] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                  Mobile
                </div>

                <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-[#0d2d47]/25" />
                <div className="relative mt-2 h-[420px] w-full overflow-hidden bg-white sm:h-[460px] md:h-[500px] lg:h-[370px]">
                  <iframe
                    src={item.url}
                    title={`${item.name} mobile website preview`}
                    className="pointer-events-none h-[calc(100%/var(--preview-scale))] w-[390px] origin-top-left scale-[var(--preview-scale)] border-0 bg-white sm:[--preview-scale:0.61] md:[--preview-scale:0.66] lg:[--preview-scale:0.46]"
                    style={{
                      "--preview-scale": "0.56",
                    }}
                    tabIndex={-1}
                  />
                </div>
              </button>
            </div>
          </div>

          <div className="grid gap-3 lg:hidden">
            {Object.entries(previewModes)
              .filter(([mode]) => mode === "mobile")
              .map(([mode, preview]) => (
              <button
                key={mode}
                type="button"
                onClick={openMobilePreview}
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

      {typeof document !== "undefined" && activePreview && (
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
