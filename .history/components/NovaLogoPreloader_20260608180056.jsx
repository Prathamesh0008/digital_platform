// components/NovaLogoPreloader.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function NovaLogoPreloader({ onComplete }) {
  const preloaderRef = useRef(null);
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
  backgroundColor: "#E5E6DD",
});

      gsap.set(svg, {
        autoAlpha: 1,
        transformOrigin: "center center",
      });

      gsap.set(allFillShapes, {
        autoAlpha: 0,
        y: 12,
        filter: "blur(5px)",
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

     tl.to(outlineShapes, {
  strokeDashoffset: 0,
  duration: 0.9,
  stagger: 0.045,
})
  .add("fillStart", "-=0.35")
  .to(
    novatechFill,
    {
      autoAlpha: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.45,
      stagger: 0.06,
    },
    "fillStart"
  )
  .to(
    outlineShapes,
    {
      autoAlpha: 0,
      duration: 0.35,
    },
    "fillStart+=0.25"
  )
  .set(outlineShapes, {
    autoAlpha: 0,
    visibility: "hidden",
  })
  .to(scienceFill, {
    autoAlpha: 1,
    y: 0,
    filter: "blur(0px)",
    duration: 0.45,
    stagger: 0.06,
  })
  .to(svg, {
    scale: 1.04,
    duration: 0.25,
  })
  .to(svg, {
    scale: 1,
    duration: 0.25,
  })
  .to({}, { duration: 0.35 })
  .to(preloaderRef.current, {
    autoAlpha: 0,
    scale: 1.03,
    duration: 0.45,
    ease: "power2.inOut",
  });
       
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
      {/* {!svgText && <div className="nova-loader-dot" />} */}

      {svgText && (
        <div
          className="nova-logo-wrap"
          dangerouslySetInnerHTML={{ __html: svgText }}
        />
      )}
    </div>
  );
}
<<<<<<< ours

=======
>>>>>>> theirs
