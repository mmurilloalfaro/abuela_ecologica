
"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Users,
  GraduationCap,
  TreePine,
} from "lucide-react";

import { useDictionary } from "@/context/DictionaryProvider";
import { fadeUp } from "@/components/animations/fadeUp";

const statItems = [
  { key: "species" as const, icon: Leaf },
  { key: "trees" as const, icon: TreePine },
  { key: "people" as const, icon: Users },
  { key: "universities" as const, icon: GraduationCap },
];

export default function NurseryStats() {
  const dict = useDictionary();
  const t = dict.nursery.stats;

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
        </div>

        {/* STATS */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {statItems.map((item, index) => {
            const Icon = item.icon;
            const stat = t.items[item.key];

            return (
              <motion.div
                key={item.key}
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