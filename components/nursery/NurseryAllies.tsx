"use client";

import Image from "next/image";
import { nurseryAllies } from "@/data/nurseryAllies";

export default function NurseryAllies() {
  return (
    <section className="px-6 py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold">
            Alianzas académicas e institucionales
          </h2>
          <p className="text-gray-700">
            El vivero forestal se fortalece gracias a la colaboración con
            instituciones públicas, académicas y redes de voluntariado.
          </p>
        </div>

        {/* Logos grid */}
        <div className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center
        ">
          {nurseryAllies.map((ally) => (
            <div
              key={ally.name}
              className="flex items-center justify-center
              grayscale hover:grayscale-0 transition"
              title={ally.name}
            >
              <Image
                src={ally.logo}
                alt={ally.name}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
