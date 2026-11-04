
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { useDictionary } from "@/context/DictionaryProvider";
import { fadeUp } from "@/components/animations/fadeUp";

const images = [
  "/nursery/image00.JPG",
  "/nursery/image02.jpeg",
  "/nursery/image03.jpeg",
];

export default function NurseryHero() {
  const dict = useDictionary();
  const t = dict.nursery.hero;

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">

      {/* IMAGES */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={t.imageAlt}
            fill
            priority={index === 0}
            unoptimized
            className="object-cover"
          />
        </div>
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-6"
          >
            <span className="inline-block px-4 py-1 text-xs font-medium tracking-wide uppercase rounded-full bg-emerald-600 text-white">
              {t.eyebrow}
            </span>

            <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              {t.title}
              <br />
              <span className="text-emerald-300">
                {t.highlight}
              </span>
            </h1>

            <p className="text-lg text-gray-100 max-w-2xl">
              {t.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* SCROLL CUE */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 animate-bounce"
        aria-hidden="true"
      >
        <ArrowDown className="w-5 h-5" />
      </div>

    </section>
  );
}