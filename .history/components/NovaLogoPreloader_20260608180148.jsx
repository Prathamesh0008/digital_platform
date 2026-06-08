// components/NovaLogoPreloader.jsx
"use client";

<<<<<<< ours
import { useEffect, useRef, useState } from "react";
=======
import { useRef, useState } from "react";
>>>>>>> theirs
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

<<<<<<< ours
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
=======
const NOVA_LOGO_SVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg id="Nova-logo-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 710.81 224.6">
  <defs>
    <style>
      .cls-1 {
        fill: url(#linear-gradient-2);
      }

      .cls-2 {
        fill: #e64f0e;
      }

      .cls-3 {
        fill: none;
        stroke: #3668cb;
        stroke-miterlimit: 10;
      }

      .cls-4 {
        fill: #211955;
      }

      .cls-5 {
        fill: url(#linear-gradient);
      }
    </style>
    <linearGradient id="linear-gradient" x1="56.48" y1="67.7" x2="174.44" y2="67.7" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#36aee4"/>
      <stop offset=".28" stop-color="#3668cb"/>
      <stop offset=".72" stop-color="#543aa3"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="39.71" y1="100.09" x2="181.59" y2="100.09" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#36aee4"/>
      <stop offset=".33" stop-color="#3668cb"/>
      <stop offset=".43" stop-color="#3e5abf"/>
      <stop offset=".65" stop-color="#4e42aa"/>
      <stop offset=".78" stop-color="#543aa3"/>
      <stop offset="1" stop-color="#360f8a"/>
    </linearGradient>
  </defs>
  <g id="logo-outline">
    <path id="n-path-1-outline" class="cls-3" d="M87.11,50.98l-11.98,1.07.05,64.2-34.08.11-.18-37.57.33-59.74,60.67.04,32.2,32.09-.04,31.86-31.18-29.64c-3.84-3.65-11.08-2.85-15.79-2.43Z"/>
    <path id="n-path-2-outline" class="cls-3" d="M134.85,148.71l-30.92-33.49c-3.88-9-.98-20.59-.16-29.92l30.06,29.79c9.73.84,19.05,1.39,28.77.89l-.24-64.35,34.46-.18-.49,48.86-.35,48.36-61.13.04Z"/>
    <path id="o-outline" class="cls-3" d="M239.94,95.85c-14.07-.34-26.05-6.56-31.6-19.58-5.38-12.6-5.78-28.19,1.11-40.74,11.3-20.57,40.12-24.75,57.55-9.55,9.86,8.6,12.32,21.32,11.76,33.6-.99,21.5-16.66,36.8-38.81,36.27ZM253.94,70.95c7.54-16.09,1.48-36.6-11.59-37.03-4.62-.15-9.99,2.11-12.58,6.68-5.11,9-5.17,20.21-1.17,29.67,2.36,5.58,7.4,8.59,12.67,8.63,4.99.04,10.06-2.4,12.66-7.95Z"/>
    <polygon id="v-outline" class="cls-3" points="332.5 18.19 354.74 18.24 329.62 94.29 304.88 94.44 280.93 18.2 303.87 18.33 317.94 70.54 332.5 18.19"/>
    <path id="a-outline" class="cls-3" d="M394.48,77.14l-19.32.32-4.17,16.81-21.97.18,22.92-76.32,27.23-.06,22.79,76.42-22.88-.05-4.6-17.31ZM391.29,60.89l-6.99-23.86-6.23,24.07c5.33.69,8.49.92,13.22-.21Z"/>
    <polygon id="t-outline" class="cls-3" points="455.67 94.28 435.34 94.44 435.14 36.2 416.1 36.1 415.97 18.1 475.24 18.19 475.23 35.97 455.77 36.17 455.67 94.28"/>
    <path id="e-outline" class="cls-3" d="M532.15,63.76l-27.35.1c-.63,5.01-.59,8.62.11,13.59l30.83.17-.04,16.65-51.78.17-.03-76.31h49.8s.03,16.98.03,16.98l-28.92-.14c-.66,4.38-.65,7.6,0,11.85l27.37.12-.03,16.82Z"/>
    <path id="c-outline" class="cls-3" d="M571.86,73.15c8.33,7.7,19.03,6.15,28.86,2.7l3.05,16.5c-6.94,3.52-14.61,3.06-22.45,3.24-22.21.51-38.5-16.25-38.01-38.31.35-15.61,7.59-29.73,22.13-36.15,12.6-5.56,26.58-5.66,39.5-.75l-4.67,17c-8.84-3.87-20.52-5.2-28.43,2.09-9.05,8.35-9.28,25.08.02,33.69Z"/>
    <polygon id="h-outline" class="cls-3" points="679.66 94.58 658.6 94.43 658.67 65.13 635.1 65.31 634.87 94.54 613.81 94.45 613.78 18.26 634.84 18.03 635.13 45.91 658.3 45.82 659 18.12 679.82 18.05 679.66 94.58"/>
  </g>
  <g id="logo-fill">
    <path id="s-science-fill" class="cls-2" d="M486.57,151.45c.1-1.2,4.3-9.4,5.1-11.4.3-.2.7-.1.7.4-2,4.4-2.5,9.2-.4,14.4,13.8-12.8,28.4-24.3,33-28.4-.8-9.8,8-20.1,19-20.1,1.7,0,3.2.6,3.2,2.5,0,.6-.5,1.8-1.2,2.4-3.7,3.2-9.5,7.6-17.2,13.3,1.3,5.9,2.7,12.9,2.7,18.7,0,15.5-11.8,23.2-23.3,23.2-8.4,0-14.6-2.7-18.6-7.8-8.5,8-17.3,20.6-17.3,31.8,0,3.1,1.9,5.8,4.5,5.5.5-.1.8,1,.1,1.1-4,.4-6.8-6-6.8-10.4,0-9,5.2-16.4,18.9-28.9-1.8-2.5-2.5-5.1-2.4-6.3ZM492.37,155.75c3.8,7.3,10.2,9.6,17.5,9.5,7.6-.1,17.7-4.4,17.7-17.1,0-5.8-2.4-18.6-2.4-20.6-6.7,5.4-19.3,15.7-32.8,28.2ZM540.28,109.14c-6.8,0-13.5,3.5-11.6,14.3,5.1-3.7,13.6-9.7,14.5-12.6,0-1.1-.4-1.7-2.9-1.7Z"/>
    <path id="c1-science-fill" class="cls-2" d="M555.57,160.65c-2.5,1.5-4.8,2.1-6.6,2.1-3,0-4.9-1.8-4.9-4.8,0-1.4.9-4.1,1.9-6.1,3.9-7.7,7.9-9.4,14.8-11.6.2-.1.7-.2.9-.2.8,0,2.1,1.9,2.1,2.7s-1.2,2.5-1.8,2.9c-.8-2.1-1.9-3.6-3.7-3.6-3.8,0-10.4,9.1-10.4,15.7,0,2.1.8,3.5,2.7,3.5,1.8,0,3.5-.7,6-2.1,2.6-1.5,8.8-6.4,11.3-8.6.6-.6.8.1.3.6-2,1.8-8.4,7-12.6,9.5Z"/>
    <path id="i-science-fill" class="cls-2" d="M566.97,162.85c-1.6,0-2.6-.8-2.6-2.4,0-1.1.8-3.2,1.8-5.2,1.6-3.4,5-8.7,6.5-10.9.5-.7,2.2-3.8,3-3.8s1.1,1.6,1.1,2.2c0,.2-.1.5-.4.8-4.3,5.2-8.2,12.8-8.2,15.2,0,1.3.7,2,1.8,2,3.4,0,11.5-5.3,17.5-13.1.2-.1.9-.4.6.6-9.4,11.1-17.9,14.6-21.1,14.6ZM582.27,131.34c-.8,0-1.1-.4-1.1-1.1,0-1.6,1.3-3.4,3-3.4.7,0,1.1.5,1.1,1.2,0,1.4-1.5,3.3-3,3.3Z"/>
    <path id="e1-science-fill" class="cls-2" d="M609.07,151.95c-7.2,6.8-15.5,10.8-20,10.8-4,.1-6.6-1.2-6.6-4.3,0-.8.3-2.3.7-3.4,2.5-6.5,10-14.9,15.7-14.9,1.6,0,3.1.3,3.1,2.1,0,4-8.7,8.4-14.7,11-.6,1.4-1,3.1-1,4.2,0,2.4,2.5,3.5,5.2,3.5,5.2,0,12.5-5.2,17.2-9.5.3-.3.6.2.4.5ZM597.17,141.35c-3.1,0-7.8,6.3-9.5,10.9,2.3-.9,5-2.1,6.9-3.5,2.5-1.8,4.2-3.3,4.2-5.6,0-.9-.5-1.8-1.6-1.8Z"/>
    <path id="n-science-fill" class="cls-2" d="M620.47,165.75c-3.6,0-5.4-.8-5.4-4.5,0-3.1,3.6-9.8,6.8-16.5.5-1.4-.1-1.7-1-1.1-4.9,3.3-10.8,10.2-14.7,17.1-.6,1.1-2.4,2-3.3,2-.3,0-.5-.2-.5-.5.7-1.3,2.4-4.5,4-7.6,1.9-3.4,4.6-9.1,5.5-11.6.4-1.1,1.3-1.6,3.3-2.6.4-.2.7-.3.9-.3s.3.2.3.4c0,.8-1.6,3.3-6,12.6,4.7-6,12.3-13,14.8-13,.4,0,1.5,1.1,1.5,1.7,0,1.6-7.7,10.9-7.7,18.4,0,2.8.9,4.3,3.9,4.3,3.5,0,8.3-3,10.6-5.7.5-.6.8.2.5.5-3.3,3.6-9.3,6.4-13.5,6.4Z"/>
    <path id="c2-science-fill" class="cls-2" d="M644.17,160.65c-2.5,1.5-4.8,2.1-6.6,2.1-3,0-4.9-1.8-4.9-4.8,0-1.4.9-4.1,1.9-6.1,3.9-7.7,7.9-9.4,14.8-11.6.2-.1.7-.2.9-.2.8,0,2.1,1.9,2.1,2.7s-1.2,2.5-1.8,2.9c-.8-2.1-1.9-3.6-3.7-3.6-3.8,0-10.4,9.1-10.4,15.7,0,2.1.8,3.5,2.7,3.5,1.8,0,3.5-.7,6-2.1,2.6-1.5,8.8-6.4,11.3-8.6.6-.6.8.1.3.6-2,1.8-8.4,7-12.6,9.5Z"/>
    <path id="e2-science-fill" class="cls-2" d="M679.37,151.95c-7.2,6.8-15.5,10.8-20,10.8-4,.1-6.6-1.2-6.6-4.3,0-.8.3-2.3.7-3.4,2.5-6.5,10-14.9,15.7-14.9,1.6,0,3.1.3,3.1,2.1,0,4-8.7,8.4-14.7,11-.6,1.4-1,3.1-1,4.2,0,2.4,2.5,3.5,5.2,3.5,5.2,0,12.5-5.2,17.2-9.5.3-.3.6.2.4.5ZM667.47,141.35c-3.1,0-7.8,6.3-9.5,10.9,2.3-.9,5-2.1,6.9-3.5,2.5-1.8,4.2-3.3,4.2-5.6,0-.9-.5-1.8-1.6-1.8Z"/>
    <path id="n-path-1-fill" class="cls-5" d="M87.11,50.98l-11.98,1.07.05,64.2-34.08.11-.18-37.57.33-59.74,60.67.04,32.2,32.09-.04,31.86-31.18-29.64c-3.84-3.65-11.08-2.85-15.79-2.43Z"/>
    <path id="n-path-2-fill" class="cls-1" d="M134.85,148.71l-30.92-33.49c-3.88-9-.98-20.59-.16-29.92l30.06,29.79c9.73.84,19.05,1.39,28.77.89l-.24-64.35,34.46-.18-.49,48.86-.35,48.36-61.13.04Z"/>
    <path id="o-fill" class="cls-4" d="M239.94,95.85c-14.07-.34-26.05-6.56-31.6-19.58-5.38-12.6-5.78-28.19,1.11-40.74,11.3-20.57,40.12-24.75,57.55-9.55,9.86,8.6,12.32,21.32,11.76,33.6-.99,21.5-16.66,36.8-38.81,36.27ZM253.94,70.95c7.54-16.09,1.48-36.6-11.59-37.03-4.62-.15-9.99,2.11-12.58,6.68-5.11,9-5.17,20.21-1.17,29.67,2.36,5.58,7.4,8.59,12.67,8.63,4.99.04,10.06-2.4,12.66-7.95Z"/>
    <polygon id="v-fill" class="cls-4" points="332.5 18.19 354.74 18.24 329.62 94.29 304.88 94.44 280.93 18.2 303.87 18.33 317.94 70.54 332.5 18.19"/>
    <path id="a-fill" class="cls-4" d="M394.48,77.14l-19.32.32-4.17,16.81-21.97.18,22.92-76.32,27.23-.06,22.79,76.42-22.88-.05-4.6-17.31ZM391.29,60.89l-6.99-23.86-6.23,24.07c5.33.69,8.49.92,13.22-.21Z"/>
    <polygon id="t-fill" class="cls-4" points="455.67 94.28 435.34 94.44 435.14 36.2 416.1 36.1 415.97 18.1 475.24 18.19 475.23 35.97 455.77 36.17 455.67 94.28"/>
    <path id="e-ovatech-fill" class="cls-4" d="M532.15,63.76l-27.35.1c-.63,5.01-.59,8.62.11,13.59l30.83.17-.04,16.65-51.78.17-.03-76.31h49.8s.03,16.98.03,16.98l-28.92-.14c-.66,4.38-.65,7.6,0,11.85l27.37.12-.03,16.82Z"/>
    <path id="c-ovatech-fill" class="cls-4" d="M571.86,73.15c8.33,7.7,19.03,6.15,28.86,2.7l3.05,16.5c-6.94,3.52-14.61,3.06-22.45,3.24-22.21.51-38.5-16.25-38.01-38.31.35-15.61,7.59-29.73,22.13-36.15,12.6-5.56,26.58-5.66,39.5-.75l-4.67,17c-8.84-3.87-20.52-5.2-28.43,2.09-9.05,8.35-9.28,25.08.02,33.69Z"/>
    <polygon id="h-fill" class="cls-4" points="679.66 94.58 658.6 94.43 658.67 65.13 635.1 65.31 634.87 94.54 613.81 94.45 613.78 18.26 634.84 18.03 635.13 45.91 658.3 45.82 659 18.12 679.82 18.05 679.66 94.58"/>
  </g>
</svg>`;

export default function NovaLogoPreloader({ onComplete }) {
  const preloaderRef = useRef(null);
  const [show, setShow] = useState(true);

  useGSAP(
    () => {
      if (!preloaderRef.current) return;
>>>>>>> theirs

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

<<<<<<< ours
    gsap.set(preloaderRef.current, {
  autoAlpha: 1,
  backgroundColor: "#E5E6DD",
});
=======
      gsap.set(preloaderRef.current, {
        autoAlpha: 1,
        backgroundColor: "#E5E6DD",
      });
>>>>>>> theirs

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

<<<<<<< ours
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
       
=======
      tl.to(outlineShapes, {
        strokeDashoffset: 0,
        duration: 0.45,
        stagger: 0.022,
      })
        .add("fillStart", "-=0.35")
        .to(
          novatechFill,
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.24,
            stagger: 0.03,
          },
          "fillStart"
        )
        .to(
          outlineShapes,
          {
            autoAlpha: 0,
            duration: 0.18,
          },
          "fillStart+=0.12"
        )
        .set(outlineShapes, {
          autoAlpha: 0,
          visibility: "hidden",
        })
        .to(
          scienceFill,
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.24,
            stagger: 0.03,
          },
          "-=0.06"
        )
        .to(
          preloaderRef.current,
          {
            autoAlpha: 0,
            scale: 1.015,
            duration: 0.25,
            ease: "power2.inOut",
          },
          "-=0.02"
        );

>>>>>>> theirs
      return () => tl.kill();
    },
    {
      scope: preloaderRef,
<<<<<<< ours
      dependencies: [svgText],
=======
>>>>>>> theirs
    }
  );

  if (!show) return null;

  return (
    <div ref={preloaderRef} className="nova-preloader">
<<<<<<< ours
      {/* {!svgText && <div className="nova-loader-dot" />} */}

      {svgText && (
        <div
          className="nova-logo-wrap"
          dangerouslySetInnerHTML={{ __html: svgText }}
        />
      )}
=======
      <div
        className="nova-logo-wrap"
        dangerouslySetInnerHTML={{ __html: NOVA_LOGO_SVG }}
      />
>>>>>>> theirs
    </div>
  );
}

