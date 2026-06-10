"use client";

import { useEffect } from "react";

const warmupImports = [
  () => import("@/components/ClientsAndTestimonials"),
  () => import("@/components/WorkProcess"),
  () => import("@/components/HomeGrowthSection"),
  () => import("@/components/ClientReviewSlider"),
  () => import("@/components/DigitalGrowthForm"),
  () => import("@/components/BlogSection"),
  () => import("@/components/FAQSection"),
];

export default function HomeSectionWarmup() {
  useEffect(() => {
    let cancelled = false;

    const runWarmup = () => {
      if (cancelled) {
        return;
      }

      warmupImports.forEach((load) => {
        load().catch(() => {});
      });
    };

    const scheduleWarmup = () => {
      if (typeof window.requestIdleCallback === "function") {
        const idleId = window.requestIdleCallback(runWarmup, {
          timeout: 2500,
        });

        return () => window.cancelIdleCallback?.(idleId);
      }

      const timeoutId = window.setTimeout(runWarmup, 1200);
      return () => window.clearTimeout(timeoutId);
    };

    let cleanupSchedule = () => {};

    if (document.readyState === "complete") {
      cleanupSchedule = scheduleWarmup();
    } else {
      const onLoad = () => {
        cleanupSchedule = scheduleWarmup();
      };

      window.addEventListener("load", onLoad, { once: true });

      cleanupSchedule = () => {
        window.removeEventListener("load", onLoad);
      };
    }

    return () => {
      cancelled = true;
      cleanupSchedule();
    };
  }, []);

  return null;
}
