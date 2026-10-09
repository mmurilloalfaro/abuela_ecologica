"use client";

import { principles } from "@/data/principles";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";
import { useDictionary } from "@/context/DictionaryProvider";

export default function AboutPrinciples() {
  const dict = useDictionary();

  return (
    <section className="px-6 py-24 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <header className="max-w-3xl space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold">
            {dict.aboutPrinciples.principles.title}
          </h2>
          <p className="text-lg text-gray-600">
            {dict.aboutPrinciples.principles.subtitle}
          </p>
        </header>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <motion.div
                key={principle.id}
                variants={fadeUp(index * 0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group flex items-start gap-5 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:border-green-600 hover:shadow-md"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-700 transition-colors duration-300 group-hover:bg-green-200">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-green-700">
                  {dict.aboutPrinciples.principles.items[principle.id]}
                </h3>
              </motion.div>
            );
          })}
        </div>

        {/* Compact Impact Block */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-2xl bg-green-900 text-white px-8 py-10 md:px-12 md:py-12"
        >
          <div className="max-w-2xl space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold">
              {dict.aboutPrinciples.principles.impact.title}
            </h3>
            <p className="text-white/90 leading-relaxed">
              {dict.aboutPrinciples.principles.impact.text}
            </p>
          </div>

          <div className="absolute bottom-0 left-0 w-24 h-1 bg-green-400 rounded-bl-2xl" />
        </motion.div>

      </div>
    </section>
  );
}