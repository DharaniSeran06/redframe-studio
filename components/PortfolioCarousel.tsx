"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

type Project = {
  title: string;
  image: string;
  category: string;
};

interface Props {
  projects: Project[];
}

export default function PortfolioCarousel({ projects }: Props) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 0.5,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <div className="relative">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-zinc-950 to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-zinc-950 to-transparent" />

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
className="min-w-[400px] md:min-w-[430px] lg:min-w-[450px]" >
      {/* Heading Above Card */}

  <div className="mb-5 text-center">
    <p className="text-sm uppercase tracking-widest text-gray-400">
      {project.category}
    </p>

   
  </div>
              <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition duration-500 hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/20">
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 translate-y-6 p-8 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm uppercase tracking-[0.3em] text-red-500">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-white">
                      {project.title}
                    </h3>

                    <button className="mt-5 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold transition hover:bg-red-700">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}