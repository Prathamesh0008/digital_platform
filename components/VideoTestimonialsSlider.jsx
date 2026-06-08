// digital_platform/components/VideoTestimonialsSlider.jsx
"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const videos = [
  {
    title: "Client Testimonial 1",
    thumbnail: "/testimonials/video1.jpg",
    videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1",
  },
  {
    title: "Client Testimonial 2",
    thumbnail: "/testimonials/video2.jpg",
    videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2",
  },
  {
    title: "Client Testimonial 3",
    thumbnail: "/testimonials/video3.jpg",
    videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_3",
  },
];

export default function VideoTestimonialsSlider() {
  const repeatedVideos = [...videos, ...videos];

  return (
    <section
      className="relative overflow-hidden px-4 py-16 sm:px-6 md:px-10 md:py-24"
      style={{
        background: "#EAEBDB",
      }}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 border-l border-[#0d2d47]/20 pl-4 sm:pl-6 md:pl-10">
          {/* <span className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white">
            Video Testimonials
          </span> */}

          <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-[#0d2d47] sm:text-5xl md:text-[72px]">
            What Our Clients
            <br />
            Say About Us
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
            Stories that showcase trust, growth, and results with Nova
            Techscience.
          </p>
        </div>

        <div className="relative overflow-hidden py-4">
          <div className="flex w-max animate-video-slide gap-5 sm:gap-7">
            {repeatedVideos.map((video, index) => (
              <a
                key={`${video.title}-${index}`}
                href={video.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative h-[300px] w-[210px] shrink-0 overflow-hidden rounded-[28px] border border-white/30 bg-white/20 p-2 backdrop-blur-md transition duration-300 hover:-translate-y-2 sm:h-[360px] sm:w-[250px] md:h-[420px] md:w-[295px]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[22px]">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes="(max-width: 640px) 210px, (max-width: 768px) 250px, 295px"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d2d47]/80 via-[#0d2d47]/20 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#0d2d47] shadow-xl transition duration-300 group-hover:scale-110 group-hover:bg-[#0d2d47] group-hover:text-white">
                      <FaPlay className="ml-1 text-lg" />
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-sm font-semibold uppercase tracking-wide text-white">
                      {video.title}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes video-slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-video-slide {
          animation: video-slide 26s linear infinite;
        }

        .animate-video-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
