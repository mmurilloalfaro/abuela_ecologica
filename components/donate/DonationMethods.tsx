"use client";

import { Landmark, Smartphone, ShieldCheck, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";
import { useDictionary } from "@/data/context/DictionaryProvider";
import PaypalDonateButton from "./PaypalDonateButton";

export default function DonationMethods() {
  const dict = useDictionary();
  const t = dict.donate.methods;

  return (
    <section className="py-28 px-6 bg-gradient-to-b from-white to-green-50/40">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* HEADER */}
        <motion.header
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-700 bg-green-100 px-4 py-1 rounded-full">
            <ShieldCheck className="w-4 h-4" />
            {t.eyebrow}
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            {t.title}{" "}
            <span className="text-green-700">
              {t.highlight}
            </span>
          </h2>

          <p className="text-lg text-gray-700">
            {t.description}
          </p>
        </motion.header>

        {/* MÉTODOS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* TRANSFERENCIA BANCARIA */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-600 hover:shadow-md space-y-6"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-transparent rounded-t-2xl transition-colors duration-300 group-hover:bg-green-600" />

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-700 transition-colors duration-300 group-hover:bg-green-200">
              <Landmark className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-green-700">
              {t.bank.title}
            </h3>

            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <span className="font-medium">{t.bank.ibanDollars}</span>
                <br />
                <span className="font-mono text-gray-900">
                  CR66015202001278827997
                </span>
              </p>

              <p>
                <span className="font-medium">{t.bank.ibanColones}</span>
                <br />
                <span className="font-mono text-gray-900">
                  CR50015202001278827218
                </span>
              </p>

              <p>
                <span className="font-medium">{t.bank.legalId}</span>
                <br />
                <span className="font-mono text-gray-900">
                  3-006-772098
                </span>
              </p>
            </div>

            <p className="text-xs text-gray-500">
              {t.bank.note}
            </p>
          </motion.div>

          {/* SINPE MÓVIL */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-600 hover:shadow-md space-y-6"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-transparent rounded-t-2xl transition-colors duration-300 group-hover:bg-green-600" />

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-700 transition-colors duration-300 group-hover:bg-green-200">
              <Smartphone className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-green-700">
              {t.sinpe.title}
            </h3>

            <p className="text-sm text-gray-700">
              {t.sinpe.description}
            </p>

            <p className="text-2xl font-mono font-semibold text-gray-900">
              7034-2957
            </p>

            <p className="text-xs text-gray-500">
              {t.sinpe.beneficiary}
            </p>
          </motion.div>

          {/* PAYPAL */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-600 hover:shadow-md space-y-6"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-transparent rounded-t-2xl transition-colors duration-300 group-hover:bg-green-600" />

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-700 transition-colors duration-300 group-hover:bg-green-200">
              <Globe className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-green-700">
              {t.paypal.title}
            </h3>

            <p className="text-sm text-gray-700">
              {t.paypal.description}
            </p>

            <PaypalDonateButton />

            <p className="text-xs text-gray-500">
              {t.paypal.note}
            </p>
          </motion.div>
        </div>

        {/* CIERRE */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group relative bg-white rounded-2xl p-10 border border-gray-200 shadow-sm transition-all duration-300 hover:border-green-600 hover:shadow-md text-center space-y-4"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-transparent rounded-t-2xl transition-colors duration-300 group-hover:bg-green-600" />

          <p className="text-sm text-gray-700 max-w-3xl mx-auto">
            {t.closing.description}
          </p>

          <p className="text-sm font-semibold text-green-800">
            {t.closing.statement}
          </p>
        </motion.div>

      </div>
    </section>
  );
}