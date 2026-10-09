"use client";

import { Leaf, Handshake, Scale } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";
import { useDictionary } from "@/context/DictionaryProvider";

export default function AboutValues() {
  const dict = useDictionary();

  const values = [
    {
      icon: Leaf,
      title: dict.aboutValues.values.items.consciousness.title,
      text: dict.aboutValues.values.items.consciousness.text,
    },
    {
      icon: Handshake,
      title: dict.aboutValues.values.items.respect.title,
      text: dict.aboutValues.values.items.respect.text,
    },
    {
      icon: Scale,
      title: dict.aboutValues.values.items.justice.title,
      text: dict.aboutValues.values.items.justice.text,
    },
  ];

  return (
    <section className="px-6 py-24 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-16">

        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          {dict.aboutValues.values.title}
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
                <div className="absolute top-0 left-0 w-full h-1 bg-transparent rounded-t-2xl transition-colors duration-300 group-hover:bg-green-600" />

                <div className="flex justify-center">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 text-green-700 transition-colors duration-300 group-hover:bg-green-200">
                    <Icon size={32} />
                  </div>
                </div>

                <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-green-700">
                  {value.title}
                </h3>

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