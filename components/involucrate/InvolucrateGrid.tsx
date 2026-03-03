"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";
import { volunteeringOptions } from "@/data/volunteering";
import { VolunteeringModal } from "./VolunteeringModal";

export default function InvolucrateGrid() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedOption = volunteeringOptions.find(
    (o) => o.id === selectedId
  );

  return (
    <>
      {/* GRID */}
      <section className="px-6 py-28 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">

          <div className="grid gap-10 md:grid-cols-3">
            {volunteeringOptions.map((option, index) => {
              const Icon = option.icon;

              return (
                <motion.article
                  key={option.id}
                  variants={fadeUp(index * 0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group bg-gray-50 border border-gray-200 rounded-2xl p-8
                  flex flex-col justify-between transition
                  hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 flex items-center justify-center
                    rounded-xl bg-green-100 text-green-700">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-semibold">
                      {option.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {option.description}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedId(option.id)}
                    className="pt-8 text-left text-sm font-medium text-green-700
                    hover:text-green-600 transition"
                  >
                    {option.cta} →
                  </button>
                </motion.article>
              );
            })}
          </div>

        </div>
      </section>

      {/* MODAL */}
      {selectedOption && (
        <VolunteeringModal
          option={selectedOption}
          onClose={() => setSelectedId(null)}
        />
      )}
    </>
  );
}
