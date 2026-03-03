"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fadeUp";
import { HelpOption } from "@/types/help";

type HelpCardProps = {
  option: HelpOption;
  index: number;
};

export default function HelpCard({ option, index }: HelpCardProps) {
  const Icon = option.icon;

  return (
    <motion.div
      variants={fadeUp(index * 0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl p-10 text-center space-y-6 border border-gray-200 shadow-sm transition-all duration-300 hover:border-green-600 hover:shadow-md focus-within:border-green-600 focus-within:shadow-md"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-transparent rounded-t-2xl transition-colors duration-300 group-hover:bg-green-600" />

      <div className="flex justify-center">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 text-green-700 transition-colors duration-300 group-hover:bg-green-200">
          <Icon size={32} />
        </div>
      </div>

      <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-green-700">
        {option.title}
      </h3>

      <p className="text-gray-600">
        {option.description}
      </p>

      <Link
        href={option.href}
        target={option.external ? "_blank" : undefined}
        rel={option.external ? "noopener noreferrer" : undefined}
        className="inline-flex items-center gap-2 text-sm font-medium text-green-700 transition-colors duration-300 group-hover:text-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-600 rounded-sm"
      >
        {option.external ? "Sumate" : "Conocé más"}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}