"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";

import { fadeUp } from "@/components/animations/fadeUp";
import { useDictionary } from "@/data/context/DictionaryProvider";

export default function NurserySchedule() {
  const dict = useDictionary();
  const t = dict.nursery.schedule;

  return (
    <section className="bg-green-950 text-white py-28 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* INFO */}
        <div className="space-y-10">

          {/* HEADER */}
          <div className="max-w-xl space-y-6">
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

            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-green-100/90"
            >
              {t.description}
            </motion.p>
          </div>

          {/* DETAILS */}
          <div className="space-y-6">

            {/* HOURS */}
            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-green-800 text-green-200 shrink-0">
                <Clock className="w-5 h-5" />
              </div>

              <div>
                <p className="font-medium">{t.hours.title}</p>
                <p className="text-sm text-green-100/80">
                  {t.hours.weekdays}
                  <br />
                  {t.hours.saturday}
                </p>
              </div>
            </motion.div>

            {/* LOCATION */}
            <motion.div
              variants={fadeUp(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-green-800 text-green-200 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>

              <div>
                <p className="font-medium">{t.location.title}</p>
                <p className="text-sm text-green-100/80">
                  {t.location.name}
                  <br />
                  {t.location.address}
                </p>
              </div>
            </motion.div>
          </div>

          {/* NAVIGATION BUTTONS */}
          <motion.div
            variants={fadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            {/* GOOGLE MAPS */}
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
              {t.navigation.googleMaps}
            </a>

            {/* WAZE */}
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
              {t.navigation.waze}
            </a>
          </motion.div>
        </div>

        {/* MAP + NOTES */}
        <div className="space-y-8">

          {/* GOOGLE MAP EMBED */}
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
              title={t.map.title}
            />
          </motion.div>

          {/* VISIT NOTES */}
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
                {t.notes.title}
              </h3>
            </div>

            <ul className="space-y-3 text-sm text-green-100/80 list-disc list-inside">
              {t.notes.items.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}