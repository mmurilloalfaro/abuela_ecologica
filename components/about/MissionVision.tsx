"use client";

import { Leaf, Target } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";
import { Card } from "./AboutHelpers";
import { useDictionary } from "@/context/DictionaryProvider";

export default function MissionVision() {
  const dict = useDictionary();

  return (
    <section className="relative px-6 py-28 bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.08),_transparent_60%)]" />

      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">
            {dict.missionVision.title}
          </h2>

          <p className="text-lg text-gray-600">
            {dict.missionVision.description}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          <Card
            title={dict.missionVision.mission.title}
            subtitle={dict.missionVision.mission.subtitle}
            icon={<Target className="w-14 h-14" />}
            highlight
          >
            {dict.missionVision.mission.text}
          </Card>

          <Card
            title={dict.missionVision.vision.title}
            subtitle={dict.missionVision.vision.subtitle}
            icon={<Leaf className="w-14 h-14" />}
          >
            {dict.missionVision.vision.text}
          </Card>
        </div>
      </div>
    </section>
  );
}