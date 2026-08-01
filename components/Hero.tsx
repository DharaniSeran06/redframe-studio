"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl"
        >
          Crafting Digital Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8 max-w-2xl text-lg text-gray-300 md:text-xl"
        >
          We design modern websites, intuitive user experiences, and powerful
          digital products that help brands grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="rounded-lg bg-red-600 px-8 py-4 font-semibold text-white shadow-xl shadow-red-600/50 transition duration-300 hover:scale-105 hover:bg-red-700">
            View Work
          </button>

          <button className="rounded-lg border border-red-600 px-8 py-4 font-semibold text-red-500 transition duration-300 hover:bg-red-600 hover:text-white">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}