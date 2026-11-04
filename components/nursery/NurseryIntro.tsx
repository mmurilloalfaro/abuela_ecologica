
"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Users,
  GraduationCap,
  MapPin,
  Clock,
  HandHeart,
} from "lucide-react";

import { useDictionary } from "@/context/DictionaryProvider";
import { fadeUp } from "@/components/animations/fadeUp";

const highlightItems = [
  { key: "production" as const, icon: Leaf },
  { key: "education" as const, icon: GraduationCap },
  { key: "community" as const, icon: Users },
];

export default function NurseryIntro() {
  const dict = useDictionary();
  const t = dict.nursery.introduction;

  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <div className="space-y-10">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-semibold">
              {t.title}
            </h2>

            <p className="text-gray-700 leading-relaxed">
              {t.description}
            </p>
          </motion.div>

          {/* HIGHLIGHTS */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlightItems.map((item, index) => {
              const Icon = item.icon;
              const highlight = t.highlights[item.key];

              return (
                <motion.div
                  key={item.key}
                  variants={fadeUp(0.1 * (index + 1))}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex gap-4 p-4 rounded-xl border border-emerald-100 bg-white hover:shadow-sm transition"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm mb-1">
                      {highlight.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-snug">
                      {highlight.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            variants={fadeUp(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-700 leading-relaxed"
          >
            {t.visitNote}
          </motion.p>
        </div>

        {/* RIGHT PANEL */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-emerald-50 rounded-2xl p-8 space-y-8 border border-emerald-100"
        >

          {/* HOURS */}
          <div className="flex gap-4">
            <Clock className="w-5 h-5 text-emerald-700 mt-1 shrink-0" />

            <div>
              <h3 className="font-semibold mb-1">
                {t.info.hours.title}
              </h3>

              <ul className="text-sm text-gray-700 space-y-1">
                <li>{t.info.hours.weekdays}</li>
                <li>{t.info.hours.saturday}</li>
              </ul>
            </div>
          </div>

          {/* VISITS */}
          <div className="flex gap-4">
            <MapPin className="w-5 h-5 text-emerald-700 mt-1 shrink-0" />

            <div>
              <h3 className="font-semibold mb-1">
                {t.info.visits.title}
              </h3>

              <ul className="text-sm text-gray-700 space-y-1">
                {t.info.visits.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* DONATIONS */}
          <div className="flex gap-4">
            <HandHeart className="w-5 h-5 text-emerald-700 mt-1 shrink-0" />

            <div>
              <h3 className="font-semibold mb-1">
                {t.info.donations.title}
              </h3>

              <p className="text-sm text-gray-700">
                {t.info.donations.text}
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}