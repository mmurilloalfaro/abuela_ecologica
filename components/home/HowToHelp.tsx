"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";
import HelpCard from "@/components/cards/HelpCard";
import { helpOptions } from "@/data/helpOptions";

interface HowToHelpProps {
  dictionary: {
    title: string;
    description: string;
    options: {
      donate: { title: string; description: string };
      volunteer: { title: string; description: string };
      alliances: { title: string; description: string };
    };
  };
}

export default function HowToHelp({ dictionary }: HowToHelpProps) {
  return (
    <section
      id="how-to-help"
      className="scroll-mt-24 bg-gray-50 text-black py-28 px-6"
    >
      <div className="max-w-6xl mx-auto space-y-24">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <motion.h2
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold"
          >
            {dictionary.title}
          </motion.h2>

          <motion.p
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-600 text-lg"
          >
            {dictionary.description}
          </motion.p>
        </div>

        {/* CARDS */}
        <div className="grid gap-12 md:grid-cols-3">
          {helpOptions.map((option, index) => {
            const localized = dictionary.options[option.id as keyof typeof dictionary.options];

            return (
              <HelpCard
                key={option.id}
                option={{
                  ...option,
                  title: localized.title,
                  description: localized.description,
                }}
                index={index}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}