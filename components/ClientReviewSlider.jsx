// digital_platform/components/ClientReviewSlider.jsx
"use client";

import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    name: "Shraddha Katole",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Nova Techscience helped us improve our digital marketing visibility and generate quality leads.",
  },
  {
    name: "Nirankar Security",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "We’re very happy with our new website. The team understood our requirements and delivered a clean, functional site.",
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
  const repeatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="relative overflow-hidden bg-[#A0B3ED] px-4 py-16 sm:px-6 md:px-10 md:py-24">
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#7392FB]/30 blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-120px] h-[340px] w-[340px] rounded-full bg-[#EAEBDB]/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="mb-12 max-w-3xl">
          <span className="mb-5 inline-flex rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white ring-1 ring-white/20">
            Client Testimonials
          </span>

          <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-[72px]">
            Stories From
            <br />
            Our Clients
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            Client stories and testimonials from Nova Techscience.
          </p>
        </div>

        <div className="relative overflow-hidden py-4">
          <div className="flex w-max animate-review-slide gap-5 sm:gap-7">
            {repeatedReviews.map((review, index) => (
              <article
                key={`${review.name}-${index}`}
                className="group relative h-[300px] w-[310px] shrink-0 overflow-hidden rounded-[30px] border border-white/15 bg-white/[0.08] p-6 text-left backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/[0.12] sm:w-[390px]"
              >
                <div className="absolute right-5 top-5 text-white/10">
                  <FaQuoteLeft className="text-5xl" />
                </div>

                <div className="mb-6 flex items-center gap-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-14 w-14 rounded-full border border-white/20 object-cover"
                  />

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {review.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wide text-white/45">
                      Verified Client
                    </p>
                  </div>
                </div>

                <p className="relative z-10 text-sm leading-7 text-white/75 sm:text-base">
                  “{review.text}”
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

      <style jsx>{`
        @keyframes review-slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }

        .animate-review-slide {
          animation: review-slide 28s linear infinite;
        }

        .animate-review-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}