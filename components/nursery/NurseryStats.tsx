"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";
import {
  Leaf,
  Users,
  GraduationCap,
  TreePine,
} from "lucide-react";

const stats = [
  {
    value: "120+",
    title: "Especies forestales",
    description: "Especies nativas producidas para restauración ecológica.",
    icon: Leaf,
  },
  {
    value: "3.000+",
    title: "Árboles al año",
    description: "Plántulas destinadas a proyectos comunitarios y ambientales.",
    icon: TreePine,
  },
  {
    value: "300+",
    title: "Personas capacitadas",
    description: "Procesos formativos en viverismo y educación ambiental.",
    icon: Users,
  },
  {
    value: "3+",
    title: "Universidades aliadas",
    description: "Trabajo conjunto en prácticas, TCU e investigación.",
    icon: GraduationCap,
  },
];

export default function NurseryStats() {
  return (
    <section className="bg-green-950 text-white py-28 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* HEADER */}
        <div className="max-w-3xl space-y-5">
          <motion.span
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-green-300"
          >
            El vivero en cifras
          </motion.span>

          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold leading-tight"
          >
            Capacidad técnica al servicio del territorio
          </motion.h2>
        </div>

        {/* STATS */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                variants={fadeUp(index * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-800 text-green-200">
                  <Icon className="w-6 h-6" />
                </div>

                <p className="text-4xl font-semibold">
                  {stat.value}
                </p>

                <p className="text-sm text-green-100/80">
                  <span className="font-medium text-green-100">
                    {stat.title}.
                  </span>{" "}
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
