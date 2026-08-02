"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Laptop() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
        rotate: [-0.5, 0.5, -0.5],
      }}
      transition={{
        opacity: { duration: 0.8 },
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.01,
        rotate: 1,
        transition: { duration: 0.3 },
      }}
      className="relative w-[600px] lg:w-[700px] max-w-full"
    >
      {/* Red Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/25 blur-[140px]" />

      <Image
        src="/laptop.png"
        alt="Laptop Mockup"
        width={800}
        height={550}
        priority
        className="drop-shadow-[0_40px_90px_rgba(255,0,0,0.35)] select-none"
      />
    </motion.div>
  );
}