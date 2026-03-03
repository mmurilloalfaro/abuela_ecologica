"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";
import { nurseryImages } from "@/data/nurseryImages";

export default function NurseryGallery() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* HEADER */}
        <div className="max-w-3xl space-y-5">
          <motion.span
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-emerald-700"
          >
            El vivero en acción
          </motion.span>

          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold leading-tight"
          >
            Un espacio vivo de restauración y aprendizaje
          </motion.h2>

          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-700"
          >
            El vivero forestal es un punto de encuentro entre conservación,
            educación ambiental, voluntariado e inclusión social.
          </motion.p>
        </div>

        {/* GALLERY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {nurseryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeUp(index * 0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden rounded-xl group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
