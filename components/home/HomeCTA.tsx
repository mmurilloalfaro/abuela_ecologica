"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";

export default function HomeCTA() {
  return (
    <section className="bg-green-950 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">

        <motion.h3
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold"
        >
          El futuro se construye hoy.
        </motion.h3>

        <motion.p
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg text-white/85"
        >
          Cada acción cuenta. Cada persona suma.
          Juntos podemos proteger la naturaleza y fortalecer comunidades.
        </motion.p>

        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-4"
        >
          <Link
            href="/donate"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-green-500 text-black font-medium hover:bg-green-400 transition"
          >
            Apoyar la fundación
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
