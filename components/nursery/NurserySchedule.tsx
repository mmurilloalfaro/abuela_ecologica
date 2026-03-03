"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";
import { MapPin, Clock, AlertCircle, Navigation } from "lucide-react";
import Image from "next/image";

export default function NurserySchedule() {
  return (
    <section className="bg-green-950 text-white py-28 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* INFO */}
        <div className="space-y-10">

          {/* Header */}
          <div className="max-w-xl space-y-6">
            <motion.span
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block text-sm font-medium text-green-300"
            >
              Visitas al vivero
            </motion.span>

            <motion.h2
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold leading-tight"
            >
              Horarios y ubicación
            </motion.h2>

            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-green-100/90"
            >
              El vivero forestal es un espacio activo de producción,
              formación y conservación. Las visitas se reciben
              con coordinación previa.
            </motion.p>
          </div>

          {/* Details */}
          <div className="space-y-6">

            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-green-800 text-green-200">
                <Clock className="w-5 h-5" />
              </div>

              <div>
                <p className="font-medium">Horario de atención</p>
                <p className="text-sm text-green-100/80">
                  Lunes a viernes: 8:00 a.m. – 2:00 p.m.<br />
                  Sábados: 8:00 a.m. – 12:00 m.d.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-green-800 text-green-200">
                <MapPin className="w-5 h-5" />
              </div>

              <div>
                <p className="font-medium">Ubicación</p>
                <p className="text-sm text-green-100/80">
                  Vivero Forestal Fundación Abuela Ecológica<br />
                  Provincia de Alajuela, Cd. Quesada, Barrio El Jardín
                </p>
              </div>
            </motion.div>
          </div>


          {/* Navigation Buttons */}
          <motion.div
            variants={fadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            {/* Google Maps */}
            <a
              href="https://maps.app.goo.gl/juVdfoqtrvopood2A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-300"
            >
              <Image
                src="/logos/googlemaps.svg"
                alt="Google Maps"
                width={18}
                height={18}
              />
              Google Maps
            </a>

            {/* Waze */}
            <a
              href="https://waze.com/ul/hd1gfy8tbu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#33CCFF] text-black text-sm font-medium hover:bg-[#28b8e6] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <Image
                src="/logos/waze.svg"
                alt="Waze"
                width={20}
                height={20}
              />
              Waze
            </a>
          </motion.div>
        </div>

        {/* MAP + NOTES */}
        <div className="space-y-8">

          {/* Google Map Embed */}
          <motion.div
            variants={fadeUp(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-green-800 shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.147876900973!2d-84.43534308913787!3d10.330048467225499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0652f3212f8b9%3A0x93a775dfe840e2b0!2sVivero%20Fundaci%C3%B3n%20Abuela%20Ecol%C3%B3gica!5e0!3m2!1ses!2sus!4v1772569630921!5m2!1ses!2sus"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Ubicación Vivero Fundación Abuela Ecológica"
            />
          </motion.div>

          {/* Notes */}
          <motion.div
            variants={fadeUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-green-900/60 border border-green-800 rounded-2xl p-8 space-y-6"
          >
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-green-300" />
              <h3 className="text-xl font-semibold">
                Consideraciones para visitas
              </h3>
            </div>

            <ul className="space-y-3 text-sm text-green-100/80 list-disc list-inside">
              <li>Las visitas deben coordinarse previamente.</li>
              <li>Atendemos centros educativos, adultos mayores y visitas particulares.</li>
              <li>Grupos de niñez asisten acompañados por docentes y familias.</li>
              <li>El vivero es un espacio de trabajo activo durante todo el año.</li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}