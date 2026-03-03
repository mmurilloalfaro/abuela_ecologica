"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";
import HelpCard from "@/components/cards/HelpCard";
import { helpOptions } from "@/data/helpOptions";

export default function HowToHelp() {
  return (
    <section
      id="how-to-help"
      className="scroll-mt-24 bg-gray-50 text-black py-28 px-6"
    >
      <div className="max-w-6xl mx-auto space-y-24">

        <div className="text-center max-w-3xl mx-auto space-y-5">
          <motion.h2
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold"
          >
            ¿Cómo podés ser parte?
          </motion.h2>

          <motion.p
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-600 text-lg"
          >
            Sumarte es sencillo. Cada forma de apoyo fortalece el trabajo
            ambiental y comunitario que realizamos día a día.
          </motion.p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {helpOptions.map((option, index) => (
            <HelpCard key={option.id} option={option} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}