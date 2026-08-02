"use client";

import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import HeroCards from "./HeroCards";
import Laptop from "./Laptop";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}
      <HeroBackground />

      {/* Floating Cards */}
      <HeroCards />

      {/* Main Content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center gap-12 px-8 lg:px-12">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-1 justify-center"
        >
          <Laptop />
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-1 flex-col items-start text-left text-white"
        >
          {/* Subtitle */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-red-500">
            WE BUILD DIGITAL SOLUTIONS
          </p>

          {/* Heading */}
          <h1 className="max-w-md text-5xl font-extrabold leading-[1.05] lg:text-5xl">
            Crafting Digital
            <br />
            <span className="text-red-500">
              Experiences
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-md text-base leading-8 text-gray-300 lg:text-lg">
            We design and build modern websites,
            digital experiences, branding solutions
            and powerful products that help brands
            grow and stand out.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex items-center gap-4">

            <button className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:bg-red-700">
              View Our Work →
            </button>

            <button className="rounded-full border border-red-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-600 hover:border-red-600">
              Contact Us
            </button>

          </div>
        </motion.div>

      </div>
    </section>
  );
}