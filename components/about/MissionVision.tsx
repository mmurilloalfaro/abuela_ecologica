"use client";

import { Leaf, Target } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";
import { Card } from "./AboutHelpers";

export default function MissionVision() {
  return (
    <section className="relative px-6 py-28 bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.08),_transparent_60%)]" />

      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl space-y-4"
        >
          <h2 className="text-3xl md:text-4xl  font-semibold">
            Nuestra dirección institucional
          </h2>
          <p className="text-lg text-gray-600">
            Definimos con claridad lo que hacemos hoy y el futuro que queremos construir.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          <Card
            title="Nuestra misión"
            subtitle="Acción ambiental con sentido humano"
            icon={<Target className="w-14 h-14" />}
            highlight
          >
            Velar por el uso responsable de los recursos naturales, restaurar el
            ambiente y promover estilos de vida sostenibles junto a las
            comunidades.
          </Card>

          <Card
            title="Nuestra visión"
            subtitle="Un futuro justo y sostenible"
            icon={<Leaf className="w-14 h-14" />}
          >
            Ser una fundación referente en acción ambiental comunitaria,
            impulsando territorios sostenibles y ecosistemas sanos.
          </Card>
        </div>
      </div>
    </section>
  );
}