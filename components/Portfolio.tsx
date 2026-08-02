import Image from "next/image";
import PortfolioCarousel from "./PortfolioCarousel";
const projects = [
  {
    title: "Creative Agency Website",
    image: "/portfolio/project1.jpg",
    category: "Web Design",
  },
  {
    title: "E-Commerce Platform",
    image: "/portfolio/project2.jpg",
    category: "Development",
  },
  {
    title: "Brand Identity",
    image: "/portfolio/project3.jpg",
    category: "Branding",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Our Work
          </p>

          <h2 className="text-4xl font-bold">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            A selection of projects showcasing our expertise in design,
            development, and branding.
          </p>
          <button className="mt-4 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
  View Project
</button>
        </div>

<PortfolioCarousel
  projects={[...projects, ...projects, ...projects]}
/>      </div>
    </section>
  );
}