import {
  Palette,
  MonitorSmartphone,
  PenTool,
  Megaphone,
} from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    description:
      "Crafting intuitive and engaging user experiences with modern design principles.",
    icon: Palette,
  },
  {
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable websites using modern technologies.",
    icon: MonitorSmartphone,
  },
  {
    title: "Brand Identity",
    description:
      "Creating memorable logos, visual identities, and brand strategies.",
    icon: PenTool,
  },
  {
    title: "Digital Marketing",
    description:
      "Helping businesses grow through SEO, social media, and digital campaigns.",
    icon: Megaphone,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-12 text-center">
  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
    What We Do
  </p>

  <h2 className="text-4xl font-bold">
    Our Services
  </h2>
</div>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
          We provide end-to-end digital solutions that transform ideas into
          impactful experiences.
        </p>

        {/* Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition duration-300 hover:-translate-y-3 hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/20"
              >
                <div className="mb-6 inline-flex rounded-full bg-red-600/10 p-4">
                  <Icon
                    size={38}
                    className="text-red-500"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="leading-7 text-gray-400">
                  {service.description}
                </p>
                <div className="mt-auto pt-6">
  <span className="inline-block font-semibold text-red-500 transition group-hover:translate-x-2">
    Learn More →
  </span>
</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}