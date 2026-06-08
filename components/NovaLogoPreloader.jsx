// components/NovaLogoPreloader.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function NovaLogoPreloader({ onComplete }) {
  const preloaderRef = useRef(null);
  const cardRef = useRef(null);
  const [svgText, setSvgText] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetch("/novatechscience-logo.svg", { cache: "force-cache" })
      .then((res) => {
        if (!res.ok) throw new Error(`SVG not found: ${res.status}`);
        return res.text();
      })
      .then((text) => {
        if (cancelled) return;

        if (!text.includes("<svg")) {
          setShow(false);
          onComplete?.();
          return;
        }

        setSvgText(text);
      })
      .catch((error) => {
        console.error("SVG loading failed:", error);
        setShow(false);
        onComplete?.();
      });

    return () => {
      cancelled = true;
    };
  }, [onComplete]);

  useGSAP(
    () => {
      if (!svgText || !preloaderRef.current) return;

      const root = preloaderRef.current;
      const svg = root.querySelector("svg");
      if (!svg) return;

      const shapeSelector =
        "path, polygon, rect, circle, ellipse, line, polyline";

      const getById = (id) =>
        root.querySelector(`[id="${id}"]`) ||
        root.querySelector(`[data-name="${id}"]`);

      const getShape = (id) => {
        const element = getById(id);
        if (!element) return [];

        const tag = element.tagName?.toLowerCase();

        if (
          ["path", "polygon", "rect", "circle", "ellipse", "line", "polyline"].includes(tag)
        ) {
          return [element];
        }

        return gsap.utils.toArray(element.querySelectorAll(shapeSelector));
      };

      const unique = (items) => [...new Set(items.filter(Boolean))];

      const outlineShapes = unique([
        ...getShape("n-path-1-outline"),
        ...getShape("n-path-2-outline"),
        ...getShape("o-outline"),
        ...getShape("v-outline"),
        ...getShape("a-outline"),
        ...getShape("t-outline"),
        ...getShape("e-outline"),
        ...getShape("c-outline"),
        ...getShape("h-outline"),
      ]);

      const novatechFill = unique([
        ...getShape("n-path-1-fill"),
        ...getShape("n-path-2-fill"),
        ...getShape("o-fill"),
        ...getShape("v-fill"),
        ...getShape("a-fill"),
        ...getShape("t-fill"),
        ...getShape("e-ovatech-fill"),
        ...getShape("c-ovatech-fill"),
        ...getShape("h-fill"),
      ]);

      const scienceFill = unique([
        ...getShape("s-science-fill"),
        ...getShape("c1-science-fill"),
        ...getShape("i-science-fill"),
        ...getShape("e1-science-fill"),
        ...getShape("n-science-fill"),
        ...getShape("c2-science-fill"),
        ...getShape("e2-science-fill"),
      ]);

      const allFillShapes = unique([...novatechFill, ...scienceFill]);

      gsap.set(preloaderRef.current, {
        autoAlpha: 1,
        backgroundColor: "#eef1e7",
      });

      gsap.set(cardRef.current, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
      });

      gsap.set(svg, {
        autoAlpha: 1,
        transformOrigin: "center center",
      });

      gsap.set(allFillShapes, {
        autoAlpha: 0,
        y: 8,
        transformOrigin: "center center",
      });

      gsap.set(outlineShapes, {
        autoAlpha: 1,
        visibility: "visible",
      });

      outlineShapes.forEach((shape) => {
        if (typeof shape.getTotalLength !== "function") return;

        try {
          const length = shape.getTotalLength();
          gsap.set(shape, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
        } catch {}
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          setShow(false);
          onComplete?.();
        },
      });

      tl.fromTo(
        cardRef.current,
        { autoAlpha: 0, y: 18, scale: 0.985 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.out" }
      )
        .to(outlineShapes, {
          strokeDashoffset: 0,
          duration: 0.7,
          stagger: 0.032,
        })
        .add("fillStart", "-=0.24")
        .to(
          novatechFill,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.34,
            stagger: 0.042,
          },
          "fillStart"
        )
        .to(
          outlineShapes,
          {
            autoAlpha: 0,
            duration: 0.22,
          },
          "fillStart+=0.14"
        )
        .set(outlineShapes, {
          autoAlpha: 0,
          visibility: "hidden",
        })
        .to(scienceFill, {
          autoAlpha: 1,
          y: 0,
          duration: 0.32,
          stagger: 0.04,
        })
        .to(
          svg,
          {
            scale: 1.015,
            duration: 0.18,
          },
          "-=0.08"
        )
        .to(svg, {
          scale: 1,
          duration: 0.2,
        })
        .to({}, { duration: 0.18 })
        .to(
          cardRef.current,
          {
            autoAlpha: 0,
            y: -10,
            scale: 0.992,
            duration: 0.28,
            ease: "power2.inOut",
          },
          "-=0.02"
        )
        .to(
          preloaderRef.current,
          {
            autoAlpha: 0,
            duration: 0.22,
            ease: "power1.out",
          },
          "-=0.16"
        );
       
      return () => tl.kill();
    },
    {
      scope: preloaderRef,
      dependencies: [svgText],
    }
  );

  if (!show) return null;

  return (
    <div ref={preloaderRef} className="nova-preloader">
      <div className="nova-preloader-glow" aria-hidden="true" />
      <div ref={cardRef} className="nova-logo-card">
        {!svgText && <div className="nova-loader-dot" />}

        {svgText && (
          <div
            className="nova-logo-wrap"
            dangerouslySetInnerHTML={{ __html: svgText }}
          />
        )}
      </div>
    </div>
  );
}

