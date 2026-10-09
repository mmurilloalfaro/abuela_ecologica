"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";
import { useDictionary } from "@/context/DictionaryProvider";


export default function AboutStory() {
  const dict = useDictionary();

  return (
    <section className="relative py-28 px-6 bg-green-50 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,_rgba(22,163,74,0.08),_transparent_60%)]" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-sm font-medium text-green-700 uppercase tracking-wide">
              {dict.aboutStory.eyebrow}
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-green-900 leading-tight">
              {dict.aboutStory.title}
            </h2>
          </div>

          <p className="text-gray-800 leading-relaxed text-lg">
            {dict.aboutStory.p1}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {dict.aboutStory.p2}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {dict.aboutStory.p3}
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-green-200/40 rounded-3xl blur-2xl" />

          <img
            src="/founder/bertalia02.JPG"
            alt="Bertalia González Villalobos"
            className="relative rounded-3xl shadow-xl object-cover w-full h-[420px] md:h-[480px]"
          />
        </motion.div>

      </div>
    </section>
  );
}