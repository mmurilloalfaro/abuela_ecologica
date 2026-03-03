"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface ProjectHeroProps {
  title: string;
  excerpt: string;
  images: string[];
}

export default function ProjectHero({
  title,
  excerpt,
  images,
}: ProjectHeroProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-[70vh] min-h-[480px] overflow-hidden flex items-end">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={images[index]}
            alt={title}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 text-white space-y-6">
        <h1 className="text-4xl md:text-6xl font-semibold">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl">
          {excerpt}
        </p>
      </div>
    </section>
  );
}
