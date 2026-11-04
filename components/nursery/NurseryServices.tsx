"use client";

import { motion } from "framer-motion";
import {
  Sprout,
  BookOpen,
  Users,
  GraduationCap,
  Handshake,
  Recycle,
} from "lucide-react";

import { fadeUp } from "@/components/animations/fadeUp";
import { nurseryServices } from "@/data/nurseryServices";
import { useDictionary } from "@/context/DictionaryProvider";

const icons = [
  Sprout,
  BookOpen,
  Users,
  GraduationCap,
  Handshake,
  Recycle,
];

export default function NurseryServices() {
  const dict = useDictionary();
  const t = dict.nursery.services;

  return (
    <section className="bg-emerald-50/50 py-28 px-6">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* HEADER */}
        <div className="max-w-3xl space-y-6">
          <motion.span
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-emerald-700"
          >
            {t.eyebrow}
          </motion.span>

          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold leading-tight"
          >
            {t.title}
          </motion.h2>

          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-700"
          >
            {t.description}
          </motion.p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {nurseryServices.map((service, index) => {
            const Icon = icons[index];
            const item = t.items[service.key];

            return (
              <motion.article
                key={service.key}
                variants={fadeUp(index * 0.05)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-8 border border-emerald-100
                hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                {/* ICON */}
                <div
                  className="w-12 h-12 flex items-center justify-center
                  rounded-xl bg-emerald-100 text-emerald-700 mb-6
                  group-hover:bg-emerald-600 group-hover:text-white transition"
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* BADGE */}
                <span
                  className="inline-block mb-3 px-3 py-1 text-xs font-medium
                  bg-emerald-50 text-emerald-700 rounded-full"
                >
                  {item.badge}
                </span>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}