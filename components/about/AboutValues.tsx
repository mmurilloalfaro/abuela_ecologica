"use client";

import { Leaf, Handshake, Scale } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";

type Value = {
  icon: any;
  title: string;
  text: string;
};

const values: Value[] = [
  {
    icon: Leaf,
    title: "Conciencia ambiental",
    text: "Asumimos responsabilidad por el impacto de nuestras acciones.",
  },
  {
    icon: Handshake,
    title: "Respeto ambiental",
    text: "Reconocemos los límites del planeta y todas las formas de vida.",
  },
  {
    icon: Scale,
    title: "Justicia ambiental",
    text: "La equidad social y ambiental son inseparables.",
  },
];

export default function AboutValues() {
  return (
    <section className="px-6 py-24 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-16">

        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          Nuestros valores
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                variants={fadeUp(index * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-10 text-center space-y-6 border border-gray-200 shadow-sm transition-all duration-300 hover:border-green-600 hover:shadow-md focus-within:border-green-600 focus-within:shadow-md"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-transparent rounded-t-2xl transition-colors duration-300 group-hover:bg-green-600" />

                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 text-green-700 transition-colors duration-300 group-hover:bg-green-200">
                    <Icon size={32} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-green-700">
                  {value.title}
                </h3>

                {/* Text */}
                <p className="text-gray-600">
                  {value.text}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}