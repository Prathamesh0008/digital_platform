"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Shraddha Katole",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Nova Techscience helped us improve our digital marketing visibility and generate quality leads.",
  },
  {
    name: "Nirankar Security",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "We're very happy with our new website. The team understood our requirements and delivered a clean, functional site.",
  },
  {
    name: "Pankaj Walzade",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "Their website development and graphic team delivered excellent work with smooth communication.",
  },
  {
    name: "Aarav Sharma",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "A professional team with strong digital marketing knowledge and great execution.",
  },
];

export default function ClientReviewSlider() {
  const repeatedReviews = [...reviews, ...reviews];

  const trackRef = useRef(null);
  const animationRef = useRef(null);

  const dragRef = useRef({
    active: false,
    startX: 0,
    lastX: 0,
    offset: 0,
  });

  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const syncViewport = () => {
      setIsMobile(mediaQuery.matches);
    };

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => {
      mediaQuery.removeEventListener("change", syncViewport);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const speed = 0.6;

    const animate = () => {
      if (!dragRef.current.active) {
        const track = trackRef.current;

        if (track) {
          const resetWidth = track.scrollWidth / 3;

          dragRef.current.offset -= speed;

          if (Math.abs(dragRef.current.offset) >= resetWidth) {
            dragRef.current.offset = 0;
          }

          setOffset(dragRef.current.offset);
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;

    const intervalId = window.setInterval(() => {
      setMobileIndex((current) => (current + 1) % reviews.length);
    }, 3200);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isMobile]);

  const handlePointerDown = (event) => {
    dragRef.current.active = true;
    dragRef.current.startX = event.clientX;
    dragRef.current.lastX = event.clientX;
    setIsDragging(true);

    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragRef.current.active) return;

    const deltaX = event.clientX - dragRef.current.lastX;
    dragRef.current.lastX = event.clientX;
    dragRef.current.offset += deltaX;

    const track = trackRef.current;

    if (track) {
      const resetWidth = track.scrollWidth / 2;

      if (dragRef.current.offset > 0) {
        dragRef.current.offset = -resetWidth + dragRef.current.offset;
      }

      if (Math.abs(dragRef.current.offset) >= resetWidth) {
        dragRef.current.offset = 0;
      }
    }

    setOffset(dragRef.current.offset);
  };

  const handlePointerUp = (event) => {
    dragRef.current.active = false;
    setIsDragging(false);
    event.currentTarget.releasePointerCapture?.(event.pointerId);
  };

  return (
    <section className="relative overflow-hidden bg-[#A0B3ED] px-4 py-12 sm:px-6 md:px-10 md:py-14">
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#7392FB]/30 blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-120px] h-[340px] w-[340px] rounded-full bg-[#EAEBDB]/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-4xl font-semibold uppercase leading-[0.98] tracking-tight text-white sm:text-5xl md:text-[58px]">
            Stories From
            <br />
            Our Clients
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            Client stories and testimonials from Nova Techscience.
          </p>
        </div>

        <div className="relative overflow-hidden py-4 md:hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(-${mobileIndex * 100}%)`,
              transition: "transform 0.55s ease",
            }}
          >
            {reviews.map((review) => (
              <article
                key={review.name}
                className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-[30px] border border-white/15 bg-white/[0.08] p-5 text-left backdrop-blur-md"
              >
                <div className="absolute right-5 top-5 text-white/35 drop-shadow-[0_8px_20px_rgba(255,255,255,0.25)]">
                  <FaQuoteLeft className="text-5xl" />
                </div>

                <div className="mb-6 flex items-center gap-4">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={56}
                    height={56}
                    sizes="56px"
                    draggable={false}
                    className="h-14 w-14 rounded-full border border-white/20 object-cover"
                  />

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {review.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wide text-white/55">
                      Verified Client
                    </p>
                  </div>
                </div>

                <p className="relative z-10 text-sm leading-7 text-white/80">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="absolute bottom-6 left-6 flex gap-1 text-[#EAEBDB]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-sm" />
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {reviews.map((review, index) => (
              <button
                key={review.name}
                type="button"
                onClick={() => setMobileIndex(index)}
                className={`h-2.5 rounded-full transition ${
                  mobileIndex === index ? "w-7 bg-white" : "w-2.5 bg-white/40"
                }`}
                aria-label={`Show review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className={`relative hidden overflow-hidden select-none py-4 md:block ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ touchAction: "pan-y" }}
        >
          <div
            ref={trackRef}
            className="flex w-max gap-5 sm:gap-7"
            style={{
              transform: `translateX(${offset}px)`,
              transition: isDragging ? "none" : "transform 0.03s linear",
            }}
          >
            {repeatedReviews.map((review, index) => (
              <article
                key={`${review.name}-${index}`}
                className="group relative h-[280px] w-[310px] shrink-0 overflow-hidden rounded-[30px] border border-white/15 bg-white/[0.08] p-6 text-left backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/[0.12] sm:h-[300px] sm:w-[390px]"
              >
                <div className="absolute right-5 top-5 text-white/35 drop-shadow-[0_8px_20px_rgba(255,255,255,0.25)]">
                  <FaQuoteLeft className="text-6xl" />
                </div>

                <div className="mb-6 flex items-center gap-4">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={56}
                    height={56}
                    sizes="56px"
                    draggable={false}
                    className="h-14 w-14 rounded-full border border-white/20 object-cover"
                  />

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {review.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wide text-white/55">
                      Verified Client
                    </p>
                  </div>
                </div>

                <p className="relative z-10 text-sm leading-7 text-white/80 sm:text-base">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="absolute bottom-6 left-6 flex gap-1 text-[#EAEBDB]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-sm" />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
