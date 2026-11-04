"use client";
import { useDictionary } from "@/data/context/DictionaryProvider";

export default function TransparencyHero() {
  const dict = useDictionary();
  const t = dict.transparency.hero;

  return (
    <section className="relative px-6 py-32 bg-green-950 text-white overflow-hidden">

      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/leaf-texture.png')] opacity-10" />

      <div className="relative max-w-5xl mx-auto space-y-8">

        {/* Eyebrow */}
        <span className="inline-block text-sm tracking-wide uppercase text-emerald-300">
          {t.eyebrow}
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
          {t.title}
        </h1>

        {/* Divider */}
        <span className="block w-16 h-1 bg-emerald-500 rounded-full" />

        {/* Description */}
        <p className="text-lg text-white/90 max-w-3xl">
          {t.description}
        </p>

      </div>
    </section>
  );
}