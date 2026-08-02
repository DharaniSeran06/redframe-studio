"use client";

import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      <Image
        src="/hero.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Red Glow Behind Laptop */}
      <div className="absolute bottom-16 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-red-600/30 blur-[140px]" />

      {/* Extra Glow */}
      <div className="absolute bottom-0 left-1/2 h-[200px] w-[650px] -translate-x-1/2 bg-red-500/20 blur-[120px]" />
    </>
  );
}