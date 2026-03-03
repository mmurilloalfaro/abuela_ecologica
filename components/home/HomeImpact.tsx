"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";
import {
  Trees,
  School,
  Handshake,
  GraduationCap,
} from "lucide-react";

export default function HomeImpact() {
  return (
    <section className="bg-green-950 text-white py-28 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* HEADER */}
        <div className="max-w-3xl space-y-6">
          <motion.span
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-green-300"
          >
            Nuestro impacto
          </motion.span>

          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold leading-tight"
          >
            Resultados concretos desde 2018
          </motion.h2>

          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-green-100/90"
          >
            Nuestro trabajo se mide en acciones sostenidas, alianzas reales
            y beneficios tangibles para el territorio.
          </motion.p>
        </div>

        {/* METRICS */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Árboles */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-800 text-green-200">
              <Trees className="w-6 h-6" />
            </div>

            <p className="text-4xl font-semibold">
              +55.000
            </p>

            <p className="text-sm text-green-100/80">
              Árboles plantados en la Zona Norte desde la constitución
              de la fundación.
            </p>
          </motion.div>

          {/* Escuelas */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-800 text-green-200">
              <School className="w-6 h-6" />
            </div>

            <p className="text-4xl font-semibold">
              +50
            </p>

            <p className="text-sm text-green-100/80">
              Centros educativos visitados en los últimos cinco años,
              promoviendo educación ambiental.
            </p>
          </motion.div>

          {/* Alianzas */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-800 text-green-200">
              <Handshake className="w-6 h-6" />
            </div>

            <p className="text-4xl font-semibold">
              20
            </p>

            <p className="text-sm text-green-100/80">
              Alianzas activas con ASADAS, municipalidades
              y otras instituciones públicas.
            </p>
          </motion.div>

          {/* TCU */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-800 text-green-200">
              <GraduationCap className="w-6 h-6" />
            </div>

            <p className="text-4xl font-semibold">
              200
            </p>

            <p className="text-sm text-green-100/80">
              Estudiantes de colegio y universidad que han realizado su Trabajo Comunal con nosotros.
            </p>
          </motion.div>

        </div>

        {/* CIERRE */}
        <motion.p
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl text-sm text-green-100/70"
        >
          Cada cifra representa procesos sostenidos en el tiempo,
          construidos junto a comunidades, instituciones y nuevas generaciones.
        </motion.p>

      </div>
    </section>
  );
}
