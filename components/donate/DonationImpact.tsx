"use client";

import { Leaf, TreePine, Users, Globe } from "lucide-react";
import { useDictionary } from "@/context/DictionaryProvider";

export default function DonationImpact() {
  const dict = useDictionary();
  const t = dict.donate.impact;

  const items = [
    {
      key: "education",
      icon: <Leaf className="w-7 h-7" />,
    },
    {
      key: "reforestation",
      icon: <TreePine className="w-7 h-7" />,
    },
    {
      key: "communities",
      icon: <Users className="w-7 h-7" />,
    },
    {
      key: "climate",
      icon: <Globe className="w-7 h-7" />,
    },
  ] as const;

  return (
    <section className="bg-green-50 py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">
            {t.title}
          </h2>

          <p className="text-gray-600">
            {t.description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => {
            const content = t.items[item.key];

            return (
              <div
                key={item.key}
                className="group relative bg-white rounded-2xl p-8 border border-green-200
                           transition hover:shadow-md hover:-translate-y-1"
              >
                {/* Hover background */}
                <div className="absolute inset-0 rounded-2xl bg-green-100 opacity-0 group-hover:opacity-100 transition" />

                <div className="relative space-y-5">

                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl
                                  bg-green-100 text-green-700">
                    {item.icon}
                  </div>

                  {/* Text */}
                  <h3 className="text-lg font-semibold">
                    {content.title}
                  </h3>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    {content.description}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}