"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";

export default function InvolucrateHero() {
  return (
    <section className="relative bg-green-950 text-white py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-10 relative z-10">

        {/* Eyebrow */}
        <motion.span
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block text-sm font-medium text-green-300"
        >
          Participación y comunidad
        </motion.span>

        {/* Title */}
        <motion.h1
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold leading-tight max-w-4xl"
        >
          Involúcrate
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg md:text-xl text-green-100/90 max-w-3xl"
        >
          Hay muchas formas de apoyar la conservación y el trabajo comunitario.
          Encontrá la que mejor se alinea con vos.
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-12 text-sm text-green-200/70"
        >
          ↓ Explorá las opciones
        </motion.div>

      </div>

      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-950 via-green-950 to-black/20" />
    </section>
  );
}
