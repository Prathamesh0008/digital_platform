"use client";

import { useEffect, useRef, useState } from "react";

export default function LazySection({
  children,
  className = "",
  minHeight = 320,
  rootMargin = "300px 0px",
}) {
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender || !containerRef.current) {
      return;
    }

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

    return () => observer.disconnect();
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
