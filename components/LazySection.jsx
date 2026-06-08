"use client";

import { useEffect, useRef, useState } from "react";

export default function LazySection({
  children,
  className = "",
  minHeight = 320,
  rootMargin = "900px 0px",
}) {
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof window.IntersectionObserver === "undefined"
  );

  useEffect(() => {
    if (shouldRender || !containerRef.current) {
      return;
    }

    const idleCallback =
      typeof window !== "undefined" && "requestIdleCallback" in window
        ? window.requestIdleCallback(
            () => {
              setShouldRender(true);
            },
            { timeout: 1500 }
          )
        : window.setTimeout(() => {
            setShouldRender(true);
          }, 1200);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();

      if (typeof idleCallback === "number") {
        window.clearTimeout(idleCallback);
        return;
      }

      window.cancelIdleCallback?.(idleCallback);
    };
  }, [rootMargin, shouldRender]);

  return (
    <div ref={containerRef} className={className}>
      {shouldRender ? (
        children
      ) : (
        <div
          className="animate-pulse rounded-[28px] bg-[#0d2d47]/6"
          style={{ minHeight }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
