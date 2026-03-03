"use client";

import { Landmark, Smartphone, ShieldCheck, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";
import PaypalDonateButton from "./PaypalDonateButton";

export default function DonationMethods() {
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
            Donar es sembrar futuro
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Donaciones seguras, transparentes
            <span className="text-green-700"> y con impacto real</span>
          </h2>

          <p className="text-lg text-gray-700">
            Cada aporte se convierte en acciones concretas: educación ambiental,
            restauración de ecosistemas y trabajo directo con comunidades.
          </p>
        </motion.header>

        {/* MÉTODOS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Transferencia */}
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
              Transferencia bancaria
            </h3>

            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <span className="font-medium">IBAN dólares</span><br />
                <span className="font-mono text-gray-900">
                  CR66015202001278827997
                </span>
              </p>

              <p>
                <span className="font-medium">IBAN colones</span><br />
                <span className="font-mono text-gray-900">
                  CR50015202001278827218
                </span>
              </p>

              <p>
                <span className="font-medium">Cédula jurídica</span><br />
                <span className="font-mono text-gray-900">
                  3-006-772098
                </span>
              </p>
            </div>

            <p className="text-xs text-gray-500">
              Transferencias verificables y auditables.
            </p>
          </motion.div>

          {/* SINPE */}
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
              SINPE Móvil
            </h3>

            <p className="text-sm text-gray-700">
              Donación rápida y directa desde Costa Rica.
            </p>

            <p className="text-2xl font-mono font-semibold text-gray-900">
              6063-8498
            </p>

            <p className="text-xs text-gray-500">
              Fundación Abuela Ecológica
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
              Donación internacional
            </h3>

            <p className="text-sm text-gray-700">
              Desde cualquier parte del mundo. Seguro y confiable.
            </p>

            <PaypalDonateButton />

            <p className="text-xs text-gray-500">
              Acepta tarjetas de crédito y saldo PayPal.
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
            Todos los aportes se destinan exclusivamente a programas de educación
            ambiental, restauración ecológica y fortalecimiento comunitario.
          </p>

          <p className="text-sm font-semibold text-green-800">
            Rendimos cuentas porque la confianza también se cultiva.
          </p>
        </motion.div>

      </div>
    </section>
  );
}