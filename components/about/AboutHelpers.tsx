"use client";

import { motion } from "framer-motion";

export const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

/* ---------- Card ---------- */
type CardProps = {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  highlight?: boolean;
  children: React.ReactNode;
};

export function Card({
  title,
  subtitle,
  icon,
  highlight = false,
  children,
}: CardProps) {
  return (
    <div
      className={`relative rounded-2xl p-10 border
        ${highlight ? "bg-green-50 border-green-200" : "bg-white border-gray-200"}
      `}
    >
      {icon && (
        <span className="absolute top-6 right-6 text-green-100">
          {icon}
        </span>
      )}

      <h2 className="text-2xl font-semibold mb-3">{title}</h2>

      <p className="text-sm uppercase tracking-wide text-green-700 mb-6">
        {subtitle}
      </p>

      <p className="text-gray-800 leading-relaxed">{children}</p>
    </div>
  );
}

/* ---------- ValueCard ---------- */
type ValueCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

export function ValueCard({ icon, title, text }: ValueCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white border border-green-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-100 text-green-700 mb-5">
        {icon}
      </div>

      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{text}</p>
    </motion.div>
  );
}

/* ---------- Principle ---------- */
type PrincipleProps = {
  icon: React.ReactNode;
  title: string;
};

export function Principle({ icon, title }: PrincipleProps) {
  return (
    <div className="flex gap-4 p-6 border border-gray-200 rounded-xl">
      <div className="text-green-600">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}
