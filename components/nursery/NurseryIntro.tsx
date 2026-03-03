"use client";

import { motion } from "framer-motion";
import { Leaf, Users, GraduationCap, MapPin, Clock, HandHeart } from "lucide-react";
import { fadeUp } from "@/components/animations/fadeUp";

const highlights = [
  {
    icon: Leaf,
    title: "Producción forestal",
    text: "Más de 120 especies forestales producidas cada año para restauración ecológica.",
  },
  {
    icon: GraduationCap,
    title: "Educación ambiental",
    text: "Espacio formativo para universidades, colegios y procesos comunitarios.",
  },
  {
    icon: Users,
    title: "Participación comunitaria",
    text: "Voluntariado nacional e internacional y Trabajo Comunal Universitario.",
  },
];

export default function NurseryIntro() {
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
              El vivero, la base de nuestro trabajo
            </h2>

            <p className="text-gray-700 leading-relaxed">
              El vivero forestal de Fundación Abuela Ecológica es el principal
              espacio operativo de la organización y el punto de partida de
              nuestras acciones de restauración, educación ambiental e
              inclusión comunitaria.
            </p>
          </motion.div>

          {/* HIGHLIGHTS */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp(0.1 * (index + 1))}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-4 p-4 rounded-xl border border-emerald-100 bg-white hover:shadow-sm transition"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-700 leading-relaxed"
          >
            El vivero funciona en un terreno facilitado por la Municipalidad
            de San Carlos y recibe visitas únicamente con coordinación previa,
            garantizando experiencias educativas seguras y organizadas.
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
          <div className="flex gap-4">
            <Clock className="w-5 h-5 text-emerald-700 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Horario de atención</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Lunes a viernes: 8:00 a.m. – 2:00 p.m.</li>
                <li>Sábados: 8:00 a.m. – 12:00 m.d.</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <MapPin className="w-5 h-5 text-emerald-700 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Visitas y participación</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Visitas educativas con coordinación previa</li>
                <li>Grupos escolares y comunitarios</li>
                <li>TCU / Trabajo Comunal</li>
                <li>Voluntariado nacional e internacional</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <HandHeart className="w-5 h-5 text-emerald-700 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Donaciones en especie</h3>
              <p className="text-sm text-gray-700">
                Se reciben semillas, bolsas, sustratos, abonos y otros insumos
                necesarios para la producción forestal.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
