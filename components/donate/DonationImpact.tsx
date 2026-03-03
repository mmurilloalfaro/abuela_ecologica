"use client";

import { Leaf, TreePine, Users, Globe } from "lucide-react";

export default function DonationImpact() {
  const items = [
    {
      title: "Educación ambiental",
      desc: "Talleres y programas para niños y jóvenes",
      icon: <Leaf className="w-7 h-7" />,
    },
    {
      title: "Reforestación",
      desc: "Recuperación de ecosistemas y corredores biológicos",
      icon: <TreePine className="w-7 h-7" />,
    },
    {
      title: "Comunidades",
      desc: "Acompañamiento en zonas rurales e indígenas",
      icon: <Users className="w-7 h-7" />,
    },
    {
      title: "Acción climática",
      desc: "Soluciones locales frente al cambio climático",
      icon: <Globe className="w-7 h-7" />,
    },
  ];

  return (
    <section className="bg-green-50 py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">
            ¿En qué se transforma tu donación?
          </h2>
          <p className="text-gray-600">
            Cada aporte se convierte en acciones concretas que generan impacto
            ambiental y social real.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-2xl p-8 border border-green-200
                         transition hover:shadow-md hover:-translate-y-1"
            >
              {/* hover background */}
              <div className="absolute inset-0 rounded-2xl bg-green-100 opacity-0 group-hover:opacity-100 transition" />

              <div className="relative space-y-5">
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl
                                bg-green-100 text-green-700">
                  {item.icon}
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
