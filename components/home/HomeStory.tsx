"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";
import { useDictionary } from "@/context/DictionaryProvider";

export default function HomeStory() {
  const dict = useDictionary();

  return (
    <section
      id="story"
      className="scroll-mt-32 bg-white pt-28 pb-32 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* TEXT */}
        <div className="space-y-6">
          <motion.h2
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-semibold text-green-950"
          >
            {dict.story.title}
          </motion.h2>

          <motion.p
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            {dict.story.paragraph1}
          </motion.p>

          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            {dict.story.paragraph2}
          </motion.p>

          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            {dict.story.paragraph3}
          </motion.p>

          <motion.p
            variants={fadeUp(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="italic font-medium text-green-900"
          >
            {dict.story.quote}
          </motion.p>

          <motion.p
            variants={fadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-semibold text-green-950"
          >
            {dict.story.closing}
          </motion.p>
        </div>

        {/* IMAGE */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/inicio.jpeg"
            alt={dict.story.imageAlt}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}