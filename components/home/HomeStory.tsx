"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";

export default function HomeStory() {
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
            Nuestra historia nace de un río
          </motion.h2>

          <motion.p
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Fundación Abuela Ecológica nació en la Zona Norte de Costa Rica, 
            a la orilla de un río que estaba perdiendo su bosque.
          </motion.p>

          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            A sus 80 años, doña Bertalia González decidió no quedarse de brazos cruzados. 
            Comenzó a germinar semillas en su casa y a reforestar con especies nativas 
            las orillas donde antes había vida abundante.
          </motion.p>

          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            No lo hizo por reconocimiento. Lo hizo por los animales, por la tierra 
            y por quienes aún no habían nacido.
          </motion.p>

          <motion.p
            variants={fadeUp(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="italic font-medium text-green-900"
          >
            “Hay que sembrar árboles para dejar vida a los niños que aún no han nacido.”
          </motion.p>

          <motion.p
            variants={fadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-semibold text-green-950"
          >
            Por San Carlos, Costa Rica y el mundo.
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
            alt="Inicios Abuela Ecológica"
            fill
            className="object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}