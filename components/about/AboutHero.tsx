"use client";

import { useDictionary } from "@/context/DictionaryProvider";

export default function AboutHero() {
  const dict = useDictionary();

  return (
    <section className="relative px-6 py-32 bg-green-950 text-white overflow-hidden">

      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/leaf-texture.png')] opacity-10" />

      <div className="relative max-w-5xl mx-auto space-y-8">

        {/* Eyebrow */}
        <span className="inline-block text-sm tracking-wide uppercase text-emerald-300">
          {dict.aboutHero.eyebrow}
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
          {dict.aboutHero.title}
        </h1>

        {/* Divider */}
        <span className="block w-16 h-1 bg-emerald-500 rounded-full" />

        {/* Description */}
        <p className="text-lg text-white/90 max-w-3xl">
          {dict.aboutHero.description}
        </p>

      </div>
    </section>
  );
}