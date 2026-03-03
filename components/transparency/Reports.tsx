"use client";

import { reports } from "@/data/reports";
import Link from "next/link";
import { FileText, Download, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";

export default function Reports() {
  return (
    <section className="px-6 py-28 bg-white">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* HEADER */}
        <motion.header
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 bg-emerald-100 px-4 py-1 rounded-full">
            <ShieldCheck className="w-4 h-4" />
            Transparencia institucional
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Informes y rendición de cuentas
          </h2>

          <p className="text-lg text-gray-700">
            Publicamos nuestros informes como parte del compromiso con una gestión
            ética, responsable y verificable.
          </p>
        </motion.header>

        {/* REPORTS GRID */}
        <div className="grid sm:grid-cols-2 gap-8">
          {reports.map((report, index) => (
            <motion.article
              key={report.year}
              variants={fadeUp(index * 0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative bg-white border border-gray-200 rounded-2xl p-8 space-y-5 hover:shadow-md transition"
            >
              {/* Top bar */}
              <div
                className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl
                  ${
                    report.status === "published"
                      ? "bg-emerald-500"
                      : "bg-gray-300"
                  }
                `}
              />

              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-xl
                      ${
                        report.status === "published"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-gray-100 text-gray-500"
                      }
                    `}
                  >
                    <FileText className="w-5 h-5" />
                  </div>

                  <h3 className="font-semibold text-lg leading-snug">
                    {report.title}
                  </h3>
                </div>

                <span
                  className={`shrink-0 px-3 py-1 text-xs rounded-full font-medium
                    ${
                      report.status === "published"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-gray-100 text-gray-500"
                    }
                  `}
                >
                  {report.status === "published"
                    ? report.year
                    : "Próximamente"}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {report.description}
              </p>

              {/* Action */}
              {report.status === "published" && report.file ? (
                <Link
                  href={report.file}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:underline"
                >
                  <Download className="w-4 h-4" />
                  Descargar informe (PDF)
                </Link>
              ) : (
                <span className="text-sm text-gray-400 italic">
                  Informe en proceso de publicación
                </span>
              )}
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
