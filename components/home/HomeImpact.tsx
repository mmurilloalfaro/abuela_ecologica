"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";
import {
  Trees,
  School,
  Handshake,
  GraduationCap,
} from "lucide-react";
import { useDictionary } from "@/context/DictionaryProvider";

export default function HomeImpact() {
  const dict = useDictionary();

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
            {dict.impact.badge}
          </motion.span>

          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold leading-tight"
          >
            {dict.impact.title}
          </motion.h2>

          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-green-100/90"
          >
            {dict.impact.description}
          </motion.p>
        </div>

        {/* METRICS */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Trees */}
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
              {dict.impact.metrics.trees.value}
            </p>

            <p className="text-sm text-green-100/80">
              {dict.impact.metrics.trees.label}
            </p>
          </motion.div>

          {/* Schools */}
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
              {dict.impact.metrics.schools.value}
            </p>

            <p className="text-sm text-green-100/80">
              {dict.impact.metrics.schools.label}
            </p>
          </motion.div>

          {/* Partnerships */}
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
              {dict.impact.metrics.partnerships.value}
            </p>

            <p className="text-sm text-green-100/80">
              {dict.impact.metrics.partnerships.label}
            </p>
          </motion.div>

          {/* Students */}
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
              {dict.impact.metrics.students.value}
            </p>

            <p className="text-sm text-green-100/80">
              {dict.impact.metrics.students.label}
            </p>
          </motion.div>

        </div>

        {/* CLOSING */}
        <motion.p
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl text-sm text-green-100/70"
        >
          {dict.impact.closing}
        </motion.p>

      </div>
    </section>
  );
}