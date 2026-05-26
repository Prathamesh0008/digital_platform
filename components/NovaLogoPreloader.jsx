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
    fetch("/novatechscience-logo.svg")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`SVG file not found. Status: ${res.status}`);
        }

        return res.text();
      })
      .then((text) => {
        if (!text.includes("<svg")) {
          console.error("Loaded file is not SVG:", text.slice(0, 200));
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
  }, [onComplete]);

  useGSAP(
    () => {
      if (!svgText || !preloaderRef.current) return;

      const root = preloaderRef.current;
      const svg = root.querySelector("svg");

      if (!svg) {
        console.error("SVG not found inside preloader");
        return;
      }

      const shapeSelector =
        "path, polygon, rect, circle, ellipse, line, polyline";

      const getById = (id) => {
        return (
          root.querySelector(`[id="${id}"]`) ||
          root.querySelector(`[data-name="${id}"]`)
        );
      };

      const getShape = (id) => {
        const element = getById(id);

        if (!element) {
          console.warn("Missing SVG ID:", id);
          return [];
        }

        const tag = element.tagName?.toLowerCase();

        if (
          tag === "path" ||
          tag === "polygon" ||
          tag === "rect" ||
          tag === "circle" ||
          tag === "ellipse" ||
          tag === "line" ||
          tag === "polyline"
        ) {
          return [element];
        }

        return gsap.utils.toArray(element.querySelectorAll(shapeSelector));
      };

      const unique = (items) => [...new Set(items.filter(Boolean))];

      // Outline order: N, O, V, A, T, E, C, H
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

      // NovaTech fill order: N, O, V, A, T, E, C, H
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

      // Science fill order: S, C, I, E, N, C, E
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

      console.log("NovaTech animation check:", {
        outlineShapes: outlineShapes.length,
        novatechFill: novatechFill.length,
        scienceFill: scienceFill.length,
        allFillShapes: allFillShapes.length,
      });

      // Keep original Illustrator colours
      gsap.set(svg, {
        autoAlpha: 1,
        transformOrigin: "center center",
      });

      // Hide fill first, but do not change fill colour
      gsap.set(allFillShapes, {
        autoAlpha: 0,
        y: 18,
        filter: "blur(8px)",
        transformOrigin: "center center",
      });

      // Outline visible first, keeping original stroke colour
      gsap.set(outlineShapes, {
        autoAlpha: 1,
        visibility: "visible",
      });

      // Prepare outline draw
      outlineShapes.forEach((shape) => {
        if (typeof shape.getTotalLength !== "function") return;

        try {
          const length = shape.getTotalLength();

          gsap.set(shape, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
        } catch (error) {
          console.warn("Could not prepare outline draw:", shape, error);
        }
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        onComplete: () => {
          setShow(false);
          onComplete?.();
        },
      });

      tl
        // 1. Outline draws
        .to(outlineShapes, {
          strokeDashoffset: 0,
          duration: 1.2,
          stagger: 0.035,
        })

        // 2. NOVATECH fill starts while outline is still visible
        .add("fillStart")

        .to(
          novatechFill,
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.55,
            stagger: 0.065,
            ease: "power3.out",
          },
          "fillStart"
        )

        // 3. Outline fades during fill
        .to(
          outlineShapes,
          {
            autoAlpha: 0,
            duration: 0.25,
            ease: "power2.out",
          },
          "fillStart+=0.15"
        )

        // 4. Keep outline hidden at the end
        .set(outlineShapes, {
          autoAlpha: 0,
          visibility: "hidden",
        })

        // 5. SCIENCE appears after NOVATECH fill
        .to(scienceFill, {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.5,
          stagger: 0.06,
          ease: "power3.out",
        })

        // 6. Small final settle
        .to(svg, {
          scale: 1.025,
          duration: 0.18,
          ease: "power2.out",
        })
        .to(svg, {
          scale: 1,
          duration: 0.22,
          ease: "power2.inOut",
        })

        // 7. Hold final logo
        .to({}, { duration: 0.9 })

        // 8. Exit preloader
        .to(preloaderRef.current, {
          autoAlpha: 0,
          scale: 1.04,
          duration: 0.75,
          ease: "power2.inOut",
        });

      return () => {
        tl.kill();
      };
    },
    {
      scope: preloaderRef,
      dependencies: [svgText],
    }
  );

  if (!show) return null;

  return (
    <div ref={preloaderRef} className="nova-preloader">
      <div
        className="nova-logo-wrap"
        dangerouslySetInnerHTML={{ __html: svgText }}
      />
    </div>
  );
}
