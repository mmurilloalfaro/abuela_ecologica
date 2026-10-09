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

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      next();
    }, 6000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="pt-32 pb-16 px-6 bg-white">

      <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-green-950">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          {excerpt}
        </p>

      </div>

      <div className="max-w-6xl mx-auto">

        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={images[index]}
                alt={title}
                fill
                priority
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="
                  absolute left-4 top-1/2 -translate-y-1/2 z-20
                  w-12 h-12
                  rounded-full
                  bg-white/90
                  backdrop-blur
                  shadow-lg
                  hover:bg-white
                  transition
                "
              >
                ←
              </button>

              <button
                onClick={next}
                className="
                  absolute right-4 top-1/2 -translate-y-1/2 z-20
                  w-12 h-12
                  rounded-full
                  bg-white/90
                  backdrop-blur
                  shadow-lg
                  hover:bg-white
                  transition
                "
              >
                →
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex justify-center gap-3 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`
                  w-3 h-3 rounded-full transition-all
                  ${
                    i === index
                      ? "bg-green-700 scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }
                `}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}