"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useDictionary } from "@/context/DictionaryProvider";

const images = [
  "/hero/image00.PNG",
  "/hero/image01.JPG",
  "/hero/image02.JPG",
  "/hero/image03.JPG",
  "/hero/image04.JPG",
];

export default function HomeHero() {
  const dict = useDictionary();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
      {/* Background slider */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={images[index]}
            alt={dict.home.heroTitle}
            fill
            priority={index === 0}
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 text-center text-white space-y-8 relative z-10">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          {dict.home.heroTitle}
        </h1>

        <p className="text-sm md:text-base uppercase tracking-widest text-green-300/90">
          {dict.home.heroSubtitle}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link
            href="/donate"
            className="px-8 py-4 rounded-xl bg-green-500 text-black font-medium hover:bg-green-400 transition"
          >
            {dict.home.ctaPrimary}
          </Link>

          <Link
            href="#story"
            className="px-8 py-4 rounded-xl border border-white/60 font-medium hover:bg-white/10 transition"
          >
            {dict.home.ctaSecondary}
          </Link>
        </div>
      </div>

      {/* Animated down arrow */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          delay: 1.5,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-2xl"
      >
        ↓
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}