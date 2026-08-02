"use client";

import Image from "next/image";
import FloatingCard from "./FloatingCard";

export default function HeroCards() {
  return (
    <>
      {/* Dashboard Card */}
      <FloatingCard
        delay={0.2}
        className="absolute left-[20px] top-[250px] hidden lg:block -rotate-6"
      >
        <div className="group relative w-[240px] overflow-hidden rounded-3xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-2xl transition duration-300 hover:shadow-red-500/40">
          {/* Glow */}
          <div className="absolute inset-0 bg-red-500/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

          <Image
            src="/dashboard-card.png.png"
            alt="Dashboard"
            width={500}
            height={500}
            className="relative transition duration-500 group-hover:scale-105"
          />
        </div>
      </FloatingCard>

    
      

      {/* Projects Card */}
      <FloatingCard
        delay={1.6}
        className="absolute left-[40px] top-[450px] hidden lg:block"
      >
        <div className="rounded-3xl border border-white/10 bg-black/70 px-7 py-5 backdrop-blur-xl shadow-xl">
          <h2 className="text-4xl font-bold text-red-500">
            120+
          </h2>

          <p className="mt-2 text-sm text-gray-300">
            Projects Completed
          </p>
        </div>
      </FloatingCard>

      {/* Mobile Card */}
      <FloatingCard
        delay={2.2}
        className="absolute left-[600px] top-[450px] hidden lg:block rotate-6"
      >
        <div className="group relative w-[170px] overflow-hidden rounded-[34px] border border-white/10 bg-black/70 backdrop-blur-xl shadow-2xl transition duration-300 hover:shadow-red-500/40">
          {/* Glow */}
          <div className="absolute inset-0 bg-red-500/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

          <Image
            src="/mobile-card.png.png"
            alt="Mobile UI"
            width={300}
            height={600}
            className="relative transition duration-500 group-hover:scale-105"
          />
        </div>
      </FloatingCard>
    </>
  );
}