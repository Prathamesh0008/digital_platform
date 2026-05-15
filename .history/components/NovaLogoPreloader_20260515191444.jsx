"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function NovaLogoPreloader() {
  const preloaderRef = useRef(null);
  const [svgText, setSvgText] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    fetch("/sounds/novatechscience-logo.svg")
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
          return;
        }

        setSvgText(text);
      })
      .catch((error) => {
        console.error("SVG loading failed:", error);
        setShow(false);
      });
  }, []);

  useGSAP(
    () => {
      if (!svgText || !preloaderRef.current) return;

      const root = preloaderRef.current;
      const svg = root.querySelector("svg");

      if (!svg) {
        console.error("SVG not found inside preloader");
        return;
      }

      const shapeSelector = "path, polygon, rect";

      const getShape = (idName) => {
        const normalizedTarget = idName.trim();

        const element =
          root.querySelector(`#${normalizedTarget}`) ||
          root.querySelector(`[id^="${normalizedTarget}"]`) ||
          gsap.utils.toArray(root.querySelectorAll("[data-name]")).find(
            (node) =>
              node
                .getAttribute("data-name")
                ?.trim()
                .replace(/_+$/, "") === normalizedTarget
          );

        if (!element) {
          console.warn("Missing SVG ID:", idName);
          return [];
        }

        const tag = element.tagName?.toLowerCase();

        if (tag === "path" || tag === "polygon" || tag === "rect") {
          return [element];
        }

        return gsap.utils.toArray(element.querySelectorAll(shapeSelector));
      };

      const unique = (items) => [...new Set(items.filter(Boolean))];

      const allFillShapes = gsap.utils.toArray(
        root.querySelectorAll(`#logo-fill ${shapeSelector}`)
      );

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

      const nParts = unique([
        ...getShape("n-path-1-fill"),
        ...getShape("n-part-2-fill"),
      ]);

      const ovatechFill = unique([
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

      gsap.set(svg, {
        autoAlpha: 1,
      });

      gsap.set(allFillShapes, {
        autoAlpha: 0,
        y: 1,
        filter: "blur(0px)",
      });

      gsap.set(outlineShapes, {
        autoAlpha: 1,
      });

      outlineShapes.forEach((shape) => {
        if (typeof shape.getTotalLength !== "function") return;

        try {
          const length = shape.getTotalLength();

          gsap.set(shape, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
        } catch (error) {
          console.warn("Could not prepare outline shape:", shape, error);
        }
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        onComplete: () => {
          setShow(false);
        },
      });

      tl
        .to(outlineShapes, {
          strokeDashoffset: 0,
          duration: 1.15,
          stagger: 0.04,
        })
        .to(nParts, {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.5,
          stagger: 0.18,
        })
        .to(ovatechFill, {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.55,
          stagger: 0.07,
        })
        .to(outlineShapes, {
          autoAlpha: 0,
          duration: 0.25,
        })
        .to({}, { duration: 0.35 })
        .to(scienceFill, {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.55,
          stagger: 0.07,
        })
        .to({}, { duration: 0.75 })
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
