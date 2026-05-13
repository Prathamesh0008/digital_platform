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
    fetch("/novatechscience-logo.svg")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`SVG file not found. Status: ${res.status}`);
        }
        return res.text();
      })
      .then((text) => {
        if (!text.includes("<svg")) {
          console.error("This file is not SVG:", text.slice(0, 200));
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

      const get = (selector) => root.querySelector(selector);

      const collectPaths = (selector) => {
        const el = get(selector);

        if (!el) return [];

        if (el.tagName?.toLowerCase() === "path") {
          return [el];
        }

        return gsap.utils.toArray(el.querySelectorAll("path"));
      };

      const unique = (items) => [...new Set(items.filter(Boolean))];

      const sortLeftToRight = (paths) => {
        return [...paths].sort((a, b) => {
          const boxA = a.getBBox();
          const boxB = b.getBBox();
          return boxA.x - boxB.x;
        });
      };

      /*
        OUTLINE:
        This draws the outline first.
        It uses all paths inside #logo-outline.
      */
      let outlinePaths = gsap.utils.toArray(
        root.querySelectorAll("#logo-outline path")
      );

      outlinePaths = sortLeftToRight(outlinePaths);

      /*
        ALL FILL PATHS:
        Hide every fill path first.
      */
      const allFillPaths = gsap.utils.toArray(
        root.querySelectorAll("#logo-fill path")
      );

      /*
        N PARTS:
        These are your custom N mark pieces.
      */
      let nParts = unique([
        ...collectPaths("#n-part-1-fill"),
        ...collectPaths("#n-part-2-fill"),

        // fallback old names
        ...collectPaths("#n-path-1-2"),
        ...collectPaths("#n-path-2-2"),
      ]);

      nParts = sortLeftToRight(nParts);

      /*
        MAIN FIX:
        Remove N parts from the fill list.
        Then separate OVATECH and SCIENCE by letter size.

        SCIENCE is smaller, so it goes last.
      */
      const nPartSet = new Set(nParts);

      const fillWithoutN = allFillPaths.filter((path) => !nPartSet.has(path));

      const pathInfo = fillWithoutN.map((path) => {
        const box = path.getBBox();

        return {
          path,
          x: box.x,
          y: box.y,
          width: box.width,
          height: box.height,
        };
      });

      const maxHeight = Math.max(...pathInfo.map((item) => item.height));

      /*
        SCIENCE letters are much smaller than OVATECH letters.
        If needed, you can adjust 0.65 to 0.6 or 0.7.
      */
      const scienceFill = pathInfo
        .filter((item) => item.height < maxHeight * 0.65)
        .sort((a, b) => a.x - b.x)
        .map((item) => item.path);

      const ovatechFill = pathInfo
        .filter((item) => item.height >= maxHeight * 0.65)
        .sort((a, b) => a.x - b.x)
        .map((item) => item.path);

      console.log("SVG animation check:", {
        outlinePaths: outlinePaths.length,
        allFillPaths: allFillPaths.length,
        nParts: nParts.length,
        ovatechFill: ovatechFill.length,
        scienceFill: scienceFill.length,
      });

      /*
        INITIAL STATE
      */
      gsap.set(svg, {
        opacity: 1,
        visibility: "visible",
      });

      gsap.set(outlinePaths, {
        fill: "none",
        stroke: "#ffffff",
        strokeWidth: 2,
        opacity: 1,
        visibility: "visible",
      });

      outlinePaths.forEach((path) => {
        try {
          const length = path.getTotalLength();

          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
        } catch (error) {
          console.warn("Path length error:", path, error);
        }
      });

      /*
        Hide all filled parts.
        This makes sure SCIENCE does not show first.
      */
      gsap.set(allFillPaths, {
        fill: "#ffffff",
        stroke: "none",
        opacity: 0,
        visibility: "hidden",
        y: 16,
        filter: "blur(8px)",
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
        /*
          1. Outline appears first
        */
        .to(outlinePaths, {
          strokeDashoffset: 0,
          duration: 1.2,
          stagger: 0.04,
        })

        /*
          2. N mark fills
        */
        .to(nParts, {
          opacity: 1,
          visibility: "visible",
          y: 0,
          filter: "blur(0px)",
          duration: 0.45,
          stagger: 0.2,
        })

        /*
          3. OVATECH fills completely
        */
        .to(ovatechFill, {
          opacity: 1,
          visibility: "visible",
          y: 0,
          filter: "blur(0px)",
          duration: 0.5,
          stagger: 0.055,
        })

        /*
          4. Wait after OVATECH is fully done
        */
        .to({}, { duration: 0.55 })

        /*
          5. SCIENCE appears LAST
        */
        .to(scienceFill, {
          opacity: 1,
          visibility: "visible",
          y: 0,
          filter: "blur(0px)",
          duration: 0.5,
          stagger: 0.055,
        })

        /*
          6. Soften outline
        */
        .to("#logo-outline", {
          opacity: 0.22,
          duration: 0.3,
        })

        /*
          7. Exit preloader
        */
        .to(preloaderRef.current, {
          opacity: 0,
          scale: 1.04,
          duration: 0.75,
          delay: 0.45,
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