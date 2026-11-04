"use client";

import { HeartHandshake } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDictionary } from "@/data/context/DictionaryProvider";

export default function DonateCTA() {
  const dict = useDictionary();
  const t = dict.donate.cta;

  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "es";

  return (
    <section className="relative bg-green-950 text-white py-28 px-6 overflow-hidden">
      {/* Textura sutil */}
      <div className="absolute inset-0 bg-[url('/leaf-texture.png')] opacity-10" />

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-900 text-green-300">
            <HeartHandshake className="w-7 h-7" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          {t.title}
        </h2>

        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          {t.description}
        </p>

        <div className="pt-4">
          <Link
            href={`/${locale}/donate`}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl
                       bg-green-600 hover:bg-green-500 transition
                       font-semibold text-lg shadow-lg"
          >
            {t.button}
          </Link>
        </div>

        <p className="text-xs text-white/60">
          {t.note}
        </p>
      </div>
    </section>
  );
}