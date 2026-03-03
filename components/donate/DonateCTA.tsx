"use client";

import { HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function DonateCTA() {
  return (
    <section className="relative bg-green-950 text-white py-28 px-6 overflow-hidden">
      
      {/* textura sutil */}
      <div className="absolute inset-0 bg-[url('/leaf-texture.png')] opacity-10" />

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        
        <div className="flex justify-center">
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-900 text-green-300">
            <HeartHandshake className="w-7 h-7" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          Donar es un acto de amor por la vida
        </h2>

        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Tu aporte impulsa educación ambiental, restauración ecológica
          y trabajo comunitario con impacto real y medible.
        </p>

        <div className="pt-4">
          <Link
            href="/es/donate"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl 
                       bg-green-600 hover:bg-green-500 transition 
                       font-semibold text-lg shadow-lg"
          >
            Quiero apoyar
          </Link>
        </div>

        <p className="text-xs text-white/60">
          Gracias por confiar. La transparencia también es parte de nuestro compromiso.
        </p>

      </div>
    </section>
  );
}
