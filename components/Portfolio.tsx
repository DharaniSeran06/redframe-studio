import Image from "next/image";

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

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
             className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition duration-300 hover:border-red-600 hover:shadow-xl hover:shadow-red-600/20"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* Project Information */}
                <div className="absolute bottom-0 left-0 translate-y-4 p-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}